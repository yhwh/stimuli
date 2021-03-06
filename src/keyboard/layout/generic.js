'use strict';

(function() {
    var Dom = Stimuli.core.Dom,
        Support = Stimuli.core.Support,
        Obj = Stimuli.core.Object;

    Stimuli.keyboard.layout.Generic = {

        specialKeys: [
            'Alt',
            'Enter',
            'Tab',
            'Backspace',
            'Control',
            'ArrowLeft',
            'ArrowRight',
            'ArrowUp',
            'ArrowDown',
            'Esc',
            'Shift',
            'F1',
            'F2',
            'F3',
            'F4',
            'F5',
            'F6',
            'F7',
            'F8',
            'F9',
            'F10',
            'F11',
            'F12'
        ],

        isSpecialKey: function(key) {
            return Stimuli.core.Array.contains(this.specialKeys, key);
        },

        getUnicodeSequence: function(key, target) {

        },

        getSpecialKeySequence: function(key, target) {
            return Stimuli.keyboard.specialKey[key].getSequence(target);
        },

        isPrintableKey: function(key) {
            return !!this.table[key];
        },

        getPrintableKeySequence: function(key, target) {
            var tableEntry = this.table[key],
                pattern = this.patterns[tableEntry.pattern],
                fullSequence = pattern(tableEntry.keyCodes, tableEntry.characters, tableEntry.locations),
                defaultEventConfig = {
                    bubbles: true,
                    cancelable: true,
                    target: target
                },
                sequence = [];

            Stimuli.core.Array.forEach(fullSequence, function(eventConfig) {
                if (eventConfig.type === 'input') {
                    if (Dom.isEditable(target)) {

                        if (Support.isWebkit) {
                            sequence.push(Obj.merge({type: 'textInput', key: eventConfig.character}, defaultEventConfig));
                        } else {
                            if (Dom.isEditableInput(target) || Dom.isTextArea(target)) {
                                sequence.push(function() {
                                    Dom.updateEditableValue(target, eventConfig.character);
                                });
                            } else {
                                sequence.push(function() {
                                    Dom.updateEditableHtml(target, eventConfig.character);
                                });
                            }

                            if (!Support.isIE8 && !Support.isIE9 && !Support.isIE10 &&
                                (Dom.isEditableInput(target) || Dom.isTextArea(target))) {
                                sequence.push(Obj.merge({type: 'input'}, defaultEventConfig));
                            }
                        }

                    }
                } else {
                    sequence.push(Obj.merge(eventConfig, defaultEventConfig));
                }
            });

            return sequence;
        },

        // if there is no way to type the character in this layout we assume the user will copy and paste the character
        getPasteSequence: function(key, target) {
            var defaultEventConfig = {
                    bubbles: true,
                    cancelable: true,
                    target: target
                },
                sequence = [];
            if (Dom.isEditable(target)) {
                sequence = [Obj.merge({type: 'paste'}, defaultEventConfig)];

                if (Support.isWebkit) {
                    sequence.push(Obj.merge({type: 'textInput', key: key}, defaultEventConfig));
                } else {
                    if (Dom.isEditableInput(target) || Dom.isTextArea(target)) {
                        sequence.push(function() {
                            Dom.updateEditableValue(target, key);
                        });
                    } else {
                        sequence.push(function() {
                            Dom.updateEditableHtml(target, key);
                        });
                    }

                    if (!Support.isIE8 && !Support.isIE9 && !Support.isIE10 &&
                        (Dom.isEditableInput(target) || Dom.isTextArea(target))) {
                        sequence.push(Obj.merge({type: 'input'}, defaultEventConfig));
                    }
                }

            }
            return sequence;
        },

        getSequence: function(key, target) {
            var sequence;

            if (this.isSpecialKey(key)) {
                sequence = this.getSpecialKeySequence(key, target);
            } else if (this.isPrintableKey(key)) {
                sequence = this.getPrintableKeySequence(key, target);
            } else if (this.unicode) {
                sequence = this.getUnicodeSequence(key, target);
            } else {
                sequence = this.getPasteSequence(key, target);
            }
            return  sequence;
        }
    };

})();
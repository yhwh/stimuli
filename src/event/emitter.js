'use strict';

/**
 * @class Stimuli.event.Emitter
 * @singleton
 * Provides an abstraction layer to routes events to their corresponding synthetizers.
 */
(function() {
    
    var synthetizer = Stimuli.event.synthetizer;

    Stimuli.event.Emitter = {

        /**
         * Determines if an event is a mouse event
         * @param {String} eventType The event type
         * @return {Boolean} True if it's a mouse event
         */
        isMouseEvent: function(eventType) {
            return {
                click: true,
                mousedown: true,
                mouseup: true,
                dblclick: true,
                mouseover: true,
                mousemove: true,
                mouseout: true,
                mouseleave: true,
                mouseenter: true,
                contextmenu: true
            }[eventType] || false;
        },

        /**
         * Determines if an event is a keyboard event
         * @param {String} eventType The event type
         * @return {Boolean} True if it's a keyboard event
         */
        isKeyboardEvent: function(eventType) {
            return {
                keyup: true,
                keydown: true,
                keypress: true
            }[eventType] || false;
        },

        /**
         * Determines if an event is a text event
         * @param {String} eventType The event type
         * @return {Boolean} True if it's a text event
         */
        isTextEvent: function(eventType) {
            return {
                textinput: true,
                textInput: true
            }[eventType] || false;
        },

        /**
         * Determines if an event is a html event
         * @param {String} eventType The event type
         * @return {Boolean} True if it's a html event
         */
        isHtmlEvent: function(eventType) {
            return {
                input: true,
                paste: true
            }[eventType] || false;
        },

        /**
         * Emits the event and call the callback function
         * @param {Object} data The event configuration
         * @param {Function} callback The callback function to be called after the invent is injected.
         */
        emit: function(data, callback) {
            var eventType = data.type,
                result;

            if (this.isMouseEvent(eventType)) {
                result = synthetizer.Mouse.inject(data);
            }
            else if (this.isKeyboardEvent(eventType)) {
                result = synthetizer.Keyboard.inject(data);
            }
            else if (this.isTextEvent(eventType)) {
                result = synthetizer.Text.inject(data);
            }
            else if (this.isHtmlEvent(eventType)) {
                result = synthetizer.Html.inject(data);
            }

            callback(result.event, result.canceled);
        }

    };


})();
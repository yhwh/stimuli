'use strict';

/**
 * @class Stimuli.utils.Scheduler
 * @mixins Stimuli.utils.Observable
 * @private
 * Provides a convenient way to "buffer" the emission of data.
 * @cfg {Number} speed The emission speed
 * @cfg {Number} interval The emission interval in ms
 * @constructor
 * Creates a new scheduler
 * @param {Object} config The config object
 */

(function() {

    Stimuli.utils.Scheduler = function(options) {
        this.options = options;
        this.queue = [];
        this.locked = false;
    };

    // Applies Observable mixin
    Stimuli.utils.Object.merge(Stimuli.utils.Scheduler.prototype, Stimuli.utils.Observable);

    /**
     * Receives data to emit.
     * @param {Object} data The data to emit.
     */
    Stimuli.utils.Scheduler.prototype.receive = function(data) {

        var me = this;

        me.queue.push(data);

        emit(me);

    };

    /**
     * @private
     * Schedules emission of received data   
     */
    function emit(me) {

        if (me.locked || me.queue.length === 0) {
            return;
        }

        me.locked = true;

        var data = me.queue.shift(),
            fn = data.callback || function() {};

        delete data.callback;

        var callback = function() {
            var args = Array.prototype.slice.call(arguments, 0);

            // asynchronous action callback
            if (fn.length > args.length) {
                // adding a function as last argument to allow the execution
                // of the next device action
                args.push(function() {
                    me.locked = false;
                    emit(me);
                });

                fn.apply(me, args);
                // synchronous action callback
            } else {
                fn.apply(me, args);
                me.locked = false;
                emit(me);
            }

        };

        setTimeout(function() {
            me.publish('emit', data, callback);
        }, me.options.speed * me.options.interval);

    }

})();
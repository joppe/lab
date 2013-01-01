/*global win*/

var Aap = (function (win) {
    'use strict';

    return {
        /**
         * @param {Function} callback
         */
        load: function (callback) {
            win.addEventListener('load', callback);
        },

        /**
         * @param {Function} callback
         */
        ready: function (callback) {
            win.addEventListener('DOMContentLoaded', callback);
        },

        log: (function () {
            var logger;

            if (win.console === undefined) {
                win.console = {};
                win.console.log = function () {};
            }

            logger = win.console.log;

            return function () {
                logger.apply(win.console, arguments);
            };
        }()),

        /**
         * Get the global namespace
         *
         *  @return {Object}
         */
        getGlobalNamespace: function () {
            return win;
        },

        /**
         * @param {String} namespace
         */
        createNamespace: function (namespace) {
            var target = win;

            namespace.split('.').forEach(function (part) {
                if (target[part] === undefined) {
                    target[part] = {};
                }

                target = target[part];
            });
        },

        /**
         * @param {Object} proto
         * @param {Object} [superClass]
         * @return {Object}
         * @constructor
         */
        Class: function (proto, superClass) {
            var Class;

            Class = function () {
                if (this.initialize !== undefined) {
                    this.initialize.apply(this, arguments);
                }
            };

            if (superClass !== undefined) {
                Aap.extend(Class.prototype, superClass.prototype);
            }

            Aap.extend(Class.prototype, proto);

            return Class;
        },

        /**
         * @param {Object} destination
         * @return {Object}
         */
        extend: function (destination) {
            var sources = Array.prototype.slice.call(arguments, 1);

            sources.forEach(function (source) {
                var prop;

                if (source) {
                    for (prop in source) {
                        if (source.hasOwnProperty(prop)) {
                            destination[prop] = source[prop];
                        }
                    }
                }
            });

            return destination;
        }
    };
}(this));
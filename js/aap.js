/*global win*/

var Aap = (function (win) {
    'use strict';

    return {
        load: function (callback) {
            win.addEventListener('load', callback);
        },

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

        cancelRequestAnimationFrame: function () {
            return win.cancelRequestAnimationFrame ||
                win.cancelAnimationFrame ||
                win.webkitCancelRequestAnimationFrame ||
                win.mozCancelRequestAnimationFrame ||
                win.oCancelRequestAnimationFramee ||
                win.msCancelRequestAnimationFrame ||
                win.clearTimeout;
        },

        requestAnimationFrame: function () {
            return win.requestAnimationFrame ||
                win.webkitRequestAnimationFrame ||
                win.mozRequestAnimationFrame ||
                win.oRequestAnimationFrame ||
                win.msRequestAnimationFrame ||
                function (callback) {
                    win.setTimeout(callback, 1000 / 60);
                };
        }
    };
}(this));
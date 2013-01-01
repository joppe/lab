/*global Aap*/

Aap.createNamespace('Aap.Canvas');

Aap.Canvas.Stage = (function (win) {
    'use strict';

    var Stage,
        createCanvas,
        requestAnimationFrame,
        cancelRequestAnimationFrame;

    /**
     * @return {Function}
     */
    cancelRequestAnimationFrame = function () {
        return win.cancelRequestAnimationFrame ||
            win.cancelAnimationFrame ||
            win.webkitCancelRequestAnimationFrame ||
            win.mozCancelRequestAnimationFrame ||
            win.oCancelRequestAnimationFramee ||
            win.msCancelRequestAnimationFrame ||
            win.clearTimeout;
    };

    /**
     * @return {Function}
     */
    requestAnimationFrame = function () {
        return win.requestAnimationFrame ||
            win.webkitRequestAnimationFrame ||
            win.mozRequestAnimationFrame ||
            win.oRequestAnimationFrame ||
            win.msRequestAnimationFrame ||
            function (callback) {
                win.setTimeout(callback, 1000 / 60);
            };
    };

    createCanvas = function (container, width, height) {
        var canvas = win.document.createElement('canvas');
        canvas.setAttribute('width', width);
        canvas.setAttribute('height', height);
        container.appendChild(canvas);

        return canvas;
    };

    Stage = Aap.Class({
        /**
         * @constructor
         * @param {HTMLElement} container
         * @param {Number} width
         * @param {Number} height
         */
        initialize: function (container, width, height) {
            this.width = width;
            this.height = height;

            this.canvas = createCanvas(container, width, height);
            this.shapes = [];
        },

        /**
         * @param {Shape} shape
         */
        addShape: function (shape) {
            this.shapes.push(shape);
        },
        removeShape: function (shape) {
            this.shapes.splice(this.shapes.indexOf(shape), 1);
        },
        stop: function () {
            var cancel = cancelRequestAnimationFrame();

            cancel();
        },
        play: function () {
            var self = this,
                animation = requestAnimationFrame(),
                context = this.canvas.getContext('2d');

            (function drawFrame() {
                animation(drawFrame, self.canvas);

                context.clearRect(0, 0, self.width, self.height);

                self.shapes.forEach(function (shape) {
                    shape.draw(context);
                });
            }());
        }
    });

    return Stage;
}(this));
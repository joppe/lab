/*global Aap*/

var Stage = (function (win) {
    'use strict';

    var Stage;

    function createCanvas(container, width, height) {
        var canvas = win.document.createElement('canvas');
        canvas.setAttribute('width', width);
        canvas.setAttribute('height', height);
        container.appendChild(canvas);

        return canvas;
    }

    Stage = function (container, width, height) {
        this.width = width;
        this.height = height;

        this.canvas = createCanvas(container, width, height);
        this.shapes = [];
    };
    Stage.prototype = {
        addShape: function (shape) {
            this.shapes.push(shape);
        },
        removeShape: function (shape) {
            this.shapes.splice(this.shapes.indexOf(shape), 1);
        },
        stop: function () {
            var cancelRequestAnimationFrame = Aap.cancelRequestAnimationFrame();

            cancelRequestAnimationFrame();
        },
        play: function (shape) {
            var self = this,
                requestAnimationFrame =  Aap.requestAnimationFrame(),
                context = this.canvas.getContext('2d');

            (function drawFrame() {
                requestAnimationFrame(drawFrame, self.canvas);

                context.clearRect(0, 0, self.width, self.height);

                self.shapes.forEach(function (shape) {
                    shape.draw(context);
                });
            }());
        }
    };

    return Stage;
}(this));
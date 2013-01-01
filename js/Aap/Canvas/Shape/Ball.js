/*global Aap, Shape*/

Aap.createNamespace('Aap.Canvas.Shape');

Aap.Canvas.Shape.Ball = (function () {
    'use strict';

    var Ball,
        defaultOptions = {
            lineWidth: 0,
            fillStyle: '#000000',
            strokeStyle: '#0000ff'
        };

    Ball = Aap.Class({
        /**
         * @constructor
         * @param {Point} position
         * @param {Number} radius
         * @param {Object} options
         */
        initialize: function (position, radius, options) {
            this.position = position;
            this.radius = radius;
            this.options = Aap.extend({}, defaultOptions, options);
        },

        /**
         * @param {Object} context
         */
        draw: function (context) {
            context.save();
            context.lineWidth = this.options.lineWidth;
            context.fillStyle = this.options.fillStyle;
            context.strokeStyle = this.options.strokeStyle;
            context.beginPath();
            context.translate(this.position.x, this.position.y);
            //x, y, radius, start_angle, end_angle, anti-clockwise
            context.arc(0, 0, this.radius, 0, (Math.PI * 2), true);
            context.closePath();
            context.fill();
            context.stroke();
            context.restore();
        }
    }, Aap.Canvas.Shape.Abstract);

    return Ball;
}());
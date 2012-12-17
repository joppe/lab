/*global Aap*/

var Ball = (function () {
    'use strict';

    var Ball;

    Ball = function (position, radius) {
        this.position = position;
        this.radius = radius;
    };
    Ball.prototype = {
        draw: function (context) {
            context.save();
            context.lineWidth = 1;
            context.fillStyle = '#ff0000';
            context.beginPath();
            //x, y, radius, start_angle, end_angle, anti-clockwise
            context.arc(0, 0, 100, 0, (Math.PI * 2), true);
            context.closePath();
            context.fill();
            context.stroke();
            context.restore();
        }
    };

    return Ball;
}());
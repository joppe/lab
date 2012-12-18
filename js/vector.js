/*global Aap*/

var Vector = (function () {
    'use strict';

    var Vector;

    Vector = function (size, angle) {
        this.size = size;
        this.angle = angle;
        this.radians = (this.angle / 180) * Math.PI;
    };
    Vector.prototype = {
        getX: function () {
            return Math.cos(this.radians) * this.size;
        },

        getY: function () {
            return Math.sin(this.radians) * this.size;
        }
    };

    return Vector;
}());
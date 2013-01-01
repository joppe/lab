/*global Aap*/

Aap.createNamespace('Aap.Geometry');

Aap.Geometry.Vector = (function () {
    'use strict';

    var Vector = Aap.Class({
        /**
         * @constructor
         * @param {Number} size
         * @param {Number} angle
         */
        initialize: function (size, angle) {
            this.size = size;
            this.angle = angle;
            this.radians = Aap.Geometry.Angle.degreesToRadians(this.angle);
        },

        /**
         * @return {Number}
         */
        getX: function () {
            return Math.cos(this.radians) * this.size;
        },

        /**
         * @return {Number}
         */
        getY: function () {
            return Math.sin(this.radians) * this.size;
        },

        /**
         * @param {Number} angle
         * @return {Vector}
         */
        rotate: function (angle) {
            this.angle += angle;
            this.radians = Aap.Geometry.Angle.degreesToRadians(this.angle);

            return this;
        }
    });

    return Vector;
}());
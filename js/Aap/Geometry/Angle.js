/*global Aap*/

Aap.createNamespace('Aap.Geometry');

Aap.Geometry.Angle = (function () {
    'use strict';

    return {
        /**
         * @param {Number} angle
         * @return {Number}
         */
        degreesToRadians: function (angle) {
            return (angle * Math.PI) / 180;
        },

        /**
         * @param {Number} angle
         * @return {Number}
         */
        radiansToDegrees: function (angle) {
            return (angle * 180) / Math.PI;
        }
    };
}());
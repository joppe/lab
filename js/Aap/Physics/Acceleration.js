/*global Aap*/

Aap.createNamespace('Aap.Physics');

Aap.Physics.Acceleration = (function () {
    'use strict';

    var Acceleration = Aap.Class({
        /**
         * @constructor
         * @param {Number} size
         * @param {Number} angle
         */
        initialize: function (size, angle) {
            this.size = size;
            this.angle = angle;
            this.radians = Aap.Geometry.Angle.degreesToRadians(this.angle);
        }
    }, Aap.Geometry.Vector);

    return Acceleration;
}());
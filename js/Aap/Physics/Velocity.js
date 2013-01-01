/*global Aap*/

Aap.createNamespace('Aap.Physics');

Aap.Physics.Velocity = (function () {
    'use strict';

    var Velocity = Aap.Class({
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
         * @param {Number} friction
         * @return {Velocity}
         */
        applyFriction: function (friction) {
            this.size -= friction;

            if (this.size < 0) {
                this.size = 0;
            }

            return this;
        }
    }, Aap.Geometry.Vector);

    return Velocity;
}());
/*global Aap*/

Aap.createNamespace('Aap.Geometry');

Aap.Geometry.Point = (function () {
    'use strict';

    var Point = Aap.Class({
        /**
         * @constructor
         * @param {Number} x
         * @param {Number} y
         */
        initialize: function (x, y) {
            this.x = x;
            this.y = y;
        },

        /**
         * @param {Point} target
         * @return {Number}
         */
        distance: function (target) {
            var dx = this.x - target.x,
                dy = this.y - target.y;

            return Math.sqrt(dx * dx + dy * dy);
        }
    });

    return Point;
}());
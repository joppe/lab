/*global Aap*/

Aap.createNamespace('Aap.Canvas.Shape');

Aap.Canvas.Shape.Abstract = (function () {
    'use strict';

    var Abstract = Aap.Class({
        draw: function () {
            Aap.log('Abstract.draw');
        }
    });

    return Abstract;
}());
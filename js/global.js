/*global Aap, window*/

Aap.ready(function () {
    'use strict';

    var stage = new Aap.Canvas.Stage(window.document.body, 800, 800);
    stage.addShape(new MovingBall(new Aap.Canvas.Shape.Ball(new Aap.Geometry.Point(100, 100), 10), new Aap.Physics.Velocity(2, 30)));
    stage.play();
//    Aap.log('foo');
});
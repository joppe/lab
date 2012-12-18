/*global Aap, Stage, window, Ball, Point, MovingBall, Vector*/

Aap.ready(function () {
    'use strict';

    var stage = new Stage(window.document.body, 600, 600);
    stage.addShape(new MovingBall(new Ball(new Point(100, 100), 10), new Vector(2, 30)));
    stage.play();
    Aap.log('foo');
});
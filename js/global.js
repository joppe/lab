/*global Aap, Stage, window, Ball, Point*/

Aap.ready(function () {
    'use strict';
    /*if (!window.requestAnimationFrame) {
        window.requestAnimationFrame = (window.webkitRequestAnimationFrame ||
            window.mozRequestAnimationFrame ||
            window.msRequestAnimationFrame ||
            window.oRequestAnimationFrame ||
            function (callback) {
                return window.setTimeout(callback, 17 *//*~ 1000/60*//*);
            });
    }*/
    var stage = new Stage(window.document.body, 600, 600);
    stage.addShape(new Ball(new Point(100, 100), 100));
    stage.play();
    Aap.log('foo');
});
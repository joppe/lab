/*global Aap*/

var MovingBall = (function () {
    'use strict';

    var MovingBall;

    MovingBall = function (ball, velocity) {
        this.ball = ball;
        this.velocity = velocity;
    };
    MovingBall.prototype = {
        draw: function (context) {
            this.ball.position.x += this.velocity.getX();
            this.ball.position.y += this.velocity.getY();

            this.ball.draw(context);
        }
    };

    return MovingBall;
}());
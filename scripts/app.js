/**
 * Created with JetBrains WebStorm.
 * User: Maarten De Wilde
 * Date: 5/09/13
 * Time: 20:39
 * To change this template use File | Settings | File Templates.
 */
define(function(require){
    var _ = require("underscore");
    var Game = function(){
        this.ctx = {};
        this.fps = 30;
        this.gameObjects = [];
    };

    Game.prototype = {
        start:function(){
            this.ctx = document.getElementById('canvas').getContext('2d');
            this.initialize();
            setInterval(this.onExecuteNextFrame, 1000 / this.fps);
        },
        initialize: function(){
        },
        onExecuteNextFrame: function(){
            _.each(this.gameObjects, function(go){
               go.update();
               go.render();
            });
        }
    };
    return Game;
});
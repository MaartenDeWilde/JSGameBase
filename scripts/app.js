/**
 * Created with JetBrains WebStorm.
 * User: Maarten De Wilde
 * Date: 5/09/13
 * Time: 20:39
 * To change this template use File | Settings | File Templates.
 */
define(function(require){
    var _ = require("underscore");
    var GameObject = require("./gameobject");
    var Game = function(){
        this.ctx = {};
        this.fps = 30;
        this.gameObjects = [];
    };

    Game.prototype = {
        start:function(){
            this.ctx = document.getElementById('canvas').getContext('2d');
            this.initialize();
            setInterval(_.bind(this.onExecuteNextFrame,this), 1000 / this.fps);
        },
        initialize: function(){
            this.gameObjects.push(new GameObject(this.ctx));
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
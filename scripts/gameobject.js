/**
 * Created with JetBrains WebStorm.
 * User: Maarten De Wilde
 * Date: 5/09/13
 * Time: 20:56
 * To change this template use File | Settings | File Templates.
 */
define(function(require){
   var GameObject = function(ctx){
       this.ctx = ctx;
   };
    GameObject.prototype = {
        update: function(){
        },
        render:function(){
        }
    };
    return GameObject;

});
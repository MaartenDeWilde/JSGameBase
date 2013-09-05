require.config({
    shim: {
        underscore: {
            exports: '_'
        }
    },
    paths: {
        underscore: '../js/underscore-min'
    }
});
require(['./app'], function (Game) {
    new Game().start();
});
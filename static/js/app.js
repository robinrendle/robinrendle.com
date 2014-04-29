(function (root, factory) {
    if (typeof define === 'function' && define.amd) {
        define(['domReady'], factory);
    } else if (typeof exports === 'object') {
        module.exports = factory;
    } else {
        root.App = factory();
    }
})(this, function () {

    var App = window.App = {

        fallback: function(){
            var doc = document.documentElement;
            doc.className = doc.className.replace( /(?:^|\s)custom-js(?!\S)/g , 'no-js' );
        },

        cutsTheMustard: function(){
            return ('querySelector' in document && 'addEventListener' in window );
        },

        loadApplication: function(callback){
            Modernizr.load({
                load: ['/static/js/lib/dropdown.js'],
                callback: function(){
                    if(typeof DropDown !== "object") {
                        callback();
                    }
                }
            });
        },

        init: function(){
            if (this.cutsTheMustard()) {
                this.loadApplication(this.fallback);

            }
            else {
                this.fallback();
            }
        }

    };

    App.init();

    return App;

});

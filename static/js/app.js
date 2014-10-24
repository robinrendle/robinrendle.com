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

        init: function(){
            if (this.cutsTheMustard()) {
                this.loadApplication(this.fallback);

            }
            else {
                this.fallback();
            }
        },

        fallback: function(){
            var doc = document.documentElement;
            doc.className = doc.className.replace( /(?:^|\s)custom-js(?!\S)/g , 'no-js' );
        },

        cutsTheMustard: function(){
            return ('querySelector' in document && 'addEventListener' in window );
        },

        loadApplication: function(fallback){
            Modernizr.load({
                test: Modernizr.classlist,
                nope: ['/static/js/vendor/polyfills/classList.js'],
                both: ['/static/js/lib/dropdown.js'],
                complete: function(){
                     domReady(function(){
                        try {
                            Menu.init();
                        }
                        catch(e) {
                            window.App.fallback();
                        }
                    });
                    if(typeof Menu !== "object") {
                        fallback();
                    }
                }
            });
        }
    };

    App.init();

    return App;

});

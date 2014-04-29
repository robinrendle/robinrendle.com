/**
 * Bind a callback to domReady, or fire immediately if the event has already fired
 */
(function (root, factory) {
    if (typeof define === 'function' && define.amd) {
        define(['domReady'], factory);
    } else if (typeof exports === 'object') {
        module.exports = factory;
    } else {
        root.DropDown = factory(domReady);
    }
})(this, function (domReady) {

    var Menu = {
        navButton: document.querySelector('.banner__nav'),
        navMenu: document.querySelector('.banner__nav__menu')
    };

    Menu.init = function() {
        Menu.bind();
    };

    Menu.toggler = function(){
        Menu.navButton.classList.toggle('menu-active');
        document.body.classList.toggle('menu-active');
    };

    Menu.bind = function(){
        Menu.navMenu.addEventListener("click", function(e){
            e.preventDefault();
            Menu.toggler();
        }, false);
    };

    domReady(function(){
        try {
            Menu.init();
        }
        catch(e) {
            window.App.fallback();
        }
    });

    return Menu;

});










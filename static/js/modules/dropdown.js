var Dropdown = (function(){
    var Menu = {},
    menuElem = document.querySelector('.m-banner__menu'),
    bannerElem = document.querySelector('.m-banner');

    var bind = function(){
        menuElem.addEventListener('click', function(e){
            e.preventDefault();
            bannerElem.classList.toggle('is--active');
        });
    }

    Menu.init = function(){
        bind();
    }
    return Menu;
})();

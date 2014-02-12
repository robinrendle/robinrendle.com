/* ==========================================================================
   DROPDOWN MENU
   ========================================================================== */
   /*
    * Dropdown menu used for global navigation
    */


document.addEventListener("DOMContentLoaded", function(){

    var body = document.querySelector('body');
    var mobileMenu = document.querySelector('.banner__nav__menu');
    var bannerNav = document.querySelector('.banner__nav');


    /**
     * PLUGINS
     * Check to see if an element has a certain class
     */
    function hasClass(elem, className){
        return new RegExp(' ' + className + '' ).test(' ' + elem.className + ' ');
    }

    /**
     * Remove class from an element
     */
    function removeClass(elem, className){
        var reg = new RegExp("(\\s|^)" + className + "(\\s|$)");
        elem.className = elem.className.replace(reg, " ").replace(/(^\s*)|(\s*$)/g,"");
    }


    mobileMenu.addEventListener("click", function(event){
        event.preventDefault();

        if (hasClass(bannerNav, 'menu-active')) {
            bannerNav.classList.remove('menu-active');
        } else {
            bannerNav.classList.add('menu-active');
        }

    }, false);
});

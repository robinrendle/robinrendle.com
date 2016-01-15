(function(){

    var App = {
        init: function(){
            Dropdown.init();
        }
    }

    if(window.addEventListener && document.querySelector) {
        var body = document.documentElement;
        body.classList.remove('no-js');
        body.classList.add('js');
        App.init();
    }
})();
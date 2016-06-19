(function() {

        var Dropdown = (function() {
            var Menu = {},
                menuElem = document.querySelector('.m-banner__menu'),
                bannerElem = document.querySelector('.m-banner');

            var bind = function() {
                if (menuElem) {
                    menuElem.addEventListener('click', function(e) {
                        e.preventDefault();
                        bannerElem.classList.toggle('is--active');
                    });
                }
            }

            Menu.init = function() {
                bind();
            }
            return Menu;
        })();

        var Worker = (function() {
            var Work = {};
            Work.init = function(){
                if (navigator.serviceWorker) {
                    navigator.serviceWorker.register('../service-worker.js').then(function() {
                        console.log('CLIENT: service worker registration complete.');
                    }, function() {
                        console.log('CLIENT: service worker registration failure.');
                    });
                }
            }
            return Work;
        })();


    var App = {
        init: function() {
            Dropdown.init();
            Worker.init();
        }
    }


    if (window.addEventListener && document.querySelector) {
        var body = document.documentElement;
        body.classList.remove('no-js');
        body.classList.add('js');
        App.init();
    }
})();

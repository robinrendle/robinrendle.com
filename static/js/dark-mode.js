(function(){
    var t = new Date(),
        hour = t.getHours(),
        sunset = 20,
        darkModeClass = "t-dark";

    document.addEventListener("DOMContentLoaded", function(){
        if (hour > sunset) {
            document.body.className = darkModeClass;
        }
    });
    document.addEventListener("keyup", function(e){
        if(e.keyCode == 68) {
            document.body.classList.toggle(darkModeClass);
        }
    });
})();

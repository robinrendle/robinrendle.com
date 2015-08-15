(function(){
    var t = new Date(),
        hour = t.getHours(),
        sunset = 20,
        darkModeClass = "t-dark",
        isDarkMode = sessionStorage.getItem('dark');


    document.addEventListener("DOMContentLoaded", function(){
        var activateDarkMode = function(){
            document.body.classList.add(darkModeClass);
        }
        var removeDarkMode = function(){
            document.body.classList.remove(darkModeClass);
        }

        if (hour > sunset && isDarkMode == null) {
            activateDarkMode();
            sessionStorage.setItem('dark', 'active')
        }

        if(isDarkMode == 'active') {
            activateDarkMode();
            console.log("activate");
        } else if (isDarkMode == 'inactive') {
            removeDarkMode();
            console.log("remove");
        }
    });

    document.addEventListener("keyup", function(e){
        if(e.keyCode == 68) {
            if (isDarkMode == "inactive") {
                console.log("on");
                // document.body.classList.add(darkModeClass);
                // sessionStorage.setItem('dark', 'active');
            } else if(isDarkMode == "active") {
                console.log('off');
                // document.body.classList.remove(darkModeClass);
                // sessionStorage.setItem('dark', 'inactive');
            }
        }
    });
})();

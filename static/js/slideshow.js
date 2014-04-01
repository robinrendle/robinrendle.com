$(document).ready(function(){
    $('.infinite-scroll').jscroll({
        contentSelector: ".slide-content",
        loadingHtml: "<div class='loading'>Loading</div>"
    });
});

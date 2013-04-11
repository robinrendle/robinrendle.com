// DOM Ready - Start
// ---------------------------------------------------------------------------------------------------
$(function(){$("h3.contents").click(function(e){e.preventDefault();$("html").toggleClass("contents")})});


$(document).ready(function(){
    $(this).keypress(function(e){
        if (e.which == 103) {
            $("header").first().before("<div class='grid'><div class='column'><code>1</code></div><div class='column'><code>1</code></div><div class='column'><code>1</code></div><div class='column'><code>1</code></div><div class='column'><code>1</code></div><div class='column'><code>1</code></div><div class='column'><code>1</code></div><div class='column'><code>1</code></div></div>");
        };
    });
});
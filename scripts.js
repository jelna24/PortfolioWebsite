$(document).scroll(function() { // check if scroll event happened
    if ($(document).scrollTop() > 60) { // check if user scrolled more than 60 from top of the browser window
        $(".nav").css("background-color", "#4c4c4c"); // if yes, then change the color of class "navbar-default" to #444444
    } else {
        $(".nav").css("background-color", "transparent"); // if not, change it back to transparent
        }
    }); //for main navigation

 

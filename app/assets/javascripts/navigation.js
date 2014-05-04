$(document).ready(function(){

    $(window).scroll(function(){
        if ($(this).scrollTop() > 0) {
            $('.navigation').fadeIn(200);
        } else {
            $('.navigation').fadeOut(200);
        }
    });

});
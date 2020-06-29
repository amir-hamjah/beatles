$(function () {

    // back to top 
    $(".back_to_top").on('click',function () {

        $("html,body").animate({
            scrollTop: 0
        }, 1000);

    });


    $(window).scroll(function () {
        if ($(this).scrollTop() > 200) {
            $(".back_to_top").fadeIn(500);
        } else {
            $(".back_to_top").fadeOut(500);
        }

    });

    $(window).scroll(function () {
        
        
         //fixed menu  

        if ($(this).scrollTop() > 50) {
            $(".menu-fix").addClass("new_bg");
        }
        else {
            $(".menu-fix").removeClass("new_bg");
        }



    });
    
    //animation scroll js
    var html_body = $('html, body');
    $('.menu a').on('click', function () {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                html_body.animate({
                    scrollTop: target.offset().top - 0
                }, 1500);
                return false;
            }
        }
    });






});

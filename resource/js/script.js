// 스크롤 시 헤더 색상 변경
$(function(){
    var rollHeader = 100;
    $(window).scroll(function() {
        var scroll = getCurrentScroll();
        if ( scroll >= rollHeader ) {
            $('#header').addClass('roll');
            $(".logo img").attr("src","resource/images/logoWhite.svg");
        }
        else {
            $('#header').removeClass('roll');
            $(".logo img").attr("src","resource/images/logoOriginal.svg");
        }
    });
    $(window).on("load", function() {

        var $landingWrapper = $(".landing-wrapper"),
            $landingInnerContent = $(".landing-inner-content");

        // set initial container to half of .landing-inner-content width
        //TweenMax.set($landingWrapper, {scrollTo: {x: $landingInnerContent.width()/4}, ease: Power2.easeOut});

        // scroll left and right
        $landingInnerContent.on("mousemove touchmove", function(e) {
        if (e.clientX > $landingWrapper.width() / 2) {
            TweenMax.to($landingWrapper, 2, {
            scrollTo: {
                x: "+=175"
            },
            ease: Power2.easeOut
            });
        } else {
            TweenMax.to($landingWrapper, 2, {
            scrollTo: {
                x: "-=175"
            },
            ease: Power2.easeOut
            });
        }
        });

        });
    


    function getCurrentScroll() {
        return window.pageYOffset || document.documentElement.scrollTop;
    }
    // 메인 컨텐츠 캐러셀
    var swiper = new Swiper('.first', {
        scrollbar: {
            el: '.swiper-scrollbar',
            loop: true,
            hide: false,
            dragSize: 77,
            centeredSlides: true
        },
    });
    // 리뷰 컨텐츠 캐러셀
    var swiper = new Swiper('.second', {
        direction: 'vertical',
        height: 170,
        loop: true,
        autoplay:{
            delay: 3000,
            disableOnInteraction: false
        },
    });
});
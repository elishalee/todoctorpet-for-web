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
    function getCurrentScroll() {
        return window.pageYOffset || document.documentElement.scrollTop;
    }
    // 메인 컨텐츠 캐러셀
    var swiper = new Swiper('.first', {
        scrollbar: {
            el: '.swiper-scrollbar',
            hide: false,
            dragSize: 77,
            centeredSlides: true
        },
    });
    // 리뷰 컨텐츠 캐러셀
    var swiper = new Swiper('.second', {
        scrollbar: {
            direction: 'vertical',
            clickable: true,
            loop: true,
            autoplay: 5000,
            
        },
    });
});
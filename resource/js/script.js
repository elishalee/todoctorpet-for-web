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
});

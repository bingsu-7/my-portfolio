// $(function() {
//     $(".order").click(function(e) {
//         e.stopPropagation();
//         $(".order ul").css("display","block");
//     });
//     $(document).click(function() {
//         $(".order ul").css("display","none");
//     });

// })
// 셀렉트박스 플러그인
 $(document).ready(function() {
        $('select').niceSelect();
    });
$(function() {
    $(".top-wrapper p").click(function () {
        $(".hidden").css("display","block"),
        $(this).css("display","none");
    })
})
$(document).ready(function () {
  $(".tab-btn").click(function () {
    // 모든 버튼과 콘텐츠에서 'active' 클래스 제거
    $(".tab-btn, .tab-content").removeClass("active");
    // 클릭된 버튼과 해당 콘텐츠에 'active'클래스 추가
    $(this).addClass("active");
    $("#"+$(this).data("tab")).addClass("active");
  });
});
$(document).ready(function () {
    $(".tab-btn").click(function () {
        console.log("클릭된 버튼: ", $(this));
        console.log("data-tab 값: ", $(this).data("tab"));
        console.log("선택된 콘텐츠 요소: ", $("#"+$(this).data("tab")));
    })
})
// 좋아요 클릭 시 하트 채워짐
  $(function () {
    $(".new-things > .product > .like1").click(function () {
      if ($(this).attr("src") === "icon/like7px.png") {
        $(".new-things > .product > .like1").attr("src", "icon/like_filled7px.png");
      } else {
        $(".new-things > .product > .like1").attr("src", "icon/like7px.png");
      }
    });
  });
  $(function () {
    $(".new-things > .product > .like2").click(function () {
      if ($(this).attr("src") === "icon/like7px.png") {
        $(".new-things > .product > .like2").attr("src", "icon/like_filled7px.png");
      } else {
        $(".new-things > .product > .like2").attr("src", "icon/like7px.png");
      }
    });
  });



// TODO : Swiper.js 플러그인
var swiper = new Swiper(".mySwiper", {
  // TODO : 여기 옵션 넣기
  autoplay: { delay: 3000 },
  // TODO: 페이지기호 넣기
  // TODO: 사용법: pagination: {el: "클래스명"}
  pagination: {
    el: ".swiper-pagination",
  },
});



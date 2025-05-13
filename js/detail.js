// 본문 컬러랑 사이즈 클릭하면 선택된 것들이 보임
$(function () {
  let c = "",
    s = "";
  // TODO color 버튼을 클릭하면
  $(".color-pick").click(function () {
    // TODO button 태그 사이 글자 임시 저장: c
    c = $(".color-get").text();
    // TODO size 버튼을 클릭하면
  });
  $("#size button").click(function () {
    // TODO button 태그 사이 글자 임시 저장: s
    s = $(this).text();
    // TODO 임시 저장된 글자 s(사이즈),c(컬러) 에 값이 있다면
    if (c !== "" && s !== "") {
      let p = $("#product-price").text(); // 원가
      $("#s").text(s); // 사이즈
      $("#c").text(c); // 컬러
      $("#p").text(p); // 원가 표시
      $("#total-price").text(p); // 가격 표시
      $("#info").show(); // 표기된 글자 보여주기
    }
  });
});
// 스크롤하면 장바구니, 구매하기 픽스드로 버튼 추가됨
$(function () {
  $(window).scroll(function () {
    let a = $(window).scrollTop();
    let windowWidth = $(window).width();
    if (windowWidth < 768 && a >= 750) {
      $(".btn-wrapper2").addClass("fixed-bottom").css("display", "flex"); // 고정 및 표시
    } else {
      $(".btn-wrapper2").removeClass("fixed-bottom").css("display", "none"); // 해제 및 숨김
    }
  });
});

// 스와이퍼(당신을 위한 추천 상품)
var swiper = new Swiper(".mySwiper", {
  slidesPerView: 2.2,
  spaceBetween: 10,
  freeMode: true,
  breakpoints: {
    768: {
      slidesPerView: 3.2, //브라우저가 768보다 클 때
      spaceBetween: 10,
    },
  },
});

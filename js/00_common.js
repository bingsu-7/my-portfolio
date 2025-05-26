// 웹브라우저 스크롤 되면 top-menu 사라지고 gnb fixed 됨
$(function () {
    $(window).scroll(function () {
      // 웹브라우저가 스크롤되면
      let a = $(window).scrollTop(); // 스크롤바 y좌표
      if (a >= 24) {
        // 30: top 의 세로크기(y좌표가 같음)
        // gnb 메뉴를 고정: fixed 클래스
        $(".gnb").addClass("fixed");
      } else {
        // gnb 메뉴를 품: 클래스 제거     
        $(".gnb").removeClass("fixed");
      }
    });
  });
  
  // 햄버거 메뉴 클릭 시 닫기로 바뀌고 메뉴 보임
  $(function () {
    $(".item .hamburger").click(function () {
      // 마우스가 올라갔을때 실행
      $("#drop-down").toggle();
      if ($("#drop-down").css("display") == "block") {
        $(".item .hamburger").attr("src", "icon/close_black7px.png");
        $("body").css("overflow", "hidden"); // 스크롤 잠금
      } else {
        $(".item .hamburger").attr("src", "icon/hamburger_menu7px.png");
        $("body").css("overflow", "auto"); // 스크롤 해제
      }
    });
  });
  // 머리말 shop 토글
  $(function () {
    $("#drop-down > .shop").click(function () {
      // #shop 클릭하면 실행
      $("#drop-down > #menu").toggle();
    });
  });
  // 머리말 community 토글
  $(function () {
    $("#drop-down > #community").click(function () {
      // #shop 클릭하면 실행
      $("#drop-down > #menu2").toggle();
    });
  });
  
// footer cs info 토글
$(function () {
    $(".cs").click(function () {
      // btn 클릭하면 실행
      $("#cs-info").toggle();
    });
  });
  
  // 태블릿, pc에서만 shop, community 보이고 모바일에서는 숨김
  $(function () {
    function toggleMenu() {
      let windowWidth = $(window).width();
      if (windowWidth >= 768) {
        $(".pc-menu").show();  // 태블릿, PC에서는 보이기
      } else {
        $(".pc-menu").hide();  // 모바일에서는 숨기기
      }
    }
  
    // 페이지 로드 시 실행
    toggleMenu();
  
    // 창 크기 변경 시 실행
    $(window).resize(toggleMenu);
  });
  
  // gnb에서 shop 호버하면 LNB 내려옴
  $(function () {
    $("#shop").hover(function(){
        // 마우스가 올라갔을때 실행
        $("#shop-menu").stop().slideDown();
    }, function(){
        // 마우스가 내려갔을때 실행
        $("#shop-menu").slideUp();
    });
  });
  $(function () {
    $("#commu").hover(function(){
        // 마우스가 올라갔을때 실행
        $("#commu-menu").stop().slideDown();
    }, function(){
        // 마우스가 내려갔을때 실행
        $("#commu-menu").slideUp();
    });
  });
  
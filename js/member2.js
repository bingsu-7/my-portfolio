$(function () {
  $(".type").click(function () {
    $(".type,.content").removeClass("active");
    $(this).addClass("active");
    $("#" + $(this).data("tab")).addClass("active");
  });
});

$(function () {
  $("#passport").click(function () {
    let a = $("#passport-no").val(),
      b = $("#info-agr").prop("checked"), // b는 true 또는 false
      foreignUser = $("#username3").val();
    if (a === "") {
      alert("여권번호를 입력해 주세요.");
    } else if (foreignUser === "") {
      alert("이름을 입력해 주세요.");
    } else if (!b) {
      alert("고유식별정보 처리에 동의해 주세요.");
    } else {
      alert("중복되지 않은 [여권번호]임을 확인하였습니다.");
      let masked = '***' + a.slice(-4);
      $("#a").text(masked);
      $("#foreignUser").text(foreignUser);
    }
  });
});

$(function () {
  $("#pw-check").on("input", function () {
    // 입력값 변경 시 검사
    let c = $("#password").val(),
      d = $(this).val();

    if (c !== d) {
      $(".pw-check").css("display", "block"); // 비밀번호 불일치 시 메시지 표시
    } else {
      $(".pw-check").css("display", "none"); // 비밀번호 일치 시 메시지 숨김
    }
  });
});

$(function () {
  $("#pw-check3").on("input", function () {
    // 입력값 변경 시 검사
    let c = $("#password3").val(),
      d = $(this).val();

    if (c !== d) {
      $(".pw-check").css("display", "block"); // 비밀번호 불일치 시 메시지 표시
    } else {
      $(".pw-check").css("display", "none"); // 비밀번호 일치 시 메시지 숨김
    }
  });
});
// 비밀번호 focus 시 조건 알려줌
$(function () {
  $("#password,#password3")
    .focus(function () {
      $(".pw-guide").show();
    })
    .blur(function () {
      $(".pw-guide").hide();
    });
});

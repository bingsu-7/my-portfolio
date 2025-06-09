$(function () {
  $("#agreeAll").click(function () {
    $("#agree,#agree2,#agree3,#agree4,#agree5").prop(
      "checked",
      $(this).prop("checked")
    );
  });
});

$(function () {
  $("#see-more").click(function () {
    $(".agree").toggle();
    let currentText = $(this).text();

    if (currentText.includes(">")) {
      $(this).text("∨ 상세보기");
    } else {
      $(this).text("> 상세보기");
    }
  });
});
$(function () {
  $("#see-more2").click(function () {
    $(".agree2").toggle();
    let currentText = $(this).text();

    if (currentText.includes(">")) {
      $(this).text("∨ 상세보기");
    } else {
      $(this).text("> 상세보기");
    }
  });
});
$(function () {
  $("#see-more3").click(function () {
    $(".agree3-4").toggle();
    let currentText = $(this).text();

    if (currentText.includes(">")) {
      $(this).text("∨ 상세보기");
    } else {
      $(this).text("> 상세보기");
    }
  });
});
$(function () {
  $("#goNext").click(function () {
    let agr = $("#agree").prop("checked"),
      agr2 = $("#agree2").prop("checked"),
      agr5 = $("#agree5").prop("checked");
    if (!agr || !agr2 || !agr5) {
      alert("필수 항목에 모두 동의해 주세요.");
    } else {
      window.location.href = "member2.html";
    }
  });
});

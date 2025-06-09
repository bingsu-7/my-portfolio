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


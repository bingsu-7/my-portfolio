// $(function () {
//   $(".review-info").click(function () {
//     let a = $(".review-info > span").text();
//     a.text(∨)
//     $(".review-info > span").text();
//   })
// })

$(function () {
  $(".review-info").click(function () {
    $(".review-guide").toggle();
    let currentText = $(this).text();

    if (currentText.includes(">")) {
      $(this).text("∨ 리뷰 적립금 안내");
    } else {
      $(this).text("> 리뷰 적립금 안내");
    }
  });
});
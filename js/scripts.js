$(document).ready(function() {
  $(".btn-primary").click(function() {
    $(".form-group").show();
    });
  $("#blanks form").submit(function(event) {
    var favthings1Input = $("input#favthings1").val();
    var favthings2Input = $("input#favthings2").val();
    var favthings3Input= $("input#favthings3").val();
    var favthings4Input = $("input#favthings4").val();
    var favthings5Input = $("input#favthings5").val();

    $(".favthings1").text(favthings1Input);
    $(".favthings2").text(favthings2Input);
    $(".favthings3").text(favthings3Input);
    $(".favthings4").text(favthings4Input);
    $(".favthings5").text(favthings5Input);

      event.preventDefault();
 

      $(".btn-submit").click(function() {
      $(".form").show();
      });
   });
});



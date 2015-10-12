$(document).ready(function() {
  $("#blanks form").submit(function(event) {
    $(".favthings1").append("blah blah");
    $(".favthings2").append("blah blah");
    $(".favthings3").append("blah blah");
    $(".favthings4").append("blah blah");
    $(".favthings5").append("blah blah");

    $("h2").click(function() {
      $("#form-group").show();
    });

    $("button").click(function() {
      $("#hidden").slideToggle("slow");
      });


    event.preventDefault();

  });
});

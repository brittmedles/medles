$(document).ready(function(){
  // $("#signup input[type=submit]").remove();
  
  $("#get_signup").on("click", function(event){
    event.preventDefault();
    $("#signup_form").show();
    $("#signup_button2").show();
    $("#tagline").hide();
    $(".separator").hide();
    $("#signup_button1").hide();
  });
  
});
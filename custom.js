$(document).ready(function(){
    document.addEventListener("DOMContentLoaded", function () {
      var collapsibleButton = document.getElementById("collapsibleButton");
  
      // Get the coordinates
      var rect = collapsibleButton.getBoundingClientRect();
  
      // Save the coordinates as variables
      var buttonTop = rect.top;
      var buttonLeft = rect.left;
  
      // Use these variables as needed in other elements or scripts
      console.log("Button Top:", buttonTop);
      console.log("Button Left:", buttonLeft);
    });
  });


$(document).ready(function () {

//COLLAPSE BUTTON
    $("#collapsibleButton").click(function () {
      if ($("#collapsibleHero").is(":visible")) {
  
        $("#collapsibleHero").hide();
        $("#navbar").append('<a id="pseudo-button" class="pseudo-button" type="button"> <i class="ri-arrow-down-double-line"></i> </a>');
      } else{}
    });

    $("#navbar").on("click", "#pseudo-button", function () {
      $("#collapsibleHero").show();
      $("#navbar .pseudo-button").remove();
    });
  });
  


$(document).ready(function(){
  //STICKY NAVBAR
  var num = 600;

  $(window).bind('scroll', function () {
      if ($(window).scrollTop() > num ) {
        $("#collapsibleHero").hide();
        $("#navbar").addClass("fixed-top");
        $("#navbar").append('<a id="pseudo-button" class="pseudo-button" type="button"> <i class="ri-arrow-down-double-line"></i> </a>');
      } else {
        $("#collapsibleHero").show();
        $("#navbar").removeClass("fixed-top");
        $("#navbar .pseudo-button").remove();
      }
  });
});




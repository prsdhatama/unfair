$(document).ready(function () {
  // COLLAPSE BUTTON
  $("#collapsibleButton").click(function () {
    var collapsibleHeader = $("#collapsibleHeader");

    if (collapsibleHeader.is(":visible")) {
      // Use slideUp for a sliding animation when hiding
      collapsibleHeader.slideUp(150);

      // Append pseudo-button with a delay
      $("#navbar").delay(150).queue(function (next) {
        $(this).append('<a id="pseudo-button" class="pseudo-button" type="button"> <i class="ri-arrow-down-double-line"></i> </a>');
        next();
      });
    }
  });

  // PSEUDO-BUTTON CLICK HANDLER
  $("#navbar").on("click", "#pseudo-button", function () {
    // Use slideDown for a sliding animation when showing
    $("#collapsibleHeader").slideDown(150);

    // Remove pseudo-button with a delay
    $("#navbar .pseudo-button").fadeOut(50, function () {
      $(this).remove();
    });
  });
});

  

$(document).ready(function () {
  // STICKY NAVBAR AND SNAP TO NEXT SECTION
  var num = 550;
  var sectionOffset = 600; // Adjust this value as needed

  $(window).bind('scroll', function () {
      var scrollTop = $(window).scrollTop();

      if (scrollTop > num) {
          $("#collapsibleHero").slideUp(150);
          $("#navbar").addClass("fixed-top");

          // Append pseudo-button with the same horizontal position
          $("#navbar").append('<a id="pseudo-button" class="pseudo-button" type="button"> <i class="ri-arrow-down-double-line"></i> </a>');
      } else {
          $("#collapsibleHero").slideDown(150);
          $("#navbar").removeClass("fixed-top");
          $("#navbar .pseudo-button").remove();
      }

      // Check if scrolling is above the num and show the collapsible hero again
      if (scrollTop < num) {
          $("#collapsibleHero").slideDown(150);
      }

      // Optionally, you can snap to the next section when scrolling down
      // if (scrollTop > num + sectionOffset) {
      //     var nextSection = $("#section__container choose__container"); // Replace with the actual ID of your next section
      //     $.scrollTo(nextSection, 800, { offset: -80 }); // Adjust the offset as needed
      // }
  });
});

  


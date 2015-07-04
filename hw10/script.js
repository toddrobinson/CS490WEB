$(document).ready(function() {
  //Expand the associated content when the title is clicked.
  //could be better as an accordian
  $("section").find("h2").on("click", function(){
    $(this).next().slideToggle();
    flipArrow(this);
  });

  //Toggles a class that points the arrow down
  //Takes in the header that has the arrow element
  function flipArrow(header) {
    $(header).find(".arrow i").toggleClass("pointDown")
  }
});

$(document).ready(function(){


//Call the Dogs api on page load. calls function on success.
$.ajax({
    type: "GET",
    url: "http://web.cs.sunyit.edu/~lampej/web/api/Dogs",
    dataType : "json",
    success: function(dogData) {presentData(dogData); showFirst();},
    error : function() {console.log("failed");},
});

/*
Advances the current element to the next sibling of the current slide.
If there isn't a sibling after, sets current to the last one.
Hide current, show the next element.
*/
$("#rightControl").click(function(){
    var currentElement = $("div.dogBlock.current");
    var nextElement = $(currentElement).next();
    if (nextElement.length == 0) {showFirst();}
    hideSlide(currentElement);
    showSlide(nextElement);
});
/*
Reverses to the previous element of the current slide.
Goes to last slide if there isn't a previous slide.
Hide current, show the next element
*/
$("#leftControl").click(function(){
  var currentElement = $("div.dogBlock.current");
  var nextElement = $(currentElement).prev();
  if (nextElement.length == 0) {showLast();}
  hideSlide(currentElement);
  showSlide(nextElement);
});




});

/*
Takes that data from the ajax request and adds it to the image container block.
Adds it in a figure with a caption
Default is that they are not displayed
*/
function presentData(data) {
  for(var element in data){
    var imgsrc = data[element].filename;
    var descr  = data[element].description;
    var image = '<img class="img-responsive" src="' + imgsrc + '">';
    var caption = "<figcaption>" + descr + "</figcaption>";
    var obj = $("<div class='dogBlock' id='"+ data[element].id + "'>" +  "<figure>" + image + caption + "</figure>" + "</div>");
    $("div.imageContainer").append(obj);
  }
}

//Adds the current class to the first element of imageContainer
function showFirst() {
  $("div.imageContainer div.dogBlock:first-child").addClass("current");
}
//Adds the current class to the last element of imageContainer
function showLast() {
  $("div.imageContainer div.dogBlock:last-child").addClass("current");
}


//These to functions could really be the same function with toggleClass, but if need to have more control, I guess.
//Adds current class to slide parameter
function showSlide(slide) {
  $(slide).addClass("current");

}
//Removes class to slide parameter
function hideSlide(slide){
  $(slide).removeClass("current");

}

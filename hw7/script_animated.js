$(document).ready(function(){

$.ajax({
    type: "GET",
    url: "http://web.cs.sunyit.edu/~lampej/web/api/Dogs",
    dataType : "json",
    success: function(dogData) {presentData(dogData); showFirst();},
    error : function() {console.log("failed");},
});


$("#rightControl").click(function(){
    var currentElement = $("div.dogBlock.current");
    var nextElement = $(currentElement).next();
    if (nextElement.length == 0) {showFirst();}
    hideSlide(currentElement,"right");
    showSlide(nextElement, "left");
    //$(currentElement).toggleClass("current");
    //$(nextElement).toggleClass("current");
});

$("#leftControl").click(function(){
  var currentElement = $("div.dogBlock.current");
  var nextElement = $(currentElement).prev();
  if (nextElement.length == 0) {showLast();}
  hideSlide(currentElement, "left");
  showSlide(nextElement, "right");
})




});

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

function showFirst() {
  $("div.imageContainer div.dogBlock:first-child").addClass("current");
}

function showLast() {
  $("div.imageContainer div.dogBlock:last-child").addClass("current");
}

function showSlide(slide, direction) {
  $(slide).toggleClass("current");
  var action;
  if (direction == "left") {action = "slideInLeft"}
  else {action = "slideInRight"};
  animate(slide, action);
}

function hideSlide(slide, direction){

  if (direction == "left") {action = "fadeOutRight"}
  else {action = "slideOutLeft"};
  animate(slide, action);
  $(slide).toggleClass("current");
}

function animate(element, action) {
  var animationName = 'animated ' + action;
  var atEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';

  $(element).addClass(animationName).one(atEnd,function(){
    $(element).removeClass(animationName);
    console.log("SDf");
  });
}

(function () {
var app = angular.module('pets', []);
/*
Setting up the controller for the page, which only has the one controller.
Using the http method to get the data
*/
app.controller('SlidesController', [ '$http', '$scope', function($http){
  //So "this" is accesible from functions on object
  var ctrlScope = this;
  $http.get("http://web.cs.sunyit.edu/~lampej/web/api/Dogs").success(function (data) {
    //Setting the data to slides
    ctrlScope.slides = data;
    //Setting the current slide to the first object in the slides
    ctrlScope.currentSlide = ctrlScope.slides[0];
    //Setting the current slide number to the first object, so that the slide number is different than the actual current slide.
    ctrlScope.currentSlideNumber = 0;
    //The number of slides
    ctrlScope.numberOfSlides = data.length;
    console.log("Data fetched");
  });

/*
Changing slides.
Changes the current slide number.
Angular on html dictates what is shown via the currentSlide's object's id.
currentSlideNumber is there to keep track.

*/

  this.changeSlide = function(direction) {
    if (direction == "left") {
      if (ctrlScope.currentSlideNumber == 0) {
        ctrlScope.currentSlide = ctrlScope.slides[ctrlScope.numberOfSlides -1];
        ctrlScope.currentSlideNumber = ctrlScope.numberOfSlides -1;
      }
      else {
        ctrlScope.currentSlide = ctrlScope.slides[ctrlScope.currentSlideNumber - 1];
        ctrlScope.currentSlideNumber -= 1;
      }
      }
    else if (direction == "right") {
      if(ctrlScope.currentSlideNumber == ctrlScope.numberOfSlides - 1) {
        ctrlScope.currentSlide = ctrlScope.slides[0];
        ctrlScope.currentSlideNumber = 0;
      }
      else {
      ctrlScope.currentSlide = ctrlScope.slides[ctrlScope.currentSlideNumber + 1];
      ctrlScope.currentSlideNumber += 1;
      }
    }
  }

}]);

})(); // endclosure

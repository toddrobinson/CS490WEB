
$(document).ready(function(){
  //Even handlers for actions in form.
  $('input#phone').keyup(validPhone);
  $('input#name, textarea#bio' ).keyup(lengthCheck);
  $('input#buttonCheck').click(filled);

  //Animations for on load, page elements come in from different directions. 
  animate($("h1") , "bounceInDown");
  animate($(".form-group>div").not("form .form-group:last-child div"), "bounceInRight");
  animate($(".form-group>label"),"bounceInLeft");
  animate($("form .form-group:last-child"),"bounceInUp");
  //
});

/*
Checks length of object that triggers event.
Gets the max length from a custom attribute "lengthMax"
Compares it to actual length, and applies an error class if too long, or removes if within limit.
Would be worth returning true/false for a length check, so that way it wouldn't be just side effects like it is.
Potentiall more usable that way.

*/
function lengthCheck() {
  var lengthMax     = $(this).attr('lengthMax');
  var currentlength = $(this).val().length;
  var charLeft      = lengthMax - currentlength;
  if      (charLeft < 0)                               {$(this).addClass("error");}
  else if (charLeft >= 0 && $(this).hasClass("error")) {$(this).removeClass("error");}
}
/*
Checks to see if there is elements with the required attribute.
If the elements that are required are empty, it applies the errroe class and shakes them using the animate function that uses the animate.css file by Daniel Eden
If there is data, it ensures the error class is not present.

*/
function filled() {
  var requiredElements = $("[required]").toArray();
  //console.log(requiredElements);
  for (var element in requiredElements) {
    if ($(requiredElements[element]).val() == "")
    {
      $(requiredElements[element]).addClass("error");
      animate(requiredElements[element], "shake");
    }

    else {
      $(requiredElements[element]).removeClass("error");
    }
  }
}
/*
Check to see if the object that triggers function has a valid phone number as its value.
If it doesn't applies the error class to to it, if valid removes the class.

*/
function validPhone() {
  //var re = /(?:\d{3}|\(\d{3}\))([-\/\.])\d{3}\1\d{4}/;
  var re = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
  var phoneString = $(this).val();
  var validPhoneNumber = re.test(phoneString);
  if (!validPhoneNumber) {$(this).addClass("error");}
  else                   {$(this).removeClass("error");}
}
/*
Using the animation.css file by Daniel Eden
Takes in element to preform the animation on, and the motion to do as a string.
Executes the animation by adding the two associated classes, and then after the aniamtion is over, removes the classes.

*/
function animate(element, action) {
  var animationName = 'animated ' + action;
  var atEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';

  $(element).addClass(animationName).one(atEnd,function(){
    $(element).removeClass(animationName);
  });
}

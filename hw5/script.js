/*
* checkData function doesn't have any parameters
* Gets called when there is a click on the buttonCheck button.
* Gets input and puts it into an object.
* Tests for errors in input with hard constraints
*
*
*/
var checkData = function() {
  var formElements = new Object();
  formElements.name = $("#name").val();
  formElements.age = parseInt($("#age").val());
  formElements.email = $("#emailAddress").val();
  formElements.favoritePie = $("#favoritePie").val();
  formElements.explanation = $("#explanation").val();

  formElements.errors = new Object();
  //Testing here for an empty string, becuase jQuery returns an empty string if val() returns nothing.
  if (formElements.name == "") {formElements.errors.name = "Name is required";}


  if       (formElements.age == "")                            {formElements.errors.age = "Your age is required.";}
  else if  (isNaN(formElements.age))                           {formElements.errors.age = "Your age needs to be a number.";}
  else if  (formElements.age < 18)                             {formElements.errors.age = "You are too young, must be 18!";}
  else if  (formElements.age > 100)                            {formElements.errors.age = "You are too old, must not be over 100!";}

  //Not really a usefull way to do this.
  if (formElements.favoritePie != "strawberry" && formElements.favoritePie != "blueberry" && formElements.favoritePie != "moon")
  {
    formElements.errors.favoritePie = "That's not an option, don't do that."
  }

  //Call to show error modal, passes in all form elements in an object, that contains the error object as well.
  displayErrorModal(formElements);

}

/*
* displayErrorModal adds information to modal depending on if there were any errors at all
* If errors, lists errors. If no errors, show what was input.
* It does more than it probably should.
*
*/
var displayErrorModal = function(formElements) {


  if (jQuery.isEmptyObject(formElements.errors))
  {
    $('#errorModalTitle').text('No errors, good job.');
    $('#errorModalBody').append("<h4 class='text-success'>Woo!</h4>");
    $('#errorModalBody').append('<ul class="text-success"></ul>');
    for (var key in formElements)
    {
      if(formElements.hasOwnProperty(key) && formElements[key] != "" && typeof formElements[key] != 'object')
      {
        $('#errorModalBody>ul').append('<li>' + key + ": "+ formElements[key] + '</li>');
      }
    }
  }

  else
  {
    $('#errorModalTitle').text('Uh oh, you\'ve got errors!');
    $('#errorModalBody').append('<ul class="text-danger"></ul>');

    for (var key in formElements.errors)
    {

      if(formElements.hasOwnProperty(key))
      {
        $('#errorModalBody>ul').append('<li>' + formElements.errors[key] + '</li>');
      }

    }
  }


  $('#errorModal').modal();
}
//This is a hook for bootstraps modal hidden even.
//Clearing out the modal so that the form can be filled out again without refreshing the page
$(document).on('hidden.bs.modal', '#errorModal', function(e) {
  $('#errorModalBody').empty();
  $('#errorModalTitle').empty();
});

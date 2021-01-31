$(document).ready(function () {
    var contactForm = $(".contact");
    var firstNameInput = $("#firstName-input");
    var lastNameInput = $("#lastName-input");
    var emailInput = $("#email-input");
    var reasonInput =$("#reason-input");
   
 
    contactForm.on("submit", function (event) {
      event.preventDefault();
      var userData = {
        firstname: firstNameInput.val().trim(),
        lastname: lastNameInput.val().trim(),
        email: emailInput.val().trim(),
        reason: reasonInput.val().trim(),
      };
      
      signupContact(
        userData.firstname,
        userData.lastname,
        userData.email,
        userData.reason,
       
      );
      firstNameInput.val("");
      lastNameInput.val("");
      emailInput.val("");
      reasonInput.val("");
    });
  
    // This is going to post to the contact route.. 
    function signupContact(
      firstname,
      lastname,
      email,
      reason,
      
    ) {
      $.post("/api/contact", {
        firstname: firstname,
        lastname: lastname,
        email: email,
        reason: reason,
        })
        .catch(handleLoginErr);
    }
    function handleLoginErr(err) {
      $("#alert .msg").text(err.responseJSON);
      $("#alert").fadeIn(500);
    }
  });
  
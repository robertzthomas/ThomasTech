
(function ($) {
    "use strict";
    /*==================================================================
    [ Validate ]*/
    var input = $('.validate-input .input100');

    $('.validate-form').on('submit',function(){
        var check = true;

        for(var i=0; i<input.length; i++) {
            if(validate(input[i]) == false){
                showValidate(input[i]);
                check=false;
            }
        } return check;
    });

    $('.validate-form .input100').each(function(){
        $(this).focus(function(){
           hideValidate(this);
        });
    });

    function validate (input) {
        if($(input).attr('type') == 'email' || $(input).attr('name') == 'email') {
            if($(input).val().trim().match(/^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{1,5}|[0-9]{1,3})(\]?)$/) == null) {
                return false;
            }
        }
        else {
            if($(input).val().trim() == ''){
                return false;
            }
        }
    }

    function showValidate(input) {
        var thisAlert = $(input).parent();

        $(thisAlert).addClass('alert-validate');
    }

    function hideValidate(input) {
        var thisAlert = $(input).parent();
        $(thisAlert).removeClass('alert-validate');
    }

    })(jQuery);

    var firstName  = document.getElementById("firstName"),
    lastName = document.getElementById("lastName")
    email   = document.getElementById("email"),
    number  = document.getElementById("number"),
    message = document.getElementById("message"),
    submit  = document.getElementById("submit");
    newsletterEmail = document.getElementById("newsletterEmail")
    
  function submissionValidation(){
      if(!email.value && !number.value && !firstName.value && !lastName.value && !message.value){
        alert("oops! looks like you tried sending a form without any input. please enter your name and email.")
      } else if(!email.value){
      alert("Please enter your email address");
  }   else if(!firstName.value) {
      alert("Please enter your first name");
  } else if(!lastName.value) {
    alert("Please enter your last name");
  }else if(number.value && number.value.length < 10 || number.value.length > 13){
      alert("Please make sure you enter a 10 digit phone number.  example: (123) 456-7890");
  }   else{
      alert("Thank you for your interest in Thomas Technology. A developer or representative will be in touch soon!");
  }
  }
$(function() {
    const $gallery = $('.gallery a').simpleLightbox();
  });
  function newsletterSubmissionValidation(){
    newsletterEmail = document.getElementById("newsletterEmail")
    if(!newsletterEmail.value){
      alert("please enter your email address");
    } else{
      alert("thank you for subscribing to our newsletter!");
    }
  }
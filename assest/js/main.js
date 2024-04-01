

   var swiper = new Swiper(".mySwiper", {
    spaceBetween: 0,
    centeredSlides: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

  // $('#thank_content')?.hide(); 
 
  jQuery('.toggle').click(function() {
    jQuery(this).addClass('active');
    jQuery('.login').addClass('active');
    jQuery('.login-section').addClass('active');
    jQuery('body').addClass('active');
});

jQuery('.close-menu').click(function() {
  jQuery(this).removeClass('active');
  jQuery('.login').removeClass('active');
  jQuery('.login-section').removeClass('active');
  jQuery('body').removeClass('active');
});


jQuery('.login-hide').click(function() {
  jQuery(this).removeClass('active');
  jQuery('.login').removeClass('active');
  jQuery('.login-section').removeClass('active');
});




var swiper = new Swiper(".mySwiper", {
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});



 var swiper = new Swiper(".mySwiper", {
  spaceBetween: 30,
  centeredSlides: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});


$("ul.nav-tabs a").click(function (e) {
  e.preventDefault();  
    $(this).tab('show');
});

$(document).ready(function(){
  // Add smooth scrolling to all links
  $("a").on('click', function(event) {

    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){
   
        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
  });
});





$(document).ready(function() {
  $('#contactSubmit').submit(function(event) {
    event.preventDefault(); 
    // window.stop();
    $('#email').trigger("focusout");
    var email = $.trim($("#email").val());	
  
    if(email == '') {
        $('#emailError').show().addClass('has-error').text('Please enter email.');
    } 
    if((email != '')){
        $('#contactForm #emailError').text('').removeClass('has-error').hide();
        enquiry(email);
    }
  });
});

function enquiry(mail,number,message){
  $('#contactSubmit').prop("disabled", true);
  $('#thank_content').hide();
  $('#loader').show();	
  $.ajax({
      url: "/hs/welcome",
      type: "POST",
      data: {'email' : mail},
      dataType: "JSON",
      success: function (jsonStr) {
          var res_data = JSON.stringify(jsonStr);
          var response = JSON.parse(res_data);
          $('#loader').hide();	
          if(response['status'] == 200){
          $('#contactSubmit').prop("disabled", false);
              $('#email').val("");
              $('#message').val("");
              $('#thank_content').show();
              setTimeout(() => {
                  $('#thank_content').hide(); 
              }, 5000);
          }            
      },
      error: function(error){
          console.log("error==========", error);
      }
  });	
}
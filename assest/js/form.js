// jQuery('#contactSubmit').submit(function(event) {
//     event.preventDefault(); 
//     $('#email').trigger("focusout");
//     var email = $.trim($("#email").val());	

//     if(email == '') {
//         $('#emailError').show().addClass('has-error').text('Please enter email.');
//     } 
//     if((email != '')){
//         $('#contactForm #emailError').text('').removeClass('has-error').hide();
//         enquiry(email);
//     }
// });

// function enquiry(mail,number,message){
//     $('#contactSubmit').prop("disabled", true);
//     $('#thank_content').hide();
//     $('#loader').show();	
//     $.ajax({
//         url: "/hs/welcome",
//         type: "POST",
//         data: {'email' : mail},
//         dataType: "JSON",
//         success: function (jsonStr) {
//             var res_data = JSON.stringify(jsonStr);
//             var response = JSON.parse(res_data);
//             console.log("response======", response);
//             $('#loader').hide();	
//             if(response['status'] == 200){
//             $('#contactSubmit').prop("disabled", false);
//                 $('#email').val("");
//                 $('#first_name').val("");
//                 $('#last_name').val("");
//                 $('#number').val("");
//                 $('#message').val("");
//                 $('#thank_content').show();
//                 setTimeout(() => {
//                     $('#thank_content').hide(); 
//                 }, 5000);
//             }            
//         },
//         error: function(error){
//             console.log("error==========", error);
//         }
//     });	
// }

function subscribeNewslatter(first_name, last_name,mail,number,message){
    if($('#Subscribe_email').val()) {
        $('#thank_content_s').hide();
        $('#loader_s').show();	
        $('#subscribed_form').prop("disabled", true);
        $.ajax({
            // url: "https://amw-meet.onrender.com/api/v1/users/contact",
             url: "http://localhost:3000/api/v1/users/contact",
            type: "POST",
            data: {'email' : $('#Subscribe_email').val(),  'type' : 'subscribe', name:$('#Subscribe_email').val().split('@')[0]},
            dataType: "JSON",
            success: function (jsonStr) {
                var res_data = JSON.stringify(jsonStr);
                var response = JSON.parse(res_data);
                console.log("response======", response);
                $('#loader_s').hide();	
                if(response['status'] == 200){
                    $('#subscribed_form').prop("disabled", false);
                    $('#Subscribe_email').val("");
                    $('#thank_content_s').show();
                    setTimeout(() => {
                        $('#thank_content_s').hide(); 
                    }, 5000);

                }            
            },
            error: function(error){
                console.log("error==========", error);
            }
        });	
    } else {
        alert("Please enter your email for newsletters.")
    }
}
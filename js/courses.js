// ====== form validations=======
function emptyErrorIndicate(err_ele){
    err_ele.style.border = "2px solid red";
}

function emptyErrorUnIndicate(err_ele){
    err_ele.style.border = "";
}

function focusElement(form_ele){
    form_ele.focus();
}
//---form values validation functions---
function isNameValid(str){
    return str.match(/^[a-z ]+$/i); 
}

function isPhoneNumValid(str){
    return str.match(/^[0-9]{10}$/);
}

function isEmailValid(str){
    return str.match(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/i);
}
// ---------------------------------
// function copyCourseContactNumber() {
//     let contactNo = document.getElementById('contact-no').value;
//     let whatsappNo = document.getElementById('whatsapp-no');
//     let checkbox = document.getElementById('same-contact-no'); 
//     if (checkbox.checked) {
//         whatsappNo.value = contactNo; 
//         console.log("hello")
//     } else {
//         whatsappNo.value = '';     
//     }
//     console.log("hello")
//     console.log(contactNo)
// }
// Copy contact number function
function copyContactNumber(form) {
    const checkbox = form.querySelector('.same-contact-no');
    const contactNoInput = form.querySelector('.contact-no');
    const whatsappNoInput = form.querySelector('.whatsapp-no');

    if (checkbox && contactNoInput && whatsappNoInput) {
        if (checkbox.checked) {
            whatsappNoInput.value = contactNoInput.value;
        } else {
            whatsappNoInput.value = '';
        }
    }
}
document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('form').forEach(form => {
        const checkbox = form.querySelector('.same-contact-no');
        if (checkbox) {
            checkbox.addEventListener('change', () => copyContactNumber(form));
        }
    });
});

function formValidation(ele){
    function focusFirstElement(form_ele){
        (error_count == 1) ? form_ele.focus() : "";
    }
    
    let name = ele.elements['name'];
    let email = ele.elements['email'];
    let contact_no = ele.elements['contact-no'];
    let whatsapp_no = ele.elements['whatsapp-no'];
    
    name.value = name.value.trim();
    email.value = email.value.trim();
    contact_no.value = contact_no.value.trim();
    whatsapp_no.value = whatsapp_no.value.trim();

    //  -----error indicating functions--------
    let error = '';
    let error_count = 0;

    //---------for name-----------
    if(name.value == ""){
        error_count++;
        emptyErrorIndicate(name);
        focusFirstElement(name);
        document.getElementById(name.id + '-error').innerHTML = "Name is required";
    } else if(!isNameValid(name.value)){
        error_count++;
        emptyErrorIndicate(name);
        focusFirstElement(name);
        document.getElementById(name.id + '-error').innerHTML = "Only Contains Alphabets, Space";
    } else {
        emptyErrorUnIndicate(name);
        document.getElementById(name.id + '-error').innerHTML = "";
    }

    // -----for email---
    if(email.value==""){
        error_count++;
        emptyErrorIndicate(email);
        focusFirstElement(email);
        document.getElementById(email.id + '-error').innerHTML ="Email is required";
    }
   else if(!isEmailValid(email.value)){
        error_count++;
        emptyErrorIndicate(email);
        focusFirstElement(email);
        document.getElementById(email.id + '-error').innerHTML ="Invalid Email";
    } else {
       
        emptyErrorUnIndicate(email);
        document.getElementById(email.id + '-error').innerHTML ="";
    }
    //----for contact number
    if(contact_no.value == ""){
        error_count++;
        emptyErrorIndicate(contact_no);
        focusFirstElement(contact_no);
        document.getElementById(contact_no.id + '-error').innerHTML ="Contact number is required";
    } else if(!isPhoneNumValid(contact_no.value)){
        error_count++;
        emptyErrorIndicate(contact_no);
        focusFirstElement(contact_no);
        document.getElementById(contact_no.id + '-error').innerHTML ="Must Contain 10 Digits";
    } else {
       
        emptyErrorUnIndicate(contact_no);
        document.getElementById(contact_no.id + '-error').innerHTML ="";
    }
   
    //----for whatsapp number
    if(whatsapp_no.value == ""){
        error_count++;
        emptyErrorIndicate(whatsapp_no);
        focusFirstElement(whatsapp_no);
        document.getElementById(whatsapp_no.id + '-error').innerHTML ="Whatapp number is required" ;
    } else if(!isPhoneNumValid(whatsapp_no.value)){
        error_count++;
      
        emptyErrorIndicate(whatsapp_no);
        focusFirstElement(whatsapp_no);
        document.getElementById(whatsapp_no.id + '-error').innerHTML ="Must Contain 10 Digits" ;
    } else {
        error = "";
        emptyErrorUnIndicate(whatsapp_no);
        document.getElementById(whatsapp_no.id + '-error').innerHTML ="" ;
    }
    if(error_count > 0){
        return false;
    } else {

        return true;
    }
}

// === modal js ===
// document.addEventListener("DOMContentLoaded", function() {
//     let modal_body_msg = document.getElementById('modal-body-msg');
//       var modal = document.getElementById('exampleModal');
//       var modalInstance = new bootstrap.Modal(modal);
//       let queryString = window.location.search;
//       const urlParams =new URLSearchParams(queryString);
//       if(urlParams.has('register')){
//         if(urlParams.get('register')=='success'){
//           modal_body_msg.innerHTML ="<b>Your response has been recorded</b>.<br>We will reach you out ASAP!";
//         }
//         else if(urlParams.get('register')=='failure'){
//           modal_body_msg.innerHTML ="<b>Submission failed</b>.<br>Please try again";
//         }
//         modalInstance.show();
//       }
//   });
    // document.addEventListener('DOMContentLoaded', () => {
    //     let queryString = window.location.search;
    //     const urlParams = new URLSearchParams(queryString);

    //     const successMessages = document.querySelectorAll('.courseform-submit-success-message');
    //     const errorMessages = document.querySelectorAll('.courseform-submit-error-message');

    //     successMessages.forEach(msg => msg.style.display = "none");
    //     errorMessages.forEach(msg => msg.style.display = "none");

    //     if (urlParams.has('register')) {
    //         if (urlParams.get('register') === 'success') {
    //             successMessages.forEach(msg => msg.style.display = "block");
    //         } else if (urlParams.get('register') === 'failed') {
    //             errorMessages.forEach(msg => {
    //                 msg.innerHTML = "<b>Submission failed</b>.<br>Please try again";
    //                 msg.style.display = "block";
    //             });
    //         }
    //     }
    // });

    document.addEventListener('DOMContentLoaded', () => {
        const forms = document.querySelectorAll('form');
        forms.forEach(form => {       
            const successMessage = form.querySelector('.courseform-submit-success-message');
            const errorMessage = form.querySelector('.courseform-submit-error-message');
    
            if (successMessage) successMessage.style.display = "none";
            if (errorMessage) errorMessage.style.display = "none";
    
            form.addEventListener('submit', function(event) {
                event.preventDefault();
                if (!formValidation(this)) {
                    return;
                }
                const formData = new FormData(this);
                if (successMessage) successMessage.style.display = "none";
                if (errorMessage) errorMessage.style.display = "none";
                fetch('../database/course-formdata.php', {
                    method: 'POST',
                    body: formData,
                })
                .then(response => response.json())
                .then(data => {
                    console.log(data)
                    if (data.status === 'success') {
    
                        if (successMessage) {
                            successMessage.innerHTML = "<b>Download ready!, We've emailed the course syllabus to you.</b><br>Please check your mail inbox or spam folder";
                            successMessage.style.display = "block";
                            console.log(successMessage)
                        }
                    } else {
                 
                        if (errorMessage) {
                            errorMessage.innerHTML = "<b>Oops! Something went wrong.</b><br>" + data.message;
                            errorMessage.style.display = "block";
                            console.log(errorMessage)
                        }
                    }
                  
                })
                .catch(error => {
                    if (errorMessage) {
                        errorMessage.innerHTML = "<b>Failed to send!.</b><br>Please verify your mail and resubmit the form, or contact us directly for help.";
                        errorMessage.style.display = "block";
                        console.log("error" +  error.message)
                    }
                   
                })
                .finally(() => {
                    // Reset form fields after form submission attempt (success or failure)
                    form.reset();
                });
            });
        });
    });
    
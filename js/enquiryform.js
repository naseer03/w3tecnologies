// ====== form validations=======
function emptyErrorIndicate(err_ele) {
    err_ele.style.border = "2px solid red";
}

function emptyErrorUnIndicate(err_ele) {
    err_ele.style.border = "";
}

function focusElement(form_ele) {
    form_ele.focus();
}

//---form values validation functions---
function isNameValid(str) {
    return /^[a-z ]+$/i.test(str);
}

function isPhoneNumValid(str) {
    return /^[0-9]{10}$/.test(str);
}

function isEmailValid(str) {
    return /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/i.test(str);
}

// ---------------------------------
function copyCourseContactNumber() {
    let contactNo = document.getElementById('enq-contact-no').value;
    let whatsappNo = document.getElementById('enq-whatsapp-no');
    let checkbox = document.getElementById('enq-same-contact-no');
    if (checkbox.checked) {
        whatsappNo.value = contactNo;
    } else {
        whatsappNo.value = '';
    }
}

function enquiryFormValidation(ele) {
    function focusFirstElement(form_ele) {
        if (enq_error_count === 1) form_ele.focus();
    }

    let name = ele.elements['enq-name'];
    let email = ele.elements['enq-email'];
    let contact_no = ele.elements['enq-contact-no'];
    let whatsapp_no = ele.elements['enq-whatsapp-no'];
    let message = ele.elements['enq-message'];

    name.value = name.value.trim();
    email.value = email.value.trim();
    contact_no.value = contact_no.value.trim();
    whatsapp_no.value = whatsapp_no.value.trim();
    message.value = message.value.trim();

    //  -----error indicating functions--------
    let enq_error_count = 0;

    //---------for name-----------
    if (name.value === "") {
        enq_error_count++;
        emptyErrorIndicate(name);
        focusFirstElement(name);
        document.getElementById(name.id + '-error').innerHTML = "Name is required";
    } else if (!isNameValid(name.value)) {
        enq_error_count++;
        emptyErrorIndicate(name);
        focusFirstElement(name);
        document.getElementById(name.id + '-error').innerHTML = "Only Contains Alphabets, Space";
    } else {
        emptyErrorUnIndicate(name);
        document.getElementById(name.id + '-error').innerHTML = "";
    }

    // -----for email---
    if (email.value === "") {
        enq_error_count++;
        emptyErrorIndicate(email);
        focusFirstElement(email);
        document.getElementById(email.id + '-error').innerHTML = "Email is required";
    } else if (!isEmailValid(email.value)) {
        enq_error_count++;
        emptyErrorIndicate(email);
        focusFirstElement(email);
        document.getElementById(email.id + '-error').innerHTML = "Invalid Email";
    } else {
        emptyErrorUnIndicate(email);
        document.getElementById(email.id + '-error').innerHTML = "";
    }

    //----for contact number
    if (contact_no.value === "") {
        enq_error_count++;
        emptyErrorIndicate(contact_no);
        focusFirstElement(contact_no);
        document.getElementById(contact_no.id + '-error').innerHTML = "Contact number is required";
    } else if (!isPhoneNumValid(contact_no.value)) {
        enq_error_count++;
        emptyErrorIndicate(contact_no);
        focusFirstElement(contact_no);
        document.getElementById(contact_no.id + '-error').innerHTML = "Must Contain 10 Digits";
    } else {
        emptyErrorUnIndicate(contact_no);
        document.getElementById(contact_no.id + '-error').innerHTML = "";
    }

    //----for whatsapp number
    if (whatsapp_no.value === "") {
        enq_error_count++;
        emptyErrorIndicate(whatsapp_no);
        focusFirstElement(whatsapp_no);
        document.getElementById(whatsapp_no.id + '-error').innerHTML = "Whatsapp number is required";
    } else if (!isPhoneNumValid(whatsapp_no.value)) {
        enq_error_count++;
        emptyErrorIndicate(whatsapp_no);
        focusFirstElement(whatsapp_no);
        document.getElementById(whatsapp_no.id + '-error').innerHTML = "Must Contain 10 Digits";
    } else {
        emptyErrorUnIndicate(whatsapp_no);
        document.getElementById(whatsapp_no.id + '-error').innerHTML = "";
    }


    if (enq_error_count > 0) {
        return false;
    } else {
        return true;
    }
   
}

// === modal js ===
// === modal js ===
// document.addEventListener("DOMContentLoaded", function() {
//     let modal_body_msg = document.getElementById('enq-modal-body-msg');
//     let modal = document.getElementById('enq-exampleModal');
//     let modalInstance = new bootstrap.Modal(modal);
//     let queryString = window.location.search;
//     const urlParams = new URLSearchParams(queryString);

//     if (urlParams.has('formsubmitted')) {
//         if (urlParams.get('formsubmitted') === 'success') {
//             modal_body_msg.innerHTML = "<b>Your response has been recorded</b>.<br>We will reach you out ASAP!";
//         } else if (urlParams.get('formsubmitted') === 'failed') {
//             modal_body_msg.innerHTML = "<b>Submission failed</b>.<br>Please try again";
//         }
//         modalInstance.show();
//     }
// });
// document.addEventListener('DOMContentLoaded', () => {
//     let queryString = window.location.search;
//     const urlParams = new URLSearchParams(queryString);

//     const successMessages = document.querySelectorAll('.enquiryform-submit-success-message');
//     const errorMessages = document.querySelectorAll('.enquiryform-submit-error-message');

//     successMessages.forEach(msg => msg.style.display = "none");
//     errorMessages.forEach(msg => msg.style.display = "none");

//     if (urlParams.has('formsubmitted')) {
//         if (urlParams.get('formsubmitted') === 'success') {
//             successMessages.forEach(msg => msg.style.display = "block");
//         } else if (urlParams.get('formsubmitted') === 'failed') {
//             errorMessages.forEach(msg => {
//                 msg.innerHTML = "<b>Submission failed</b>.<br>Please try again";
//                 msg.style.display = "block";
//             });
//         }
//     }
// });

// ====== AJAX Submission and Form Handling =======
document.addEventListener('DOMContentLoaded', () => {
    const forms = document.querySelectorAll('form');
    forms.forEach(form => {       
        const successMessage = form.querySelector('.enquiryform-submit-success-message');
        const errorMessage = form.querySelector('.enquiryform-submit-error-message');

        if (successMessage) successMessage.style.display = "none";
        if (errorMessage) errorMessage.style.display = "none";

        form.addEventListener('submit', function(event) {
            event.preventDefault();
            if (!enquiryFormValidation(this)) {
                return;
            }
            const formData = new FormData(this);
            if (successMessage) successMessage.style.display = "none";
            if (errorMessage) errorMessage.style.display = "none";
            fetch('../database/enquiry-formdata.php', {
                method: 'POST',
                body: formData,
            })
            .then(response => response.json())
            .then(data => {
                console.log(data)
                if (data.status === 'success') {

                    if (successMessage) {
                        successMessage.innerHTML = "<b>Thank you! Your message has been sent successfully.</b><br>We will get in touch with you soon.";
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
                    errorMessage.innerHTML = "<b>Oops! Something went wrong.</b><br>Please try again.";
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
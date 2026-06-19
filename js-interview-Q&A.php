<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <?php include "includes/header-links.php" ?>
     <link rel="stylesheet" href="./styles/interview-Q&A.css" >
    <title>JavaScript Interview Questions and Answers</title>
</head>
<body>
    <section class="banner">
        <?php include "includes/header.php"?>
        <div class="container">

            <div class="head">
                <h1>W3 Technologies</h1> 
            </div>
        </div>
    </section>

    <section>
        <div class="container">
         <div class="form-sec">
            <h2>Get Your Free JavaScript Interview Q&A PDF</h2>
            <p>Fill out the form below to access JavaScript interview questions and answers!</p>
            <div class="card">
                <form  method='post' onsubmit="return formValidation(this)" > 
                    <div class="form-ele mb-3">  
                        <input type="text" class="form-control" name="name" id="name" placeholder="Enter your Name" />
                        <span id="name-error" class="form-error"></span>
                    </div>
                    <div class="form-ele mb-3 ">
                    
                        <input type="text"  class="form-control"  id="email"  name="email"  placeholder="Enter your  Email"  />
                        <span id="email-error" class="form-error"></span>
                    </div>
                    <div class="form-ele mb-3">
                        
                        <input type="tel" class="form-control contact-no" name="contact-no" id="contact-no" placeholder="Enter your Contact Number" />
                        <span id="contact-no-error" class="form-error"></span>
                    </div>
                    <div class="form-ele mb-3">
                        
                        <input type="tel" class="form-control whatsapp-no" name="whatsapp-no" id="whatsapp-no" placeholder="Enter your Whatsapp Number" />
                        <div class="form-check">
                            <input class="form-check-input same-contact-no" type="checkbox" value="" id="same-contact-no" name="same-contact-no"  >
                            <label class="form-check-label" for="flexCheckDefault"> whatsapp number same as contact number </label>
                        </div>
                        
                        <span id="whatsapp-no-error" class="form-error"></span>
                    </div>
                    <input type="submit" class="submit-btn">
                    
                    <p class="mt-2 courseform-submit-success-message form-success"></p>
                    <p class="mt-2 courseform-submit-error-message form-error"></p>

                </form>
               
            </div>
        </div>
      </div>
    </section>
    <?php include "includes/footer.php" ?>
<?php include "includes/footer-links.php" ?>

<script>

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
// 

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
                fetch('./database/js-interviewQ&A.php', {
                    method: 'POST',
                    body: formData,
                })
                .then(response => response.json())
                .then(data => {
                    console.log(data)
                    if (data.status === 'success') {
    
                        if (successMessage) {
                            successMessage.innerHTML = "<b>Download Ready! We've emailed the JavaScript Interview Questions and Answers PDF to you.</b><br>Please check your mail inbox or spam folder to access it."
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
                        errorMessage.innerHTML = " <b>Failed to Send!</b><br>Please verify your email address and resubmit the form, or contact us directly for assistance with downloading the JavaScript Interview Questions and Answers PDF.";
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
</script>
</body>
</html>
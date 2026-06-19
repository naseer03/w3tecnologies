
function formAdminRegisterValidation() {
    let name = document.getElementById('name').value.trim();
    let email = document.getElementById('email').value.trim();
    let password = document.getElementById('password').value.trim();
    let confirmPassword = document.getElementById('confirm-password').value.trim();

    let isValid = true;

    document.getElementById('name-error').innerText = '';
    document.getElementById('email-error').innerText = '';
    document.getElementById('password-error').innerText = '';
    document.getElementById('confirm-password-error').innerText = '';

    const namePattern = /^[a-zA-Z\s]+$/;
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const passwordPattern = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/; // Minimum 8 chars, 1 letter, 1 number, 1 special char

    // Validate Name
    if (name === '') {
        document.getElementById('name-error').innerText = 'Name is required';
        isValid = false;
    } else if (!namePattern.test(name)) {
        document.getElementById('name-error').innerText = 'Name can only contain letters and spaces';
        isValid = false;
    }

    // Validate Email
    if (email === '') {
        document.getElementById('email-error').innerText = 'Email is required';
        isValid = false;
    } else if (!emailPattern.test(email)) {
        document.getElementById('email-error').innerText = 'Invalid email format';
        isValid = false;
    }

    // Validate Password
    if (password === '') {
        document.getElementById('password-error').innerText = 'Password is required';
        isValid = false;
    } else if (!passwordPattern.test(password)) {
        document.getElementById('password-error').innerHTML = 
    'Password must be at least 8 characters long,<br>contain at least 1 letter, 1 number, <br> and 1 special character';
        isValid = false;
    }

    // Validate Confirm Password
    if (confirmPassword === '') {
        document.getElementById('confirm-password-error').innerText = 'Confirm Password is required';
        isValid = false;
    } else if (password !== confirmPassword) {
        document.getElementById('confirm-password-error').innerText = 'Passwords do not match';
        isValid = false;
    }

    // Prevent form submission if validation fails
    return isValid;
}

document.addEventListener("DOMContentLoaded", function() {
    let modal_body_msg = document.getElementById('adminregister-modal-body-msg');
      var modal = document.getElementById('adminregisterModal');
      var modalInstance = new bootstrap.Modal(modal);
      let queryString = window.location.search;
      const urlParams =new URLSearchParams(queryString);
      if(urlParams.has('register')){
        if(urlParams.get('register')=='success'){
          modal_body_msg.innerHTML ="<b>Register Successful!.<br> Click 'ok' to login </b>";
        }
        else if(urlParams.get('register')=='failed'){
          modal_body_msg.innerHTML ="<b>Registration Failed !. <br>Try again!</b>";;
        }
        modalInstance.show();
      }
  })
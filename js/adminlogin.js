function formAdminLoginValidation() {
  // Get input values and trim them
  let name = document.getElementById('name').value.trim();
  let password = document.getElementById('password').value.trim();

  // Initialize validation flag
  let isValid = true;

  // Clear previous error messages
  document.getElementById('name-error').innerText = '';
  document.getElementById('password-error').innerHTML = '';  // Clear previous errors

  // Regular expressions for validation
  const namePattern = /^[a-zA-Z\s]+$/;
  const passwordPattern = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;

  // Validate Name
  if (name === '') {
      document.getElementById('name-error').innerText = 'Name is required';
      isValid = false;
  } else if (!namePattern.test(name)) {
      document.getElementById('name-error').innerText = 'Name can only contain letters and spaces';
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

  // Prevent form submission if validation fails
  return isValid;
}


document.addEventListener("DOMContentLoaded", function() {
    let modal_body_msg = document.getElementById('adminlogin-modal-body-msg');
      var modal = document.getElementById('adminloginModal');
      var modalInstance = new bootstrap.Modal(modal);
      let queryString = window.location.search;
      const urlParams =new URLSearchParams(queryString);
      if(urlParams.has('login')){
        if(urlParams.get('login')=='success'){
          modal_body_msg.innerHTML ="<b>Login Successful!.<br> welcome to the dashboard. </b>";
        }
        else if(urlParams.get('login')=='failed'){
          modal_body_msg.innerHTML ="<b>Login Failed !. <br> Invalid Credentials, please login again.</b>";;
        }
        modalInstance.show();
      }
  })
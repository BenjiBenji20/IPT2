// FILLED INPUT VALIDATION BEFORE SUBMIT
(() => {
  'use strict'

  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  const forms = document.querySelectorAll('.needs-validation')

  // Loop over them and prevent submission
  Array.from(forms).forEach(form => {
    form.addEventListener('submit', event => {
      if (!form.checkValidity()) {
        event.preventDefault()
        event.stopPropagation()
      }

      form.classList.add('was-validated')
    }, false)
  })
})()

// creates a popup message and redirect to login page
document.getElementById("RegForm").addEventListener("submit", function(event) {
  // Check if the form is valid
  if (!this.checkValidity()) {
    event.preventDefault(); // Stop form submission if invalid
    return;
  }

  // If the form is valid, show the alert and redirect
  event.preventDefault(); // Prevent default form submission
  alert("Registration successful! Redirecting to login page...");
  window.location.href = "loginpage.html"; // Redirect to login page
});


// Show password when clicked eye icon
const eyeElement = document.querySelector('.eye');
const eyeButtonElement = document.querySelector('.password-eye-icon');
eyeButtonElement.addEventListener('click', () => {
  var passwordInput = document.getElementById("validationCustomPassword");

  if(passwordInput.type === 'password') { 
    passwordInput.type = 'text';
    eyeElement.classList.remove('bi-eye-slash');
    eyeElement.classList.add('bi-eye');
  }
  else {
    passwordInput.type = 'password';
    eyeElement.classList.remove('bi-eye');
    eyeElement.classList.add('bi-eye-slash');
  }
});
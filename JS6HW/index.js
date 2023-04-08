const myForm = document.getElementById('myForm');
const inputs = document.querySelectorAll('#myForm input');

myForm.addEventListener('submit', function(event) {
  event.preventDefault();

  // Check if any field is empty
  let isAnyFieldEmpty = false;
  inputs.forEach(function(input) {
    if (input.value.trim() === '') {
      isAnyFieldEmpty = true;

      // create an error message
      const errorMessage = document.createElement('span');
      errorMessage.classList.add('error');
      errorMessage.textContent = 'Please fill in this field.';

      // append the error message below the input field
      input.parentNode.insertBefore(errorMessage, input.nextSibling);

      // remove the error message when the user starts to write in the field
      input.addEventListener('input', () => {
        errorMessage.remove();
      });
    }
  });

  // Display an alert message
  if (isAnyFieldEmpty) {
    alert('Please fill in all fields.');
  } else {
    alert('OK');
  }
});

inputs.forEach(function(input) {
  input.addEventListener('blur', function() {
    if (this.value.trim() === '') {
      // create an error message
      const errorMessage = document.createElement('span');
      errorMessage.classList.add('error');
      errorMessage.textContent = 'Please fill in this field.';

      // append the error message below the input field
      this.parentNode.insertBefore(errorMessage, this.nextSibling);

      // remove the error message when the user starts to write in the field
      this.addEventListener('input', () => {
        errorMessage.remove();
      });
    }
  });
});
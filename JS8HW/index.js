function validateForm() {
    // Get the form and its input fields
    const form = document.getElementById("myForm");
    const nameInput = document.getElementById("name");
    const emailInput = document.getElementById("email");
    const phoneInput = document.getElementById("phone");
    const passwordInput = document.getElementById("password");
    const selectInput = document.getElementById("select");

    // Check that the name field is not empty
    if (nameInput.value === "") {
      nameInput.nextElementSibling.innerHTML = "Please enter your name.";
      return false;
    } else {
      nameInput.nextElementSibling.innerHTML = "";
    }

    // Check that the email field is a valid email address
    const emailRegex = /^\S+@\S+\.\S+$/;
    if (!emailRegex.test(emailInput.value)) {
      emailInput.nextElementSibling.innerHTML = "Please enter a valid email address.";
      return false;
    } else {
      emailInput.nextElementSibling.innerHTML = "";
    }

    // Check that the phone field is a valid phone number
    const phoneRegex = /^\d{10}$/;
    if (!phoneRegex.test(phoneInput.value)) {
      phoneInput.nextElementSibling.innerHTML = "Please enter a valid phone number (10 digits).";
      return false;
    } else {
      phoneInput.nextElementSibling.innerHTML = "";
    }

    // Check that the password field is at least 8 characters long
    if (passwordInput.value.length < 8) {
      passwordInput.nextElementSibling.innerHTML = "Please enter a password that is at least 8 characters long.";
      return false;
    } else {
      passwordInput.nextElementSibling.innerHTML = "";
    }

    // Check that a select option is selected
    if (selectInput.value === "") {
      selectInput.nextElementSibling.innerHTML = "Please select an option.";
      return false;
    } else {
      selectInput.nextElementSibling.innerHTML = "";
    }

    // If all fields pass validation, submit the form
    return true;
  }
function validateForm() {
  //data collection from the form

  const firstName = document.getElementsByName("userFirstName")[0].value.trim();
  const lastName = document.getElementsByName("userLastName")[0].value.trim();
  const emailID = document.getElementsByName("userEmail")[0].value.trim();
  const phoneNumber = document
    .getElementsByName("userPhoneNumber")[0]
    .value.trim();
  const password = document.getElementsByName("userPassword")[0].value.trim();

  // Error message container
  const error_message = document.getElementById("error_message");

  //regular expression
  const nameRegex = /^[A-Za-z\s]+$/;
  const phoneRegex = /^[0-9]{10}$/;
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  //clear previous error message value

  error_message.textContent = "";

  //validation check

  if (!firstName) {
    error_message.textContent = "First name is required.";
    return false;
  } else if (!nameRegex.test(firstName)) {
    error_message.textContent = "First name can only contain letters";
    return false;
  }
  if (!lastName) {
    error_message.textContent = "Last name is required.";
    return false;
  } else if (!nameRegex.test(lastName)) {
    error_message.textContent = "Last name can only contain letters";
    return false;
  }

  if (!emailID) {
    error_message.textContent = "email is required";
    return false;
  } else if (!emailRegex.test(emailID)) {
    error_message.textContent = "Please enter a valid email address.";
    return false;
  }

  if (!phoneNumber) {
    error_message.textContent = "Phone number is required.";
    return false;
  } else if (!phoneRegex.test(phoneNumber)) {
    error_message.textContent = "Phone number must be 10 digits.";
    return false;
  }

  if (!password) {
    error_message.textContent = "Password is required";
    return false;
  }

  if (password.length <= 8) {
    error_message.textContent = "Password must be at least 8 characters long.";
    return false;
  }
  // if everything is fine alert successful and return true
  alert("Form submitted successfully!");
  window.location.href = "index.html";
  return true;
}

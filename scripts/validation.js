const form = document.getElementById("form");
const sign_in_form = document.getElementById("sign-in-form");
const username_input = document.getElementById("username-input");
const username_input_log_in = document.getElementById("sign-in-username-input");
const email_input = document.getElementById("email-input");
const password_input = document.getElementById("password-input");
const password_input_log_in = document.getElementById("sign-in-password-input");
const repeat_password_input = document.getElementById("repeat-password-input");
const error_message = document.getElementById("error-message");
const sing_in_error_message = document.getElementById("sign-in-error-message");

form.addEventListener("submit", (e) => {
  let errors = [];

  // if (username_input) {
  // If we have a username input then we are in the signup
  errors = getSignupFormErrors(
    username_input.value,
    email_input.value,
    password_input.value
  );
  // } else {
  //   // If we don't have a username input then we are in the login
  //   errors = getLoginFormErrors(
  //     username_input_log_in.value,
  //     password_input_log_in.value
  //   );
  // }

  if (errors.length > 0) {
    // If there are any errors
    e.preventDefault();
    error_message.innerText = errors.join(". ");
  }
});

sign_in_form.addEventListener("submit", (e) => {
  let errors = getLoginFormErrors(
    username_input_log_in.value,
    password_input_log_in.value
  );
  if (errors.length > 0) {
    // If there are any errors
    e.preventDefault();
    sing_in_error_message.innerText = errors.join(". ");
  }
});

function getSignupFormErrors(username, email, password, repeatPassword) {
  let errors = [];

  if (username === "" || username == null) {
    errors.push("Firstname is required");
    username_input.parentElement.classList.add("incorrect");
  }
  if (email === "" || email == null) {
    errors.push("Email is required");
    email_input.parentElement.classList.add("incorrect");
  }
  if (password === "" || password == null) {
    errors.push("Password is required");
    password_input.parentElement.classList.add("incorrect");
  }
  if (password.length < 8) {
    errors.push("Password must have at least 8 characters");
    password_input.parentElement.classList.add("incorrect");
  }
  /*if(password !== repeatPassword){
    errors.push('Password does not match repeated password')
    password_input.parentElement.classList.add('incorrect')
    repeat_password_input.parentElement.classList.add('incorrect')
  }*/

  return errors;
}

function getLoginFormErrors(username_log, password_log) {
  let errors = [];

  if (username_log === "" || username_log == null) {
    errors.push("Email is required");
    username_input_log_in.parentElement.classList.add("incorrect");
  }
  if (password_log === "" || password_log == null) {
    errors.push("Password is required");
    password_input_log_in.parentElement.classList.add("incorrect");
  }

  return errors;
}

const allInputs = [
  username_input,
  email_input,
  password_input,
  repeat_password_input,
  username_input_log_in,
  password_input_log_in,
].filter((input) => input != null);

allInputs.forEach((input) => {
  input.addEventListener("input", () => {
    if (input.parentElement.classList.contains("incorrect")) {
      input.parentElement.classList.remove("incorrect");
      error_message.innerText = "";
    }
  });
});

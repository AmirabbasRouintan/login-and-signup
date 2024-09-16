/*
  Inspired by: "Login Page & Homepage"
  By: Neo  Link: https://dribbble.com/shots/4485321-Login-Page-Homepage
*/

let usernameInput = document.querySelector(".username");
let passwordInput = document.querySelector(".password");
let confirmPasswordInput = document.querySelector(".password-confirm");
let emailInput = document.querySelector(".email");
let emailError = document.querySelector(".email-error"); // Select email error message element
let passwordError = document.querySelector(".password-error"); // Select password error message element
let showPasswordButton = document.querySelector(".password-button");
let signUpButton = document.querySelector(".login-button"); // Select sign-up button
let face = document.querySelector(".face");

// Function to validate email
function validateEmail(email) {
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Basic email format validation
  return emailPattern.test(email) && email.endsWith('@gmail.com'); // Check for @gmail.com
}

// Convert email to lowercase
emailInput.addEventListener("input", (event) => {
  // Convert the entire email input to lowercase
  emailInput.value = emailInput.value.toLowerCase();
});

// Event listener for email input focus
emailInput.addEventListener("focus", (event) => {
  document.querySelectorAll(".hand").forEach((hand) => {
    hand.classList.remove("hide");
    hand.classList.remove("peek");
  });
});

// Event listener for email input changes
emailInput.addEventListener(
  "input",
  _.throttle((event) => {
    let length = Math.min(emailInput.value.length - 16, 19);
    face.style.setProperty("--rotate-head", `${-length}deg`);
  }, 100)
);

// Event listener for password input focus
passwordInput.addEventListener("focus", (event) => {
  document.querySelectorAll(".hand").forEach((hand) => {
    hand.classList.add("hide");
  });
  document.querySelector(".tongue").classList.remove("breath");
});

// Event listener for password input blur
passwordInput.addEventListener("blur", (event) => {
  document.querySelectorAll(".hand").forEach((hand) => {
    hand.classList.remove("hide");
    hand.classList.remove("peek");
  });
  document.querySelector(".tongue").classList.add("breath");
});

// Event listener for username input focus
usernameInput.addEventListener("focus", (event) => {
  let length = Math.min(usernameInput.value.length - 16, 19);
  document.querySelectorAll(".hand").forEach((hand) => {
    hand.classList.remove("hide");
    hand.classList.remove("peek");
  });

  face.style.setProperty("--rotate-head", `${-length}deg`);
});

// Event listener for username input blur
usernameInput.addEventListener("blur", (event) => {
  face.style.setProperty("--rotate-head", "0deg");
});

// Event listener for username input changes
usernameInput.addEventListener(
  "input",
  _.throttle((event) => {
    let length = Math.min(event.target.value.length - 16, 19);
    face.style.setProperty("--rotate-head", `${-length}deg`);
  }, 100)
);

// Event listener for confirm password input changes
confirmPasswordInput.addEventListener("input", (event) => {
  if (passwordInput.value !== confirmPasswordInput.value) {
    passwordError.textContent = "Passwords do not match."; // Show error message
  } else {
    passwordError.textContent = ""; // Clear error message if passwords match
  }
});

// Event listener for sign-up button click
signUpButton.addEventListener("click", (event) => {
  const emailValue = emailInput.value.trim();

  // Validate the email
  if (!validateEmail(emailValue)) {
    emailError.textContent = "Please enter a valid Gmail address."; // Show error message
    event.preventDefault(); // Prevent form submission
  } else {
    emailError.textContent = ""; // Clear error message if email is valid
  }

  // Check if passwords match
  if (passwordInput.value !== confirmPasswordInput.value) {
    passwordError.textContent = "Passwords do not match."; // Show error message
    event.preventDefault(); // Prevent form submission
  } else {
    passwordError.textContent = ""; // Clear error message if passwords match
  }
});

// Event listener for show password button
showPasswordButton.addEventListener("click", (event) => {
  if (passwordInput.type === "text") {
    passwordInput.type = "password";
    confirmPasswordInput.type = "password"; // Hide confirm password
    document.querySelectorAll(".hand").forEach((hand) => {
      hand.classList.remove("peek");
      hand.classList.add("hide");
    });
  } else {
    passwordInput.type = "text";
    confirmPasswordInput.type = "text"; // Show confirm password
    document.querySelectorAll(".hand").forEach((hand) => {
      hand.classList.remove("hide");
      hand.classList.add("peek");
    });
  }
});
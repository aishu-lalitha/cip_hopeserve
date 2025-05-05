// register.js

document.getElementById("registerForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const username = document.getElementById("username").value.trim();
  const password = document.getElementById("password").value;

  // Save user to localStorage as an object
  const user = { username, password };
  localStorage.setItem("userData", JSON.stringify(user));

  alert("Registration successful!");
  window.location.href = "login.html"; // Go to login
});

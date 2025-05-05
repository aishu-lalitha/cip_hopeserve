// login.js

document.getElementById("loginForm").addEventListener("submit", function (e) {
    e.preventDefault();
  
    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value;
  
    const storedUser = JSON.parse(localStorage.getItem("userData"));
  
    if (storedUser && username === storedUser.username && password === storedUser.password) {
      alert("Login successful!");
      window.location.href = "dashboard.html"; // or your home page
    } else {
      alert("Invalid credentials. Try again.");
    }
  });
  
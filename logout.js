// logout.js

// 1. Clear local storage and session storage
localStorage.clear();
sessionStorage.clear();

// 2. Clear all cookies
document.cookie.split(";").forEach(cookie => {
  const eqPos = cookie.indexOf("=");
  const name = eqPos > -1 ? cookie.substring(0, eqPos) : cookie;
  document.cookie = name + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT;path=/";
});

// 3. Redirect to index.html after 2 seconds
setTimeout(() => {
  window.location.href = "index.html";
}, 2000); // Adjust delay as needed (in ms)

document.addEventListener("DOMContentLoaded", () => {
    const logoutButton = document.getElementById("logout");
    
    if (logoutButton) {
        logoutButton.addEventListener("click", () => {
            localStorage.removeItem("isAuthenticated");
            alert("Logged out successfully!");
            window.location.href = "login.html";
        });
    }
    
    if (window.location.pathname.includes("dashboard.html")) {
        const isAuthenticated = localStorage.getItem("isAuthenticated");
        if (!isAuthenticated) {
            alert("You must be logged in to access the dashboard!");
            window.location.href = "login.html";
        }
    }
});

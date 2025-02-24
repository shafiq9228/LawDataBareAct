
// 🔹 Function to Highlight Matched Words
function highlightMatch(text, query) {
    const regex = new RegExp(`(${query})`, 'gi'); // Case-insensitive match
    return text.replace(regex, `<span class="highlight">$1</span>`);
}
// auth.js - Protect pages by checking for a valid token
function checkAuth() {
    const token = localStorage.getItem("token");

    if (!token) {
        // Redirect to login page if token is missing
        window.location.href = "login.html";
    }
}

// Run checkAuth() automatically when a protected page loads
checkAuth();
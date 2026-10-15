const welcome = document.getElementById("welcome")
const userEmail = document.getElementById("userEmail")
const logout = document.getElementById("logout")

const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"))

if (!loggedInUser) {
    window.location.href = "login.html"
} else {
    welcome.textContent = `Welcome, ${loggedInUser.name}`
    userEmail.textContent = `Email: ${loggedInUser.email}`
}

logout.addEventListener("click", () => {
    localStorage.removeItem("loggedInUser")
    window.location.href = "login.html"
})
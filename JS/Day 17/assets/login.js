const loginForm = document.getElementById("loginForm")
const emailInput = document.getElementById("email")
const passwordInput = document.getElementById("password")

if (localStorage.getItem("loggedInUser")) {
    window.location.href = "dashboard.html"
}

loginForm.addEventListener("submit", (event) => {
    event.preventDefault()

    const email = emailInput.value.trim()
    const password = passwordInput.value

    if (!email || !password) {
        alert("All fields are required")
        return
    }

    const users = JSON.parse(localStorage.getItem("users")) || []

    const user = users.find((u) => u.email === email && u.password === password)

    if (!user) {
        alert("Invalid email or password")
        return
    }

    localStorage.setItem("loggedInUser", JSON.stringify(user))
    window.location.href = "dashboard.html"
})
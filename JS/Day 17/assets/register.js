const registerForm = document.getElementById("registerForm")
const nameInput = document.getElementById("name")
const emailInput = document.getElementById("email")
const passwordInput = document.getElementById("password")

registerForm.addEventListener("submit", (event) => {
    event.preventDefault()

    const name = nameInput.value.trim()
    const email = emailInput.value.trim()
    const password = passwordInput.value

    if (!name || !email || !password) {
        alert("All fields are required")
        return
    }

    const users = JSON.parse(localStorage.getItem("users")) || []

    const exists = users.find((user) => user.email === email)

    if (exists) {
        alert("Email already registered")
        return
    }

    users.push({ name: name, email: email, password: password })
    localStorage.setItem("users", JSON.stringify(users))

    alert("Registration successful")
    window.location.href = "login.html"
})
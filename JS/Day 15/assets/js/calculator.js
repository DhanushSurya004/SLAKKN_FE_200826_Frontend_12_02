const form = document.getElementById("calcForm")
const first = document.getElementById("first")
const second = document.getElementById("second")
const clear = document.getElementById("clear")
const answer = document.getElementById("answer")

form.addEventListener("submit", handleSubmit)

clear.addEventListener("click", () => {
    form.reset()
    answer.textContent = ""
})

function handleSubmit(event) {
    event.preventDefault()

    const fir = first.value
    const sec = second.value

    if (!fir || !sec) {
        alert("Enter the Numbers")
        return
    }

    const num1 = Number(fir)
    const num2 = Number(sec)
    const op = event.submitter.value

    if (op === "divi" && num2 === 0) {
        alert("Cannot divide by zero")
        return
    }

    answer.textContent = calculate(num1, num2, op)
}

function calculate(num1, num2, op) {
    if (op === "add") {
        return num1 + num2
    } else if (op === "sub") {
        return num1 - num2
    } else if (op === "multi") {
        return num1 * num2
    } else {
        return num1 / num2
    }
}
const form = document.getElementById("employeeForm")
const empName = document.getElementById("empName")
const empAge = document.getElementById("empAge")
const empDept = document.getElementById("empDept")
const empSalary = document.getElementById("empSalary")
const employeeTable = document.getElementById("employeeTable")

let employees = JSON.parse(localStorage.getItem("employees")) || []

form.addEventListener("submit", (event) => {
    event.preventDefault()

    const name = empName.value.trim()
    const age = empAge.value
    const dept = empDept.value.trim()
    const salary = empSalary.value

    if (!name || !age || !dept || !salary) {
        alert("All fields are required")
        return
    }

    if (Number(age) <= 0 || Number(salary) <= 0) {
        alert("Age and Salary must be positive numbers")
        return
    }

    const employee = {
        id: Date.now(),
        name: name,
        age: Number(age),
        department: dept,
        salary: Number(salary)
    }

    employees.push(employee)
    localStorage.setItem("employees", JSON.stringify(employees))
    displayEmployees()
    form.reset()
})

function displayEmployees() {
    employeeTable.innerHTML = ""

    employees.forEach((emp) => {
        employeeTable.innerHTML += `
            <tr>
                <td>${emp.id}</td>
                <td>${emp.name}</td>
                <td>${emp.age}</td>
                <td>${emp.department}</td>
                <td>${emp.salary}</td>
                <td><button onclick="deleteEmployee(${emp.id})">Delete</button></td>
            </tr>
        `
    })
}

function deleteEmployee(id) {
    employees = employees.filter((emp) => emp.id !== id)
    localStorage.setItem("employees", JSON.stringify(employees))
    displayEmployees()
}

displayEmployees()
const form = document.getElementById("employeeForm")
const empName = document.getElementById("empName")
const empAge = document.getElementById("empAge")
const empDept = document.getElementById("empDept")
const empSalary = document.getElementById("empSalary")
const employeeTable = document.getElementById("employeeTable")

const employees = []

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
        name: name,
        age: Number(age),
        department: dept,
        salary: Number(salary)
    }

    employees.push(employee)
    displayEmployees()
    form.reset()
})

function displayEmployees() {
    employeeTable.innerHTML = ""

    employees.forEach((emp) => {
        employeeTable.innerHTML += `
            <tr>
                <td>${emp.name}</td>
                <td>${emp.age}</td>
                <td>${emp.department}</td>
                <td>${emp.salary}</td>
            </tr>
        `
    })
}
// TASK 1
document.getElementById("btn1").addEventListener("click", function () {
    let studentName = "Arun";
    let studentAge = 25;
    let courseCompleted = true;

    document.getElementById("name1").textContent = "Name: " + studentName;
    document.getElementById("age1").textContent = "Age: " + studentAge;
    document.getElementById("course1").textContent = "Course Completed: " + courseCompleted;
});


// TASK 2
document.getElementById("btn2").addEventListener("click", function () {
    let salary = 15000;
    salary = salary + 5000;

    document.getElementById("result2").textContent = "Updated Salary: " + salary;
});


// TASK 3
document.getElementById("btn3").addEventListener("click", function () {
    let number = 25;
    let result3 = document.getElementById("result3");

    if (number % 2 === 0) {
        result3.textContent = number + " is Even";
    } else {
        result3.textContent = number + " is Odd";
    }
});


// TASK 4
document.getElementById("btn4").addEventListener("click", function () {
    let value1 = "Arun";
    let value2 = 25;
    let value3 = true;
    let value4 = undefined;

    document.getElementById("type1").textContent = value1 + " → " + typeof value1;
    document.getElementById("type2").textContent = value2 + " → " + typeof value2;
    document.getElementById("type3").textContent = value3 + " → " + typeof value3;
    document.getElementById("type4").textContent = value4 + " → " + typeof value4;
});


// TASK 5
document.getElementById("btn5").addEventListener("click", function () {
    let a = 10;
    let b = 20;

    document.getElementById("before5").textContent = "Before: a = " + a + ", b = " + b;

    let temp = a;
    a = b;
    b = temp;

    document.getElementById("after5").textContent = "After: a = " + a + ", b = " + b;
});
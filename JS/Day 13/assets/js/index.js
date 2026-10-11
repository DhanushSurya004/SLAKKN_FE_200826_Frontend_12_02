// TASK 1
let heading1 = document.getElementById("heading1");
let colorBtn = document.getElementById("colorBtn");
heading1.style.color = "black";

colorBtn.addEventListener("click", function () {
    heading1.style.color = "red";
    heading1.style.fontSize = "30px";
});


// TASK 2
let box = document.getElementById("box");
let blueBtn = document.getElementById("blueBtn");
let yellowBtn = document.getElementById("yellowBtn");
box.style.backgroundColor = "white";

blueBtn.addEventListener("click", function () {
    box.style.backgroundColor = "blue";
    box.style.color = "white";
});

yellowBtn.addEventListener("click", function () {
    box.style.backgroundColor = "yellow";
    box.style.color = "black";
});


// TASK 3
let para = document.getElementById("para");
let hideBtn = document.getElementById("hideBtn");
let showBtn = document.getElementById("showBtn");

hideBtn.addEventListener("click", function () {
    para.style.display = "none";
});

showBtn.addEventListener("click", function () {
    para.style.display = "block";
});


// TASK 4
let heading4 = document.getElementById("heading4");
let toggleBtn = document.getElementById("toggleBtn");

toggleBtn.addEventListener("click", function () {
    if (heading4.style.display === "none") {
        heading4.style.display = "block";
    } else {
        heading4.style.display = "none";
    }
});


// TASK 5
let themeBox = document.querySelector("#themeBox");
let themeBtn = document.querySelector("#themeBtn");

themeBtn.addEventListener("click", function () {
    themeBox.classList.toggle("dark");
});
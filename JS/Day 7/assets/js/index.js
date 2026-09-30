let arr1 = [10, 20, 30, 40, 50];
console.log(arr1[0]);

let arr2 = ["Red", "Green", "Blue"];
arr2[1] = "Yellow";
console.log(arr2);

let arr3 = [1, 2, 3, 4, 5];
let sum = 0;
for (let i = 0; i < arr3.length; i++) {
  sum += arr3[i];
}
console.log(sum);

let arr4 = ["A", "B", "C"];
arr4.push("D");
console.log(arr4);

let arr5 = [5, 10, 15, 20];
arr5.pop();
console.log(arr5);

let arr6 = [100, 200, 300];
console.log(arr6[arr6.length - 1]);

let students1 = [
  { name: "Arun", mark: 80 },
  { name: "Priya", mark: 90 }
];
console.log(students1[0].name);

let students2 = [
  { name: "Kumar", city: "Chennai" },
  { name: "Ravi", city: "Madurai" }
];
students2[1].city = "Coimbatore";
console.log(students2);

let students3 = [
  { name: "Divya", mark: 70 },
  { name: "Sarjith", mark: 85 },
  { name: "Vetri", mark: 60 }
];
for (let i = 0; i < students3.length; i++) {
  console.log(students3[i].name, students3[i].mark);
}

let students4 = [
  { name: "Riyas", course: "Frontend" },
  { name: "Pugazh", course: "Backend" }
];
students4.push({ name: "Dhanush", course: "Fullstack" });
console.log(students4);

let students5 = [
  { name: "Arun", Hobby: ["Cricket", "Football"] },
  { name: "Riyas", Hobby: ["Sleeping", "Gaming"] }
];
console.log(students5[0].Hobby[1]);

let students6 = [
  { name: "Sarjith", mark: 65 },
  { name: "Vetri", mark: 90 },
  { name: "Priya", mark: 55 }
];
let total = 0;
for (let i = 0; i < students6.length; i++) {
  total += students6[i].mark;
}
console.log("Total =", total);
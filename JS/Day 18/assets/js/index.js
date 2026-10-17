// Task 1
const createCounter = () => {
  let count = 0;
  return () => {
    count += 10;
    return count;
  };
};

const counter = createCounter();
console.log(counter());
console.log(counter());
console.log(counter());
console.log(counter());
console.log(counter());

// Task 2
const calculateSalary = (salary, callback) => {
  return callback(salary);
};

const addBonus = (salary) => salary + 5000;
const deductSalary = (salary) => salary - 2000;

console.log("Original Salary: 20000");
console.log("Salary After Bonus: " + calculateSalary(20000, addBonus));
console.log("Salary After Deduction: " + calculateSalary(20000, deductSalary));

// Task 3
const checkResult = (mark) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (mark >= 35) {
        resolve("Student Passed");
      } else {
        reject("Student Failed");
      }
    }, 2000);
  });
};

checkResult(75)
  .then((result) => console.log(result))
  .catch((error) => console.log(error));

checkResult(20)
  .then((result) => console.log(result))
  .catch((error) => console.log(error));
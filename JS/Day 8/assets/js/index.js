function checkEvenOdd(number) {
  if (number % 2 === 0) {
    return "Even Number";
  } else {
    return "Odd Number";
  }
}
console.log(checkEvenOdd(7));

function findLargest(a, b) {
  if (a > b) {
    return a;
  } else {
    return b;
  }
}
console.log(findLargest(15, 30));

function findSmallest(a, b) {
  if (a < b) {
    return a;
  } else {
    return b;
  }
}
console.log(findSmallest(15, 30));

function findLargestOfThree(a, b, c) {
  let largest = a;
  if (b > largest) {
    largest = b;
  }
  if (c > largest) {
    largest = c;
  }
  return largest;
}
console.log(findLargestOfThree(10, 25, 18));

function checkVote(age) {
  if (age >= 18) {
    return "Eligible to Vote";
  } else {
    return "Not Eligible to Vote";
  }
}
console.log(checkVote(16));

function square(number) {
  return number * number;
}
console.log(square(6));

function cube(number) {
  return number * number * number;
}
console.log(cube(3));

function findFactorial(number) {
  let result = 1;
  for (let i = 1; i <= number; i++) {
    result *= i;
  }
  return result;
}
console.log(findFactorial(5));

function getTotal(numbers) {
  let total = 0;
  for (let i = 0; i < numbers.length; i++) {
    total += numbers[i];
  }
  return total;
}
console.log(getTotal([10, 20, 30]));

function countEven(numbers) {
  let count = 0;
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 === 0) {
      count++;
    }
  }
  return count;
}
console.log(countEven([10, 15, 20, 25, 30]));

function countOdd(numbers) {
  let count = 0;
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 !== 0) {
      count++;
    }
  }
  return count;
}
console.log(countOdd([10, 15, 20, 25, 30]));

function findMax(numbers) {
  let max = numbers[0];
  for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] > max) {
      max = numbers[i];
    }
  }
  return max;
}
console.log(findMax([12, 45, 7, 89, 23]));

function findMin(numbers) {
  let min = numbers[0];
  for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] < min) {
      min = numbers[i];
    }
  }
  return min;
}
console.log(findMin([12, 45, 7, 89, 23]));

function reverseNumber(number) {
  let reversed = 0;
  while (number > 0) {
    let digit = number % 10;
    reversed = reversed * 10 + digit;
    number = Math.floor(number / 10);
  }
  return reversed;
}
console.log(reverseNumber(1234));

function sumOfDigits(number) {
  let sum = 0;
  while (number > 0) {
    sum += number % 10;
    number = Math.floor(number / 10);
  }
  return sum;
}
console.log(sumOfDigits(4567));

function checkPrime(number) {
  if (number < 2) {
    return "Not Prime";
  }
  for (let i = 2; i < number; i++) {
    if (number % i === 0) {
      return "Not Prime";
    }
  }
  return "Prime Number";
}
console.log(checkPrime(17));

function checkPalindrome(number) {
  let original = number;
  let reversed = 0;
  while (number > 0) {
    let digit = number % 10;
    reversed = reversed * 10 + digit;
    number = Math.floor(number / 10);
  }
  if (original === reversed) {
    return "Palindrome";
  } else {
    return "Not Palindrome";
  }
}
console.log(checkPalindrome(121));

function celsiusToFahrenheit(celsius) {
  return (celsius * 9) / 5 + 32;
}
console.log(celsiusToFahrenheit(37));

// ===========================JavaScript Basic Problem Solving 1 ===================
// Problem : 1,  Create a variable called carName, assign the value Volvo to it.
let carName = "Volvo";







// Problem : 2,  On one single line, declare three variables with the following names and values:
let firstName = "John", lastName = "Doe", age = 35;

let firstName = "John";
let lastName = "Doe";
let age = 35;






// Problem : 3, Use the correct assignment operator that will result in x being 50 (same as x = x * y).
let x = 10;
let y = 5;
x *= y;
console.log(x);











// Problem : 4,  Use comments to describe the correct data type of the following variables:

let length = 16; // number
let lastName = "Johnson"; // string


const fullName = {
    firstName: "John",
    lastName: "Doe"
};    // object










// Problem : 5,   Execute the function named myFunction.
function myFunction() {
    alert("Hello World!");
};

myFunction();







// Problem : 6,  Create an object called person with name = John, age = 50, Then, access the object to alert("John is 50").

let person = {
    name: "John",
    age: 50,
};
alert(person.name + " is " + person.age);











// Problem : 7,   The <button> element should do something when someone clicks on it. Try to fix it!
<button onclick="this.innerText='Try to fix it!'"> Click me.</button>









// Problem : 8,  Array Related Question
//  1 Alert the number of items in an array, using the correct Array property:
const cars = ["Volvo", "Jeep", "Mercedes"];
alert(cars.length);

// 2 Change the first item of Brand to "Ford".
const Brand = ["Volvo", "Jeep", "Mercedes"];
Brand[0] = 'Ford';





// Problem : 9,    Math Related Problems
//  1. Use the correct Math method to create a random number.
let test = Math.floor(Math.random() * 10);
console.log(test);

// 2. Use the correct Math method to return the largest number of 10 and 20.
let number = [10, 20]
let result = Math.max(...number);
console.log(result);

// 3. Use the correct Math method to get the square root of 9.
Math.sqrt(9);








// Problem : 10, comparison operator related problems!
// 1. Choose the correct comparison operator to alert true, when x is greater than y.
let x = 10;
let y = 5;

if (x > y) {
    alert('X is greater than Y');
}
else {
    alert(' Y is Less than X ');
}



// 2. Choose the correct conditional (ternary) operator to alert "Too young" if age is less than 18, otherwise alert "Old enough".

let age = 15;
age < 18 ? alert("Too young") : alert("Old enough");



















// ===========================JavaScript Basic Problem Solving 2 ===================


// Problem 1,  Write a function to convert Celsius to Fahrenheit. The function should take a single argument, which is the temperature in Celsius.

function celsiusToFahrenheit(celsius) {
    return (celsius * 9 / 5) + 32;
}

console.log(celsiusToFahrenheit(0));
console.log(celsiusToFahrenheit(25));













// Problem 2, Write a function to check if a number is even. The function should take a single argument, which is the number to check.

function isEven(num) {
    return num % 2 === 0;
}

console.log(isEven(4));
console.log(isEven(7));









// Problem 3, Write a function to sum two numbers. The function should take two arguments, which are the numbers to sum.
function sum(a, b) {
    return a + b;
}

console.log(sum(3, 4));
console.log(sum(10, 20));












// Problem 4, Write a function to find the smallest number in an array. The function should take a single argument, which is the array to search.

function findSmallestNum(arr) {
    return Math.min(...arr);
}

console.log(findSmallestNum([3, 5, 1, 9]));
console.log(findSmallestNum([-1, -5, 0, 10]));









// Problem 5, Write a function to count the number of vowels in a string. The function should take a single argument, which is the string to search.

function countVowels(str) {
    let vowels = 'aeiouAEIOU';
    let count = 0;

    for (let char of str) {
        if (vowels.includes(char)) {
            count++;
        }
    }
    return count;
}



console.log(countVowels("hello world"));
console.log(countVowels("Javascript"));














// Problem 6, Write a function to get the first element of an array. The function should take a single argument, which is the array.

function getFirstElement(arr) {
    return arr[0];
}

console.log(getFirstElement([1, 2, 3]));
console.log(getFirstElement(["a", "b", "c"]));









// Problem 7,   Write a function to check if an array is empty. The function should take a single argument, which is the array.

function isArrayEmpty(arr) {
    return arr.length === 0;
}

console.log(isArrayEmpty([]));
console.log(isArrayEmpty([1, 2, 3]));











// Problem 8,   Write a function to return the factorial of a number. The function should take a single argument, which is the number.

function factorialize(num) {
    if (num === 0 || num === 1) return 1;
    return num * factorialize(num - 1);
}

console.log(factorialize(5));
console.log(factorialize(7));












// Problem 9,  Write a function to reverse a string. The function should take a single argument, which is the string to reverse.

function reverseString(str) {
    return str.split('').reverse().join('');

}
console.log(reverseString("hello"));
console.log(reverseString("world"));














// Problem 10,  Write a function to convert a string to lowercase. The function should take a single argument, which is the string to convert.
function toLowerCase(str) {
    return str.toLowerCase();
}

console.log(toLowerCase("HELLO WORLD"));
console.log(toLowerCase("JavaScript"));













// Problem 11, Write a function to find the length of a string. The function should take a single argument, which is the string.
function stringLength(str) {
    return str.length;
}

console.log(stringLength("hello"));
console.log(stringLength("world"));













// Problem 12, Write a function to merge two arrays. The function should take two arguments, which are the arrays to merge.
function mergeArrays(arr1, arr2) {
    let test = [...arr1, ...arr2];
    return test;
}

console.log(mergeArrays([1, 2, 3], [4, 5, 6]));
console.log(mergeArrays(["a", "b"], ["c", "d"]));












// Problem 13, Write a function to get the last element of an array. The function should take a single argument, which is the array.
function getLastElement(arr) {
    return arr[arr.length - 1];
}

console.log(getLastElement([1, 2, 3]));
console.log(getLastElement(["a", "b", "c"]));












// Problem 14, Write a function to get the first character of a string. The function should take a single argument, which is the string.
function getFirstCharacter(str) {
    return str[0];
}

console.log(getFirstCharacter("hello"));
console.log(getFirstCharacter("world"));











// Problem 15,  Write a function to find the sum of all elements in an array. The function should take a single argument, which is the array.
function sumArray(arr) {
    const sum = arr.reduce(function (x, y) {
        return x + y;
    }, 0);

    return sum;
}

console.log(sumArray([1, 2, 3, 4]));
console.log(sumArray([-1, -2, -3, -4]));
console.log(sumArray([1.5, 2.5, 3.5]));

// 💛 JavaScript Code for Operators (Day 04)

// 🧮 1. Arithmetic Operators
let a = 10;
let b = 3;

console.log("Addition:", a + b);
console.log("Subtraction:", a - b);
console.log("Multiplication:", a * b);
console.log("Division:", a / b);
console.log("Modulus:", a % b);
console.log("Exponentiation:", a ** b);

// 🔁 2. Assignment Operators
let x = 5;
x += 3; // same as x = x + 3
console.log("Assignment (+=):", x);

// ⚖️ 3. Comparison Operators
console.log("Equal (==):", a == b);
console.log("Strict Equal (===):", a === b);
console.log("Not Equal (!=):", a != b);
console.log("Greater Than:", a > b);
console.log("Less Than or Equal To:", a <= b);

// 🧠 4. Logical Operators
let isAdult = true;
let hasID = false;

console.log("AND (&&):", isAdult && hasID);
console.log("OR (||):", isAdult || hasID);
console.log("NOT (!):", !isAdult);

// 🧩 5. Ternary Operator
let age = 18;
let message = (age >= 18) ? "Eligible to vote 🗳️" : "Not eligible to vote ❌";
console.log("Ternary Result:", message);

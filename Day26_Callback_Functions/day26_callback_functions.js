// 💛 JavaScript code for Callback Functions (Day 26)

// Basic callback example
function greet(name, callback) {
  console.log("Hello, " + name);
  callback();
}

function afterGreeting() {
  console.log("Welcome to Day 26!");
}

greet("Akash", afterGreeting);

// Callback with timeout
console.log("\n--- Using setTimeout ---");

setTimeout(() => {
  console.log("This runs after 2 seconds!");
}, 2000);

// Callback with array method (forEach)
console.log("\n--- Callback in forEach ---");

const numbers = [10, 20, 30];

numbers.forEach((num) => {
  console.log("Number:", num);
});

// Custom callback
function processNumber(n, callback) {
  console.log("Processing:", n);
  callback(n);
}

processNumber(5, (result) => {
  console.log("Square:", result * result);
});

# Mini Project: Simple Calculator (Day 13)

## Description
In this mini project, I built a simple calculator using JavaScript.  
It performs basic math operations like addition, subtraction, multiplication,  
and division. The project uses functions, loops, and user input to create an  
interactive tool that keeps running until the user chooses to exit.

## Code
function add(a, b) { return a + b; }
function sub(a, b) { return a - b; }
function mul(a, b) { return a * b; }
function div(a, b) { return b === 0 ? "Cannot divide by zero!" : a / b; }

while (true) {
  console.log("1.Add  2.Subtract  3.Multiply  4.Divide  5.Exit");
  let choice = prompt("Enter your choice:");

  if (choice === "5") {
    console.log("Exiting Calculator...");
    break;
  }

  if (!["1", "2", "3", "4"].includes(choice)) {
    console.log("Invalid choice!");
    continue;
  }

  let num1 = Number(prompt("Enter first number:"));
  let num2 = Number(prompt("Enter second number:"));

  if (isNaN(num1) || isNaN(num2)) {
    console.log("Invalid number!");
    continue;
  }

  if (choice === "1") console.log("Result:", add(num1, num2));
  if (choice === "2") console.log("Result:", sub(num1, num2));
  if (choice === "3") console.log("Result:", mul(num1, num2));
  if (choice === "4") console.log("Result:", div(num1, num2));
}

## Output
1.Add  2.Subtract  3.Multiply  4.Divide  5.Exit  
Enter first number: 10  
Enter second number: 5  
Result: 15

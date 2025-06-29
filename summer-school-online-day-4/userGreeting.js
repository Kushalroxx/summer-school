let userName = prompt("Enter your name:");
let userAge = parseInt(prompt("Enter your age:"));

if (userAge < 18) {
  alert(`Hey ${userName}, you're a teen!`);
} else if (userAge >= 18 && userAge <= 60) {
  alert(`Welcome ${userName}, you're an adult!`);
} else {
  alert(`Hello ${userName}, you're a senior citizen!`);
}

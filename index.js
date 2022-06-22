let first_number = Number(window.prompt("Enter first number :"));
let second_number = Number(window.prompt("Enter second number :"));
let operator = window.prompt("Enter an operator :");

if (operator === "+") {
    alert(first_number + second_number);
} else if (operator === "-") {
    alert(first_number - second_number);
} else if (operator === "*") {
    alert(first_number * second_number);
} else if (operator === "/") {
    alert(first_number / second_number);
} else if (operator === "%") {
    alert(first_number % second_number);
} else {
    alert("Invalid opertion");
}

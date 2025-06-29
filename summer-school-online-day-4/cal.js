while (true) {
    let num1 = parseFloat(prompt("Enter the first number:"));
    let num2 = parseFloat(prompt("Enter the second number:"));

    let operation = prompt("Choose an operation: +, -, *, /");

    let result;
    if (isNaN(num1) || isNaN(num2)) {
        alert("Invalid input. Please enter valid numbers.");

    } else {
        switch (operation) {
            case "+":
                result = num1 + num2;
                alert(`Result: ${num1} + ${num2} = ${result}`);
                break;
            case "-":
                result = num1 - num2;
                alert(`Result: ${num1} - ${num2} = ${result}`);
                break;
            case "*":
                result = num1 * num2;
                alert(`Result: ${num1} * ${num2} = ${result}`);
                break;
            case "/":
                if (num2 === 0) {
                    alert("Cannot divide by zero.");
                } else {
                    result = num1 / num2;
                    alert(`Result: ${num1} / ${num2} = ${result}`);
                }
                break;
            default:
                alert("Invalid operation. Please choose +, -, *, or /");
        }
    }

}
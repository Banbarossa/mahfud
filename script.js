let currentInput = "";
let operator = null;
let previousInput = "";

function appendNumber(number) {
    currentInput += number;
    document.getElementById("screen").value = currentInput;
}

function appendDecimal() {
    if (!currentInput.includes(".")) {
        currentInput += ".";
        document.getElementById("screen").value = currentInput;
    }
}

function chooseOperator(op) {
    if (currentInput === "") return;
    if (previousInput !== "") {
        calculateResult();
    }
    operator = op;
    previousInput = currentInput;
    currentInput = "";
}

function calculateResult() {
    let result;
    const prev = parseFloat(previousInput);
    const current = parseFloat(currentInput);
    if (isNaN(prev) || isNaN(current)) return;

    switch (operator) {
        case "+":
            result = prev + current;
            break;
        case "-":
            result = prev - current;
            break;
        case "*":
            result = prev * current;
            break;
        case "/":
            result = prev / current;
            break;
        default:
            return;
    }
    currentInput = result;
    operator = null;
    previousInput = "";
    document.getElementById("screen").value = currentInput;
}

function clearScreen() {
    currentInput = "";
    operator = null;
    previousInput = "";
    document.getElementById("screen").value = "";
}
document.addEventListener('keydown', function(event) {
    const key = event.key; // Mendapatkan nilai tombol yang ditekan
    if (key >= 0 && key <= 9) {
        // Jika tombol angka ditekan (0-9)
        appendNumber(key);
    } else if (key === '.') {
        // Jika tombol titik (.) ditekan
        appendDecimal();
    } else if (key === '+' || key === '-' || key === '*' || key === '/') {
        // Jika tombol operator (+, -, *, /) ditekan
        chooseOperator(key);
    } else if (key === '=' || key === 'Enter') {
        // Jika tombol Enter atau = ditekan
        calculateResult();
    } else if (key === 'Backspace' || key === 'Delete') {
        // Jika tombol Backspace atau Delete ditekan
        clearScreen();
    }
});

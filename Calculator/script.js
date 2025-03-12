function appendSymbol(symbol) {
    document.getElementById('display').innerText += symbol;
}

function clearDisplay() {
    document.getElementById('display').innerText = '';
}

function deleteLast() {
    let current = document.getElementById('display').innerText;
    document.getElementById('display').innerText = current.slice(0, -1);
}

function calculate() {
    let result = document.getElementById('display').innerText;
    try {
        document.getElementById('display').innerText = eval(result);
    } catch (error) {
        document.getElementById('display').innerText = 'Error';
    }
}

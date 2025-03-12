function convertTemperature() {
    const temperature = parseFloat(document.getElementById('temperature').value);
    const convertFrom = document.getElementById('convert-from').value;
    const convertTo = document.getElementById('convert-to').value;
    let convertedTemp = 0;

    if (isNaN(temperature)) {
        document.getElementById('result').innerText = "Please enter a valid number!";
        document.getElementById('result').classList.add('fade-in');
        return;
    }

    // Celsius to other units
    if (convertFrom === 'Celsius' && convertTo === 'Fahrenheit') {
        convertedTemp = (temperature * 9/5) + 32;
    } else if (convertFrom === 'Celsius' && convertTo === 'Kelvin') {
        convertedTemp = temperature + 273.15;
    }

    // Fahrenheit to other units
    else if (convertFrom === 'Fahrenheit' && convertTo === 'Celsius') {
        convertedTemp = (temperature - 32) * 5/9;
    } else if (convertFrom === 'Fahrenheit' && convertTo === 'Kelvin') {
        convertedTemp = ((temperature - 32) * 5/9) + 273.15;
    }

    // Kelvin to other units
    else if (convertFrom === 'Kelvin' && convertTo === 'Celsius') {
        convertedTemp = temperature - 273.15;
    } else if (convertFrom === 'Kelvin' && convertTo === 'Fahrenheit') {
        convertedTemp = ((temperature - 273.15) * 9/5) + 32;
    }

    if (convertFrom === convertTo) {
        convertedTemp = temperature; // If same unit is chosen
    }

    const resultText = `Converted Temperature: ${convertedTemp.toFixed(2)} ${convertTo}`;
    document.getElementById('result').innerText = resultText;
    document.getElementById('result').classList.add('fade-in');

    // Reset animation to trigger again
    setTimeout(() => {
        document.getElementById('result').classList.remove('fade-in');
    }, 500);
}

function convertTemperature() {
    const temperatureInput = document.getElementById('temperature').value;
    const unit = document.getElementById('unit').value;
    const resultDiv = document.getElementById('result');

    if (isNaN(temperatureInput) || temperatureInput === '') {
        resultDiv.textContent = 'Please enter a valid number';
        return;
    }

    const temperature = parseFloat(temperatureInput);
    let convertedTemp;

    if (unit === 'C') {
        const fahrenheit = (temperature * 9/5) + 32;
        const kelvin = temperature + 273.15;
        convertedTemp = `Fahrenheit: ${fahrenheit.toFixed(2)}°F, Kelvin: ${kelvin.toFixed(2)}K`;
    } else if (unit === 'F') {
        const celsius = (temperature - 32) * 5/9;
        const kelvin = (temperature - 32) * 5/9 + 273.15;
        convertedTemp = `Celsius: ${celsius.toFixed(2)}°C, Kelvin: ${kelvin.toFixed(2)}K`;
    } else if (unit === 'K') {
        const celsius = temperature - 273.15;
        const fahrenheit = (temperature - 273.15) * 9/5 + 32;
        convertedTemp = `Celsius: ${celsius.toFixed(2)}°C, Fahrenheit: ${fahrenheit.toFixed(2)}°F`;
    }

    resultDiv.textContent = convertedTemp;
}

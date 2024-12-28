// JavaScript for the noise pollution calculator
document.getElementById('calculator').addEventListener('submit', function(e) {
    e.preventDefault(); // Prevent the form from submitting

    // Get input values
    const source1 = parseFloat(document.getElementById('source1').value);
    const source2 = parseFloat(document.getElementById('source2').value);
    const source3 = parseFloat(document.getElementById('source3').value);

    // Calculate total noise level using logarithmic formula
    const totalNoise = 10 * Math.log10(10**(source1 / 10) + 10**(source2 / 10) + 10**(source3 / 10));

    // Display the result
    document.getElementById('result').innerText = `Total Noise Level: ${totalNoise.toFixed(2)} dB`;
});
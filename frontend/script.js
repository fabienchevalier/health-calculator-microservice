document.addEventListener('DOMContentLoaded', () => {
    // BMI Form Submission
    const bmiForm = document.getElementById('bmi-form');
    bmiForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        const height = parseFloat(document.getElementById('bmi-height').value);
        const weight = parseFloat(document.getElementById('bmi-weight').value);
        const resultElement = document.getElementById('bmi-result');

        const response = await fetch('http://localhost:5001/api/bmi', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ height, weight }),
        });

        const data = await response.json();
        if (response.ok) {
            resultElement.textContent = `Your BMI is ${data.bmi.toFixed(2)}`;
        } else {
            resultElement.textContent = `Error: ${data.error}`;
        }
    });

    // BMR Form Submission
    const bmrForm = document.getElementById('bmr-form');
    bmrForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        const height = parseFloat(document.getElementById('bmr-height').value);
        const weight = parseFloat(document.getElementById('bmr-weight').value);
        const age = parseInt(document.getElementById('bmr-age').value, 10);
        const gender = document.getElementById('bmr-gender').value;
        const resultElement = document.getElementById('bmr-result');

        const response = await fetch('http://localhost:5001/api/bmr', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ height, weight, age, gender }),
        });

        const data = await response.json();
        if (response.ok) {
            resultElement.textContent = `Your BMR is ${data.bmr.toFixed(2)}`;
        } else {
            resultElement.textContent = `Error: ${data.error}`;
        }
    });
});
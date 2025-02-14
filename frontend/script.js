document.addEventListener('DOMContentLoaded', () => {
    // Collapsible Button Functionality
    const collapsibles = document.getElementsByClassName('collapsible');
    for (let i = 0; i < collapsibles.length; i++) {
        collapsibles[i].addEventListener('click', function () {
            this.classList.toggle('active');
            const content = this.nextElementSibling;
            if (content.style.display === 'block') {
                content.style.display = 'none';
            } else {
                content.style.display = 'block';
            }
        });
    }

    // Close Button Functionality
    const closes = document.getElementsByClassName('close');
    for (let i = 0; i < closes.length; i++) {
        closes[i].addEventListener('click', function () {
            const content = this.parentElement;
            content.style.display = 'none';
        });
    }

    // BMI Form Submission
    const bmiForm = document.getElementById('bmi-form');
    bmiForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        const height = parseFloat(document.getElementById('bmi-height').value);
        const weight = parseFloat(document.getElementById('bmi-weight').value);
        const resultElement = document.getElementById('bmi-result');

        try {
            const response = await fetch('http://localhost:5001/api/bmi', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ height, weight }),
            });

            const data = await response.json();
            console.log('BMI Response:', data);

            if (response.ok) {
                resultElement.textContent = `Your BMI is ${data.bmi.toFixed(2)}`;
            } else {
                resultElement.textContent = `Error: ${data.error}`;
            }
        } catch (error) {
            console.error('Error:', error);
            resultElement.textContent = `Error: ${error.message}`;
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

        try {
            const response = await fetch('http://localhost:5001/api/bmr', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ height, weight, age, gender }),
            });

            const data = await response.json();
            console.log('BMR Response:', data);

            if (response.ok) {
                resultElement.textContent = `Your BMR is ${data.bmr.toFixed(2)}`;
            } else {
                resultElement.textContent = `Error: ${data.error}`;
            }
        } catch (error) {
            console.error('Error:', error);
            resultElement.textContent = `Error: ${error.message}`;
        }
    });
});
document.addEventListener('DOMContentLoaded', async () => {
    let API_BASE_URL = 'http://localhost:5001/api'; // Default fallback URL

    // Fetch API URL from the backend
    try {
        const response = await fetch('/api/config');
        const config = await response.json();
        API_BASE_URL = config.API_BASE_URL;
        console.log('Using API Base URL:', API_BASE_URL);
    } catch (error) {
        console.error('Failed to load config:', error);
    }

    // ✅ Initialize collapsible popups
    initCollapsibles();

    // ✅ Initialize BMI Form Submission
    initBMIForm(API_BASE_URL);

    // ✅ Initialize BMR Form Submission
    initBMRForm(API_BASE_URL);
});

// ✅ Function to initialize collapsible popups
function initCollapsibles() {
    const collapsibles = document.getElementsByClassName('collapsible');
    for (let i = 0; i < collapsibles.length; i++) {
        collapsibles[i].addEventListener('click', function () {
            this.classList.toggle('active');
            const content = this.nextElementSibling;
            content.style.display = content.style.display === 'block' ? 'none' : 'block';
        });
    }

    const closes = document.getElementsByClassName('close');
    for (let i = 0; i < closes.length; i++) {
        closes[i].addEventListener('click', function () {
            const content = this.parentElement;
            content.style.display = 'none';
        });
    }
}

// ✅ Function to initialize BMI form submission
function initBMIForm(API_BASE_URL) {
    const bmiForm = document.getElementById('bmi-form');
    if (!bmiForm) return;

    bmiForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        const height = parseFloat(document.getElementById('bmi-height').value);
        const weight = parseFloat(document.getElementById('bmi-weight').value);
        const resultElement = document.getElementById('bmi-result');

        try {
            const response = await fetch(`${API_BASE_URL}/bmi`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ height, weight }),
            });

            const data = await response.json();
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
}

// ✅ Function to initialize BMR form submission
function initBMRForm(API_BASE_URL) {
    const bmrForm = document.getElementById('bmr-form');
    if (!bmrForm) return;

    bmrForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        const height = parseFloat(document.getElementById('bmr-height').value);
        const weight = parseFloat(document.getElementById('bmr-weight').value);
        const age = parseInt(document.getElementById('bmr-age').value, 10);
        const gender = document.getElementById('bmr-gender').value;
        const resultElement = document.getElementById('bmr-result');

        try {
            const response = await fetch(`${API_BASE_URL}/bmr`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ height, weight, age, gender }),
            });

            const data = await response.json();
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
}

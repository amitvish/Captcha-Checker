let captchaText = document.getElementById('captcha');

// Function to generate CAPTCHA
function generateCaptcha() {
    let chars = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let captchaLength = 6;
    let captcha = '';

    for(let i = 0; i < captchaLength; i++) {
        let randomChar = chars[Math.floor(Math.random() * chars.length)];
        captcha += randomChar;
    }

    captchaText.innerHTML = captcha;
}

// Function to check the CAPTCHA
function checkCaptcha() {
    let inputVal = document.getElementById('inputText').value;

    if(inputVal === captchaText.innerHTML) {
        alert('CAPTCHA Matched');
    } else {
        alert('CAPTCHA Mismatched, please try again');
    }

    generateCaptcha(); // Generate a new CAPTCHA after each attempt
    document.getElementById('inputText').value = ''; // Clear the input field
}

// Generate initial CAPTCHA
generateCaptcha();

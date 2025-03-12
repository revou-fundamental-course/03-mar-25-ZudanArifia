// Welcome Message
document.addEventListener('DOMContentLoaded', function() {
    // Get user name from localStorage or prompt
    let userName = localStorage.getItem('userName');
    if (!userName) {
        userName = prompt('Please enter your name:');
        if (userName) {
            localStorage.setItem('userName', userName);
        }
    }
    
    // Update welcome message
    const welcomeMessage = document.getElementById('welcome-message');
    if (welcomeMessage && userName) {
        welcomeMessage.textContent = `Hi ${userName}, Welcome To Website`;
    }
});

// Form Validation
document.addEventListener('DOMContentLoaded', function() {
    const messageForm = document.getElementById('message-form');
    if (messageForm) {
        messageForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form values
            const name = document.getElementById('name').value;
            const date = document.getElementById('date').value;
            const gender = document.querySelector('input[name="gender"]:checked')?.value;
            const message = document.getElementById('message').value;
            
            // Validate form
            if (!name || !date || !gender || !message) {
                alert('Please fill in all fields');
                return;
            }
            
            // Display form values
            const formResult = document.getElementById('form-result');
            if (formResult) {
                const currentTime = new Date().toLocaleString();
                formResult.innerHTML = `
                    <h3>Form Submission Result:</h3>
                    <p><strong>Current time:</strong> ${currentTime}</p>
                    <p><strong>Name:</strong> ${name}</p>
                    <p><strong>Date:</strong> ${date}</p>
                    <p><strong>Gender:</strong> ${gender}</p>
                    <p><strong>Message:</strong> ${message}</p>
                `;
            }
            
            // Clear form
            messageForm.reset();
        });
    }
});

// Mobile Navigation Toggle
document.addEventListener('DOMContentLoaded', function() {
    const navToggle = document.getElementById('nav-toggle');
    const navLinks = document.querySelector('.nav-links');
    
    if (navToggle && navLinks) {
        navToggle.addEventListener('click', function() {
            navLinks.classList.toggle('show');
        });
    }
});

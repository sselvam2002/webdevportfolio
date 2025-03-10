// scripts.js

// Wait for the DOM to fully load before executing scripts
document.addEventListener('DOMContentLoaded', function() {

    // --- Contact Form Validation --- 
    // Get the contact form element by its ID
    const contactForm = document.getElementById('contact-form');
    if  (contactForm) {
        // Add an event listener to the form element
        contactForm.addEventListener('submit', function(event) {
            // Retrive the trimmed values from the form fields
            const name = document.getElementById('name').value.trim();
            const email = document.getElementById('email').value.trim();
            const message = document.getElementById('message').value.trim();

            // Check if any of the fields are empty
            if (name === '' || email === '' || message === '') {
                // Prevent the form from submitting
                event.preventDefault();
                // Display an alert message
                alert('Please fill in all fields');
            } else {
                // Optinally, you can show a confirmation m
                alert('Your message has been sent');
            }
        });
    }

    // --- Navigation Menu for Mobile ---
    // Get the menu button element by its ID
    const menuButton = document.getElementById('menu-button');
    // Get the navigation menu element by its ID (assuming it has an ID of 'menu')
    const menu = document.getElementById('menu');
    if (menuButton && menu) {
        // Add an event listener to the menu button
        menuButton.addEventListener('click', function() {
            // Toggle the 'active' class on the menu element
            menu.classList.toggle('active');
        });
    }

});

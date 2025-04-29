document.addEventListener('DOMContentLoaded', function () {
    const menuIcon = document.querySelector('#menu-icon');
    const navbar = document.querySelector('.navbar');
    const form = document.getElementById('contact-form');


    // Ensure the form exists
    if (form) {
        form.addEventListener('submit', function (event) {
            event.preventDefault();  // Prevent page reload

            // Show alert on form submission
            alert('Thank you! Your message has been sent.');

            // Reset form fields
            form.reset();
        });
    } else {
        console.error('Form not found!');
    }
});

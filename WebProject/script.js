// Highlight the current page in the navbar
document.addEventListener("DOMContentLoaded", function() {
    const currentPage = document.body.getAttribute("data-page");
    const navbarLinks = document.querySelectorAll(".navbar a");

    navbarLinks.forEach(link => {
        if (link.getAttribute("href").includes(currentPage)) {
            link.classList.add("active");
        }
    });
});

// Smooth scrolling for navbar links
document.querySelectorAll('.navbar a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Form validation
document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();

    let formValid = true;
    let errors = [];
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const subject = document.getElementById('subject').value;
    const message = document.getElementById('message').value;
    const agree = document.getElementById('agree').checked;

    if (!name) {
        formValid = false;
        errors.push("Name is required.");
    }

    if (!email) {
        formValid = false;
        errors.push("Email is required.");
    } else if (!/\S+@\S+\.\S+/.test(email)) {
        formValid = false;
        errors.push("Email is invalid.");
    }

    if (!subject) {
        formValid = false;
        errors.push("Subject is required.");
    }

    if (!message) {
        formValid = false;
        errors.push("Message is required.");
    }

    if (!agree) {
        formValid = false;
        errors.push("You must agree to the terms.");
    }

    const errorContainer = document.getElementById('form-errors');
    errorContainer.innerHTML = "";

    if (formValid) {
        alert('Form submitted successfully!');
        this.reset();
    } else {
        errors.forEach(error => {
            const errorItem = document.createElement('p');
            errorItem.textContent = error;
            errorContainer.appendChild(errorItem);
        });
    }
});

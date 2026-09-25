document.getElementById('consultationForm').addEventListener('submit', function(e) {
    e.preventDefault();
    alert("Thank you! Your request has been sent. Our team will contact you shortly. / तुमची विनंती पाठवली गेली आहे. आमची टीम लवकरच तुमच्याशी संपर्क साधेल.");
    this.reset();
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
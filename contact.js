function validateForm() {
    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const email = document.getElementById('email').value;
    const emailRegex = /^.*@.*\..*$/;

    if (firstName === null) {
        alert('Invalid First Name');
        return;
    }
    if (lastName === null) {
        alert('Invalid Last Name');
        return;
    }
    if (!emailRegex.test(email)) {
        alert('Invalid email')
        return;
    }

    
    alert('Thank you, we have received your inquiry and an agent will get back to you as soon as possible.');
}
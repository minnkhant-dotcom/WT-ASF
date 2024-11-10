$(document).ready(function(){
    $(".logo").click(function() {
        window.location.href = "index.html";
    });

    $('#newsletter-form').on('submit', function (e) {
        e.preventDefault();
        alert("Thank you for subscribing to our newsletter!");
        $('#name').val('');
        $('#email').val('');
    });

});

function validateForm() {
    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let message = document.getElementById("message").value.trim();
    let errorElement = document.getElementById("error");
    let errorMessage = "";

    errorElement.innerHTML = "";

    if (name === "") {
        errorMessage += "Name is required. ";
    }

    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!emailPattern.test(email)) {
        errorMessage += "Please enter a valid email address. ";
    }

    if (message === "") {
        errorMessage += "Message cannot be empty. ";
    }

    if (errorMessage) {
        errorElement.innerHTML = errorMessage;
        return false; // Prevent form submission
    }

    alert(`Your message has been received, ${name}! We will get back to you at ${email} shortly. Thank you for your input.`);
    return true; 
}

  
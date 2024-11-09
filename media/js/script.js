$(document).ready(function(){S
    $("#logo").click(function() {
        window.location.href = "another.html"
    })

    $('#newsletter-form').on('submit', function (e) {
        e.preventDefault();
        alert("Thank you for subscribing to our newsletter!");
        $('#name').val('');
        $('#email').val('');
    });

});

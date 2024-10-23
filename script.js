

document.addEventListener('DOMContentLoaded', function () {
    var button = document.getElementById('toggleButton');
    var dropdown = document.querySelector('.dropdown1');

    // Toggle dropdown on button click
    button.addEventListener('click', function (event) {
        event.stopPropagation(); // Prevent the click event from propagating to the document
        dropdown.style.display = dropdown.style.display === 'none' ? 'block' : 'none';
    });

    // Close dropdown on document click
    document.addEventListener('click', function () {
        dropdown.style.display = 'none';
    });

    // Prevent dropdown from closing when clicking inside it
    dropdown.addEventListener('click', function (event) {
        event.stopPropagation();
    });
});




document.addEventListener('DOMContentLoaded', function () {
    var button = document.getElementById('rtoggleButton');
    var dropdown = document.querySelector('.right-dropdown');

    // Toggle dropdown on button click
    button.addEventListener('click', function (event) {
        event.stopPropagation(); // Prevent the click event from propagating to the document
        dropdown.style.display = dropdown.style.display === 'none' ? 'block' : 'none';
    });

    // Close dropdown on document click
    document.addEventListener('click', function () {
        dropdown.style.display = 'none';
    });

    // Prevent dropdown from closing when clicking inside it
    dropdown.addEventListener('click', function (event) {
        event.stopPropagation();
    });
});



document.addEventListener('DOMContentLoaded', function () {
    var button = document.getElementById('stoggleButton');
    var dropdown = document.querySelector('.search');

    // Toggle dropdown on button click
    button.addEventListener('click', function (event) {
        event.stopPropagation(); // Prevent the click event from propagating to the document
        dropdown.style.display = dropdown.style.display === 'none' ? 'block' : 'none';
    });

    // Close dropdown on document click
    document.addEventListener('click', function () {
        dropdown.style.display = 'none';
    });

    // Prevent dropdown from closing when clicking inside it
    dropdown.addEventListener('click', function (event) {
        event.stopPropagation();
    });
});



 
/*********************************************************************************
*  BTI225 – Assignment 6 
*  I declare that this assignment is my own work in accordance with Seneca  Academic Policy.  
*  No part of this assignment has been copied manually or electronically from any other source
*  (including web sites) or distributed to other students.
* 
*  Name: _____Shreya_________________ Student ID: _129778221__ Date: __11 August, 2023___
*
*********************************************************************************/ 

document.getElementById('contact-form').addEventListener('submit', function(event) {
    var firstName = document.getElementById('first-name').value;
    // Get other form field values

    var errorMessages = [];

    if (!/^[A-Za-z .]+$/.test(firstName)) {
        errorMessages.push('First Name must only contain letters, dots, and spaces.');
    }

    // Add other validation checks here

    if (errorMessages.length > 0) {
        event.preventDefault();
        var errorContainer = document.createElement('div');
        errorContainer.className = 'error';
        errorContainer.innerHTML = errorMessages.join('<br>');
        var form = document.getElementById('contact-form');
        form.appendChild(errorContainer);
    }
});

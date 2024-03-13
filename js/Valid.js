 
function validateForm() {
    var isValid = true;

    
    // Validate name
    var name = document.getElementById('name').value.trim();
    if (name === '') {
        isValid = false;
        document.getElementById('errorName').innerText = 'Please enter your name.';
    } else {
        document.getElementById('errorName').innerText = '';
    }

    // Validate email
    var email = document.getElementById('email').value.trim();
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (email === '') {
        isValid = false;
        document.getElementById('errorEmail').innerText = 'Please enter your email.';
    } else if (!emailRegex.test(email)) {
        isValid = false;
        document.getElementById('errorEmail').innerText = 'Please enter a valid email address.';
    } else {
        document.getElementById('errorEmail').innerText = '';
    }

    // Validate phone number
    var phoneNumber = document.getElementById('phoneNumber').value.trim();
    if (phoneNumber === '') {
        isValid = false;
        document.getElementById('errorPhoneNumber').innerText = 'Please enter your phone number.';
    } else {
        document.getElementById('errorPhoneNumber').innerText = '';
    }

    // Validate ZIP code
    var zipCode = document.getElementById('zipCode').value.trim();
    if (zipCode === '') {
        isValid = false;
        document.getElementById('errorZipCode').innerText = 'Please enter your ZIP code.';
    } else {
        document.getElementById('errorZipCode').innerText = '';
    }

    // Validate service selection
    var service = document.getElementById('title2').value;
    if (service === 'default') {
        isValid = false;
        document.getElementById('errorService').innerText = 'Please select a service.';
    } else {
        document.getElementById('errorService').innerText = '';
    }

    //User-Type
    var Usertype = document.getElementById('title').value;
    if (Usertype === 'default') {
        isValid = false;
        document.getElementById('errortype').innerText = 'Please select a Type.';
    } else {
        document.getElementById('errortype').innerText = '';
    }

    return isValid;
         


    
    

}
function submitForm() {
    if (validateForm()) {
        document.getElementById('sub-form').innerHTML = ` 
                <div class="submission-success">
                    <h2>Thank you, submission is successful!</h2>
                    <p>We will connect with you soon <i class="fa fa-envelope me-2"></i></p>
                    <a class="btn btn-primary py-2 px-3 me-3" href="index.html">
                                    Go back to Home
                                </a>
                </div>`
        return true;
    } else {
        // If validation fails, prevent form submission
        return false;
    }


}

// ############################################################################################################################################################################

//Contact form

function contact() { 
    var isValid = true;

    var inputName = document.getElementById('name').value;
    var inputEmail = document.getElementById('email').value;
    var inputMessage = document.getElementById('message').value;
    var inputPhone = document.getElementById('phone').value;

    var nameError = document.getElementById('errorName');
    var emailError = document.getElementById('errorEmail');
    var messageError = document.getElementById('errorMessage');
    var errorPhone = document.getElementById('errorPhone');
    var ProblemType = document.getElementById('title3').value;
    var fileUrl = document.getElementById('fileUrl').value;

    if (inputName.trim() === '') {
        nameError.innerHTML = 'Please enter your name.';
        isValid = false;
    } else {
        nameError.innerHTML = '';
    }
    if (inputEmail.trim() === '') {
        emailError.innerHTML = 'Please enter your email.';
        isValid = false;
    } else {
        emailError.innerHTML = '';
    }
    if (inputMessage.trim() === '') {
        messageError.innerHTML = 'Please enter your message.';
        isValid = false;
    } else {
        messageError.innerHTML = '';
    }
    if (inputPhone.trim() === '') {
         errorPhone.innerHTML = 'Please enter your Contact Number.';
        isValid = false;
    } else {
        errorPhone.innerHTML = '';
    }
    // if (fileUrl.trim() === '') {
    //      document.getElementById('errorurl').innerHTML = 'Please Upload URl';
    //     isValid = false;
    // } else {
    //     document.getElementById('errorurl').innerHTML = '';
    // }
    if (ProblemType === 'default') {
        isValid = false;
        document.getElementById('Problemerrortype').innerText = 'Please select a Type.';
    } else {
        document.getElementById('Problemerrortype').innerText = '';
    }

    if (isValid) {
        document.getElementById("submitButton").value = "Wait a Second..";
        var formData = new FormData(document.getElementById("sub-form"));

        fetch(document.getElementById("sub-form").getAttribute("action"), {
            method: 'POST',
            body: formData
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.text();
        })
        .then(data => {
            console.log(data); // Log success message
            // Add any other success actions here, like showing a confirmation message
            document.getElementById('sub-form').innerHTML = `
                <div class="submission-success">
                    <h2 class='text-center'>Thank you, submission is successful!</h2>
                    <p class='text-center'>We will connect with you soon <i class="fa fa-envelope me-2"></i></p>
                </div>`;
             
        })
        .catch(error => {
            console.error('There was an error!', error);
            // Add error handling here, like displaying an error message to the user
        });
    }

    return false; // Prevent default form submission
}




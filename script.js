 function submitForm() {
            var firstName = document.getElementById("firstName").value;
            var lastName = document.getElementById("lastName").value;
            var phoneNumber = document.getElementById("phoneNumber").value;
            var email = document.getElementById("email").value;

            var alertMessage = "First Name: " + firstName + " Last Name: " + lastName + " Phone Number: " + phoneNumber + " Email ID: " + email;
            alert(alertMessage);
            return false; // Prevent form submission
        }
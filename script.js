document.getElementById('signupForm').addEventListener('submit', function(event) {
    
    event.preventDefault();

    
    var name = document.getElementById('name').value.trim();
    var email = document.getElementById('email').value.trim();
    var gender = document.getElementById('gender').value;
    var password = document.getElementById('password').value.trim();
    var occupation = document.getElementById('occupation').value;

    
    if (!name || !email || !gender || !password || !occupation) {
        alert("Please fill out all required fields.");
        return;
    }

    
    var output = document.getElementById('output');
    output.innerHTML = 'Name: ' + name + '<br>Email: ' + email + '<br>Gender: ' + gender + '<br>Password: ' + password + '<br>Occupation: ' + occupation;
});

function checkInput(input) {
    if (input.value.trim() === '') {
        input.style.borderColor = "red";
    } else {
        input.style.borderColor = "green";
    }
}

function clearBorder(input) {
    input.style.borderColor = "";
}

function togglePasswordVisibility() {
    var passwordInput = document.getElementById('password');
    if (passwordInput.type === "password") {
        passwordInput.type = "text";
    } else {
        passwordInput.type = "password";
    }
}

document.getElementById('signupForm').addEventListener('reset', function() {
    document.getElementById('output').innerHTML = '';
});


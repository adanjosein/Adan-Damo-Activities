function login() {
    const username = $('#username').val();
    const password = $('#password').val();

    if (!username || !password) {
        $("#message")
            .text("Please enter both username and password")
            .css("color", "red")
            .removeClass("d-none");
        return;
    }
 
    $.ajax({
        url: '/check-user',
        type: 'POST',
        contentType: 'application/json',
        data: JSON.stringify({ username, password }),
        success: function(response) {
            if (response.success === true) {
                $("#message")
                    .text("Success")
                    .css("color", "green")
                    .removeClass("d-none");
                    
                window.location.href = "/dashboard";
            } else {
                $("#message")
                    .text("Invalid username or password")
                    .css("color", "red")
                    .removeClass("d-none");
            }
        },
        error: function(xhr, status, error) {
            console.error('Error:', error);
            $("#message")
                .text("Invalid username or password.")
                .css("color", "red")
                .removeClass("d-none");
        }
    }); 
}
function register() {
    const username = $('#reg_username').val();
    const password = $('#reg_password').val();
    const confirmPassword = $('#confirm_password').val();

    if (!username || !password || !confirmPassword) {
        $('#register_message').text('Please fill in all fields');
        return;
    }

    if (password !== confirmPassword) {
        $('#register_message').text('Passwords do not match');
        return;
    }

    $.ajax({
        url: '/register',
        type: 'POST',
        contentType: 'application/json',
        data: JSON.stringify({ username, password }),
        success: function(response) {
            if (response.success) {
                alert('Registration successful! Please login.');
                $('#registerModal').modal('hide');
                clearRegisterForm();
            } else {
                $('#register_message').text(response.message);
            }
        },
        error: function(xhr, status, error) {
            $('#register_message').text('Error during registration: ' + error);
        }
    });
}

function clearRegisterForm() {
    $('#reg_username').val('');
    $('#reg_password').val('');
    $('#confirm_password').val('');
    $('#register_message').text('');
}
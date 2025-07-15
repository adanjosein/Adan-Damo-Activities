<?php
$conn = mysqli_connect("localhost", "root", "", "sql_injection");

if (!$conn) {
    die("Connection failed: " . mysqli_connect_error());
}

$message = '';

if (isset($_POST['username']) && isset($_POST['password'])) {
    $username = $_POST['username'];
    $password = $_POST['password'];

    $sql = "SELECT * FROM users WHERE username = '$username' AND password = '$password'";
    
    $result = mysqli_query($conn, $sql);

    if (mysqli_num_rows($result) > 0) {
        $message = "<div class='message success'>Login successful! 🎉</div>";
    } else {
        $message = "<div class='message error'>Invalid credentials.</div>";
    }
}

mysqli_close($conn);
?>

<!DOCTYPE html>
<html>
<head>
    <title>SQL Injection Demo Login</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            background: #f5f7fa;
            display: flex;
            align-items: center;
            justify-content: center;
            flex-direction: column;
            height: 100vh;
            margin: 0;
        }
        .message {
            width: 320px;
            text-align: center;
            margin-bottom: 20px;
            padding: 10px;
            border-radius: 4px;
            font-weight: bold;
        }
        .success {
            background-color: #d4edda;
            color: #155724;
            border: 1px solid #c3e6cb;
        }
        .error {
            background-color: #f8d7da;
            color: #721c24;
            border: 1px solid #f5c6cb;
        }
        .login-container {
            background: white;
            padding: 30px 40px;
            border-radius: 8px;
            box-shadow: 0 0 10px rgba(0,0,0,0.1);
            width: 320px;
            text-align: center;
        }
        .login-container h2 {
            margin-bottom: 20px;
            color: #333;
        }
        .login-container label {
            display: block;
            text-align: left;
            margin-bottom: 5px;
            color: #555;
        }
        .login-container input[type="text"],
        .login-container input[type="password"] {
            width: 100%;
            padding: 10px;
            margin-bottom: 15px;
            border: 1px solid #ccc;
            border-radius: 4px;
        }
        .login-container input[type="submit"] {
            background-color: #007bff;
            color: white;
            padding: 10px;
            width: 100%;
            border: none;
            border-radius: 4px;
            cursor: pointer;
            font-weight: bold;
        }
        .login-container input[type="submit"]:hover {
            background-color: #0056b3;
        }
        .note {
            margin-top: 15px;
            font-size: 12px;
            color: #888;
        }
    </style>
</head>
<body>
    <?php
    echo $message;
    ?>
    <div class="login-container">
        <h2>Login Demo</h2>
        <form method="POST" action="">
            <label for="username">Username:</label>
            <input type="text" name="username" id="username" >

            <label for="password">Password:</label>
            <input type="text" name="password" id="password" >

            <input type="submit" value="Login">
        </form>
        <p class="note">
            For demonstration purposes only.
        </p>
    </div>
</body>
</html>

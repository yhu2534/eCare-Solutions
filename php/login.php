<?php
session_start();

include('inc/methods.php');

$redirection_URL = 'index.html';
$host = 'localhost';
$db_user = 'root';
$db_name = 'eshop';
$db_password = '';



if (!empty($_POST['email']) && !empty($_POST['password'])) {
	$checked_string = check_email($_POST['email']);
	if ($checked_string['validation'] == true && empty($checked_string['error_info'])) {
		$email = $checked_string['valid_address'];
		// $sha1_PW = sha1($_POST['password']);
		$sha1_PW = $_POST['password'];

		$dsn = "mysql:host=$host;dbname=$db_name";
		$dbh = new PDO($dsn, $db_user, $db_password);
		$stmt = $dbh->prepare("SELECT * FROM account WHERE email = :email AND sha1_PW = :sha1_PW");
		$stmt->bindParam(':email', $email);
		$stmt->bindParam(':sha1_PW', $sha1_PW);
		$stmt->execute();
		$result = $stmt->fetch(PDO::FETCH_ASSOC);
		print_r($result);
		print("\n");
	} else {
		$info = $checked_string['error_info'];
		echo "<script>alert('$info');</script>";
	}
} else {
	echo "<script>alert('Email and password are both required.');</script>";
}
?>

<!DOCTYPE HTML>
<html>

<head>
	<title>Login Required</title>
</head>

<body>
	<div>
		<?php
		if (isset($_SESSION['account']['id']) && isset($_SESSION['account']['password'])) {
			header("refresh:0, url=$redirection_URL");
			echo "<script>alert('Log in Successfully!');</script>";
		} else {
			echo '<form action="login.php" method="post">';
			echo '<fieldset>';
			echo '<legend>Log In or Register</legend>';
			echo '<p><label for="email">Email:</label>';
			echo '<input type="text" name="email" id="email" size="30"/></p>';
			echo '<p><label for="password">Password:</label>';
			echo '<input type="password" name="password" id="password" size="30"/></p>';
			echo '<button type="submit" name="login">Login</button>';
			echo '</fieldset>';
			echo '</form>';
		}
		?>
	</div>
</body>

</html>
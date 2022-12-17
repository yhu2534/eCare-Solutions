<?php

//check if the input string is a valid email.
//input: a string needed to be verified
//output: an array $email_info: 
//bool $email_info['validation'], str $email_info['error_info'], str $email_info['valid_address']
function check_email($string)
{
    $email_info = array();
    $email_info['validation'] = false;

    $string = strtolower(trim($string));
    if (preg_match('/(.+)@((.+)\.(.+))/', $string, $match)) {
        $left = strlen($match[1]);
        $right_both = strlen($match[2]);
        $right_left = strlen($match[3]);
        $right_right = strlen($match[4]);

        if (preg_match('/[^a-z0-9]{2,}/', $match[0])) {
            $email_info['error_info'] = 'Non-alphanumeric characters should not appear one after another.';
            return  $email_info;
        } else if (preg_match('/[^a-z0-9@\._-]{1,}/', $match[0])) {
            $email_info['error_info'] = 'Email address does not allow to contain invalid character(s).';
            return  $email_info;
        } else if (preg_match('/^[^a-z0-9]/', $match[0]) || preg_match('/[^a-z0-9]$/', $match[0])) {
            $email_info['error_info'] = 'Email address should only begin/end with alphanumeric characters.';
            return  $email_info;
        } else if ($left > 64 || $right_both > 255) {
            $email_info['error_info'] = 'Overlength.';
            return  $email_info;
        } else if (substr_count($match[0], "@") > 1) {
            $email_info['error_info'] = '"@" Should not appear more than once.';
            return  $email_info;
        } else {
            $email_info['validation'] = true;
            $email_info['valid_address'] = $match[0];
            return  $email_info;
        }
    } else {
        $email_info['error_info'] = 'Not an email address.';
        return  $email_info;
    }
}

function register_email_account($email, $PW, $verification_code, $DB_user, $DB_PW, $DB_name, $host){
    ;
}



//check account email + password. Login if matched and return account info
//input account email and user password
//output array: account['ID'], account['sha1_PW], account['email'], account['mobile'], account['landline'], account['first_name'], account['last_name'], account['company_name']
function email_login_verification($unverified_email, $unverified_PW, $DB_user, $DB_PW, $DB_name, $host)
{
    if (empty($host)) {
        $host = "localhost";
        echo 'Host name was empty, now set up as "localhost" instead.';
    }
    if (!empty($DB_user) && !empty($DB_PW)) {
        if (!empty($unverified_email) && !empty($unverified_PW)) {
            $checked_email = check_email($unverified_email);
            if ($checked_email['validation'] == true && empty($checked_email['error_info'])) {
                $sha1_unverified_PW = sha1($unverified_PW);

                $dsn = "mysql:host=$host;dbname=$DB_name";
                $dbh = new PDO($dsn, $DB_user, $DB_PW);
                $stmt = $dbh->prepare("SELECT * FROM `$DB_name`.`account` WHERE email = :email AND sha1_PW = :sha1_unverified_PW");
                $stmt->bindParam(':email', $checked_email['address']);
                $stmt->bindParam(':sha1_unverified_PW', $sha1_unverified_PW);
                $stmt->execute();
                $result = $stmt->fetch(PDO::FETCH_ASSOC);
                //对于返回结果的处理
                //添加 两个 关闭语句
            } else {
                $info = $checked_email['error_info'];
                echo "<script>alert('$info');</script>";
            }
        } else {
            echo "<script>alert('Email and password are both required.');</script>";
        }
    } else {
        echo "DB user and DB password are both required!";
    }
}

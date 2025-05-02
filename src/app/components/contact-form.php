<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST');
header('Access-Control-Allow-Headers: Content-Type');
session_start();
error_reporting(E_ALL & ~E_NOTICE);

function valid_email($email)
{
    return filter_var($email, FILTER_VALIDATE_EMAIL) !== false;
}

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $errors = [];

    // Get and validate input data
    $name = trim($_POST['name']);
    $email = trim($_POST['email']);
    $phone = trim($_POST['phone']);
    $city = trim($_POST['city']);
    $course = trim($_POST['course']);

    // Validate name
    if (empty($name)) {
        $errors['name_error'] = 'Name is required';
    } elseif (!preg_match("/^[A-Za-z\s]+$/", $name)) {
        $errors['name_error'] = 'Name should only contain letters and spaces';
    }

    // Validate email
    if (empty($email)) {
        $errors['email_error'] = 'Email is required';
    } elseif (!valid_email($email)) {
        $errors['email_error'] = 'Invalid email format';
    }

    // Validate phone
    if (empty($phone)) {
        $errors['phone_error'] = 'Phone number is required';
    } elseif (!preg_match("/^[0-9]+$/", $phone)) {
        $errors['phone_error'] = 'Phone number should only contain numbers';
    }

    // Validate city and course
    if (empty($city)) {
        $errors['city_error'] = 'City is required';
    }
    if (empty($course)) {
        $errors['course_error'] = 'Course is required';
    }

    if (empty($errors)) {
        // Prepare email body
        $Body = "
        <html>
        <head>
            <style type='text/css'>
                .TFtable { width: 100%; border-collapse: collapse; }
                .TFtable td { padding: 7px; border: #EAF2FA 1px solid; }
                .TFtable tr { background: #EAF2FA; }
                .TFtable tr:nth-child(odd) { background: #EAF2FA; }
                .TFtable tr:nth-child(even) { background: #FFFFFF; }
            </style>
        </head>
        <body>
            <div style='background: #bad6f3; padding: 7px; text-transform: uppercase; text-align: center; border: #bad6f3 1px solid; font-family: Arial, Helvetica, sans-serif; font-weight: bold;'>
                <h3>Contact Form From Glam</h3>
            </div>
            <table class='TFtable' style='width: 100%; border-collapse: collapse;'>
                <tr style='background: #EAF2FA;'>
                    <td style='padding: 7px; width: 30%; border: #bad6f3 2px solid; font-family: Arial, Helvetica, sans-serif; font-weight: bold;'>Name</td>
                    <td style='padding: 7px; background: #fff; border: #bad6f3 2px solid;'>$name</td>
                </tr>
                <tr style='background: #EAF2FA'>
                    <td style='padding: 7px; width: 30%; border: #bad6f3 2px solid; font-family: Arial, Helvetica, sans-serif; font-weight: bold;'>E-mail Address</td>
                    <td style='padding: 7px; background: #fff; border: #bad6f3 2px solid;'>$email</td>
                </tr>
                <tr style='background: #EAF2FA'>
                    <td style='padding: 7px; width: 30%; border: #bad6f3 2px solid; font-family: Arial, Helvetica, sans-serif; font-weight: bold;'>Phone</td>
                    <td style='padding: 7px; background: #fff; border: #bad6f3 2px solid;'>$phone</td>
                </tr>
                <tr style='background: #EAF2FA'>
                    <td style='padding: 7px; width: 30%; border: #bad6f3 2px solid; font-family: Arial, Helvetica, sans-serif; font-weight: bold;'>City</td>
                    <td style='padding: 7px; background: #fff; border: #bad6f3 2px solid;'>$city</td>
                </tr>
                <tr style='background: #EAF2FA'>
                    <td style='padding: 7px; width: 30%; border: #bad6f3 2px solid; font-family: Arial, Helvetica, sans-serif; font-weight: bold;'>Course</td>
                    <td style='padding: 7px; background: #fff; border: #bad6f3 2px solid;'>$course</td>
                </tr>
            </table>
        </body>
        </html>";

        // Prepare email headers
        $from = "website_enquiry@eskon.in";
        $fromName = $name;
        $to = "rakesh@eskonwebsolutions.com";
        $subject = "Enquiry From $email";

        $headers = "From: $fromName <$from>\r\n";
        $headers .= "Reply-To: $email\r\n";
        $headers .= "MIME-Version: 1.0\r\n";
        $headers .= "Content-Type: text/html; charset=UTF-8\r\n";

        $message = $Body;

        // Send the email
        $success = mail($to, $subject, $message, $headers);

        echo json_encode(['success' => $success]);
    } else {
        echo json_encode(['error' => $errors]);
    }
}
?>

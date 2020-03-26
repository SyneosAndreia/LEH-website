<?php

    // HEADERS REQUIRED
    header("Access-Control-Allow-Headers: content-type");
    header("Access-Control-Allow-Origin: *");
    
    // GRAB JSON AND WRITE TO POST
    $rest_json = file_get_contents("php://input");
    $_POST = json_decode($rest_json, true);

    // HELPER FUNCTIONS
    function clean_string($string) {
        $bad = array("content-type","bcc:","to:","cc:","href");
        return str_replace($bad,"",$string);
    }

    function checkForInjection($values){
        $injection = false;
        for ($n=0;$n<count($values);$n++){
            // Check for characters for possible injection attempt
            if (preg_match("%0A",$values[$n]) || preg_match("%0D",$values[$n]) || preg_match("\\r",$values[$n]) || preg_match("\\n",$values[$n])){
                $injection = true;
            }
        }
        return $injection;
    }

    try{

        if (empty($_POST['name']) && empty($_POST['email'])) die();

        if($_POST) {

            // SET 'OK' RESPONSE CODE
            http_response_code(200);
        
            // SET CONSTANTS
            $contact_to = "chris.ponty@syneoshealth.com";
            $contact_subject = "Eyemax Mono Enquiry";
            
            // POSTED VARIABLES
            $contact_name = $_POST["name"];
            $contact_from = $_POST["email"];
            $contact_message = $_POST["message"];
        
            // CONSTRUCTED MESSAGE VARIABLE
            $email_message = "Form details below.\n\n";

            if(checkForInjection(Array($contact_name, $contact_from, $contact_message)))
            {
                // THROW ERROR
                throw new Exception("Injection Attempt");
            }

            $email_message .= "Name: ".clean_string($contact_name)."\n";
            $email_message .= "Email: ".clean_string($contact_from)."\n";
            $email_message .= "Message: ".clean_string($contact_message)."\n";
        
            // EMAIL HEADER
            $headers = 'From: ' . clean_string($contact_from) . "\r\n".
            'Reply-To: ' . clean_string($contact_from) . "\r\n" .
            'X-Mailer: PHP/' . phpversion();
            
            if(mail($contact_to, $contact_subject, $email_message, $headers))
            {
                echo json_encode(
                    array(
                        'sent' => true
                    )
                );
            }
            else{
                throw new Exception("Mail Function Failed");
            }
        }
        else
        {
            throw new Exception("No Post Data");
        }
    }
    catch(Exception $e) {
        
        echo json_encode(
            array(
                'status' => false,
                'error' => $e -> getMessage(),
                'error_code' => $e -> getCode()
            )
        );

        exit;

    }
?>
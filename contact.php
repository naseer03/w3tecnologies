<?php 
$file ="contact";
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <?php include "includes/header-links.php" ?>
    <link rel="stylesheet" href="styles/contact.css">
    <title>Contact us | w3 technologies</title>
</head>
<body>
     <!--  model to display after form submition-->

    <div class="modal fade" id="enq-exampleModal" tabindex="-1" aria-labelledby="enqModalLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <!-- <div class="modal-header">
                    <h5 class="modal-title" id="enqModalLabel">enqistration Status</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div> -->
                <div class="modal-body" id="enq-modal-body-msg">
                    <!-- Status message will be inserted here -->
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                </div>
            </div>
        </div>
    </div>


    <div class="contact-banner">
        <?php include "includes/header.php"?>
        <div class="banner">
            <div class="container">
                <div class="row">
                    <div class="col-7">
                        <div >
                            <h1 class="banner-head"> <span>Get in Touch with us</span><br> +91 74169 39333</h1>    
                            <p class="banner-text">At W3 Technologies, we transform individuals into highly skilled professionals</p>
                        </div>   
                    </div>
                    <div class="col-5">
                        <img src="assets/contact-us/contact-us.svg" alt="contact us" class="img-fluid">
                    </div>
                </div>

            </div>
        </div>
    </div>
     <!-- form -section -->
  <section >
    <!-- ==form== -->
     <div class="container">
        <div class="contact-form-section">
            <div class="text-center">
                <h2>We’re Here to Help</h2>
                <p class="mt-2">Have a question, comment, or just want to connect? We’d love to hear from you! Please use the contact form below or reach out through the information provided. We're here to help and will get back to you as soon as possible.</p>
            </div>
            <form method="post" onsubmit="return enquiryFormValidation(this)" >
                <?php echo "<input type=\"hidden\" name=\"file-name\" value=\"$file\">";?> 
                <div class="row">
                    <div class="col-12 col-lg-6">
                        <div class="form-ele mb-3">  
                            <input type="text" class="form-control" name="enq-name" id="enq-name" placeholder="Enter your Name" >
                            <span id="enq-name-error" class="form-error"></span>
                        </div>
                    </div>
                    <div class="col-12 col-lg-6">
                        <div class="form-ele mb-3 ">
                            <input type="text" class="form-control" id="enq-email" name="enq-email" placeholder="Enter your Email" >
                            <span id="enq-email-error" class="form-error"></span>
                        </div>
                    </div>
                </div>

                <div class="row">
                    <div class="col-12 col-lg-4">
                        <div class="form-ele my-3">
                            <input type="tel" class="form-control" name="enq-contact-no" id="enq-contact-no" placeholder="Enter your Contact Number" >
                            <span id="enq-contact-no-error" class="form-error"></span>
                        </div>
                    </div>
                    <div class="col-12 col-lg-4">
                        <div class="form-ele my-3">
                            <input type="tel" class="form-control" name="enq-whatsapp-no" id="enq-whatsapp-no" placeholder="Enter your Whatsapp Number" >
                            <div class="form-check">
                                <input class="form-check-input" type="checkbox" value="" id="enq-same-contact-no" name="enq-same-contact-no" onchange="copyCourseContactNumber()" >
                                <label class="form-check-label" for="enq-same-contact-no">Same as contact number </label>
                            </div>
                            <span id="enq-whatsapp-no-error" class="form-error"></span>
                        </div>
                    </div>
                    <div class="col-12 col-lg-4">
                        <div class="form-ele mb-3">
                            <label for="enq-pref-time">Prefer time to call</label>
                            <input type="time" class="form-control" name="enq-pref-time" id="enq-pref-time" >
                        </div>
                    </div>
                </div>

                

                <div class="form-ele mb-3">
                    <textarea class="form-control" name="enq-message" id="enq-message" rows="4" placeholder="How can we help you?"></textarea>
                </div>
                <input type="submit" class="submit-btn">
                <p class="mt-2 enquiryform-submit-success-message form-success" ><b>Thank you!, your message was sent successfully. </b> <br>Stay tuned; we'll get in touch with you soon.</p>
                <p class="mt-2 enquiryform-submit-error-message form-error" ><b>Oops!, Something Went Wrong. </b><br>Please try again later or email us directly</p>
            </form>
        </div>    
     </div>
  </section>
   



<!-- ---footer -->
    <?php include "includes/footer.php" ?>
    <?php include "includes/footer-links.php" ?>
    <script src="js/enquiryform.js"></script>
</body>
</html>

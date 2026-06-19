

<?php  $basepath = '/w3tec.com';?>
<form method="post" onsubmit="return enquiryFormValidation(this)" >
    <?php echo "<input type=\"hidden\" name=\"file-name\" value=\"$file\">";?> 
    <div class="form-ele mb-3">  
        <input type="text" class="form-control" name="enq-name" id="enq-name" placeholder="Enter your Name" >
        <span id="enq-name-error" class="form-error"></span>
    </div>
    <div class="form-ele mb-3 ">
        <input type="text" class="form-control" id="enq-email" name="enq-email" placeholder="Enter your Email" >
        <span id="enq-email-error" class="form-error"></span>
    </div>
    <div class="form-ele mb-3">
        <input type="tel" class="form-control" name="enq-contact-no" id="enq-contact-no" placeholder="Enter your Contact Number" >
        <span id="enq-contact-no-error" class="form-error"></span>
    </div>
    <div class="form-ele mb-3">
        <input type="tel" class="form-control" name="enq-whatsapp-no" id="enq-whatsapp-no" placeholder="Enter your Whatsapp Number" >
        <div class="form-check">
            <input class="form-check-input" type="checkbox" value="" id="enq-same-contact-no" name="enq-same-contact-no" onchange="copyCourseContactNumber()" >
            <label class="form-check-label" for="enq-same-contact-no"> whatsapp number same as contact number </label>
        </div>
        <span id="enq-whatsapp-no-error" class="form-error"></span>
    </div>
    <div class="form-ele mb-3">
        <label for="enq-pref-time">Prefer time to call</label>
        <input type="time" class="form-control" name="enq-pref-time" id="enq-pref-time" >
    </div>
    <div class="form-ele mb-3">
        <textarea class="form-control" name="enq-message" id="enq-message" rows="4" placeholder="How can we help you?"></textarea>
    </div>
    <input type="submit" class="submit-btn">
    <p class="mt-2 enquiryform-submit-success-message form-success" ><b>Thank you!, your message was sent successfully. </b> <br>Stay tuned; we'll get in touch with you soon.</p>
    <p class="mt-2 enquiryform-submit-error-message form-error" ><b>Oops!, Something Went Wrong. </b><br>Please try again later or email us directly</p>
</form>

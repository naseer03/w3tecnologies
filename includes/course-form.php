<?php require_once __DIR__ . '/config.php'; ?>

<form  method='post' onsubmit="return formValidation(this)" >
    <?php echo "<input type=\"hidden\" name=\"course-name\" value=\"$course_file\">";?> 
    <div class="form-ele mb-3">  
        <input type="text" class="form-control" name="name" id="name" placeholder="Enter your Name" />
        <span id="name-error" class="form-error"></span>
    </div>
    <div class="form-ele mb-3 ">
    
        <input type="text"  class="form-control"  id="email"  name="email"  placeholder="Enter your  Email"  />
        <span id="email-error" class="form-error"></span>
    </div>
    <div class="form-ele mb-3">
        
        <input type="tel" class="form-control contact-no" name="contact-no" id="contact-no" placeholder="Enter your Contact Number" />
        <span id="contact-no-error" class="form-error"></span>
    </div>
    <div class="form-ele mb-3">
        
        <input type="tel" class="form-control whatsapp-no" name="whatsapp-no" id="whatsapp-no" placeholder="Enter your Whatsapp Number" />
        <div class="form-check">
            <input class="form-check-input same-contact-no" type="checkbox" value="" id="same-contact-no" name="same-contact-no"  >
            <label class="form-check-label" for="flexCheckDefault"> whatsapp number same as contact number </label>
        </div>
        <span id="whatsapp-no-error" class="form-error"></span>
    </div>
    <div class="form-ele mb-3">
        <label for="pref-time">Prefer time to call</label>
        <input type="time" class="form-control" name="pref-time" id="pref-time" />
    </div>
    <div class="form-ele mb-3">
        <label for="course"><b>Course</b></label>
        <?php echo "<input type=\"text\" disable class=\"form-control course\" name=\"course\" id=\"course-name\"  value=\"$course\"  />" ?>
    </div>
        <input type="submit" class="submit-btn">
        <p class="mt-2 courseform-submit-success-message form-success" ><b>Download ready!, We've emailed the course syllabus to you.</b><br>Please check your mail inbox or spam folder</p>
        <p class="mt-2 courseform-submit-error-message form-error" ><b>Failed to send!.</b><br>Please verify your mail and resubmit the form, or contact us directly for help.</p>
</form>
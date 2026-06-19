<form  method='post' onsubmit="return internshipformValidation(this)" > 
        <?php echo "<input type=\"hidden\" name=\"file\" value=\"$service_file\">";?>    
        <div class="form-ele mb-3">  
            <input type="text" class="form-control" name="intern-name" id="intern-name" placeholder="Enter your Name" />
            <span id="intern-name-error" class="form-error"></span>
        </div>
    
        <div class="form-ele mb-3 ">
            <input type="text"  class="form-control"  id="intern-email"  name="intern-email"  placeholder="Enter your  Email"  />
            <span id="intern-email-error" class="form-error"></span>
        </div>

        <div class="form-ele mb-3">   
            <input type="tel" class="form-control intern-contact-no" name="intern-contact-no" id="intern-contact-no" placeholder="Enter your Contact Number" />
            <span id="intern-contact-no-error" class="form-error"></span>
        </div>
    
        <div class="form-ele mb-3">   
            <input type="tel" class="form-control intern-whatsapp-no" name="intern-whatsapp-no" id="intern-whatsapp-no" placeholder="Enter your Whatsapp Number" />
            <div class="form-check">
                <input class="form-check-input intern-same-contact-no" type="checkbox" value="" id="intern-same-contact-no" name="intern-same-contact-no"  >
                

                <label class="form-check-label" for="flexCheckDefault"> whatsapp number same as contact number </label>
            </div>
            <span id="intern-whatsapp-no-error" class="form-error"></span>
        </div>
        <div class="form-ele mb-3 mt-lg-4">  
            <input type="text" class="form-control" name="intern-college" id="intern-college" placeholder="Enter your College Name" />
            <span id="intern-college-error" class="form-error"></span>
        </div>
    
        <div class="form-ele mb-3">
            <label for="intern-pref-time">Prefer time to call</label>
            <input type="time" class="form-control" name="intern-pref-time" id="intern-pref-time" />
        </div>

        <div class="form-ele mb-3">
            <textarea class="form-control" name="intern-message" id="intern-message" placeholder="How can we help you?" rows="4"></textarea>
            <span id="intern-message-error" class="form-error"></span>
        </div>
        <input type="submit" class="submit-btn">
        <!-- <p class="mt-2 internshipform-submit-success-message form-success"></p>
        <p class="mt-2 internshipform-submit-error-message form-error" ></p> -->

        <p class="mt-2 internshipform-submit-success-message form-success"><b>Thank you!, your message was sent successfully. </b> <br>Stay tuned; we'll get in touch with you soon.</p>
        <p class="mt-2 internshipform-submit-error-message form-error" ><b>Oops!, Something Went Wrong. </b><br>Please try again later or email us directly</p>
</form>
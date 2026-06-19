<form  method='post' onsubmit="return serviceformValidation(this)" > 
        <?php echo "<input type=\"hidden\" name=\"ser-service-file\" value=\"$service_file\">";?>    
        <div class="form-ele mb-3">  
            <input type="text" class="form-control" name="ser-name" id="ser-name" placeholder="Enter your Name" />
            <span id="ser-name-error" class="form-error"></span>
        </div>
    
        <div class="form-ele mb-3 ">
            <input type="text"  class="form-control"  id="ser-email"  name="ser-email"  placeholder="Enter your  Email"  />
            <span id="ser-email-error" class="form-error"></span>
        </div>

        <div class="form-ele mb-3">   
            <input type="tel" class="form-control ser-contact-no" name="ser-contact-no" id="ser-contact-no" placeholder="Enter your Contact Number" />
            <span id="ser-contact-no-error" class="form-error"></span>
        </div>
    
        <div class="form-ele mb-3">   
            <input type="tel" class="form-control ser-whatsapp-no" name="ser-whatsapp-no" id="ser-whatsapp-no" placeholder="Enter your Whatsapp Number" />
            <div class="form-check">
                <input class="form-check-input ser-same-contact-no" type="checkbox" value="" id="ser-same-contact-no" name="ser-same-contact-no"  >
                

                <label class="form-check-label" for="flexCheckDefault"> whatsapp number same as contact number </label>
            </div>
            <span id="ser-whatsapp-no-error" class="form-error"></span>
        </div>
        <div class="form-ele mb-3 mt-lg-4">  
            <input type="text" class="form-control" name="ser-company" id="ser-company" placeholder="Enter your Comapny Name" />
            <span id="ser-company-error" class="form-error"></span>
        </div>
    
        <div class="form-ele mb-3">
            <label for="ser-pref-time">Prefer time to call</label>
            <input type="time" class="form-control" name="ser-pref-time" id="ser-pref-time" />
        </div>

        <div class="form-ele mb-3">
            <textarea class="form-control" name="ser-message" id="ser-message" placeholder="How can we help you?" rows="4"></textarea>
            <span id="ser-message-error" class="form-error"></span>
        </div>
        <input type="submit" class="submit-btn">
        <p class="mt-2 serviceform-submit-success-message form-success" ><b>Thank you!, your message was sent successfully. </b> <br>Stay tuned; we'll get in touch with you soon.</p>
        <p class="mt-2 serviceform-submit-error-message form-error" ><b>Oops!, Something Went Wrong. </b><br>Please try again later or email us directly</p>
</form>

<!-- == -->
<!-- <form id="serviceForm" method="post" action="services/sevice-formdata.php">
    <?php 
    // echo "<input type=\"hidden\" name=\"ser-service-file\" value=\"$service_file\">";
    ?>    

    <div class="form-ele mb-3">  
        <input type="text" class="form-control" name="ser-name" id="ser-name" placeholder="Enter your Name" />
        <span id="ser-name-error" class="form-error"></span>
    </div>

    <div class="form-ele mb-3">
        <input type="text" class="form-control" id="ser-email" name="ser-email" placeholder="Enter your Email" />
        <span id="ser-email-error" class="form-error"></span>
    </div>

    <div class="form-ele mb-3">   
        <input type="tel" class="form-control ser-contact-no" name="ser-contact-no" id="ser-contact-no" placeholder="Enter your Contact Number" />
        <span id="ser-contact-no-error" class="form-error"></span>
    </div>

    <div class="form-ele mb-3">   
        <input type="tel" class="form-control ser-whatsapp-no" name="ser-whatsapp-no" id="ser-whatsapp-no" placeholder="Enter your WhatsApp Number" />
        <div class="form-check">
            <input class="form-check-input ser-same-contact-no" type="checkbox" id="ser-same-contact-no" name="ser-same-contact-no">
            <label class="form-check-label" for="ser-same-contact-no">WhatsApp number same as contact number</label>
        </div>
        <span id="ser-whatsapp-no-error" class="form-error"></span>
    </div>

    <div class="form-ele mb-3 mt-lg-4">  
        <input type="text" class="form-control" name="ser-company" id="ser-company" placeholder="Enter your Company Name" />
        <span id="ser-company-error" class="form-error"></span>
    </div>

    <div class="form-ele mb-3">
        <label for="ser-pref-time">Preferred time to call</label>
        <input type="time" class="form-control" name="ser-pref-time" id="ser-pref-time" />
    </div>

    <div class="form-ele mb-3">
        <textarea class="form-control" name="ser-message" id="ser-message" placeholder="How can we help you?" rows="4"></textarea>
        <span id="ser-message-error" class="form-error"></span>
    </div>

    <input type="submit" class="submit-btn">
    <div id="form-response"></div>
</form> -->

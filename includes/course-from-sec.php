<?php $basepath ="/w3tec.com"; ?>
<div class="course-form-sec">
    <div class="container">
        <!-- ====== model to display after form submition==== -->
        <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <!-- <h5 class="modal-title" id="exampleModalLabel">Success</h5> -->
                        <!-- <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button> -->
                    </div>
                    <div class="modal-body" id="modal-body-msg"> </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">OK</button>
                    </div>
                </div>
            </div>
        </div>

         <!-- =================================================== -->
      <div class="head">
        <h2> <span>Want more details</span> about the</h2>
        <?php echo "<h2>$course course?</h2>" ?> 
       
      </div>
          <!-- ==== content ====-->
           <div class="row mt-5">
            <div class="col-12 col-lg-6 order-2 order-lg-1">
                    <h3 class="pb-2 fill-form d-none d-lg-block">Fill out the form</h3>
                    <p class="text">Our counsellors will get in touch with you at your preferred time. You can have all your queries answered.</p>
                    <p class="pt-2 text">Once you decide that SLA is the perfect fit for your training needs, our counselors will guide you through the process every step of the way.</p>
                    <ul class="query-list">
                        <li><p>Course time</p></li>
                        <li><p>Course Syllabus</p></li>
                        <li><p>Course Fees</p></li>
                        <li><p>or any other questions...</p></li>    
                    </ul>
                <div class="call-us">
                    <h2 class="call-text">You can also give us a Call</h2>
                    <a href="tel:+917416939333" class="telNo-btn"><img src="<?php echo $basepath; ?>/assets/home/banner/phone-icon.svg"><span class="tel-no" >+91 741-693-9333</span> </a>
                </div>
            </div>
            <div class="col-12 col-lg-6 order-1 order-lg-2">
                <h3 class=" fill-form d-lg-none d-block text-center">Fill out the form</h3>
               <?php include 'course-form.php'; ?>
               
            </div>
           </div>
    </div>
</div>
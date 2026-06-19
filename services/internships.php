<?php $service_file = "internships"?>
<!DOCTYPE html>
<html lang="en">
<head>
    <?php include "../includes/header-links.php" ?>
    <link rel="stylesheet" href="../styles/services.css">
    <meta name="description" content="Learn & Earn! W3technologies internship combines training, client projects & real-world experience for Bsc, Bca, BBA & Bcom students/grads.">
    <title>Learn & Earn With Our Intership Program | W3 Technologies</title>
</head>
<body>
     <!-- ====== model to display after form submition==== -->
        <div class="modal fade" id="internshipModal" tabindex="-1" aria-labelledby="internshipModalLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <!-- <h5 class="modal-title" id="internshipModalLabel">Success</h5> -->
                        <!-- <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button> -->
                    </div>
                    <div class="modal-body" id="internship-modal-body-msg"> </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">OK</button>
                    </div>
                </div>
            </div>
        </div>

     
<!-- ======form veritical modal====== -->      
    <div class="modal fade" id="centeredModal" tabindex="-1" aria-labelledby="centeredModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-dialog-scrollable">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title text-center" id="centeredModalLabel">Fill out the form</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body p-0">
                    <?php include '../includes/internship-form.php' ?>
                </div>
            </div>
        </div>
    </div>         
  
    <div class="services-banner">
        <?php include "../includes/header.php"?>
        <div class="banner">
            <div class="container">
                <div class="row">
                    <div class="col-lg-6 col-12 order-2 order-lg-1">
                        <div >
                            <h1 class="banner-head"> <span>INTERNSHIP</span> PROGRAM</h1>    
                            <p class="banner-text">W3tecnologies internship program specially designed for degree students and recent graduates from diverse academic backgrounds like Bsc, Bca, BBA and B.com, which we offering training + internship program along with our client projects and the opportunity to gain real time work experience.</p>
                        </div>    
                    </div>
                    <div class="col-lg-6 col-12 order-1 order-lg-2 ">
                        <img src="../assets/services/internship/header.png" alt="header-img" class="img-fluid">
                    </div>
                </div>

            </div>
        </div>
    </div>
    <section class="about-serv-sec-main">
            <div class="container">
                <div class="row">
                    <div class="col-12">
                        <h2><span>About</span> Internship Program</h2>
                       <p><span>Interns at w3tecnologies</span>  get experiential learning opportunities in the development sector and a meaningful internship experience that will support their academic, professional and personal development.Interns will engage in real-world projects that contribute to the development sector, allowing them to apply theoretical knowledge in practical settings. They will work alongside industry experts and mentors who are dedicated to guiding them through the complexities of the field.</p>
                    </div>
                </div>
                  <!-- Button to trigger modal -->
                        <!-- <button type="button" class="model-blk-btn"  data-bs-toggle="modal" data-bs-target="#centeredModal">
                           <span>Download</span> | WordPress Course Syllabus
                        </button>       -->
            </div>
         </section>

    
   <section class="uncertain">
    <div class="container">
        <div class="d-flex flex-column gap-5 align-items-center text-center">
            <div>
                <h2>Interested in Our Internship Program?</h2>
                <p>Discover how our internships can shape your future. Connect with us for more details.</p>
            </div>
            
            <button type="button" class="req-btn" data-bs-toggle="modal" data-bs-target="#centeredModal">     
                Request Internship Info
            </button>
        </div>
    </div>
</section>


   <!-- ====Benefits of Internship program=== -->
 <section class="ind-serves">
    <div class="container">
        <h2 class="head"><span>Benefits</span> of our Internship program</h2>
        <div class="industies d-flex flex-wrap gap-3  justify-content-center mt-4">
            <div class="card " >
                <div class="d-flex flex-column align-items-center gap-3">
                    <img src="../assets/services/internship/project-focused learning.svg" class="ind-img" alt="project-focused-learning">
                    <h5 class="card-title pt-2">Project-focused <br> learning</h5>
                </div>
            </div>
            <div class="card " >
                <div class="d-flex flex-column align-items-center gap-3">
                    <img src="../assets/services/internship/expert-mentorship.svg" class="ind-img" alt="expert-mentorship">
                    <h5 class="card-title pt-2">Expert mentorship</h5>
                </div>
            </div>
            <div class="card " >
                <div class="d-flex flex-column align-items-center gap-3">
                    <img src="../assets/services/internship/individual performance monitoring.svg" class="ind-img" alt="performance-monitoring">
                    <h5 class="card-title pt-2">Individual performance <br> monitoring</h5>
                </div>
            </div>
            <div class="card " >
                <div class="d-flex flex-column align-items-center gap-3">
                    <img src="../assets/services/internship/industry insights.svg" class="ind-img" alt="industry-insights">
                    <h5 class="card-title pt-2">Industry insights</h5>
                </div>
            </div>
            <div class="card " >
                <div class="d-flex flex-column align-items-center gap-3">
                    <img src="../assets/services/internship/hands-on-experience.svg" class="ind-img" alt="hands-on-experience">
                    <h5 class="card-title pt-2">Hands-on experience</h5>
                </div>
            </div>
            <div class="card " >
                <div class="d-flex flex-column align-items-center gap-3">
                    <img src="../assets/services/internship/interactive sessions.svg" class="ind-img" alt="interactive-sessions">
                    <h5 class="card-title pt-2">Interactive sessions</h5>
                </div>
            </div>
            <div class="card " >
                <div class="d-flex flex-column align-items-center gap-3">
                    <img src="../assets/services/internship/resume Building.svg" class="ind-img" alt="resume-building">
                    <h5 class="card-title pt-2">Resume Building</h5>
                </div>
            </div>
            <div class="card " >
                <div class="d-flex flex-column align-items-center gap-3">
                    <img src="../assets/services/internship/job assistance.svg" class="ind-img" alt="job-assistance">
                    <h5 class="card-title pt-2">Job assistance</h5>
                </div>
            </div>

        </div>
    </div>
 </section>
 <!-- form -section -->
  <section class="services-form-section">
    <!-- ==form== -->
     <div class="container">
        <div class="text-center">
            <h2>Let Us Know Your Needs </h2>
            <h3 class="mt-2">Just Fill Out the Form</h3>
        </div>   
        <form  method='post' onsubmit="return internshipformValidation(this)" > 
            <?php echo "<input type=\"hidden\" name=\"file\" value=\"$service_file\">";?>     
            <div class="row">
                <div class="col-12 col-lg-6">
                    <div class="form-ele mb-3">  
                        <input type="text" class="form-control" name="intern-name" id="intern-name" placeholder="Enter your Name" />
                        <span id="intern-name-error" class="form-error"></span>
                    </div>
                </div>
                <div class="col-12 col-lg-6">
                    <div class="form-ele mb-3 ">
                        <input type="text"  class="form-control"  id="intern-email"  name="intern-email"  placeholder="Enter your  Email"  />
                        <span id="intern-email-error" class="form-error"></span>
                    </div>
                </div>
            </div>
            
            <div class="row">
                <div class="col-12 col-lg-6">
                    <div class="form-ele mb-3">   
                        <input type="tel" class="form-control intern-contact-no" name="intern-contact-no" id="intern-contact-no" placeholder="Enter your Contact Number" />
                        <span id="intern-contact-no-error" class="form-error"></span>
                    </div>
                </div>
                <div class="col-12 col-lg-6">
                    <input type="tel" class="form-control intern-whatsapp-no" name="intern-whatsapp-no" id="intern-whatsapp-no" placeholder="Enter your Whatsapp Number" />
                    <div class="form-check">
                        <input class="form-check-input intern-same-contact-no" type="checkbox" value="" id="intern-same-contact-no" name="intern-same-contact-no"  >
                        <label class="form-check-label" for="flexCheckDefault"> whatsapp number same as contact number </label>
                    </div>
                    <span id="intern-whatsapp-no-error" class="form-error"></span>
                </div>
            </div>
             
            <div class="row">
                <div class="col-12 col-lg-6">
                    <div class="form-ele mb-3 mt-lg-4">  
                        <input type="text" class="form-control" name="intern-college" id="intern-college" placeholder="Enter your College Name" />
                        <span id="intern-college-error" class="form-error"></span>
                    </div>
                </div>
                <div class="col-12 col-lg-6">
                    <div class="form-ele mb-3">
                        <label for="intern-pref-time">Prefer time to call</label>
                        <input type="time" class="form-control" name="intern-pref-time" id="intern-pref-time" />
                    </div>
                </div>
            </div>
            <div class="form-ele mb-3">
                <textarea class="form-control" name="intern-message" id="intern-message" placeholder="How can we help you?" rows="4"></textarea>
                <span id="intern-message-error" class="form-error"></span>
            </div>
            <input type="submit" class="submit-btn">
            <p class="mt-2 internshipform-submit-success-message form-success"><b>Thank you!, your message was sent successfully. </b> <br>Stay tuned; we'll get in touch with you soon.</p>
            <p class="mt-2 internshipform-submit-error-message form-error" ><b>Oops!, Something Went Wrong. </b><br>Please try again later or email us directly</p>

        </form>
     </div>
  </section>


<!-- ---footer -->
    <?php include "../includes/footer.php" ?>
    <?php include "../includes/footer-links.php" ?>
    <script src="../js/internship.js"></script>
</body>
</html>

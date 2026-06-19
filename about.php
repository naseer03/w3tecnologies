<?php 
$file ="about";
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <?php include "includes/header-links.php" ?>
    <link rel="stylesheet" href="styles/about.css">
    <meta name="description" content="Looking to upskill? Discover the latest tech trends and practical training with our tailored courses and services. Enroll now at W3 Technologies.">
    <title>Know More About Our Courses & Services | W3 Technologies</title>
</head>
<body>

   
<!-- -------vertical  form modal-- -->
    <div class="modal fade" id="centeredModal" tabindex="-1" aria-labelledby="centeredModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-dialog-scrollable">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title text-center" id="centeredModalLabel">Fill out the form</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body p-0">
                 <?php include './includes/reg-form.php'; ?>
                </div>
               
            </div>
        </div>
    </div>
    <!-- Registration Modal -->
    <div class="modal fade" id="reg-exampleModal" tabindex="-1" aria-labelledby="regModalLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="regModalLabel">Registration Status</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body" id="reg-modal-body-msg">
                    <!-- Status message will be inserted here -->
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                </div>
            </div>
        </div>
    </div>

<div class="about-us-main">
    <div class="about-us-banner">
        <?php include "includes/header.php"?>
        <div class="container banner-main-heading">
            <div class="row">
                <div class="col-12">
                        <h1>About <span>us</span></h1>
                </div>
            </div>
        </div>
    </div>
    <!-- ================================ -->
     <!-- about w3 technologies section -->
    <!-- ================================ -->
     <section class="about-us-content-sec pt-3 pb-5 py-lg-5">
        <div class="container">
            <div class="row">
                <div class="col-12 col-lg-8">
                    <div class="about-us-content">
                        <div>
                            <p><span>W3 Technologies</span> is an agency-styled training institute started by Naseer Shaik, the founder of Reesan Info Tech and one of the best computer training institute in <strong>Telugu states.</strong></p>
                        </div>
                        <div>
                            <p>W3 Technologies helped more than</p>
                            <div><p><span>600+</span> Students</p></div>
                            <p>elevate their Software, Computer skills and become industry experts.</p>
                        </div>
                        <div>
                            <p>W3 Technologies is a computer training institute based in <strong>Nellore</strong> that offers offline and online software and digital marketing courses for students to elevate their skills and become industry experts.</p>
                        </div>
                    </div>
                </div>
                <div class="col-12 col-lg-4">
                    <div class="about-us-ceo-img-sec">
                        <div>
                            <img src="assets/about/Founder Image.png" alt="w3 technologies founder">
                        </div>
                        <div>
                            <p>Naseer Shaik</p>
                            <h6>Founder, <span>W3 Technologies</span></h6>
                        </div>
                    </div>
                </div>
            </div>
        </div>
     </section>
     <!-- ========================= -->
    <!-- vision and mission -->
     <!-- ========================= -->
      <section class="vision-mission-main-sec">
        <div class="container">
            <div class="row">
                <div class="col-12 col-md-6">
                    <div class="vision-mission-txt border-right">
                        <div class="vision-mission-icon">
                            <img src="assets/about/mission-icon.svg" alt="w3 technologies Mission">
                            <h2>Mission</h2>
                        </div>
                        <p>At W3 Technologies, our mission is to delegate poor and middle-class students to achieve their dream jobs through high-quality digital and software training. We are committed to providing accessible and comprehensive education in software, computer skills, and digital marketing to help our students become industry experts and elevate their professional prospects.</p>
                    </div>
                </div>
                <div class="col-12 col-md-6 mt-5 mt-md-0">
                    <div class="vision-mission-txt border-left">
                        <div class="vision-mission-icon">
                            <img src="assets/about/vision-icon.svg" alt="w3 technologies Vision">
                            <h2>Vision</h2>
                        </div>
                        <p>Our vision is to be the leading computer training institute in the Telugu states, renowned for transforming the lives of our students by equipping them with the skills needed to excel in the digital age. We try to bridge the gap between education and employment by fostering a learning environment that nurtures talent, encourages innovation, and ensures that every student has the opportunity to succeed in the rapidly evolving tech industry.</p>
                    </div>
                </div>
            </div>
        </div>
      </section>
      <!-- ================================ -->
       <!-- why w3 technolgoies  -->
    <!-- ================================ -->
     <section class="why-w3-tec-sec-main">
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <div class="why-w3-tec-heading">
                        <h2><span> Why</span>  W3 Technologies?</h2>
                        <p>We are the only agency-styled computer training institute in the Telugu states that</p>
                        <h4>holds your hand <span> until you get your job. </span></h4>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-12 col-md-6 col-lg-4">
                    <div class="why-w3-card-main">
                        <div class="why-w3-border-right"></div>
                        <div class="why-w3-card-img">
                            <img src="assets/about/why-w3/iso-certified-icon.svg" alt="ISO certified institution">
                        </div>
                            <p>ISO 9001:2015 certified institution</p>
                    </div>
                </div>
                <div class="col-12 col-md-6 col-lg-4">
                    <div class="why-w3-card-main">
                    <div class="why-w3-border-right"></div>
                        <div class="why-w3-card-img">
                            <img src="assets/about/why-w3/hands-on-training-icon.svg" alt="hands on traning">
                        </div>
                            <p>No Slideshow(PPT) training, fully hands-on training</p>
                    </div>
                </div>
                <div class="col-12 col-md-6 col-lg-4">
                    <div class="why-w3-card-main">
                        <div class="why-w3-card-img">
                            <img src="assets/about/why-w3/qa-icon.svg" alt="Interactive session with interview QA's">
                        </div>
                            <p>Interactive session with interview QA's</p>
                    </div>
                </div>
                <div class="col-12 col-md-6 col-lg-4">
                    <div class="why-w3-card-main">
                    <div class="why-w3-border-right"></div>
                        <div class="why-w3-card-img">
                            <img src="assets/about/why-w3/affordable-fee-icon.svg" alt="Most competitive & affordable course fee">
                        </div>
                            <p>Most competitive & affordable course fee</p>
                    </div>
                </div>
                <div class="col-12 col-md-6 col-lg-4">
                    <div class="why-w3-card-main">
                    <div class="why-w3-border-right"></div>
                        <div class="why-w3-card-img">
                            <img src="assets/about/why-w3/clients-icon.svg" alt="List of established & satisfied clients & students">
                        </div>
                            <p>List of established & satisfied clients & students</p>
                    </div>
                </div>
                <div class="col-12 col-md-6 col-lg-4">
                    <div class="why-w3-card-main">
                        <div class="why-w3-card-img">
                            <img src="assets/about/why-w3/expert-icon.svg" alt="Learn from the Industry's expertise.">
                        </div>
                            <p>Learn from the Industry's expertise.</p>
                    </div>
                </div>
            </div>
        </div>
     </section>
<!-- ==================== -->
 <!-- our motive section -->
  <!-- ========================== -->
   <section class="our-motive-sec-main">
    <div class="container">
        <div class="row">
            <div class="col-12">
                <div class="our-motive-heading-sec">
                    <h2><span>Our motive</span> is to setup your <span>professional strengths,</span>
                    so that <span>one can write in his/her CV...</span></h2>
                </div>
                <div class="our-motive-txt">
                    <ul>
                        <li>I am &nbsp;<span> proficient</span>&nbsp; in <span>_____</span>;</li>
                        <li>I have &nbsp;<span> developed expertise</span>&nbsp; in <span>_____</span>;</li>
                        <li>I have done &nbsp;<span> projects</span>&nbsp; in the field of <span>_____</span>;</li>
                        <li>I have a &nbsp;<span> certification</span>&nbsp; in <span>_____</span>;</li>
                        <li>I have a &nbsp;<span> Good knowledge</span>&nbsp; of <span>_____</span>;</li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
   </section>
    <!-- ------------ have any questions-------- -->
    <?php include './includes/have-questions.php' ?>
    <!-- ===================== -->
     <!-- our core values -->
    <!-- ======================= -->
     <section class="our-values-main-sec">
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <h2 class="our-values-heading">Our <span>Core Values</span></h2>
                </div>
            </div>
            <div class="row mt-3 mt-md-5">
                <div class="col-12 col-lg-4">
                    <div class="our-core-values-card">
                        <div class="our-core-values-img">
                            <img src="assets/about/our-core-values/wisdom.svg" alt="Wisdom">
                        </div>
                        <h3>Wisdom</h3>
                        <p class="our-values-border">We believe in imparting not just knowledge, but the wisdom to apply it effectively in real-world scenarios.</p>
                    </div>
                </div>
                <div class="col-12 col-lg-4">
                <div class="our-core-values-card">
                        <div class="our-core-values-img">
                            <img src="assets/about/our-core-values/work.svg" alt="Work Ethic">
                        </div>
                        <h3>Work Ethic</h3>
                        <p class="our-values-border">We emphasize a strong work ethic, ensuring that our students are disciplined, dedicated, and driven towards success.</p>
                    </div>
                </div>
                <div class="col-12 col-lg-4">
                    <div class="our-core-values-card">
                        <div class="our-core-values-img">
                            <img src="assets/about/our-core-values/welcoming.svg" alt="Welcoming">
                        </div>
                        <h3>Welcoming</h3>
                        <p>We foster a welcoming environment where everyone feels included, supported, and encouraged to learn and grow.</p>
                    </div>
                </div>
            </div>
        </div>
     </section>

</div>
<!-- ---footer -->
<?php include "includes/footer.php" ?>
<?php include "includes/footer-links.php" ?>
<script src="js/registrform.js"></script>
</body>
</html>

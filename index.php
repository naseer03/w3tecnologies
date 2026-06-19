<?php 
$file ="index";
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <!-- header-links -->
     <?php include "./includes/header-links.php" ?>
     <!--  -->
     <!-- <link rel="icon" type="image/x-icon" href="../assets/favicon.png"> -->
    <link href="./styles/home.css" rel="stylesheet">
    <meta name="description" content="Looking for a software coding institute in Nellore, Andhra Pradesh? W3 Technologies offers comprehensive courses and industry-relevant training.">
    <title>Best Software Coaching Institute in Nellore | W3 Technologies</title>
</head>
<body>
   
<!-- ==================vertical  form modal================= -->
    <div class="modal fade" id="centeredModal" tabindex="-1" aria-labelledby="centeredModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-dialog-scrollable">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title text-center" id="centeredModalLabel">Fill out the form</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body p-0">
                 <?php include './includes/enq-form.php'; ?>
                </div>
            </div>
        </div>
    </div>

    <!-- enquiry Modal -->
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



<div class="bg">
        <video autoplay loop muted>
		  <source src="./assets/institute-video-4.mp4" type="video/mp4">
		</video>


    <!--  bg check boxes  -->
    <div class="box-effect"></div>
    <?php include "./includes/header.php"?>
       
    <!-- banner -->
    <section class="banner">
        <div class="container">
            <!-- course names -->
            <img src="./assets/home/banner/Digital-Marketing.svg" alt="digital-marketing" class="dig-marketing">
            <img src="./assets/home/banner/Front-End.svg" alt="front-end" class="front-end">
            <img src="./assets/home/banner/Full-Stack.svg" alt="full-stack" class="full-stack">
            <img src="./assets/home/banner/Python.svg" alt="python" class="python">
            <div class="row">
                <div class="col-12 col-lg-6">
                    <div class="banner-content">
                        <h1 class="learn-text">Learn from</h1>
                        <p class="ind-exprt-text">INDUSTRY EXPERTS</p>
                        <p class="start-text">To Start Your</p>
                        <p class="career-text">IT Career</p> 
                    </div>
                    <div class="d-flex gap-3 banner-btns">
                        <a href="tel:+917416939333" class="telNo-btn"><img src="./assets/home/banner/phone-icon.svg" alt="call"><span class="tel-no" >+91 741-693-9333</span> </a>
                      
                        <button type="button" class="register-btn"  data-bs-toggle="modal" data-bs-target="#centeredModal">
                        Register Now
                        </button> 
                    </div>
                </div>
            <div class="col-12 col-lg-6">
                <div class="banner-blog">
                    <div class="blog-carousel owl-carousel owl-theme">
                        <div class="item">
                            <div class="blog-image">
                                <img src="./assets/home/banner/class.png" alt ="class-img" class="img-fluid">
                                <p class="text"> <span class="hash">#</span><span class="interactive">INTERACTIVE</span>  COURSES</p>
                            </div>
                        </div>
                   
                       <!-- item 2  -->
                        <div class="item">
                            <div class="blog-image">
                                <img src="./assets/home/banner/kick-start.png" alt ="kickStart-img" class="img-fluid">
                                <p class="text"> <span class="hash">#</span><span class="interactive">JOIN </span>WITH US</p>
                            </div>
                        </div>
                    </div>  
                </div>
            </div>
        </div>
        </div>
    </section>
</div>
<!-- Internships and Courses -->
<section class="cards-section">
    <div class="container">
        <div class="text-content">
            <div class="content" >
                <h2 class="heading">Internships <span class="and">&</span> <br ><span class="course">Courses</span></h2>
                <p class="intern-courses-text">Live, interactive sessions guided by experts to enhance your expertise and skills in your chosen area of interest.</p>
            </div>
        </div>
        <div class="cards-container-supp card-img"></div>
        <div id="cards-view-1">
            <div class="cards-list">
                <img src="./assets/home/internships-courses/front-end.png" alt="frontend" class="card-img">
                <img src="./assets/home/internships-courses/desinging.png" alt="ui-ux-desinging" class="card-img">
                <img src="./assets/home/internships-courses/digi-marketing.png" alt="digital-marketing" class="card-img">
                <img src="./assets/home/internships-courses/front-end.png" alt="frontend" class="card-img">
            </div>
        </div>
        <div class="nav-btn-group">
            <button id="left-nav-btn-cards-view-1" class="nav-btn">
                <svg viewBox="0 0 16 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10 2L2 10L10 18" stroke="#FFF5F5" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
            </button>
            <button id="right-nav-btn-cards-view-1" class="nav-btn">
                <svg viewBox="0 0 10 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M2 2L10 10L2 18" stroke="#FFF5F5" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
            </button>
        </div>	
    </div>
</section>


 <!-- grow your skills and expertise in -->
  <section class="grow-your-skills">
    <div class="container course-card">

        <!-- heading -->
        <div class="pb-2 pb-md-5">
            <h2 class="grow-head text-center">Grow your skills with us</h2>
            <h2 class="expert-in-head text-center">We make you  <span class="expert-in">Expertise</span>  in</h2>
        </div>
        <!-- course cards -->
        <div class="row">
            <!-- full stack -->
            <div class="col-12">
                <div class="full-stack my-3">
                    <div class="card" >
                        <div class="row justify-content-center align-items-center">
                            <div class="col-12 col-lg-5 fullstack-card-img"> 
                                <img src="./assets/home/grow-skills/fulstack/student.png" alt="student-image" class="img-fluid" >
                            </div>
                            <div class="col-12 col-lg-7">
                                <div class="card-body d-flex flex-column gap-2 gap-md-4">
                                  <h3 class="course-name">Full Stack <br class="d-none d-lg-block"><span>Development</span></h3>
                                    <div>
                                      <p class="course-info">Full stack development refers to the ability to work on both the front-end (the client-side) and back-end (the server-side) portions of an application. It involves designing user interfaces, creating databases, and writing server-side logic.</p>
                                      <p class="course-info" >Full stack developers are proficient in multiple programming languages and frameworks, allowing them to handle all aspects of web development, from concept to deployment.</p>
                                    </div>
                                    <div class="course-lang" >
                                        <img src="./assets/home/grow-skills/fulstack/html.svg" alt="html">
                                        <img src="./assets/home/grow-skills/fulstack/css.svg" alt="css">
                                        <img src="./assets/home/grow-skills/fulstack/javascript.svg" alt="javascript">
                                        <img src="./assets/home/grow-skills/fulstack/bootstrap.svg" alt="bootstrap">
                                        <img src="./assets/home/grow-skills/fulstack/tailwindcss.svg" alt="tailwind">
                                        <img src="./assets/home/grow-skills/fulstack/python.svg" alt="python">
                                        <img src="./assets/home/grow-skills/fulstack/php.svg" alt="php">
                                        <img src="./assets/home/grow-skills/fulstack/mysql.svg" alt="mysql">
                                        <img src="./assets/home/grow-skills/fulstack/django.svg" alt="django">
                                        <img src="./assets/home/grow-skills/fulstack/react.js.svg" alt="react.js">
                                        <img src="./assets/home/grow-skills/fulstack/node.js.svg" alt="node.js">
                                        <img src="./assets/home/grow-skills/fulstack/laravel.svg" alt="laravel">
                                    </div>                                    
                                     <div class="explore-course d-flex flex-column align-items-center gap-2 flex-md-row align-items-lg-start gap-sm-4 pt-3">
                                         <a href="#" class="explore-btn">Explore</a>
                                        <div >
                                            <h5 class="explore-course-name">All Full Stack Development</h5>
                                            <p class="explore-intern-course">Internships & Courses</p>
                                        </div>
                                     </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!--  -->
             <!-- Digital Marketing -->
            <div class="col-12">                         
                <div class="digital-marketing my-3">
                    <div class="card" >
                        <div class="row justify-content-center align-items-center">
                            <div class="col-12 col-lg-5 order-1 order-lg-2 fullstack-card-img"> 
                                <img src="./assets/home/grow-skills/digitalMarketing/student.png" alt="student-image" class="img-fluid" >
                            </div>
                            <div class="col-12 col-lg-7 order-2 order-lg-1">
                                <div class="card-body d-flex flex-column gap-2 gap-md-4">
                                  <h3 class="course-name">Digital <br class="d-none d-lg-block" ><span>Marketing</span></h3>
                                    <div>
                                      <p class="course-info">Digital marketing encompasses all marketing efforts that utilize electronic devices and the internet. It includes various channels such as social media, search engines, email, and websites to connect with current and prospective customers.</p>
                                      <p class="course-info">Key strategies include SEO (Search Engine Optimization), PPC (Pay-Per-Click advertising), content marketing, email marketing, and social media marketing. Digital marketing aims to increase brand awareness, drive traffic, generate leads, and ultimately, boost sales through targeted online campaigns.</p>
                                    </div>
                                    <div class="course-lang"  >
                                        <img src="./assets/home/grow-skills/digitalMarketing/affiliate-marketing.svg" alt="affi-marketing">
                                        <img src="./assets/home/grow-skills/digitalMarketing/content-writing.svg" alt="content-writing">
                                        <img src="./assets/home/grow-skills/digitalMarketing/email-marketing.svg" alt="email-marketing">
                                        <img src="./assets/home/grow-skills/digitalMarketing/ga4.svg" alt="ga4">
                                        <img src="./assets/home/grow-skills/digitalMarketing/sem.svg" alt="sem">
                                        <img src="./assets/home/grow-skills/digitalMarketing/seo.svg" alt="seo">
                                        <img src="./assets/home/grow-skills/digitalMarketing/smm.svg" alt="smm">
                                        <img src="./assets/home/grow-skills/digitalMarketing/smo.svg" alt="smo">
                                        <img src="./assets/home/grow-skills/digitalMarketing/whatsapp-marketing.svg" alt="wtsapp-marketing">
                                    </div>                                    
                                    <div class="explore-course d-flex flex-column align-items-center gap-2 flex-md-row align-items-lg-start gap-sm-4 pt-3">
                                         <a href="./courses/digital-marketing.php" class="explore-btn">Explore</a>
                                        <div >
                                            <h5 class="explore-course-name">All Digital Marketing</h5>
                                            <p class="explore-intern-course">Internships & Courses</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-12">
                <div class="designing my-3">
                    <div class="card" >
                        <div class="row justify-content-center align-items-center">
                            <div class="col-12 col-lg-5 fullstack-card-img"> 
                                <img src="./assets/home/grow-skills/designing/student.png" alt="student-image" class="img-fluid" >
                            </div>
                            <div class="col-12 col-lg-7">
                                <div class="card-body d-flex flex-column gap-2 gap-md-4">
                                  <h3 class="course-name">Graphic & UI/UX <br class="d-none d-lg-block" ><span>Designing</span></h3>
                                    <div>
                                      <p class="course-info">Graphic design focuses on visual communication and aesthetics. It involves creating visually appealing graphics and layouts for various purposes, such as logos, advertisements, and print materials.</p>
                                      <p class="course-info">UI (User Interface) design and UX (User Experience) design focus on enhancing user satisfaction by improving the usability, accessibility, and pleasure provided in the interaction with a product.</p>
                                      <p class="course-info">UI designers create interfaces that are intuitive and visually appealing, while UX designers ensure smooth, seamless user experiences with the product.</p>
                                    </div>
                                    <div class="course-lang">
                                        <img src="./assets/home/grow-skills/designing/adobe-xd.svg" alt="adobe-xd">
                                        <img src="./assets/home/grow-skills/designing/figma.svg" alt="figma">
                                        <img src="./assets/home/grow-skills/designing/illustartor.svg" alt="illustartor">
                                        <img src="./assets/home/grow-skills/designing/photoshop.svg" alt="photoshop">
                                    </div>                                    
                                     <div class="explore-course d-flex flex-column align-items-center gap-2 flex-md-row align-items-lg-start gap-sm-4 pt-3">
                                         <a href="./courses/graphic-design.php" class="explore-btn">Explore</a>
                                        <div >
                                            <h5 class="explore-course-name">All Graphic & UI/UX Designing </h5>
                                            <p class="explore-intern-course">Internships & Courses</p>
                                        </div>
                                     </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>        
            </div>           
        </div>   
    </div>
  </section>
  <!-- -->
   <!-- parent company -->
    <section class="parent-company">
        <div class="container">
            <!-- head-part -->
            <div class="head-part">
                <div class="heading ">   
                    <img src="./assets/home/parent-company/,,.png" alt="inverted-camas" class="quote-style">
                    <h2 class="head">We are not just trainers, we are <span>Real-Time Employees</span> form Our <span>Parent IT Company</span></h2>            
                </div>
                    <!-- <h2 class="heading">Our <span>Parent IT Company</span></h2>  -->
                    <div class="company-logo py-5">
                        <img src="./assets/home/parent-company/Reesan-Logo.png" alt="reesan-logo" >
                    </div>                  
            </div>
            <!--  members -image -->
             <div>
                <img src="./assets/home/parent-company/reesanit-team.png" alt="reesanit-team" class="img-fluid">
             </div>
        </div>
    </section>
    <!--  have any questions -->
     <?php include './includes/have-questions.php' ?>
     <!-- certificate-section -->
      <section class="certificate-sec">
        <div class="container">
            <div class="row align-items-center">
                <div class="col-12 col-lg-4">
                    <div class="d-flex justify-content-center">
                        <img src="./assets/home/certification/Certificate.png" alt="certificate" class="img-fluid">
                    </div>
                </div>
                <div class="col-12 col-lg-8">
                    <div class="elevate pt-3 pt-lg-0">
                       <div class="elevate-text">
                        <h2>Elevate your presence</h2>
                        <h2>with <span>Certification!</span></h2>
                       </div>
                       <div class="benefits d-flex flex-column flex-md-row justify-content-around ">
                            <div class="d-flex flex-column justify-content-center align-items-center gap-4">
                                <div class="benefit-icons">
                                    <img src="./assets/home/certification/certificate-award-icon.svg" alt="award-icon" >
                                </div>
                                <p class="benefit-text">Industry-Recognized <br>Certificate</p>
                            </div>
                            <div class="d-flex flex-column justify-content-center align-items-center gap-4">
                                <div class="benefit-icons">
                                    <img src="./assets/home/certification/employee-icon.svg" alt="emplyoee-icon">
                                </div>
                                <p class="benefit-text">Stand Out in Job <br> Market</p>
                            </div>
                            <div class="d-flex flex-column justify-content-center align-items-center gap-4">
                                <div class="benefit-icons">
                                    <img src="./assets/home/certification/breifcase-icon.svg" alt="breifcase-icon">
                                </div>
                                <p class="benefit-text">Your Gateway <br> to Career Advancement</p>
                            </div>
                       </div>
                    </div>
                </div>
            </div>
        </div>
      </section>
      <!-- students-placed -->
       <section class="students-placed">
        <div class="container">
            <div class="head pb-4 pb-md-5">
                <div class="heading d-flex justify-content-center align-items-center  gap-3">
                    <img src="./assets/home/students-placed/head-style-left.png" alt="head-style-left" class="d-none d-md-block">
                    <h2 class="heading-text">Our Students <span>Placed</span> </h2>
                    <img src="./assets/home/students-placed/head-style-right.png" alt="head-style-right" class="d-none d-md-block">
                </div>
                <p class="heading-tagline">IN COMAPANIES</p>
            </div>
                <!-- -->
                <div class="placed-carousel owl-carousel owl-theme">
                    <div class="item">
                        <div class="student-image">
                            <img src="./assets/home/students-placed/Naveen-Segu.png" class="card-img-top" alt="Naveen">
                        </div>
                        <div class="card">
                            <div class="card-body">
                                <div class="student-name mt-5">
                                    <h5 class="name">Naveen</h5>
                                    <p>Full Stack Developer</p>
                                </div>
                            <div class="company d-flex align-items-center justify-content-between">
                                <img src="./assets/home/students-placed/Naveen-Segu-logo.png" alt="company-logo">
                                <p class="package">8.5<span>LPA</span></p>
                            </div>
                            </div>
                        </div>   
                    </div>
                    <div class="item">
                        <div class="student-image">
                            <img src="./assets/home/students-placed/rohit.png" class="card-img-top" alt="Rohit">
                        </div>
                        <div class="card">
                            <div class="card-body">
                                <div class="student-name mt-5">
                                    <h5 class="name">Sai Rohit</h5>
                                    <p>DIGITAL MARKETING EXECUTIVE</p>
                                </div>
                            <div class="company d-flex  align-items-center justify-content-between">
                                <img src="./assets/home/students-placed/y-axis-logo.svg" alt="y-axis-logo">
                                <p class="package">3.2<span>LPA</span></p>
                            </div>
                            </div>
                        </div>   
                    </div>
                    <div class="item">
                        <div class="student-image">
                            <img src="./assets/home/students-placed/divya.png" class="card-img-top" alt="Divya">
                        </div>
                        <div class="card">
                            <div class="card-body">
                                <div class="student-name mt-5">
                                    <h5 class="name">Divya</h5>
                                    <p>ASSOCIATIVE RECRUITER</p>
                                </div>
                            <div class="company d-flex  align-items-center justify-content-between">
                                <img src="./assets/home/students-placed/iconma-logo.svg" alt="iconma-logo">
                                <p class="package">2.9<span>LPA</span></p>
                            </div>
                            </div>
                        </div>   
                    </div>
                    <div class="item">
                        <div class="student-image">
                            <img src="./assets/home/students-placed/Kalyalni.png" class="card-img-top" alt="kalyani">
                        </div>
                        <div class="card">
                            <div class="card-body">
                                <div class="student-name mt-5">
                                    <h5 class="name">Kalyani</h5>
                                    <p>SEO EXECUTIVE</p>
                                </div>
                            <div class="company d-flex align-items-center justify-content-between">
                                <img src="./assets/home/students-placed/punarjan-ayurvedic-hospitals-logo.svg" alt="punarjan-logo">
                                <p class="package">2.76<span>LPA</span></p>
                            </div>
                            </div>
                        </div>   
                    </div> 
                    <div class="item">
                        <div class="student-image">
                            <img src="./assets/home/students-placed/Anjana-Devi0.png" class="card-img-top" alt="anjanadevi">
                        </div>
                        <div class="card">
                            <div class="card-body">
                                <div class="student-name mt-5">
                                    <h5 class="name">Anjanadevi</h5>
                                    <p>Jr Frontend Developer</p>
                                </div>
                            <div class="company d-flex align-items-center justify-content-between">
                                <img src="./assets/home/students-placed/anjana-logo.svg" alt="nexzera-logo">
                                <p class="package">1.80<span>LPA</span></p>
                            </div>
                            </div>
                        </div>   
                    </div>
                    <div class="item">
                        <div class="student-image">
                            <img src="./assets/home/students-placed/Bibeejan0.png" class="card-img-top" alt="Bibeejan">
                        </div>
                        <div class="card">
                            <div class="card-body">
                                <div class="student-name mt-5">
                                    <h5 class="name">Bibeejan</h5>
                                    <p>SEO Specialist</p>
                                </div>
                            <div class="company d-flex align-items-center justify-content-between">
                                <img src="./assets/home/students-placed/Bibeejan-logo_2.png" alt="Tyconstory-logo">
                                <p class="package">1.4<span>LPA</span></p>
                            </div>
                            </div>
                        </div>   
                    </div>
                    
                </div>
            </div>
        </section>
        <!-- what our student says -->
        <section class="student-says">
            <div class="container">
                <h2 class="heading">What our <span> Students Say!</span></h2>
                    <div class="row justify-content-center">
                        <div class="col-12">
                            <div class="video-carousel owl-carousel owl-theme">
                                <div class="chavika video-review">
                                    <div class="item-video " data-merge="1"><a class="owl-video " href="https://www.youtube.com/watch?v=GZ4ig72fxYk"></a></div>
                                </div>
                                <div class="nandini video-review">
                                    <div class="item-video " data-merge="1"><a class="owl-video " href="https://www.youtube.com/watch?v=KaTjcByzPBc"></a></div>
                                </div>
                                <!-- <div class="item-video" data-merge="1"><a class="owl-video" href="https://www.youtube.com/watch?v=JpBSoVEFaFo"></a></div>
                                <div class="item-video" data-merge="1"><a class="owl-video" href="https://www.youtube.com/watch?v=JpBSoVEFaFo"></a></div>
                                <div class="item-video" data-merge="1"><a class="owl-video" href="https://www.youtube.com/watch?v=JpBSoVEFaFo"></a></div>
                                <div class="item-video" data-merge="1"><a class="owl-video" href="https://www.youtube.com/watch?v=JpBSoVEFaFo"></a></div>
                                <div class="item-video" data-merge="1"><a class="owl-video" href="https://www.youtube.com/watch?v=JpBSoVEFaFo"></a></div>   -->
                            </div>
                        </div>  
                    </div>     
            </div>
        </section>
           <!-- students reviews -->
        <section class="reviews">
            <div class="container">
                <div class="heading">
                    <img src="./assets/home/reviews/heading-style.png" alt="heading-style" class="heading-style-img">
                    <h2 class="heading-text mb-0">Reviews <span class="from">from</span></h2>
                    <h2 class="heading-text"> W3 Technologies <span class="bg-red"> Students</span></h2>
                </div>
                <!-- review content -->
                <div class="row ">
                    <div class="col-12">
                        <div class="reviews-carousel owl-carousel owl-theme">
                            <div class="item">
                                <div class="review">
                                    <div class="reviewer-img">
                                        <img src="./assets/home/reviews/rohit.png" alt="Rohit">
                                    </div>
                                    <div class="review-content d-flex flex-column flex-sm-row  align-items-start gap-3">
                                        <img src="./assets/home/reviews/review-text-style.svg" alt="white-colun">
                                        <div >
                                            <p class="review-text">The digital marketing course at W3Technologies was incredibly insightful and practical. The instructors were very knowledgeable and engaging, making complex topics easy to grasp. The hands-on projects were particularly beneficial in applying theoretical knowledge to real-world scenarios. Overall, it was a valuable learning experience that has equipped me well for pursuing a career in digital marketing.</p>
                                            <h4 class="reviewer-name">Sai Rohit</h4>
                                            <p class="reviewer-position">DIGITAL MARKETING EXECUTIVE</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <!--  -->
                            <div class="item">
                                <div class="review">
                                    <div class="reviewer-img">
                                        <img src="./assets/home/reviews/Naveen-Segu.png" alt="Naveen">
                                    </div>
                                    <div class="review-content d-flex flex-column flex-sm-row  align-items-start gap-3">
                                        <img src="./assets/home/reviews/review-text-style.svg" alt="white-colun">
                                        <div >
                                            <p class="review-text">The Full Stack Development course at W3Technologies was an exceptional learning experience. The instructors were highly skilled and made even the most challenging concepts accessible and understandable. The course's focus on hands-on projects allowed me to apply what I learned in a practical setting, which was incredibly valuable. Overall, it was an empowering experience that has thoroughly prepared me for a successful career in Full Stack Development.</p>
                                            <h4 class="reviewer-name">Naveen Segu</h4>
                                            <p class="reviewer-position">Full Stack Developer</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="item">
                                <div class="review">
                                    <div class="reviewer-img">
                                        <img src="./assets/home/reviews/Anjana-Devi.png" alt="Anjana Devi">
                                    </div>
                                    <div class="review-content d-flex flex-column flex-sm-row  align-items-start gap-3">
                                        <img src="./assets/home/reviews/review-text-style.svg" alt="white-colun">
                                        <div >
                                            <p class="review-text">The Frontend Development course at W3Technologies was an outstanding experience. The instructors were experts in their field, breaking down complex concepts into easy-to-understand lessons. The emphasis on practical, hands-on projects was invaluable, allowing me to translate theory into real-world applications. This course has provided me with the confidence and skills needed to excel in a career in Frontend Development</p>
                                            <h4 class="reviewer-name">Anjanadevi</h4>
                                            <p class="reviewer-position">Jr Frontend Developer</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="item">
                                <div class="review">
                                    <div class="reviewer-img">
                                        <img src="./assets/home/reviews/Divya-V.png" alt="Divya">
                                    </div>
                                    <div class="review-content d-flex flex-column flex-sm-row  align-items-start gap-3">
                                        <img src="./assets/home/reviews/review-text-style.svg" alt="white-colun">
                                        <div >
                                            <p class="review-text">The MS Office course at W3Technologies was incredibly informative and practical. The instructors made learning the software straightforward and accessible, even for beginners. The course was packed with hands-on exercises that helped me master essential tools like Word, Excel, and PowerPoint. This training has significantly improved my productivity and efficiency, equipping me with skills that are crucial for any professional environment.</p>
                                            <h4 class="reviewer-name">Divya</h4>
                                            <p class="reviewer-position">ASSOCIATIVE RECRUITER</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="item">
                                <div class="review">
                                    <div class="reviewer-img">
                                        <img src="./assets/home/reviews/Bibeejan-Sk.png" alt="Divya">
                                    </div>
                                    <div class="review-content d-flex flex-column flex-sm-row  align-items-start gap-3">
                                        <img src="./assets/home/reviews/review-text-style.svg" alt="white-colun">
                                        <div >
                                            <p class="review-text">The Digital Marketing Internship at W3Technologies was an enriching and hands-on experience. The mentors were highly knowledgeable, providing valuable insights into the latest industry trends and strategies. The real-world projects allowed me to apply theoretical knowledge effectively, enhancing my skills in SEO, social media marketing, and content creation. This internship has significantly prepared me for a successful career in digital marketing</p>
                                            <h4 class="reviewer-name">Bibeejan</h4>
                                            <p class="reviewer-position">SEO Specialist</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="item">
                                <div class="review">
                                    <div class="reviewer-img">
                                        <img src="./assets/home/reviews/Rekha-Sree.png" alt="Rekhasree">
                                    </div>
                                    <div class="review-content d-flex flex-column flex-sm-row  align-items-start gap-3">
                                        <img src="./assets/home/reviews/review-text-style.svg" alt="white-colun">
                                        <div >
                                            <p class="review-text">The Graphic Design Internship at W3Technologies was a transformative experience. The mentors were skilled professionals who guided me through the intricacies of design principles and tools. Working on real client projects allowed me to refine my creativity and technical skills, particularly in Adobe Creative Suite. This internship has given me the confidence and expertise to excel in the graphic design industry </p>
                                            <h4 class="reviewer-name">Rekha sree</h4>
                                            <p class="reviewer-position">Graphic Designer</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="item">
                                <div class="review">
                                    <div class="reviewer-img">
                                        <img src="./assets/home/reviews/Sameera-SK.png" alt="Sameera">
                                    </div>
                                    <div class="review-content d-flex flex-column flex-sm-row  align-items-start gap-3">
                                        <img src="./assets/home/reviews/review-text-style.svg" alt="white-colun">
                                        <div >
                                            <p class="review-text">The Digital Marketing course at W3Technologies was an exceptional learning journey. The instructors were industry experts who made complex strategies and tools easy to understand. The course was filled with practical exercises that helped me apply what I learned to real-world digital marketing campaigns. This experience has thoroughly prepared me to thrive in the digital marketing field. </p>
                                            <h4 class="reviewer-name">Sameera</h4>
                                            <p class="reviewer-position">Digital Marketer</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="item">
                                <div class="review">
                                    <div class="reviewer-img">
                                        <img src="./assets/home/reviews/Sravani-Bai.png" alt="Sravani">
                                    </div>
                                    <div class="review-content d-flex flex-column flex-sm-row  align-items-start gap-3">
                                        <img src="./assets/home/reviews/review-text-style.svg" alt="white-colun">
                                        <div >
                                            <p class="review-text">The Web Development course at W3Technologies was a game-changer for me. The instructors broke down intricate coding concepts into digestible lessons, making the learning process smooth and enjoyable. The hands-on projects were especially valuable, allowing me to build and deploy real websites. This course has provided me with the skills and confidence to kickstart my career in web development. </p>
                                            <h4 class="reviewer-name">Sravani</h4>
                                            <p class="reviewer-position">Jr Web Developer</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </section>
        <!-- services section -->
        <div class="services">
            
            <div class="container">
                <div class="row align-items-center">
                    <div class="col-12 col-lg-6 col-xl-4">
                        <div class="head" >
                            <p>We Provide <br class="d-none d-lg-block"> <span>Services</span> on </p>
                            <!-- <p><span>Services</span> on</p> -->
                        </div>
                    </div>
                    <div class="col-12 col-lg-6 col-xl-4">
                        <div class="card service-card">
                            <div class="service ">
                                <img src="./assets/home/services/web-application-icon.svg" alt="web-application" class="img-fluid">
                                <p  class="service-name">web Application</p>
                            </div>
                            <div class="card-body">
                                <p class="service-info">We Transform your ideas & needs into robust web applications through tailored development solutions.</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-12 col-lg-6 col-xl-4">
                        <div class="card service-card">
                            <div class="service ">
                                <img src="./assets/home/services/web-design-icon.svg" alt="web-design" class="img-fluid" >
                                <p  class="service-name">web Design</p>
                            </div>
                            <div class="card-body">
                                <p class="service-info">Creating visually stunning and user-centric web designs to elevate your online presence.</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-12 col-lg-6 col-xl-4">
                        <div class="card service-card">
                            <div class="service ">
                                <img src="./assets/home/services/digital-marketing-icon.svg" alt="digital-marketing" class="img-fluid" >
                                <p  class="service-name">Digital Marketing</p>
                            </div>
                            <div class="card-body">
                                <p class="service-info">Driving growth through targeted digital strategies tailored to amplify your brand.</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-12 col-lg-6 col-xl-4">
                        <div class="card service-card">
                            <div class="service ">
                                <img src="./assets/home/services/seo-icon.svg" alt="seo" class="img-fluid" >
                                <p  class="service-name">SEO <br> <span class="full-form">Search Engine Optimization</span> </p>
                            </div>
                            <div class="card-body">
                                <p class="service-info">Optimizing websites to boost search engine visibility and drive organic traffic growth.</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-12 col-lg-6 col-xl-4">
                        <div class="card service-card">
                            <div class="service ">
                                <img src="./assets/home/services/smo-icon.svg" alt="smo" class="img-fluid" >
                                        <p class="service-name">SMO <br> <span class="full-form">Social Media Optimization</span></p>
                            </div>
                            <div class="card-body">
                                <p class="service-info">Enhancing brand awareness and engagement through strategic social media optimization.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="service-contact-btn">
                    <a href="contact.php" class="cont-btn">Contact US</a>
                    <p>for service</p>
                </div>
            </div>
        </div>
        <!-- our clients -->
         <section class="clients">
            <div class="container">
                <div class="head">
                    <h2>Our <span>Clients</span>  we work with</h2>
                </div>
                <!-- client logos -->
                <div class="client-logos">
                    <img src="./assets/home/clients/axzons.png" alt="axzons" class="logo">
                    <img src="./assets/home/clients/corsult.png" alt="corsult" class="logo">
                    <img src="./assets/home/clients/vertex.png" alt="vertex" class="logo">
                    <img src="./assets/home/clients/aetos.png" alt="artos" class="logo">
                    <img src="./assets/home/clients/safwan.png" alt="safwan" class="logo">
                    <img src="./assets/home/clients/kdssg.png" alt="kdssg" class="logo">
                    <img src="./assets/home/clients/pickleball.png" alt="pickleball" class="logo">
                    <img src="./assets/home/clients/hotstone.png" alt="hotstone" class="logo">
                    <img src="./assets/home/clients/visonics.png" alt="visonics" class="logo">
                    <img src="./assets/home/clients/ashbe.png" alt="Ashbe" class="logo">
                    <img src="./assets/home/clients/riet.png" alt="riet" class="logo">
                    <img src="./assets/home/clients/behara.png" alt="behara" class="logo">
                    <img src="./assets/home/clients/swarnandhra.png" alt="swarnandhra" class="logo">
                    <img src="./assets/home/clients/visakha.png" alt="visakha" class="logo">
                    <img src="./assets/home/clients/sv-college.png" alt="svce" class="logo">
                    <img src="./assets/home/clients/haramayn.png" alt="haramayan" class="logo">
                    <img src="./assets/home/clients/dmk.png" alt="dmk" class="logo">
                    <img src="./assets/home/clients/digdo.png" alt="digdo" class="logo">
                    <img src="./assets/home/clients/law-office.png" alt="law-anne" class="logo">
                    <img src="./assets/home/clients/mars-marketers.png" alt="mars" class="logo">
                    <img src="./assets/home/clients/mksn.png" alt="mksn" class="logo">
                    <img src="./assets/home/clients/mid-court.png" alt="mid-ourt" class="logo">
                    <img src="./assets/home/clients/foodbank.png" alt="foodbank" class="logo">
                    <img src="./assets/home/clients/tennis-club.png" alt="tennishub" class="logo">
                    <img src="./assets/home/clients/xit.png" alt="xitsolutions" class="logo">
                    <img src="./assets/home/clients/iac.png" alt="iac" class="logo">
                    <img src="./assets/home/clients/natures-living.png" alt="nature-living" class="logo">
                    
                </div>
            </div>
         </section>
         <!-- ===========footer=============== -->
          <?php include "./includes/footer.php" ?>
         
<!-- =============footer-inks============== -->
 <?php include './includes/footer-links.php' ?>
<script src="js/home.js"></script>
<script src="js/enquiryform.js"></script>

</body>
</html>
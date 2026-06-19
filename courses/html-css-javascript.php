<?php $course="HTML, CSS and Javascript " ;
$course_file ="html-css-javascript";
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <!-- header-links -->
     <?php include "../includes/header-links.php" ?>
    <link rel="stylesheet" href="../styles/courses/course-stack.css">
    <title>Learn HTML, CSS & JavaScript from W3 Technologies</title>
    <meta name="description" content="W3 Technologies have real time experts on html css and javscript. We will guide you how to clear UI developer interview and get jobs.">
</head>
<body>
  
<!-- ======form veritical modal====== -->      
    <div class="modal fade" id="centeredModal" tabindex="-1" aria-labelledby="centeredModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-dialog-scrollable">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title text-center" id="centeredModalLabel">Fill out the form</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body p-0">
                   <?php include '../includes/course-form.php' ?>
                </div>
               
            </div>
        </div>
    </div>         
 <!-- =============================== -->
     
    <main class="course-stack">
        <!-- ============================= -->
         <!-- banner section -->
        <!-- ============================== -->
        <div class="courses-main-banner-sec">
            <?php include "../includes/header.php"?>
            <div class="container">
                <div class="course-banner-sec-heading">
                    <img src="../assets/courses/ReactJs.svg" alt="reactjs">
                    <img src="../assets/courses/ExpressJs.svg" alt="expressjs">
                    <div class="course-banner-heading-main course-banner-long-heading">
                        <h1>HTML, CSS and JavaScript</h1>
                        <!-- <div class="course-banner-sub">
                            <span>Full Stack</span>
                            <span>Development</span>
                        </div> -->
                    </div>
                    <img src="../assets/courses/MongoDB.svg" alt="mangoDB">
                    <img src="../assets/courses/Node.js.svg" alt="nodejs">
                </div>
            </div>
        </div>

        <!-- ================================== -->
         <!-- About mern full stack development -->
        <!-- ================================== -->
         <!-- Scrollable modal -->
         <section class="about-course-sec-main">
            <div class="container">
                <div class="row">
                    <div class="col-12">
                        <h2><span>About</span> HTML, CSS and JavaScript</h2>
                        <p>The <span> HTML, CSS, and JavaScript </span> Course by <span> W3Technologies </span>is designed to provide trainees with a comprehensive foundation in web development. The course covers the essential technologies used to build interactive, user-friendly, and visually appealing websites. By focusing on <span>HTML</span>  for structuring content,<span> CSS </span> for styling, and <span>JavaScript</span> for adding dynamic functionality, this training equips trainees with the skills needed to create responsive and well-designed web interfaces.</p>
                        <!-- <p>The term <span>MERN</span> stands for <span>MongoDB, Express, React, and Node.js</span> which are the four technologies that make up the stack. When creating highly dynamic and scalable online apps, developers find that the MERN stack offers a streamlined development environment. Knowing the MERN stack can lead to great job prospects in the IT industry, as the demand for dynamic and data-intensive web applications is expanding.</p> -->
                    </div>
                </div>
                  <!-- Button to trigger modal -->
                        <button type="button" class="model-blk-btn"  data-bs-toggle="modal" data-bs-target="#centeredModal">
                           <span>Download</span> | HTML-CSS-Javascript Course Syllabus
                        </button>      
            </div>
         </section>

         <!-- ================================ -->
          <!-- ========course-includes======== -->
           <?php include '../includes/course-includes.php' ?>
          
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
                    <a href="tel:+917416939333" class="telNo-btn"><img src="../assets/home/banner/phone-icon.svg"><span class="tel-no" >+91 741-693-9333</span> </a>
                </div>
            </div>
            <div class="col-12 col-lg-6 order-1 order-lg-2">
                <h3 class=" fill-form d-lg-none d-block text-center">Fill out the form</h3>
                <?php  include '../includes/course-form.php'?>
               
            </div>
           </div>
    </div>
</div>
        <!-- ================================== -->
        <!-- course-breakdown-->
        <!-- ================================== -->
        <section class="course-breakdown-main-sec">
            <div class="container">
                <h2>HTML, CSS and JavaScript Course <br><span>Breakdown</span></h2>
                <div class="course-breakdown-main-card">
                    <div class="row">
                        <div class="col-12 col-md-6 col-lg-3">
                            <div class="courses-breakdown-card">
                                <h3>100%</h3>
                                <p>Hands-on  Training</p>
                            </div>
                        </div>
                        <div class="col-12 col-md-6 col-lg-3">
                            <div class="courses-breakdown-card courses-breakdown-even-card">
                                <h3>3-5</h3>
                                <p>Real Time Projects</p>
                            </div>
                        </div>
                        <div class="col-12 col-md-6 col-lg-3">
                            <div class="courses-breakdown-card">
                                <h3>70-100</h3>
                                <p>Practical Assignments</p>
                            </div>
                        </div>
                        <div class="col-12 col-md-6 col-lg-3">
                            <div class="courses-breakdown-card courses-breakdown-even-card">
                                <h3>3+</h3>
                                <p>Assessments / Mock Interviews</p>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- course details -->
                 <div class="course-details-main">
                    <div class="course-details-card">
                        <img src="../assets/courses/calendar-icon.svg" alt="week">
                        <p>Mon - Fri</p>
                    </div>
                    <div class="course-details-card">
                        <img src="../assets/courses/online-icon.svg" alt="online-offline">
                        <p>Online/Offline</p>
                    </div>
                    <div class="course-details-card">
                        <img src="../assets/courses/time-icon.svg" alt="1 hour real time">
                        <p><span>1 Hour</span> Real time interactive teaching</p>
                    </div>
                    <div class="course-details-card">
                        <img src="../assets/courses/real-time.svg" alt="2 hours real time task">
                        <p><span>2 Hours</span> Real time Task</p>
                    </div>
                 </div>
            </div>
        </section>
        <!-- ================================== -->
        <!-- course syllabus section -->
        <!-- ================================== -->
        <section class="course-details-sec-main">
            <div class="container">
                <div class="row align-items-center text-center mb-4">
                    <div class="col-12 col-lg-5">
                        <h2>Course Syllabus</h2>
                    </div>
                    <div class="col-12 col-lg-7 text-xl-end">
                        <!-- <a href="#" class="course-syllabus-btn"><span>Download</span> | course Full-Stack Developer Course Syllabus</a> -->
                        <button type="button" class="course-syllabus-btn"  data-bs-toggle="modal" data-bs-target="#centeredModal">
                            <span>Download</span> | HTML-CSS-Javascript Course Syllabus
                        </button>
                    </div>
                </div>
                <!-- html -->
                <div class="row">
                    <div class="col-12">
                        <h2>HTML</h2>
                        <div class="accordion course-syllabus-accordion" id="accordionExample">
                            <div class="accordion-item course-details-accordion-main">
                                <span class="accordion-count">1</span>
                                <h2 class="accordion-header">
                                <button class="accordion-button course-details-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                Introduction to HTML
                                </button>
                                </h2>
                                <div id="collapseOne" class="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                                    <div class="accordion-body courses-syllabus-body">
                                        <ul>
                                            <li>What is HTML?</li>
                                            <li>HTML Document Structure</li>
                                            <li>Basic HTML Tags</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div class="accordion-item course-details-accordion-main">
                                <span class="accordion-count">2</span>
                                <h2 class="accordion-header">
                                <button class="accordion-button collapsed course-details-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                Core HTML Topics 
                                </button>
                                </h2>
                                <div id="collapseTwo" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                    <div class="accordion-body courses-syllabus-body">
                                        <ul>
                                            <li>HTML Headings</li>
                                            <li>HTML Paragraphs</li>
                                            <li>HTML Formatting</li>
                                            <li>HTML Blocks</li>
                                            <li>HTML Images</li>
                                            <li>HTML Attributes</li>
                                            <li>HTML Links</li>
                                            <li>HTML Lists</li>
                                            <li>HTML Comments</li>
                                            <li>HTML Styles</li>
                                            <li>HTML Classes</li>
                                            <li>Iframe Tag</li>
                                            <li>Tables and Forms</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div class="accordion-item course-details-accordion-main">
                                <span class="accordion-count">3</span>
                                <h2 class="accordion-header">
                                <button class="accordion-button collapsed course-details-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                HTML5 Features
                                </button>
                                </h2>
                                <div id="collapseThree" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                    <div class="accordion-body courses-syllabus-body">
                                        <ul>
                                            <li>HTML5 Semantics</li>
                                            <li>Multimedia Tags</li>
                                            <li>New form input types and attributes</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- css -->
                <div class="row">
                    <div class="col-12">
                        <h2>CSS</h2>
                        <div class="accordion course-syllabus-accordion" id="accordionExample2">
                            <div class="accordion-item course-details-accordion-main">
                                <span class="accordion-count">1</span>
                                <h2 class="accordion-header">
                                <button class="accordion-button course-details-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseCssOne" aria-expanded="true" aria-controls="collapseCssOne">
                                    Introduction to CSS
                                </button>
                                </h2>
                                <div id="collapseCssOne" class="accordion-collapse collapse show" data-bs-parent="#accordionExample2">
                                    <div class="accordion-body courses-syllabus-body">
                                        <ul>
                                            <li>What is CSS?</li>
                                            <li>Linking CSS to HTML</li>
                                            <li>Inline, Internal, and External Stylesheets</li>
                                            <li>CSS Syntax, Selectors and Specificity</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div class="accordion-item course-details-accordion-main">
                                <span class="accordion-count">2</span>
                                <h2 class="accordion-header">
                                    <button class="accordion-button collapsed course-details-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseCssTwo" aria-expanded="false" aria-controls="collapseCssTwo">
                                        Core CSS Topics 
                                    </button>
                                </h2>
                                <div id="collapseCssTwo" class="accordion-collapse collapse" data-bs-parent="#accordionExample2">
                                    <div class="accordion-body courses-syllabus-body">
                                        <ul>
                                            <li>Box Model</li>
                                            <li>Colors and Backgrounds</li>
                                            <li>Display Property</li>
                                            <li>Positioning Elements</li>
                                            <li>Floats and Clearing</li>
                                            <li>Typography</li>
                                            <li>Gradients</li>
                                            <li>Pseudo-classes and Pseudo-elements</li>
                                            <li>Transform Properties</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div class="accordion-item course-details-accordion-main">
                                <span class="accordion-count">3</span>
                                <h2 class="accordion-header">
                                    <button class="accordion-button collapsed course-details-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseCssThree" aria-expanded="false" aria-controls="collapseCssThree">
                                       CSS Transitions and Animations 
                                    </button>
                                </h2>
                                <div id="collapseCssThree" class="accordion-collapse collapse" data-bs-parent="#accordionExample2">
                                    <div class="accordion-body courses-syllabus-body">
                                        <ul>
                                            <li>Transition Propertites</li>
                                            <li>Creating Smooth Transitions</li>
                                            <li>Keyframes and Animations</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div class="accordion-item course-details-accordion-main">
                                <span class="accordion-count">4</span>
                                <h2 class="accordion-header">
                                    <button class="accordion-button collapsed course-details-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseCssFour" aria-expanded="false" aria-controls="collapseCssFour">
                                       Responsive Design with CSS 
                                    </button>
                                </h2>
                                <div id="collapseCssFour" class="accordion-collapse collapse" data-bs-parent="#accordionExample2">
                                    <div class="accordion-body courses-syllabus-body">
                                        <ul>
                                            <li>Flexbox and Grid Layout</li>
                                            <li>Media Queries</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- javascript -->
                <div class="row">
                    <div class="col-12">
                        <h2>JavaScript</h2>
                        <div class="accordion course-syllabus-accordion" id="accordionExample3">
                            <div class="accordion-item course-details-accordion-main">
                                <span class="accordion-count">1</span>
                                <h2 class="accordion-header">
                                <button class="accordion-button course-details-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseCssOne" aria-expanded="true" aria-controls="collapseCssOne">
                                    Introduction to JavaScript
                                </button>
                                </h2>
                                <div id="collapseCssOne" class="accordion-collapse collapse show" data-bs-parent="#accordionExample3">
                                    <div class="accordion-body courses-syllabus-body">
                                        <ul>
                                            <li>Understanding the basics of Javascript</li>
                                            <li>Basic Syntax and Variables </li>
                                            <li>Data types and Operators </li>
                                            <li>Conditional Statements and Loops</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div class="accordion-item course-details-accordion-main">
                                <span class="accordion-count">2</span>
                                <h2 class="accordion-header">
                                    <button class="accordion-button collapsed course-details-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseCssTwo" aria-expanded="false" aria-controls="collapseCssTwo">
                                        Core concepts
                                    </button>
                                </h2>
                                <div id="collapseCssTwo" class="accordion-collapse collapse" data-bs-parent="#accordionExample3">
                                    <div class="accordion-body courses-syllabus-body">
                                        <ul>
                                            <li>Comments</li>
                                            <li>Variables and Scope  </li>
                                            <li>Events and Eventlistners</li>
                                            <li>JavaScript DOM</li>
                                            <li>Functions </li>
                                            <li>Hoisting</li>
                                            <li>Clousers</li>
                                            <li>Working with Arrays, Strings and Objects</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div class="accordion-item course-details-accordion-main">
                                <span class="accordion-count">3</span>
                                <h2 class="accordion-header">
                                    <button class="accordion-button collapsed course-details-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseCssThree" aria-expanded="false" aria-controls="collapseCssThree">
                                      Advanced Topics in JavaScript
                                    </button>
                                </h2>
                                <div id="collapseCssThree" class="accordion-collapse collapse" data-bs-parent="#accordionExample3">
                                    <div class="accordion-body courses-syllabus-body">
                                        <ul>
                                            <li>JavaScript ES6+</li>
                                            <li>Asynchronous JavaScript</li>
                                            <li>Higher order Functions</li>
                                            <li>Call back functions ,Promises and Async Await</li>
                                            <li>Working with APIs and JSON</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>
         </section>
         <!-- =============================== -->
        <!-- course faq's -->
         <!-- =============================== -->
        <section class="course-faqs-main-sec">
            <div class="container">
                <h2>Course <span>FAQ’S</span></h2>
                <!-- course faq's -->
                <div class="accordion course-faqs-accordion" id="courseFaqsAccordion">
                    <div class="accordion-item course-faqs-item">
                        <h2 class="accordion-header course-faqs-header">
                        <button class="accordion-button course-faqs-button" type="button" data-bs-toggle="collapse" data-bs-target="#courseFaqOne" aria-expanded="true" aria-controls="courseFaqOne">
                            What is HTML, CSS, and JavaScript, and why are they important?
                        </button>
                        </h2>
                        <div id="courseFaqOne" class="accordion-collapse collapse show" data-bs-parent="#courseFaqsAccordion">
                            <div class="accordion-body course-faqs-body">
                                <p>HTML, CSS, and JavaScript are the essential technologies for building websites. HTML structures the web content, CSS styles it, and JavaScript makes it interactive, allowing you to create user-friendly and engaging web pages.</p>
                            </div>
                        </div>
                    </div>
                    <!-- two -->
                    <div class="accordion-item course-faqs-item">
                        <h2 class="accordion-header course-faqs-header">
                        <button class="accordion-button collapsed course-faqs-button" type="button" data-bs-toggle="collapse" data-bs-target="#courseFaqTwo" aria-expanded="false" aria-controls="courseFaqTwo">
                            Do I need prior coding experience for this course?
                        </button>
                        </h2>
                        <div id="courseFaqTwo" class="accordion-collapse collapse" data-bs-parent="#courseFaqsAccordion">
                        <div class="accordion-body course-faqs-body">
                            <p>No prior coding experience is required. This course is designed for beginners and will start from the basics of web development</p>
                        </div>
                        </div>
                    </div>
                    <!-- three -->
                    <div class="accordion-item course-faqs-item">
                        <h2 class="accordion-header course-faqs-header">
                            <button class="accordion-button collapsed course-faqs-button" type="button" data-bs-toggle="collapse" data-bs-target="#courseFaqThree" aria-expanded="false" aria-controls="courseFaqThree">
                                What career opportunities can I explore after completing this course?
                            </button>
                        </h2>
                        <div id="courseFaqThree" class="accordion-collapse collapse" data-bs-parent="#courseFaqsAccordion">
                        <div class="accordion-body course-faqs-body">
                            <p>Upon completing this course, you can pursue roles such as Front-End Developer, UI/UX Developer, and JavaScript Developer. These skills are in high demand across the tech industry.</p>
                        </div>
                        </div>
                    </div>
                    <!-- four -->
                    <div class="accordion-item course-faqs-item">
                        <h2 class="accordion-header course-faqs-header">
                        <button class="accordion-button collapsed course-faqs-button" type="button" data-bs-toggle="collapse" data-bs-target="#courseFaqFour" aria-expanded="false" aria-controls="courseFaqFour">
                        How long does it take to become proficient in HTML, CSS, and JavaScript?
                        </button>
                        </h2>
                        <div id="courseFaqFour" class="accordion-collapse collapse" data-bs-parent="#courseFaqsAccordion">
                        <div class="accordion-body course-faqs-body">
                            <p>With consistent practice, you can become proficient within 3-4 months. The key is to work on real-world projects to apply your learning.</p>
                        </div>
                        </div>
                    </div>
                    <!-- five -->
                     <div class="accordion-item course-faqs-item">
                        <h2 class="accordion-header course-faqs-header">
                            <button class="accordion-button collapsed course-faqs-button" type="button" data-bs-toggle="collapse" data-bs-target="#courseFaqFive" aria-expanded="false" aria-controls="courseFaqFive">
                                What tools and software will be used during the course?
                            </button>
                        </h2>
                        <div id="courseFaqFive" class="accordion-collapse collapse" data-bs-parent="#courseFaqsAccordion">
                        <div class="accordion-body course-faqs-body">
                            <p>We will use code editors like Visual Studio Code, Google Chrome Developer Tools for debugging, and GitHub for version control and project hosting.</p>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </main>


        <!-- -- footer -->
        <?php include "../includes/footer.php" ?>
        <!-- --footer-inks-- -->
        <?php include '../includes/footer-links.php' ?>
        <script src="../js/courses.js"></script>
</body>
</html>

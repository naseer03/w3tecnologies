<?php $course="mern Full-Stack Developer" ;
$course_file ="mern-stack";
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <!-- header-links -->
     <?php include "../includes/header-links.php" ?>
    <link rel="stylesheet" href="../styles/courses/course-stack.css">
    <title>MERN Fullstack Development</title>
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
                    <div class="course-banner-heading-main">
                        <h1>MERN</h1>
                        <div class="course-banner-sub">
                            <span>Full Stack</span>
                            <span>Development</span>
                        </div>
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
                        <h2><span>About</span> MERN Full Stack Development</h2>
                        <p>The term <span>MERN</span> stands for <span>MongoDB, Express, React, and Node.js</span> which are the four technologies that make up the stack. When creating highly dynamic and scalable online apps, developers find that the MERN stack offers a streamlined development environment. Knowing the MERN stack can lead to great job prospects in the IT industry, as the demand for dynamic and data-intensive web applications is expanding.</p>
                    </div>
                </div>
                  <!-- Button to trigger modal -->
                        <button type="button" class="model-blk-btn"  data-bs-toggle="modal" data-bs-target="#centeredModal">
                           <span>Download</span> | MERN Full Stack Syllabus
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
        <!--mern full stack course-breakdown-->
        <!-- ================================== -->
        <section class="course-breakdown-main-sec">
            <div class="container">
                <h2>MERN Full-Stack Developer Course <br><span>Breakdown</span></h2>
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
                <div class="row align-items-center text-center">
                    <div class="col-12 col-lg-5">
                        <h2>Course Syllabus</h2>
                    </div>
                    <div class="col-12 col-lg-7 text-xl-end">
                        <!-- <a href="#" class="course-syllabus-btn"><span>Download</span> | course Full-Stack Developer Course Syllabus</a> -->
                        <button type="button" class="course-syllabus-btn"  data-bs-toggle="modal" data-bs-target="#centeredModal">
                            <span>Download</span> | MERN Full-Stack Developer Course Syllabus
                        </button>
                    </div>
                </div>
                <div class="row">
                    <div class="col-12">
                    <div class="accordion course-syllabus-accordion" id="accordionExample">
                        <div class="accordion-item course-details-accordion-main">
                            <span class="accordion-count">1</span>
                            <h2 class="accordion-header">
                            <button class="accordion-button course-details-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                Basic frontend
                            </button>
                            </h2>
                            <div id="collapseOne" class="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                                <div class="accordion-body courses-syllabus-body">
                                    <ul>
                                        <li>HTML</li>
                                        <li>CSS</li>
                                        <li>JavaScript</li>
                                        <li>Adv. JavaScript</li>
                                        <li>Bootstrap</li>
                                        <li>SASS</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div class="accordion-item course-details-accordion-main">
                            <span class="accordion-count">2</span>
                            <h2 class="accordion-header">
                            <button class="accordion-button collapsed course-details-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                React
                            </button>
                            </h2>
                            <div id="collapseTwo" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                <div class="accordion-body courses-syllabus-body">
                                    <ul>
                                        <!-- <li>React Introduction</li> -->
                                        <li>React Introduction</li>
                                        <li>Lists & keys</li>
                                        <li>State & Hooks</li>
                                        <li>Context API</li>
                                        <li>React router</li>
                                        <li>React bootstrap</li>
                                        <li>Material UI</li>
                                        <li>Server-side deployment</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div class="accordion-item course-details-accordion-main">
                            <span class="accordion-count">3</span>
                            <h2 class="accordion-header">
                            <button class="accordion-button collapsed course-details-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                               Backend
                            </button>
                            </h2>
                            <div id="collapseThree" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                <div class="accordion-body courses-syllabus-body">
                                    <ul>
                                        <li>NodeJs</li>
                                        <li>EXpressJs</li>
                                        <li>Rest API</li>
                                        <li>Unit-Testing</li>
                                        <li>Deployment</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div class="accordion-item course-details-accordion-main">
                            <span class="accordion-count">4</span>
                            <h2 class="accordion-header">
                            <button class="accordion-button collapsed course-details-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                               Database
                            </button>
                            </h2>
                            <div id="collapseFour" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                <div class="accordion-body courses-syllabus-body">
                                    <ul>
                                        <li>MYSQL</li>
                                        <li>MongoDB</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div class="accordion-item course-details-accordion-main">
                            <span class="accordion-count">5</span>
                            <h2 class="accordion-header">
                            <button class="accordion-button collapsed course-details-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
                               Tools
                            </button>
                            </h2>
                            <div id="collapseFive" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                <div class="accordion-body courses-syllabus-body">
                                    <ul>
                                        <li>GitHub</li>
                                        <li>Docker</li>
                                        <li>Kubernetes</li>
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
                        What is the MERN stack?
                        </button>
                        </h2>
                        <div id="courseFaqOne" class="accordion-collapse collapse show" data-bs-parent="#courseFaqsAccordion">
                            <div class="accordion-body course-faqs-body">
                                <p>The MERN stack is a combination of four technologies used for web development: MongoDB, Express.js, React.js, and Node.js. Together, these technologies enable full-stack development using JavaScript for both the front-end and back-end.</p>
                            </div>
                        </div>
                    </div>
                    <!-- two -->
                    <div class="accordion-item course-faqs-item">
                        <h2 class="accordion-header course-faqs-header">
                        <button class="accordion-button collapsed course-faqs-button" type="button" data-bs-toggle="collapse" data-bs-target="#courseFaqTwo" aria-expanded="false" aria-controls="courseFaqTwo">
                        Do I need prior programming experience to take this course?
                        </button>
                        </h2>
                        <div id="courseFaqTwo" class="accordion-collapse collapse" data-bs-parent="#courseFaqsAccordion">
                        <div class="accordion-body course-faqs-body">
                            <p>While having some programming experience, particularly with JavaScript, can be helpful, it is not mandatory. This course is designed to accommodate beginners as well as those with some coding knowledge, covering fundamental concepts and progressing to more advanced topics.</p>
                        </div>
                        </div>
                    </div>
                    <!-- three -->
                    <div class="accordion-item course-faqs-item">
                        <h2 class="accordion-header course-faqs-header">
                        <button class="accordion-button collapsed course-faqs-button" type="button" data-bs-toggle="collapse" data-bs-target="#courseFaqThree" aria-expanded="false" aria-controls="courseFaqThree">
                        What will I learn in a MERN stack development course?
                        </button>
                        </h2>
                        <div id="courseFaqThree" class="accordion-collapse collapse" data-bs-parent="#courseFaqsAccordion">
                        <div class="accordion-body course-faqs-body">
                            <p>You will learn how to build dynamic web applications using MongoDB for the database, Express.js for the server-side framework, React.js for the front-end library, and Node.js for the runtime environment. The course will cover setting up the development environment, CRUD operations, RESTful APIs, authentication, and deploying applications.</p>
                        </div>
                        </div>
                    </div>
                    <!-- four -->
                    <div class="accordion-item course-faqs-item">
                        <h2 class="accordion-header course-faqs-header">
                        <button class="accordion-button collapsed course-faqs-button" type="button" data-bs-toggle="collapse" data-bs-target="#courseFaqFour" aria-expanded="false" aria-controls="courseFaqFour">
                        How long does it take to become proficient in MERN stack development?
                        </button>
                        </h2>
                        <div id="courseFaqFour" class="accordion-collapse collapse" data-bs-parent="#courseFaqsAccordion">
                        <div class="accordion-body course-faqs-body">
                            <p>The time to become proficient varies based on your learning pace and the course's depth. Generally, it can take several months to a year of consistent practice and learning to master the necessary skills for MERN stack development.</p>
                        </div>
                        </div>
                    </div>
                    <!-- five -->
                     <div class="accordion-item course-faqs-item">
                        <h2 class="accordion-header course-faqs-header">
                        <button class="accordion-button collapsed course-faqs-button" type="button" data-bs-toggle="collapse" data-bs-target="#courseFaqFive" aria-expanded="false" aria-controls="courseFaqFive">
                        What career opportunities are available for MERN stack developers?
                        </button>
                        </h2>
                        <div id="courseFaqFive" class="accordion-collapse collapse" data-bs-parent="#courseFaqsAccordion">
                        <div class="accordion-body course-faqs-body">
                            <p>Career opportunities include roles such as Fullstack Developer, Frontend Developer, Backend Developer, Web Developer, and Software Engineer. MERN stack skills are in high demand in industries such as tech, finance, healthcare, and e-commerce.</p>
                        </div>
                        </div>
                    </div>
                    <!-- six -->
                    <div class="accordion-item course-faqs-item">
                        <h2 class="accordion-header course-faqs-header">
                        <button class="accordion-button collapsed course-faqs-button" type="button" data-bs-toggle="collapse" data-bs-target="#courseFaqSix" aria-expanded="false" aria-controls="courseFaqSix">
                        Will I receive a certification upon completing the MERN stack development course?
                        </button>
                        </h2>
                        <div id="courseFaqSix" class="accordion-collapse collapse" data-bs-parent="#courseFaqsAccordion">
                        <div class="accordion-body course-faqs-body">
                            <p>Many MERN stack development courses offer a certification upon successful completion. This certification can validate your skills and knowledge, enhancing your resume and increasing your employability in the job market.</p>
                        </div>
                        </div>
                    </div>
                    <!-- seven -->
                    <div class="accordion-item course-faqs-item">
                        <h2 class="accordion-header course-faqs-header">
                        <button class="accordion-button collapsed course-faqs-button" type="button" data-bs-toggle="collapse" data-bs-target="#courseFaqSeven" aria-expanded="false" aria-controls="courseFaqSeven">
                        Can I build real-world applications during this course?
                        </button>
                        </h2>
                        <div id="courseFaqSeven" class="accordion-collapse collapse" data-bs-parent="#courseFaqsAccordion">
                        <div class="accordion-body course-faqs-body">
                            <p>Yes, this course includes practical projects where you will build real-world applications. These projects help you apply the concepts learned, gain hands-on experience, and build a portfolio to showcase your skills to potential employers.</p>
                        </div>
                        </div>
                    </div>
                    <!-- eight -->
                    <div class="accordion-item course-faqs-item">
                        <h2 class="accordion-header course-faqs-header">
                        <button class="accordion-button collapsed course-faqs-button" type="button" data-bs-toggle="collapse" data-bs-target="#courseFaqEight" aria-expanded="false" aria-controls="courseFaqEight">
                        Is the MERN stack suitable for freelancers and entrepreneurs?
                        </button>
                        </h2>
                        <div id="courseFaqEight" class="accordion-collapse collapse" data-bs-parent="#courseFaqsAccordion">
                        <div class="accordion-body course-faqs-body">
                            <p>Absolutely. The MERN stack is highly suitable for freelancers and entrepreneurs who want to build and manage their own web applications. The ability to handle both front-end and back-end development makes you more versatile and self-sufficient.</p>
                        </div>
                        </div>
                    </div>
                    <!-- nine -->
                    <div class="accordion-item course-faqs-item">
                        <h2 class="accordion-header course-faqs-header">
                        <button class="accordion-button collapsed course-faqs-button" type="button" data-bs-toggle="collapse" data-bs-target="#courseFaqNine" aria-expanded="false" aria-controls="courseFaqNine">
                        What is the importance of learning the MERN stack for modern web development?
                        </button>
                        </h2>
                        <div id="courseFaqNine" class="accordion-collapse collapse" data-bs-parent="#courseFaqsAccordion">
                        <div class="accordion-body course-faqs-body">
                            <p>Learning the MERN stack is important for modern web development because it covers the entire spectrum of web application development using a single language, JavaScript. This consistency can lead to faster development times, easier debugging, and a more cohesive development process.</p>
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

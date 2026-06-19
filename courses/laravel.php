<?php $course="Laravel PHP Fullstack" ;
$course_file ="laravel";
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <!-- header-links -->
     <?php include "../includes/header-links.php" ?>
    <link rel="stylesheet" href="../styles/courses/course-stack.css">
    <title>Laravel PHP Fullstack</title>
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
    <main class="course-stack">
        <!-- ============================= -->
         <!-- banner section -->
        <!-- ============================== -->
        <div class="courses-main-banner-sec">
            <?php include "../includes/header.php"?>
            <div class="container">
                <div class="course-banner-sec-heading">
                    <img src="../assets/courses/laravel/controllers.svg" alt="controllers">
                    <img src="../assets/courses/laravel/models.svg" alt="models">
                    <div class="course-banner-heading-main">
                        <h1>laravel</h1>
                        <div class="course-banner-sub">
                            <span>php</span>
                            <span>fullstack</span>
                        </div>
                    </div>
                    <img src="../assets/courses/laravel/restful-apls.svg" alt="restful-apis">
                    <img src="../assets/courses/laravel/routing.svg" alt="routing">
                </div>
            </div>
        </div>

        <!-- ================================== -->
         <!-- About course full stack development -->
        <!-- ================================== -->
         <section class="about-course-sec-main">
            <div class="container">
                <div class="row">
                    <div class="col-12 ">
                        <h2><span>About</span> LARAVEL PHP Framework</h2>
                        <p>Laravel is an open-source PHP framework used to build websites and apps. It contains all the necessary components and features to help web developers create a website using the PHP scripting language. It is important to note that Laravel isn’t the only framework available to PHP developers. In fact, other popular PHP frameworks include Symfony, CodeIgniter and Yii (just to name a few). And if we venture outside the PHP zone, there’s even more frameworks available, such as Rails which is based on the Ruby language, .NET which uses C#, or Sails.js, a Javascript framework.</p>
                        <p>Just like most popular web frameworks, Laravel follows a model-view-controller (MVC) approach to development. This simply means that the development process is broken down into three main components:</p>
                        <ul>
                            <li><span>Model:</span> How data is handled and maintained on the site or app.</li>
                            <li><span>View:</span> This is the visual representation of the data, or in other words the UI (user interface). This bit will be mostly handled by HTML/CSS. Examples of UI elements may include drop-downs, charts, text boxes and tables.</li>
                            <li><span>Controller:</span> As the name suggests, it controls the data shown to the user. When a user interacts with the site/app, it will retrieve the relevant data from the model and then display it to the user using the view component.</li>
                        </ul>
                       
                          <!-- Button to trigger modal -->
                          <button type="button" class="model-blk-btn"  data-bs-toggle="modal" data-bs-target="#centeredModal">
                           <span>Download</span> | LARAVEL PHP Framework Syllabus
                        </button>  
                    </div>
                </div>
            </div>
         </section>
         
         <!-- ================================ -->
          <!-- ========course-includes======== -->
          <?php include '../includes/course-includes.php' ?>
           <?php include '../includes/course-from-sec.php' ?>
        <!-- ================================== -->

        <!-- ================================== -->
        <!-- About course full stack development -->
        <!-- ================================== -->
        <section class="course-breakdown-main-sec">
            <div class="container">
                <h2>LARAVEL PHP Framework Course <br><span>Breakdown</span></h2>
                <div class="course-breakdown-main-card">
                    <div class="row">
                        <div class="col-12 col-md-6 col-lg-3">
                            <div class="courses-breakdown-card">
                                <h3>100%</h3>
                                <p>Hands-on
                                Training</p>
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
                        <img src="../assets/courses/calendar-icon.svg" alt="month">
                        <p>July</p>
                    </div>
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
                        
                        <button type="button" class="course-syllabus-btn"  data-bs-toggle="modal" data-bs-target="#centeredModal">
                            <span>Download</span>  | LARAVEL PHP Framework Course Syllabus
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
                            Introduction of Laravel PHP Framework
                            </button>
                            </h2>
                            <div id="collapseOne" class="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                                <div class="accordion-body courses-syllabus-body">
                                    <ul>
                                        <li>Installing Laravel </li>
                                        <li>Artisan CLI (command-line interface) </li>
                                        <li>Laravel Directory Structure </li>
                                        <li>Configuring a new Laravel project </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div class="accordion-item course-details-accordion-main">
                            <span class="accordion-count">2</span>
                            <h2 class="accordion-header">
                            <button class="accordion-button collapsed course-details-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                            Architecture & Basics 
                            </button>
                            </h2>
                            <div id="collapseTwo" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                <div class="accordion-body courses-syllabus-body">
                                    <ul>
                                        <li>Architecture overview -Basic routing</li>
                                        <li>Call a controller method from a route </li>
                                        <li>Passing variables from controllers to views </li>
                                        <li>CSRF protection </li>
                                        <li>Validation </li>
                                        <li>Error handling </li>
                                        <li>Controller </li>
                                        <li>Request </li>
                                        <li>Views </li>
                                        <li>Session </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div class="accordion-item course-details-accordion-main">
                            <span class="accordion-count">3</span>
                            <h2 class="accordion-header">
                            <button class="accordion-button collapsed course-details-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                            HTML Template to Laravel Blade Template 
                            </button>
                            </h2>
                            <div id="collapseThree" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                <div class="accordion-body courses-syllabus-body">
                                    <ul>
                                        <li>Master layout </li>
                                        <li>Extending the master layout </li>
                                        <li>Displaying variables </li>
                                        <li>Blade conditional statements & loops </li>
                                        <li>PHP functions in blade </li>
                                        <li>Creating and using a basic views </li>
                                        <li>Loading a view into another view/nested views </li>
                                        <li>Adding assets </li>
                                        <li>Integrating with Bootstrap </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div class="accordion-item course-details-accordion-main">
                            <span class="accordion-count">4</span>
                            <h2 class="accordion-header">
                            <button class="accordion-button collapsed course-details-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                            Security & Session 
                            </button>
                            </h2>
                            <div id="collapseFour" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                <div class="accordion-body courses-syllabus-body">
                                    <ul>
                                        <li>Authentication </li>
                                        <li>Authorization </li>
                                        <li>Encryption </li>
                                        <li>Hashing </li>
                                        <li>Using Security </li>
                                        <li>Sessions Effective </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div class="accordion-item course-details-accordion-main">
                            <span class="accordion-count">5</span>
                            <h2 class="accordion-header">
                            <button class="accordion-button collapsed course-details-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
                            Database 
                            </button>
                            </h2>
                            <div id="collapseFive" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                <div class="accordion-body courses-syllabus-body">
                                    <ul>
                                        <li>Introduction</li>
                                        <li>Query Builder </li>
                                        <li>Migrations </li>
                                        <li>Seeding </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <!-- six -->
                            <div class="accordion-item course-details-accordion-main">
                                <span class="accordion-count">6</span>
                                <h2 class="accordion-header">
                                <button class="accordion-button collapsed course-details-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSix" aria-expanded="false" aria-controls="collapseSix">
                                Eloquent ORM (Storing and Using Data) 
                                </button>
                                </h2>
                                <div id="collapseSix" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                    <div class="accordion-body courses-syllabus-body">
                                        <ul>
                                            <li>Eloquent ORM Models </li>
                                            <li>Naming conventions </li>
                                            <li>Table name and primary keys  </li>
                                            <li>Timestamps  </li>
                                            <li>Eloquent ORM INSERT, READ , UPDATE , DELETE </li>
                                            <li>Using models in controllers </li>
                                            <li>Displaying data from models in views </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        <!-- seven -->
                            <div class="accordion-item course-details-accordion-main">
                                <span class="accordion-count">7</span>
                                <h2 class="accordion-header">
                                <button class="accordion-button collapsed course-details-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSeven" aria-expanded="false" aria-controls="collapseSeven">
                                    Creating a registration and user login form 
                                </button>
                                </h2>
                                <div id="collapseSeven" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                    <div class="accordion-body courses-syllabus-body">
                                        <ul>
                                            <li>Artisan command to create inbuilt user register and login system </li>
                                            <li>Authenticating Your Application </li>
                                            <li>Adding Custom Fields to Registration Form </li>
                                            <li>Creating user profile page </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        <!-- eight -->
                            <div class="accordion-item course-details-accordion-main">
                                <span class="accordion-count">8</span>
                                <h2 class="accordion-header">
                                <button class="accordion-button collapsed course-details-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseEight" aria-expanded="false" aria-controls="collapseEight">
                                Admin Panel Setup 
                                </button>
                                </h2>
                                <div id="collapseEight" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                    <div class="accordion-body courses-syllabus-body">
                                        <ul>
                                            <li>Introduction</li>
                                            <li>Setup Admin Panel using Bootstrap theme </li>
                                            <li>Create Admin login </li>
                                            <li>Creating an admin authentication system</li>
                                            <li>Encrypting and decrypting data </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        <!-- nine -->
                            <div class="accordion-item course-details-accordion-main">
                                <span class="accordion-count">9</span>
                                <h2 class="accordion-header">
                                <button class="accordion-button collapsed course-details-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseNine" aria-expanded="false" aria-controls="collapseNine">
                                    Using Ajax and jQuery  
                                </button>
                                </h2>
                                <div id="collapseNine" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                    <div class="accordion-body courses-syllabus-body">
                                        <ul>
                                            <li>Introduction</li>
                                            <li>Getting data from another page </li>
                                            <li>Setting up a controller to return JSON data</li>
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
                        What is Laravel, and why should I learn it?
                        </button>
                        </h2>
                        <div id="courseFaqOne" class="accordion-collapse collapse show" data-bs-parent="#courseFaqsAccordion">
                            <div class="accordion-body course-faqs-body">
                                <p>Laravel is a popular PHP framework used for web application development. It provides an elegant syntax, robust features, and tools to simplify common tasks like routing, authentication, and caching. Learning Laravel can make you a more efficient developer and enhance your career opportunities in web development.</p>
                            </div>
                        </div>
                    </div>
                    <!-- two -->
                    <div class="accordion-item course-faqs-item">
                        <h2 class="accordion-header course-faqs-header">
                        <button class="accordion-button collapsed course-faqs-button" type="button" data-bs-toggle="collapse" data-bs-target="#courseFaqTwo" aria-expanded="false" aria-controls="courseFaqTwo">
                        What will I learn in a Laravel development course?
                        </button>
                        </h2>
                        <div id="courseFaqTwo" class="accordion-collapse collapse" data-bs-parent="#courseFaqsAccordion">
                        <div class="accordion-body course-faqs-body">
                            <p>You will learn about Laravel’s architecture, routing, controllers, views, Eloquent ORM, middleware, authentication, and authorization. The course will also cover advanced topics like RESTful APIs, testing, and deployment.</p>
                        </div>
                        </div>
                    </div>
                    <!-- three -->
                    <div class="accordion-item course-faqs-item">
                        <h2 class="accordion-header course-faqs-header">
                        <button class="accordion-button collapsed course-faqs-button" type="button" data-bs-toggle="collapse" data-bs-target="#courseFaqThree" aria-expanded="false" aria-controls="courseFaqThree">
                        What career opportunities are available for Laravel developers?
                        </button>
                        </h2>
                        <div id="courseFaqThree" class="accordion-collapse collapse" data-bs-parent="#courseFaqsAccordion">
                        <div class="accordion-body course-faqs-body">
                            <p>Career opportunities include roles such as Web Developer, Fullstack Developer, Backend Developer, and PHP Developer. Laravel skills are in high demand across various industries, including tech, finance, e-commerce, and digital agencies.</p>
                        </div>
                        </div>
                    </div>
                    <!-- four -->
                    <div class="accordion-item course-faqs-item">
                        <h2 class="accordion-header course-faqs-header">
                        <button class="accordion-button collapsed course-faqs-button" type="button" data-bs-toggle="collapse" data-bs-target="#courseFaqFour" aria-expanded="false" aria-controls="courseFaqFour">
                        Will I receive a certification upon completing the Laravel course?
                        </button>
                        </h2>
                        <div id="courseFaqFour" class="accordion-collapse collapse" data-bs-parent="#courseFaqsAccordion">
                        <div class="accordion-body course-faqs-body">
                            <p>Many Laravel courses offer a certification upon successful completion. This certification can validate your skills and knowledge, enhancing your resume and increasing your employability in the job market.</p>
                        </div>
                        </div>
                    </div>
                    <!-- five -->
                     <div class="accordion-item course-faqs-item">
                        <h2 class="accordion-header course-faqs-header">
                        <button class="accordion-button collapsed course-faqs-button" type="button" data-bs-toggle="collapse" data-bs-target="#courseFaqFive" aria-expanded="false" aria-controls="courseFaqFive">
                        Is Laravel suitable for building large-scale applications?
                        </button>
                        </h2>
                        <div id="courseFaqFive" class="accordion-collapse collapse" data-bs-parent="#courseFaqsAccordion">
                        <div class="accordion-body course-faqs-body">
                            <p>Yes, Laravel is suitable for building both small and large-scale applications. Its robust architecture, scalability, and extensive feature set make it an excellent choice for developing complex web applications.</p>
                        </div>
                        </div>
                    </div>
                    <!-- six -->
                    <div class="accordion-item course-faqs-item">
                        <h2 class="accordion-header course-faqs-header">
                        <button class="accordion-button collapsed course-faqs-button" type="button" data-bs-toggle="collapse" data-bs-target="#courseFaqSix" aria-expanded="false" aria-controls="courseFaqSix">
                        Can I build real-world applications during this course?
                        </button>
                        </h2>
                        <div id="courseFaqSix" class="accordion-collapse collapse" data-bs-parent="#courseFaqsAccordion">
                        <div class="accordion-body course-faqs-body">
                            <p>Yes, this course includes practical projects where you will build real-world applications. These projects help you apply the concepts learned, gain hands-on experience, and build a portfolio to showcase your skills to potential employers.</p>
                        </div>
                        </div>
                    </div>
                    <!-- seven -->
                    <div class="accordion-item course-faqs-item">
                        <h2 class="accordion-header course-faqs-header">
                        <button class="accordion-button collapsed course-faqs-button" type="button" data-bs-toggle="collapse" data-bs-target="#courseFaqSeven" aria-expanded="false" aria-controls="courseFaqSeven">
                        How does Laravel compare to other PHP frameworks?
                        </button>
                        </h2>
                        <div id="courseFaqSeven" class="accordion-collapse collapse" data-bs-parent="#courseFaqsAccordion">
                        <div class="accordion-body course-faqs-body">
                            <p>Laravel stands out for its elegant syntax, comprehensive documentation, and built-in tools that simplify common development tasks. Compared to other PHP frameworks like Symfony or CodeIgniter, Laravel offers a more streamlined and developer-friendly experience.</p>
                        </div>
                        </div>
                    </div>
                    <!-- eight -->
                    <div class="accordion-item course-faqs-item">
                        <h2 class="accordion-header course-faqs-header">
                        <button class="accordion-button collapsed course-faqs-button" type="button" data-bs-toggle="collapse" data-bs-target="#courseFaqEight" aria-expanded="false" aria-controls="courseFaqEight">
                        What is the importance of learning Laravel for modern web development?
                        </button>
                        </h2>
                        <div id="courseFaqEight" class="accordion-collapse collapse" data-bs-parent="#courseFaqsAccordion">
                        <div class="accordion-body course-faqs-body">
                            <p>Learning Laravel is important for modern web development because it follows best practices, encourages clean code, and provides tools to enhance productivity. It helps developers build secure, scalable, and maintainable web applications efficiently.</p>
                        </div>
                        </div>
                    </div>
                    <!-- nine -->
                    <div class="accordion-item course-faqs-item">
                        <h2 class="accordion-header course-faqs-header">
                        <button class="accordion-button collapsed course-faqs-button" type="button" data-bs-toggle="collapse" data-bs-target="#courseFaqNine" aria-expanded="false" aria-controls="courseFaqNine">
                        Is Laravel suitable for freelancers and entrepreneurs?
                        </button>
                        </h2>
                        <div id="courseFaqNine" class="accordion-collapse collapse" data-bs-parent="#courseFaqsAccordion">
                        <div class="accordion-body course-faqs-body">
                            <p>Yes, Laravel is highly suitable for freelancers and entrepreneurs who want to build and manage their own web applications. The framework's simplicity, rich feature set, and active community support make it an excellent choice for developing custom solutions.</p>
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

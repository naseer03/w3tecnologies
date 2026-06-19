<?php $course="MySQL" ;
$course_file ="sql";
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <!-- header-links -->
     <?php include "../includes/header-links.php" ?>
    <link rel="stylesheet" href="../styles/courses/course-stack.css">
    <meta name="description" content="Learn MySQL full course in Nellore with W3 Technologies. Master database management and SQL queries. Enroll now and kickstart your career in technology.">
    <title>Learn MySQL full course in Nellore | W3 Technologies</title>
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
                    <img src="../assets/courses/sql/tables.svg" alt="tables">
                    <img src="../assets/courses/sql/joins.svg" alt="joins">
                    <div class="course-banner-heading-main">
                        <h1>MYSQL</h1>
                        <!-- <div class="course-banner-sub">
                            <span>&</span>
                            <span>MySQL</span>
                        </div> -->
                    </div>
                    <img src="../assets/courses/sql/functions.svg" alt="crud" >
                    <img src="../assets/courses/sql/crud.svg" alt="crud">
                    <img src="../assets/courses/sql/views.svg" alt="views"  class="d-none d-sm-block">
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
                        <h2><span>About</span> MySQL </h2>
                        <p>MySQL is popular among all databases, and is ranked as the 2nd most popular database, only slightly trailing Oracle Database. Among open source databases, MySQL is the most popular database in use today. Known as one of the most reliable and performative databases out there, it was named after it’s founders daughter My, and is known for organizing data into one or more data tables in which data types are related to each other. These relations help structure data, as SQL is a language programmers use for creation, modification and extraction of data from a relational database. </p>
                        <p> MySQL uses standalone clients that allow users to interact with MySQL, and also to use it with other programs for applications that need relational database capabilities. MySQL's reputation for reliability has led to its inclusion in the popular LAMP stack (Linux, Apache, MySQL, Python/Perl/PHP) and is also used as the default DBMS in popular CMS options like Drupal, Joomla, phpBB, and WordPress.</p>
                        <!-- <a href="#"><span>Download</span> | MySQL Syllabus</a> -->
                        <!-- Button to trigger modal -->
                        <button type="button" class="model-blk-btn"  data-bs-toggle="modal" data-bs-target="#centeredModal">
                           <span>Download</span> | MySQL Syllabus
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
                <h2>MySQL Course <br><span>Breakdown</span></h2>
                <div class="course-breakdown-main-card">
                    <div class="row">
                        <div class="col-12 col-md-6 col-lg-3">
                            <div class="courses-breakdown-card">
                                <h3>100%</h3>
                                <p>Hands-on Training</p>
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
                        <!-- <a href="#" class="course-syllabus-btn"><span>Download</span> | MySQL Course Syllabus</a> -->
                        <button type="button" class="course-syllabus-btn"  data-bs-toggle="modal" data-bs-target="#centeredModal">
                            <span>Download</span> | MySQL Course Syllabus
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
                                MYSQL Concepts
                                </button>
                                </h2>
                                <div id="collapseOne" class="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                                    <div class="accordion-body courses-syllabus-body">
                                        <ul>
                                            <li>Introduction</li>
                                            <li>Types of database systems</li>
                                            <li>Entity and Relationship</li>
                                            <li>Sql basics</li>
                                            <li>Primary key</li>
                                            <li>Foreign key</li>
                                            <li>DDL statements</li>
                                            <li>Normalization</li>
                                            <li>DML statements</li>
                                            <li>Sorting Data</li>
                                            <li>Group by</li>
                                            <li>Having</li>
                                            <li>Exists</li>
                                            <li>Any</li>
                                            <li>All</li>
                                            <li>Null functions</li>
                                            <li>Aliases</li>
                                            <li>Wildcards</li>
                                            <li>Concat function</li>
                                            <li>Concat function</li>
                                            <li>count function</li>
                                            <li>Avg function</li>
                                            <li>Sum function</li>
                                            <li>Like</li>
                                            <li>Where</li>
                                            <li>And or not</li>
                                            <li>Max function</li>
                                            <li>In</li>
                                            <li>Case expression</li>
                                            <li>Order by</li>
                                            <li>Joins</li>
                                            <li>Types of joins</li>
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
                        What is MySQL, and why should I learn it?
                        </button>
                        </h2>
                        <div id="courseFaqOne" class="accordion-collapse collapse show" data-bs-parent="#courseFaqsAccordion">
                            <div class="accordion-body course-faqs-body">
                                <p>MySQL is a widely-used open-source relational database management system (RDBMS). Learning MySQL is essential for managing and interacting with databases, which is a critical skill in web development, data analysis, and various IT fields.</p>
                            </div>
                        </div>
                    </div>
                    <!-- two -->
                    <div class="accordion-item course-faqs-item">
                        <h2 class="accordion-header course-faqs-header">
                        <button class="accordion-button collapsed course-faqs-button" type="button" data-bs-toggle="collapse" data-bs-target="#courseFaqTwo" aria-expanded="false" aria-controls="courseFaqTwo">
                        Do I need prior database knowledge to take this course?
                        </button>
                        </h2>
                        <div id="courseFaqTwo" class="accordion-collapse collapse" data-bs-parent="#courseFaqsAccordion">
                        <div class="accordion-body course-faqs-body">
                            <p>Prior database knowledge is helpful but not mandatory. This course is designed for beginners and will cover fundamental concepts before progressing to more advanced topics.</p>
                        </div>
                        </div>
                    </div>
                    <!-- three -->
                    <div class="accordion-item course-faqs-item">
                        <h2 class="accordion-header course-faqs-header">
                        <button class="accordion-button collapsed course-faqs-button" type="button" data-bs-toggle="collapse" data-bs-target="#courseFaqThree" aria-expanded="false" aria-controls="courseFaqThree">
                        What will I learn in a MySQL course?
                        </button>
                        </h2>
                        <div id="courseFaqThree" class="accordion-collapse collapse" data-bs-parent="#courseFaqsAccordion">
                        <div class="accordion-body course-faqs-body">
                            <p>You will learn about relational database concepts, SQL (Structured Query Language), database design, data manipulation, querying databases, indexing, and advanced features like stored procedures, triggers, and views.</p>
                        </div>
                        </div>
                    </div>
                    <!-- four -->
                    <div class="accordion-item course-faqs-item">
                        <h2 class="accordion-header course-faqs-header">
                        <button class="accordion-button collapsed course-faqs-button" type="button" data-bs-toggle="collapse" data-bs-target="#courseFaqFour" aria-expanded="false" aria-controls="courseFaqFour">
                        How long does it take to become proficient in MySQL?
                        </button>
                        </h2>
                        <div id="courseFaqFour" class="accordion-collapse collapse" data-bs-parent="#courseFaqsAccordion">
                        <div class="accordion-body course-faqs-body">
                            <p>The time to become proficient varies based on your learning pace and dedication. Generally, it can take a few weeks to a few months of consistent practice and learning to master the essential skills needed for MySQL.</p>
                        </div>
                        </div>
                    </div>
                    <!-- five -->
                     <div class="accordion-item course-faqs-item">
                        <h2 class="accordion-header course-faqs-header">
                        <button class="accordion-button collapsed course-faqs-button" type="button" data-bs-toggle="collapse" data-bs-target="#courseFaqFive" aria-expanded="false" aria-controls="courseFaqFive">
                        What career opportunities are available for those skilled in MySQL?
                        </button>
                        </h2>
                        <div id="courseFaqFive" class="accordion-collapse collapse" data-bs-parent="#courseFaqsAccordion">
                        <div class="accordion-body course-faqs-body">
                            <p>Career opportunities include roles such as Database Administrator (DBA), Data Analyst, Backend Developer, Data Engineer, and Fullstack Developer. MySQL skills are in high demand across various industries, including tech, finance, healthcare, and e-commerce.</p>
                        </div>
                        </div>
                    </div>
                    <!-- six -->
                    <div class="accordion-item course-faqs-item">
                        <h2 class="accordion-header course-faqs-header">
                        <button class="accordion-button collapsed course-faqs-button" type="button" data-bs-toggle="collapse" data-bs-target="#courseFaqSix" aria-expanded="false" aria-controls="courseFaqSix">
                        Will I receive a certification upon completing the MySQL course?
                        </button>
                        </h2>
                        <div id="courseFaqSix" class="accordion-collapse collapse" data-bs-parent="#courseFaqsAccordion">
                        <div class="accordion-body course-faqs-body">
                            <p>Many MySQL courses offer a certification upon successful completion. This certification can validate your skills and knowledge, enhancing your resume and increasing your employability in the job market.</p>
                        </div>
                        </div>
                    </div>
                    <!-- seven -->
                    <div class="accordion-item course-faqs-item">
                        <h2 class="accordion-header course-faqs-header">
                        <button class="accordion-button collapsed course-faqs-button" type="button" data-bs-toggle="collapse" data-bs-target="#courseFaqSeven" aria-expanded="false" aria-controls="courseFaqSeven">
                        How is MySQL different from other database management systems?
                        </button>
                        </h2>
                        <div id="courseFaqSeven" class="accordion-collapse collapse" data-bs-parent="#courseFaqsAccordion">
                        <div class="accordion-body course-faqs-body">
                            <p>MySQL is known for its performance, reliability, and ease of use. Compared to other database systems like PostgreSQL, Oracle, or SQL Server, MySQL is often favored for web applications and is widely supported by web hosting services.</p>
                        </div>
                        </div>
                    </div>
                    <!-- eight -->
                    <div class="accordion-item course-faqs-item">
                        <h2 class="accordion-header course-faqs-header">
                        <button class="accordion-button collapsed course-faqs-button" type="button" data-bs-toggle="collapse" data-bs-target="#courseFaqEight" aria-expanded="false" aria-controls="courseFaqEight">
                        Can I work on real-world projects during this course?
                        </button>
                        </h2>
                        <div id="courseFaqEight" class="accordion-collapse collapse" data-bs-parent="#courseFaqsAccordion">
                        <div class="accordion-body course-faqs-body">
                            <p>Yes, this course includes practical projects where you will work on real-world scenarios. These projects help you apply the concepts learned, gain hands-on experience, and build a portfolio to showcase your skills to potential employers.</p>
                        </div>
                        </div>
                    </div>
                    <!-- nine -->
                    <div class="accordion-item course-faqs-item">
                        <h2 class="accordion-header course-faqs-header">
                        <button class="accordion-button collapsed course-faqs-button" type="button" data-bs-toggle="collapse" data-bs-target="#courseFaqNine" aria-expanded="false" aria-controls="courseFaqNine">
                        What is the importance of learning MySQL for modern web development?
                        </button>
                        </h2>
                        <div id="courseFaqNine" class="accordion-collapse collapse" data-bs-parent="#courseFaqsAccordion">
                        <div class="accordion-body course-faqs-body">
                            <p>Learning MySQL is important for modern web development because it is a foundational skill for managing and querying databases. Many web applications rely on MySQL for storing and retrieving data efficiently.</p>
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

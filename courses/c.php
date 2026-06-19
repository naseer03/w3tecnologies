<?php $course="c language" ;
$course_file ="c";
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <!-- header-links -->
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <?php include "../includes/header-links.php" ?>

    <link rel="stylesheet" href="../styles/courses/course-stack.css">
    <meta name="description" content="Discover the C language, a fundamental skill for programmers. Learn its concepts, syntax, & practical applications in system, application, & embedded development">
     <title>C Programming Courses & Certifications with W3 Technologies</title>
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
                    <img src="../assets/courses/c/variables.svg" alt="variables">
                    <img src="../assets/courses/c/operators.svg" alt="operators">
                    <div class="course-banner-heading-main">
                        <h1>C</h1>
                         <div class="course-banner-sub">
                            <span>Programming</span>
                            <span>language</span>
                        </div>
                    </div>
                    <img src="../assets/courses/c/functions.svg" alt="functions">
                    <img src="../assets/courses/c/pointers.svg" alt="pointers">
                </div>
            </div>
        </div>

        <!-- ================================== -->
         <!-- About c language -->
        <!-- ================================== -->
         <!-- Scrollable modal -->
         <section class="about-course-sec-main">
            <div class="container">
                <div class="row">
                    <div class="col-12">
                        <h2><span>About</span> C language</h2>
                        <p>The term <span>C language is </span>The a high-level, general-purpose programming language. It provides a straightforward, consistent, powerful interface for programming systems. That's why the C language is widely used for developing system software, application software, and embedded systems</p>
                    </div>
                </div>
                  <!-- Button to trigger modal -->
                        <button type="button" class="model-blk-btn"  data-bs-toggle="modal" data-bs-target="#centeredModal">
                           <span>Download</span> | C Language Syllabus
                        </button>      
            </div>
         </section>

         <!-- ================================ -->
          <!-- ========course-includes======== -->
        <section class="course-includes">
            <div class="container">
                <div class="head">
                    <h2><span>What </span> this Course includes ?</h2>
                </div>
                <div class="cards-part">
                    <div class="row align-items-center justify-content-center">

                        <div class="col-12 col-lg-4 ">
                            <div class="card m-3 " >
                                <div class="d-flex flex-column align-items-center gap-3">

                                    <img src="../assets/course-includes/technology-training.svg" class="img-fluid" alt="technology-training">
                                    <h5 class="card-title">Technology Training</h5>
                                </div>
                            </div>
                        </div>    

                        <div class="col-12 col-lg-4">
                            <div class="card m-3 " >
                                <div class="d-flex flex-column align-items-center gap-3">

                                    <img src="../assets/course-includes/practice-assignments.svg" class="img-fluid" alt="practice-assignments">
                                    <h5 class="card-title">Practice Assignments</h5>
                                </div>
                            </div>
                        </div>    

                        <div class="col-12 col-lg-4">
                            <div class="card m-3 " >
                                <div class="d-flex flex-column align-items-center gap-3">

                                    <img src="../assets/course-includes/doubt-solving.svg" class="img-fluid" alt="doubt-solving">
                                    <h5 class="card-title">1:1 Doubt solving</h5>
                                </div>
                            </div>
                        </div>    

                        <div class="col-12 col-lg-4">
                            <div class="card m-3 " >
                                <div class="d-flex flex-column align-items-center gap-3">

                                    <img src="../assets/course-includes/lern-to-crack.svg" class="img-fluid" alt="learn -to-crack-interviews">
                                    <h5 class="card-title">Learn to Crack Interviews</h5>
                                </div>
                            </div>
                        </div>    

                        <div class="col-12 col-lg-4">
                            <div class="card m-3 " >
                                <div class="d-flex flex-column align-items-center gap-3">
                                    <img src="../assets/course-includes/mock-interviews.svg" class="img-fluid" alt="Mock-interviews">
                                    <h5 class="card-title">Panel Mock Interview</h5>
                                </div>
                            </div>
                        </div>
                            
                    </div>
                </div>  
            </div>    
        </section>
           <?php include '../includes/course-from-sec.php' ?>
        <!-- ================================== -->
        <!--c language course-breakdown-->
        <!-- ================================== -->
        <section class="course-breakdown-main-sec">
            <div class="container">
                <h2>C Language Course <br><span>Breakdown</span></h2>
                <div class="course-breakdown-main-card">
                    <div class="row">
                        <div class="col-12 col-md-6 col-lg-4">
                            <div class="courses-breakdown-card">
                                <h3>100%</h3>
                                <p>Hands-on  Training</p>
                            </div>
                        </div>
                        <div class="col-12 col-md-6 col-lg-4">
                            <div class="courses-breakdown-card courses-breakdown-even-card">
                                <h3>70-100</h3>
                                <p>Practical Assignments</p>
                            </div>
                        </div>
                        <div class="col-12 col-md-6 col-lg-4">
                            <div class="courses-breakdown-card">
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
                        <p><span>2 Hours</span> Practice Time</p>
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
                            <span>Download</span> | C Language Course Syllabus
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
                                Introduction and First Program
                                </button>
                                </h2>
                                <div id="collapseOne" class="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                                    <div class="accordion-body courses-syllabus-body">
                                        <ul>
                                            <li>Why Programming</li>
                                            <li>History of C Language </li>
                                            <li>Hello World Program</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div class="accordion-item course-details-accordion-main">
                                <span class="accordion-count">2</span>
                                <h2 class="accordion-header">
                                <button class="accordion-button collapsed course-details-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                Variables and Data types
                                </button>
                                </h2>
                                <div id="collapseTwo" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                    <div class="accordion-body courses-syllabus-body">
                                        <ul>
                                            <li>Identifiers in C </li>
                                            <li>Variables and DataTypes</li>
                                            <li>Constants</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div class="accordion-item course-details-accordion-main">
                                <span class="accordion-count">3</span>
                                <h2 class="accordion-header">
                                <button class="accordion-button collapsed course-details-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                Console IO Operations

                                </button>
                                </h2>
                                <div id="collapseThree" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                    <div class="accordion-body courses-syllabus-body">
                                        <ul>
                                            <li>Printf and Scanf </li>
                                            <li>Unformatted IO Functions</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div class="accordion-item course-details-accordion-main">
                                <span class="accordion-count">4</span>
                                <h2 class="accordion-header">
                                <button class="accordion-button collapsed course-details-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                                Operators and Expression </button>
                                </h2>
                                <div id="collapseFour" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                    <div class="accordion-body courses-syllabus-body">
                                        <ul>
                                            <li>Expressions and Arithmetic Operators </li>
                                            <li>Relational and Logical Operators </li>
                                            <li>Bitwise Operators</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            <div class="accordion-item course-details-accordion-main">
                                <span class="accordion-count">5</span>
                                <h2 class="accordion-header"> <button class="accordion-button collapsed course-details-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
                                Control Flow Statements </button> </h2>
                                <div id="collapseFive" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                    <div class="accordion-body courses-syllabus-body">
                                        <ul>
                                            <li>If Statement</li>
                                            <li>Switch Statement </li>
                                            <li>Unconditional Branching using goto statement </li>
                                            <li>While Loop </li>
                                            <li>Do While Loop </li>
                                            <li>For Loop</li>
                                            <li>Break and Continue </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div class="accordion-item course-details-accordion-main">
                                <span class="accordion-count">6</span>
                                <h2 class="accordion-header"> <button class="accordion-button collapsed course-details-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSix" aria-expanded="false" aria-controls="collapseSix">
                                Working with Functions </button> </h2>
                                <div id="collapseSix" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                    <div class="accordion-body courses-syllabus-body">
                                        <ul>
                                            <li>Introduction and Writing Functions</li>
                                            <li>Scope of Variables,Storage Classes,Pass by Value and reference </li>
                                            <li>Recursion</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div class="accordion-item course-details-accordion-main">
                                <span class="accordion-count">7</span>
                                <h2 class="accordion-header"> <button class="accordion-button collapsed course-details-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSeven" aria-expanded="false" aria-controls="collapseSeven">
                                Working with Arrays </button> </h2>
                                <div id="collapseSeven" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                    <div class="accordion-body courses-syllabus-body">
                                        <ul>
                                            <li>Arrays Declaration and Initialization </li>
                                            <li>Sample Programs using Arrays</li>
                                            <li>Arrays as Function Parameters </li>
                                            <li>2-Dimensional Array</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div class="accordion-item course-details-accordion-main">
                                <span class="accordion-count">8</span>
                                <h2 class="accordion-header"> <button class="accordion-button collapsed course-details-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseEight" aria-expanded="false" aria-controls="collapseEight">
                                Pointers  </button> </h2>
                                <div id="collapseEight" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                    <div class="accordion-body courses-syllabus-body">
                                        <ul>
                                            <li>Introduction to Pointers</li>
                                            <li>Pointers as Function Parameter</li>
                                            <li>Pointers and Arrays  </li>
                                            <li>Function Pointers </li>
                                            <li>Dynamic Memory Allocation using malloc </li>
                                            <li>calloc and comparision with malloc</li>
                                            
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div class="accordion-item course-details-accordion-main">
                                <span class="accordion-count">9</span>
                                <h2 class="accordion-header"> <button class="accordion-button collapsed course-details-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseNine" aria-expanded="false" aria-controls="collapseNine">
                                String Handling  </button> </h2>
                                <div id="collapseNine" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                    <div class="accordion-body courses-syllabus-body">
                                        <ul>
                                            <li>Introduction to Strings </li>
                                            <li>Sample Program </li>
                                            <li>More Sample Programs  </li>
                                            <li>Standard String Library Functions </li>
                                            <li>Array of Strings</li>
                                        
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div class="accordion-item course-details-accordion-main">
                                <span class="accordion-count">10</span>
                                <h2 class="accordion-header"> <button class="accordion-button collapsed course-details-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTen" aria-expanded="false" aria-controls="collapseTen">
                                Structures and Unions </button> </h2>
                                <div id="collapseTen" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                    <div class="accordion-body courses-syllabus-body">
                                        <ul>
                                            <li>Declaring and Instantiating Structures</li>
                                            <li>Structure as Parameter and Pointer to Structure</li>
                                            <li>Enumerated Data Type</li>
                                            <li>Union  </li>
                                            <li>Bit Fields </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            <div class="accordion-item course-details-accordion-main">
                                <span class="accordion-count">11</span>
                                <h2 class="accordion-header"> <button class="accordion-button collapsed course-details-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseEleven" aria-expanded="false" aria-controls="collapseEleven">
                                File Handling  </button> </h2>
                                <div id="collapseEleven" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                    <div class="accordion-body courses-syllabus-body">
                                        <ul>
                                            <li>What is a Stream </li>
                                            <li>File Handling-Writing and Reading Characters </li>
                                            <li>Writing and Reading Structure in Text Format </li>
                                            <li>Writing and Reading in Binary Format</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div class="accordion-item course-details-accordion-main">
                                <span class="accordion-count">12</span>
                                <h2 class="accordion-header"> <button class="accordion-button collapsed course-details-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwelve" aria-expanded="false" aria-controls="collapseTwelve">
                                Pre-Processor Directives  </button> </h2>
                                <div id="collapseTwelve" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                    <div class="accordion-body courses-syllabus-body">
                                        <ul>
                                            <li>Understanding Pre-Processor directives </li>
                                            <li>Header Files and Project</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div class="accordion-item course-details-accordion-main">
                                <span class="accordion-count">13</span>
                                <h2 class="accordion-header"> <button class="accordion-button collapsed course-details-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThirteen" aria-expanded="false" aria-controls="collapseThirteen">
                                Command Line Arguments and Variable Arguments </button> </h2>
                                <div id="collapseThirteen" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                    <div class="accordion-body courses-syllabus-body">
                                        <ul>
                                            <li>Command Line Argument </li>
                                            <li>Variable Number of Arguments</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div class="accordion-item course-details-accordion-main">
                                <span class="accordion-count">14</span>
                                <h2 class="accordion-header"> <button class="accordion-button collapsed course-details-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseForteen" aria-expanded="false" aria-controls="collapseForteen">
                                Searching and Sorting </button> </h2>
                                <div id="collapseForteen" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                    <div class="accordion-body courses-syllabus-body">
                                        <ul>
                                            <li>Linear Search </li>
                                            <li>Iterative Binary Search </li>
                                            <li>Bubble Sort </li>
                                            <li>Selection Sort </li>
                                            <li>Insertion Sort </li>
                                            <li>Quick Sort </li>
                                            <li>Merge Sort</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            
                            <div class="accordion-item course-details-accordion-main">
                                <span class="accordion-count">15</span>
                                <h2 class="accordion-header"> <button class="accordion-button collapsed course-details-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFifteen" aria-expanded="false" aria-controls="collapseFifteen">
                                Linked List </button> </h2>
                                <div id="collapseFifteen" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                    <div class="accordion-body courses-syllabus-body">
                                        <ul>
                                            <li>Introduction to Linked List </li>
                                            <li>Single Linked List  </li>
                                            <li>Double Linked List </li>
                                            <li>Circular Linked List</li>
                                            
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div class="accordion-item course-details-accordion-main">
                                <span class="accordion-count">16</span>
                                <h2 class="accordion-header"> <button class="accordion-button collapsed course-details-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSixteen" aria-expanded="false" aria-controls="collapseSixteen">
                                Stack  </button> </h2>
                                <div id="collapseSixteen" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                    <div class="accordion-body courses-syllabus-body">
                                        <ul>
                                            <li>Introduction to Stack</li>
                                            <li>Stack Using Arrays  </li>
                                            <li>Stack Using Linked List </li>
                                            <li>Infix to Postfix Expressions </li>
                                        
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div class="accordion-item course-details-accordion-main">
                                <span class="accordion-count">17</span>
                                <h2 class="accordion-header"> <button class="accordion-button collapsed course-details-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSeventeen" aria-expanded="false" aria-controls="collapseSeventeen">
                                Queue </button> </h2>
                                <div id="collapseSeventeen" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                    <div class="accordion-body courses-syllabus-body">
                                        <ul>
                                            <li>Queue Using Arrays</li>
                                            <li>Queue Using Linked List </li>
                                            
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div class="accordion-item course-details-accordion-main">
                                <span class="accordion-count">18</span>
                                <h2 class="accordion-header"> <button class="accordion-button collapsed course-details-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseEighteen" aria-expanded="false" aria-controls="collapseEighteen">
                                Trees </button> </h2>
                                <div id="collapseEighteen" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                    <div class="accordion-body courses-syllabus-body">
                                        <ul>
                                            <li>Introduction to Trees </li>
                                            <li>Programming Tree - 1 </li>
                                            <li>Programming Tree - 2 </li>
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
                        Is C language the best to start my programming career?
                        </button>
                        </h2>
                        <div id="courseFaqOne" class="accordion-collapse collapse show" data-bs-parent="#courseFaqsAccordion">
                            <div class="accordion-body course-faqs-body">
                                <p>C language is an excellent choice for starting your programming career because it helps you understand the fundamentals of programming and computer science concepts. It is widely used in systems programming, developing operating systems, and embedded systems. Learning C also makes it easier to learn other languages like C++, Java, and Python.</p>
                            </div>
                        </div>
                    </div>
                    <!-- two -->
                    <div class="accordion-item course-faqs-item">
                        <h2 class="accordion-header course-faqs-header">
                        <button class="accordion-button collapsed course-faqs-button" type="button" data-bs-toggle="collapse" data-bs-target="#courseFaqTwo" aria-expanded="false" aria-controls="courseFaqTwo">
                        Where is C language used?
                        </button>
                        </h2>
                        <div id="courseFaqTwo" class="accordion-collapse collapse" data-bs-parent="#courseFaqsAccordion">
                        <div class="accordion-body course-faqs-body">
                            <p>C language is used in various domains including operating systems (e.g., Linux, Windows), embedded systems (e.g., microcontrollers, IoT devices), system software, game development, and real-time systems. It is known for its performance and efficiency.</p>
                        </div>
                        </div>
                    </div>
                    <!-- three -->
                    <div class="accordion-item course-faqs-item">
                        <h2 class="accordion-header course-faqs-header">
                        <button class="accordion-button collapsed course-faqs-button" type="button" data-bs-toggle="collapse" data-bs-target="#courseFaqThree" aria-expanded="false" aria-controls="courseFaqThree">
                        What are the advantages of learning C language?
                        </button>
                        </h2>
                        <div id="courseFaqThree" class="accordion-collapse collapse" data-bs-parent="#courseFaqsAccordion">
                        <div class="accordion-body course-faqs-body">
                            <p>The advantages of learning C language include a strong understanding of low-level programming, efficient memory management, portability, performance, and a foundation for learning other programming languages. C is also widely used in academic and industry settings, making it a valuable skill.</p>
                        </div>
                        </div>
                    </div>
                    <!-- four -->
                    <div class="accordion-item course-faqs-item">
                        <h2 class="accordion-header course-faqs-header">
                        <button class="accordion-button collapsed course-faqs-button" type="button" data-bs-toggle="collapse" data-bs-target="#courseFaqFour" aria-expanded="false" aria-controls="courseFaqFour">
                        How does C language differ from C++?
                        </button>
                        </h2>
                        <div id="courseFaqFour" class="accordion-collapse collapse" data-bs-parent="#courseFaqsAccordion">
                        <div class="accordion-body course-faqs-body">
                            <p>C is a procedural programming language focused on function-based programming, while C++ is an extension of C that includes object-oriented programming features. C++ supports classes and objects, making it more suitable for complex applications and software development.</p>
                        </div>
                        </div>
                    </div>
                    <!-- five -->
                     <div class="accordion-item course-faqs-item">
                        <h2 class="accordion-header course-faqs-header">
                        <button class="accordion-button collapsed course-faqs-button" type="button" data-bs-toggle="collapse" data-bs-target="#courseFaqFive" aria-expanded="false" aria-controls="courseFaqFive">
                        Can I build web applications using C language?
                        </button>
                        </h2>
                        <div id="courseFaqFive" class="accordion-collapse collapse" data-bs-parent="#courseFaqsAccordion">
                        <div class="accordion-body course-faqs-body">
                            <p>While C is not commonly used for web application development, it is possible to build web applications using C by leveraging CGI (Common Gateway Interface) scripts. However, other languages like JavaScript, Python, PHP, and Java are more commonly used for web development due to their higher-level abstractions and ease of use.
                            </p>
                        </div>
                        </div>
                    </div>
                    <!-- six -->
                    <div class="accordion-item course-faqs-item">
                        <h2 class="accordion-header course-faqs-header">
                        <button class="accordion-button collapsed course-faqs-button" type="button" data-bs-toggle="collapse" data-bs-target="#courseFaqSix" aria-expanded="false" aria-controls="courseFaqSix">
                        Is C language still relevant in today's technology landscape?
                        </button>
                        </h2>
                        <div id="courseFaqSix" class="accordion-collapse collapse" data-bs-parent="#courseFaqsAccordion">
                        <div class="accordion-body course-faqs-body">
                            <p>Yes, C language is still highly relevant and widely used in various fields. It forms the backbone of many critical systems, including operating systems, embedded systems, and high-performance applications. Learning C can provide a strong foundation for understanding modern computing.</p>
                        </div>
                        </div>
                    </div>
                    <!-- seven -->
                    <div class="accordion-item course-faqs-item">
                        <h2 class="accordion-header course-faqs-header">
                        <button class="accordion-button collapsed course-faqs-button" type="button" data-bs-toggle="collapse" data-bs-target="#courseFaqSeven" aria-expanded="false" aria-controls="courseFaqSeven">
                        What is the difference between C and Python?
                        </button>
                        </h2>
                        <div id="courseFaqSeven" class="accordion-collapse collapse" data-bs-parent="#courseFaqsAccordion">
                        <div class="accordion-body course-faqs-body">
                            <p>C is a lower-level language that offers fine-grained control over hardware and memory management, making it ideal for system-level programming. Python is a high-level, interpreted language known for its simplicity, readability, and ease of use, making it popular for web development, data science, and automation. Both languages have their own strengths and are used in different contexts.</p>
                        </div>
                        </div>
                    </div>
                    <!-- eight -->
                    <div class="accordion-item course-faqs-item">
                        <h2 class="accordion-header course-faqs-header">
                        <button class="accordion-button collapsed course-faqs-button" type="button" data-bs-toggle="collapse" data-bs-target="#courseFaqEight" aria-expanded="false" aria-controls="courseFaqEight">
                        How long does it take to learn C language?
                        </button>
                        </h2>
                        <div id="courseFaqEight" class="accordion-collapse collapse" data-bs-parent="#courseFaqsAccordion">
                        <div class="accordion-body course-faqs-body">
                            <p>The time required to learn C language varies depending on your prior programming experience and dedication. For beginners, it may take a few months to become proficient in C programming. Regular practice and working on projects can accelerate the learning process.</p>
                        </div>
                        </div>
                    </div>
                    <!-- nine -->
                    <div class="accordion-item course-faqs-item">
                        <h2 class="accordion-header course-faqs-header">
                        <button class="accordion-button collapsed course-faqs-button" type="button" data-bs-toggle="collapse" data-bs-target="#courseFaqNine" aria-expanded="false" aria-controls="courseFaqNine">
                        Can I use C language for mobile app development?
                        </button>
                        </h2>
                        <div id="courseFaqNine" class="accordion-collapse collapse" data-bs-parent="#courseFaqsAccordion">
                            <div class="accordion-body course-faqs-body">
                                <p>While C is not commonly used for mobile app development, it can be used for developing performance-critical components of mobile applications, especially on platforms like Android through the Android NDK (Native Development Kit). However, languages like Java, Swift, and Kotlin are more commonly used for mobile app development. </p>
                            </div>
                        </div>
                    </div>
                    <!-- ten -->
                    <div class="accordion-item course-faqs-item">
                        <h2 class="accordion-header course-faqs-header">
                        <button class="accordion-button collapsed course-faqs-button" type="button" data-bs-toggle="collapse" data-bs-target="#courseFaqTen" aria-expanded="false" aria-controls="courseFaqTen">
                        What are some popular C language frameworks or libraries?
                        </button>
                        </h2>
                        <div id="courseFaqTen" class="accordion-collapse collapse" data-bs-parent="#courseFaqsAccordion">
                            <div class="accordion-body course-faqs-body">
                                <p>Some popular C language libraries and frameworks include the Standard Library (libc), POSIX libraries for system programming, OpenGL for graphics programming, GTK and Qt for GUI development, and various embedded systems libraries. These tools extend the functionality of C and facilitate the development of diverse applications. </p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>

    </main>


        <!-- -- footer -->
        <?php include "../includes/footer.php";?>
        <!-- --footer-inks-- -->
        <?php
          include '../includes/footer-links.php'
          ?>

        <script src="../js/courses.js"></script>
</body>
</html>

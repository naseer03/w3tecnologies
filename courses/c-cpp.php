<?php $course="c and c++ languages" ;
$course_file ="c-cpp";
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <!-- header-links -->
     <?php include "../includes/header-links.php" ?>
    <link rel="stylesheet" href="../styles/courses/course-stack.css">
    <title>C-cpp language</title>
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
                    <img src="../assets/courses/c/functions.svg" alt="functions">
                    <img src="../assets/courses/c/operators.svg" alt="operators">
                    <div class="course-banner-heading-main">
                        <h1>C & C++</h1>
                         <!-- <div class="course-banner-sub">
                            <span>Programming</span>
                            <span>languages</span>
                        </div> -->
                    </div>
                    <img src="../assets/courses/cpp/data-types.svg" alt="datatypes">
                    <img src="../assets/courses/cpp/opps.svg" alt="oops">
                </div>
            </div>
        </div>

        <!-- ================================== -->
         <!-- About c and c++ languages -->
        <!-- ================================== -->
         <!-- Scrollable modal -->
         <section class="about-course-sec-main">
            <div class="container">
                <div class="row">
                    <div class="col-12">
                        <h2><span>About</span> C and C++ Programming languages</h2>
                        <p>The C language is a procedural one that provides no support for objects and classes. On the other hand, the C++ language is a combination of object-oriented and procedural programming languages. </p>
                        <div class="similarities">
                           <h3>Similarities between C and C++ </h3>
                           <ul>
                            <li>Both the languages have a similar syntax</li>
                            <li>Code structure of both the languages are same.</li>
                            <li>The compilation of both the languages is similar</li>
                            <li>They share the same basic syntax. Nearly all of C’s operators and keywords are also present in C++ and do the same thing. </li>
                            <li>C++ has a slightly extended grammar than C, but the basic grammar is the same</li>
                            <li>Basic memory model of both is very close to the hardware</li>
                            <li>Same notions of stack, heap, file-scope and static variables are present in both the languages.</li>
                           </ul>
                        </div>
                    </div>
                </div>
                  <!-- Button to trigger modal -->
                        <button type="button" class="model-blk-btn"  data-bs-toggle="modal" data-bs-target="#centeredModal">
                           <span>Download</span> | C and C++ Course Syllabus
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
                            <img src="../assets/course-includes/practice-assignments.svg" class="img-fluid" alt="pratice-assignments">
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
                <h2>C and C++ Languages Course <br><span>Breakdown</span></h2>
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
                            <span>Download</span> | C and C++ Course Syllabus
                        </button>
                    </div>
                </div>
                <div class="row mt-3">
                    <div class="col-12">
                        <!-- ====== c language===== -->
                        <h2 class="mb-0">C Language</h2>
                        <div class="accordion course-syllabus-accordion mt-2" id="accordionExample">
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
                          <!-- ======== c++ language -->

                <div class="row">
                    <div class="col-12">
                    <h2 class="mb-0">C++ Language</h2>
                        <div class="accordion course-syllabus-accordion mt-0" id="accordionExample">
                            <div class="accordion-item course-details-accordion-main">
                                <span class="accordion-count">1</span>
                                <h2 class="accordion-header">
                                <button class="accordion-button course-details-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne2" aria-expanded="true" aria-controls="collapseOne2">
                                Introduction C++
                                </button>
                                </h2>
                                <div id="collapseOne2" class="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                                    <div class="accordion-body courses-syllabus-body">
                                        <ul>
                                            <li>History, Features </li>
                                            <li>Rules of C++ programming  </li>
                                            <li>Structure of C++ program </li>
                                            <li>C++ Tokens </li>
                                            <li>Identifiers, Keywords, Constants, Operators, Special characters</li>
                                            <li>C++ Data types </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div class="accordion-item course-details-accordion-main">
                                <span class="accordion-count">2</span>
                                <h2 class="accordion-header">
                                <button class="accordion-button collapsed course-details-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo2" aria-expanded="false" aria-controls="collapseTwo2">
                                Basic programming
                                </button>
                                </h2>
                                <div id="collapseTwo2" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                    <div class="accordion-body courses-syllabus-body">
                                        <ul>
                                            <li>Console I/O Statements(cin, cout) </li>
                                            <li>Programs to perform various calculations </li>
                                            <li>Operators</li>
                                            <li>Programs to implement various operators </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div class="accordion-item course-details-accordion-main">
                                <span class="accordion-count">3</span>
                                <h2 class="accordion-header">
                                <button class="accordion-button collapsed course-details-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree2" aria-expanded="false" aria-controls="collapseThree2">
                                Control statements

                                </button>
                                </h2>
                                <div id="collapseThree2" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                    <div class="accordion-body courses-syllabus-body">
                                        <ul>
                                            <li>Conditional Control Statements </li>
                                            <li>If-else , switch-case </li>
                                            <li>Loops </li>
                                            <li>While, do while, for </li>
                                            <li>Implementing programs on conditional & loops </li>
                                            <li>break, continue, goto keywords</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div class="accordion-item course-details-accordion-main">
                                <span class="accordion-count">4</span>
                                <h2 class="accordion-header">
                                <button class="accordion-button collapsed course-details-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour2" aria-expanded="false" aria-controls="collapseFour2">
                                Arrays </button>
                                </h2>
                                <div id="collapseFour2" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                    <div class="accordion-body courses-syllabus-body">
                                        <ul>
                                            <li>Definition, advantages </li>
                                            <li>Array types </li>
                                            <li>Single dimension </li>
                                            <li>Double dimension </li>
                                            <li>Declaration, accessing array data </li>
                                            <li>Implementation of array operations</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            <div class="accordion-item course-details-accordion-main">
                                <span class="accordion-count">5</span>
                                <h2 class="accordion-header"> <button class="accordion-button collapsed course-details-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive2" aria-expanded="false" aria-controls="collapseFive2">
                                Functions</button> </h2>
                                <div id="collapseFive2" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                    <div class="accordion-body courses-syllabus-body">
                                        <ul>
                                            <li>Definition, advantages, types of functions, classification </li>
                                            <li>Implementing various kinds of functions </li>
                                            <li>Unconditional Branching using goto statement </li>
                                            <li>Inline functions </li>
                                          
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div class="accordion-item course-details-accordion-main">
                                <span class="accordion-count">6</span>
                                <h2 class="accordion-header"> <button class="accordion-button collapsed course-details-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSix2" aria-expanded="false" aria-controls="collapseSix2">
                                Object Oriented Programming </button> </h2>
                                <div id="collapseSix2" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                    <div class="accordion-body courses-syllabus-body">
                                        <ul>
                                            <li>Defining a Class ,creating Objects </li>
                                            <li>Accessing Data Members using objects </li>
                                            <li>Calling Member Functions using objects </li>
                                            <li>Implementing Array of Objects, objects as parameters & return type, new , this operators </li>
                                            <li>Scope resolution operator </li>
                                            <li>access specifiers(private, public, protected)  </li>
                                            <li>Implementing Static Data Members </li>
                                            <li>Implementing Static Member Functions</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div class="accordion-item course-details-accordion-main">
                                <span class="accordion-count">7</span>
                                <h2 class="accordion-header"> <button class="accordion-button collapsed course-details-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSeven2" aria-expanded="false" aria-controls="collapseSeven2">
                                Function Overloading </button> </h2>
                                <div id="collapseSeven2" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                    <div class="accordion-body courses-syllabus-body">
                                        <ul>
                                            <li>What is function over loading  </li>
                                            <li>About operator keyword, rules of operator overloading </li>
                                            <li>Overloading various operators</li>
                                            
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div class="accordion-item course-details-accordion-main">
                                <span class="accordion-count">8</span>
                                <h2 class="accordion-header"> <button class="accordion-button collapsed course-details-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseEight2" aria-expanded="false" aria-controls="collapseEight2">
                                Constructors & Destructors</button> </h2>
                                <div id="collapseEight2" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                    <div class="accordion-body courses-syllabus-body">
                                        <ul>
                                            <li>Definition, uses </li>
                                            <li>Types (Default Constructor, Parameter Constructor, Copy Constructor) </li>
                                            <li>Destructors </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div class="accordion-item course-details-accordion-main">
                                <span class="accordion-count">9</span>
                                <h2 class="accordion-header"> <button class="accordion-button collapsed course-details-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseNine2" aria-expanded="false" aria-controls="collapseNine2">
                                Friend Function & Friend classes </button> </h2>
                                <div id="collapseNine2" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                    <div class="accordion-body courses-syllabus-body">
                                        <ul>
                                            <li>Friend Function definition, usage of friend keyword </li>
                                            <li>Implementing of friend functions in various scenarios </li>
                                            <li>Friend Class definition, usage  </li>
                                            <li>Standard String Library Functions </li>
                                            <li>Implementing of friend class</li>
                                        
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div class="accordion-item course-details-accordion-main">
                                <span class="accordion-count">10</span>
                                <h2 class="accordion-header"> <button class="accordion-button collapsed course-details-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTen2" aria-expanded="false" aria-controls="collapseTen2">
                                Inheritance </button> </h2>
                                <div id="collapseTen2" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                    <div class="accordion-body courses-syllabus-body">
                                        <ul>
                                            <li>Definition, Advantages </li>
                                            <li>Types of Inheritances (Single, Hierarchical, Multilevel, Multiple Hybrid) </li>
                                            <li>Implementing various kinds of inheritances </li>
                                            <li>Implementing various constructors in inheritance </li>
                                            <li>Implementing function over riding </li>
                                            <li>Implementing various access levels in inheritance</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            <div class="accordion-item course-details-accordion-main">
                                <span class="accordion-count">11</span>
                                <h2 class="accordion-header"> <button class="accordion-button collapsed course-details-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseEleven2" aria-expanded="false" aria-controls="collapseEleven2">
                                Virtual Functions & Abstract Classes </button> </h2>
                                <div id="collapseEleven2" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                    <div class="accordion-body courses-syllabus-body">
                                        <ul>
                                            <li>Definition, requirement, </li>
                                            <li>How to implement </li>
                                            <li>Pure virtual function definition </li>
                                            <li>Implementing abstract classes</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div class="accordion-item course-details-accordion-main">
                                <span class="accordion-count">12</span>
                                <h2 class="accordion-header"> <button class="accordion-button collapsed course-details-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwelve2" aria-expanded="false" aria-controls="collapseTwelve2">
                                Templates </button> </h2>
                                <div id="collapseTwelve2" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                    <div class="accordion-body courses-syllabus-body">
                                        <ul>
                                            <li>Template Definition </li>
                                            <li>Generic Function</li>
                                            <li>Generic Class </li>
                                            <li>Template function Overloading</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div class="accordion-item course-details-accordion-main">
                                <span class="accordion-count">13</span>
                                <h2 class="accordion-header"> <button class="accordion-button collapsed course-details-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThirteen2" aria-expanded="false" aria-controls="collapseThirteen2">
                                  I/O Streams & Files</button> 
                                </h2>
                                <div id="collapseThirteen2" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                    <div class="accordion-body courses-syllabus-body">
                                        <ul>
                                            <li>Streams Hierarchy </li>
                                            <li>Input Streams & Output Streams </li>
                                            <li>What is File? </li>
                                            <li>Implementing various file operations on basic data types(write, read, append and modify) </li>
                                            <li>Implementing various file operations on object data types(write, read, append and modify) </li>
                                            <li>Random Access Files(seekp, seekg, tellp, tellg)</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div class="accordion-item course-details-accordion-main">
                                <span class="accordion-count">14</span>
                                <h2 class="accordion-header"> <button class="accordion-button collapsed course-details-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseForteen2" aria-expanded="false" aria-controls="collapseForteen2">
                                Formatted IO</button> </h2>
                                <div id="collapseForteen2" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                    <div class="accordion-body courses-syllabus-body">
                                        <ul>
                                            <li>IO Flags </li>
                                            <li>IO Functions </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div class="accordion-item course-details-accordion-main">
                                <span class="accordion-count">15</span>
                                <h2 class="accordion-header"> <button class="accordion-button collapsed course-details-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFifteen2" aria-expanded="false" aria-controls="collapseFifteen2">
                                Exception Handling </button> </h2>
                                <div id="collapseFifteen2" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                    <div class="accordion-body courses-syllabus-body">
                                        <ul>
                                            <li>Try, catch, throw </li>
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
                        What are the main benefits of programming in C?
                        </button>
                        </h2>
                        <div id="courseFaqOne" class="accordion-collapse collapse show" data-bs-parent="#courseFaqsAccordion">
                            <div class="accordion-body course-faqs-body">
                                <p>The main benefits of programming in C include its speed, portability, and control over system resources. It also provides a strong foundation for understanding computer architecture and other programming languages.</p>
                            </div>
                            
                        </div>
                    </div>
                    <!-- two -->
                    <div class="accordion-item course-faqs-item">
                        <h2 class="accordion-header course-faqs-header">
                        <button class="accordion-button collapsed course-faqs-button" type="button" data-bs-toggle="collapse" data-bs-target="#courseFaqTwo" aria-expanded="false" aria-controls="courseFaqTwo">
                        How does learning C help in understanding other programming languages?
                        </button>
                        </h2>
                        <div id="courseFaqTwo" class="accordion-collapse collapse" data-bs-parent="#courseFaqsAccordion">
                        <div class="accordion-body course-faqs-body">
                            <p> Learning C helps you understand core programming concepts such as pointers, memory allocation, and data structures, which are crucial for mastering other languages like C++, Java, and Python.</p>
                        </div>
                        </div>
                    </div>
                    <!-- three -->
                    <div class="accordion-item course-faqs-item">
                        <h2 class="accordion-header course-faqs-header">
                        <button class="accordion-button collapsed course-faqs-button" type="button" data-bs-toggle="collapse" data-bs-target="#courseFaqThree" aria-expanded="false" aria-controls="courseFaqThree">
                        How relevant is C in today's tech industry?
                        </button>
                        </h2>
                        <div id="courseFaqThree" class="accordion-collapse collapse" data-bs-parent="#courseFaqsAccordion">
                            <div class="accordion-body course-faqs-body">
                                <p>C remains highly relevant, especially in areas like operating systems, embedded systems, and high-performance applications. Its efficiency and control over hardware make it indispensable for certain applications.</p>
                            </div>
                        </div>
                    </div>
                    <!-- four -->
                    <div class="accordion-item course-faqs-item">
                        <h2 class="accordion-header course-faqs-header">
                        <button class="accordion-button collapsed course-faqs-button" type="button" data-bs-toggle="collapse" data-bs-target="#courseFaqFour" aria-expanded="false" aria-controls="courseFaqFour">
                        How does C compare to Python for beginners?
                        </button>
                        </h2>
                        <div id="courseFaqFour" class="accordion-collapse collapse" data-bs-parent="#courseFaqsAccordion">
                            <div class="accordion-body course-faqs-body">
                                <p>C offers a lower-level understanding of how programs interact with hardware, while Python provides a more straightforward syntax and ease of use. Python is great for rapid development, whereas C is better for learning the fundamentals.</p>
                            </div>
                        </div>
                    </div>
                    <!-- five -->
                     <div class="accordion-item course-faqs-item">
                        <h2 class="accordion-header course-faqs-header">
                        <button class="accordion-button collapsed course-faqs-button" type="button" data-bs-toggle="collapse" data-bs-target="#courseFaqFive" aria-expanded="false" aria-controls="courseFaqFive">
                        Why should I learn C as my first programming language?
                        </button>
                        </h2>
                        <div id="courseFaqFive" class="accordion-collapse collapse" data-bs-parent="#courseFaqsAccordion">
                            <div class="accordion-body course-faqs-body">
                               <p>Learning C as your first programming language helps you grasp fundamental programming concepts and low-level memory management. It's like learning the building blocks of computer science, making it easier to pick up other languages later on. </p>
                            </div>
                        </div>
                    </div>
                    <!-- six -->
                    <div class="accordion-item course-faqs-item">
                        <h2 class="accordion-header course-faqs-header">
                        <button class="accordion-button collapsed course-faqs-button" type="button" data-bs-toggle="collapse" data-bs-target="#courseFaqSix" aria-expanded="false" aria-controls="courseFaqSix">
                        What makes C++ different from other programming languages?
                        </button>
                        </h2>
                        <div id="courseFaqSix" class="accordion-collapse collapse" data-bs-parent="#courseFaqsAccordion">
                            <div class="accordion-body course-faqs-body">
                                <p>C++ combines the features of procedural and object-oriented programming. It offers low-level memory manipulation, a rich standard library, and strong type checking, making it suitable for complex and performance-critical applications.
                                </p>
                            </div>
                        </div>
                    </div>
                    <!-- seven -->
                    <div class="accordion-item course-faqs-item">
                        <h2 class="accordion-header course-faqs-header">
                        <button class="accordion-button collapsed course-faqs-button" type="button" data-bs-toggle="collapse" data-bs-target="#courseFaqSeven" aria-expanded="false" aria-controls="courseFaqSeven">
                        Is C++ still relevant for modern development?
                        </button>
                        </h2>
                        <div id="courseFaqSeven" class="accordion-collapse collapse" data-bs-parent="#courseFaqsAccordion">
                        <div class="accordion-body course-faqs-body">
                            <p> Absolutely! C++ continues to be relevant, especially for applications that require high performance and efficient resource management. The language evolves with new standards that introduce modern features and improvements.
                            </p>
                        </div>
                        </div>
                    </div>
                    <!-- eight -->
                    <div class="accordion-item course-faqs-item">
                        <h2 class="accordion-header course-faqs-header">
                        <button class="accordion-button collapsed course-faqs-button" type="button" data-bs-toggle="collapse" data-bs-target="#courseFaqEight" aria-expanded="false" aria-controls="courseFaqEight">
                        How long does it typically take to learn C++?
                        </button>
                        </h2>
                        <div id="courseFaqEight" class="accordion-collapse collapse" data-bs-parent="#courseFaqsAccordion">
                        <div class="accordion-body course-faqs-body">
                            <p>The time to learn C++ depends on your prior experience and dedication. Beginners might take several months to become proficient, while those with programming experience could learn faster. Regular practice and project development help speed up the process.
                            </p>
                        </div>
                        </div>
                    </div>
                    <!-- nine -->
                    <div class="accordion-item course-faqs-item">
                        <h2 class="accordion-header course-faqs-header">
                        <button class="accordion-button collapsed course-faqs-button" type="button" data-bs-toggle="collapse" data-bs-target="#courseFaqNine" aria-expanded="false" aria-controls="courseFaqNine">
                        Is C++ suitable for game development?                                                                                                                                                           
                        </button>
                        </h2>
                        <div id="courseFaqNine" class="accordion-collapse collapse" data-bs-parent="#courseFaqsAccordion">
                            <div class="accordion-body course-faqs-body">
                                <p>Yes, C++ is highly suitable for game development due to its performance and control over hardware. Many game engines, such as Unreal Engine and Unity, use C++ for their core development, allowing for high-performance and resource-efficient games.</p>
                            </div>
                        </div>
                    </div>
                    <!-- ten -->
                    <div class="accordion-item course-faqs-item">
                        <h2 class="accordion-header course-faqs-header">
                        <button class="accordion-button collapsed course-faqs-button" type="button" data-bs-toggle="collapse" data-bs-target="#courseFaqTen" aria-expanded="false" aria-controls="courseFaqTen">
                        How does C++ differ from C in terms of programming approach?
                        </button>
                        </h2>
                        <div id="courseFaqTen" class="accordion-collapse collapse" data-bs-parent="#courseFaqsAccordion">
                            <div class="accordion-body course-faqs-body">
                                <p>C++ extends C with object-oriented programming features like classes, inheritance, and polymorphism. While C is procedural, focusing on function-based programming, C++ supports both procedural and object-oriented paradigms, making it more versatile.</p>
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

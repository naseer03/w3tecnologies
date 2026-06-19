<?php $course="DSA" ;
$course_file ="dsa";
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <!-- header-links -->
     <?php include "../includes/header-links.php" ?>
    <link rel="stylesheet" href="../styles/courses/course-stack.css">
    <meta name="description" content="Discover the concept of data structures through a relatable analogy. Understand why the family tree is a useful structure for certain types of data.">
    <title>Choosing the Right Data Structure Courses for Your Needs</title>
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
                    <img src="../assets/courses/dsa/arrays.svg" alt="arrays">
                    <img src="../assets/courses/dsa/linked-list.svg" alt="linked-list">
                    <div class="course-banner-heading-main">
                        <h1>DSA</h1>
                         <div class="course-banner-sub">
                            <span>Data Structures &</span>
                            <span>Algorithms </span>
                        </div>
                    </div>
                    <img src="../assets/courses/dsa/stack.svg" alt="stack">
                    <img src="../assets/courses/dsa/Graphs.svg" alt="graphs">
                </div>
            </div>
        </div>
     
        <!-- ================================== -->
         <!-- About c language -->
        <!-- ================================== -->
         <!--  modal -->
         <section class="about-course-sec-main">
            <div class="container">
                <div class="row">
                    <div class="col-12">
                        <h2><span>About</span> Data Structures & Algorithms</h2>
                        <p>A  <span>data structure</span> is a way to store data. We structure data in different ways depending on what data we have, and what we want to do with it. If we want to store data about people we are related to, we use a family tree as the data structure. We choose a family tree as the data structure because we have information about people we are related to and how they are related, and we want an overview so that we can easily find a specific family member, several generations back.</p>
                    </div>
                </div>
                  <!-- Button to trigger modal -->
                        <button type="button" class="model-blk-btn"  data-bs-toggle="modal" data-bs-target="#centeredModal">
                           <span>Download</span> | DSA Syllabus
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
                <h2>DSA Course <br><span>Breakdown</span></h2>
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
                            <span>Download</span> | DSA Course Syllabus
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
                                Introduction
                                </button>
                                </h2>
                                <div id="collapseOne" class="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                                    <div class="accordion-body courses-syllabus-body">
                                        <ul>
                                            <li>What are Data Structures? </li>
                                            <li>What is an algorithm? </li>
                                            <li>Why are Data Structures and Algorithms important? </li>
                                            <li>Types of Data Structures Types of Algorithms </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div class="accordion-item course-details-accordion-main">
                                <span class="accordion-count">2</span>
                                <h2 class="accordion-header">
                                <button class="accordion-button collapsed course-details-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                Big O Notation 
                                </button>
                                </h2>
                                <div id="collapseTwo" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                    <div class="accordion-body courses-syllabus-body">
                                        <ul>
                                            <li>Big O, Big Theta and Big Omega  </li>
                                            <li>Time complexity examples</li>
                                            <li>Space Complexity </li>
                                            <li>How to measure the codes using Big O?</li>
                                            <li>Relationships Between Various Notations </li>
                                            <li>Best, Worst and Average Case Analysis</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div class="accordion-item course-details-accordion-main">
                                <span class="accordion-count">3</span>
                                <h2 class="accordion-header">
                                <button class="accordion-button collapsed course-details-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                Arrays 

                                </button>
                                </h2>
                                <div id="collapseThree" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                    <div class="accordion-body courses-syllabus-body">
                                        <ul>
                                            <li>Array </li>
                                            <li>One-Dimensional Array </li>
                                            <li>Multi-Dimensional Array </li>
                                            <li>Dynamic Arrays </li>
                                            <li>Why do Arrays fail? </li>
                                            <li>Problems Solving in Array</li>
                                           
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div class="accordion-item course-details-accordion-main">
                                <span class="accordion-count">4</span>
                                <h2 class="accordion-header">
                                <button class="accordion-button collapsed course-details-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                                Linked List </button>
                                </h2>
                                <div id="collapseFour" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                    <div class="accordion-body courses-syllabus-body">
                                        <ul>
                                            <li>Singly Linked List </li>
                                            <li>List(Insertion, Deletion and Traversal) </li>
                                            <li>Doubly Linked List </li>
                                            <li>Circular Linked List </li>
                                            
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            <div class="accordion-item course-details-accordion-main">
                                <span class="accordion-count">5</span>
                                <h2 class="accordion-header"> <button class="accordion-button collapsed course-details-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
                                Stack</button> </h2>
                                <div id="collapseFive" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                    <div class="accordion-body courses-syllabus-body">
                                        <ul>
                                            <li>Introduction to Stack </li>
                                            <li>Push and Pop </li>
                                            <li>Expression Evaluation (Infix,Prefix and Postfix)</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div class="accordion-item course-details-accordion-main">
                                <span class="accordion-count">6</span>
                                <h2 class="accordion-header"> <button class="accordion-button collapsed course-details-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSix" aria-expanded="false" aria-controls="collapseSix">
                                Queue </button> </h2>
                                <div id="collapseSix" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                    <div class="accordion-body courses-syllabus-body">
                                        <ul>
                                            <li>Why do we need Queue? </li>
                                            <li>Enqueue and Dequeue  </li>
                                            <li>Linear and Circular Queue </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div class="accordion-item course-details-accordion-main">
                                <span class="accordion-count">7</span>
                                <h2 class="accordion-header"> <button class="accordion-button collapsed course-details-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSeven" aria-expanded="false" aria-controls="collapseSeven">
                                Sort Algorithms   </button> </h2>
                                <div id="collapseSeven" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                    <div class="accordion-body courses-syllabus-body">
                                        <ul>
                                            <li>What is Sorting? </li>
                                            <li>Types of Sorting </li>
                                            <li>Sorting Terminologies  </li>
                                            <li>Bubble Sort </li>
                                            <li>Time Complexity of Bubble Sort </li>
                                            <li>Selection Sort </li>
                                            <li>Time Complexity of Selection Sort </li>
                                            <li>Insertion Sort   </li>
                                            <li>Time Complexity of Insertion Sort </li>
                                            <li>Merge Sort </li>
                                            <li>Time Complexity of Merge Sort </li>
                                            <li>Quick Sort </li>
                                            <li>Time Complexity of Quick Sort </li>
                                            <li>Heap Sort </li>
                                            <li>Time Complexity of Heap Sort </li>
                                            <li>Comparison of Sorting Algorithms</li>
                                           
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div class="accordion-item course-details-accordion-main">
                                <span class="accordion-count">8</span>
                                <h2 class="accordion-header"> <button class="accordion-button collapsed course-details-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseEight" aria-expanded="false" aria-controls="collapseEight">
                                Searching Algorithms  </button> </h2>
                                <div id="collapseEight" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                    <div class="accordion-body courses-syllabus-body">
                                        <ul>
                                            <li>Introduction to Searching Algorithms Linear Search </li>
                                            <li>Time Complexity of Linear Search </li>
                                            <li>Binary Search  </li>
                                            <li>Time Complexity of Binary Search </li>
                                            
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div class="accordion-item course-details-accordion-main">
                                <span class="accordion-count">9</span>
                                <h2 class="accordion-header"> <button class="accordion-button collapsed course-details-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseNine" aria-expanded="false" aria-controls="collapseNine">
                                Trees Logical   </button> </h2>
                                <div id="collapseNine" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                    <div class="accordion-body courses-syllabus-body">
                                        <ul>
                                            <li>Structure and Implementations  </li>
                                            <li>Terminologies and Traversals  </li>
                                            <li>Types of Binary Search Tree   </li>
                                            <li>Properties of a Tree: Depth, Nodes and Leafs Maximum Depth of a Binary tree  </li>
                                           
                                        
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div class="accordion-item course-details-accordion-main">
                                <span class="accordion-count">10</span>
                                <h2 class="accordion-header"> <button class="accordion-button collapsed course-details-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTen" aria-expanded="false" aria-controls="collapseTen">
                                Balanced Trees: AVL Trees</button> </h2>
                                <div id="collapseTen" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                    <div class="accordion-body courses-syllabus-body">
                                        <ul>
                                            <li>AVL Trees: What and Why?  </li>
                                            <li>Hashing</li>
                                            <li>Hash Tables </li>
                                            <li>Direct access table </li>
                                            <li>Hash Function and collisions</li>
                                            <li>Chaining and Load Factor</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            <div class="accordion-item course-details-accordion-main">
                                <span class="accordion-count">11</span>
                                <h2 class="accordion-header"> <button class="accordion-button collapsed course-details-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseEleven" aria-expanded="false" aria-controls="collapseEleven">
                                Graphs Algorithm  </button> </h2>
                                <div id="collapseEleven" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                    <div class="accordion-body courses-syllabus-body">
                                        <ul>
                                            <li>Graph Representation Graph Traversal </li>
                                            <li>Adjacency Matrix  </li>
                                            <li>Graph traversal - BFS  </li>
                                            <li>Graph Traversal - DFS </li>
                                            <li>BFS Traversal vs DFS Traversal </li>
                                            <li>Minimum Spanning Tree </li>
                                            <li>Kruskal's Algorithm </li>
                                            <li>Prim's Algorithm</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div class="accordion-item course-details-accordion-main">
                                <span class="accordion-count">12</span>
                                <h2 class="accordion-header"> <button class="accordion-button collapsed course-details-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwelve" aria-expanded="false" aria-controls="collapseTwelve">
                                Shortest Path </button> </h2>
                                <div id="collapseTwelve" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                    <div class="accordion-body courses-syllabus-body">
                                        <ul>
                                            <li>Dijikstra's Algorithm </li>
                                            <li>Bellman Ford Algorithm</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div class="accordion-item course-details-accordion-main">
                                <span class="accordion-count">13</span>
                                <h2 class="accordion-header"> <button class="accordion-button collapsed course-details-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThirteen" aria-expanded="false" aria-controls="collapseThirteen">
                                Recursion  </button> </h2>
                                <div id="collapseThirteen" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                    <div class="accordion-body courses-syllabus-body">
                                        <ul>
                                            <li>Recursion Programming </li>
                                            <li>Recursion Tree Method </li>
                                            <li>Master Theorem </li>
                                            <li>Extended Master Theorem </li>
                                            <li>Cracking Recursion Interview Question</li>
                                           
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div class="accordion-item course-details-accordion-main">
                                <span class="accordion-count">14</span>
                                <h2 class="accordion-header"> <button class="accordion-button collapsed course-details-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseForteen" aria-expanded="false" aria-controls="collapseForteen">
                                Dynamic Programming </button> </h2>
                                <div id="collapseForteen" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                    <div class="accordion-body courses-syllabus-body">
                                        <ul>
                                           <li>What is Dynamic Programming? (Overlapping property) </li>
                                           <li>Where does the name of DC come from? </li>
                                           <li>Top Down with Memoization  </li>
                                           <li>Bottom Up with Tabulation</li>
                                           <li>Top Down vs Bottom Up </li>
                                           <li>Is Merge Sort Dynamic Programming? </li>
                                           <li>Number Factor Problem using Dynamic Programming </li>
                                           <li>Longest Common Subsequence </li>
                                           <li>Knapsack</li>
                                           <li>Bellman Ford Algorithm as Dynamic Programming </li>
                                           <li>Matrix Chain Multiplication  </li>
                                           <li>Subset Sum Problem</li>
                                           <li>Floyd Marshall Algorithm</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div class="accordion-item course-details-accordion-main">
                                <span class="accordion-count">15</span>
                                <h2 class="accordion-header"> <button class="accordion-button collapsed course-details-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFifteen" aria-expanded="false" aria-controls="collapseFifteen">
                                Greedy Algorithm </button> </h2>
                                <div id="collapseFifteen" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                    <div class="accordion-body courses-syllabus-body">
                                        <ul>
                                            <li>Introduction </li>
                                            <li>Activity Selection Problem </li>
                                            <li>Fractional Knapsack Problem  </li>
                                            <li>Huffman Coding For Data Compression  </li>
                                            <li>Minimum Spanning Tree: Greedy Kruskal's Algorithm </li>
                                            <li>Greedy Algorithm: Dijkstra's Algorithm</li>
                                        
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
                        What is the best way to start learning data structures and algorithms?
                        </button>
                        </h2>
                        <div id="courseFaqOne" class="accordion-collapse collapse show" data-bs-parent="#courseFaqsAccordion">
                            <div class="accordion-body course-faqs-body">
                                <p>The best way to start learning data structures and algorithms is by understanding the basics of arrays and linked lists. Once you grasp these, you can move on to more complex structures like stacks, queues, trees, and graphs. Practice implementing these structures and solving problems on platforms like LeetCode, HackerRank, and GeeksforGeeks.</p>
                            </div>
                        </div>
                    </div>
                    <!-- two -->
                    <div class="accordion-item course-faqs-item">
                        <h2 class="accordion-header course-faqs-header">
                        <button class="accordion-button collapsed course-faqs-button" type="button" data-bs-toggle="collapse" data-bs-target="#courseFaqTwo" aria-expanded="false" aria-controls="courseFaqTwo">
                        Why are data structures important for programming?
                        </button>
                        </h2>
                        <div id="courseFaqTwo" class="accordion-collapse collapse" data-bs-parent="#courseFaqsAccordion">
                        <div class="accordion-body course-faqs-body">
                            <p>Data structures are important because they provide efficient ways to store and manage data, enabling faster access, modification, and processing. They are fundamental for solving complex problems and are essential for writing efficient code in software development.</p>
                        </div>
                        </div>
                    </div>
                    <!-- three -->
                    <div class="accordion-item course-faqs-item">
                        <h2 class="accordion-header course-faqs-header">
                        <button class="accordion-button collapsed course-faqs-button" type="button" data-bs-toggle="collapse" data-bs-target="#courseFaqThree" aria-expanded="false" aria-controls="courseFaqThree">
                          How do I choose the right data structure for my problem?
                        </button>
                        </h2>
                        <div id="courseFaqThree" class="accordion-collapse collapse" data-bs-parent="#courseFaqsAccordion">
                        <div class="accordion-body course-faqs-body">
                            <p>Choosing the right data structure depends on the operations you need to perform and their frequency. For example, if you need quick access to elements, arrays or hash tables are suitable. For dynamic data with frequent insertions and deletions, linked lists or trees are better. Analyzing the time and space complexity of different data structures can help you make an informed choice.</p>
                        </div>
                        </div>
                    </div>
                    <!-- four -->
                    <div class="accordion-item course-faqs-item">
                        <h2 class="accordion-header course-faqs-header">
                        <button class="accordion-button collapsed course-faqs-button" type="button" data-bs-toggle="collapse" data-bs-target="#courseFaqFour" aria-expanded="false" aria-controls="courseFaqFour">
                             What is the difference between a linear and a non-linear data structure?
                        </button>
                        </h2>
                        <div id="courseFaqFour" class="accordion-collapse collapse" data-bs-parent="#courseFaqsAccordion">
                        <div class="accordion-body course-faqs-body">
                            <p>Linear data structures, such as arrays, linked lists, stacks, and queues, store data in a sequential manner. Non-linear data structures, like trees and graphs, store data in a hierarchical or interconnected manner. Linear structures are easier to implement but may not be as efficient for complex relationships as non-linear structures.</p>
                        </div>
                        </div>
                    </div>
                    <!-- five -->
                     <div class="accordion-item course-faqs-item">
                        <h2 class="accordion-header course-faqs-header">
                        <button class="accordion-button collapsed course-faqs-button" type="button" data-bs-toggle="collapse" data-bs-target="#courseFaqFive" aria-expanded="false" aria-controls="courseFaqFive">
                         How do I understand and analyze algorithm complexity?
                        </button>
                        </h2>
                        <div id="courseFaqFive" class="accordion-collapse collapse" data-bs-parent="#courseFaqsAccordion">
                        <div class="accordion-body course-faqs-body">
                            <p>Algorithm complexity is analyzed using Big O notation, which describes the upper bound of an algorithm's running time or space requirement in terms of the input size. To understand it, study common complexities like O(1), O(n), O(log n), O(n log n), and O(n^2). Practice by analyzing different algorithms to determine their time and space complexity.
                            </p>
                        </div>
                        </div>
                    </div>
                    <!-- six -->
                    <div class="accordion-item course-faqs-item">
                        <h2 class="accordion-header course-faqs-header">
                        <button class="accordion-button collapsed course-faqs-button" type="button" data-bs-toggle="collapse" data-bs-target="#courseFaqSix" aria-expanded="false" aria-controls="courseFaqSix">
                                 What is the importance of learning sorting algorithms?
                        </button>
                        </h2>
                        <div id="courseFaqSix" class="accordion-collapse collapse" data-bs-parent="#courseFaqsAccordion">
                        <div class="accordion-body course-faqs-body">
                            <p>Learning sorting algorithms is important because sorting is a fundamental operation in many applications. Understanding different sorting algorithms, such as Bubble Sort, Insertion Sort, Quick Sort  and Merge Sort helps you choose the most efficient one for your specific use case. Sorting algorithms also help you understand algorithm design and analysis.
                            </p>
                        </div>
                        </div>
                    </div>
                    <!-- seven -->
                    <div class="accordion-item course-faqs-item">
                        <h2 class="accordion-header course-faqs-header">
                        <button class="accordion-button collapsed course-faqs-button" type="button" data-bs-toggle="collapse" data-bs-target="#courseFaqSeven" aria-expanded="false" aria-controls="courseFaqSeven">
                        What is a recursive algorithm and when should I use it?
                        </button>
                        </h2>
                        <div id="courseFaqSeven" class="accordion-collapse collapse" data-bs-parent="#courseFaqsAccordion">
                        <div class="accordion-body course-faqs-body">
                              <p>A recursive algorithm is one that solves a problem by calling itself with smaller subproblems. Use recursion when a problem can be divided into similar subproblems, such as in tree traversals, factorial computation, and certain dynamic programming problems. However, be mindful of stack overflow issues and consider iterative solutions for large inputs.  </p>
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

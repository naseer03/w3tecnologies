<?php $course="UI-UX Designing";
$course_file ="ui-ux-design";
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <!-- header-links -->
     <?php include "../includes/header-links.php" ?>
    <link rel="stylesheet" href="../styles/courses/course-stack.css">
    <meta name="description" content="Learn UI/UX design skills to create engaging interfaces with W3 Technologies. Explore topics like research, prototyping, HTML, CSS, wireframing, and user testing.">
    <title>Learn UI/UX Design Course & Build Beautiful & Functional Websites</title>
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
                   <?php 
                        include '../includes/course-form.php' ;
                   ?>
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
                    <img src="../assets/courses/graphic-designing/figma.svg" alt="figma">
                    <img src="../assets/courses/graphic-designing/illustrator.svg" alt="illustrator">
                    <div class="course-banner-heading-main">
                        <h1>UI/UX</h1>
                         <div class="course-banner-sub">
                            <span>Designing</span>
                            <!-- <span>languages</span> -->
                        </div>
                    </div>
                    <img src="../assets/courses/graphic-designing/photoshop.svg" alt="photoshop">
                    <img src="../assets/courses/graphic-designing/xd.svg" alt="xd">
                </div>
            </div>
        </div>

        <!-- ================================== -->
         <!-- About course-->
        <!-- ================================== -->
         <!-- Scrollable modal -->
         <section class="about-course-sec-main">
            <div class="container">
                <div class="row">
                    <div class="col-12">
                        <h2><span>About</span> UI/UX Designing</h2>
                        <p> <span>UI/UX designing</span> is a popular course that focuses on the creation of user-friendly and visually appealing interfaces. The course also covers the design of websites and applications. Students pursuing UI/UX design courses will learn various topics such as research, prototyping, HTML, CSS, wireframing, and user testing. </p>
                        <p>UI/UX design courses are popular in the field of Design and play a key role in creating digital products that are safe and secure. Some of the career options available after completing UI/UX design courses include roles as aspiring designers, web developers, UX consultants, UI designers, and UX researchers.</p>
                    </div>
                </div>
                  <!-- Button to trigger modal -->
                        <button type="button" class="model-blk-btn"  data-bs-toggle="modal" data-bs-target="#centeredModal">
                           <span>Download</span> | UI/UX Designing Course Syllabus
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

                            <img src="../assets/course-includes/designing/Ai.svg" class="img-fluid" alt="ai">
                            <h5 class="card-title">Illustrator</h5>
                        </div>
                    </div>
                </div>    

                <div class="col-12 col-lg-4">
                    <div class="card m-3 " >
                        <div class="d-flex flex-column align-items-center gap-3">

                            <img src="../assets/course-includes/designing/figma.svg" class="img-fluid" alt="figama">
                            <h5 class="card-title">Figma</h5>
                        </div>
                    </div>
                </div>    

                <div class="col-12 col-lg-4">
                    <div class="card m-3 " >
                        <div class="d-flex flex-column align-items-center gap-3">

                            <img src="../assets/course-includes/designing/Ps.svg" class="img-fluid" alt="ps">
                            <h5 class="card-title">Photo Shop</h5>
                        </div>
                    </div>
                </div>    

                <div class="col-12 col-lg-4">
                    <div class="card m-3 " >
                        <div class="d-flex flex-column align-items-center gap-3">

                            <img src="../assets/course-includes/designing/xd.svg" class="img-fluid" alt="xd">
                            <h5 class="card-title">Xd</h5>
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
                <h2>UI/UX Designing Course <br><span>Breakdown</span></h2>
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
                        <button type="button" class="course-syllabus-btn"  data-bs-toggle="modal" data-bs-target="#centeredModal">
                            <span>Download</span> | UI/UX Designing Course Syllabus
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
                                    How & when to use common UI patterns 
                                    </button>
                                </h2>
                                <div id="collapseOne" class="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                                    <div class="accordion-body courses-syllabus-body">
                                        <ul>
                                            <li>Menus Tabs </li>
                                            <li>Bottom tab bar </li>
                                            <li>Buttons (including “Call to action” or CTA) </li>
                                            <li>Accordion</li>
                                            <li>Carousel </li>
                                            <li>Breadcrumbs </li>
                                            <li>Modals </li>
                                            <li>Forms</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div class="accordion-item course-details-accordion-main">
                                <span class="accordion-count">2</span>
                                <h2 class="accordion-header">
                                    <button class="accordion-button collapsed course-details-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                    Create Visual Designs & Clickable Prototypes 
                                    </button>
                                </h2>
                                <div id="collapseTwo" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                    <div class="accordion-body courses-syllabus-body">
                                        <ul>
                                            <li>Learn how to use Figma to create clickable prototypes to show users for testing, or for clients to see your work. </li>
                                            <li>Design the UI (user interface of websites, apps, etc) in Figma.  </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div class="accordion-item course-details-accordion-main">
                                <span class="accordion-count">3</span>
                                <h2 class="accordion-header">
                                    <button class="accordion-button collapsed course-details-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                        Intersection of Design, Technology, & Business 
                                    </button>
                                </h2>
                                <div id="collapseThree" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                    <div class="accordion-body courses-syllabus-body">
                                        <ul>
                                            <li>Through critical analysis understand how user experience as a field sits in the intersection of different areas of the product</li>
                                            <li>What is the difference between User Experience Design and User Interface Design?  </li>
                                            <li>Learn about heuristics and apply heuristic evaluation to websites  </li>
                                            <li>Competitive Research</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div class="accordion-item course-details-accordion-main">
                                <span class="accordion-count">4</span>
                                <h2 class="accordion-header">
                                    <button class="accordion-button collapsed course-details-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                                    Knowing Your User 
                                    </button>
                                </h2>
                                <div id="collapseFour" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                    <div class="accordion-body courses-syllabus-body">
                                        <ul>
                                            <li>Learn how to structure and conduct user interviews to better identify the needs and current behaviors of the user</li>
                                            <li>Understand how to engage the user to work through assumptions and preconceived notions that arise during the process</li>
                                            <li>Write down assumptions for your class project.</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            <div class="accordion-item course-details-accordion-main">
                                <span class="accordion-count">5</span>
                                <h2 class="accordion-header">
                                    <button class="accordion-button collapsed course-details-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
                                    User Research Through Interviews 
                                    </button>
                                </h2>
                                <div id="collapseFive" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                    <div class="accordion-body courses-syllabus-body">
                                        <ul>
                                            <li>Refine user interview questions</li>
                                            <li>Interview classmates for your project</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div class="accordion-item course-details-accordion-main">
                                <span class="accordion-count">6</span>
                                <h2 class="accordion-header">
                                    <button class="accordion-button collapsed course-details-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSix" aria-expanded="false" aria-controls="collapseSix">
                                        Refining User Research and Creating Personas 
                                    </button>
                                </h2>
                                <div id="collapseSix" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                    <div class="accordion-body courses-syllabus-body">
                                      <ul>
                                        <li>Create user personas from the interviews to represent the goals and behaviors of the users within the system</li>
                                        <li>Develop user scenarios to show when and how the user engages with the system</li>
                                      </ul>
                                    </div>
                                </div>
                            </div>
                            <div class="accordion-item course-details-accordion-main">
                                <span class="accordion-count">7</span>
                                <h2 class="accordion-header">
                                <button class="accordion-button collapsed course-details-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSeven" aria-expanded="false" aria-controls="collapseSeven">
                                     Synthesis of User Research, Journey Maps, and User Flows 
                                </button>
                                </h2>
                                <div id="collapseSeven" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                    <div class="accordion-body courses-syllabus-body">
                                        <ul>
                                            <li>Continue to synthesize results of user research to find patterns</li>
                                            <li>Create a journey map for your project. </li>
                                            <li>Think through the different features of the system by building user flows. </li>
                                            <li>Take the written narrative to the next level through sketching and improvising using techniques such as storyboarding and bodystorming</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div class="accordion-item course-details-accordion-main">
                                <span class="accordion-count">8</span>
                                <h2 class="accordion-header">
                                    <button class="accordion-button collapsed course-details-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseEight" aria-expanded="false" aria-controls="collapseEight">
                                        Wireframing, Sketching, Prototyping 
                                    </button>
                                </h2>
                                <div id="collapseEight" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                    <div class="accordion-body courses-syllabus-body">
                                        <ul>
                                            <li>Practice a sketching session for an existing website or mobile application of your choice. Start with sketching on a whiteboard or your notebook</li>
                                            <li>Sketch wireframes for your class project. </li>
                                            <li>Learn the power of prototyping and testing an idea. Understand different methods of prototyping and their levels of fidelity. </li>
                                            <li>Discuss the motivation behind the prototyping, such as newly discovered user goals, business needs and improved functionality.</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div class="accordion-item course-details-accordion-main">
                                <span class="accordion-count">9</span>
                                <h2 class="accordion-header">
                                    <button class="accordion-button collapsed course-details-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseNine" aria-expanded="false" aria-controls="collapseNine">
                                        Prototyping & User Testing 
                                    </button>
                                </h2>
                                <div id="collapseNine" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                    <div class="accordion-body courses-syllabus-body">
                                        <ul>
                                            <li>User testing methods and strategies. </li>
                                            <li>Do’s and don’ts of user testing. </li>
                                            <li>Do a user test on your project with a classmate. </li>
                                            <li>Clearly list the assumptions and test your concepts. Work on multiple iterations of the prototype based on the test results.</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div class="accordion-item course-details-accordion-main">
                                <span class="accordion-count">10</span>
                                <h2 class="accordion-header">
                                    <button class="accordion-button collapsed course-details-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTen" aria-expanded="false" aria-controls="collapseTen">
                                        Iterating the Prototype and Further User Testing 
                                    </button>
                                </h2>
                                <div id="collapseTen" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                    <div class="accordion-body courses-syllabus-body">
                                    <ul>
                                        <li>Report conclusions based on user testing</li>
                                        <li>User testing reports. </li>
                                        <li>Rework the prototype based on user testing conclusions.</li>        
                                    </ul>
                                    </div>
                                </div>
                            </div>
                            <div class="accordion-item course-details-accordion-main">
                                <span class="accordion-count">11</span>
                                <h2 class="accordion-header"> <button class="accordion-button collapsed course-details-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseEleven" aria-expanded="false" aria-controls="collapseEleven">
                                 Wireframing  </button> </h2>
                                <div id="collapseEleven" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                    <div class="accordion-body courses-syllabus-body">
                                        <ul>
                                           <li>Why and How to Create Wireframes </li>
                                           <li>Issues to Solve </li>
                                           <li>Steps in Creating a Wireframe </li>
                                           <li>Designing on a Grid System (like Bootstrap) </li>
                                           <li>Get Critiques </li>
                                           <li>Incorporate Feedback & Improve Your Designs </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div class="accordion-item course-details-accordion-main">
                                <span class="accordion-count">12</span>
                                <h2 class="accordion-header"> <button class="accordion-button collapsed course-details-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwelve" aria-expanded="false" aria-controls="collapseTwelve">
                                    Wireframe to Refined Design  </button> </h2>
                                <div id="collapseTwelve" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                    <div class="accordion-body courses-syllabus-body">
                                        <ul>
                                            <li>Display Text (Such as Headings) versus Body Text  </li>
                                            <li>Understanding the Mobile Experience </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div class="accordion-item course-details-accordion-main">
                                <span class="accordion-count">13</span>
                                <h2 class="accordion-header"> <button class="accordion-button collapsed course-details-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThirteen" aria-expanded="false" aria-controls="collapseThirteen">
                                    Typography & Fonts 
                                </button> </h2>
                                <div id="collapseThirteen" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                    <div class="accordion-body courses-syllabus-body">
                                        <ul>
                                            <li>Display Text (Such as Headings) versus Body Text </li>
                                            <li>Legibility </li>
                                            <li>Type Trends </li>
                                            <li>Typeface Selection & Pairing </li>
                                            <li>Where to Get Web Fonts </li>
                                            <li>Ideal Line Height </li>
                                            <li>Column Width (Line Length) </li>
                                            <li>Hyphenation & Justification </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div class="accordion-item course-details-accordion-main">
                                <span class="accordion-count">14</span>
                                <h2 class="accordion-header"> <button class="accordion-button collapsed course-details-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseForteen" aria-expanded="false" aria-controls="collapseForteen">
                                Design Elements </button> </h2>
                                <div id="collapseForteen" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                    <div class="accordion-body courses-syllabus-body">
                                        <ul>
                                            <li>Proximity </li>
                                            <li>Similarity</li>
                                            <li>Continuity</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            
                            <div class="accordion-item course-details-accordion-main">
                                <span class="accordion-count">15</span>
                                <h2 class="accordion-header"> <button class="accordion-button collapsed course-details-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSixteen" aria-expanded="false" aria-controls="collapseSixteen">
                                Multiple Screen Sizes 
                                </button> </h2>
                                <div id="collapseSixteen" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                    <div class="accordion-body courses-syllabus-body">
                                        <ul>
                                            <li>Responsive Web Design </li>
                                            <li>Mobile Considerations & Limitations  </li>
                                            <li>Discoverability Challenges  </li>
                                            <li>Mobile Navigation </li>
                                            <li>Phone vs Tablet App Design </li>
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
                            What is the difference between UI and UX design?
                            </button>
                        </h2>
                        <div id="courseFaqOne" class="accordion-collapse collapse show" data-bs-parent="#courseFaqsAccordion">
                            <div class="accordion-body course-faqs-body">
                                <p>UI (User Interface) design focuses on the look and feel of a product, including the design of screens, buttons, icons, and overall visual elements. UX (User Experience) design is about the overall experience a user has with a product, including usability, ease of navigation, and how the product meets the user's needs.</p>
                            </div>
                        </div>
                    </div>
                    <!-- two -->
                    <div class="accordion-item course-faqs-item">
                        <h2 class="accordion-header course-faqs-header">
                            <button class="accordion-button collapsed course-faqs-button" type="button" data-bs-toggle="collapse" data-bs-target="#courseFaqTwo" aria-expanded="false" aria-controls="courseFaqTwo">
                            Do I need a background in design to take this course?
                            </button>
                        </h2>
                        <div id="courseFaqTwo" class="accordion-collapse collapse" data-bs-parent="#courseFaqsAccordion">
                            <div class="accordion-body course-faqs-body">
                                <p>No, you don't need a background in design to take this course. It is designed for beginners as well as those with some design experience. The course will cover the basics and progress to more advanced concepts, making it accessible to all learners.</p>
                            </div>
                        </div>
                    </div>
                    <!-- three -->
                    <div class="accordion-item course-faqs-item">
                        <h2 class="accordion-header course-faqs-header">
                            <button class="accordion-button collapsed course-faqs-button" type="button" data-bs-toggle="collapse" data-bs-target="#courseFaqThree" aria-expanded="false" aria-controls="courseFaqThree">
                                 What tools will I learn to use in this UI/UX design course?
                            </button>
                        </h2>
                        <div id="courseFaqThree" class="accordion-collapse collapse" data-bs-parent="#courseFaqsAccordion">
                            <div class="accordion-body course-faqs-body">
                                <p>You will learn to use industry-standard tools such as Adobe XD, Sketch, Figma, InVision, and possibly others like Photoshop and Illustrator for creating UI elements. These tools will help you design and prototype user interfaces and experiences.</p>
                            </div>
                        </div>
                    </div>
                    <!-- four -->
                    <div class="accordion-item course-faqs-item">
                        <h2 class="accordion-header course-faqs-header">
                        <button class="accordion-button collapsed course-faqs-button" type="button" data-bs-toggle="collapse" data-bs-target="#courseFaqFour" aria-expanded="false" aria-controls="courseFaqFour">
                            How long does it take to become proficient in UI/UX design?
                        </button>
                        </h2>
                        <div id="courseFaqFour" class="accordion-collapse collapse" data-bs-parent="#courseFaqsAccordion">
                            <div class="accordion-body course-faqs-body">
                                <p>The time to become proficient varies depending on your learning pace and dedication. Typically, it can take a few months to a year of consistent practice and learning to master the essential skills and tools needed for UI/UX design.</p>
                            </div>
                        </div>
                    </div>
                    <!-- five -->
                     <div class="accordion-item course-faqs-item">
                        <h2 class="accordion-header course-faqs-header">
                        <button class="accordion-button collapsed course-faqs-button" type="button" data-bs-toggle="collapse" data-bs-target="#courseFaqFive" aria-expanded="false" aria-controls="courseFaqFive">
                            What kind of projects will I work on during the course?
                        </button>
                        </h2>
                        <div id="courseFaqFive" class="accordion-collapse collapse" data-bs-parent="#courseFaqsAccordion">
                            <div class="accordion-body course-faqs-body">
                                <p>You will work on projects such as creating wireframes, designing user interfaces, building interactive prototypes, conducting user research, and performing usability testing. These projects will help you build a portfolio showcasing your skills.</p>
                            </div>
                        </div>
                    </div>
                    <!-- six -->
                    <div class="accordion-item course-faqs-item">
                        <h2 class="accordion-header course-faqs-header">
                        <button class="accordion-button collapsed course-faqs-button" type="button" data-bs-toggle="collapse" data-bs-target="#courseFaqSix" aria-expanded="false" aria-controls="courseFaqSix">
                            What career opportunities are available for UI/UX designers?
                        </button>
                        </h2>
                        <div id="courseFaqSix" class="accordion-collapse collapse" data-bs-parent="#courseFaqsAccordion">
                            <div class="accordion-body course-faqs-body">
                                <p>Career opportunities include roles such as UI Designer, UX Designer, Product Designer, Interaction Designer, UX Researcher, and UX Strategist. These skills are in high demand across various industries, including tech, healthcare, finance, and e-commerce.</p>
                            </div>
                        </div>
                    </div>
                    <!-- seven -->
                    <div class="accordion-item course-faqs-item">
                        <h2 class="accordion-header course-faqs-header">
                            <button class="accordion-button collapsed course-faqs-button" type="button" data-bs-toggle="collapse" data-bs-target="#courseFaqSeven" aria-expanded="false" aria-controls="courseFaqSeven">
                                How does UI/UX design impact the success of a product?
                            </button>
                        </h2>
                        <div id="courseFaqSeven" class="accordion-collapse collapse" data-bs-parent="#courseFaqsAccordion">
                            <div class="accordion-body course-faqs-body">
                                <p>UI/UX design greatly impacts the success of a product by ensuring it is user-friendly, visually appealing, and meets the needs of its users. Good design can improve user satisfaction, increase engagement, and drive business growth by enhancing the overall user experience.</p>
                            </div>
                        </div>
                    </div>
                    <!-- eight -->
                    <div class="accordion-item course-faqs-item">
                        <h2 class="accordion-header course-faqs-header">
                            <button class="accordion-button collapsed course-faqs-button" type="button" data-bs-toggle="collapse" data-bs-target="#courseFaqEight" aria-expanded="false" aria-controls="courseFaqEight">
                                Is this course suitable for freelancers and entrepreneurs?
                            </button>
                        </h2>
                        <div id="courseFaqEight" class="accordion-collapse collapse" data-bs-parent="#courseFaqsAccordion">
                            <div class="accordion-body course-faqs-body">
                                <p>Yes, this course is suitable for freelancers and entrepreneurs who want to create user-friendly and visually appealing designs for their own projects or clients. The skills learned will help you produce high-quality designs and improve user experiences.</p>
                            </div>
                        </div>
                    </div>                              
                    <!-- nine -->
                    <div class="accordion-item course-faqs-item">
                        <h2 class="accordion-header course-faqs-header">
                        <button class="accordion-button collapsed course-faqs-button" type="button" data-bs-toggle="collapse" data-bs-target="#courseFaqNine" aria-expanded="false" aria-controls="courseFaqNine">
                            Will I learn about user research and testing in this course?
                        </button>
                        </h2>
                        <div id="courseFaqNine" class="accordion-collapse collapse" data-bs-parent="#courseFaqsAccordion">
                            <div class="accordion-body course-faqs-body">
                                <p>Yes, the course will cover user research methods such as interviews, surveys, and usability testing. You will learn how to gather insights from users, analyze data, and apply findings to improve your designs.</p>
                            </div>
                        </div>
                    </div>
                    <!-- Ten -->
                    <div class="accordion-item course-faqs-item">
                        <h2 class="accordion-header course-faqs-header">
                            <button class="accordion-button collapsed course-faqs-button" type="button" data-bs-toggle="collapse" data-bs-target="#courseFaqTen" aria-expanded="false" aria-controls="courseFaqTen">
                                Can I get a certification upon completing the UI/UX design course?
                            </button>
                        </h2>
                        <div id="courseFaqTen" class="accordion-collapse collapse" data-bs-parent="#courseFaqsAccordion">
                            <div class="accordion-body course-faqs-body">
                                <p>Yes, many UI/UX design courses offer a certification upon successful completion. This certification can enhance your resume and demonstrate your proficiency in UI/UX design to potential employers.</p>
                            </div>
                        </div>
                    </div>
                    <!-- Eleven -->
                    <div class="accordion-item course-faqs-item">
                        <h2 class="accordion-header course-faqs-header">
                            <button class="accordion-button collapsed course-faqs-button" type="button" data-bs-toggle="collapse" data-bs-target="#courseFaqEleven" aria-expanded="false" aria-controls="courseFaqEleven">
                                What is the importance of wireframing and prototyping in UI/UX design?
                            </button>
                        </h2>
                        <div id="courseFaqEleven" class="accordion-collapse collapse" data-bs-parent="#courseFaqsAccordion">
                            <div class="accordion-body course-faqs-body">
                                <p>Wireframing and prototyping are crucial steps in UI/UX design as they help visualize the structure and functionality of a product before development. Wireframes outline the layout, while prototypes allow for interactive testing and validation of design concepts.</p>
                            </div>
                        </div>
                    </div>
                    <!-- Twelve-->
                    <div class="accordion-item course-faqs-item">
                        <h2 class="accordion-header course-faqs-header">
                        <button class="accordion-button collapsed course-faqs-button" type="button" data-bs-toggle="collapse" data-bs-target="#courseFaqTwelve" aria-expanded="false" aria-controls="courseFaqTwelve">
                            How can I build a strong portfolio for UI/UX design?
                        </button>
                        </h2>
                        <div id="courseFaqTwelve" class="accordion-collapse collapse" data-bs-parent="#courseFaqsAccordion">
                            <div class="accordion-body course-faqs-body">
                                <p>Building a strong portfolio involves showcasing your best work, including projects that demonstrate your skills in user research, wireframing, prototyping, and visual design. Highlight your design process, include case studies, and provide context for each project. Continuously update your portfolio with new and improved designs. </p>
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

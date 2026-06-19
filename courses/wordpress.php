<?php $course="Wordpress" ;
$course_file ="wordpress";
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <!-- header-links -->
     <?php include "../includes/header-links.php" ?>
    <link rel="stylesheet" href="../styles/courses/course-stack.css">
    <title>Wordpress</title>
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
                    <img src="../assets/courses/wordpress/themes.svg" alt="themes">
                    <img src="../assets/courses/wordpress/plugins.svg" alt="plugins">
                    <div class="course-banner-heading-main">
                        <h1>Wordpress</h1>
                         <!-- <div class="course-banner-sub">
                            <span>Programming</span>
                            <span>language</span>
                        </div> -->
                    </div>
                    <img src="../assets/courses/wordpress/page-builder.svg" alt="page-builder">
                    <img src="../assets/courses/wordpress/post.svg" alt="post">
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
                        <h2><span>About</span> Wordpress</h2>
                        <p> <span>The WordPress software is a powerful CMS (content management system) used for building websites.</span> There are many wonderful aspects to WordPress and high among them are its flexibility and extensibility. Its secret? WordPress is open source software. This means it has a large community constantly contributing to its development and creating tools which provide additional functionality to its users. If you want to learn more about the WordPress open source project, the About WordPress is a good place to start.</p>
                    </div>
                </div>
                  <!-- Button to trigger modal -->
                        <button type="button" class="model-blk-btn"  data-bs-toggle="modal" data-bs-target="#centeredModal">
                           <span>Download</span> | WordPress Course Syllabus
                        </button>      
            </div>
         </section>

         <!-- ================================ -->
          <!-- ========course-includes======== -->
           <?php include '../includes/course-includes.php' ?>
           <?php include '../includes/course-from-sec.php' ?>
        <!-- ================================== -->
        <!--c language course-breakdown-->
        <!-- ================================== -->
        <section class="course-breakdown-main-sec">
            <div class="container">
                <h2>WordPress Course <br><span>Breakdown</span></h2>
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
                            <span>Download</span> | Wordpress Course Syllabus
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
                                Creating a WordPress 
                                </button>
                                </h2>
                                <div id="collapseOne" class="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                                    <div class="accordion-body courses-syllabus-body">
                                        <ul>
                                            <li>Site (Installing WordPress) Installing WordPress with a Web Host’s “1-Click Install” </li>
                                            <li>Manually Installing WordPress </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div class="accordion-item course-details-accordion-main">
                                <span class="accordion-count">2</span>
                                <h2 class="accordion-header">
                                <button class="accordion-button collapsed course-details-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                    Logging Into the WordPress Admin & General Site Settings 
                                </button>
                                </h2>
                                <div id="collapseTwo" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                    <div class="accordion-body courses-syllabus-body">
                                        <ul>
                                            <li>Logging Into the WordPress Admin </li>
                                            <li>Comments</li>
                                            <li>General WordPress Settings </li>
                                            <li>Editing Your Profile </li>
                                            <li>Setting Your Profile Picture (Gravatar) </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div class="accordion-item course-details-accordion-main">
                                <span class="accordion-count">3</span>
                                <h2 class="accordion-header">
                                <button class="accordion-button collapsed course-details-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                    Writing Posts & Formatting Text 
                                </button>
                                </h2>
                                <div id="collapseThree" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                    <div class="accordion-body courses-syllabus-body">
                                        <ul>
                                            <li>Posts versus Pages </li>
                                            <li>Creating a New Blog Post</li>
                                            <li>Using the Visual Editor </li>
                                            <li>Pasting Without Formatting & Clearing Formatting  </li>
                                            <li>Formatting Headings </li>
                                            <li>Formatting Bulleted & Numbered Lists</li>
                                            <li>Formatting Quotes </li>
                                            <li>Publishing a Post </li>
                                            <li>Deleting a Post </li>
                                            <li>Restoring a Post from the Trash (or Deleting it Delete Permanently)</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div class="accordion-item course-details-accordion-main">
                                <span class="accordion-count">4</span>
                                <h2 class="accordion-header">
                                <button class="accordion-button collapsed course-details-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                                     Publishing a Post (Making it Live) </button>
                                </h2>
                                <div id="collapseFour" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                    <div class="accordion-body courses-syllabus-body">
                                        <ul>
                                            <li>Publishing a Post (Making it Live)</li>
                                            <li>Status </li>
                                            <li>Visibility </li>
                                            <li>Publish Date & Time</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            <div class="accordion-item course-details-accordion-main">
                                <span class="accordion-count">5</span>
                                <h2 class="accordion-header"> <button class="accordion-button collapsed course-details-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
                                    Adding a Read More Link to a Post </button> </h2>
                                <div id="collapseFive" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                    <div class="accordion-body courses-syllabus-body">
                                        <ul>
                                            <li>Adding the Read More Tag </li>
                                            <li>Changing the Text in the More Tag </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div class="accordion-item course-details-accordion-main">
                                <span class="accordion-count">6</span>
                                <h2 class="accordion-header"> <button class="accordion-button collapsed course-details-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSix" aria-expanded="false" aria-controls="collapseSix">
                                 Creating Links (Hyperlinks) 
                                </button> </h2>
                                <div id="collapseSix" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                    <div class="accordion-body courses-syllabus-body">
                                        <ul>
                                            <li>Linking to Another Website </li>
                                            <li>Opening a Link in a New Tab  </li>
                                            <li>Linking to a Page Within Your Site</li>
                                            <li>Editing & Removing Links </li>
                                        </ul>
                                    </div>
                                </div>                                              
                            </div>
                            <div class="accordion-item course-details-accordion-main">
                                <span class="accordion-count">7</span>
                                <h2 class="accordion-header"> <button class="accordion-button collapsed course-details-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSeven" aria-expanded="false" aria-controls="collapseSeven">
                                Adding Images & Managing the Media Library </button> </h2>
                                <div id="collapseSeven" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                    <div class="accordion-body courses-syllabus-body">
                                        <ul>
                                            <li>SynAdding an Image to a Post or Page tax </li>
                                            <li>Editing Images (Manually Resizing, Cropping, & Rotating) </li>
                                            <li>Media Settings (Customizing the Size of Thumbnail, Medium, & Large)  </li>
                                            <li>Adding a Featured Image </li>
                                            <li>Uploading Images & Files Directly Into the Media Library </li>
                                            <li>Editing & Deleting Images in the Media Library </li>
                                            <li>Deleting Unused Images (Cleaning Out the Media Library) </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div class="accordion-item course-details-accordion-main">
                                <span class="accordion-count">8</span>
                                <h2 class="accordion-header"> <button class="accordion-button collapsed course-details-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseEight" aria-expanded="false" aria-controls="collapseEight">
                                Adding an Image Gallery </button> </h2>
                                <div id="collapseEight" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                    <div class="accordion-body courses-syllabus-body">
                                        <ul>
                                            <li>Adding an Image Gallery       </li>
                                            <li>Editing an Existing Image Gallery </li>  
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div class="accordion-item course-details-accordion-main">
                                <span class="accordion-count">9</span>
                                <h2 class="accordion-header"> <button class="accordion-button collapsed course-details-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseNine" aria-expanded="false" aria-controls="collapseNine">
                                Adding Video  </button> </h2>
                                <div id="collapseNine" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                    <div class="accordion-body courses-syllabus-body">
                                        <ul>
                                            <li>Embedding YouTube Videos  </li>
                                            <li>Uploading a Video File </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div class="accordion-item course-details-accordion-main">
                                <span class="accordion-count">10</span>
                                <h2 class="accordion-header"> <button class="accordion-button collapsed course-details-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTen" aria-expanded="false" aria-controls="collapseTen">
                                Categories, Tags, & Reading Settings </button> </h2>
                                <div id="collapseTen" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                    <div class="accordion-body courses-syllabus-body">
                                        <ul>
                                          <li>Categories & Tags Explained </li>
                                          <li>Creating & Editing Categories </li>
                                          <li>Changing the “Uncategorized” Default Category Name</li>
                                          <li>Setting the Default Category </li>
                                          <li>Creating & Editing Tags </li>
                                          <li>Changing Categories/Tags for Multiple Posts  </li>
                                          <li>Reading Settings  </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            <div class="accordion-item course-details-accordion-main">
                                <span class="accordion-count">11</span>
                                <h2 class="accordion-header"> <button class="accordion-button collapsed course-details-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseEleven" aria-expanded="false" aria-controls="collapseEleven">
                                 Widgets</button> </h2>
                                <div id="collapseEleven" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                    <div class="accordion-body courses-syllabus-body">
                                        <ul>
                                            <li>Editing & Adding Widgets  </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div class="accordion-item course-details-accordion-main">
                                <span class="accordion-count">12</span>
                                <h2 class="accordion-header"> <button class="accordion-button collapsed course-details-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwelve" aria-expanded="false" aria-controls="collapseTwelve">
                                Making Pages </button> </h2>
                                <div id="collapseTwelve" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                    <div class="accordion-body courses-syllabus-body">
                                        <ul>
                                            <li>Pages versus Posts  </li>
                                            <li>Creating a New Page </li>
                                            <li>Publishing a Page (Making it Live)</li>
                                            <li>Deleting a Page </li>
                                            <li>Changing the Page Order</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div class="accordion-item course-details-accordion-main">
                                <span class="accordion-count">13</span>
                                <h2 class="accordion-header"> <button class="accordion-button collapsed course-details-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThirteen" aria-expanded="false" aria-controls="collapseThirteen">
                                    Menus 
                                </button> </h2>
                                <div id="collapseThirteen" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                    <div class="accordion-body courses-syllabus-body">
                                        <ul>
                                            <li>About Menus & Locations </li>
                                            <li>Adding & Removing Links in Menus </li>
                                            <li>Creating Submenus </li>
                                            <li>Opening Menu Links in a New Tab </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div class="accordion-item course-details-accordion-main">
                                <span class="accordion-count">14</span>
                                <h2 class="accordion-header"> <button class="accordion-button collapsed course-details-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseForteen" aria-expanded="false" aria-controls="collapseForteen">
                                Installing Themes </button> </h2>
                                <div id="collapseForteen" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                    <div class="accordion-body courses-syllabus-body">
                                        <ul>
                                            <li>What Are WordPress Themes?  </li>
                                            <li>Where Do I Get WordPress Themes? </li>
                                            <li>Installing & Activating a Theme Manually </li>
                                            <li>Uploading & Activating a Theme</li>
                                            <li>Deleting a Theme </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div class="accordion-item course-details-accordion-main">
                                <span class="accordion-count">15</span>
                                <h2 class="accordion-header"> <button class="accordion-button collapsed course-details-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFifteen" aria-expanded="false" aria-controls="collapseFifteen">
                                Customizing Theme Appearance </button> </h2>
                                <div id="collapseFifteen" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                    <div class="accordion-body courses-syllabus-body">
                                        <ul>
                                            <li>Customizing Appearance</li>
                                            <li>Customizing the Site Identity (Logo, Title, & Tagline)  </li>
                                            <li>Adding a Site Icon (Favicon) </li>
                                            <li>Customizing the Header </li>
                                            <li>Customizing Colors</li>
                                            <li>Changing the Template Layout for a Page/Post </li>
                                            <li>Changing a Template Layout  </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div class="accordion-item course-details-accordion-main">
                                <span class="accordion-count">16</span>
                                <h2 class="accordion-header"> <button class="accordion-button collapsed course-details-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSixteen" aria-expanded="false" aria-controls="collapseSixteen">
                                    WordPress Plugins: About, Installing, & Updating </button> </h2>
                                <div id="collapseSixteen" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                    <div class="accordion-body courses-syllabus-body">
                                        <ul>
                                            <li>About WordPress Plugins</li>
                                            <li>Installing a WordPress Plugin  </li>
                                            <li>Updating Plugins  </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div class="accordion-item course-details-accordion-main">
                                <span class="accordion-count">17</span>
                                <h2 class="accordion-header"> <button class="accordion-button collapsed course-details-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSeventeen" aria-expanded="false" aria-controls="collapseSeventeen">
                                    WordPress Plugins You May Want to Install</button> </h2>
                                <div id="collapseSeventeen" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                    <div class="accordion-body courses-syllabus-body">
                                        <ul>
                                            <li>Recommended WordPress Plugins </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div class="accordion-item course-details-accordion-main">
                                <span class="accordion-count">18</span>
                                <h2 class="accordion-header"> <button class="accordion-button collapsed course-details-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseEighteen" aria-expanded="false" aria-controls="collapseEighteen">
                                SEO (Search Engine Optimization) </button> </h2>
                                <div id="collapseEighteen" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                    <div class="accordion-body courses-syllabus-body">
                                        <ul>
                                            <li>Creating SEO-Friendly Permalinks (URLs) for the Site </li>
                                            <li>Customizing the URL of an Individual Page/Post </li>
                                            <li>Setting Titles & Meta Descriptions with an SEO Plugin </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div class="accordion-item course-details-accordion-main">
                                <span class="accordion-count">19</span>
                                <h2 class="accordion-header"> <button class="accordion-button collapsed course-details-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseNinteen" aria-expanded="false" aria-controls="collapseNinteen">
                                Customizing WordPress </button> </h2>
                                <div id="collapseNinteen" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                    <div class="accordion-body courses-syllabus-body">
                                        <ul>
                                            <li>Page Builders: Customizable Page Layouts </li>
                                            <li>Theme Builders: Control the Website’s Look </li>
                                            <li>Child Themes  </li>
                                            <li>Custom Post Types </li>
                                            <li>Advanced Custom Fields</li>
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
                        What is WordPress, and why should I learn it?
                        </button>
                        </h2>
                        <div id="courseFaqOne" class="accordion-collapse collapse show" data-bs-parent="#courseFaqsAccordion">
                            <div class="accordion-body course-faqs-body">
                                <p>WordPress is a powerful and widely-used content management system (CMS) that allows you to create, manage, and customize websites without extensive coding knowledge. Learning WordPress is essential for building professional websites, blogs, and e-commerce stores, making it a valuable skill for web development and digital marketing</p>
                            </div>
                        </div>
                    </div>
                    <!-- two -->
                    <div class="accordion-item course-faqs-item">
                        <h2 class="accordion-header course-faqs-header">
                            <button class="accordion-button collapsed course-faqs-button" type="button" data-bs-toggle="collapse" data-bs-target="#courseFaqTwo" aria-expanded="false" aria-controls="courseFaqTwo">
                                Do I need prior web development knowledge to take this course?
                            </button>
                        </h2>
                        <div id="courseFaqTwo" class="accordion-collapse collapse" data-bs-parent="#courseFaqsAccordion">
                        <div class="accordion-body course-faqs-body">
                             <p>Prior web development knowledge is helpful but not required. This course is designed for beginners and will guide you through the basics before moving on to more advanced features and customization techniques.</p>
                        </div>
                        </div>
                    </div>
                    <!-- three -->
                    <div class="accordion-item course-faqs-item">
                        <h2 class="accordion-header course-faqs-header">
                        <button class="accordion-button collapsed course-faqs-button" type="button" data-bs-toggle="collapse" data-bs-target="#courseFaqThree" aria-expanded="false" aria-controls="courseFaqThree">
                            What will I learn in a WordPress course?
                        </button>
                        </h2>
                        <div id="courseFaqThree" class="accordion-collapse collapse" data-bs-parent="#courseFaqsAccordion">
                            <div class="accordion-body course-faqs-body">
                              <p>You will learn how to install and set up WordPress, customize themes, manage plugins, create and manage content, design layouts, optimize for SEO, and secure your website. The course will also cover advanced topics like custom theme development and e-commerce integration.</p>
                            </div>
                        </div>
                    </div>
                    <!-- four -->
                    <div class="accordion-item course-faqs-item">
                        <h2 class="accordion-header course-faqs-header">
                        <button class="accordion-button collapsed course-faqs-button" type="button" data-bs-toggle="collapse" data-bs-target="#courseFaqFour" aria-expanded="false" aria-controls="courseFaqFour">
                            How long does it take to become proficient in WordPress?
                        </button>
                        </h2>
                        <div id="courseFaqFour" class="accordion-collapse collapse" data-bs-parent="#courseFaqsAccordion">
                            <div class="accordion-body course-faqs-body">
                                <p>The time to become proficient in WordPress depends on your learning pace and practice. Typically, with consistent effort, you can expect to build a strong foundation in a few weeks, and with additional practice, become proficient within a few months.</p>
                            </div>
                        </div>
                    </div>
                    <!-- five -->
                     <div class="accordion-item course-faqs-item">
                        <h2 class="accordion-header course-faqs-header">
                            <button class="accordion-button collapsed course-faqs-button" type="button" data-bs-toggle="collapse" data-bs-target="#courseFaqFive" aria-expanded="false" aria-controls="courseFaqFive">
                                What career opportunities are available for those skilled in WordPress?
                            </button>
                        </h2>
                        <div id="courseFaqFive" class="accordion-collapse collapse" data-bs-parent="#courseFaqsAccordion">
                            <div class="accordion-body course-faqs-body">
                                <p>Career opportunities include roles such as Web Developer, WordPress Developer, Front-End Developer, Web Designer, and Content Manager. WordPress skills are in high demand across various industries, especially in digital marketing, e-commerce, and media</p>
                            </div>
                        </div>
                    </div>
                    <!-- six -->
                    <div class="accordion-item course-faqs-item">
                        <h2 class="accordion-header course-faqs-header">
                            <button class="accordion-button collapsed course-faqs-button" type="button" data-bs-toggle="collapse" data-bs-target="#courseFaqSix" aria-expanded="false" aria-controls="courseFaqSix">
                                Will I receive a certification upon completing the WordPress course?
                            </button>
                        </h2>
                        <div id="courseFaqSix" class="accordion-collapse collapse" data-bs-parent="#courseFaqsAccordion">
                            <div class="accordion-body course-faqs-body">
                                <p>Many WordPress courses offer a certification upon successful completion. This certification can validate your skills, enhance your resume, and increase your employability in the web development and digital marketing job markets</p>
                            </div>
                        </div>
                    </div>
                    <!-- seven -->
                    <div class="accordion-item course-faqs-item">
                        <h2 class="accordion-header course-faqs-header">
                            <button class="accordion-button collapsed course-faqs-button" type="button" data-bs-toggle="collapse" data-bs-target="#courseFaqSeven" aria-expanded="false" aria-controls="courseFaqSeven">
                                What tools and technologies will I use in this course?
                            </button>
                        </h2>
                        <div id="courseFaqSeven" class="accordion-collapse collapse" data-bs-parent="#courseFaqsAccordion">
                            <div class="accordion-body course-faqs-body">
                                You will use tools like the WordPress dashboard, page builders (such as Elementor or Gutenberg), and plugins for SEO, security, and e-commerce. You may also learn to work with integrated development environments (IDEs).
                            </div>
                        </div>
                    </div>
                    <!-- eight -->
                    <div class="accordion-item course-faqs-item">
                        <h2 class="accordion-header course-faqs-header">
                            <button class="accordion-button collapsed course-faqs-button" type="button" data-bs-toggle="collapse" data-bs-target="#courseFaqEight" aria-expanded="false" aria-controls="courseFaqEight">
                                How is WordPress different from other content management systems?
                            </button>
                        </h2>
                        <div id="courseFaqEight" class="accordion-collapse collapse" data-bs-parent="#courseFaqsAccordion">
                        <div class="accordion-body course-faqs-body">
                            <p>WordPress is known for its ease of use, flexibility, and large community support. Compared to other CMS platforms like Joomla, Drupal, or Wix, WordPress offers a balance of user-friendliness and powerful customization options, making it suitable for both beginners and experienced developers.</p>
                        </div>
                        </div>
                    </div>
                    <!-- nine -->
                    <div class="accordion-item course-faqs-item">
                        <h2 class="accordion-header course-faqs-header">
                            <button class="accordion-button collapsed course-faqs-button" type="button" data-bs-toggle="collapse" data-bs-target="#courseFaqNine" aria-expanded="false" aria-controls="courseFaqNine">
                                Can I work on real-world projects during this course?
                            </button>
                        </h2>
                        <div id="courseFaqNine" class="accordion-collapse collapse" data-bs-parent="#courseFaqsAccordion">
                            <div class="accordion-body course-faqs-body">
                                <p>Yes, this course includes practical projects where you will build real-world websites, including blogs, business sites, and online stores. These projects help you apply the concepts learned, gain hands-on experience, and build a portfolio to showcase your skills</p>
                            </div>
                        </div>
                    </div>
                    <!-- ten -->
                    <div class="accordion-item course-faqs-item">
                        <h2 class="accordion-header course-faqs-header">
                            <button class="accordion-button collapsed course-faqs-button" type="button" data-bs-toggle="collapse" data-bs-target="#courseFaqTen" aria-expanded="false" aria-controls="courseFaqTen">
                                What is the importance of learning WordPress for modern web development?
                            </button>
                        </h2>
                        <div id="courseFaqTen" class="accordion-collapse collapse" data-bs-parent="#courseFaqsAccordion">
                            <div class="accordion-body course-faqs-body">
                                <p>Learning WordPress is crucial for modern web development because it powers over 40% of all websites on the internet. Its versatility and ease of use make it a preferred choice for businesses, bloggers, and developers alike, ensuring your skills remain relevant and in demand.</p>
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

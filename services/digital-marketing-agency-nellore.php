<?php $service_file ="digital-marketing-agency-nellore"?>
<!DOCTYPE html>
<html lang="en">
<head>
    <?php include "../includes/header-links.php" ?>
    <link rel="stylesheet" href="../styles/services.css">
    <title>Digital Marketing Agency</title>
</head>
<body>
     <!-- ====== model to display after form submition==== -->
        <div class="modal fade" id="serviceModal" tabindex="-1" aria-labelledby="serviceModalLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <!-- <h5 class="modal-title" id="serviceModalLabel">Success</h5> -->
                        <!-- <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button> -->
                    </div>
                    <div class="modal-body" id="service-modal-body-msg"> </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">OK</button>
                    </div>
                </div>
            </div>
        </div>

     
<!-- ======form veritical modal====== -->      
    <div class="modal fade" id="centeredModal" tabindex="-1" aria-labelledby="centeredModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-dialog-scrollable">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title text-center" id="centeredModalLabel">Fill out the form</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body p-0">
                    <?php include '../includes/services-form.php' ?>
                </div>
            </div>
        </div>
    </div>         
  
    <div class="services-banner">
        <?php include "../includes/header.php"?>
        <div class="banner">
            <div class="container">
                <div class="row">
                    <div class="col-lg-6 col-12 order-2 order-lg-1">
                        <div >
                            <h1 class="banner-head"> <span>DIGITAL MARKETING</span> AGENCY</h1>    
                            <p class="banner-text">We provide professional web development services for businesses of all sizes, creating robust and scalable web applications. Our expert team delivers tailored solutions to meet your specific business needs, ensuring high performance and seamless user experiences.</p>
                        </div>   
                    </div>
                    <div class="col-lg-6 col-12 order-1 order-lg-2 ">
                        <img src="../assets/services/header.png" alt="header-img" class="img-fluid">
                    </div>
                </div>

            </div>
        </div>
    </div>
    <!-- ====Tech Stack=== -->
     <section class="tech-stack">
        <div class="container">
            <h2 class="head">Our Digital Marketing Services</h2>
            <div class="row pt-4">
                <div class="col-lg-5 col-12">
                    <ul class="nav nav-pills mb-3 flex-lg-column gap-3" id="pills-tab" role="tablist">
                        <li class="nav-item" role="presentation">
                            <button class="nav-link  active position-relative" id="pills-SMM-tab" data-bs-toggle="pill" data-bs-target="#pills-SMM" type="button" role="tab" aria-controls="pills-SMM" aria-selected="true">SOCIAL MEDIA MARKETING</button>
                        </li>
                        <li class="nav-item" role="presentation">
                            <button class="nav-link  position-relative" id="pills-performance-tab" data-bs-toggle="pill" data-bs-target="#pills-performance" type="button" role="tab" aria-controls="pills-performance" aria-selected="false">PERFORMANCE MARKETING</button>
                        </li>
                        <li class="nav-item" role="presentation">
                            <button class="nav-link  position-relative" id="pills-SEO-tab" data-bs-toggle="pill" data-bs-target="#pills-SEO" type="button" role="tab" aria-controls="pills-SEO" aria-selected="false">SEARCH ENGINE OPTIMIZATION</button>
                        </li>
                        <li class="nav-item" role="presentation">
                            <button class="nav-link  position-relative" id="pills-ui/ecomerce-tab" data-bs-toggle="pill" data-bs-target="#pills-ecomerce" type="button" role="tab" aria-controls="pills-ecomerce" aria-selected="false">E-COMMERCE MARKETING</button>
                        </li>
                        <li class="nav-item" role="presentation">
                            <button class="nav-link  position-relative" id="pills-ui/content-tab" data-bs-toggle="pill" data-bs-target="#pills-content" type="button" role="tab" aria-controls="pills-cotent" aria-selected="false">CONTENT MARKETING</button>
                        </li>
                        <li class="nav-item" role="presentation">
                            <button class="nav-link  position-relative" id="pills-ui/whatsapp-tab" data-bs-toggle="pill" data-bs-target="#pills-whatsapp" type="button" role="tab" aria-controls="pills-whatsapp" aria-selected="false">WHATSAPP MARKETING</button>
                        </li>
                    </ul>
                </div>
                <div class="col-lg-7 col-12">
                    <div class="tab-content mt-4 mt-lg-0" id="pills-tabContent">
                        <div class="tab-pane fade show active" id="pills-SMM" role="tabpanel" aria-labelledby="pills-SMM-tab">
                            <h2>SOCIAL MEDIA MARKETING</h2>
                            <p>Expand your brand’s reach and engage with your audience on platforms where they spend their time. We create targeted social media campaigns that build brand awareness, foster community, and drive conversions.</p>
                            <div class="mt-3 d-flex justify-content-center" >
                                <img src="../assets/services/digital-marketing/digital-services/social-media-marketing.svg" alt="SMM" class="tech-logo">
                            </div>
                        </div>
                        <div class="tab-pane fade" id="pills-performance" role="tabpanel" aria-labelledby="pills-performance-tab">
                            <h2>PERFORMANCE MARKETING</h2>
                            <p>Maximize your ROI with data-driven performance marketing strategies. We focus on delivering measurable results by optimizing campaigns across various channels to achieve your business goals.</p>
                            <div class="mt-3 d-flex justify-content-center" >
                                <img src="../assets/services/digital-marketing/digital-services/perfomance-marketing.svg" alt="performance-marketing" class="tech-logo">
                            </div>
                      
                        </div>
                        <div class="tab-pane fade" id="pills-SEO" role="tabpanel" aria-labelledby="pills-SEO-tab">
                            <h2>SEARCH ENGINE OPTIMIZATION</h2>
                            <p>Improve your website’s visibility and ranking on search engines with our comprehensive SEO strategies. We enhance your organic traffic by optimizing your site’s content, structure, and keyword targeting.. </p>
                            <div class="mt-3 d-flex justify-content-center" >
                                <img src="../assets/services/digital-marketing/digital-services/search-engine-optimization.svg" alt="search-engine-optimization" class="tech-logo">
                            </div>
                          
                        </div>
                        <div class="tab-pane fade" id="pills-ecomerce" role="tabpanel" aria-labelledby="pills-ecomerce">
                            <h2>E-COMMERCE MARKETING</h2>
                            <p>Boost your online sales with tailored e-commerce marketing solutions. From product promotion to customer retention strategies, we help you drive conversions and grow your online store’s revenue.</p> 
                            <div class="mt-3 d-flex justify-content-center" >
                                <img src="../assets/services/digital-marketing/digital-services/e-commerce-marketing.svg" alt="e-commerce-marketing" class="tech-logo">
                            </div>
                       
                        </div>
                        <div class="tab-pane fade" id="pills-content" role="tabpanel" aria-labelledby="pills-content">
                            <h2>CONTENT MARKETING</h2>
                            <p>Engage and inform your audience with compelling content that resonates. Our content marketing services focus on creating valuable and relevant content that strengthens your brand and drives customer loyalty.</p>
                            <div class="mt-3 d-flex justify-content-center" >
                                <img src="../assets/services/digital-marketing/digital-services/content-marketing.svg" alt="content-marketing" class="tech-logo">
                            </div>
                        
                        </div>
                        <div class="tab-pane fade" id="pills-whatsapp" role="tabpanel" aria-labelledby="pills-whatsapp">
                            <h2>WHATSAPP MARKETING</h2>
                            <p>Reach your customers directly with personalized WhatsApp marketing campaigns. We help you connect with your audience through instant messaging, promoting offers, updates, and more in a highly engaging format.</p>
                            <div class="mt-3 d-flex justify-content-center" >
                                <img src="../assets/services/digital-marketing/digital-services/whatsapp-marketing.svg" alt="whatsapp-marketing" class="tech-logo">
                            </div>
                         
                        </div>


                    </div>

                </div>
            </div>
        </div>
     </section>
    <!-- ================== -->

    <!-- ====Uncertain development needs==== -->
   <section class="uncertain">
        <div class="container">
            <div class="d-flex flex-column  gap-5 align-items-center text-center">
                <div>
                    <h2>Uncertain About Your Digital Marketing Strategy?</h2>
                    <p>Let us help you navigate the digital landscape. Connect with our experts for tailored advice and solutions.</p>
                </div>
                
                <button type="button" class="req-btn"  data-bs-toggle="modal" data-bs-target="#centeredModal">     
                    Request a Consultation
                </button>
            </div>
        </div>
   </section>

   <!-- ====w3technologies serves=== -->
 <section class="ind-serves">
    <div class="container">
        <h2 class="head"><span>Benefits</span> of Choosing Our Services</h2>
        <div class="industies d-flex flex-wrap gap-3  justify-content-center mt-4">
            <div class="card " >
                <div class="d-flex flex-column align-items-center gap-3">
                    <img src="../assets/services/digital-marketing/increased-online-visibility.svg" class="ind-img" alt="increased-online-visibility">
                    <h5 class="card-title pt-2">Increased Online Visibility</h5>
                </div>
            </div>
            <div class="card " >
                <div class="d-flex flex-column align-items-center gap-3">
                    <img src="../assets/services/digital-marketing/targeted-marketing.svg" class="ind-img" alt="Targeted-Marketing">
                    <h5 class="card-title pt-2">Targeted Marketing</h5>
                </div>
            </div>
            <div class="card " >
                <div class="d-flex flex-column align-items-center gap-3">
                    <img src="../assets/services/digital-marketing/measurable-results.svg" class="ind-img" alt="mesurable-results">
                    <h5 class="card-title pt-2">Measurable Results</h5>
                </div>
            </div>
            <div class="card " >
                <div class="d-flex flex-column align-items-center gap-3">
                    <img src="../assets/services/digital-marketing/enhanced-brand.svg" class="ind-img" alt="enhance-brand">
                    <h5 class="card-title pt-2">Enhanced Brand Reputation</h5>
                </div>
            </div>
            <div class="card " >
                <div class="d-flex flex-column align-items-center gap-3">
                    <img src="../assets/services/digital-marketing/cost-Effectiveness.svg" class="ind-img" alt="cost-effectiveness">
                    <h5 class="card-title pt-2">Cost-Effectiveness</h5>
                </div>
            </div>
            
        </div>
    </div>
 </section>
 <!-- form -section -->
  <section class="services-form-section">
    <!-- ==form== -->
     <div class="container">
        <div class="text-center">
            <h2>Let Us Know Your Needs </h2>
            <h3 class="mt-2">Just Fill Out the Form</h3>
        </div>   
        <form  method='post' onsubmit="return serviceformValidation(this)" >
            <?php echo "<input type=\"hidden\" name=\"ser-service-file\" value=\"$service_file\">";?>    
            <div class="row">
                <div class="col-12 col-lg-6">
                    <div class="form-ele mb-3">  
                        <input type="text" class="form-control" name="ser-name" id="ser-name" placeholder="Enter your Name" />
                        <span id="ser-name-error" class="form-error"></span>
                    </div>
                </div>
                <div class="col-12 col-lg-6">
                    <div class="form-ele mb-3 ">
                        <input type="text"  class="form-control"  id="ser-email"  name="ser-email"  placeholder="Enter your  Email"  />
                        <span id="ser-email-error" class="form-error"></span>
                    </div>
                </div>
            </div>
            
            <div class="row">
                <div class="col-12 col-lg-6">
                    <div class="form-ele mb-3">   
                        <input type="tel" class="form-control ser-contact-no " name="ser-contact-no" id="ser-contact-no" placeholder="Enter your Contact Number" />
                        <span id="ser-contact-no-error" class="form-error"></span>
                    </div>
                </div>
                <div class="col-12 col-lg-6">
                    <div class="form-ele mb-3">   
                        <input type="tel" class="form-control ser-whatsapp-no" name="ser-whatsapp-no" id="ser-whatsapp-no" placeholder="Enter your Whatsapp Number" />
                        <div class="form-check">
                            <input class="form-check-input ser-same-contact-no" type="checkbox" value="" id="ser-same-contact-no" name="ser-same-contact-no"  >
                            <label class="form-check-label" for="flexCheckDefault"> whatsapp number same as contact number </label>
                        </div>
                        <span id="ser-whatsapp-no-error" class="form-error"></span>
                    </div>
                </div>
            </div>
             
            <div class="row">
                <div class="col-12 col-lg-6">
                    <div class="form-ele mb-3 mt-lg-4">  
                        <input type="text" class="form-control" name="ser-company" id="ser-company" placeholder="Enter your Comapny Name" />
                        <span id="ser-company-error" class="form-error"></span>
                    </div>
                </div>
                <div class="col-12 col-lg-6">
                    <div class="form-ele mb-3">
                        <label for="ser-pref-time">Prefer time to call</label>
                        <input type="time" class="form-control" name="ser-pref-time" id="ser-pref-time" />
                    </div>
                </div>
            </div>
            <div class="form-ele mb-3">
                <textarea class="form-control" name="ser-message" id="ser-message" placeholder="How can we help you?" rows="4"></textarea>
                <span id="ser-message-error" class="form-error"></span>
            </div>
            <input type="submit" class="submit-btn">
            <p class="mt-2 serviceform-submit-success-message form-success" ><b>Thank you!, your message was sent successfully. </b> <br>Stay tuned; we'll get in touch with you soon.</p>
            <p class="mt-2 serviceform-submit-error-message form-error" ><b>Oops!, Something Went Wrong. </b><br>Please try again later or email us directly</p>
        </form>
     </div>
  </section>


<!-- ---footer -->
    <?php include "../includes/footer.php" ?>
    <?php include "../includes/footer-links.php" ?>
    <script src="../js/services.js"></script>
</body>
</html>

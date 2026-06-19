<?php $service_file = "web-development-service"?>
<!DOCTYPE html>
<html lang="en">
<head>
    <?php include "../includes/header-links.php" ?>
    <link rel="stylesheet" href="../styles/services.css">
    <meta name="description" content="Our custom web development services ensure your online presence aligns perfectly with your business objectives. Contact W3 Technologies to know more.">
    <title>Get Website Design & Development Services for Your Website</title>
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
                            <h1 class="banner-head"> <span>WEB DEVELOPMENT</span> SERVICES</h1>    
                            <p class="banner-text">We provide professional web development services for businesses of all sizes, creating robust and scalable web applications. Our expert team delivers tailored solutions to meet your specific business needs, ensuring high performance and seamless user experiences.</p>
                        </div>   
                    </div>
                    <div class="col-lg-6 col-12 order-1 order-lg-2 ">
                        <img src="..//assets/services/header.png" alt="header-img" class="img-fluid">
                    </div>
                </div>

            </div>
        </div>
    </div>
    <!-- ====Tech Stack=== -->
     <section class="tech-stack">
        <div class="container">
            <h2 class="head">Tech Stack</h2>
            <div class="row pt-4">
                <div class="col-lg-5 col-12">
                    <ul class="nav nav-pills mb-3 flex-lg-column gap-3" id="pills-tab" role="tablist">
                        <li class="nav-item" role="presentation">
                            <button class="nav-link  active position-relative" id="pills-frontEnd-tab" data-bs-toggle="pill" data-bs-target="#pills-frontEnd" type="button" role="tab" aria-controls="pills-frontEnd" aria-selected="true">FRONT-END DEVELOPMENT</button>
                        </li>
                        <li class="nav-item" role="presentation">
                            <button class="nav-link  position-relative" id="pills-backEnd-tab" data-bs-toggle="pill" data-bs-target="#pills-backEnd" type="button" role="tab" aria-controls="pills-backEnd" aria-selected="false">BACK-END DEVELOPMENT</button>
                        </li>
                        <li class="nav-item" role="presentation">
                            <button class="nav-link  position-relative" id="pills-ui/uxDesign-tab" data-bs-toggle="pill" data-bs-target="#pills-ui/uxDesign" type="button" role="tab" aria-controls="pills-ui/uxDesign" aria-selected="false">UI/UX DESIGN</button>
                        </li>
                        <li class="nav-item" role="presentation">
                            <button class="nav-link  position-relative" id="pills-ui/cmsDevelopment-tab" data-bs-toggle="pill" data-bs-target="#pills-cmsDevelopment" type="button" role="tab" aria-controls="pills-cmsDevelopment" aria-selected="false">CMS DEVELOPMENT</button>
                        </li>
                    </ul>
                </div>
                <div class="col-lg-7 col-12">
                    <div class="tab-content mt-4 mt-lg-0" id="pills-tabContent">
                        <div class="tab-pane fade show active" id="pills-frontEnd" role="tabpanel" aria-labelledby="pills-frontEnd-tab">
                            <h2>FRONT-END DEVELOPMENT</h2>
                            <p>Boost your business with attractive and functional front-end solutions, designed to offer smooth user experiences and effectively tackle your specific industry challenges </p>
                            <div class="mt-5 d-flex gap-5 flex-wrap" >
                                <img src="../assets/services/web-development/tech-stack/Html.svg" alt="html" class="tech-logo">
                                <img src="../assets/services/web-development/tech-stack/Css.svg" alt="css" class="tech-logo">
                                <img src="../assets/services/web-development/tech-stack/JS.svg" alt="js" class="tech-logo">
                                <img src="../assets/services/web-development/tech-stack/angular-icon.svg" alt="angular" class="tech-logo">
                                <img src="../assets/services/web-development/tech-stack/react-icons.svg" alt="react" class="tech-logo">
                                <img src="../assets/services/web-development/tech-stack/vue.svg" alt="vue" class="tech-logo">
                            </div>
                        </div>
                        <div class="tab-pane fade" id="pills-backEnd" role="tabpanel" aria-labelledby="pills-backEnd-tab">
                            <h2>BACK-END DEVELOPMENT</h2>
                            <p>Build a strong foundation for your applications with solid, scalable, and secure back-end systems, customized to support your business needs and handle data tasks seamlessly.</p>

                            <div class="mt-3 d-flex gap-5 flex-wrap" >
                                <img src="../assets/services/web-development/tech-stack/PHP.svg" alt="php" class="tech-logo">
                                <img src="../assets/services/web-development/tech-stack/nodejs.svg" alt="node" class="tech-logo">
                                <img src="../assets/services/web-development/tech-stack/laravel-2.svg" alt="laravel" class="tech-logo">
                                <img src="../assets/services/web-development/tech-stack/dotnet-icon.svg" alt="dotnet" class="tech-logo">
                            </div>
                        </div>
                        <div class="tab-pane fade" id="pills-ui/uxDesign" role="tabpanel" aria-labelledby="pills-ui/uxDesign-tab">
                            <h2>UI/UX DESIGN</h2>
                            <p>Boost user satisfaction and increase engagement with easy-to-use, visually attractive UI/UX designs that provide smooth and enjoyable experiences on all devices and platforms. </p>
                            <div class="mt-3 d-flex gap-5 flex-wrap" >
                                <img src="../assets/services/web-development/tech-stack/Figma.svg" alt="figma" class="tech-logo">
                                <img src="../assets/services/web-development/tech-stack/miro-.svg" alt="miro" class="tech-logo">
                                <img src="../assets/services/web-development/tech-stack/Ps.svg" alt="ps" class="tech-logo">
                                <img src="../assets/services/web-development/tech-stack/xd.svg" alt="xd" class="tech-logo">
                                <img src="../assets/services/web-development/tech-stack/adobe-illustrator-icon.svg" alt="illustrator" class="tech-logo">
                            </div>
                        </div>
                        <div class="tab-pane fade" id="pills-cmsDevelopment" role="tabpanel" aria-labelledby="pills-cmsDevelopment">
                            <h2>CMS DEVELOPMENT</h2>
                            <p>Our CMS expertise spans platforms like Magento, Shopify, WordPress, and more. We tailor solutions to your needs, ensuring seamless content management and site administration.</p>
                            <div class="mt-3 d-flex gap-5 flex-wrap" >
                                <img src="../assets/services/web-development/tech-stack/Drupall.svg" alt="drupall" class="tech-logo">
                                <img src="../assets/services/web-development/tech-stack/Sharepoint.svg" alt="sharepoint" class="tech-logo">
                                <img src="../assets/services/web-development/tech-stack/Sitecore.svg" alt="sitecore" class="tech-logo">
                                <img src="../assets/services/web-development/tech-stack/Wix.svg" alt="wix" class="tech-logo">
                                <img src="../assets/services/web-development/tech-stack/Wordpress.svg" alt="wordpress" class="tech-logo">
                                <img src="../assets/services/web-development/tech-stack/Ghost CMS,.svg" alt="ghost" class="tech-logo">
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
                    <h2>Uncertain About Your Development Needs?</h2>
                    <p>We're here to guide you. Talk to our experts for personalized recommendations.</p>
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
        <h2 class="head"><span>Industries</span> W3 Technologies Serves</h2>
        <div class="industies d-flex flex-wrap gap-3  justify-content-center mt-4">
            <div class="card " >
                <div class="d-flex flex-column align-items-center gap-3">
                    <img src="../assets/services/web-development/industries/e-commerce.svg" class="ind-img" alt="e-commerce">
                    <h5 class="card-title pt-2">E-commerce</h5>
                </div>
            </div>
            <div class="card " >
                <div class="d-flex flex-column align-items-center gap-3">
                    <img src="../assets/services/web-development/industries/education.svg" class="ind-img" alt="education">
                    <h5 class="card-title pt-2">Education</h5>
                </div>
            </div>
            <div class="card " >
                <div class="d-flex flex-column align-items-center gap-3">
                    <img src="../assets/services/web-development/industries/food.svg" class="ind-img" alt="food">
                    <h5 class="card-title pt-2">Food</h5>
                </div>
            </div>
            <div class="card " >
                <div class="d-flex flex-column align-items-center gap-3">
                    <img src="../assets/services/web-development/industries/healthcare.svg" class="ind-img" alt="health-care">
                    <h5 class="card-title pt-2">Health Care</h5>
                </div>
            </div>
            <div class="card " >
                <div class="d-flex flex-column align-items-center gap-3">
                    <img src="../assets/services/web-development/industries/infrastructure.svg" class="ind-img" alt="Infrastructure">
                    <h5 class="card-title pt-2">Infrastructure</h5>
                </div>
            </div>
            <div class="card " >
                <div class="d-flex flex-column align-items-center gap-3">
                    <img src="../assets/services/web-development/industries/iT.svg" class="ind-img" alt="IT">
                    <h5 class="card-title pt-2">IT</h5>
                </div>
            </div>
            <div class="card " >
                <div class="d-flex flex-column align-items-center gap-3">
                    <img src="../assets/services/web-development/industries/sports.svg" class="ind-img" alt="Sports">
                    <h5 class="card-title pt-2">Sports</h5>
                </div>
            </div>
            <div class="card " >
                <div class="d-flex flex-column align-items-center gap-3">
                    <img src="../assets/services/web-development/industries/travels.svg" class="ind-img" alt="Travels">
                    <h5 class="card-title pt-2">Travels</h5>
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
            <p class="mt-2 serviceform-submit-success-message form-success"><b>Thank you!, your message was sent successfully. </b> <br>Stay tuned; we'll get in touch with you soon.</p>
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

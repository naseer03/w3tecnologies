<?php $course="Tally Prime" ;
$course_file ="tally-prime-nellore";
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <!-- header-links -->
     <?php include "../includes/header-links.php" ?>
    <link rel="stylesheet" href="../styles/courses/course-stack.css">
    <title>Tally Prime</title>
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
                    <!-- <img src="assets/courses/ReactJs.svg" alt="reactjs">
                    <img src="assets/courses/ExpressJs.svg" alt="expressjs"> -->
                    <div class="course-banner-heading-main">
                        <h1>Tally</h1>
                         <div class="course-banner-sub">
                            <span>Prime</span>
                            <!-- <span>languages</span> -->
                        </div>
                    </div>
                    <!-- <img src="assets/courses/MongoDB.svg" alt="mangoDB">
                    <img src="assets/courses/Node.js.svg" alt="nodejs"> -->
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
                        <h2><span>About</span> Tally Prime</h2>
                        <p><span>Tally is powerful accounting software</span>, which is driven by a technology called concurrent multi-lingual accelerated technology engine. It is easy to use software and is designed to simply complex day to day activities associated in an enterprise.</p>
                        <p>Tally provides comprehensive solution around accounting principles, inventory and data integrity. Tally also has feature encompassing global business. Tally software comes with easy to use interface thus making it operationally simple.</p>
                        <p>Tally accounting software provides a solution around inventory management, stock management, invoicing, purchase order management, discounting, stock valuation methodology </p>
                    </div>
                </div>
                  <!-- Button to trigger modal -->
                        <button type="button" class="model-blk-btn"  data-bs-toggle="modal" data-bs-target="#centeredModal">
                           <span>Download</span> | Tally Prime Course Syllabus
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
                <h2>Tally Prime Course <br><span>Breakdown</span></h2>
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
                            <span>Download</span> | Tally Prime Course Syllabus
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
                                Company Info Menu 
                                </button>
                                </h2>
                                <div id="collapseOne" class="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                                    <div class="accordion-body courses-syllabus-body">
                                        <ul>
                                            <li>Select Company </li>
                                            <li>Shut company </li>
                                            <li>Create company </li>
                                            <li>Alter company </li>
                                            <li>Security control </li>
                                            <li>Change tally vault </li>
                                            <li>Split company data </li>
                                            <li>Backup </li>
                                            <li>Restore </li>
                                            <li>Tally audit feature</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div class="accordion-item course-details-accordion-main">
                                <span class="accordion-count">2</span>
                                <h2 class="accordion-header">
                                <button class="accordion-button collapsed course-details-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                Accounting Information 
                                </button>
                                </h2>
                                <div id="collapseTwo" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                    <div class="accordion-body courses-syllabus-body">
                                        <ul>
                                        <li>Accounting Configuration & Features </li>
                                        <li>Group Creation </li>
                                        <li>Multiple Group Creation </li>
                                        <li>Ledger Creation </li>
                                        <li>Multiple Ledger Creation </li>
                                        <li>New Voucher Creation </li>
                                        <li>Advance Ledger Creation </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div class="accordion-item course-details-accordion-main">
                                <span class="accordion-count">3</span>
                                <h2 class="accordion-header">
                                <button class="accordion-button collapsed course-details-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                Inventory Information 
                                </button>
                                </h2>
                                <div id="collapseThree" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                    <div class="accordion-body courses-syllabus-body">
                                        <ul>
                                        <li>Inventory configuration & features </li>
                                        <li>Inventory info. Menu </li>
                                        <li>Stock groups </li>
                                        <li>Stock categories </li>
                                        <li>Stock item </li>
                                        <li>Unit of measurement </li>
                                        <li>Bills of materials </li>
                                        <li>Locations / Godowns </li>
                                        <li>Batches & Expiry </li>
                                        <li>Inventory voucher types </li>
                                        <li>HSN Code Updates</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div class="accordion-item course-details-accordion-main">
                                <span class="accordion-count">4</span>
                                <h2 class="accordion-header">
                                <button class="accordion-button collapsed course-details-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                                Voucher Entry 
                                </button>
                                </h2>
                                <div id="collapseFour" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                    <div class="accordion-body courses-syllabus-body">
                                        <ul>
                                            <li>Accounting voucher </li>
                                            <li>Inventory voucher </li>
                                            <li>optional & non-accounting voucher </li>
                                            <li>Order processing </li>
                                            <li>Advanced voucher entry</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            <div class="accordion-item course-details-accordion-main">
                                <span class="accordion-count">5</span>
                                <h2 class="accordion-header">
                                <button class="accordion-button collapsed course-details-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
                                Advanced Accounting Features 
                                </button>
                                </h2>
                                <div id="collapseFive" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                    <div class="accordion-body courses-syllabus-body">
                                        <ul>
                                            <li>Cost category & cost centres </li>
                                            <li>Budgets </li>
                                            <li>Interest calculations </li>
                                            <li>Cheque printing  </li>
                                            <li>Credit limits</li>
                                            <li>Scenario management </li>
                                            <li>Reorder levels & reorder quantity </li>
                                            <li>Price level & price lists </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div class="accordion-item course-details-accordion-main">
                                <span class="accordion-count">6</span>
                                <h2 class="accordion-header">
                                <button class="accordion-button collapsed course-details-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSix" aria-expanded="false" aria-controls="collapseSix">
                                Quick setup 
                                </button>
                                </h2>
                                <div id="collapseSix" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                    <div class="accordion-body courses-syllabus-body">
                                        <ul>
                                          <li>Tally .net</li>
                                          <li>Excise for manufactures </li>
                                          <li>Excise for dealer </li>
                                          <li>Value-Added Tax </li>
                                          <li>Tax deducted at source </li>
                                          <li>Tax collected at source </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div class="accordion-item course-details-accordion-main">
                                <span class="accordion-count">7</span>
                                <h2 class="accordion-header">
                                <button class="accordion-button collapsed course-details-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSeven" aria-expanded="false" aria-controls="collapseSeven">
                                Taxation  
                                </button>
                                </h2>
                                <div id="collapseSeven" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                    <div class="accordion-body courses-syllabus-body">
                                        <ul>
                                           <li>Excise for manufacture </li>
                                           <li>Service tax </li>
                                           <li>Tax deducted at source(TDS)&TCS </li>
                                           <li>Value added tax(VAT)  </li>
                                           <li>Central state tax(CST) </li>
                                           <li>Payroll features of Tally</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div class="accordion-item course-details-accordion-main">
                                <span class="accordion-count">8</span>
                                <h2 class="accordion-header">
                                <button class="accordion-button collapsed course-details-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseEight" aria-expanded="false" aria-controls="collapseEight">
                                Data management & Administration 
                                </button>
                                </h2>
                                <div id="collapseEight" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                    <div class="accordion-body courses-syllabus-body">
                                        <ul>
                                            <li>Backup & Restore </li>
                                            <li>Split a company, export & Import of data </li>
                                            <li>E-Capabilities (E-mail a report from tally) </li>
                                            <li>Uploading the reports generated from tally </li>
                                            <li>Tally ODBC, Inward connectivity </li>
                                            <li>Security controls </li>
                                            <li>Tally Audit Feature </li>
                                            <li>Tally Vault</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div class="accordion-item course-details-accordion-main">
                                <span class="accordion-count">9</span>
                                <h2 class="accordion-header">
                                <button class="accordion-button collapsed course-details-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseNine" aria-expanded="false" aria-controls="collapseNine">
                                Reports 
                                </button>
                                </h2>
                                <div id="collapseNine" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                    <div class="accordion-body courses-syllabus-body">
                                        <ul>
                                            <li>Display financial statements</li>
                                            <li>Display profit & loss A/c</li>
                                            <li>Display trial balance  </li>
                                            <li>Display registers & ledgers  </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div class="accordion-item course-details-accordion-main">
                                <span class="accordion-count">10</span>
                                <h2 class="accordion-header">
                                <button class="accordion-button collapsed course-details-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTen" aria-expanded="false" aria-controls="collapseTen">
                                Online Taxation Return 
                                </button>
                                </h2>
                                <div id="collapseTen" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                    <div class="accordion-body courses-syllabus-body">
                                        <ul>
                                            <li>Fill online ITR(Income Tax Return) download and filling forms </li>
                                            <li>Fill online VAT,CST Return </li>
                                            <li>Excise Return & Forms </li>
                                            <li>Online service tax return </li>
                                            <li>TCS,TDS return </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div class="accordion-item course-details-accordion-main">
                                <span class="accordion-count">11</span>
                                <h2 class="accordion-header">
                                <button class="accordion-button collapsed course-details-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseEleven" aria-expanded="false" aria-controls="collapseEleven">
                                Introduction to GST 
                                </button>
                                </h2>
                                <div id="collapseEleven" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                    <div class="accordion-body courses-syllabus-body">
                                        <ul>
                                            <li>Concept of GST </li>
                                            <li>Rate of GST  </li>
                                            <li>GST in other countries </li>
                                            <li>Categories of GST  </li>
                                            <li>Other concepts</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div class="accordion-item course-details-accordion-main">
                                <span class="accordion-count">12</span>
                                <h2 class="accordion-header">
                                <button class="accordion-button collapsed course-details-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwelve" aria-expanded="false" aria-controls="collapseTwelve">
                                GST (Goods & Services Tax)  
                                </button>
                                </h2>
                                <div id="collapseTwelve" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                    <div class="accordion-body courses-syllabus-body">
                                        <ul>
                                            <li>Start Using Tally.ERP9 For GST Compliance  </li>
                                            <li>Activating GST For Your Company </li>
                                            <li>Setting Up GST Rates </li>
                                            <li>Updating Stock Items and Stock Groups for GST Compliance </li>
                                            <li>Updating a Service Ledger for GST Compliance </li>
                                            <li>Updating Sales and Purchase Ledgers for GST Compliance </li>
                                            <li>Updating Party GSTIN </li>
                                            <li>Creating GST Ledgers </li>
                                            <li>Creating Income and Expense Ledgers </li>
                                            <li>Recording Sales and Printing Invoices </li>
                                            <li>Recording Purchases </li>
                                            <li>Recording a Tax Payment </li>
                                            <li>Transferring Tax Credits of VAT, excise and service tax to GST </li>
                                            <li>Sales - Nil Rated, Exempt, SEZ, and Deemed Export </li>
                                            <li>Recording Sales Returns </li>
                                            <li>Recording Purchase Returns </li>
                                            <li>Recording Export Sales </li>
                                            <li>Reverse Charge under GST </li>
                                            <li>Recording an Advance Receipt from Customer  </li>
                                            <li>Recording an Advance Payment to Supplier</li>
                                            <li>Recording Journal Vouchers for Adjustments Against Tax Credit </li>
                                            <li>Recording a Journal Voucher for TDS Adjustment </li>
                                            <li>Recording a Journal Voucher for TCS Adjustment </li>
                                            <li>Recording a Journal Voucher for Refund of Tax Credit </li>
                                            <li>Recording a Journal Voucher for ISD Credit </li>
                                            <li>Recording a Journal Voucher for Transitional Credit </li>
                                            <li>Recording Journal Vouchers for Other Liabilities </li>
                                            <li>Recording Journal Vouchers for Reversal of Tax Credit </li>
                                            <li>GSTR-1 </li>
                                            <li>Returns Summary</li>
                                            <li>Particulars (Computation Details)  </li>
                                            <li>Summary of Exceptions </li>
                                            <li>Table-wise GSTR-1  </li>
                                            <li>Status Reconciliation </li>
                                            <li>Exporting GSTR-1 </li>
                                            <li>Challan Reconciliation</li>
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
                        What is Tally Prime, and why should I learn it?
                        </button>
                        </h2>
                        <div id="courseFaqOne" class="accordion-collapse collapse show" data-bs-parent="#courseFaqsAccordion">
                            <div class="accordion-body course-faqs-body">
                                <p>Tally Prime is a popular accounting software used by businesses for managing financial transactions, inventory, and payroll. Learning Tally Prime is beneficial because it helps streamline accounting processes, ensures compliance with financial regulations, and enhances employability in accounting and finance roles.</p>
                            </div>
                        </div>
                    </div>
                    <!-- two -->
                    <div class="accordion-item course-faqs-item">
                        <h2 class="accordion-header course-faqs-header">
                        <button class="accordion-button collapsed course-faqs-button" type="button" data-bs-toggle="collapse" data-bs-target="#courseFaqTwo" aria-expanded="false" aria-controls="courseFaqTwo">
                            Do I need any prior accounting knowledge to learn Tally Prime?
                        </button>
                        </h2>
                        <div id="courseFaqTwo" class="accordion-collapse collapse" data-bs-parent="#courseFaqsAccordion">
                            <div class="accordion-body course-faqs-body">
                                <p>While having basic accounting knowledge can be helpful, it is not mandatory to learn Tally Prime. The course is designed to teach you both accounting concepts and the practical use of Tally Prime from the ground up.</p>
                            </div>
                        </div>
                    </div>
                    <!-- three -->
                    <div class="accordion-item course-faqs-item">
                        <h2 class="accordion-header course-faqs-header">
                            <button class="accordion-button collapsed course-faqs-button" type="button" data-bs-toggle="collapse" data-bs-target="#courseFaqThree" aria-expanded="false" aria-controls="courseFaqThree">
                            What are the key features of Tally Prime?
                            </button>
                        </h2>
                        <div id="courseFaqThree" class="accordion-collapse collapse" data-bs-parent="#courseFaqsAccordion">
                            <div class="accordion-body course-faqs-body">
                                <p>Key features of Tally Prime include financial accounting, inventory management, tax compliance (GST, VAT), payroll processing, multi-currency support, banking integration, and advanced reporting capabilities. These features help businesses manage their finances efficiently</p>
                            </div>
                        </div>
                    </div>
                    <!-- four -->
                    <div class="accordion-item course-faqs-item">
                        <h2 class="accordion-header course-faqs-header">
                        <button class="accordion-button collapsed course-faqs-button" type="button" data-bs-toggle="collapse" data-bs-target="#courseFaqFour" aria-expanded="false" aria-controls="courseFaqFour">
                            How long does it take to learn Tally Prime?
                        </button>
                        </h2>
                        <div id="courseFaqFour" class="accordion-collapse collapse" data-bs-parent="#courseFaqsAccordion">
                            <div class="accordion-body course-faqs-body">
                                <p>The time required to learn Tally Prime varies depending on the depth of the course and your learning pace. Generally, it can take anywhere from a few weeks to a couple of months to become proficient in using Tally Prime for various accounting tasks.</p>
                            </div>
                        </div>
                    </div>
                    <!-- five -->
                     <div class="accordion-item course-faqs-item">
                        <h2 class="accordion-header course-faqs-header">
                        <button class="accordion-button collapsed course-faqs-button" type="button" data-bs-toggle="collapse" data-bs-target="#courseFaqFive" aria-expanded="false" aria-controls="courseFaqFive">
                            Will I receive a certification upon completing the Tally Prime course?
                        </button>
                        </h2>
                        <div id="courseFaqFive" class="accordion-collapse collapse" data-bs-parent="#courseFaqsAccordion">
                            <div class="accordion-body course-faqs-body">
                                <p>Many Tally Prime courses offer a certification upon successful completion. This certification can enhance your resume and demonstrate your proficiency in using Tally Prime to potential employers.</p>
                            </div>
                        </div>
                    </div>
                    <!-- six -->
                    <div class="accordion-item course-faqs-item">
                        <h2 class="accordion-header course-faqs-header">
                        <button class="accordion-button collapsed course-faqs-button" type="button" data-bs-toggle="collapse" data-bs-target="#courseFaqSix" aria-expanded="false" aria-controls="courseFaqSix">
                            Is Tally Prime suitable for small businesses?
                        </button>
                        </h2>
                        <div id="courseFaqSix" class="accordion-collapse collapse" data-bs-parent="#courseFaqsAccordion">
                        <div class="accordion-body course-faqs-body">
                            <p>Yes, Tally Prime is suitable for businesses of all sizes, including small and medium enterprises (SMEs). It offers scalable solutions that cater to the needs of small businesses, helping them manage their financial data, comply with tax regulations, and generate insightful reports.</p>
                        </div>
                        </div>
                    </div>
                    <!-- seven -->
                    <div class="accordion-item course-faqs-item">
                        <h2 class="accordion-header course-faqs-header">
                        <button class="accordion-button collapsed course-faqs-button" type="button" data-bs-toggle="collapse" data-bs-target="#courseFaqSeven" aria-expanded="false" aria-controls="courseFaqSeven">
                            Can Tally Prime be used for managing inventory?
                        </button>
                        </h2>
                        <div id="courseFaqSeven" class="accordion-collapse collapse" data-bs-parent="#courseFaqsAccordion">
                        <div class="accordion-body course-faqs-body">
                            <p>Yes, Tally Prime includes robust inventory management features that allow you to track stock levels, manage purchase and sales orders, handle multiple stock categories, and generate various inventory reports to help you make informed business decisions.</p>
                        </div>
                        </div>
                    </div>
                    <!-- eight -->
                    <div class="accordion-item course-faqs-item">
                        <h2 class="accordion-header course-faqs-header">
                            <button class="accordion-button collapsed course-faqs-button" type="button" data-bs-toggle="collapse" data-bs-target="#courseFaqEight" aria-expanded="false" aria-controls="courseFaqEight">
                                How can Tally Prime help with GST compliance?
                            </button>
                        </h2>
                        <div id="courseFaqEight" class="accordion-collapse collapse" data-bs-parent="#courseFaqsAccordion">
                        <div class="accordion-body course-faqs-body">
                            <p>Tally Prime is designed to help businesses comply with GST regulations by automating GST calculations, generating GST returns, and providing accurate GST reports. This ensures that businesses can manage their GST obligations efficiently and accurately. </p>
                        </div>
                        </div>
                    </div>
                    <!-- nine -->
                    <div class="accordion-item course-faqs-item">
                        <h2 class="accordion-header course-faqs-header">
                        <button class="accordion-button collapsed course-faqs-button" type="button" data-bs-toggle="collapse" data-bs-target="#courseFaqNine" aria-expanded="false" aria-controls="courseFaqNine">
                             What resources will be available during the Tally Prime course?
                        </button>
                        </h2>
                        <div id="courseFaqNine" class="accordion-collapse collapse" data-bs-parent="#courseFaqsAccordion">
                            <div class="accordion-body course-faqs-body">
                                <p>The course may provide various resources such as video tutorials, practical exercises, case studies, user manuals, and access to a Tally Prime software demo. Instructors may also offer personalized guidance and support throughout the course.</p>
                            </div>
                        </div>
                    </div>
                    <!-- Ten -->
                    <div class="accordion-item course-faqs-item">
                        <h2 class="accordion-header course-faqs-header">
                        <button class="accordion-button collapsed course-faqs-button" type="button" data-bs-toggle="collapse" data-bs-target="#courseFaqTen" aria-expanded="false" aria-controls="courseFaqTen">
                             What resources will be available during the Tally Prime course?
                        </button>
                        </h2>
                        <div id="courseFaqTen" class="accordion-collapse collapse" data-bs-parent="#courseFaqsAccordion">
                            <div class="accordion-body course-faqs-body">
                                <p>You can practice by using the Tally Prime software to enter sample transactions, create financial statements, manage inventory, and generate reports. Additionally, completing the exercises and assignments provided in the course will help reinforce your learning. </p>
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

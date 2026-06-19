<!DOCTYPE html>
<html lang="en">
<head>
    <!-- header-links -->
     <?php include "./includes/header-links.php" ?>
    <link rel="stylesheet" href="styles/admin.css">
    <title> Admin Login</title>
</head>
<body>
         <!-- ====== model to display after admin register form submition==== -->
         <div class="modal fade" id="adminregisterModal" tabindex="-1" aria-labelledby="adminregisterModalLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                    </div>
                    <div class="modal-body" id="adminregister-modal-body-msg"> </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">OK</button>
                    </div>
                </div>
            </div>
        </div>

 <main>
        <div class="admin-banner-sec">
            <?php include "includes/header.php"?>
            <div class="container">
                <div class="banner-head">
                        <h1>W3 <span>Technologies</span></h1>
                </div>
            </div>
        </div>
        <!-- ======= -->
    <section>
         <div class="container">
            <div class="form-sec">
                <h1>Register  Form</h1>
                <div class="card">
                    <form id="admin-registration-form" method="post" onsubmit="return formAdminRegisterValidation()" action="./database/register.php">
                        <div class="form-ele mb-3 d-flex flex-column gap-1">
                            <label for="name">User Name</label> 
                            
                                <input type="text" name="name" id="name">
                                <span id="name-error" class="form-error"></span>
                        
                        </div>

                        <div class="form-ele mb-3 d-flex flex-column gap-1">
                            <label for="email">Email Id</label> 
                    
                                <input type="email" name="email" id="email">
                                <span id="email-error" class="form-error"></span>
                        
                        </div>

                        <div class="form-ele mb-3 d-flex flex-column gap-1">
                            <label for="password">Password</label> 
                        
                                <input type="password" name="password" id="password">
                                <span id="password-error" class="form-error"></span>
                            
                        </div>

                        <div class="form-ele mb-3 d-flex flex-column gap-1">
                            <label for="confirm-password">Confirm Password</label>
                            
                                <input type="password" name="confirm-password" id="confirm-password">
                                <span id="confirm-password-error" class="form-error"></span>
                            
                        </div>

                        <div class="d-flex justify-content-center">
                            <input class="btn btn-primary" type="submit">
                        </div>
                    </form>

                </div>
                    <p>If you already have an account <b><a href="adminlogin.php">Sign in</a> </b>Now!</p>    
            </div>
        </div>
    </section>

 </main>


<!-- ===========footer=============== -->
<?php include "./includes/footer.php" ?>
<!-- =============footer-inks============== -->
<?php include './includes/footer-links.php' ?>
<script src="./js/adminregister.js"></script>
</body>
</html> 
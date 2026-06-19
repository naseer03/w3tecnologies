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

         <!-- ====== model to display after admin login  form submition==== -->
         <div class="modal fade" id="adminloginModal" tabindex="-1" aria-labelledby="adminloginModalLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                    </div>
                    <div class="modal-body" id="adminlogin-modal-body-msg"> </div>
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
            <h1 >Login Form</h1>
            <div class="card">
            <form id="admin-login-form" method="post" onsubmit="return formAdminLoginValidation()" action="./database/login.php">
                <div class="form-ele mb-3 d-flex flex-column gap-1">
                    <label for="name">User Name</label>
                    <input type="text" name="name" id="name">
                    <span id="name-error" class="form-error"></span>
                </div>
                <div class="form-ele mb-3 d-flex flex-column gap-1">
                    <label for="password">Password</label>
                    <input type="password" name="password" id="password">
                    <span id="password-error" class="form-error"></span>
                </div>
                <div class="d-flex justify-content-center">
                    <input class="btn btn-primary" type="submit">
                </div>
            </form>

                <!-- <form id="admin-login-form" method="post" onsubmit="return formAdminLoginValidation()" action="./database/login.php">
                     <div class="form-ele mb-3 d-flex flex-column gap-1">
                        <label for="name">User Name</label> 
                            <input type="text" name="name" id="name">
                            <span id="name-error" class="form-error"></span>
                    </div>
                    <div class="form-ele mb-3 d-flex flex-column gap-1">
                        <label for="password">Password</label> 
                            <input type="password" name="password" id="password">
                            <span id="password-error" class="form-error"></span>
                    </div>
                    <div class="d-flex justify-content-center">
                        <input class="btn btn-primary" type="submit">
                    </div>
                </form>                                                                        -->
            </div>
            <p>If you don't have account <b><a href="adminregister.php">Sign up</a></b> Now!</p>    
            </div>
        </div>
    </section>
 </main>
<!-- ===========footer=============== -->
<?php include "./includes/footer.php" ?>
<!-- =============footer-inks============== -->
<?php include './includes/footer-links.php' ?>
<script src="./js/adminlogin.js"></script>
<script src="./js/adminregister.js"></script>
</body>
</html>
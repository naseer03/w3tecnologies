
<?php
session_start();
// Check if the admin is logged in
if (!isset($_SESSION['admin_name'])) {
    // If not logged in, redirect to login page
    header('Location: adminlogin.php');
    exit();
}
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <!-- header-links -->
     <?php include "./includes/header-links.php" ?>
    <link rel="stylesheet" href="styles/admin.css">
    <title>Create Blog</title>
</head>
<body>
        <!-- ====== model to display after form submition==== -->
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
         <!-- ====== model to display after Blog created form submition==== -->
        <div class="modal fade" id="blogcreateModal" tabindex="-1" aria-labelledby="blodcreateModalLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                    </div>
                    <div class="modal-body" id="blogcreate-modal-body-msg"> </div>
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
                        <h1>W3 <span>Technologies </span></h1>
                </div>
            </div>
        </div>
        <!-- ======= -->
    <section>
        <div class="container">
            <div class="d-flex justify-content-around mt-5 ">
                <h2 class="create-blog-head"> Create Blog </h2>
                <div>
                    <a href="./blogs.php" class="btn btn-danger px-3 py-2">View Blogs</a>
                    <a href="./database/logout.php" class="btn btn-danger px-3 py-2">Log Out</a>
                </div>
            </div>
            <form method="post" action="./database/blog-insert.php" enctype="multipart/form-data">
                <div class="row">
                    <div class="col-6">
                    <div class="d-flex flex-column gap-2 mb-2">
                        <label for="heading">Heading</label>
                        <input type="text" id="heading" name="heading">
                    </div>
                    <div class="d-flex flex-column gap-2 mb-2">
                        <label for="mytextarea">Description</label>
                        <textarea name="mytextarea" id="mytextarea"></textarea>
                    </div>
                    <div class="d-flex flex-column gap-2 mb-2">
                        <label for="header-image">Header Image</label>
                        <input type="file" id="header-image" name="header-image">
                    </div>
                    </div>
                    <div class="col-6">
                    <div class="d-flex flex-column gap-2 mb-2">
                        <label for="meta-heading">Meta Heading</label>
                        <input type="text" id="meta-heading" name="meta-heading">
                    </div>
                    <div class="d-flex flex-column gap-2 mb-2">
                        <label for="meta-description">Meta Description</label>
                        <textarea type="text" id="meta-description" name="meta-description" class="meta-text"></textarea>
                    </div>
                    <div class="d-flex flex-column gap-2 mb-2">
                        <label for="feature-image">Feature Image </label>
                        <input type="file" id="feature-image" name="feature-image">
                    </div>
                    </div>
                </div>
                <div class="d-flex justify-content-center mt-2">
                    <input type="submit" class="btn btn-danger px-5 py-2">  
                </div>
            </form>
        </div>
    </section>

 </main>
 
<!-- ===========footer=============== -->
<?php include "./includes/footer.php" ?>
<!-- =============footer-inks============== -->
<?php include './includes/footer-links.php' ?>
<script src="./vendor/tinymce/tinymce/tinymce.js" referrerpolicy="origin"></script>
    <script>
      tinymce.init({
        selector: '#mytextarea',
        license_key: 'gpl|<your-license-key>'
      });
    </script>
      <script src="./js/adminlogin.js"></script>
      <script src="./js/blogcreate.js"></script>
</body>
</html> 
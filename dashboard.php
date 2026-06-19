<?php
session_start();
// Check if the admin is logged in
if (!isset($_SESSION['admin_name'])) {
    // If not logged in, redirect to login page
    header('Location: adminlogin.php');
    exit();
}
?>
<?php
$basepath ="/w3tec.com";
$opt = isset($_GET['opt'])? (empty($_GET['opt'])?'dashboard':$_GET['opt']): 'dashboard';
$course = 'course'; 
$internship = 'internship';
$service = 'service' ;
$contact = 'contact';
$createblog ='createblog';
$blogslist ='blogslist';
$updateblog = 'updateblog';
$jsInterview = 'js-interviewQA-download';
$file_name = "adminaccess/".$opt.".php";
function addingClassName($original_opt, $opt){
    return ($original_opt === $opt)? 'left-side-li-active':'';
}
?>
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Admin Dashboard</title>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css" rel="stylesheet">
        <link href="https://cdn.datatables.net/2.1.5/css/dataTables.bootstrap5.css" rel="stylesheet">
        <link rel="icon"  href="<?php echo $basepath;?>/assets/favicon.png">
        <link href="./styles/dashboard.css" rel="stylesheet">
        <link href="./styles/create-blog.css" rel="stylesheet">
    </head>
    <body>
         <!-- ====== model to display admin login success message ==== -->
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
        
        <!-- ====== model to display delete blog success message ==== -->
        <div class="modal fade" id="deleteblogModal" tabindex="-1" aria-labelledby="deleteblogLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                    </div>
                    <div class="modal-body" id="deleteblog-modal-body-msg"> </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">OK</button>
                    </div>
                </div>
            </div>
        </div>
          <!-- ====== model to display delete blog success message ==== -->
          <div class="modal fade" id="updateblogModal" tabindex="-1" aria-labelledby="updateblogLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                    </div>
                    <div class="modal-body" id="updateblog-modal-body-msg"> </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">OK</button>
                    </div>
                </div>
            </div>
        </div>
        <main>
            <div class="whole-content-area">
                <div class="left-side-tabs">
                    <div class="tabs-main">
                        <div class="logo">
                            <img src="./assets/nav/w3tech-logo.svg" alt="logo">
                        </div>
                        <div class="main-tabs ">
                            <ul>
                                <li class="<?php echo addingClassName($$course, $opt) ?>"><a href="<?php echo htmlspecialchars($_SERVER['PHP_SELF'])."?opt=$course"; ?>">Course</a></li>
                                <li class="<?php echo addingClassName($internship, $opt) ?>"><a href="<?php echo htmlspecialchars($_SERVER['PHP_SELF'])."?opt=$internship"; ?>">Internship</a></li>
                                <li class="<?php echo addingClassName($service, $opt) ?>"><a href="<?php echo htmlspecialchars($_SERVER['PHP_SELF'])."?opt=$service"; ?>">Service</a></li>
                                <li class="<?php echo addingClassName($contact, $opt) ?>"><a href="<?php echo htmlspecialchars($_SERVER['PHP_SELF'])."?opt=$contact"; ?>">Contacts</a></li>
                                <li class="<?php echo addingClassName($createblog, $opt) ?>"><a href="<?php echo htmlspecialchars($_SERVER['PHP_SELF'])."?opt=$createblog"; ?>">Create Blog</a></li>
                                <li class="<?php echo addingClassName($blogslist, $opt) ?>"><a href="<?php echo htmlspecialchars($_SERVER['PHP_SELF'])."?opt=$blogslist"; ?>">Blogs List</a></li>
                                <li class="<?php echo addingClassName($jsInterview, $opt) ?>"><a href="<?php echo htmlspecialchars($_SERVER['PHP_SELF'])."?opt=$jsInterview"; ?>">Js Interview Q&A Download</a></li>
                                
                            </ul>
                            <!-- logout button -->
                            <div>

                                <a href="./database/logout.php" class=" logout">Log Out</a>
                            </div>
                        </div>
                    </div> 
                </div>
                <div class="right-side-content-area">
                    <div class="right-side-main-content-area">
                        <?php if($opt === 'dashboard'){
                            echo "<h1 class="."text-center".">Welcome to dashboard</h1>";
                        } else if ($opt === 'updateblog' && isset($_GET['blog_id'])) {
                            include 'adminaccess/updateblog.php'; // Include the updateblog page
                        }
                        
                        else{
                            include $file_name;
                        } ?>
                    </div>
                </div>
            </div>
        </main>
        <script src="https://code.jquery.com/jquery-3.7.1.js"></script>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/5.3.0/js/bootstrap.bundle.min.js"></script>
        <script src="https://cdn.datatables.net/2.1.5/js/dataTables.js"></script>
        <script src="https://cdn.datatables.net/2.1.5/js/dataTables.bootstrap5.js"></script>
        <script>
        new DataTable('#table');
    
        </script>

        <script src="./vendor/tinymce/tinymce/tinymce.js" referrerpolicy="origin"></script>
        <script>
        tinymce.init({
            selector: '#mytextarea',
            license_key: 'gpl|<your-license-key>'
        });
        </script>
        <script src="./js/adminlogin.js"></script>
        <script src="./js/blogcreate.js"></script>
        <script src ="./js/deleteblog.js"></script>
        <script src ="./js/updateblog.js"></script>
    </body>
</html>
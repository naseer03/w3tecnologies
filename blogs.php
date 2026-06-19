<!DOCTYPE html>
<html lang="en">
<head>
    <!-- header-links -->
     <?php include "includes/header-links.php" ?>
    <link rel="stylesheet" href="styles/blog.css">
    <title>Blogs</title>
</head>
<body>
 <main>
        <div class="blog-banner-sec">
            <?php include "includes/header.php"?>
            <div class="container">
                <div class="banner-head">
                        <!-- <h1>W3<span>Technologies Blogs</span></h1> -->
                        <h1>MCA ACADEMIC<span>Projects</span></h1>
                </div>
            </div>
        </div>
        <!-- ======= -->
    <section class="blogs">
        <div class="container">
            <h2>Blogs</h2>
            <?php
            include "./database/db-config.php";
            $upload_dir = './blog-images/';
            // SQL query to retrieve specific columns
            $sql = "SELECT blog_id,blog_title,blog_content, meta_title,tagname, meta_description, feature_image,seo_url  FROM blog_data";
            $result = $conn->query($sql);
            if ($result->num_rows > 0) {
                echo "<div class=\"row\">";
                while ($row = $result->fetch_assoc()) {
                    $title = htmlspecialchars($row['blog_title']);
                    $image = htmlspecialchars($row['feature_image']);
                    $meta_title = htmlspecialchars($row['meta_title']);
                    $tag_name = strtoupper(htmlspecialchars($row['tagname']));
                    $meta_description = htmlspecialchars($row['meta_description']);
                    $blog_content = ($row['blog_content']);
                    $blog_id = $row['blog_id'];
                    $seo_url = $row['seo_url'];
                    $blog_content_truncated = substr($blog_content, 0, 160);
                    $blog_content_truncated = strip_tags($blog_content_truncated);
                    if (strlen($blog_content) > 160) {
                        $blog_content_truncated .= '...'; // Add ellipsis if truncated
                    }
                    // Create a URL-friendly blog
                    $blog = strtolower(trim(preg_replace('/[^A-Za-z0-9-]+/', '-', $title), '-'));
                    echo "<div class=\"col-12  col-sm-6 col-lg-4\">";
                        // echo "<a href='/w3tec.com/". $seo_url . ".php' class=\"card my-2 p-2\">";
                        // echo "<a href='./blog-template.php?blog=$blog' class=\"card m-4 p-2\">"; 

                         echo "<a href='/w3tec.com/blogs/" . $seo_url . ".php' class=\"card my-2 p-2\">";      
                        if (!empty($image)) {
                            echo '<img class="card-img-top" src="' .$upload_dir . $image . '" alt="Feature Image" />';
                        } else {
                            echo "<p>No feature image available.</p>";
                        }
                        echo "<div class=\"card-body\">";
                        echo "<h5 class=\"card-title\">" . $title . "</h5>";
                        if($tag_name){

                            echo " <p class=\"tag-name\"> $tag_name</p>";
                        }
                        // echo "<p class=\"card-text\">" . $meta_description . "</p>";
                        echo "<p class=\"card-text\">" .$blog_content_truncated ."</p>";
                        echo "</div>";
                        echo "</a>";
                    echo "</div>";
                }
                echo "</div>";
            } 
            else {
                echo "<p>No blog posts found.</p>";
            }
            $conn->close();
            ?>
        </div>
    </section>
 </main>
 
<!-- ===========footer=============== -->
<?php include "./includes/footer.php" ?>
<!-- =============footer-inks============== -->
<?php include './includes/footer-links.php' ?>

</body>
</html> 
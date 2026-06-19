<?php
include "./database/db-config.php";
$upload_dir = '../blog-images/';
$blog = isset($_GET['blog']) ? $_GET['blog'] : '';

$meta_title = 'Blogs'; // Default meta title if blog is not found
$meta_description = ''; // Default meta description
$header_image = '';
$blog_content = '';
if ($blog) {
    $sql = "SELECT blog_title,meta_title, meta_description, blog_content, header_image FROM blog_data WHERE seo_url = ?";
    $stmt = $conn->prepare($sql);
    $stmt->bind_param("s", $blog);
    $stmt->execute();
    $result = $stmt->get_result();
    
    if ($result->num_rows > 0) {
        $row = $result->fetch_assoc();
        $heading = $row['blog_title'];
        $meta_title = htmlspecialchars($row['meta_title']);
        $meta_description = htmlspecialchars($row['meta_description']);
        $blog_content = $row['blog_content']; 
        $header_image = htmlspecialchars($row['header_image']);
    }   
    $stmt->close();
}
$conn->close();
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <!-- Meta Title and Description dynamically generated -->
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="<?php echo $meta_description; ?>">
    <title><?php echo $meta_title; ?></title>

    <!-- Include header links -->
    <?php include "./includes/header-links.php"; ?>
    <link rel="stylesheet" href="../styles/blog-template.css">
</head>
<body>
    <main>
        <div class="blog-head">
            <?php include "includes/header.php"; ?>
        </div>
        <!-- Blog Content Section -->
        <section>
            <?php if (!empty($heading) && !empty($blog_content)) : ?>
                <div class="blog-post">
                    <?php if (!empty($header_image)) : 
                        $full_path = $upload_dir . $header_image; ?>
                        <img class="img-fluid" src="<?php echo $full_path; ?>" alt="Header Image" />
                    <?php endif; ?>
                    
                    <div class="container">
                        <div class="blog-data">
                            <h1><?php echo $heading; ?></h1>
                            <div class="content">
                                <?php echo $blog_content; ?>
                            </div>
                        </div>
                    </div>
                </div>
            <?php else : ?>
                <p>Blog post not found.</p>
            <?php endif; ?>
        </section>
    </main>

    <!-- Footer -->
    <?php include "./includes/footer.php"; ?>
    <!-- Footer Links -->
    <?php include './includes/footer-links.php'; ?>
</body>
</html>

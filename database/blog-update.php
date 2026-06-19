<?php
include 'db-config.php';


if ($_SERVER["REQUEST_METHOD"] == "POST") {
   
    $blog_id = mysqli_real_escape_string($conn, $_POST['blog_id']); 
    $heading = mysqli_real_escape_string($conn, $_POST['heading']);
    $description = mysqli_real_escape_string($conn, $_POST['mytextarea']);
    $meta_title = mysqli_real_escape_string($conn, $_POST['meta-title']);
    $tag_name = mysqli_real_escape_string($conn, $_POST['tag-name']);
    $meta_description = mysqli_real_escape_string($conn, $_POST['meta-description']);


    $header_image = '';
    $feature_image = '';
    $upload_dir = '../blog-images/';
    
   
    if (isset($_FILES['header-image']) && $_FILES['header-image']['error'] == 0) {
        $header_image_name = time() . '-' . basename($_FILES['header-image']['name']);
        $header_image_path = $upload_dir . $header_image_name;
    
        if (move_uploaded_file($_FILES['header-image']['tmp_name'], $header_image_path)) {
            $header_image = $header_image_name; 
        } else {
            echo "Error uploading header image.";
        }
    }

    
    if (isset($_FILES['feature-image']) && $_FILES['feature-image']['error'] == 0) {
        $feature_image_name = time() . '-' . basename($_FILES['feature-image']['name']);
        $feature_image_path = $upload_dir . $feature_image_name;
        if (move_uploaded_file($_FILES['feature-image']['tmp_name'], $feature_image_path)) {
            $feature_image = $feature_image_name; 
        } else {
            echo "Error uploading feature image.";
        }
    }

    // Handle SEO URL update logic 
    $base_seo_url = strtolower(trim(preg_replace('/[^A-Za-z0-9-]+/', '-', $meta_title), '-'));
    $seo_url = $base_seo_url;
    $count = 1;

    // Check if the SEO URL already exists 
    while (true) {
        $sql_check = "SELECT COUNT(*) as count FROM blog_data WHERE seo_url = '$seo_url' AND blog_id != '$blog_id'";
        $result_check = $conn->query($sql_check);
        $row_check = $result_check->fetch_assoc();
        
        if ($row_check['count'] > 0) {
            $seo_url = $base_seo_url . '-' . $count;  
            $count++;
        } else {
            break;  
        }
    }

    // Update the existing blog in the database
    $sql = "UPDATE blog_data SET blog_title = '$heading', blog_content = '$description', meta_title = '$meta_title', 
            tagname = '$tag_name', meta_description = '$meta_description', seo_url = '$seo_url'";
    
    // Add header image to the update query if a new one is uploaded
    if (!empty($header_image)) {
        $sql .= ", header_image = '$header_image'";
    }
    
    // Add feature image to the update query if a new one is uploaded
    if (!empty($feature_image)) {
        $sql .= ", feature_image = '$feature_image'";
    }

    // Complete the query with the WHERE condition to update the correct blog post
    $sql .= " WHERE blog_id = '$blog_id'";

    if ($conn->query($sql) === TRUE) {
        // Redirect back to the dashboard or show success message
        header("Location: ../dashboard.php?opt=blogslist&updateblog=success");
    } else {
        echo "Error: " . $sql . "<br>" . $conn->error;
        header("Location: ../dashboard.php?opt=blogslist&updateblog=failed");
    }
}

$conn->close();
?>

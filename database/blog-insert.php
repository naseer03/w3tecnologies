<?php
 include 'db-config.php';
// Check if form is submitted
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Get the form data
    $heading = mysqli_real_escape_string($conn, $_POST['heading']);
    $description = mysqli_real_escape_string($conn, $_POST['mytextarea']);
    $meta_title = mysqli_real_escape_string($conn, $_POST['meta-title']);
    $tag_name = mysqli_real_escape_string($conn, $_POST['tag-name']);
    $meta_description = mysqli_real_escape_string($conn, $_POST['meta-description']);

    // Handling file blog-images
    $header_image = '';
    $feature_image = '';
    $upload_dir = '../blog-images/';
    
    if (isset($_FILES['header-image']) && $_FILES['header-image']['error'] == 0) {
        $header_image_name = time() . '-' . basename($_FILES['header-image']['name']);
        $header_image_path = $upload_dir . $header_image_name;     
        // Move the uploaded file to the target directory
        if (move_uploaded_file($_FILES['header-image']['tmp_name'], $header_image_path)) {
            $header_image = $header_image_name; 
        } else {
            echo "Error uploading header image.";
        }
    }
    // Handle feature image upload
    if (isset($_FILES['feature-image']) && $_FILES['feature-image']['error'] == 0) {
        $feature_image_name = time() . '-' . basename($_FILES['feature-image']['name']);
        $feature_image_path = $upload_dir . $feature_image_name;
        
        if (move_uploaded_file($_FILES['feature-image']['tmp_name'], $feature_image_path)) {
            $feature_image = $feature_image_name; 
        } else {
            echo "Error uploading feature image.";
        }
    }
    $base_seo_url = strtolower(trim(preg_replace('/[^A-Za-z0-9-]+/', '-', $meta_title), '-'));
    $seo_url = $base_seo_url;
    $count = 1;
    // Check if the SEO URL already exists 
    while (true) {
        $sql_check = "SELECT COUNT(*) as count FROM blog_data WHERE seo_url = '$seo_url'";
        $result_check = $conn->query($sql_check);
        $row_check = $result_check->fetch_assoc();
        
        if ($row_check['count'] > 0) {
            $seo_url = $base_seo_url . '-' . $count;  
            $count++;
        } else {
            break;  
        }
    }

    // Insert data into the database
    $sql = "INSERT INTO blog_data (blog_title, blog_content, header_image, meta_title,tagname, meta_description, feature_image,seo_url ) 
            VALUES ('$heading', '$description', '$header_image', '$meta_title', '$tag_name','$meta_description','$feature_image','$seo_url')";

    if ($conn->query($sql) === TRUE) {
        header("Location:../dashboard.php?opt=createblog&blogcreate=success" );
        // echo "New record created successfully";
    } else {
        echo "Error: " . $sql . "<br>" . $conn->error;
        header("Location:../dashboard.php?opt=createblog&blogcreate=failed" );
    }
}
$conn->close();
?>




 

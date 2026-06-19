
<?php 
include './db-config.php';
$deleteblog_id = $_GET['blog_id'];
$delete_images = "SELECT header_image,feature_image FROM blog_data WHERE blog_id=$deleteblog_id";

$result = $conn->query($delete_images);
if ($result->num_rows > 0) {
   
    $row = $result->fetch_assoc();
    $header_image = "../blog-images/" . $row['header_image'];
    $feature_image = "../blog-images/".$row['feature_image'];
}

if (file_exists($header_image) && file_exists($feature_image)) {
    if (unlink($header_image) && unlink($feature_image)) {
      
        $delete_blog = "DELETE FROM blog_data WHERE blog_id=$deleteblog_id";
        if ($conn->query($delete_blog ) === TRUE) {
       
            header("Location:../dashboard.php?opt=blogslist&deleteblog=success");
        } else {
       
            echo "Error: " . $delete_blog . "<br>" . $conn->error;
            header("Location:../dashboard.php?opt=blogslist&deleteblog=failed");
        }
    } 
}
$conn->close();
?>
<?php
include __DIR__ . '/../database/db-config.php';
require_once __DIR__ . '/../includes/config.php';
// Get the blog_id from the URL parameters
$blog_id = $_GET['blog_id'];

// Fetch the blog data from the database
$sql = "SELECT * FROM blog_data WHERE blog_id = $blog_id";
$result = $conn->query($sql);

if ($result->num_rows > 0) {
    $blog = $result->fetch_assoc();
} else {
    // Handle case where the blog does not exist
    echo "Blog not found.";
    exit();
}
$conn->close();
?>
<section>
    <div class="container">
        <div class="d-flex justify-content-around mt-4">
            <h2 class="create-blog-head">Edit Blog</h2>
            <div>
                <a href="./blogs.php" class="view-blogs">View Blogs</a>
            </div>
        </div>
        <form method="post" action="./database/blog-update.php" enctype="multipart/form-data">
            <input type="hidden" name="blog_id" value="<?php echo htmlspecialchars($blog['blog_id']); ?>">
            <div class="row">
                <div class="col-8">
                    <div class="d-flex flex-column gap-2 mb-2">
                        <label for="heading">Heading</label>
                        <input type="text" id="heading" name="heading" class="input-text" value="<?php echo htmlspecialchars($blog['blog_title']); ?>">
                    </div>
                    <div class="d-flex flex-column gap-2 mb-2">
                        <label for="mytextarea">Description</label>
                        <textarea name="mytextarea" id="mytextarea"><?php echo htmlspecialchars($blog['blog_content']); ?></textarea>
                    </div>
                    <div class="d-flex flex-column gap-2 mb-2">
                        <label for="header-image">Header Image</label>
                        <input type="file" id="header-image" name="header-image">
                        <?php if ($blog['header_image']): ?>
                            <img src="<?php echo $basepath . '/blog-images/' . htmlspecialchars($blog['header_image']); ?>" class="w-75" alt="Header Image" >
                        <?php endif; ?>
                    </div>
                </div>
                <div class="col-4">
                    <div class="d-flex flex-column gap-2 mb-2">
                        <label for="meta-title">Meta Title</label>
                        <input type="text" id="meta-title" name="meta-title" class="input-text" value="<?php echo htmlspecialchars($blog['meta_title']); ?>">
                    </div>
                    <div class="d-flex flex-column gap-2 mb-2">
                        <label for="meta-description">Meta Description</label>
                        <textarea type="text" id="meta-description" name="meta-description" class="meta-text"><?php echo htmlspecialchars($blog['meta_description']); ?></textarea>
                    </div>
                    <div class="d-flex flex-column gap-2 mb-2">
                        <label for="tag-name">Tag Name</label>
                        <input type="text" id="tag-name" name="tag-name" class="input-text" value="<?php echo htmlspecialchars($blog['tagname']); ?>">
                    </div>
                    <div class="d-flex flex-column gap-2 mb-2">
                        <label for="feature-image">Feature Image</label>
                        <input type="file" id="feature-image" name="feature-image">
                        <?php if ($blog['feature_image']): ?>
                            <img src="<?php echo $basepath . '/blog-images/' . htmlspecialchars($blog['feature_image']); ?>" class="w-75" alt="Feature Image" >
                        <?php endif; ?>
                    </div>
                </div>
            </div>
            <div class="d-flex justify-content-center mt-2">
                <input type="submit" class="submit" value="Update Blog">
            </div>
        </form>
    </div>
</section>

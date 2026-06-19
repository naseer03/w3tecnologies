
  <?php $baseurl= '/w3tec.com' ?>
    
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
        
        <!-- ======= -->
    <section>
        <div class="container">
            <div class="d-flex justify-content-around mt-4 ">
                <h2 class="create-blog-head"> Create Blog </h2>
                <div>
                    <a href="./blogs.php" class="view-blogs ">View Blogs</a>
                </div>
            </div>
            <form method="post" action="./database/blog-insert.php" enctype="multipart/form-data">
                <div class="row">
                    <div class="col-8">
                    <div class="d-flex flex-column gap-2 mb-2">
                        <label for="heading">Heading</label>
                        <input type="text" id="heading" name="heading" class="input-text">
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
                    <div class="col-4">
                    <div class="d-flex flex-column gap-2 mb-2">
                        <label for="meta-title">Meta title</label>
                        <input type="text" id="meta-title" name="meta-title" class="input-text">
                    </div>
                    <div class="d-flex flex-column gap-2 mb-2">
                        <label for="meta-description">Meta Description</label>
                        <textarea type="text" id="meta-description" name="meta-description" class="meta-text"></textarea>
                    </div>
                    <div class="d-flex flex-column gap-2 mb-2">
                        <label for="tag-name">Tag name</label>
                        <input type="text" id="tag-name" name="tag-name" class="input-text">
                    </div>
                    <div class="d-flex flex-column gap-2 mb-2">
                        <label for="feature-image">Feature Image </label>
                        <input type="file" id="feature-image" name="feature-image">
                    </div>
                    </div>
                </div>
                <div class="d-flex justify-content-center mt-2">
                    <input type="submit" class="submit">  
                </div>
            </form>
        </div>
    </section>

 </main>
 



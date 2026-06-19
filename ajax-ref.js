document.getElementById('gallery-category').addEventListener('change', function() {
    var categoryId = this.value;
    var subCategoryDiv = document.getElementById('subcategory-div');
    var imageDetailsDiv = document.getElementById('image-details-div');

    // Reset subcategory and hide image details
    document.getElementById('gallery-sub-category').innerHTML = "<option value=''>Select a Subcategory</option>";
    imageDetailsDiv.style.display = "none";

    if (categoryId) {
        // Show the subcategory dropdown
        subCategoryDiv.style.display = "block";

        // Make an AJAX request to load subcategories based on the selected category
        var xhr = new XMLHttpRequest();
        xhr.open('GET', 'database/gallery-img-service.php?category_id=' + categoryId, true);
        xhr.onreadystatechange = function() {
            if (xhr.readyState == 4 && xhr.status == 200) {
                document.getElementById('gallery-sub-category').innerHTML += xhr.responseText;
            }
        };
        xhr.send();
    } else {
        subCategoryDiv.style.display = "none";
    }
});
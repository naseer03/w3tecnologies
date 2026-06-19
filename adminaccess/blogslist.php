
<?php  $basepath = '../w3tec.com';?>
<section class="data-section">
    <h2> Blogs List </h2>
    <div class="table-responsive">
        <table id="table" class="table table-striped" >
                <thead>
                    <tr>
                        <th>Sl.No</th>
                        <th>Blog Title</th>
                        <th>Meta Title</th>
                        <th>Feature Image</th>
                        <th >Edit</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    <?php 
                    $upload_dir = './blog-images/';
                    include "$basepath/database/db-config.php"; 
                    
                    $sql = "SELECT * FROM `blog_data`";
                    $data = $conn->query($sql);
                        if ($data->num_rows>0){
                            $count = 1;
                            while ($row= $data->fetch_assoc()){
                            $blog_id = $row['blog_id'];    
                            $name = $row['blog_title'];
                            $image = $row['feature_image'];
                            echo "<tr>";
                            echo "<td>$count</td>";
                            echo "<td>$name</td>";
                            echo "<td>$name</td>";
                            echo "<td> <img  class=\"blog-list-image\"src= " .$upload_dir . $image . " alt=\"Feature Image\" /> </td>";
                            echo "<td class=\"p-0\"> <a class=\"action-btns\" href='dashboard.php?opt=updateblog&blog_id=$blog_id'> <img src=\"/w3tec.com/assets/dashboard/edit.png\" class=\"action-icon\">  </a> </td>";
                            echo "<td class=\"p-0\"> <a class=\"action-btns\" href=\"$basepath/database/blog-delete.php?blog_id=$blog_id\"> <img src=\"/w3tec.com/assets/dashboard/delete.png\" class=\"action-icon\">  </a>    </td>";
                            
                            echo "</tr>";
                            $count++;
                            }
                        }
                        $conn->close();            

                    ?>
                </tbody>
        </table>
    </div>

</section>

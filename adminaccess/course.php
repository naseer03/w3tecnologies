
<?php  $basepath = '../w3tec.com';?>
<section class="data-section">
    <h2> Course Enquiry Data </h2>
    <div class="table-responsive">
        <table id="table" class="table table-striped" >
                <thead>
                    <tr>
                        <th>Sl.No</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Contact No</th>
                        <th>Whatsapp NO</th>
                        <th>Course</th>
                        <th>Pref Time to Call</th>
                    </tr>
                </thead>
                <tbody>
                    <?php 
                        
                    include "$basepath/database/db-config.php"; 
                    
                    $sql = "SELECT * FROM `course_form`";
                    $data = $conn->query($sql);
                        if ($data->num_rows>0){
                            $count = 1;
                            while ($row= $data->fetch_assoc()){
                            $name = $row['course_enq_name'];
                            $email = $row['email'];
                            $course = $row['course'];
                            $contactNo = $row['contact_no'];
                            $whatsappNo = $row['whatsapp_no'];
                            // $prefTime = $row['pref_time'];
                            $prefTime = date("g:i A", strtotime($row['pref_time'])); 
                            echo "<tr>";
                            echo "<td>$count</td>";
                            echo "<td>$name</td>";
                            echo "<td>$email</td>";
                            echo "<td>$contactNo</td>";
                            echo "<td>$whatsappNo</td>";
                            echo "<td>$course</td>";
                            echo "<td>$prefTime</td>";
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

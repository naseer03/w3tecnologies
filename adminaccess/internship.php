
<?php require_once __DIR__ . '/../includes/config.php'; ?>
<section class="data-section">
    <h2> Internship Enquiry Data </h2>
    <div class="table-responsive">
        <table id="table" class="table table-striped" >
                <thead>
                    <tr>
                        <th>Sl.No</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Contact No</th>
                        <th>Whatsapp NO</th>
                        <th>Institute Name</th>
                        <th>Message</th>
                        <th>Pref Time to Call</th>
                    </tr>
                </thead>
                <tbody>
                    <?php 
                        
                    include __DIR__ . '/../database/db-config.php';
                    
                    $sql = "SELECT * FROM `internship_form`";
                    $data = $conn->query($sql);
                        if ($data->num_rows>0){
                            $count = 1;
                            while ($row= $data->fetch_assoc()){
                            $name = $row['intern_name'];
                            $email = $row['intern_email'];
                            $institute = $row['college_name'];
                            $contactNo = $row['intern_contact_no'];
                            $whatsappNo = $row['intern_whatsapp_no'];
                            $prefTime = date("g:i A", strtotime($row['pref_time'])); 
                            $message = $row['message_note'];

                            echo "<tr>";
                            echo "<td>$count</td>";
                            echo "<td>$name</td>";
                            echo "<td>$email</td>";
                            echo "<td>$contactNo</td>";
                            echo "<td>$whatsappNo</td>";
                            echo "<td>$institute</td>";
                            echo "<td>$message</td>";
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

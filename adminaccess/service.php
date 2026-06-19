
<?php require_once __DIR__ . '/../includes/config.php'; ?>
<section class="data-section">
    <h2>Service Enquiry Data </h2>
    <div class="table-responsive">
        <table id="table" class="table table-striped" >
                <thead>
                    <tr>
                        <th>Sl.No</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Company Name</th>
                        <th>Contact No</th>
                        <th>Whatsapp NO</th>
                        <th>Message</th>
                        <th>Pref Time to Call</th>
                    </tr>
                </thead>
                <tbody>
                    <?php 
                        
                    include __DIR__ . '/../database/db-config.php';
                    
                    $sql = "SELECT * FROM `service_form`";
                    $data = $conn->query($sql);
                        if ($data->num_rows>0){
                            $count = 1;
                            while ($row= $data->fetch_assoc()){
                            $name = $row['ser_name'];
                            $email = $row['ser_email'];
                            $company = $row['company_name'];
                            $contactNo = $row['ser_contact_no'];
                            $whatsappNo = $row['ser_whatsapp_no'];
                            $message = $row['message_note'];
                            $prefTime = date("g:i A", strtotime($row['pref_time'])); 
                            echo "<tr>";
                            echo "<td>$count</td>";
                            echo "<td>$name</td>";
                            echo "<td>$email</td>";
                            echo "<td>$company</td>";
                            echo "<td>$contactNo</td>";
                            echo "<td>$whatsappNo</td>";
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

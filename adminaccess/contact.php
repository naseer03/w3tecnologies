
<?php  $basepath = '../w3tec.com';?>
<section class="data-section">
    <h2> Contacts  Data </h2>
    <div class="table-responsive">
        <table id="table" class="table table-striped" >
                <thead>
                    <tr>
                        <th>Sl.No</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Contact No</th>
                        <th>Whatsapp NO</th>
                        <th>Message</th>
                        <th>Pref Time to Call</th>
                    </tr>
                </thead>
                <tbody>
                    <?php 
                        
                    include "$basepath/database/db-config.php"; 
                    
                    $sql = "SELECT * FROM `enquiry_form`";
                    $data = $conn->query($sql);
                        if ($data->num_rows>0){
                            $count = 1;
                            while ($row= $data->fetch_assoc()){
                            $name = $row['enq_name'];
                            $email = $row['enq_email'];
                            $contactNo = $row['enq_contact_no'];
                            $whatsappNo = $row['enq_whatsapp_no'];
                            $message = $row['message_note'];
                            // $prefTime = $row['pref_time'];
                            // $prefTime24 = $row['pref_time']; 
                            $prefTime = date("g:i A", strtotime($row['pref_time'])); 
                            if(strlen($message)<=0){
                                $message = "---";
                            }
                            echo "<tr>";
                            echo "<td>$count</td>";
                            echo "<td>$name</td>";
                            echo "<td>$email</td>";
                            echo "<td>$contactNo</td>";
                            echo "<td>$whatsappNo</td>";
                            echo "<td>$message</td>";
                            echo "<td>$prefTime</td>";
                            echo "</tr>";
                            $count++;
                            }
                        }
                        else {
                            echo "<tr><td colspan='7'>No Records Found</td></tr>";
                        }
                        $conn->close();            

                    ?>
                </tbody>
        </table>
    </div>

</section>

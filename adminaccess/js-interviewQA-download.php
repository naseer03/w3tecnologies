
<?php  $basepath = '../w3tec.com';?>
<section class="data-section">
    <h2> Js Interview Downloads </h2>
    <div class="table-responsive">
        <table id="table" class="table table-striped" >
                <thead>
                    <tr>
                        <th>Sl.No</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Contact No</th>
                        <th>Whatsapp NO</th>
                    </tr>
                </thead>
                <tbody>
                    <?php 
                        
                    include "$basepath/database/db-config.php"; 
                    
                    $sql = "SELECT * FROM `js_interviewqa`";
                    $data = $conn->query($sql);
                        if ($data->num_rows>0){
                            $count = 1;
                            while ($row= $data->fetch_assoc()){
                            $name = $row['js_name'];
                            $email = $row['email'];
                            $contactNo = $row['contact_no'];
                            $whatsappNo = $row['whatsapp_no'];
                            // $prefTime = $row['pref_time'];
                             
                            echo "<tr>";
                            echo "<td>$count</td>";
                            echo "<td>$name</td>";
                            echo "<td>$email</td>";
                            echo "<td>$contactNo</td>";
                            echo "<td>$whatsappNo</td>";
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

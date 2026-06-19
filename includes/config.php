<?php
// On localhost (XAMPP) the site lives under /w3tec.com/; on the live server it's at the domain root.
$basepath = (isset($_SERVER['HTTP_HOST']) && $_SERVER['HTTP_HOST'] === 'localhost') ? '/w3tec.com' : '';

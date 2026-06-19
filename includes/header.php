<?php require_once __DIR__ . '/config.php'; ?>
<header class="header " id="nav-header">
    <nav class="navbar navbar-expand-lg ">
        <div class="container-fluid">
            <div class="container">
                <div class="d-flex justify-content-between justify-content-lg-start">
                    <a class="navbar-brand" href="<?php echo $basepath;?>"> <img src="<?php echo $basepath;?>/assets/nav/w3tech-logo.svg" alt="w3tec-logo" class="img-fluid"> </a>
                <div>
                <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasExampleone" aria-controls="offcanvasExampleone" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <ul class="navbar-nav">
                        <li class="nav-link dropdown-menu-item courses"><p class="explore-menu-link">Explore Courses</p>
                            <div class="megamenu-dropdown mbl-menu-none">
                                <div class="megamenu-main-dropdown">
                                    <ul>
                                        <li><a href="<?php echo $basepath;?>/courses/c.php">C programming</a></li>
                                        <li><a href="<?php echo $basepath;?>/courses/cpp.php">C++ Programming</a></li>
                                        <li><a href="<?php echo $basepath;?>/courses/c-cpp.php">C and C++ </a></li>
                                        <li><a href="<?php echo $basepath;?>/courses/python.php">Python</a></li>
                                        <li><a href="<?php echo $basepath;?>/courses/php-mysql.php">PHP & MySql</a></li>
                                    </ul>
                                    <ul>
                                        <li><a href="<?php echo $basepath;?>/courses/mern-stack.php">MERN Stack</a></li>
                                        <li><a href="<?php echo $basepath;?>/courses/dsa.php">DSA</a></li>
                                        <li><a href="<?php echo $basepath;?>/courses/java.php">Java </a></li>
                                        <li><a href="<?php echo $basepath;?>/courses/laravel.php">Laravel</a></li>
                                        <li><a href="<?php echo $basepath;?>/courses/digital-marketing.php">Digital Marketing</a></li>
                                        
                                    </ul>
                                    <ul>
                                        <li><a href="<?php echo $basepath;?>/courses/graphic-design.php">Graphic Designing</a></li>
                                        <li><a href="<?php echo $basepath;?>/courses/ui-ux-design.php">UI/UX Designing</a></li>
                                        <li><a href="<?php echo $basepath;?>/courses/sql.php">SQL</a></li>
                                        <li><a href="<?php echo $basepath;?>/courses/wordpress.php">Wordpress</a></li>
                                        <li><a href="<?php echo $basepath;?>/courses/ms-office.php">Ms Office</a></li>
                                    </ul>
                                </div>
                            </div>
                        </li>
                        <li class="nav-link dropdown-menu-item services-menu"><p class="services-menu-link">Services</p>
                            <div class="megamenu-dropdown mbl-menu-none">
                                <div class="megamenu-main-dropdown">
                                    <ul>
                                        <li><a href="<?php echo $basepath;?>/services/web-development-service.php">Web Development</a></li>
                                        <li><a href="<?php echo $basepath;?>/services/internships.php">Internship Programs</a></li>
                                        <li><a href="<?php echo $basepath;?>/services/digital-marketing-agency-nellore.php">Digital Marketing</a></li>
                                    </ul>
                                   
                                </div>
                            </div>
                        </li>
                        <li class="nav-link"><a class="" href="<?php echo $basepath;?>/about.php">Know About us</a></li>
                        <li class="nav-link"><a class="" href="<?php echo $basepath;?>/contact.php">Contact us</a></li>
                    </ul>
                </div>
            </div>
        </div>
             <!-- ===========off canvas==================  -->
            <div class="offcanvas offcanvas-start" tabindex="-1" id="offcanvasExampleone">
                <div class="offcanvas-header">
                    <a class="navbar-brand" href="<?php echo $basepath;?>"> <img src="<?php echo $basepath;?>/assets/nav/w3tech-logo.svg" alt="w3tec-logo" class="img-fluid"> </a>
                    <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div class="offcanvas-body d-block d-lg-none">
                    <ul>
                        <li class="nav-link courses-mbl "><p class="explore-course-link explore-course" >Explore Courses</p>
                            <div class="mbl-menu mbl-menu-hidden">
                                <div class="mbl-menu-dropdown">
                                <ul>
                                        <li><a href="<?php echo $basepath;?>/courses/c.php">C programming</a></li>
                                        <li><a href="<?php echo $basepath;?>/courses/cpp.php">C++ Programming</a></li>
                                        <li><a href="<?php echo $basepath;?>/courses/c-cpp.php">C and C++ </a></li>
                                        <li><a href="<?php echo $basepath;?>/courses/python.php">Python</a></li>
                                        <li><a href="<?php echo $basepath;?>/courses/php-mysql.php">PHP & MySql</a></li>
                                    </ul>
                                    <ul>
                                        <li><a href="<?php echo $basepath;?>/courses/mern-stack.php">MERN Stack</a></li>
                                        <li><a href="<?php echo $basepath;?>/courses/dsa.php">DSA</a></li>
                                        <li><a href="<?php echo $basepath;?>/courses/java.php">Java </a></li>
                                        <li><a href="<?php echo $basepath;?>/courses/laravel.php">Laravel</a></li>
                                        <li><a href="<?php echo $basepath;?>/courses/digital-marketing.php">Digital Marketing</a></li>
                                        
                                    </ul>
                                    <ul>
                                        <li><a href="<?php echo $basepath;?>/courses/graphic-design.php">Graphic Designing</a></li>
                                        <li><a href="<?php echo $basepath;?>/courses/ui-ux-design.php">UI/UX Designing</a></li>
                                        <li><a href="<?php echo $basepath;?>/courses/sql.php">SQL</a></li>
                                        <li><a href="<?php echo $basepath;?>/courses/wordpress.php">Wordpress</a></li>
                                        <li><a href="<?php echo $basepath;?>/courses/ms-office.php">Ms Office</a></li>
                                    </ul>
                                </div>
                            </div>
                        </li>
                        <li class="nav-link  services-mbl "><p class="services-menu-link services-menu">Services</p>
                            <div class="mbl-menu mbl-menu-hidden">
                                <div class="mbl-menu-dropdown">
                                    <ul>
                                        <li><a href="<?php echo $basepath;?>/services/web-development-service.php">Web Development</a></li>
                                        <li><a href="<?php echo $basepath;?>/services/internships.php">Internship Programs</a></li>
                                        <li><a href="<?php echo $basepath;?>/services/digital-marketing-agency-nellore.php">Digital Marketing</a></li>
                                    </ul>
                                
                                </div>
                            </div>
                        </li>
                        <li class="nav-link"><a href="<?php echo $basepath;?>/about.php">Know About us</a></li>
                        <li class="nav-link"><a  href="<?php echo $basepath;?>/contact.php">Contact us</a></li>
                    </ul>             
                </div>
            </div>
    </nav>
</header>


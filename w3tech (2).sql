

--
-- Database: `w3tech`
--

-- --------------------------------------------------------

--
-- Table structure for table `admin`
--

CREATE TABLE `admin` (
  `admin_id` int(11) NOT NULL,
  `admin_name` varchar(255) NOT NULL,
  `admin_email` varchar(255) NOT NULL,
  `admin_password` varchar(225) NOT NULL,
  `created_date` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `admin`
--

INSERT INTO `admin` (`admin_id`, `admin_name`, `admin_email`, `admin_password`, `created_date`) VALUES
(1, 'Venkatesh', 'konalamvenkatesh333@gmail.com', 'Venky@12345', '2024-09-05 07:27:51');

-- --------------------------------------------------------

--
-- Table structure for table `blog_data`
--

CREATE TABLE `blog_data` (
  `blog_id` int(11) NOT NULL,
  `blog_title` varchar(255) NOT NULL,
  `blog_content` text NOT NULL,
  `header_image` varchar(225) NOT NULL,
  `meta_title` varchar(225) NOT NULL,
  `meta_description` text NOT NULL,
  `tagname` varchar(255) NOT NULL,
  `feature_image` varchar(255) NOT NULL,
  `seo_url` varchar(255) NOT NULL,
  `created_data` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `blog_data`
--

INSERT INTO `blog_data` (`blog_id`, `blog_title`, `blog_content`, `header_image`, `meta_title`, `meta_description`, `tagname`, `feature_image`, `seo_url`, `created_data`) VALUES
(2, 'A Guide for Beginners What Are the Fundamentals of Web Designing', '<p>Are you passionate about creating captivating websites and want to embark on a journey as a web developer? Look no further than&nbsp;<a href=\"https://w3tec.com/\">W3tecnologies!</a>&nbsp;As a leading provider of<a href=\"https://w3tec.com/web-design.php\">&nbsp;web design courses</a>, we understand the significance of mastering the fundamentals in this ever-evolving field. In this guide, we\'ll equip you with the essential knowledge and skills needed to excel in&nbsp;<a href=\"https://w3tec.com/web-development.php\">web development</a> and design.</p>\r\n<h2>Introduction</h2>\r\n<p>Web design is the art of creating visually appealing and user-friendly websites. It involves the use of design principles, layout techniques, and coding skills to craft engaging online experiences. Web designers combine creativity with technical expertise to ensure websites are aesthetically pleasing, functional, and optimized for a seamless user journey. Through the thoughtful arrangement of visual elements, typography, color schemes, and interactive features, web designers shape the way users perceive and interact with digital content.</p>\r\n<h2>Understanding the Importance of Web Designing</h2>\r\n<p>In today\'s digital age, effective<a href=\"https://w3tec.com/web-design.php\">&nbsp;web designing</a>&nbsp;is paramount to building a strong online presence. At&nbsp;<a href=\"https://w3tec.com/\">W3tecnologies</a>, we recognize the vital role of web design in captivating audiences and delivering exceptional user experiences. By enrolling in our<a href=\"https://w3tec.com/web-design.php\">&nbsp;web design courses</a>, you\'ll gain the expertise to craft visually stunning websites, optimize user interactions, and leave a lasting impression on visitors.</p>\r\n<h2>Types of Web Development</h2>\r\n<p>Before delving into the core principles, it\'s crucial to familiarize yourself with the various realms of&nbsp;<a href=\"https://w3tec.com/web-development.php\">web development</a>&nbsp;. At&nbsp;<a href=\"https://w3tec.com/\">W3tecnologies</a>, we offer comprehensive courses that cover front-end development, back-end development, and full-stack development. Whether you aspire to specialize in creating stunning interfaces, building robust server-side functionality, or mastering the entire&nbsp;<a href=\"https://w3tec.com/web-development.php\">web development</a> stack, our courses have you covered.</p>\r\n<h3>Three Important Fundamentals of Web Development</h3>\r\n<h3>1. HTML (Hypertext Markup Language)</h3>\r\n<p><a href=\"https://w3tec.com/html-css-javascript.php\">HTML serves</a>&nbsp;as the backbone of every web page, providing the structure and organization for content. Through our<a href=\"https://w3tec.com/web-design.php\">&nbsp;web design courses</a>, you\'ll acquire the skills to leverage HTML tags effectively, such as \"h1\", \"p\", \"img\", and \"a\", to create wellstructured and semantically meaningful websites.</p>\r\n<h3>2. CSS (Cascading Style Sheets)</h3>\r\n<p><a href=\"https://w3tec.com/html-css-javascript.php\">CSS complements</a>&nbsp;HTML by controlling the visual presentation and layout of web pages. In our&nbsp;<a href=\"https://w3tec.com/web-design.php\">online web design courses</a>, you\'ll master CSS techniques to customize colors, typography, spacing, and overall aesthetics. By applying CSS, you\'ll transform static HTML into visually stunning and engaging websites.</p>\r\n<h3>3. JavaScript</h3>\r\n<p>JavaScript empowers web developers to add interactivity and dynamic functionality to websites. Through our comprehensive<a href=\"https://w3tec.com/web-design.php\">&nbsp;web design courses</a>, you\'ll learn JavaScript\'s essentials, enabling you to create engaging user interfaces, handle user events, perform form validation, and leverage powerful libraries and frameworks. Best Practices for Effective<a href=\"https://w3tec.com/web-design.php\">&nbsp;Web Designing</a>&nbsp;At&nbsp;<a href=\"https://w3tec.com/\">W3tecnologies</a>, we emphasize the importance of following industry best practices to create exceptional web designs. Here are some key guidelines we instil in our students:</p>\r\n<ol>\r\n<li>Keep designs clean and user-friendly, ensuring seamless navigation and intuitive interfaces.</li>\r\n<li>Optimize website performance by employing techniques such as file compression, image optimization, and efficient caching strategies.</li>\r\n<li>Optimize website performance by employing techniques such as file compression, image optimization, and efficient caching strategies.</li>\r\n<li>Establish a consistent and compelling brand identity by incorporating your logo, colors, and typography throughout the website.</li>\r\n<li>Prioritize accessibility by adhering to WCAG standards, making your websites inclusive and usable for all users, regardless of disabilities.</li>\r\n<li>Implement effective SEO strategies to improve search engine visibility and drive organic traffic to your websites.</li>\r\n</ol>\r\n<h2>Conclusion</h2>\r\n<p>web design is combining beauty and functionality to create amazing websites. At&nbsp;<a href=\"https://w3tec.com/\">W3tecnologies</a>, you can enroll in our user-friendly&nbsp;<a href=\"https://w3tec.com/web-design.php\">web design courses</a>&nbsp;and unleash your creativity. Learn how to build visually stunning sites, make them easy to navigate, and bring your design ideas to life. Join our community of aspiring web designers and start your exciting journey towards a fulfilling career. Enroll today with&nbsp;<a href=\"https://w3tec.com/\">W3tecnologies</a> and unlock your full potential in the world of web design.</p>', '1725860518-guide-2.png', 'A Guide for Beginners: What Are the Fundamentals of Web Designing?', 'Are you passionate about creating captivating websites and want to embark on a journey as a web developer? Look no further than W3tecnologies! As a leading provider of web design courses, we understand the significance of mastering the fundamentals in this ever-evolving field. In this guide, we\'ll equip you with the...\r\n', 'Web Development', '1725860518-guide.jpg', 'a-guide-for-beginners-what-are-the-fundamentals-of-web-designing', '2024-09-13 11:04:06'),
(3, 'What are UX and UI designs Difference between UX and UI Design', '<h2>Introduction:</h2>\r\n<p>Designing a successful user interface and user experience is essential to producing effective digital experiences. UI design focuses on interactive and visual elements to create an appealing and understandable interface. UX design, on the other hand, considers the entire user experience and aims to maximize usability, accessibility, and satisfaction. Professionals seeking to master these skills can explore<a href=\"https://w3tec.com/ui-ux-design.php\">&nbsp;UI/UX design courses</a>, which provide knowledge and tools to create effective designs. Various software options are also available to streamline the UI/UX design process.</p>\r\n<h2>Understanding UX Design:</h2>\r\n<p>Understanding UX (User Experience) design is essential for creating impactful digital experiences. Here are key points to grasp the concept:</p>\r\n<ol>\r\n<li>The goal of UI design is to produce simple, aesthetically pleasing interfaces that increase user engagement.</li>\r\n<li>It entails choosing a suitable typeface, color palettes, and graphic components to create a unified and aesthetically pleasing appearance.</li>\r\n<li>In order to maximize usability and create a seamless user experience, UI designers construct layouts and arrange interface elements.</li>\r\n<li>To provide a unified and user-centered design approach, they collaborate closely with UX designers.</li>\r\n<li>To successfully express information, UI design involves an understanding of design concepts including balance, contrast, and hierarchy.</li>\r\n<li>User satisfaction is increased by interaction design, which includes the use of animations and micro-interactions.</li>\r\n<li>In order to put the design into practice and guarantee visual coherence across various platforms and devices, UI designers work with developers.</li>\r\n</ol>\r\n<p>Mastering UX design principles and techniques enables professionals to create user-centered designs that delight and engage users.</p>\r\n<h2>Key differences between UX design and UI design:</h2>\r\n<p>While UX (User Experience) design and UI (User Interface) design are closely related, they have distinct focuses and responsibilities. Here are the key differences between the two:</p>\r\n<ol>\r\n<li><strong>Definition:</strong> UX design refers to the overall user experience, encompassing the entire journey and interactions a user has with a product or service. UI design, on the other hand, specifically deals with the visual and interactive elements of the user interface.</li>\r\n<li><strong>Objective:&nbsp;</strong>UX design aims to optimize user satisfaction, ease of use, and efficiency by understanding user needs and goals. UI design focuses on creating visually appealing and intuitive interfaces that facilitate seamless interactions.</li>\r\n<li><strong>Skillset:&nbsp;</strong>UX designers conduct user research, create personas, develop user flows, and conduct usability testing. They need skills in information architecture, psychology, and user research methodologies. UI designers are responsible for selecting colors, typography, and layout, as well as creating visual elements and interactions. They require expertise in graphic design, typography, and visual communication.</li>\r\n<li><strong>Focus:</strong>&nbsp;UI design emphasizes creating visually appealing and intuitive interfaces, while UX design prioritizes understanding user needs, behaviors, and goals to optimize the overall user journey.</li>\r\n<li><strong>Scope:</strong> UI design is narrower, focusing on the look and feel of the interface. UX design has a broader scope, considering the entire user experience, including navigation, content, and interactions.</li>\r\n</ol>\r\n<p>Professionals interested in UI/UX design can pursue specialized&nbsp;<a href=\"https://w3tec.com/ui-ux-design.php\">UI/UX design courses</a> to acquire the necessary skills. Additionally, there are various software tools available to support UI/UX design processes and workflows.</p>\r\n<h2>Similarities of UX design and UI design:</h2>\r\n<p>While UX (User Experience) design and UI (User Interface) design have distinct focuses, they share some similarities. Here are the key similarities between the two:</p>\r\n<ol>\r\n<li><strong>User-Centered Approach:</strong> Both UX and UI design prioritize the needs and preferences of the end-users. They aim to create products or services that are intuitive, engaging, and satisfying for users.</li>\r\n<li><strong>Collaboration:</strong>&nbsp;UX and UI designers often work together closely, collaborating on various aspects of the design process. They share information, insights, and feedback to ensure a cohesive and seamless user experience.</li>\r\n<li><strong>Design Thinking:</strong>&nbsp;Both UX and UI design employ design thinking methodologies, which involve empathizing with users, defining their needs, ideating and prototyping solutions, and testing and iterating on designs to achieve the best possible outcome.</li>\r\n<li><strong>Visual Elements:</strong>&nbsp;While UI design primarily focuses on visual elements, both UX and UI designers consider visual aspects in their work. They aim to create aesthetically pleasing designs that align with the brand and enhance the overall user experience.</li>\r\n<li><strong>Iterative Process:</strong> Both UX and UI design involve an iterative approach, constantly refining and improving the design based on user feedback, usability testing, and data analysis.</li>\r\n</ol>\r\n<p>Professionals interested in UI/UX design can pursue specialized&nbsp;<a href=\"https://w3tec.com/ui-ux-design.php\">UI/UX design courses</a> to gain comprehensive knowledge and skills in both areas. Additionally, there are various software tools available that support UI/UX design processes and help designers create effective and visually appealing interfaces.</p>\r\n<h2>Conclusion</h2>\r\n<div class=\"container\">\r\n<p><strong>In conclusion,</strong>&nbsp;UX (User Experience) and UI (User Interface) design play critical roles in creating successful digital experiences. UX design focuses on optimizing the overall user journey and satisfaction, while UI design concentrates on crafting visually appealing and intuitive interfaces. Although they are distinct disciplines, they are closely intertwined and require collaboration. Professionals seeking to excel in both areas can benefit from&nbsp;<a href=\"https://w3tec.com/ui-ux-design.php\">UI/UX design courses</a>, which provide the necessary skills and knowledge. Additionally, UI/UX design software such as Sketch, Adobe XD, and Figma can streamline the design process. By mastering these skills and leveraging the right tools, designers can create user-centered designs that not only look visually appealing but also provide exceptional user experiences.</p>\r\n</div>\r\n<footer id=\"rs-footer\" class=\"rs-footer home9-style home12-style\">\r\n<div class=\"footer-top\">\r\n<div class=\"container\">\r\n<div class=\"row\">\r\n<div class=\"col-lg-3 col-md-12 col-sm-12 footer-widget md-mb-50\">&nbsp;</div>\r\n</div>\r\n</div>\r\n</div>\r\n</footer>', '1725876054-ui-ux-banner.png', 'What are UX and UI designs? Difference between UX and UI Design?', 'Designing a successful user interface and user experience is essential to producing effective digital experiences. UI design focuses on interactive and visual elements to create an appealing and understandable interface. UX design, on the other hand, considers the entire user experience and aims to maximize usability, accessibility, and ...\r\n\r\n', 'UI/UX Designing', '1725876054-UI-UX.jpg', 'what-are-ux-and-ui-designs-difference-between-ux-and-ui-design', '2024-09-13 11:05:05'),
(4, '10 Best Programming Languages to Learn for Career Development', '<h2>Introduction:</h2>\r\n<p>Today\'s rapid-paced digital environment has made programming abilities crucial for career advancement across a range of businesses. Learning the appropriate programming languages can expand your employment options, whether you want to work as a web developer, data scientist, or mobile app developer. The top 10 programming languages to learn for career growth are listed in this article. Each language is chosen based on its level of acceptance, employment demand, adaptability, and potential for future growth. So let\'s get started and investigate the greatest programming languages that can advance your profession. Benefits of learning programming languages: Learning programming languages has several advantages. It improves one\'s capacity for problem-solving, encourages rational thought, and fosters creativity. Knowledge in programming provides you a variety of professional alternatives with better potential salaries. It cultivates analytical abilities, facilitates automation and efficiency, and encourages technological adaptation. Learning programming languages fosters a mindset of lifelong learning and enhances communication and teamwork abilities. It encourages individuals to seek novel solutions and advances personal growth by encouraging determination and self-assurance. Overall, knowing a programming language gives you a competitive edge and opens doors to fascinating prospects in a variety of industries. It is crucial in today\'s digital world. Here are some of the major programming languages widely used in the industry:</p>\r\n<ol>\r\n<li><a href=\"https://w3tec.com/python.php\">Python</a></li>\r\n<li>JavaScript</li>\r\n<li>Java</li>\r\n<li>C++</li>\r\n<li>C#</li>\r\n<li>Ruby</li>\r\n<li>Go (Golang)</li>\r\n<li>Swift</li>\r\n<li>Kotlin</li>\r\n<li>Rust</li>\r\n<li>PHP</li>\r\n<li>TypeScript</li>\r\n<li>MATLAB</li>\r\n<li>R</li>\r\n<li>SQL</li>\r\n<li>CSS</li>\r\n<li>Shell scripting (Bash)</li>\r\n<li>Objective-C</li>\r\n<li>Perl</li>\r\n<li>Scala</li>\r\n</ol>\r\n<h2>10 Best Programming Languages to Learn for Career Development:</h2>\r\n<ol>\r\n<li><strong>HTML:</strong>&nbsp;Given that HTML (Hypertext Markup Language) isn\'t typically thought of as a programming language, learning it is a requirement for anyone interested in a career in&nbsp;<a href=\"https://w3tec.com/web-development.php\">web development&nbsp;</a>or digital marketing. The foundation of online pages is HTML, which establishes the organisation and content of websites. Understanding the structure of websites, designing web pages, and working productively with other programming languages like CSS and JavaScript are all made possible by<a href=\"https://w3tec.com/html-css-javascript.php\">&nbsp;learning HTML</a>. Possibilities in front-end&nbsp;<a href=\"https://w3tec.com/web-development.php\">web development&nbsp;</a>, user experience design, content management systems, and digital marketing roles are made available by HTML proficiency. A successful career in the ever-expanding digital world can be achieved by mastering HTML.</li>\r\n<li><strong>CSS:</strong>CSS (Cascading Style Sheets) is a crucial programming language for career development in web design and front-end development. While not a<a href=\"https://w3tec.com/courses.php\">&nbsp;traditional programming language</a>, CSS is responsible for styling and enhancing the visual appearance of web pages. Learning CSS enables you to control the layout, fonts, colors, and animations of websites, providing an immersive user experience. Proficiency in CSS is highly valued in industries such as&nbsp;<a href=\"https://w3tec.com/web-development.php\">web development&nbsp;</a>, user interface (UI) design, and user experience (UX) design. It complements HTML and JavaScript skills, making you a well-rounded front-end developer capable of creating visually appealing and user-friendly websites and applications.</li>\r\n<li><strong>JavaScript:</strong>&nbsp;As the backbone of modern&nbsp;<a href=\"https://w3tec.com/web-development.php\">web development&nbsp;</a>, JavaScript powers interactive web pages and dynamic user experiences.<a href=\"https://w3tec.com/html-css-javascript.php\">&nbsp;JavaScript frameworks</a>&nbsp;such as React, Angular, and Vue.js are in high demand, and its versatility allows for front-end, back-end, and even mobile app development. Mastering JavaScript is crucial for anyone aiming to excel in&nbsp;<a href=\"https://w3tec.com/web-development.php\">web development&nbsp;</a>and create highly interactive and responsive web applications.</li>\r\n<li><strong><a href=\"https://w3tec.com/python.php\">Python</a>:&nbsp;</strong><a href=\"https://w3tec.com/python.php\">Python</a>&nbsp;is a strong and adaptable programming language with a wide range of job options. It is a well-liked option for numerous industries including&nbsp;<a href=\"https://w3tec.com/web-development.php\">web development&nbsp;</a>, data science, machine learning, and automation due to its simplicity, readability, and huge libraries.&nbsp;<a href=\"https://w3tec.com/python.php\">Python</a>&nbsp;has a wide range of uses that make it highly sought after by businesses, including developing websites and APIs, analysing data, and building artificial intelligence models.&nbsp;<a href=\"https://w3tec.com/python.php\">Python</a>&nbsp;allows you to create scalable programmes, automate tedious operations, and extract insights from huge datasets. Learning&nbsp;<a href=\"https://w3tec.com/python.php\">Python</a>&nbsp;can pave the way for a profitable and rewarding professional career as a software engineer, data analyst, data scientist, or even&nbsp;<a href=\"https://w3tec.com/python.php\">Python</a>&nbsp;developer.</li>\r\n<li><strong>Java:</strong>Java is a powerful and frequently used programming language with numerous prospects for career advancement. Java is used in many sectors, including financial technology, enterprise software development, and&nbsp;<a href=\"https://w3tec.com/java.php\">Android app development</a>. It is renowned for its platform independence and scalability. Learning Java paves the way for careers as a Java developer, Android developer, or software engineer. With the help of its huge network of frameworks and libraries, like Spring and Hibernate, developers may create scalable and effective applications. Java is an essential skill for people looking for a fulfilling and long-lasting career in the field of programming because to its significant market presence, community support, and versatility.</li>\r\n<li><strong>C++:</strong>C++ Programming in the powerful and popular&nbsp;<a href=\"https://w3tec.com/c-cpp.php\">C++ language</a>&nbsp;opens up many fantastic career development opportunities. In fields including game development, embedded systems, and high-performance computing, C++ is frequently employed because of its excellent performance. A career as a software engineer, systems developer, or game developer is rendered easier by mastering C++. Control over hardware resources, effective memory management, and the capacity to create complex and optimised applications are all provided by C++. Its capabilities are further enhanced by the large number of libraries it has, including STL (Standard Template Library). C++ is a crucial talent for developing your career in programming due to its widespread use across a number of industries and its potential for creating high-performance applications.</li>\r\n<li><strong>C:</strong>C, the foundational programming language, is still relevant and widely used in various career paths. Known for its efficiency and low-level control. C is employed in operating systems, embedded systems, game development, and more. Mastering C opens doors to careers as a systems programmer, firmware engineer, or embedded systems developer. Its portability, performance, and extensive libraries make it a powerful tool for building efficient and reliable software. C\'s influence can be seen in many other languages, making it a valuable skill for understanding the fundamentals of programming and advancing in diverse technical fields.</li>\r\n<li><strong>PHP &amp; MYSQL:</strong>&nbsp;For&nbsp;<a href=\"https://w3tec.com/web-development.php\">web development&nbsp;</a>, PHP and MySQL are a potent combo that present numerous prospects for career advancement. The server-side programming language PHP is frequently used to create interactive and dynamic webpages and web applications. Data can be stored and retrieved using the well-known open-source relational database management system MySQL. A career as a PHP developer, web developer, or full-stack developer is made possible by&nbsp;<a href=\"https://w3tec.com/php-mysql.php\">mastering PHP and MySQL</a>. PHP allows you to easily communicate with databases, handle user authentication, and produce dynamic content. A successful career in&nbsp;<a href=\"https://w3tec.com/web-development.php\">web development&nbsp;</a>requires a strong skill set in PHP and MySQL, which together provide a strong basis for creating reliable and scalable web applications.</li>\r\n<li><strong>Angular</strong>:Angular is a potent front-end&nbsp;<a href=\"https://w3tec.com/web-development.php\">web development&nbsp;</a>framework with many opportunities for professional advancement. The Google-developed and-maintained&nbsp;<a href=\"https://w3tec.com/angular.php\">Angular framework</a>&nbsp;makes it possible to build dynamic, responsive, and feature-rich online apps. A front-end developer, Angular developer, or web application developer can pursue a career after becoming proficient in Angular. You can construct complicated UI/UX designs, create single-page applications, and handle data binding with ease using Angular. Its modular design, large library of resources, and active community make it a great skill for developing your front-end development career and staying on the cutting edge of contemporary online application development.</li>\r\n<li><strong><a href=\"https://w3tec.com/reactjs.php\">React.js</a>:</strong>A popular and highly sought-after JavaScript library,&nbsp;<a href=\"https://w3tec.com/reactjs.php\">React.js</a>&nbsp;is used to advance careers in front-end and&nbsp;<a href=\"https://w3tec.com/web-development.php\">web development&nbsp;</a>.&nbsp;<a href=\"https://w3tec.com/reactjs.php\">React.js</a>, which was created by Facebook, enables the development of reusable and interactive user interfaces. A career as a front-end developer,&nbsp;<a href=\"https://w3tec.com/reactjs.php\">React.js</a>&nbsp;developer, or UI/UX engineer is made possible by mastering&nbsp;<a href=\"https://w3tec.com/reactjs.php\">React.js</a>. You may employ component-based architecture, create effective and scalable online applications, and improve user experiences with&nbsp;<a href=\"https://w3tec.com/reactjs.php\">React.js</a>. The large ecosystem of libraries and tools, virtual DOM, and state management that it offers make it a vital expertise for developing your front-end development career and maintaining your competitiveness in the quickly changing&nbsp;<a href=\"https://w3tec.com/web-development.php\">web development&nbsp;</a>market.</li>\r\n</ol>\r\n<h2>Conclusion:</h2>\r\n<div class=\"container\">\r\n<p>Beyond career progress, learning a programming language has several advantages. It improves your capacity for problem-solving, sparks your imagination, sharpens your analytical abilities, and encourages adaptation. Whether you intend to work in technology or just want to learn more about programming, learning a programming language is a wise investment that may advance both your personal and professional development. In order to open up a world of opportunities, start learning a programming language with W3 technology.</p>\r\n</div>\r\n<footer id=\"rs-footer\" class=\"rs-footer home9-style home12-style\">\r\n<div class=\"footer-top\">\r\n<div class=\"container\">\r\n<div class=\"row\">\r\n<div class=\"col-lg-3 col-md-12 col-sm-12 footer-widget md-mb-50\">&nbsp;</div>\r\n</div>\r\n</div>\r\n</div>\r\n</footer>', '1725876908-Programming-Languages-banner.png', '10 Best Programming Languages to Learn for Career Development', 'Today\'s rapid-paced digital environment has made programming abilities crucial for career advancement across a range of businesses. Learning the appropriate programming languages can expand your employment options, whether you want to work as a web developer, data scientist, or mobile app developer. The top 10 programming languages to learn for career growth are ...', 'Programming Languages', '1725876908-Programming-Languages.jpg', '10-best-programming-languages-to-learn-for-career-development', '2024-09-13 11:05:59');

-- --------------------------------------------------------

--
-- Table structure for table `course_form`
--

CREATE TABLE `course_form` (
  `course_enq_id` int(11) NOT NULL,
  `course_enq_name` varchar(100) NOT NULL,
  `email` varchar(100) NOT NULL,
  `contact_no` varchar(10) NOT NULL,
  `whatsapp_no` varchar(10) NOT NULL,
  `course` varchar(150) NOT NULL,
  `pref_time` time NOT NULL,
  `created_dateTime` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `course_form`
--

INSERT INTO `course_form` (`course_enq_id`, `course_enq_name`, `email`, `contact_no`, `whatsapp_no`, `course`, `pref_time`, `created_dateTime`) VALUES
(15, 'KONALAM RAVI', 'konalamvenkatesh333@gmail.com', '6303436698', '6303436698', 'c language', '15:00:00', '2024-09-11 07:30:37'),
(16, 'Konalam Venkatesh', 'konalamvenkatesh333@gmail.com', '6303436698', '6303436698', 'c language', '13:06:00', '2024-09-11 07:33:06'),
(17, 'Konalam Venkatesh', 'konalamvenkatesh333@gmail.com', '6303436698', '6303436698', 'c language', '18:30:00', '2024-09-11 11:00:59'),
(18, 'venkat', 'Venky1234@gmail.com', '9177047144', '9177047144', 'mern Full-Stack Developer', '15:46:00', '2024-09-12 07:16:25');

-- --------------------------------------------------------

--
-- Table structure for table `enquiry_form`
--

CREATE TABLE `enquiry_form` (
  `enq_id` int(11) NOT NULL,
  `enq_name` varchar(100) NOT NULL,
  `enq_email` varchar(100) NOT NULL,
  `enq_contact_no` varchar(20) NOT NULL,
  `enq_whatsapp_no` varchar(20) NOT NULL,
  `pref_time` time NOT NULL,
  `message_note` varchar(255) NOT NULL,
  `created_time` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `enquiry_form`
--

INSERT INTO `enquiry_form` (`enq_id`, `enq_name`, `enq_email`, `enq_contact_no`, `enq_whatsapp_no`, `pref_time`, `message_note`, `created_time`) VALUES
(4, 'Konalam Venkatesh', 'konalamvenkatesh333@gmail.com', '6303436698', '6303436698', '21:30:00', '', '2024-09-11 11:00:23'),
(5, 'Konalam Venkatesh', 'konalamvenkatesh333@gmail.com', '6303436698', '6303436698', '21:30:00', '', '2024-09-11 11:00:35'),
(6, 'Konalam Venkatesh', 'konalamvenkatesh333@gmail.com', '6303436698', '6303436698', '17:35:00', '', '2024-09-11 11:05:05'),
(7, 'Konalam Venkatesh', 'konalamvenkatesh333@gmail.com', '6303436698', '6303436698', '17:37:00', '', '2024-09-11 11:07:29'),
(8, 'Konalam Venkatesh', 'konalamvenkatesh333@gmail.com', '6303436698', '6303436698', '19:44:00', '', '2024-09-11 11:14:39'),
(9, 'Konalam Venkatesh', 'konalamvenkatesh333@gmail.com', '6303436698', '6303436698', '00:00:00', '', '2024-09-11 11:21:00'),
(11, 'Konalam Venkatesh', 'konalamvenkatesh333@gmail.com', '6303436698', '6303436698', '18:57:00', '', '2024-09-11 11:28:26'),
(12, 'Konalam Venkatesh', 'konalamvenkatesh333@gmail.com', '6303436698', '6303436698', '18:02:00', 'Need Help', '2024-09-11 11:33:07');

-- --------------------------------------------------------

--
-- Table structure for table `internship_form`
--

CREATE TABLE `internship_form` (
  `intern_enq_id` int(11) NOT NULL,
  `intern_name` varchar(100) NOT NULL,
  `intern_email` varchar(100) NOT NULL,
  `intern_contact_no` varchar(20) NOT NULL,
  `intern_whatsapp_no` varchar(20) NOT NULL,
  `college_name` varchar(150) NOT NULL,
  `pref_time` time NOT NULL,
  `message_note` varchar(255) NOT NULL,
  `created_data` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `internship_form`
--

INSERT INTO `internship_form` (`intern_enq_id`, `intern_name`, `intern_email`, `intern_contact_no`, `intern_whatsapp_no`, `college_name`, `pref_time`, `message_note`, `created_data`) VALUES
(3, 'Konalam Venkatesh', 'konalamvenkatesh333@gmail.com', '6303436698', '9177047144', 'S.V University', '16:02:00', 'Digital Marketing InternShip', '2024-09-12 10:33:05');

-- --------------------------------------------------------

--
-- Table structure for table `service_form`
--

CREATE TABLE `service_form` (
  `service_enq_id` int(11) NOT NULL,
  `ser_name` varchar(100) NOT NULL,
  `ser_email` varchar(100) NOT NULL,
  `ser_contact_no` varchar(20) NOT NULL,
  `ser_whatsapp_no` varchar(20) NOT NULL,
  `company_name` varchar(150) NOT NULL,
  `pref_time` time NOT NULL,
  `message_note` varchar(255) NOT NULL,
  `created_date` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `service_form`
--

INSERT INTO `service_form` (`service_enq_id`, `ser_name`, `ser_email`, `ser_contact_no`, `ser_whatsapp_no`, `company_name`, `pref_time`, `message_note`, `created_date`) VALUES
(38, 'Konalam Venkatesh', 'konalamvenkatesh333@gmail.com', '6303436698', '6303436698', 'Reesan', '19:01:00', 'Need a web site', '2024-09-12 10:31:40');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `admin`
--
ALTER TABLE `admin`
  ADD PRIMARY KEY (`admin_id`);

--
-- Indexes for table `blog_data`
--
ALTER TABLE `blog_data`
  ADD PRIMARY KEY (`blog_id`);

--
-- Indexes for table `course_form`
--
ALTER TABLE `course_form`
  ADD PRIMARY KEY (`course_enq_id`);

--
-- Indexes for table `enquiry_form`
--
ALTER TABLE `enquiry_form`
  ADD PRIMARY KEY (`enq_id`);

--
-- Indexes for table `internship_form`
--
ALTER TABLE `internship_form`
  ADD PRIMARY KEY (`intern_enq_id`);

--
-- Indexes for table `service_form`
--
ALTER TABLE `service_form`
  ADD PRIMARY KEY (`service_enq_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `admin`
--
ALTER TABLE `admin`
  MODIFY `admin_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `blog_data`
--
ALTER TABLE `blog_data`
  MODIFY `blog_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=25;

--
-- AUTO_INCREMENT for table `course_form`
--
ALTER TABLE `course_form`
  MODIFY `course_enq_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=19;

--
-- AUTO_INCREMENT for table `enquiry_form`
--
ALTER TABLE `enquiry_form`
  MODIFY `enq_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- AUTO_INCREMENT for table `internship_form`
--
ALTER TABLE `internship_form`
  MODIFY `intern_enq_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `service_form`
--
ALTER TABLE `service_form`
  MODIFY `service_enq_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=39;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

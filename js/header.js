document.addEventListener("DOMContentLoaded", function() {
    // Function to toggle menus
    function setupMenuToggle(headerClass) {
        const courseToggle = document.querySelector(`${headerClass} .courses-mbl .explore-course`);
        const serviceToggle = document.querySelector(`${headerClass} .services-mbl .services-menu`);
        const courseMenu = document.querySelector(`${headerClass} .courses-mbl .mbl-menu`);
        const serviceMenu = document.querySelector(`${headerClass} .services-mbl .mbl-menu`);

        if (courseToggle && serviceToggle && courseMenu && serviceMenu) {
            courseToggle.addEventListener("click", function() {
                courseMenu.classList.toggle("mbl-menu-hidden");
                serviceMenu.classList.add("mbl-menu-hidden"); // Ensure the service menu is hidden
            });

            serviceToggle.addEventListener("click", function() {
                serviceMenu.classList.toggle("mbl-menu-hidden");
                courseMenu.classList.add("mbl-menu-hidden"); // Ensure the course menu is hidden
            });
        }
    }

    // Initialize the toggles for both headers
    setupMenuToggle('.header');
    setupMenuToggle('.scroll-header');
});

var scrollflag = true;
window.addEventListener('load', headerFixed);
window.addEventListener('scroll', headerFixed);

function headerFixed() {
    let navigation = document.getElementById('nav-header'); 
    if (window.scrollY > 10) {
        if (scrollflag) {
            scrollflag = false;
            navigation.classList.add('scroll-header', 'fixed-top');
          
        }
    } else {
        if(!scrollflag){

            scrollflag = true;
            navigation.classList.remove('scroll-header', 'fixed-top');
        }
    }
}

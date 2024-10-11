function showCopyNotification() {
    var copyNotification = document.getElementById("copyNotification");
    copyNotification.classList.add("show");

    setTimeout(function() {
        copyNotification.classList.remove("show");
    }, 2000); // Adjust the time as per your preference
}

function copyEmail() {
     // Copy the text inside the text field
    navigator.clipboard.writeText("u0977562@umail.utah.edu");
  
    // Alert the copied text
    showCopyNotification();
}

window.addEventListener('DOMContentLoaded', () => {
    const sideLinks = document.querySelectorAll('.sideLink a');
    const sidebar = document.querySelector('.sidebar');
    const introSection = document.querySelector('#intro');
    
    // Function to update active link based on scroll position
    function updateActiveLink() {
        const scrollPosition = window.scrollY;
        
        // Check if the scroll position is before the intro section
        if (introSection && scrollPosition < introSection.offsetTop) {
            sidebar.classList.remove('visible');
        } else {
            sidebar.classList.add('visible');
        }
        
        // Loop through each section and check if it's in view
        document.querySelectorAll('section').forEach(section => {
            const sectionId = section.getAttribute('id');
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            
            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                // Add "active" class to corresponding side link
                sideLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${sectionId}`) {
                        link.classList.add('active');
                    }
                });
            }
        });
    }
    
    // Update active link on page load and scroll
    window.addEventListener('load', updateActiveLink);
    window.addEventListener('scroll', updateActiveLink);
});

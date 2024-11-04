document.addEventListener("DOMContentLoaded", (event) => {
    //Scrolling navbar active classes
    document.addEventListener('scroll', function() {
        const sections = document.querySelectorAll('section'); // Select all sections
        const navLinks = document.querySelectorAll('nav ul li a'); // Select nav links

        sections.forEach(section => {
            const rect = section.getBoundingClientRect();
            const link = document.querySelector(`nav ul li a[href="#${section.id}"]`);

            if (rect.top >= 0 && rect.top < window.innerHeight) {
                navLinks.forEach(link => link.classList.remove('active')); // Remove active class from all links
                link.classList.add('active'); // Add active class to the current link
            }
        });
    });

    //Showing portfolio items
    workCheck = document.getElementById("workCheck");
    labelCheck = document.getElementById("checkLabel");
    codePortfolioElements = document.getElementsByClassName("code-portfolio");
    designPortfolioElements = document.getElementsByClassName("design-portfolio");

    workCheck.checked = true;
    for(let i=0; i< codePortfolioElements.length; i++) {
        codePortfolioElements[i].style.display = "";
    }

    for(let i=0; i< designPortfolioElements.length; i++) {
        designPortfolioElements[i].style.display = "none";
    }


    workCheck.onchange = function() {
        if (workCheck.checked == true) {
            workCheck.checked = true;
            console.log("CODE");
            
            for(let i=0; i< codePortfolioElements.length; i++) {
                codePortfolioElements[i].style.display = "";
            }

            for(let i=0; i< designPortfolioElements.length; i++) {
                designPortfolioElements[i].style.display = "none";
            }
        } else {
            workCheck.checked = false;
            console.log("DESIGN");


            for(let i=0; i< codePortfolioElements.length; i++) {
                codePortfolioElements[i].style.display = "none";
            }

            for(let i=0; i< designPortfolioElements.length; i++) {
                designPortfolioElements[i].style.display = "";
            }
        }
    };

    var acc = document.getElementsByClassName("accordion");
    var i;

    for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function() {
        /* Toggle between adding and removing the "active" class,
        to highlight the button that controls the panel */
        this.classList.toggle("active");

        /* Toggle between hiding and showing the active panel */
        var panel = this.nextElementSibling;
        if (panel.style.display === "block") {
        panel.style.display = "none";
        } else {
        panel.style.display = "block";
        }
    });
    }
})

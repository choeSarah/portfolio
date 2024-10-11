document.addEventListener('DOMContentLoaded', function () {
    // Get the checkbox element
    const checkbox = document.getElementById('checkbox');
    const code_content = document.getElementById('code_content');
    const design_content = document.getElementById('design_content');

    // Load the checkbox state from localStorage
    const savedState = localStorage.getItem('checkboxState') === 'true'; // Convert string to boolean
    checkbox.checked = savedState;

    // Update content visibility based on checkbox state
    updateContentVisibility(savedState);

    console.log('Checkbox state loaded:', savedState ? 'checked' : 'unchecked');
    
    // Add event listener to the checkbox
    checkbox.addEventListener('change', function () {
        const code_elements = code_content.querySelectorAll('*'); // Select all descendants
        const design_elements = design_content.querySelectorAll('*');

        // Save the checkbox state to localStorage
        localStorage.setItem('checkboxState', this.checked);

        // Update content visibility based on checkbox state
        updateContentVisibility(this.checked);
    });

    function updateContentVisibility(isChecked) {
        const code_elements = code_content.querySelectorAll('*'); // Select all descendants
        const design_elements = design_content.querySelectorAll('*');

        if (isChecked) { // Show code content
            console.log('Checkbox is checked');
            code_elements.forEach(element => {
                element.style.display = '';
            });

            design_elements.forEach(element => {
                element.style.display = 'none';
            });
        } else { // Show design content
            console.log('Checkbox is unchecked');
            design_elements.forEach(element => {
                element.style.display = '';
            });

            code_elements.forEach(element => {
                element.style.display = 'none';
            });
        }
    }
});

function showCopyNotification() {
    var copyNotification = document.getElementById("copyNotification");
    var emailButton = document.getElementById("email_btn");

    // Get the button's position and size
    var buttonRect = emailButton.getBoundingClientRect();

    // Calculate the center of the button
    var buttonCenterX = buttonRect.left + buttonRect.width / 2;

    // Set the notification's position
    copyNotification.style.position = "absolute"; // Ensure it's positioned absolutely
    copyNotification.style.left = `${buttonCenterX - (copyNotification.offsetWidth / 2)}px`; // Center the notification
    copyNotification.style.display = 'block';

    // copyNotification.classList.add("show");


    setTimeout(function() {
        copyNotification.style.display("none");
    }, 2000); // Adjust the time as per your preference
}

function copyEmail() {
     // Copy the text inside the text field
    navigator.clipboard.writeText("u0977562@umail.utah.edu");
  
    // Alert the copied text
    showCopyNotification();
}
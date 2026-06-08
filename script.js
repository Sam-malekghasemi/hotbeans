/* This JavaScript file makes the mobile menu and the apply form work.
   The comments explain what each part is doing in simple words.
*/

// This finds the menu button and the navigation links from the HTML page
const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

// This checks if the menu button is on the page before using it
if (menuBtn) {
    // When the menu button is clicked, this shows or hides the menu links
    menuBtn.addEventListener("click", function () {
        navLinks.classList.toggle("show");
    });
}

// This finds the apply form and the message area from apply.html
const form = document.getElementById("applicationForm");
const formMessage = document.getElementById("formMessage");

// This checks if the form is on the page before running the form code
if (form) {
    // When the user submits the form, this checks the answers first
    form.addEventListener("submit", function (event) {
        // This stops the page refreshing when the form is submitted
        event.preventDefault();

        // This gets what the user typed or selected in the form
        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const role = document.getElementById("role").value;
        const message = document.getElementById("message").value.trim();

        // This checks that all important boxes have been filled in
        if (name === "" || email === "" || role === "" || message === "") {
            formMessage.textContent = "Please fill in all required fields before submitting.";
            formMessage.style.color = "red";
            return;
        }

        // This checks the email has an @ sign so it looks like an email address
        if (!email.includes("@")) {
            formMessage.textContent = "Please enter a valid email address.";
            formMessage.style.color = "red";
            return;
        }

        // If everything is okay, this shows a success message to the user
        formMessage.textContent = "Application submitted successfully. Thank you for applying!";
        formMessage.style.color = "green";

        // This clears the form after it has been submitted
        form.reset();
    });
}

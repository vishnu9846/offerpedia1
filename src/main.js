const toggleLink = document.getElementById('toggleLink');
const hiddenContent = document.getElementById('hiddenContent');

toggleLink.addEventListener('click', function(event) {
    event.preventDefault(); // Prevent default link behavior
    hiddenContent.classList.toggle('show');
});



const icon = document.getElementById("icon");
const overlay = document.getElementById("overlay");
const CloseOverlay = document.getElementById('close_overlay');

icon.addEventListener("click", () => {
    overlay.style.left = "0"; // Sliding in from the left
});

CloseOverlay.addEventListener("click", () => {
    overlay.style.left = "-100%"; // Sliding back out to the left
});

function toggleLanguageOptions() {
    const languageOptions = document.getElementById("languageOptions");
    languageOptions.style.display = (languageOptions.style.display === "block") ? "none" : "block";
    languageDropdown.classList.add('languages_drop_active')
}

const languageDropdown = document.querySelector(".language-dropdown");

function selectLanguage(language) {
    languageDropdown.textContent = language;
    toggleLanguageOptions(); // Hide options after selection
    languageDropdown.classList.remove('languages_drop_active')
}

// Get a reference to the div element
const pizzaDiv = document.getElementById('pizzaDiv');

// Add a click event listener to the div element
pizzaDiv.addEventListener('click', function() {
    // Navigate to the new page
    window.location.href = './product.html';
});

        // // Get references to the HTML elements
        // const numberDisplay = document.getElementById('numberDisplay');
        // const addButton = document.getElementById('addButton');
        // const minusButton = document.getElementById('minusButton');

        // let currentNumber = 1; // Initial number is set to 1

        // // Function to update the number display
        // function updateNumberDisplay() {
        //     numberDisplay.textContent = currentNumber;
        // }

        // // Add event listener for the "Add" button
        // addButton.addEventListener('click', function() {
        //     currentNumber++;
        //     updateNumberDisplay();
        // });

        // // Add event listener for the "Minus" button
        // minusButton.addEventListener('click', function() {
        //     if (currentNumber > 1) { // Ensure the number never goes below 1
        //         currentNumber--;
        //         updateNumberDisplay();
        //     }
        // });



document.addEventListener("DOMContentLoaded", function () {

// Function to filter and show/hide cards based on search input
function search() {
    // Get the search input value and convert it to lowercase
    var searchInput = document.getElementById("searchInput").value.toLowerCase();

    // Get all elements with the class "card-title"
    var cardTitles = document.querySelectorAll(".card-title");

    // Loop through all card titles
    for (var i = 0; i < cardTitles.length; i++) {
        var cardTitle = cardTitles[i].textContent.toLowerCase();

        // Check if the card title contains the search input
        if (cardTitle.includes(searchInput)) {
            // Show the card if it matches the search
            cardTitles[i].closest(".card").style.display = "block";
        } else {
            // Hide the card if it does not match the search
            cardTitles[i].closest(".card").style.display = "none";
        }
    }
}

// Wait for the DOM to be fully loaded
document.addEventListener("DOMContentLoaded", function () {
    // Add an event listener to the search input for input changes
    document.getElementById("searchInput").addEventListener("input", search);
});

// Get the search input element
var searchInput = document.getElementById("searchInput");

// Add an event listener to the search input for keydown (e.g., Enter key)
searchInput.addEventListener("keydown", function (event) {
    // Check if the Enter key (keyCode 13) was pressed
    if (event.keyCode === 13) {
        event.preventDefault(); // Prevent the default form submission
        search(); // Call the search function
    }
});
});

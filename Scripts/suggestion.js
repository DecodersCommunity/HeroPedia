// Select card titles, suggestion list, and search input elements
const cardTitles = document.querySelectorAll(".card-title");
const suggestionList = document.getElementById("suggestion-list");
const searchBox = document.getElementById("searchInput");

// Extract card titles into an array
const cardTitleArray = Array.from(cardTitles).map((titleElement) => titleElement.textContent.trim());

// Event listener for user input
searchBox.addEventListener("input", () => {
    // Get user input, trim whitespace, and convert to lowercase
    const userInput = searchBox.value.trim().toLowerCase();
    // Call the displaySuggestions function with user input
    displaySuggestions(userInput);
});

// Function to display multiple suggestions or hide the list
function displaySuggestions(input) {
    // Clear previous suggestions
    suggestionList.innerHTML = "";

    // Check if the input is empty
    if (input.length === 0) {
        // Hide the list if input is empty
        suggestionList.style.display = "none";
        // Remove the border if there are no suggestions
        suggestionList.style.border = "none";
        return;
    }

    // Filter suggestions based on user input
    const filteredSuggestions = cardTitleArray.filter((title) =>
        title.toLowerCase().includes(input)
    );

    // Check if there are no matching suggestions
    if (filteredSuggestions.length === 0) {
        // Hide the list if there are no matches
        suggestionList.style.display = "none";
        // Remove the border if there are no suggestions
        suggestionList.style.border = "none";
        return;
    }

    // Display a fixed number of suggestions (at least 3)
    const numSuggestionsToDisplay = Math.min(3, filteredSuggestions.length);

    for (let i = 0; i < numSuggestionsToDisplay; i++) {
        // Check if the suggestion is not empty
        if (filteredSuggestions[i].trim() !== "") {
            // Create a list item for the suggestion
            const li = document.createElement("li");
            li.textContent = filteredSuggestions[i];
            // Append the suggestion to the suggestion list
            suggestionList.appendChild(li);
        }
    }

    // Show the list if there are matches
    suggestionList.style.display = "block";
    // Apply a border when suggestions are available
    suggestionList.style.border = "1px solid #444";
}

// Function to handle suggestion item click
function handleSuggestionClick(event) {
    // Get the text content of the clicked suggestion
    const selectedSuggestion = event.target.textContent;
    
    // Set the search input value to the selected suggestion
    document.getElementById("searchInput").value = selectedSuggestion;
    
    // Trigger the search function with the selected suggestion
    search();
}

// Add click event listener to the suggestion list
suggestionList.addEventListener("click", handleSuggestionClick);


// Function to close the suggestion list
function closeSuggestionList() {
    suggestionList.style.display = "none";
    suggestionList.style.border = "none";
}

// Event listener to close suggestion list when clicking outside
document.addEventListener("click", function (event) {
    const isSuggestionListClicked = suggestionList.contains(event.target);
    const isSearchBoxClicked = searchBox.contains(event.target);
    
    if (!isSuggestionListClicked && !isSearchBoxClicked) {
        closeSuggestionList();
    }
});


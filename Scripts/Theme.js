// Function to toggle dark mode
function toggleDarkMode() {
    // Get references to elements you want to toggle dark mode on
    const body = document.body;
    const header = document.querySelector('header');
    const button = document.querySelector('#btn');
    const word = document.querySelector('#All');
    const list = document.querySelector('#suggestion-list');

    // Toggle the 'dark-mode' class on the elements
    body.classList.toggle('dark-mode');
    header.classList.toggle('dark-mode');
    button.classList.toggle('dark-mode');
    word.classList.toggle('dark-mode');
    list.classList.toggle('dark-mode');
    
    // Store the user's preference in local storage
    if (body.classList.contains('dark-mode')) {
        localStorage.setItem('dark-mode', 'enabled');
    } else {
        localStorage.setItem('dark-mode', 'disabled');
    }
}

// Check user's preference from local storage
const storedTheme = localStorage.getItem('dark-mode');
if (storedTheme === 'enabled') {
    toggleDarkMode(); // Enable dark mode if user preference is 'enabled'
}

// Add click event listener to the theme toggle button
document.querySelector('#btn').addEventListener('click', toggleDarkMode);

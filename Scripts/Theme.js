// // Function to toggle dark mode
// function toggleDarkMode() {
//     const body = document.body;
//     const header = document.querySelector('header');
//     const button = document.querySelector('#btn');
//     const word = document.querySelector('#All');

//     body.classList.toggle('dark-mode');
//     header.classList.toggle('dark-mode');
//     button.classList.toggle('dark-mode');
//     word.classList.toggle('dark-mode');
    
//     // Store the user's preference in local storage
//     if (body.classList.contains('dark-mode')) {
//         localStorage.setItem('dark-mode', 'enabled');
//     } else {
//         localStorage.setItem('dark-mode', 'disabled');
//     }
// }

// // Check user's preference from local storage
// const storedTheme = localStorage.getItem('dark-mode');
// if (storedTheme === 'enabled') {
//     toggleDarkMode();
// }

// // Add click event listener to the theme toggle button
// document.querySelector('#btn').addEventListener('click', toggleDarkMode);
  // Function to toggle dark mode
  function toggleDarkMode() {
    const body = document.body;
    const themeIcon = document.getElementById("themeIcon");

    // Toggle dark mode class on body
    body.classList.toggle("dark-mode");

    // Toggle moon/sun icon
    if (body.classList.contains("dark-mode")) {
        // Dark mode is on
        themeIcon.classList.remove("bi-moon");
        themeIcon.classList.add("bi-sun");
    } else {
        // Dark mode is off
        themeIcon.classList.remove("bi-sun");
        themeIcon.classList.add("bi-moon");
    }
}

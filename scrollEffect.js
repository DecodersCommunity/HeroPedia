const cards = document.querySelectorAll(".card");

const Options = {
  thresold: 1,
  rootMargin: "0px 0px -150px 0px",
};

const animationAppear = new IntersectionObserver(function (
  entries,
  animationOnAppear
) {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) {
      return;
    } else {
      entry.target.classList.add("appear");
      animationOnAppear.unobserve(entry.target);
    }
  });
},
Options);

cards.forEach((card) => {
  animationAppear.observe(card);
});

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

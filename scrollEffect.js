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

let calcScrollValue = () => {
  let scrollProgressup = document.getElementById("progressup");
  let scrollProgressdown = document.getElementById("progressdown");

  let pos = document.documentElement.scrollTop;
  let calcHeight =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;
  let scrollValue = Math.round((pos * 100) / calcHeight);

  if (pos > 0) {
    scrollProgressup.style.display = "grid";
    scrollProgressup.style.background = `conic-gradient(#03cc65 ${scrollValue}%, #d7d7d7 ${scrollValue}%)`;
  } else {
    scrollProgressup.style.display = "none";
  }

  if (pos < calcHeight - window.innerHeight) {
    scrollProgressdown.style.display = "grid";
    scrollProgressdown.style.background = `conic-gradient(#03cc65 ${scrollValue}%, #d7d7d7 ${scrollValue}%)`;
  } else {
    scrollProgressdown.style.display = "none";
  }
};

let scrollToTop = () => {
  document.documentElement.scrollTop = 0;
};

let scrollToBottom = () => {
  let scrollHeight =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;
  document.documentElement.scrollTop = scrollHeight;
};

let scrollProgressup = document.getElementById("progressup");
let scrollProgressdown = document.getElementById("progressdown");

scrollProgressup.addEventListener("click", scrollToTop);
scrollProgressdown.addEventListener("click", scrollToBottom);

window.onscroll = () => {
  requestAnimationFrame(calcScrollValue);
};

window.onload = calcScrollValue;
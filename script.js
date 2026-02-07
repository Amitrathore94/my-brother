// IMAGE SLIDER
document.addEventListener("DOMContentLoaded", () => {
    let slides = document.querySelectorAll(".slide");
    let index = 0;

    setInterval(() => {
        slides[index].classList.remove("active");
        index = (index + 1) % slides.length;
        slides[index].classList.add("active");
    }, 3000);
});
function createHeart() {
    const heart = document.createElement("div");
    heart.classList.add("heart");
    heart.innerHTML = "❤️";

    heart.style.left = Math.random() * 100 + "vw";
    heart.style.fontSize = (14 + Math.random() * 20) + "px";
    heart.style.animationDuration = (4 + Math.random() * 3) + "s";

    document.querySelector(".hearts").appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 7000);
}

setInterval(createHeart, 400);
const heartBg = document.querySelector(".heart-bg");

function createHeart() {
  const heart = document.createElement("span");
  heart.innerHTML = "💗";

  heart.style.left = Math.random() * 100 + "%";
  heart.style.animationDuration = 4 + Math.random() * 4 + "s";
  heart.style.fontSize = 14 + Math.random() * 16 + "px";

  heartBg.appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, 8000);
}

// create hearts continuously
setInterval(createHeart, 500);

// QUOTES + MUSIC
function toggleQuotes() {
    const quotes = document.getElementById("quotes");
    const music = document.getElementById("bgMusic");

  /*  if (quotes.style.display === "block") {
        quotes.style.display = "none";
        music.pause();
    } else {
        quotes.style.display = "block";
        music.play();
    } */

     const isVisible = window.getComputedStyle(quotes).display === "block";

  if (isVisible) {
    quotes.style.display = "none";
    music.pause();
  } else {
    quotes.style.display = "block";

    // play music safely (GitHub Pages friendly)
    music.play().catch(err => {
      console.log("Music play blocked:", err);
    });
  }
}   

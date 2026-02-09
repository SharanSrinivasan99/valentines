function sayYes() {
  document.getElementById("popup").style.display = "block";

  // Start music
  const music = document.getElementById("bg-music");
  music.play();

  // Confetti burst
  for (let i = 0; i < 30; i++) {
    createHeart();
  }
}

// Close popup when clicking outside
function closePopup(e) {
  if (e.target.classList.contains("popup")) {
    document.getElementById("popup").style.display = "none";
  }
}

// Floating hearts continuously
setInterval(createHeart, 700);

function createHeart() {
  const heart = document.createElement("div");
  heart.className = "heart";
  heart.innerText = "❤️";
  heart.style.left = Math.random() * 100 + "vw";
  heart.style.fontSize = Math.random() * 20 + 20 + "px";
  document.body.appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, 6000);
}

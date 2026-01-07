window.onload = function () {
  const enterBtn = document.getElementById("enterBtn");
  const welcome = document.getElementById("welcome");
  const mainContent = document.getElementById("main-content");

  if (enterBtn) {
    enterBtn.onclick = function () {
      welcome.style.display = "none";
      mainContent.style.display = "block";
    };
  }
};

// 👉 botón para scroll (NO se llama btn)
const scrollBtn = document.getElementById("btnScroll");

if (scrollBtn) {
  scrollBtn.addEventListener("click", () => {
    document.getElementById("nosotros").scrollIntoView({
      behavior: "smooth",
    });
  });
}

// 👉 botón de música (nombre distinto)
const playBtn = document.getElementById("play-btn");
const container = document.getElementById("yt-container");
const player = document.getElementById("yt-player");

// ⚠️ SOLO el ID, no el link completo
const YT_ID = "GrpJzHDb6qk";

if (playBtn) {
  playBtn.addEventListener("click", () => {
    container.style.display = "block";
    player.src = `https://www.youtube.com/embed/${YT_ID}?autoplay=1`;
    playBtn.style.display = "none";
  });
}




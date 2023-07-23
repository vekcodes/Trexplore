const playButton = document.getElementById("play-button");
const pauseButton = document.getElementById("pause-button");
const video = document.querySelector("video");

playButton.addEventListener("click", () => {
  video.play();
});

pauseButton.addEventListener("click", () => {
  video.pause();
});

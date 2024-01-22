const whiteKeys = document.querySelectorAll(".white-key");
const blackKeys = document.querySelectorAll(".black-key");

blackKeys.forEach((black, index) => {
  black.addEventListener("click", () => {
    let sound = new Audio(`./sounds/black-keys/${index}.mp3`);
    playSound(sound);
  });
});

whiteKeys.forEach((white, index) => {
  white.addEventListener("click", () => {
    let sound = new Audio(`./sounds/white-keys/${index}.mp3`);
    playSound(sound);
  });
});

function playSound(sound) {
  sound.pause();
  sound.currentTime = 0;
  sound.play();
}
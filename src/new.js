const icon = document.getElementById("icon");
const overlay = document.getElementById("overlay");
const CloseOverlay = document.getElementById('close_overlay');

icon.addEventListener("click", () => {
    overlay.style.left = "0"; // Sliding in from the left
});

CloseOverlay.addEventListener("click", () => {
    overlay.style.left = "-100%"; // Sliding back out to the left
});
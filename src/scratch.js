const scratchCard = document.querySelector('.scratch-card');
const overlay = document.querySelector('.overlay');
let isScratching = false;

scratchCard.addEventListener('mousedown', () => {
    isScratching = true;
});

scratchCard.addEventListener('mousemove', (e) => {
    if (isScratching) {
        const rect = scratchCard.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        overlay.style.backgroundPositionX = x + 'px';
    }
});

scratchCard.addEventListener('mouseup', () => {
    isScratching = false;
});

scratchCard.addEventListener('mouseleave', () => {
    isScratching = false;
});

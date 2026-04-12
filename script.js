const container = document.querySelector('.ba-container');
const overlay = container.querySelector('.ba-overlay');
const handle = container.querySelector('.ba-handle');

let isDragging = false;

function moveSlider(x) {
  const rect = container.getBoundingClientRect();
  let position = x - rect.left;

  if (position < 0) position = 0;
  if (position > rect.width) position = rect.width;

  overlay.style.width = position + "px";
  handle.style.left = position + "px";
}

handle.addEventListener('mousedown', () => isDragging = true);
window.addEventListener('mouseup', () => isDragging = false);
window.addEventListener('mousemove', (e) => {
  if (!isDragging) return;
  moveSlider(e.clientX);
});

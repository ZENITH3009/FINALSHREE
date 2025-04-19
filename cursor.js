
const sparkle = document.querySelector('.sparkle-cursor');
document.addEventListener('mousemove', (e) => {
  sparkle.style.left = `${e.pageX}px`;
  sparkle.style.top = `${e.pageY}px`;
});

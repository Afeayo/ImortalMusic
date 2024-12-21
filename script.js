// Toggle mobile menu
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

menuToggle.addEventListener('click', () => {
  navLinks.classList.toggle('show');
});

// Download button functionality
document.querySelectorAll('.download-btn').forEach(button => {
  button.addEventListener('click', () => {
    alert('Download started!');
  });
});

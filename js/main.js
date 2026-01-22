const toggle = document.querySelector('.mobile-toggle');
const navLinks = document.querySelector('.nav-links');
const dropdownToggles = document.querySelectorAll('.dropdown-toggle');

if (toggle && navLinks) {
  toggle.addEventListener('click', () => {
    navLinks.classList.toggle('open');
  });
}

dropdownToggles.forEach((toggleButton) => {
  toggleButton.addEventListener('click', (event) => {
    if (window.innerWidth <= 900) {
      event.preventDefault();
      const parent = toggleButton.closest('li');
      if (parent) {
        parent.classList.toggle('dropdown-open');
      }
    }
  });
});

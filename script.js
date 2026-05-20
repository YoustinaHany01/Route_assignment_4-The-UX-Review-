/* ============================================================
   Script — Mobile Side Menu (Drawer)
============================================================ */

const sidebarCheckbox = document.getElementById('sidebar-btn-mobile');
const mobileMenu = document.getElementById('mobile-menu');
const mobileOverlay = document.getElementById('mobile-overlay');
const mobileCloseBtn = document.getElementById('mobile-close-btn');

function openMenu() {
  mobileMenu.classList.add('active');
  mobileOverlay.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeMenu() {
  mobileMenu.classList.remove('active');
  mobileOverlay.classList.remove('active');
  document.body.style.overflow = '';
  sidebarCheckbox.checked = false;
}

// Open on hamburger click
sidebarCheckbox.addEventListener('change', function () {
  if (this.checked) {
    openMenu();
  } else {
    closeMenu();
  }
});

// Close on X button
mobileCloseBtn.addEventListener('click', closeMenu);

// Close on overlay click
mobileOverlay.addEventListener('click', closeMenu);

// Close when a nav link is clicked
mobileMenu.querySelectorAll('.mobile-menu-links a').forEach(link => {
  link.addEventListener('click', closeMenu);
});

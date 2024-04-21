const hamburgerBtn = document.getElementById('hamburger-btn');
const closeBtn = document.getElementById('close-btn');
const phoneMenu = document.getElementById('phone-menu');


hamburgerBtn.addEventListener('click', () => {
  hamburgerBtn.style.display = 'none';
  closeBtn.style.display = 'block';
  phoneMenu.classList.replace('close', 'open')
});

closeBtn.addEventListener('click', () => {
  hamburgerBtn.style.display = 'block';
  closeBtn.style.display = 'none';
  phoneMenu.classList.replace('open', 'close')
});


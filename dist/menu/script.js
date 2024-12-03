const menuButton = document.getElementById('menuButton');
const menu = document.getElementById('menu');
const menuLinks = document.querySelectorAll('.menu-link');

// Открытие/закрытие меню
menuButton.addEventListener('click', () => {
  const isMenuOpen = menu.classList.toggle('open');
  menuButton.textContent = isMenuOpen ? '✖' : '☰'; // Меняем значок
});

// Закрытие меню и смена значка при выборе пункта
menuLinks.forEach(link => {
  link.addEventListener('click', () => {
    menu.classList.remove('open');
    menuButton.textContent = '☰'; // Возвращаем значок меню
  });
});




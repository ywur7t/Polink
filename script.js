const menuIconSVG = `
  <svg width="100%" height="100%" viewBox="0 0 153 64" fill="none" class="svg_btn" xmlns="http://www.w3.org/2000/svg">
<path d="M0 0V4H153V0H0ZM0 30V34H153V30H0ZM0 60V64H153V60H0Z" fill="#790CC7"/>
</svg>
`;

const closeIconSVG = `
  <svg class="close-button" width="80" height="80" viewBox="0 0 111   111" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M4.2621 0L0 4.2621L51.2379 55.5L0 106.738L4.2621 111L55.5 59.7621L106.738 111L111 106.738L59.7621 55.5L111 4.2621L106.738 0L55.5 51.2379L4.2621 0Z" fill="white"/>
</svg>
`;

const menuButton = document.getElementById("menuButton");
const menu = document.getElementById("menu");
const menuLinks = document.querySelectorAll(".menu-link");

menuButton.addEventListener("click", () => {
  const isMenuOpen = menu.classList.toggle("open");
  menuButton.innerHTML = isMenuOpen ? closeIconSVG : menuIconSVG;
});
menuLinks.forEach((link) => {
  link.addEventListener("click", () => {
    menu.classList.remove("open");
    menuButton.innerHTML = menuIconSVG;
  });
});










let lastScrollY = window.scrollY; // Для отслеживания направления прокрутки

document.addEventListener("scroll", () => {
  const blocks = document.querySelectorAll(".block");
  const scrollDirection = window.scrollY > lastScrollY ? "down" : "up";
  const triggerHeight = window.innerHeight * 0.8; // Высота для появления
  const removeHeight = window.innerHeight * 0.2; // Высота для исчезновения

  blocks.forEach(block => {
    const blockTop = block.getBoundingClientRect().top;
    const blockBottom = block.getBoundingClientRect().bottom;

    if (scrollDirection === "down" && blockTop < triggerHeight) {
      // Появление при прокрутке вниз (верхняя граница)
      block.classList.add("active");
    }
    if (scrollDirection === "up" && blockBottom > removeHeight) {
      // Появление при прокрутке вверх (нижняя граница)
      block.classList.add("active");
    }
    if (scrollDirection === "down" && blockBottom < 0) {
      // Исчезновение при прокрутке вниз (вышел за нижнюю границу экрана)
      block.classList.remove("active");
    }
    if (scrollDirection === "up" && blockTop > window.innerHeight) {
      // Исчезновение при прокрутке вверх (вышел за верхнюю границу экрана)
      block.classList.remove("active");
    }
  });

  lastScrollY = window.scrollY; // Обновляем последнее положение прокрутки
});












document.addEventListener('DOMContentLoaded', () => {
  const track = document.querySelector('.carousel-track');
  const items = Array.from(track.children);
  const leftButton = document.querySelector('.nav-button.left');
  const rightButton = document.querySelector('.nav-button.right');
  const filterButtons = document.querySelectorAll('.filter-buttons button');
  const indicatorsContainer = document.querySelector('.carousel-indicators');

  let currentIndex = 0;
  const getItemWidth = () => items[0].getBoundingClientRect().width;

  const updateIndicators = () => {
    const dots = Array.from(indicatorsContainer.children);
    dots.forEach((dot, index) => {
      dot.classList.toggle('active', index === currentIndex);
    });
  };

  const moveToIndex = (index) => {
    currentIndex = index;
    const itemWidth = getItemWidth();
    track.style.transform = `translateX(-${index * itemWidth}px)`;
    updateIndicators();
  };

  const createIndicators = (count) => {
    indicatorsContainer.innerHTML = '';
    for (let i = 0; i < count; i++) {
      const dot = document.createElement('div');
      dot.classList.add('dot');
      if (i === currentIndex) dot.classList.add('active');
      dot.addEventListener('click', () => moveToIndex(i));
      indicatorsContainer.appendChild(dot);
    }
  };

  const filterItems = (category) => {
    const filteredItems = items.filter((item) =>
      category === 'all' || item.dataset.category === category
    );
    track.innerHTML = '';
    filteredItems.forEach((item) => track.appendChild(item));
    currentIndex = 0;
    createIndicators(filteredItems.length);
    moveToIndex(0);
  };

  filterButtons.forEach((button) => {
    button.addEventListener('click', () => {
      const isActive = button.classList.contains('active');

      filterButtons.forEach((btn) => btn.classList.remove('active'));

      if (!isActive) {
        button.classList.add('active');
        filterItems(button.dataset.filter);
      } else {
        filterItems('all'); // Показать все элементы
      }
    });
  });

  leftButton.addEventListener('click', () => {
    const maxIndex = track.children.length - 1;
    if (currentIndex > 0) moveToIndex(currentIndex - 1);
    else moveToIndex(maxIndex); // Цикличная навигация
  });

  rightButton.addEventListener('click', () => {
    const maxIndex = track.children.length - 1;
    if (currentIndex < maxIndex) moveToIndex(currentIndex + 1);
    else moveToIndex(0); // Цикличная навигация
  });

  // Initial setup
  filterItems('all');
});




document.addEventListener('DOMContentLoaded', () => {
  const main = document.querySelector('#main');
  const highResImage = new Image();

  highResImage.src = './src/main.png';
  highResImage.onload = () => {
    main.style.backgroundImage = `url(${highResImage.src})`;
    main.classList.add('loaded');
  };
});
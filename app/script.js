// const block = document.getElementById('scrollBlock');
// let initialOffsetTop = block.offsetTop;
// let lastScrollY = window.scrollY;
// function checkVisibility() {
//     const rect = block.getBoundingClientRect();
//     if (rect.top <= 0 && window.scrollY > lastScrollY) {block.classList.add('fixed');}
//     else if (window.scrollY < initialOffsetTop) {block.classList.remove('fixed');}
// }
// window.addEventListener('scroll', () => {checkVisibility();lastScrollY = window.scrollY;});



// const wrapper = document.getElementById('conteiner-items');
// let wrapperinitialOffsetTop = wrapper.offsetTop;
// let wrapperlastScrollY = window.scrollY;
// function checkVisibility() {
//     const rect = wrapper.getBoundingClientRect();
//     if (rect.top <= 0 && window.scrollY > wrapperlastScrollY) {wrapper.classList.add('fixed');}
//     else if (window.scrollY < wrapperinitialOffsetTop) {wrapper.classList.remove('fixed');}
// }
// window.addEventListener('scroll', () => {checkVisibility();lastScrollY = window.scrollY;});




// const stickyElements = document.querySelectorAll('.sticky-element');

// stickyElements.forEach(element => {
//     const originalTop = element.offsetTop;

//     window.addEventListener('scroll', () => {
//         const scrollPosition = window.scrollY;

//         if (scrollPosition >= originalTop) {
//             element.style.position = 'fixed';
//             element.style.top = '0';
//         } else {
//             element.style.position = 'sticky';
//             element.style.top = originalTop + 'px';
//         }
//     });
// });
















// Получаем ссылки на блоки
const leftBlock = document.getElementById('leftBlock');
const rightBlock = document.getElementById('rightBlock');

// Синхронизируем горизонтальную прокрутку левого блока с вертикальной прокруткой правого
leftBlock.addEventListener('scroll', function() {
    // Прокручиваем правый блок в зависимости от положения левого блока
    rightBlock.scrollTop = (leftBlock.scrollLeft / (leftBlock.scrollWidth - leftBlock.clientWidth)) * (rightBlock.scrollHeight - rightBlock.clientHeight);
});

// Синхронизируем вертикальную прокрутку правого блока с горизонтальной прокруткой левого
rightBlock.addEventListener('scroll', function() {
    // Прокручиваем левый блок в зависимости от положения правого блока
    leftBlock.scrollLeft = (rightBlock.scrollTop / (rightBlock.scrollHeight - rightBlock.clientHeight)) * (leftBlock.scrollWidth - leftBlock.clientWidth);
});







// const menuIconSVG = `<img src="../src/menu_unact.svg" alt="icon">`
// const closeIconSVG = `<img src="../src/menu_act.svg" alt="icon">`

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

const menuButton = document.getElementById('menuButton');
const menu = document.getElementById('menu');
const menuLinks = document.querySelectorAll('.menu-link');


menuButton.addEventListener('click', () => {
    const isMenuOpen = menu.classList.toggle('open');
    menuButton.innerHTML = isMenuOpen ? closeIconSVG : menuIconSVG;
  });

  // Закрытие меню при выборе пункта
  menuLinks.forEach(link => {
    link.addEventListener('click', () => {
      menu.classList.remove('open');
      menuButton.innerHTML = menuIconSVG;
    });
  });
















// const verticalq = document.getElementById('verticalq');
//     const horizontalq = document.getElementById('horizontalq');

//     window.addEventListener('scroll', () => {
//       // Рассчитываем текущую позицию прокрутки страницы
//       const scrollRatio = window.scrollY / (document.body.scrollHeight - window.innerHeight);

//       // Обновляем прокрутку вертикального блока
//       verticalq.scrollTop = scrollRatio * (verticalq.scrollHeight - verticalq.clientHeight);

//       // Обновляем прокрутку горизонтального блока
//       horizontalq.scrollLeft = scrollRatio * (horizontalq.scrollWidth - horizontalq.clientWidth);
//     });




    // vertical.addEventListener('scroll', () => {
    //   const scrollRatio = vertical.scrollTop / (vertical.scrollHeight - vertical.clientHeight);
    //   horizontal.scrollLeft = scrollRatio * (horizontal.scrollWidth - horizontal.clientWidth);
    // });

    // horizontal.addEventListener('scroll', () => {
    //   const scrollRatio = horizontal.scrollLeft / (horizontal.scrollWidth - horizontal.clientWidth);
    //   vertical.scrollTop = scrollRatio * (vertical.scrollHeight - vertical.clientHeight);
    // });


// const vertical = document.getElementById('vertical');
//     const horizontal = document.getElementById('horizontal');


//     vertical.addEventListener('scroll', (e) => e.preventDefault());
//     horizontal.addEventListener('scroll', (e) => e.preventDefault());

//     window.addEventListener('scroll', () => {
//         // Рассчитываем текущую позицию прокрутки страницы
//         const scrollRatio = window.scrollY / (document.body.scrollHeight - window.innerHeight);

//         // Обновляем прокрутку вертикального блока
//         vertical.scrollTop = scrollRatio * (vertical.scrollHeight - vertical.clientHeight);

//         // Обновляем прокрутку горизонтального блока
//         horizontal.scrollLeft = scrollRatio * (horizontal.scrollWidth - horizontal.clientWidth);
//       });











      // let current = 0;
      // const blocks = document.querySelectorAll('.block');
      // const shiftX = 20; // Горизонтальное смещение
      // const shiftY = 20; // Вертикальное смещение

      // function nextBlock() {
      //   // Убираем текущий блок назад
      //   blocks[current].style.zIndex = 0;
      //   blocks[current].style.transform = `translate(-${shiftX}px, -${shiftY}px)`;
      //   blocks[current].style.opacity = 0.6;

      //   // Переходим к следующему блоку
      //   current = (current + 1) % blocks.length;

      //   // Выводим следующий блок на передний план
      //   blocks[current].style.zIndex = 1;
      //   blocks[current].style.transform = 'translate(0, 0)';
      //   blocks[current].style.opacity = 1;
      // }

      // // Смена блоков каждые 2 секунды
      // setInterval(nextBlock, 2000);




      // document.addEventListener("scroll", () => {
      //   const servicesMain = document.querySelector(".services-main");
      //   const rightBlocks = document.querySelector(".right-blocks");

      //   const rect = servicesMain.getBoundingClientRect();

      //   // Проверяем, когда верх services-main достигает верха экрана
      //   if (rect.top <= 0) {
      //     rightBlocks.style.position = "fixed";
      //     rightBlocks.style.top = "0";
      //     rightBlocks.style.bottom = "0";
      //     rightBlocks.style.overflowY = "auto";
      //   } else {
      //     rightBlocks.style.position = "relative";
      //     rightBlocks.style.top = "";
      //     rightBlocks.style.bottom = "";
      //     rightBlocks.style.overflowY = "visible";
      //   }
      // });






      // const container = document.querySelector('.scrollable');
      // const items = document.querySelectorAll('.right-blocks .item-wrapper');

      // container.addEventListener('scroll', () => {
      //   const fourthItem = items[3]; // Получаем 4-й элемент
      //   const containerRect = container.getBoundingClientRect();
      //   const fourthItemRect = fourthItem.getBoundingClientRect();

      //   // Проверяем, если 4-й элемент полностью виден
      //   if (fourthItemRect.top >= containerRect.top) {
      //     container.style.overflowY = 'hidden'; // Останавливаем прокрутку
      //   } else {
      //     container.style.overflowY = 'auto'; // Включаем прокрутку
      //   }
      // });
















// const scrollableContainer = document.getElementsByClassName('.right-blocks');

// window.addEventListener('scroll', () => {
//   // Получаем процент прокрутки страницы
//   const scrollPercentage =
//     window.scrollY / (document.body.scrollHeight - window.innerHeight);

//   // Вычисляем новую позицию скролла для контейнера
//   const containerScrollHeight =
//     scrollableContainer.scrollHeight - scrollableContainer.clientHeight;
//   const newScrollTop = scrollPercentage * containerScrollHeight;

//   // Применяем прокрутку контейнера
//   scrollableContainer.scrollTop = newScrollTop;
// });

// scrollableContainer.addEventListener('scroll', (e) => {
//   e.preventDefault(); // Предотвращаем стандартный скролл страницы
// });

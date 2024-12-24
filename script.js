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

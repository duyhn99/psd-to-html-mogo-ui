window.addEventListener("load", function () {
  const toggle = document.querySelector(".header-toggle");
  const menu = document.querySelector(".header-menu");
  const expandClass = "is-expand";
  toggle && toggle.addEventListener("click", handleToggleMenu);
  function handleToggleMenu(e) {
    menu && menu.classList.add(expandClass);
  }
  document.addEventListener("click", handleClickOutside);
  function handleClickOutside(e) {
    if (e.target.matches(".header-toggle") || e.target.matches(".menu, .menu *")) return;
    menu && menu.classList.remove(expandClass);
  }
});
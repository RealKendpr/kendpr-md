const menuBtn = document.getElementsByClassName("menu-button");
const openBtn = document.getElementsByClassName("open-button")[0];
const menu = document.getElementsByClassName("menu")[0];
const voidBg = document.getElementsByClassName("void")[0];

function closeMenu() {
  menu.classList.remove("active");
  voidBg.classList.remove("active");
  openBtn.classList.remove("noBtn");
}
function openMenu() {
  openBtn.classList.add("noBtn");
  menu.classList.add("active");
  voidBg.classList.add("active");
}

for (let i = 0; i < menuBtn.length; i++) {
  const twoButton = menuBtn[i];

  twoButton.addEventListener("click", () => {
    if (menu.classList.contains("active")) {
      closeMenu();
    } else {
      openMenu();
    }
  });
}

voidBg.addEventListener("click", () => {
  closeMenu();
});

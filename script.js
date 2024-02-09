const menuBtn = document.getElementsByClassName("menu-button");
const openBtn = document.getElementsByClassName("open-button")[0];
const menu = document.getElementsByClassName("menu")[0];

function openMenu() {
  menu.showModal();
  menu.classList.add("active");
  openBtn.classList.add("noBtn");
}
function closeMenu() {
  menu.close();
  menu.classList.remove("active");
  openBtn.classList.remove("noBtn");
}

for (let i = 0; i < menuBtn.length; i++) {
  const twoButton = menuBtn[i];

  twoButton.addEventListener("click", () => {
    if (menu.hasAttribute("open")) {
      closeMenu();
    } else {
      openMenu();
    }
  });
}

menu.addEventListener("click", (event) => {
  var rect = menu.getBoundingClientRect();
  var isInMenu =
    rect.top <= event.clientY &&
    event.clientY <= rect.top + rect.height &&
    rect.left <= event.clientX &&
    event.clientX <= rect.left + rect.width;
  if (!isInMenu) {
    closeMenu();
  }
});

const lightFx = document.getElementsByClassName("light-effect")[0];
const codeWrapper = document.getElementById("code-wrapper");

codeWrapper.addEventListener("mousemove", (e) => {
  const height = lightFx.offsetHeight;
  const width = lightFx.offsetWidth;

  lightFx.style.left = `${e.pageX - width / 2 + 10}px`;
  lightFx.style.top = `${e.pageY - height / 2 - 20}px`;
});

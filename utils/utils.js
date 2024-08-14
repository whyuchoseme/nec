export function createModal(divWithContent, modalClassName) {
  const overlay = document.createElement("div");
  overlay.classList.add("overlay");
  document.body.append(overlay);

  overlay.addEventListener("click", (event) => {
    if (event.target == overlay) {
      overlayOff(divWithContent, overlay);
    }
  });

  overlayOn(divWithContent);

  const closeModal = document.createElement("button");
  closeModal.classList.add("modal__close");
  closeModal.innerHTML = `<img class="cross-svg" src="./img/cross.svg" alt="cross" />`;
  overlay.append(closeModal);

  closeModal.addEventListener("click", () => {
    overlayOff(divWithContent, overlay);
  });

  const modal = document.createElement("div");
  modal.classList.add("overlay__modal", `modal-${modalClassName}`, "modal");
  overlay.append(modal);
}

function overlayOn(divWithContent) {
  const scrollbarWidth =
    window.innerWidth - document.documentElement.clientWidth; // Высчитывание длинны скроллбара, чтобы при дальнейшем скрытии контент не сдвигался
  document.body.style.marginRight = scrollbarWidth + "px";
  document.body.style.overflowY = "hidden";
  divWithContent.style.filter = "blur(4px)";
}

function overlayOff(divWithContent, overlay) {
  document.querySelector(".modal__title").style.animation =
    "from-left-reverse 0.7s forwards";
  document.querySelector(".modal__ul").style.animation =
    "from-left-reverse 0.7s forwards";
  document.querySelector(".modal__button").style.animation =
    "from-bottom-reverse 0.7s forwards";
  document.querySelector(".modal__right").style.animation =
    "from-right-reverse 0.7s forwards";
  overlay.style.animation = "fadeout 0.5s forwards";

  setTimeout(() => {
    document.body.style.marginRight = 0;
    document.body.style.overflowY = "visible";
    divWithContent.style.filter = "none";
    overlay.remove();
  }, 300);
}

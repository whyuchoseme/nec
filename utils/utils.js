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
  closeModal.innerHTML = `<img class="cross-svg" src="../img/cross.svg" alt="cross" />`;
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

export function createPhoneNumber(numbers) {
  let trueNumber = "xxxxxxxxxxxx";
  for (let i = 0; i < numbers.length; i++) {
    if (Number(numbers[i]) || numbers[i] == "+")
      trueNumber = trueNumber.replace("x", numbers[i]);
  }

  return trueNumber;
}

export function showMask(mask) {
  mask.updateOptions({
    lazy: false,
  });
  mask.alignCursor();
}

export function hiddenMask(mask) {
  mask.value = "";
  mask.updateOptions({
    lazy: true,
  });
}

export function createModalFeedback(divWithContent) {
  const overlay = document.createElement("div");
  overlay.classList.add("overlay-feedback");
  document.body.append(overlay);

  overlay.addEventListener("click", (event) => {
    if (event.target == overlay) {
      overlayFeedbackOff(divWithContent, overlay);
    }
  });

  overlayFeedbackOn(divWithContent);

  const closeModal = document.createElement("button");
  closeModal.classList.add("modal-feedback__close");
  closeModal.innerHTML = `<img class="cross-svg" src="../img/cross.svg" alt="cross" />`;
  overlay.append(closeModal);

  closeModal.addEventListener("click", () => {
    overlayFeedbackOff(divWithContent, overlay);
  });

  const modal = document.createElement("div");
  modal.classList.add("overlay__modal-feedback", "modal-feedback");
  overlay.append(modal);

  // CLOSE LAST MODAL
  closeLastModal(modal);
  //

  const modalLeft = document.createElement("div");
  modalLeft.classList.add("modal-feedback__left");
  modal.append(modalLeft);

  const modalLeftTitle = document.createElement("h1");
  modalLeftTitle.classList.add("modal-feedback__title");
  modalLeftTitle.textContent = "Рассчитать стоимость";
  modalLeft.append(modalLeftTitle);

  const modalLeftParagraph1 = document.createElement("p");
  modalLeftParagraph1.classList.add("modal-feedback__paragraph");
  modalLeftParagraph1.textContent = "Оставьте свои контакты и описание задачи.";
  modalLeft.append(modalLeftParagraph1);

  const modalLeftParagraph2 = document.createElement("p");
  modalLeftParagraph2.classList.add("modal-feedback__paragraph");
  modalLeftParagraph2.textContent = "Мы свяжемся с Вами и обсудим стоимость.";
  modalLeft.append(modalLeftParagraph2);

  const modalLeftInput = document.createElement("form");
  modalLeftInput.classList.add("modal-feedback__input", "input-feedback-form");
  modalLeftInput.innerHTML = `
      <div class="input-feedback-form__name">
        <input
          class="input-feedback-name"
          type="text"
          id="input-feedback-name"
          placeholder="Ваше имя"
        />
      </div>
      <div class="input-feedback-form__phone">
        <input
          class="input-feedback-phone"
          type="tel"
          id="input-feedback-phone"
          placeholder="+7 (999) 999-99-99"
        />
      </div>
      <div class="input-feedback-form__email">
        <input
          class="input-feedback-email"
          type="email"
          id="input-feedback-email"
          placeholder="Email"
        />
      </div>
      <div class="input-feedback-form__text">
      <textarea class="input-feedback-text" name="input-feedback-text" rows="6" cols="40" placeholder="Описание задачи" spellcheck="true"></textarea>
      </div>
      <div class="input-feedback-form__checkbox">
        <input class="checkbox-feedback" type="checkbox" id="confirm-feedback" />
        <label class="checkbox-feedback-text" for="confirm-feedback">
          Я соглашаюсь с политикой обработки персональных данных.
        </label>
      </div>
  `;
  modalLeft.append(modalLeftInput);

  const modalLeftButton = document.createElement("button");
  modalLeftButton.classList.add("modal-feedback__button", "feedback-button");
  modalLeftButton.textContent = "Отправить";
  modalLeft.append(modalLeftButton);

  const modalLeftParagraph3 = document.createElement("p");
  modalLeftParagraph3.classList.add("modal-feedback__paragraph-confirm");
  modalLeftParagraph3.innerHTML = `Заполнение Вами данной заявки и её направление нам означают предоставление Вами согласия на обработку Ваших персональных данных в соответствии с <a>Условиями обработки данных на сайте.</a>`;
  modalLeft.append(modalLeftParagraph3);

  /*  */
  /* INTERACTION */
  /*  */

  const feedbackInputName = document.querySelector(".input-feedback-name");
  const feedbackInputPhone = document.querySelector(".input-feedback-phone");
  const feedbackInputEmail = document.querySelector(".input-feedback-email");
  const feedbackInputText = document.querySelector(".input-feedback-text");
  const feedbackInputTextHeight = feedbackInputText.offsetHeight;
  const feedbackCheckbox = document.querySelector(".checkbox-feedback");
  const feedbackInputConfirm = document.querySelector(
    ".modal-feedback__button"
  );

  const maskFeedback = IMask(feedbackInputPhone, {
    mask: "+{7} (000) 000-00-00",
    placeholderChar: "_",
  });

  let trueNumberFeedback = 0;

  feedbackInputPhone.addEventListener("click", () => {
    showMask(maskFeedback);
  });

  feedbackInputText.addEventListener("focusout", () => {
    feedbackInputText.style.height = feedbackInputTextHeight + "px";
  });

  feedbackInputConfirm.addEventListener("click", () => {
    if (
      feedbackCheckbox.checked &&
      feedbackInputName.value.length &&
      feedbackInputPhone.value.replace(/[_-]/g, "").length === 16 &&
      feedbackInputEmail.value.length &&
      feedbackInputText.value.length
    ) {
      alert(
        `
        Your Name: ${feedbackInputName.value}
        Your Phone Number: ${feedbackInputPhone.value}
        Your Email: ${feedbackInputEmail.value}
        Your Text: ${feedbackInputText.value}
        `
      );
      // Для отправки настоящего номера на почту организации
      trueNumberFeedback = createPhoneNumber(feedbackInputPhone.value);
      //
      restoreAllFeedbackInput();
      hiddenMask(maskFeedback);
    } else {
      if (!feedbackInputName.value.length) {
        feedbackInputName.classList.add("add-border");
      } else {
        feedbackInputName.classList.remove("add-border");
      }

      if (!feedbackInputEmail.value.length) {
        feedbackInputEmail.classList.add("add-border");
      } else {
        feedbackInputEmail.classList.remove("add-border");
      }

      if (!feedbackInputText.value.length) {
        feedbackInputText.classList.add("add-border");
      } else {
        feedbackInputText.classList.remove("add-border");
      }

      if (feedbackInputPhone.value.replace(/[_-]/g, "").length !== 16) {
        feedbackInputPhone.classList.add("add-border");
      } else {
        feedbackInputPhone.classList.remove("add-border");
      }

      if (!feedbackCheckbox.checked) {
        feedbackCheckbox.parentElement.classList.add("add-border");
      } else {
        feedbackCheckbox.parentElement.classList.remove("add-border");
      }

      alert("Вы заполнили не все поля, обязательные к заполнению");
    }
  });

  function restoreAllFeedbackInput() {
    feedbackInputName.value = "";
    feedbackInputPhone.value = "";
    feedbackInputEmail.value = "";
    feedbackInputText.value = "";
    feedbackInputText.style.height = feedbackInputTextHeight + "px";
    feedbackCheckbox.checked = false;
    feedbackInputName.classList.remove("add-border");
    feedbackInputPhone.classList.remove("add-border");
    feedbackInputEmail.classList.remove("add-border");
    feedbackInputText.classList.remove("add-border");
    feedbackCheckbox.parentElement.classList.remove("add-border");
  }
}

function overlayFeedbackOn(divWithContent) {
  if (!document.querySelector(".overlay")) {
    const scrollbarWidth =
      window.innerWidth - document.documentElement.clientWidth; // Высчитывание длинны скроллбара, чтобы при дальнейшем скрытии контент не сдвигался
    document.body.style.marginRight = scrollbarWidth + "px";
  }
  document.body.style.overflowY = "hidden";
  divWithContent.style.filter = "blur(4px)";
}

function overlayFeedbackOff(divWithContent, overlay) {
  overlay.style.animation = "fadeout 0.4s forwards";
  overlay.style.overflowY = "hidden";
  divWithContent.style.filter = "none";
  document.body.style.marginRight = 0;
  document.body.style.overflowY = "visible";

  setTimeout(() => {
    overlay.remove();
  }, 300);
}

function closeLastModal(modal) {
  if (document.querySelector(".overlay")) {
    modal.style.animationDuration = "0.3s";
    document.querySelector(".overlay").remove();
  }
}

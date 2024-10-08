import {
  createModalFeedback,
  createPhoneNumber,
  phoneInputInteraction,
} from "./utils/utils.js";

/*  */
/* HEADER */
/*  */

const content = document.querySelector(".content");
const reload = document.querySelector(".header__left");
const phoneButton = document.querySelector(".right__phone");
const transportServices = document.querySelector(".rate__transport-services");

/*  */
/* CONTENT */
/*  */

/*  */
/* FOOTER */
/*  */

const footerInputName = document.querySelector(".input-name");
const footerInputPhone = document.querySelector(".input-phone");
const footerCheckbox = document.querySelector(".checkbox");
const footerInputConfirm = document.querySelector(".input-form__btn");

/*  */
/* INTERACTION */
/*  */

//
/* ANIMATION FOR OBSERVE */
const animationFromLeft = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.style.animation = "from-left 0.7s forwards";
    }
  });
});

const animationFromRight = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.style.animation = "from-right 0.7s forwards";
    }
  });
});

const animationFromBottom = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.style.animation = "from-bottom 0.7s forwards";
    }
  });
});

const allFromLeftAnimation = document.querySelectorAll(".animationFromLeft");
const allFromRightAnimation = document.querySelectorAll(".animationFromRight");
const allFromBottomAnimation = document.querySelectorAll(
  ".animationFromBottom"
);

allFromLeftAnimation.forEach((elem) => animationFromLeft.observe(elem));
allFromRightAnimation.forEach((elem) => animationFromRight.observe(elem));
allFromBottomAnimation.forEach((elem) => animationFromBottom.observe(elem));
/*  */
//

/*  */
/* HEADER */
/*  */

reload.addEventListener("click", () => {
  location.reload();
  location.href = "index.html";
});

phoneButton.addEventListener("click", () => {
  window.open("tel:+74955325212", "_blank");
});

transportServices.addEventListener("click", () => {
  createModalFeedback(content);
});

/*  */
/* CONTENT */
/*  */

/*  */
/* FOOTER */
/*  */

let trueNumber = 0;

footerInputPhone.addEventListener("click", () => {
  phoneInputInteraction(footerInputPhone);
});

footerInputConfirm.addEventListener("click", () => {
  if (
    footerCheckbox.checked &&
    footerInputName.value.length &&
    footerInputPhone.value.replace(/\D/g, "").length >= 11
  ) {
    alert(
      `Your Name: ${footerInputName.value}\nYour Phone Number: ${footerInputPhone.value}`
    );
    // Для отправки настоящего номера на почту организации
    trueNumber = createPhoneNumber(footerInputPhone.value);
    //
    restoreAllInput();
  } else {
    if (!footerInputName.value.length) {
      footerInputName.classList.add("add-border");
    } else {
      footerInputName.classList.remove("add-border");
    }

    if (footerInputPhone.value.replace(/\D/g, "").length < 11) {
      footerInputPhone.classList.add("add-border");
    } else {
      footerInputPhone.classList.remove("add-border");
    }

    if (!footerCheckbox.checked) {
      footerCheckbox.parentElement.classList.add("add-border");
    } else {
      footerCheckbox.parentElement.classList.remove("add-border");
    }

    alert("Вы заполнили не все поля, обязательные к заполнению");
  }
});

function restoreAllInput() {
  footerInputName.value = "";
  footerInputPhone.value = "";
  footerCheckbox.checked = false;
  footerInputName.classList.remove("add-border");
  footerInputPhone.classList.remove("add-border");
  footerCheckbox.parentElement.classList.remove("add-border");
}

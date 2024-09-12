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

const internshipInputName = document.querySelector(".input-internship-name");
const internshipInputPhone = document.querySelector(".input-internship-phone");
const internshipInputEmail = document.querySelector(".input-internship-email");
const internshipInputStudies = document.querySelector(
  ".input-internship-studies"
);
const internshipInputFaculty = document.querySelector(
  ".input-internship-faculty"
);
const internshipInputCourse = document.querySelector(
  ".input-internship-course"
);
const internshipInputText = document.querySelector(".input-internship-text");
const internshipInputTextHeight = internshipInputText.offsetHeight;
const internshipInputResume = document.querySelector(
  ".input-internship-resume"
);

const internshipCheckbox = document.querySelector(".checkbox-internship");
const internshipInputConfirm = document.querySelector(
  ".internship__input-button"
);

let trueNumberFeedback = 0;

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

const animationFromUpper = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.style.animation = "from-upper 0.7s forwards";
    }
  });
});

const animationTurnUp = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.style.animation = "turn-up 1s forwards";
    }
  });
});

const allFromLeftAnimation = document.querySelectorAll(".animationFromLeft");
const allFromRightAnimation = document.querySelectorAll(".animationFromRight");
const allFromUpperAnimation = document.querySelectorAll(".animationFromUpper");
const allTurnUpAnimation = document.querySelectorAll(".animationTurnUp");

allFromLeftAnimation.forEach((elem) => animationFromLeft.observe(elem));
allFromRightAnimation.forEach((elem) => animationFromRight.observe(elem));
allFromUpperAnimation.forEach((elem) => animationFromUpper.observe(elem));
allTurnUpAnimation.forEach((elem) => animationTurnUp.observe(elem));
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

internshipInputPhone.addEventListener("click", () => {
  phoneInputInteraction(internshipInputPhone);
});

internshipInputText.addEventListener("focusout", () => {
  internshipInputText.style.height = internshipInputTextHeight + "px";
});

internshipInputConfirm.addEventListener("click", () => {
  if (
    internshipCheckbox.checked &&
    internshipInputName.value.length &&
    internshipInputPhone.value.replace(/\D/g, "").length >= 11 &&
    internshipInputEmail.value.length &&
    internshipInputStudies.value.length &&
    internshipInputFaculty.value.length &&
    // internshipInputCourse.value.length &&
    internshipInputText.value.length &&
    internshipInputResume.value.length
  ) {
    alert(
      `
          Your Name: ${internshipInputName.value}
          Your Phone Number: ${internshipInputPhone.value}
          Your Email: ${internshipInputEmail.value}
          Your Studies: ${internshipInputStudies.value}
          Your Faculty: ${internshipInputFaculty.value}
          Your Course: ${internshipInputCourse.value}
          Your Text: ${internshipInputText.value}
          Your Resume: ${internshipInputResume.value}
          `
    );
    // Для отправки настоящего номера на почту организации
    trueNumberFeedback = createPhoneNumber(internshipInputPhone.value);
    //
    restoreAllFeedbackInput();
  } else {
    if (!internshipInputName.value.length) {
      internshipInputName.classList.add("add-border");
    } else {
      internshipInputName.classList.remove("add-border");
    }

    if (internshipInputPhone.value.replace(/\D/g, "").length < 11) {
      internshipInputPhone.classList.add("add-border");
    } else {
      internshipInputPhone.classList.remove("add-border");
    }

    if (!internshipInputEmail.value.length) {
      internshipInputEmail.classList.add("add-border");
    } else {
      internshipInputEmail.classList.remove("add-border");
    }

    if (!internshipInputStudies.value.length) {
      internshipInputStudies.classList.add("add-border");
    } else {
      internshipInputStudies.classList.remove("add-border");
    }

    if (!internshipInputFaculty.value.length) {
      internshipInputFaculty.classList.add("add-border");
    } else {
      internshipInputFaculty.classList.remove("add-border");
    }

    // if (!internshipInputCourse.value.length) {
    //   internshipInputCourse.classList.add("add-border");
    // } else {
    //   internshipInputCourse.classList.remove("add-border");
    // }

    if (!internshipInputText.value.length) {
      internshipInputText.classList.add("add-border");
    } else {
      internshipInputText.classList.remove("add-border");
    }

    if (!internshipInputResume.value.length) {
      internshipInputResume.classList.add("add-border");
    } else {
      internshipInputResume.classList.remove("add-border");
    }

    if (!internshipCheckbox.checked) {
      internshipCheckbox.parentElement.classList.add("add-border");
    } else {
      internshipCheckbox.parentElement.classList.remove("add-border");
    }

    alert("Вы заполнили не все поля, обязательные к заполнению");
  }
});

function restoreAllFeedbackInput() {
  internshipInputName.value = "";
  internshipInputPhone.value = "";
  internshipInputEmail.value = "";
  internshipInputStudies.value = "";
  internshipInputFaculty.value = "";
  internshipInputCourse.value = 1;
  internshipInputText.value = "";
  internshipInputText.style.height = internshipInputTextHeight + "px";
  internshipInputResume.value = "";
  internshipCheckbox.checked = false;
  internshipInputName.classList.remove("add-border");
  internshipInputPhone.classList.remove("add-border");
  internshipInputEmail.classList.remove("add-border");
  internshipInputStudies.classList.remove("add-border");
  internshipInputFaculty.classList.remove("add-border");
  // internshipInputCourse.classList.remove("add-border");
  internshipInputText.classList.remove("add-border");
  internshipCheckbox.parentElement.classList.remove("add-border");
  internshipInputResume.classList.remove("add-border");
}

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

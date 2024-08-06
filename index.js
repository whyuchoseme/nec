const reload = document.querySelector(".header__left");
const telephoneBtn = document.querySelector(".right__telephone");

reload.addEventListener("click", () => {
  location.reload();
  location.href = "index.html";
});

telephoneBtn.addEventListener("click", () => {
  window.open("tel:+74955325212", "_blank");
});

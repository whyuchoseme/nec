const reload = document.querySelector(".header__left");
const telephoneBtn = document.querySelector(".right__telephone");

const seaFreight = document.querySelector(".services__sea-freight");
const railwayFreight = document.querySelector(".services__railway-freight");
const airFreight = document.querySelector(".services__air-freight");
const roadFreight = document.querySelector(".services__road-freight");
const warehousingServices = document.querySelector(
  ".services__warehousing-services"
);
const oversizedCargoesTransportation = document.querySelector(
  ".services__oversized-cargoes-transportation"
);

reload.addEventListener("click", () => {
  location.reload();
  location.href = "index.html";
});

telephoneBtn.addEventListener("click", () => {
  window.open("tel:+74955325212", "_blank");
});

seaFreight.addEventListener("click", () => {
  location.href = "#";
});

railwayFreight.addEventListener("click", () => {
  location.href = "#";
});

airFreight.addEventListener("click", () => {
  location.href = "#";
});

roadFreight.addEventListener("click", () => {
  location.href = "#";
});

warehousingServices.addEventListener("click", () => {
  location.href = "#";
});

oversizedCargoesTransportation.addEventListener("click", () => {
  location.href = "#";
});

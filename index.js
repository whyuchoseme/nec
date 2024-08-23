import { createModal } from "./utils/utils.js";

/*  */
/* HEADER */
/*  */

const content = document.querySelector(".content");
const reload = document.querySelector(".header__left");
const phoneButton = document.querySelector(".right__phone");

/*  */
/* SERVICES */
/*  */

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

/*  */
/* ADDITIONAL-SERVICES */
/*  */

const insurance = document.querySelector(".cards__insurance");
const foreignEconomicActivity = document.querySelector(
  ".cards__foreignEconomicActivity"
);
const consulting = document.querySelector(".cards__consulting");
const customsClearance = document.querySelector(".cards__customsClearance");

/*  */
/* INTERACTION */
/*  */

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

/*  */
/* SERVICES */
/*  */

seaFreight.addEventListener("click", () => {
  createModal(content, "sea");

  const modalLeft = document.createElement("div");
  modalLeft.classList.add("modal__left-sea", "modal__left");
  document.querySelector(".modal").append(modalLeft);

  const modalLeftTitle = document.createElement("h1");
  modalLeftTitle.classList.add("modal__sea-title", "modal__title");
  modalLeftTitle.textContent = "Морские перевозки";
  modalLeft.append(modalLeftTitle);

  const ul = document.createElement("ul");
  ul.classList.add("ul-sea", "modal__ul");
  modalLeft.append(ul);

  const li1 = document.createElement("li");
  li1.textContent =
    "Импортные отправки через Владивосток/Восточный, СПБ, Новороссийск;";
  ul.append(li1);

  const li2 = document.createElement("li");
  li2.textContent = "Сборные грузы;";
  ul.append(li2);

  const li3 = document.createElement("li");
  li3.textContent =
    "Дополнительные сервисы по консолидации, маркировке, хранению в странах отгрузки;";
  ul.append(li3);

  const li4 = document.createElement("li");
  li4.textContent = "Перевозки опасных и негабаритных грузов.";
  ul.append(li4);

  const modalLeftButton = document.createElement("button");
  modalLeftButton.classList.add("modal__button", "services-button");
  modalLeftButton.textContent = "Рассчитать стоимость";
  modalLeft.append(modalLeftButton);

  const modalRight = document.createElement("div");
  modalRight.classList.add("modal__right-sea", "modal__right");
  document.querySelector(".modal").append(modalRight);
});

railwayFreight.addEventListener("click", () => {
  createModal(content, "railway");

  const modalLeft = document.createElement("div");
  modalLeft.classList.add("modal__left-railway", "modal__left");
  document.querySelector(".modal").append(modalLeft);

  const modalLeftTitle = document.createElement("h1");
  modalLeftTitle.classList.add("modal__railway-title", "modal__title");
  modalLeftTitle.textContent = "Железнодорожные перевозки";
  modalLeft.append(modalLeftTitle);

  const ul = document.createElement("ul");
  ul.classList.add("ul-railway", "modal__ul");
  modalLeft.append(ul);

  const li1 = document.createElement("li");
  li1.textContent =
    "Основные направления Китай – РФ, Китай -Казахстан, Европа - РФ;";
  ul.append(li1);

  const li2 = document.createElement("li");
  li2.textContent = "Перевозки полных контейнеров и сборных отправок;";
  ul.append(li2);

  const li3 = document.createElement("li");
  li3.textContent = "Большой выбор станций отправления в Китае;";
  ul.append(li3);

  const li4 = document.createElement("li");
  li4.textContent = "Вывоз с бондовых зон для последующей отправки по жд.";
  ul.append(li4);

  const modalLeftButton = document.createElement("button");
  modalLeftButton.classList.add("modal__button", "services-button");
  modalLeftButton.textContent = "Рассчитать стоимость";
  modalLeft.append(modalLeftButton);

  const modalRight = document.createElement("div");
  modalRight.classList.add("modal__right-railway", "modal__right");
  document.querySelector(".modal").append(modalRight);
});

airFreight.addEventListener("click", () => {
  createModal(content, "air");

  const modalLeft = document.createElement("div");
  modalLeft.classList.add("modal__left-air", "modal__left");
  // modalLeft.classList.add("modal__left", "modal__left-air");
  document.querySelector(".modal").append(modalLeft);

  const modalLeftTitle = document.createElement("h1");
  modalLeftTitle.classList.add("modal__air-title", "modal__title");
  modalLeftTitle.textContent = "Авиационные перевозки";
  modalLeft.append(modalLeftTitle);

  const ul = document.createElement("ul");
  ul.classList.add("ul-air", "modal__ul");
  modalLeft.append(ul);

  const li1 = document.createElement("li");
  li1.textContent =
    "Международные авиаперевозки генеральных и опасных грузов, экспорт/импорт;";
  ul.append(li1);

  const li2 = document.createElement("li");
  li2.textContent = "Авиаперевозки между третьим странами за пределами РФ;";
  ul.append(li2);

  const li3 = document.createElement("li");
  li3.textContent = "Внутрироссийские авиаперевозки;";
  ul.append(li3);

  const li4 = document.createElement("li");
  li4.textContent = "Чартерные авиаперевозки;";
  ul.append(li4);

  const li5 = document.createElement("li");
  li5.textContent = "Комбинированные сервисы: авиа+море+авто;";
  ul.append(li5);

  const li6 = document.createElement("li");
  li6.textContent = "Транзит через Гонконг;";
  ul.append(li6);

  const li7 = document.createElement("li");
  li7.textContent = "Собственный склад в Шереметьево.";
  ul.append(li7);

  const modalLeftButton = document.createElement("button");
  modalLeftButton.classList.add("modal__button", "services-button");
  modalLeftButton.textContent = "Рассчитать стоимость";
  modalLeft.append(modalLeftButton);

  const modalRight = document.createElement("div");
  modalRight.classList.add("modal__right-air", "modal__right");
  document.querySelector(".modal").append(modalRight);
});

roadFreight.addEventListener("click", () => {
  createModal(content, "road");

  const modalLeft = document.createElement("div");
  modalLeft.classList.add("modal__left-road", "modal__left");
  document.querySelector(".modal").append(modalLeft);

  const modalLeftTitle = document.createElement("h1");
  modalLeftTitle.classList.add("modal__road-title", "modal__title");
  modalLeftTitle.textContent = "Автомобильные перевозки";
  modalLeft.append(modalLeftTitle);

  const ul = document.createElement("ul");
  ul.classList.add("ul-road", "modal__ul");
  modalLeft.append(ul);

  const li1 = document.createElement("li");
  li1.textContent =
    "Перевозки полным и сборными траками по направлениям Европа, Китай, страны СНГ, экспорт/импорт;";
  ul.append(li1);

  const li2 = document.createElement("li");
  li2.textContent = "Перевозки из Европы с перегрузкой на границе ЕС;";
  ul.append(li2);

  const li3 = document.createElement("li");
  li3.textContent = "Перевозки негабаритных и проектных грузов;";
  ul.append(li3);

  const li4 = document.createElement("li");
  li4.textContent = "Внутрироссийские перевози, вывоз с терминалов.";
  ul.append(li4);

  const modalLeftButton = document.createElement("button");
  modalLeftButton.classList.add("modal__button", "services-button");
  modalLeftButton.textContent = "Рассчитать стоимость";
  modalLeft.append(modalLeftButton);

  const modalRight = document.createElement("div");
  modalRight.classList.add("modal__right-road", "modal__right");
  document.querySelector(".modal").append(modalRight);
});

oversizedCargoesTransportation.addEventListener("click", () => {
  createModal(content, "oversized");

  const modalLeft = document.createElement("div");
  modalLeft.classList.add("modal__left-oversized", "modal__left");
  // modalLeft.classList.add("modal__left", "modal__left-oversized");
  document.querySelector(".modal").append(modalLeft);

  const modalLeftTitle = document.createElement("h1");
  modalLeftTitle.classList.add(
    "modal__oversized-cargoes-title",
    "modal__title"
  );
  modalLeftTitle.textContent = "Перевозки негабаритных грузов";
  modalLeft.append(modalLeftTitle);

  const ul = document.createElement("ul");
  ul.classList.add("ul-oversized", "modal__ul");
  modalLeft.append(ul);

  const li1 = document.createElement("li");
  li1.textContent =
    "Перевозка негабаритных грузов из Европы и Китая всеми видами транспорта;";
  ul.append(li1);

  const li2 = document.createElement("li");
  li2.textContent =
    "Транспортировка сельхозтехники и оборудования для горнорудных, энергетических и пр. компаний;";
  ul.append(li2);

  const li3 = document.createElement("li");
  li3.textContent =
    "Разработка оптимальных маршрутов перевозки с учетом инфраструктуры и климатических условий;";
  ul.append(li3);

  const li4 = document.createElement("li");
  li4.textContent =
    "Сохранность груза и оперативность на всех этапах транспортировки.";
  ul.append(li4);

  const modalLeftButton = document.createElement("button");
  modalLeftButton.classList.add("modal__button", "services-button");
  modalLeftButton.textContent = "Рассчитать стоимость";
  modalLeft.append(modalLeftButton);

  const modalRight = document.createElement("div");
  modalRight.classList.add("modal__right-oversized", "modal__right");
  document.querySelector(".modal").append(modalRight);
});

warehousingServices.addEventListener("click", () => {
  createModal(content, "warehousing");

  const modalLeft = document.createElement("div");
  modalLeft.classList.add("modal__left-warehousing", "modal__left");
  document.querySelector(".modal").append(modalLeft);

  const modalLeftTitle = document.createElement("h1");
  modalLeftTitle.classList.add(
    "modal__warehousing-services-title",
    "modal__title"
  );
  modalLeftTitle.textContent = "Складские услуги";
  modalLeft.append(modalLeftTitle);

  const ul = document.createElement("ul");
  ul.classList.add("ul-warehousing", "modal__ul");
  modalLeft.append(ul);

  const li1 = document.createElement("li");
  li1.textContent = "Собственный склад класса «В» в Шереметьево;";
  ul.append(li1);

  const li2 = document.createElement("li");
  li2.textContent = "Ответственное хранение;";
  ul.append(li2);

  const li3 = document.createElement("li");
  li3.textContent = "Кросс-докинг;";
  ul.append(li3);

  const li4 = document.createElement("li");
  li4.textContent =
    "Консолидация, де-консолидация и дополнительные складские сервисы.";
  ul.append(li4);

  const modalLeftButton = document.createElement("button");
  modalLeftButton.classList.add("modal__button", "services-button");
  modalLeftButton.textContent = "Рассчитать стоимость";
  modalLeft.append(modalLeftButton);

  const modalRight = document.createElement("div");
  modalRight.classList.add("modal__right-warehousing", "modal__right");
  document.querySelector(".modal").append(modalRight);
});

/*  */
/* ADDITIONAL-SERVICES */
/*  */

insurance.addEventListener("click", () => {
  createModal(content, "insurance");

  const modalLeft = document.createElement("div");
  modalLeft.classList.add("modal__left-insurance", "modal__left");
  document.querySelector(".modal").append(modalLeft);

  const modalLeftTitle = document.createElement("h1");
  modalLeftTitle.classList.add("modal__insurance-title", "modal__title");
  modalLeftTitle.textContent = "Страхование";
  modalLeft.append(modalLeftTitle);

  const ul = document.createElement("ul");
  ul.classList.add("ul-insurance", "modal__ul");
  modalLeft.append(ul);

  const li1 = document.createElement("li");
  li1.textContent =
    "Покрытие рисков утраты (гибели) или повреждения груза во время транспортировки;";
  ul.append(li1);

  const li2 = document.createElement("li");
  li2.textContent =
    "Индивидуальные страховые программы, адаптированные под потребности клиентов и характер груза;";
  ul.append(li2);

  const li3 = document.createElement("li");
  li3.textContent =
    "Консультации в выборе оптимального типа страхования в соответствии с характером, стоимостью груза и условиями перевозки;";
  ul.append(li3);

  const li4 = document.createElement("li");
  li4.textContent =
    "Профессиональная поддержка при оформлении страховых полисов и урегулировании убытков;";
  ul.append(li4);

  const li5 = document.createElement("li");
  li5.textContent =
    "Вооруженное сопровождение особо ценных и дорогостоящих грузов.";
  ul.append(li5);

  const modalLeftButton = document.createElement("button");
  modalLeftButton.classList.add("modal__button", "additional-services-button");
  modalLeftButton.textContent = "Рассчитать стоимость";
  modalLeft.append(modalLeftButton);

  const modalRight = document.createElement("div");
  modalRight.classList.add("modal__right-insurance", "modal__right");
  document.querySelector(".modal").append(modalRight);
});

foreignEconomicActivity.addEventListener("click", () => {
  createModal(content, "foreign");

  const modalLeft = document.createElement("div");
  modalLeft.classList.add("modal__left-foreign", "modal__left");
  document.querySelector(".modal").append(modalLeft);

  const modalLeftTitle = document.createElement("h1");
  modalLeftTitle.classList.add("modal__foreign-title", "modal__title");
  modalLeftTitle.textContent = "ВЭД";
  modalLeft.append(modalLeftTitle);

  const ul = document.createElement("ul");
  ul.classList.add("ul-foreign", "modal__ul");
  modalLeft.append(ul);

  const li1 = document.createElement("li");
  li1.textContent =
    "Анализ, структурирование и создание архитектуры внешнеэкономических сделок;";
  ul.append(li1);

  const li2 = document.createElement("li");
  li2.textContent =
    "Подготовка двуязычных договоров на русском и английском языках;";
  ul.append(li2);

  const li3 = document.createElement("li");
  li3.textContent =
    "Подбор банков в РФ и за ее пределами и согласование условий осуществления оплат по внешнеэкономическим сделкам;";
  ul.append(li3);

  const li4 = document.createElement("li");
  li4.textContent =
    "Подготовка документов для прохождение банковского комплаенса.";
  ul.append(li4);

  const modalLeftButton = document.createElement("button");
  modalLeftButton.classList.add("modal__button", "additional-services-button");
  modalLeftButton.textContent = "Рассчитать стоимость";
  modalLeft.append(modalLeftButton);

  const modalRight = document.createElement("div");
  modalRight.classList.add("modal__right-foreign", "modal__right");
  document.querySelector(".modal").append(modalRight);
});

consulting.addEventListener("click", () => {
  createModal(content, "consulting");

  const modalLeft = document.createElement("div");
  modalLeft.classList.add("modal__left-consulting", "modal__left");
  document.querySelector(".modal").append(modalLeft);

  const modalLeftTitle = document.createElement("h1");
  modalLeftTitle.classList.add("modal__consulting-title", "modal__title");
  modalLeftTitle.textContent = "Консалтинг";
  modalLeft.append(modalLeftTitle);

  const ul = document.createElement("ul");
  ul.classList.add("ul-consulting", "modal__ul");
  modalLeft.append(ul);

  const li1 = document.createElement("li");
  li1.textContent = "Анализ и оптимизация логистических процессов;";
  ul.append(li1);

  const li2 = document.createElement("li");
  li2.textContent =
    "Оценка эффективности цепей поставок и предложение решений по их улучшению;";
  ul.append(li2);

  const li3 = document.createElement("li");
  li3.textContent = "Консультации по управлению всеми видами перевозок;";
  ul.append(li3);

  const li4 = document.createElement("li");
  li4.textContent = "ИТ интеграция с клиентами;";
  ul.append(li4);

  const li5 = document.createElement("li");
  li5.textContent = "Решения для управления складами.";
  ul.append(li5);

  const modalLeftButton = document.createElement("button");
  modalLeftButton.classList.add("modal__button", "additional-services-button");
  modalLeftButton.textContent = "Рассчитать стоимость";
  modalLeft.append(modalLeftButton);

  const modalRight = document.createElement("div");
  modalRight.classList.add("modal__right-consulting", "modal__right");
  document.querySelector(".modal").append(modalRight);
});

customsClearance.addEventListener("click", () => {
  createModal(content, "customs");

  const modalLeft = document.createElement("div");
  modalLeft.classList.add("modal__left-customs", "modal__left");
  document.querySelector(".modal").append(modalLeft);

  const modalLeftTitle = document.createElement("h1");
  modalLeftTitle.classList.add("modal__customs-title", "modal__title");
  modalLeftTitle.textContent = "Таможенное оформление";
  modalLeft.append(modalLeftTitle);

  const ul = document.createElement("ul");
  ul.classList.add("ul-customs", "modal__ul");
  modalLeft.append(ul);

  const li1 = document.createElement("li");
  li1.textContent =
    "Осуществление таможенного декларирования грузов и организация терминальной обработки;";
  ul.append(li1);

  const li2 = document.createElement("li");
  li2.textContent =
    "Профессиональное сопровождение всех этапов таможенного оформления грузов;";
  ul.append(li2);

  const li3 = document.createElement("li");
  li3.textContent =
    "Компетенции по применению таможенных процедур, отличных от импорта (ИМ40) / экспорта (ЭК10);";
  ul.append(li3);

  const li4 = document.createElement("li");
  li4.textContent =
    "Консультирование по вопросам таможенного законодательства;";
  ul.append(li4);

  const li5 = document.createElement("li");
  li5.textContent =
    "Разработка оптимальных стратегий и схем таможенного оформления для минимизации рисков и оптимизации стоимости импорта/экспорта.";
  ul.append(li5);

  const modalLeftButton = document.createElement("button");
  modalLeftButton.classList.add("modal__button", "additional-services-button");
  modalLeftButton.textContent = "Рассчитать стоимость";
  modalLeft.append(modalLeftButton);

  const modalRight = document.createElement("div");
  modalRight.classList.add("modal__right-customs", "modal__right");
  document.querySelector(".modal").append(modalRight);
});

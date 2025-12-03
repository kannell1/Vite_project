document.addEventListener("DOMContentLoaded", function () {
  // Функция для переключения состояния "Показать все/Скрыть"
  function toggleShowAll(element) {
    const targetID = element.getAttribute("data-toggle");
    const textElement =
      element.querySelector(".main__services__info__expand__text") ||
      element.querySelector(".main__sliders__expand-text");
    const iconElement = element.querySelector("img");

    // 1. Обработка текста с описанием компании
    if (targetID === "information-block") {
      const textBlock = document.querySelector(".main__services__info__text");
      const isExpanded = textBlock.classList.contains("expanded");

      if (isExpanded) {
        textBlock.classList.remove("expanded");
        textElement.textContent = "Читать далее";
        iconElement.src = "/public/expand.svg";
        element.classList.remove("main__services__info__expand--expanded");
      } else {
        textBlock.classList.add("expanded");
        textElement.textContent = "Скрыть";
        iconElement.src = "/public/close.svg";
        element.classList.add("main__services__info__expand--expanded");
      }
    }

    // 2. Обработка слайдера с брендами
    else if (targetID === "brands") {
      const wrapper = document.querySelector('[data-wrapper="brands"]');
      const isExpanded = wrapper.classList.contains("expanded");

      if (isExpanded) {
        wrapper.classList.remove("expanded");
        textElement.textContent = "Показать всё";
        iconElement.src = "/public/expand.svg";
        // Удаляем класс expanded со всех кнопок
        document.querySelectorAll('[data-toggle="brands"]').forEach((btn) => {
          btn.classList.remove("main__sliders__expand--expanded");
        });
      } else {
        wrapper.classList.add("expanded");
        textElement.textContent = "Скрыть";
        iconElement.src = "/public/close.svg";
        // Добавляем класс expanded всем кнопкам
        document.querySelectorAll('[data-toggle="brands"]').forEach((btn) => {
          btn.classList.add("main__sliders__expand--expanded");
        });
      }
    }

    // 3. Обработка слайдера с типами техники
    else if (targetID === "types") {
      const wrapper = document.querySelector('[data-wrapper="types"]');
      const isExpanded = wrapper.classList.contains("expanded");

      if (isExpanded) {
        wrapper.classList.remove("expanded");
        textElement.textContent = "Показать всё";
        iconElement.src = "/public/expand.svg";
        // Удаляем класс expanded со всех кнопок
        document.querySelectorAll('[data-toggle="types"]').forEach((btn) => {
          btn.classList.remove("main__sliders__expand--expanded");
        });
      } else {
        wrapper.classList.add("expanded");
        textElement.textContent = "Скрыть";
        iconElement.src = "/public/close.svg";
        // Добавляем класс expanded всем кнопкам
        document.querySelectorAll('[data-toggle="types"]').forEach((btn) => {
          btn.classList.add("main__sliders__expand--expanded");
        });
      }
    }
  }

  // Назначаем обработчики на все кнопки "Показать все"
  const showAllBtns = document.querySelectorAll(
    ".main__services__info__expand, .main__sliders__expand"
  );

  showAllBtns.forEach((btn) => {
    btn.addEventListener("click", function () {
      toggleShowAll(this);
    });
  });

  // Функции для мобильного меню
  const main = document.querySelector(".main");
  const mobileMenu = document.querySelector(".sidebar-mobile");
  const header = document.querySelector(".header");
  const desktopSidebar = document.querySelector(".sidebar");

  function toggleMobileMenu() {
    if (window.innerWidth >= 1369) return;

    mobileMenu.classList.toggle("sidebar-mobile--open");
    main.classList.toggle("main--menu-overlay");
    header.classList.toggle("header--menu-overlay");
  }

  // Обработчики для мобильного меню
  document
    .querySelector(".header__nav__link--burger")
    .addEventListener("click", toggleMobileMenu);

  document
    .querySelector(".sidebar-mobile__nav__icon--close")
    .addEventListener("click", toggleMobileMenu);

  document.addEventListener("keydown", function (event) {
    if (
      event.key === "Escape" &&
      document
        .querySelector(".sidebar-mobile")
        .classList.contains("sidebar-mobile--open")
    ) {
      toggleMobileMenu();
    }
  });

  document.querySelector(".main").addEventListener("click", function (event) {
    const isMenuOpen = document
      .querySelector(".sidebar-mobile")
      .classList.contains("sidebar-mobile--open");
    const isBurgerClick = event.target.closest(".header__nav__link--burger");
    const isMenuClick = event.target.closest(".sidebar-mobile");

    if (isMenuOpen && !isBurgerClick && !isMenuClick) {
      toggleMobileMenu();
    }
  });

  // Функции для табов
  const tabs = document.querySelector(".main__services__tabs");
  const tabButtons = tabs.querySelectorAll(".main__services__tabs__button");

  tabButtons[0]?.classList.add("main__services__tabs__button--active");

  tabs.addEventListener("click", function (event) {
    const clickedBtn = event.target.closest(".main__services__tabs__button");
    if (!clickedBtn) return;

    tabButtons.forEach((btn) =>
      btn.classList.remove("main__services__tabs__button--active")
    );
    clickedBtn.classList.add("main__services__tabs__button--active");
  });

  // Функции для модальных окон
  function toggleModalFeedback() {
    const feedbackModal = document.querySelector(".modal--feedback");
    const sidebar = document.querySelector(".sidebar__nav");

    feedbackModal.classList.toggle("modal--feedback--open");
    main.classList.toggle("main--menu-overlay");
    sidebar.classList.toggle("sidebar__nav--menu-overlay");
  }

  document
    .getElementById("icon_tools")
    .addEventListener("click", toggleModalFeedback);
  document
    .getElementById("submitYourApplication")
    .addEventListener("click", toggleModalFeedback);
  document
    .querySelector(".modal__icon--close")
    .addEventListener("click", toggleModalFeedback);

  document.addEventListener("keydown", function (event) {
    if (
      event.key === "Escape" &&
      document
        .querySelector(".modal--feedback")
        .classList.contains("modal--feedback--open")
    ) {
      toggleModalFeedback();
    }
  });

  function toggleModalCall() {
    const callModal = document.querySelector(".modal--call");
    const sidebar = document.querySelector(".sidebar__nav");

    callModal.classList.toggle("modal--call--open");
    mobileMenu.classList.remove("sidebar-mobile--open");
    main.classList.remove("main--menu-overlay");
    sidebar.classList.remove("sidebar__nav--menu-overlay");
    header.classList.remove("header--menu-overlay");
  }

  document
    .getElementById("phoneIcon")
    .addEventListener("click", toggleModalCall);
  document
    .getElementById("phoneIcon_mobile")
    .addEventListener("click", toggleModalCall);
  document
    .querySelector(".modal--call .modal__icon--close")
    .addEventListener("click", toggleModalCall);

  document.addEventListener("keydown", function (event) {
    if (
      event.key === "Escape" &&
      document
        .querySelector(".modal--call")
        .classList.contains("modal--call--open")
    ) {
      toggleModalCall();
    }
  });

  // Валидация форм
  const feedbackForm = document.querySelector(".modal--call__form");

  function validateFeedbackForm() {
    clearAllErrors();

    const formData = {
      phone: feedbackForm.querySelector('input[name="phone"]'),
    };

    let isValid = true;

    if (!formData.phone.value.trim()) {
      showError(formData.phone, "Введите номер телефона");
      isValid = false;
    } else if (!isValidPhone(formData.phone.value.trim())) {
      showError(formData.phone, "Введите корректный номер телефона");
      isValid = false;
    }

    return isValid;
  }

  const submitBtnCall = document.getElementById("submitBtn_call");
  if (submitBtnCall) {
    submitBtnCall.addEventListener("click", (e) => {
      e.preventDefault();

      if (validateFeedbackForm()) {
        clearForm();
        clearAllErrors();

        const modal = document.querySelector(".modal--call");
        if (modal) {
          modal.classList.remove("modal--call--open");
          main.classList.remove("main--menu-overlay");
          sidebar.classList.remove("sidebar__nav--menu-overlay");
        }
      }
    });
  }

  const form = document.querySelector(".modal--feedback__form");

  function validateForm() {
    clearAllErrors();

    const formData = {
      name: form.querySelector('input[name="name"]'),
      phone: form.querySelector('input[name="phone"]'),
      email: form.querySelector('input[name="email"]'),
      message: form.querySelector('textarea[name="message"]'),
    };

    let isValid = true;

    if (!formData.name.value.trim()) {
      showError(formData.name, "Введите ваше имя");
      isValid = false;
    } else if (formData.name.value.trim().length < 2) {
      showError(formData.name, "Имя должно содержать минимум 2 символа");
      isValid = false;
    }

    if (!formData.phone.value.trim()) {
      showError(formData.phone, "Введите номер телефона");
      isValid = false;
    } else if (!isValidPhone(formData.phone.value.trim())) {
      showError(formData.phone, "Введите корректный номер телефона");
      isValid = false;
    }

    if (!formData.email.value.trim()) {
      showError(formData.email, "Введите email");
      isValid = false;
    } else if (!isValidEmail(formData.email.value.trim())) {
      showError(formData.email, "Введите корректный email");
      isValid = false;
    }

    if (!formData.message.value.trim()) {
      showError(formData.message, "Введите сообщение");
      isValid = false;
    } else if (formData.message.value.trim().length < 10) {
      showError(
        formData.message,
        "Сообщение должно содержать минимум 10 символов"
      );
      isValid = false;
    }

    return isValid;
  }

  function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  function isValidPhone(phone) {
    const phoneRegex = /^[\+]?[0-9\s\-\(\)]{10,}$/;
    return phoneRegex.test(phone.replace(/\s/g, ""));
  }

  function showError(input, message) {
    if (!input) return;

    clearFieldError(input);
    input.classList.add("modal__form__field--error");

    const errorMessage = document.createElement("div");
    errorMessage.className = "error-message";
    errorMessage.textContent = message;
    errorMessage.style.marginTop = "4px";
    input.parentNode.insertBefore(errorMessage, input.nextSibling);
  }

  function clearFieldError(input) {
    if (!input) return;

    input.classList.remove("modal__form__field--error");

    const nextSibling = input.nextElementSibling;
    if (nextSibling && nextSibling.classList.contains("error-message")) {
      nextSibling.remove();
    }
  }

  function clearAllErrors() {
    const forms = document.querySelectorAll(
      ".modal--feedback__form, .modal--call__form"
    );

    forms.forEach((form) => {
      if (!form) return;

      form.querySelectorAll(".modal__form__field--error").forEach((field) => {
        field.classList.remove("modal__form__field--error");
      });

      form.querySelectorAll(".error-message").forEach((message) => {
        message.remove();
      });
    });
  }

  function clearForm() {
    document.querySelectorAll("input, textarea, select").forEach((field) => {
      field.value = "";
    });
  }

  const submitBtn = document.getElementById("submitBtn");
  submitBtn.addEventListener("click", (e) => {
    e.preventDefault();

    if (validateForm()) {
      clearForm();
      clearAllErrors();
    }
  });

  // Навигация и языки
  const navItems = document.querySelectorAll(".sidebar__nav__list__item");
  const navItemsMobile = document.querySelectorAll(
    ".sidebar-mobile__nav__list__item"
  );

  function activateItem(items, item) {
    items.forEach((navItem) => {
      navItem.classList.remove("sidebar__item--active");
    });
    item.classList.add("sidebar__item--active");
  }

  navItems.forEach((item) => {
    item.addEventListener("click", function (e) {
      e.preventDefault();
      activateItem(navItems, this);
    });
  });

  navItemsMobile.forEach((item) => {
    item.addEventListener("click", function (e) {
      e.preventDefault();
      activateItem(navItemsMobile, this);
    });
  });

  const languageButtons = document.querySelectorAll(
    ".sidebar__nav__languages__item"
  );
  const languageButtonsMobile = document.querySelectorAll(
    ".sidebar-mobile__nav__languages__item"
  );

  function activateLanguage(buttons, button) {
    buttons.forEach((btn) => {
      btn.classList.remove("sidebar__nav__languages__item--active");
    });
    button.classList.add("sidebar__nav__languages__item--active");
  }

  languageButtons.forEach((button) => {
    button.addEventListener("click", function () {
      activateLanguage(languageButtons, this);
    });
  });

  languageButtonsMobile.forEach((button) => {
    button.addEventListener("click", function () {
      activateLanguage(languageButtonsMobile, this);
    });
  });
});

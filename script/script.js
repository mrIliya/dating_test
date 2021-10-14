const main = document.querySelector("#main");
const goals = document.querySelector("#goals");
const questions = document.querySelector("#questions");
const mainBtns = document.querySelectorAll(".main-content__btn");
const goalsBtn = goals.querySelectorAll(".goals-content__btn");

/* --------------------------- Screens feature */
mainBtns.forEach((item) => {
  item.addEventListener("click", () => {
    main.classList.remove("active");
    goals.classList.add("active");
  });
});

goalsBtn.forEach((item) => {
  item.addEventListener("click", () => {
    goals.classList.remove("active");
    questions.classList.add("active");
  });
});

/* --------------------------- Form feature */
const submitBtn = document.querySelector(".questions-form__btn");
const inputContainers = document.querySelectorAll(".questions-form__label");
const nameInput = document.querySelector(".name-input");
const dateInput = document.querySelector(".date-input");
const passInput = document.querySelector(".password-input");
const emailInput = document.querySelector(".email-input");

const errorUi = (input) => {
  input.nextElementSibling.classList.add("active");
  input.classList.add("error");
};

const correctUi = (input) => {
  input.nextElementSibling.classList.remove("active");
  input.classList.add("correct");
};

const getAge = () => {
  const dateValue = dateInput.value;
  const birthDate = new Date(dateValue);
  const currentAge = Math.round((Date.now() - birthDate) / 31557600000);

  if (currentAge !== NaN) {
    if (currentAge > 18 && currentAge < 80) {
      correctUi(dateInput);
    } else {
      errorUi(dateInput);
    }
  }
};

submitBtn.addEventListener("click", (e) => {
  e.preventDefault();

  inputContainers.forEach((item) => {
    const input = item.querySelector(".questions-form__input");

    if (input.value === "") {
      errorUi(input);
    } else {
      correctUi(input);
    }
  });

  passInput.value < 8 ? errorUi(passInput) : correctUi(passInput);

  /[\d]/.test(nameInput.value) || nameInput.value.length < 2
    ? errorUi(nameInput)
    : correctUi(nameInput);

  /[\@]/.test(emailInput.value) ? correctUi(emailInput) : errorUi(emailInput);

  getAge();
});

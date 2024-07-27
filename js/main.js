// // OUTPUT-форма:
const inputDataLogin = document.getElementById("loginInput");
const outputDataLogin = document.getElementById("outputDataLogin");
const inputDataEmail = document.getElementById("emailInput");
const outputDataEmail = document.getElementById("outputDataEmail");
const inputDataPsw = document.getElementById("passwordInput");
const outputDataPsw = document.getElementById("outputDataPassword");
const inputDataPswRep = document.getElementById("passwordInputRepeat");
const outputDataPswRep = document.getElementById("outputDataRepeatPassword");
const inputDataLang = document.getElementById("lang");
const outputDataLang = document.getElementById("outputDataLang");

function checkboxState() {
    let checkbox = document.getElementById("checkboxInput");
    let isChecked = checkbox.checked;
    const outputDataCheck = document.getElementById("outputDatacheckboxState");
    if (isChecked) {
        outputDataCheck.value = "Checked";
    } else {
        outputDataCheck.value = "Unchecked";
    }
}

document.getElementById("submitBtn").addEventListener("click", (event) => {
    event.preventDefault()
    
    outputDataLogin.value = inputDataLogin.value;
    outputDataEmail.value = inputDataEmail.value;
    outputDataPsw.value = inputDataPsw.value;
    outputDataPswRep.value = inputDataPswRep.value;
    outputDataLang.value = inputDataLang.value;
    checkboxState();

    const errorPsw = document.getElementById("errorPswText");
    if (outputDataPsw.value !== outputDataPswRep.value) {  // пароли не совпадают
      errorPsw.classList.add("visible");
    } else {
      errorPsw.classList.remove("visible");
    }

    if (loginInput.value.trim() === "") { // Пустое поле логина, мигает красным цветом
      loginInput.classList.add("errorLogin");
      setTimeout(() => {
          loginInput.classList.remove("errorLogin");
      }, 1000); // Удаляем класс через 1 секунду
    }

    if (emailInput.value.trim() === "") { // Пустое поле почты, мигает красным цветом
      emailInput.classList.add("errorEmail");
      setTimeout(() => {
          emailInput.classList.remove("errorEmail");
      }, 1000); // Удаляем класс через 1 секунду
    }

    if (passwordInput.value === "") { // Проверяем, пустое ли поле пароля
      passwordInput.classList.add("errorPsw"); // Если пустое, добавляем класс "errorPsw"
      setTimeout(() => {
        passwordInput.classList.remove("errorPsw");
      }, 1000); // Удаляем класс через 1 секунду
    } else {
      passwordInput.classList.remove("errorPsw"); // Если не пустое, убираем класс "errorPsw"
    }

    if (passwordInputRepeat.value === "") {  // Проверяем, пустое ли поле пароля
      passwordInputRepeat.classList.add("errorPsw"); // Если пустое, добавляем класс "errorPsw" для анимации
      setTimeout(() => {
        passwordInputRepeat.classList.remove("errorPsw");
      }, 1000); // Удаляем класс через 1 секунду
    } else {
      passwordInputRepeat.classList.remove("errorPsw");  // Если не пустое, убираем класс "errorPsw"
    }
});

// Регулярные выражения, валидация формы
// Для поля "Login"
const loginInput = document.getElementById("loginInput");
const errorLogin = document.getElementById("errorLoginText");
loginInput.addEventListener('blur', () => {
    const regexp =  /^[a-zA-Z\s\-]+$/;
    const errorLogin = document.getElementById("errorLoginText");
    if (!regexp.test(loginInput.value)) {
      errorLogin.classList.add("visible");
    } else {
      errorLogin.classList.remove("visible");
    }
  });

  // Для поля "E-mail"
  const emailInput = document.getElementById("emailInput");
  emailInput.addEventListener('blur', () => {
    const regexp = /[a-zA-Z0-9]+@[a-zA-Z0-9]+\./;
    const error = document.getElementById("errorEmailText");
    if (!regexp.test(emailInput.value)) {
        error.classList.add("visible");
    } else {
        error.classList.remove("visible");
        const dotIndex = emailInput.value.indexOf(".");
        const charsAfterDot = emailInput.value.substring(dotIndex + 1);
        const errorAfterDot = document.getElementById("errorEmailTextAfterDot");
        if (charsAfterDot.length < 2) {
            errorAfterDot.classList.add("visible");
          } else {
            errorAfterDot.classList.remove("visible");
          }
    }
  });

  // Показать/Скрыть пароль:
  function replaceImage() {
    const image = document.getElementById("showPsw");
    const passwordInput = document.getElementById("passwordInput");
    if (image.src.includes("https://cdn-icons-png.flaticon.com/128/159/159604.png")) {  // Проверяем, какой сейчас тип поля (текст или пароль)
      image.src = "https://cdn-icons-png.flaticon.com/128/10812/10812267.png";
      passwordInput.type = "text";
    } else {
      image.src = "https://cdn-icons-png.flaticon.com/128/159/159604.png";
      passwordInput.type = "password";
    }
  }
  const passwordInput = document.getElementById("passwordInput"); // Вешаем обработчик на событие смены фокуса (focusout)
  passwordInput.addEventListener('focusout', replaceImage);


  function replaceImageRep() { //в поле passwordRepeat
    const image = document.getElementById("showPswRep");
    const passwordInput = document.getElementById("passwordInputRepeat");
    if (image.src.includes("https://cdn-icons-png.flaticon.com/128/159/159604.png")) {  // Проверяем, какой сейчас тип поля (текст или пароль)
      image.src = "https://cdn-icons-png.flaticon.com/128/10812/10812267.png";
      passwordInput.type = "text";
    } else {
      image.src = "https://cdn-icons-png.flaticon.com/128/159/159604.png";
      passwordInput.type = "password";
    }
  }
  const passwordInputRepeat = document.getElementById("passwordInputRepeat"); // Вешаем обработчик на событие смены фокуса (focusout)
  passwordInputRepeat.addEventListener('focusout', replaceImageRep);
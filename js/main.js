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
    if (outputDataPsw.value !== outputDataPswRep.value) {
      errorPsw.classList.add("visible");
      // errorPswText.innerHTML = 'пароли не совпадают';
    } else {
      errorPsw.classList.remove("visible");
      // errorPswText.innerHTML = '';
    }
});

// Регулярные выражения
// Для поля "Login"
const loginInput = document.getElementById("loginInput");
loginInput.addEventListener('blur', () => {
    const regexp =  /^[a-zA-Z\s\-]+$/;
    const errorLogin = document.getElementById("errorLoginText");
    if (!regexp.test(loginInput.value)) {
      errorLogin.classList.add("visible");
        // errorLoginText.innerHTML = 'поле может содержать символы кириллицы, дефис и пробел';
    } else {
      errorLogin.classList.remove("visible");
      // errorLogin.innerHTML = '';
    }
  });

  // Для поля "E-mail"
  const emailInput = document.getElementById("emailInput");
  emailInput.addEventListener('blur', () => {
//     Можно так:
    // const regexp = /^[a-zA-Z0-9]+@[a-zA-Z]+\.[a-zA-Z]{2,}$/;
    // if (!regexp.test(emailInput.value)) {
    //     errorEmailText.innerHTML = 'в поле можно ввести только латинские буквы, цифры и обязательно должны присутствовать символы «@» и «.», после точки должно быть не менее двух символов';
    // } else {
    //         errorEmailText.innerHTML = '';
    //       }
    // });
//     Либо так:
    const regexp = /[a-zA-Z0-9]+@[a-zA-Z0-9]+\./;
    const error = document.getElementById("errorEmailText");
    if (!regexp.test(emailInput.value)) {
        error.classList.add("visible");
        // errorEmailText.innerHTML = 'в поле можно ввести только латинские буквы, цифры и обязательно должны присутствовать символы «@» и «.»';
    } else {
        error.classList.remove("visible");
        const dotIndex = emailInput.value.indexOf(".");
        const charsAfterDot = emailInput.value.substring(dotIndex + 1);
        const errorAfterDot = document.getElementById("errorEmailTextAfterDot");
        if (charsAfterDot.length < 2) {
            errorAfterDot.classList.add("visible");
            // errorEmailTextAfterDot.innerHTML = 'после точки должно быть не менее двух символов';
          } else {
            errorAfterDot.classList.remove("visible");
            // errorEmailTextAfterDot.innerHTML = '';
          }
    }
  });

  // Показать/Скрыть пароль:
  function replaceImage() { //в поле password
    const image = document.getElementById("showPsw");
    const passwordInput = document.getElementById("passwordInput");
    if (image.src.includes("https://cdn-icons-png.flaticon.com/128/159/159604.png")) {
      image.src = "https://cdn-icons-png.flaticon.com/128/10812/10812267.png";
      passwordInput.type = "text";
    } else {
      image.src = "https://cdn-icons-png.flaticon.com/128/159/159604.png";
      passwordInput.type = "password";
    }
  }
  function replaceImageRep() { //в поле passwordRepeat
    const image = document.getElementById("showPswRep");
    const passwordInput = document.getElementById("passwordInputRepeat");
    if (image.src.includes("https://cdn-icons-png.flaticon.com/128/159/159604.png")) {
      image.src = "https://cdn-icons-png.flaticon.com/128/10812/10812267.png";
      passwordInput.type = "text";
    } else {
      image.src = "https://cdn-icons-png.flaticon.com/128/159/159604.png";
      passwordInput.type = "password";
    }
  }
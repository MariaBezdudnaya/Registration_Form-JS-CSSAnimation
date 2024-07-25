import ru from "../data/ru.js";
import en from "../data/en.js";
const btn = document.getElementById("btnLang");
const output = (err, t) => {
  if (err) {
    return console.log('something went wrong loading', err);
  }
  document.getElementById("formTitle").innerHTML = t("formTitle");
  document.getElementById("login").innerHTML = t("login");
  document.getElementById("loginInput").placeholder = t("loginInput");
  document.getElementById("email").innerHTML = t("email");
  document.getElementById("emailInput").placeholder = t("emailInput");
  document.getElementById("password").innerHTML = t("password");
  document.getElementById("passwordInput").placeholder = t("passwordInput");
  document.getElementById("passwordInputRepeat").placeholder = t("passwordInputRepeat");
  document.getElementById("language").innerHTML = t("language");
  document.getElementById("rus").innerHTML = t("rus");
  document.getElementById("eng").innerHTML = t("eng");
  document.getElementById("checkboxText").innerHTML = t("checkboxText");
  document.getElementById("checkboxLink").innerHTML = t("checkboxLink");
  document.getElementById("signInText").innerHTML = t("signInText");
  document.getElementById("signInLink").innerHTML = t("signInLink");
  document.getElementById("submitBtn").innerHTML = t("submitBtn");
  document.getElementById("resetBtn").innerHTML = t("resetBtn");
  document.getElementById("errorLoginText").textContent = t("invalidLogin"); //Error login
  document.getElementById("errorEmailText").textContent = t("invalidEmail"); //Error email
  document.getElementById("errorEmailTextAfterDot").textContent = t("invalidEmailAfterDot"); //Error emailAfterDot
  document.getElementById("errorPswText").textContent = t("invalidPsw");
  btnLang.innerHTML = t("changeLang");
  };
  
  i18next.init(
    {
    lng: "en", 
    fallbackLng: ["en", "ru"],
    resources: {
      en,
      ru
    }
  },
  output
  );

  btn.onclick = () => {
    const lang = i18next.language === "en" ? "ru" : "en";
    i18next.changeLanguage(lang, output);
  };
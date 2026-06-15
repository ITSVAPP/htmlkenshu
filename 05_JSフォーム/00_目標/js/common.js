let timeoutId = null;

const getPasswordElements = () => ({
  password: document.querySelector("[name='password']"),
  repassword: document.querySelector("[name='repassword']"),
  repasswordCheckResult: document.getElementById("repassword-check-result"),
  passwordCheckResult: document.getElementById("password-check-result"),
  changeBtn: document.getElementById("change-btn"),
  mojiSizePolicy: document.getElementById("mojisize-policy"),
  alphabetPolicy: document.getElementById("alphabet-policy"),
  numberPolicy: document.getElementById("number-policy"),
});

const viewOk = ({ password, repassword, repasswordCheckResult }) => {
  if (!password.value || !repassword.value) {
    repasswordCheckResult.textContent = "";
    return;
  }
  if (password.value === repassword.value) {
    repasswordCheckResult.textContent = "一致";
    repasswordCheckResult.style.color = "green";
  } else {
    repasswordCheckResult.textContent = "不一致";
    repasswordCheckResult.style.color = "#e84757";
  }
};

const passwordChange = () => {
  const {
    password,
    repassword,
    passwordCheckResult,
    changeBtn,
    mojiSizePolicy,
    alphabetPolicy,
    numberPolicy,
    repasswordCheckResult,
  } = getPasswordElements();

  const mojiCheckResult = mojiSizecheck(password.value, mojiSizePolicy);
  const alphabetCheckResult = alphabetCheck(password.value, alphabetPolicy);
  const numberCheckResult = numberCheck(password.value, numberPolicy);

  clearTimeout(timeoutId);
  timeoutId = setTimeout(() => {
    if (mojiCheckResult && alphabetCheckResult && numberCheckResult) {
      passwordCheckResult.textContent = "OK";
      passwordCheckResult.style.color = "green";
    } else {
      passwordCheckResult.textContent = "NG";
      passwordCheckResult.style.color = "#e84757";
    }
    viewOk({ password, repassword, repasswordCheckResult });
  }, 300);

  if (
    mojiCheckResult &&
    alphabetCheckResult &&
    numberCheckResult &&
    password.value === repassword.value
  ) {
    changeBtn.classList.remove("err");
  } else {
    changeBtn.classList.add("err");
  }
};

const mojiSizecheck = (str, mojiSizePolicy) => {
  if (str.length >= 8) {
    mojiSizePolicy.classList.add("ok");
    return true;
  } else {
    mojiSizePolicy.classList.remove("ok");
    return false;
  }
};

const alphabetCheck = (str, alphabetPolicy) => {
  if (/[a-zA-Z]/.test(str)) {
    alphabetPolicy.classList.add("ok");
    return true;
  } else {
    alphabetPolicy.classList.remove("ok");
    return false;
  }
};

const numberCheck = (str, numberPolicy) => {
  if (/[0-9]/.test(str)) {
    numberPolicy.classList.add("ok");
    return true;
  } else {
    numberPolicy.classList.remove("ok");
    return false;
  }
};

window.onload = () => {
  const { password, repassword } = getPasswordElements();

  [password, repassword].forEach((element) => {
    element.addEventListener("keyup", passwordChange);
  });

  document.querySelector("form").addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
      const { changeBtn } = getPasswordElements();
      if (changeBtn.classList.contains("err")) {
        e.preventDefault();
      }
    }
  });
};

const passwordChange = () => {
	const password = document.getElementsByName("password")[0].value;
	const mojiCheckResult = mojiSizecheck(password);
	const alphabetCheckresult = alphabetCheck(password);
	const numberCheckresult = numberCheck(password);

	const checkResult = document.getElementById("passowrd-check-result");
	if (mojiCheckResult && alphabetCheckresult && numberCheckresult) {
		checkResult.textContent = "OK";
		checkResult.style.color = "green";
	} else {
		checkResult.textContent = "NG";
		checkResult.style.color = "#e84757";
	}

	const repassword = document.getElementsByName("repassword")[0].value;
	const recheckResult = document.getElementById("repassowrd-check-result");
	if (password === repassword) {
		recheckResult.textContent = "一致";
		recheckResult.style.color = "green";
	} else {
		recheckResult.textContent = "不一致";
		recheckResult.style.color = "#e84757";
	}

	// ボタン制御
	const btn = document.getElementById("change-btn");
	if (
		mojiCheckResult &&
		alphabetCheckresult &&
		numberCheckresult &&
		password === repassword
	) {
		btn.classList.remove("err");
	} else {
		btn.classList.add("err");
	}
};

const mojiSizecheck = (str) => {
	let result = false;
	if (str.length >= 8) {
		document.getElementById("mojisize-policy").classList.add("ok");
		result = true;
	} else {
		document.getElementById("mojisize-policy").classList.remove("ok");
		result = false;
	}
	return result;
};
const alphabetCheck = (str) => {
	let result = false;
	if (str.match(/[a-zA-Z]/)) {
		document.getElementById("alphabet-policy").classList.add("ok");
		result = true;
	} else {
		document.getElementById("alphabet-policy").classList.remove("ok");
		result = false;
	}
	return result;
};

const numberCheck = (str) => {
	let result = false;
	if (str.match(/[0-9]/)) {
		document.getElementById("number-policy").classList.add("ok");
		result = true;
	} else {
		document.getElementById("number-policy").classList.remove("ok");
		result = false;
	}
	return result;
};

window.onload = function () {
	// keyup制御
	document.querySelectorAll("input").forEach((element) => {
		element.addEventListener("keyup", passwordChange);
	});

	// エンターキー制御
	document.querySelector("form").addEventListener("keydown", (e) => {
		if (e.key === "Enter") {
			const btn = document.getElementById("change-btn");
			if (btn.classList.contains("err")) {
				e.preventDefault();
			}
		}
	});
};

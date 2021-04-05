const passwordChange = (e) => {
	const password = e.target.value;

	let disabledFlg = false;

	if (password.length >= 8) {
		document.querySelector("#mojisize-polisy").style.color = "green";
	} else {
		document.querySelector("#mojisize-polisy").style.color = "rgb(48, 46, 46)";
		disabledFlg = true;
	}

	if (password.match(/[A-Z]/)) {
		document.querySelector("#alphabet-polisy").style.color = "green";
	} else {
		document.querySelector("#alphabet-polisy").style.color = "rgb(48, 46, 46)";
		disabledFlg = true;
	}
	document.querySelector("#change-btn").disabled = disabledFlg;
};

window.onload = function () {
	// keyup制御
	document
		.querySelector("input[name='password']")
		.addEventListener("keyup", passwordChange);
};

const passwordChange = (e) => {
	const password = e.target.value;

	if (password.length >= 8) {
		document.querySelector("#mojisize-polisy").style.color = "green";
		document.querySelector("#change-btn").disabled = false;
	} else {
		document.querySelector("#mojisize-polisy").style.color = "rgb(48, 46, 46)";
		document.querySelector("#change-btn").disabled = true;
	}
};

window.onload = function () {
	// keyup制御
	document
		.querySelector("input[name='password']")
		.addEventListener("keyup", passwordChange);
};

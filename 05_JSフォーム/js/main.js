// 右クリック禁止
document.oncontextmenu = function () {
	return false;
};

window.document.onkeydown = function (event) {
	if (event.key == "F12") {
		return false;
	}
};

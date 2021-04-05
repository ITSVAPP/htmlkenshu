const calc = () => {
	const leftNumDom = document.getElementById("left-number");
	const rightNumDom = document.getElementById("right-number");
	const answerNum = Number(leftNumDom.value) + Number(rightNumDom.value);

	const resultDom = document.getElementById("answer");
	resultDom.innerText = answerNum;
};

// ボタンのDOM取得
const btnDom = document.querySelector("button");
btnDom.addEventListener("click", () => {
	calc();
});

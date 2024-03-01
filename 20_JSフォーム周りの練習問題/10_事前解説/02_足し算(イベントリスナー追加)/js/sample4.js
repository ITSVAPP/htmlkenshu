const calc = () => {
    const leftNumDom = document.getElementById("left-number");
    const rightNumDom = document.getElementById("right-number");
    const answerNum = Number(leftNumDom.value) + Number(rightNumDom.value);
    const resultDom = document.getElementById("answer");
    resultDom.innerText = answerNum;
};

// 画面描画後に実行
window.onload = () => {
    // ボタンのDOM取得
    const btnDom = document.querySelector("button");
    btnDom.addEventListener("click", calc);
};

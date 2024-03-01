const calc = () => {
    const leftNumDom = document.getElementById("left-number");
    const rightNumDom = document.getElementById("right-number");
    const answerNum = Number(leftNumDom.value) + Number(rightNumDom.value);

    const resultDom = document.getElementById("answer");
    resultDom.innerText = answerNum;
};

// 速度測定（id指定）
const getBYid = () => {
    const startTime = Date.now(); // 開始時間

    for (let i = 0; i < 10000000; i++) {
        const leftNumDom = document.getElementById("left-number");
    }
    const endTime = Date.now(); // 終了時間
    console.log(endTime - startTime); // 何ミリ秒かかったかを表示する
};

// 速度測定（query）
const getBYquery = () => {
    const startTime = Date.now(); // 開始時

    for (let i = 0; i < 10000000; i++) {
        const leftNumDom = document.querySelector("#left-number");
    }
    const endTime = Date.now(); // 終了時間
    console.log(endTime - startTime); // 何ミリ秒かかったかを表示する
};

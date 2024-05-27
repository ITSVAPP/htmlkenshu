/// APIから特定の番号のPokemon情報を取得する関数
const fetchPokemon = async (no) => {
  const res = await fetch("https://pokeapi.co/api/v2/pokemon/" + no);
  if (!res.ok) {
    throw new Error(`Failed to fetch Pokemon data: ${res.statusText}`);
  }
  return res.json();
};

// Pokemon情報を画面に表示する関数
const displayPokemon = (pokemon) => {
  const { id, name, height, weight, types, sprites } = pokemon;
  const { front_default, back_default } = sprites;

  document.getElementById("no").textContent = ("00000" + id).slice(-5);
  document.getElementById("name").textContent = name;
  document.getElementById("height").textContent =
    (height / 10).toFixed(1) + "m";
  document.getElementById("weight").textContent =
    (weight / 10).toFixed(1) + "kg";
  document.getElementById("type").textContent = types
    .map((type) => type.type.name)
    .join("  ");
  document.getElementById("front_default").src = front_default;

  const backDefaultElem = document.getElementById("back_default");
  if (back_default) {
    backDefaultElem.classList.remove("hidden");
    backDefaultElem.src = back_default;
  } else {
    backDefaultElem.classList.add("hidden");
  }
};

// 検索開始前の初期表示処理
const initializeLoadingState = () => {
  document.querySelector(".box-result").classList.add("invisible");
  document.querySelector(".spinner").classList.remove("hidden");
  document.querySelector(".err-message").classList.add("hidden");
};

// 検索結果の表示処理
const showResult = () => {
  document.querySelector(".spinner").classList.add("hidden");
  document.querySelector(".box-result").classList.remove("invisible");
};

// Pokemonを検索する非同期関数
const searchPokemon = async (no) => {
  try {
    const pokemon = await fetchPokemon(no);
    displayPokemon(pokemon);
  } catch (e) {
    console.error(e);
    document.querySelector(".spinner").classList.add("hidden");
    const errMsg = document.querySelector(".err-message");
    errMsg.classList.remove("hidden");
  }
};

// ボタンクリック時の処理
const handleButtonClick = async () => {
  const no = document.getElementById("input-text").value;
  if (no) {
    initializeLoadingState();
    await searchPokemon(no);
  }
};

// ページ読み込み時の処理
window.onload = async () => {
  initializeLoadingState();
  await searchPokemon(25); // 初期表示でピカチュウ（No.25）を表示
  // 画像読み込み
  document.getElementById("front_default").addEventListener("load", () => {
    showResult();
  });
  document.getElementById("btn").addEventListener("click", handleButtonClick);
  document.getElementById("input-text").addEventListener("keyup", (e) => {
    if (e.key === "Enter") {
      handleButtonClick();
    }
  });
};

// 右クリック禁止
document.oncontextmenu = () => false;

// 開発者コンソールの表示禁止
window.document.onkeydown = (event) => {
  if (event.key === "F12") {
    return false;
  }
};

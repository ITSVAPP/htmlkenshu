// Pokemonを検索する非同期関数
const searchPokemon = async (no) => {
  try {
    // APIから特定の番号のPokemon情報を取得
    const res = await fetch("https://pokeapi.co/api/v2/pokemon/" + no);
    if (!res.ok) {
      // レスポンスが成功していなければエラーを投げる
      throw new Error(res.statusText);
    }
    const pokemon = await res.json();
    // 取得したPokemon情報を表示
    viewPokemon(pokemon);
  } catch (e) {
    // エラー時はロードアイコンを非表示にし、エラーメッセージを表示
    document.querySelector(".spinner").classList.add("hidden");
    document.querySelector(".err-message").classList.remove("hidden");
  }
};

// 取得したPokemon情報を画面に表示する非同期関数
const viewPokemon = async (pokemon) => {
  const { id, name, height, weight, types } = pokemon;
  const { front_default, back_default } = pokemon.sprites;
  // Pokemonの各種情報を表示
  document.getElementById("no").textContent = ("00000" + id).slice(-5);
  document.getElementById("name").textContent = name;
  document.getElementById("height").textContent =
    (height / 10).toFixed(1) + "m";
  document.getElementById("weight").textContent = weight / 10 + "kg";
  const typeTxt = types.map((type) => type.type.name).join("  ");
  document.getElementById("type").textContent = typeTxt;
  document.getElementById("front_default").src = front_default;

  if (back_default) {
    // 背面画像がある場合は表示
    document.getElementById("back_default").classList.remove("hidden");
    document.getElementById("back_default").src = back_default;
  } else {
    // 背面画像がない場合は非表示
    document.getElementById("back_default").classList.add("hidden");
  }

  // 画像のロードが完了した時点で表示
  document.getElementById("front_default").addEventListener("load", () => {
    view();
  });
};

// 検索開始前の初期表示処理
const load = () => {
  document.querySelector(".box-result").classList.add("invisible");
  document.querySelector(".spinner").classList.remove("hidden");
  document.querySelector(".err-message").classList.add("hidden");
};

// 検索結果の表示処理
const view = () => {
  document.querySelector(".spinner").classList.add("hidden");
  document.querySelector(".box-result").classList.remove("invisible");
};

// ボタンクリック時の処理
const btnClick = async () => {
  const no = document.getElementById("input-text").value;
  if (no) {
    load();
    searchPokemon(no);
  }
};

// ページ読み込み時の処理
window.onload = async () => {
  load();
  // 初期表示でピカチュウ（No.25）を表示
  await searchPokemon(25);
  // クリックとEnterキーにイベントをバインド
  document.getElementById("btn").addEventListener("click", btnClick);
  document.getElementById("input-text").addEventListener("keyup", (e) => {
    if (e.key === "Enter") {
      btnClick();
    }
  });
};

// 以下はカンニング防止用のコード
// 右クリック禁止
document.oncontextmenu = function () {
  return false;
};

// 開発者コンソールの表示禁止
window.document.onkeydown = function (event) {
  if (event.key == "F12") {
    return false;
  }
};

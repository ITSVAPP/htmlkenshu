/// APIから特定の番号のPokemonの種族情報を取得する関数
const fetchPokemonSpecies = async (no) => {
  const res = await fetch("https://pokeapi.co/api/v2/pokemon-species/" + no);
  if (!res.ok) {
    throw new Error(`Failed to fetch Pokemon data: ${res.statusText}`);
  }
  return res.json();
};

/// APIから特定の番号のPokemon情報を取得する関数
const fetchPokemon = async (no) => {
  const res = await fetch("https://pokeapi.co/api/v2/pokemon/" + no);
  if (!res.ok) {
    throw new Error(`Failed to fetch Pokemon data: ${res.statusText}`);
  }
  return res.json();
};

// タイプの詳細情報を取得する関数
async function fetchType(url) {
  const response = await fetch(url);
  const data = await response.json();
  return data;
}

// Pokemon情報を画面に表示する関数
const displayPokemon = (pokemon, pokemonSpecies, typeDetails) => {
  const { names } = pokemonSpecies;
  pokemonName = names.find((data) => data?.language?.name === "ja").name;

  console.log(typeDetails);

  typeDetails.forEach((data) => {
    console.log(data.names.find((nameData) => nameData.language.name === ""));
  });

  const types = typeDetails
    .map(
      (data) =>
        data.names.find((typeName) => typeName?.language?.name === "ja").name
    )
    .join(" ");

  const { id, height, weight, sprites } = pokemon;
  const { front_default, back_default } = sprites;

  document.getElementById("no").textContent = String(id).padStart(5, "0");
  document.getElementById("name").textContent = pokemonName;
  document.getElementById("height").textContent =
    (height / 10).toFixed(1) + "m";
  document.getElementById("weight").textContent =
    (weight / 10).toFixed(1) + "kg";
  document.getElementById("type").textContent = types;
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
    const [pokemon, pokemonSpecies] = await Promise.all([
      fetchPokemon(no),
      fetchPokemonSpecies(no),
    ]);

    const typeUrls = pokemon.types.map((typeInfo) => typeInfo.type.url);
    const typeDetails = await Promise.all(typeUrls.map(fetchType));

    displayPokemon(pokemon, pokemonSpecies, typeDetails);
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

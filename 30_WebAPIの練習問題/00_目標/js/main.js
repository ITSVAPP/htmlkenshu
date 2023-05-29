const searchPokemon = async (no) => {
  try {
    const res = await fetch("https://pokeapi.co/api/v2/pokemon/" + no);
    if (!res.ok) {
      throw new Error(res.statusText);
    }
    const pokemon = await res.json();
    viewPokemon(pokemon);
  } catch (e) {
    document.querySelector(".spinner").classList.add("hidden");
    document.querySelector(".err-message").classList.remove("hidden");
  }
};

const viewPokemon = async (pokemon) => {
  const { id, name, height, weight, types } = pokemon;
  const { front_default, back_default } = pokemon.sprites;
  document.getElementById("no").textContent = ("00000" + id).slice(-5);
  document.getElementById("name").textContent = name;
  document.getElementById("height").textContent =
    (height / 10).toFixed(1) + "m";
  document.getElementById("weight").textContent = weight / 10 + "kg";
  const typeTxt = types.map((type) => type.type.name).join("  ");
  document.getElementById("type").textContent = typeTxt;
  document.getElementById("front_default").src = front_default;

  if (back_default) {
    document.getElementById("back_default").classList.remove("hidden");
    document.getElementById("back_default").src = back_default;
  } else {
    document.getElementById("back_default").classList.add("hidden");
  }

  //ロード完了時に表示
  document.getElementById("front_default").addEventListener("load", () => {
    view();
  });
};

const load = () => {
  document.querySelector(".box-result").classList.add("invisible");
  document.querySelector(".spinner").classList.remove("hidden");
  document.querySelector(".err-message").classList.add("hidden");
};

const view = () => {
  document.querySelector(".spinner").classList.add("hidden");
  document.querySelector(".box-result").classList.remove("invisible");
};

const btnClick = async () => {
  const no = document.getElementById("input-text").value;
  if (no) {
    load();
    searchPokemon(no);
  }
};

window.onload = async () => {
  load();
  await searchPokemon(25);
  document.getElementById("btn").addEventListener("click", btnClick);
  document.getElementById("input-text").addEventListener("keyup", (e) => {
    if (e.key === "Enter") {
      btnClick();
    }
  });
};

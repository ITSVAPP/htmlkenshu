/*
 * ここにJavaScriptのコードを書いていきましょう
  
　目的　ピカチューの情報を画面に表示する
　htmlは修正不要

  ヒント、以下は名前を画面に表示するときのサンプル
  document.getElementById("name").textContent = name;
 */

const getPokemon = async () => {
  const url = "https://pokeapi.co/api/v2/pokemon/25";
  const res = await fetch(url);
  const pokemon = await res.json();
  const { height, weight, types, name, id } = pokemon;
  const { front_default, back_default } = pokemon.sprites;
};

getPokemon();

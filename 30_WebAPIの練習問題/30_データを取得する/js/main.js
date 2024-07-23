/*
 * ここにJavaScriptのコードを書いていきましょう
  
　目的　ピカチューの以下の情報を取得してコンソールに結果を表示する
        正面画像のURL (※pokemon.sprites.front_default)
        後ろ画像のURL (※pokemon.sprites.back_default)
        図鑑番号 (※pokemon.id)
        名前 (※pokemon.name)
        タイプ (※pokemon.types[0].type.name)
        身長 (※pokemon.height)
        体重 (※pokemon.weight)

  以下想定結果
   正面画像のurl　https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png
   後ろ画像のurl　https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/25.png
   図鑑番号 25
   名前 pikachu
   タイプ electric
   身長 4
   体重 60
 */

const getPokemon = async () => {
  const url = "https://pokeapi.co/api/v2/pokemon/25";
  const res = await fetch(url);
  const pokemon = await res.json();
};
getPokemon();

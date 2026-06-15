# 06. WebAPI

**WebAPI からデータを取得して画面に表示する**流れを学びます。ポケモン図鑑が題材です。

## 完成イメージ

[デモを見る（GitHub Pages）](https://itsvapp.github.io/htmlkenshu/06_WebAPI/00_%E7%9B%AE%E6%A8%99/)

ゴールの仕様は [00_目標/学習事項.md](00_目標/学習事項.md) を参照してください（初期表示でピカチュウ、図鑑 No 入力で表示、存在しない No でエラー）。

## 進め方

1. **10_事前解説** … WebAPI とは何かを読む。
2. 20_WebAPIを実行 … `fetch` で API を呼ぶ
3. 30_データを取得する … レスポンス（JSON）を受け取る
4. 40_データを表示する … 画面に反映する
5. 50_検索機能の追加 … 図鑑 No で検索する
6. 60_課題_総合問題 … 仕上げ

## 考え方・ヒント

- 基本の流れは `fetch(url)` → `await res.json()` → 受け取ったデータを DOM に表示。
- 使う API は [PokeAPI](https://pokeapi.co/)（例: `https://pokeapi.co/api/v2/pokemon/25` でピカチュウ）。
- 「データが取れない」ときは、ブラウザの**開発者ツールの Network / Console タブ**を確認する。
- 困ったら [MDN: fetch](https://developer.mozilla.org/ja/docs/Web/API/fetch)。

## 解答の確認

`git checkout answer` で解答ブランチを確認できます。**まずは自分で取り組んでから**見ましょう。

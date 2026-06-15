# 05. JSフォーム

JavaScript で**フォームの入力チェックと画面の出し分け**を学びます。パスワードポリシーのチェックが題材です。

## 完成イメージ

[デモを見る（GitHub Pages）](https://itsvapp.github.io/htmlkenshu/05_JS%E3%83%95%E3%82%A9%E3%83%BC%E3%83%A0/00_%E7%9B%AE%E6%A8%99/)

ゴールの仕様は [00_目標/学習事項.md](00_目標/学習事項.md) を参照してください（8 文字以上・英字・数字・確認用一致でボタンが押せるようになる）。

## 進め方

1. **10_事前解説** … まずここを読む。JS の基礎と DOM 操作（`querySelector` / `addEventListener` / `classList`）。
2. 20〜40_パスワードポリシー … 段階的にチェックを実装
3. 50_課題_総合問題 … 仕上げ

## 考え方・ヒント

- 流れは「① 要素を取る（`document.querySelector`）→ ② 入力イベントを拾う（`addEventListener("input", …)`）→ ③ 条件を判定 → ④ `classList` で見た目を変える / ボタンの `disabled` を切り替える」。
- 文字数や中身のチェックは `value.length` や正規表現（`/[a-z]/`, `/[0-9]/`）で。
- `onclick` を HTML に直接書く書き方は避け、`addEventListener` を使う（事前解説の通り）。
- 困ったら [MDN: querySelector](https://developer.mozilla.org/ja/docs/Web/API/Document/querySelector)。

## 解答の確認

`git checkout answer` で解答ブランチを確認できます。**まずは自分で取り組んでから**見ましょう。

# AGENTS.md

新入社員（HTML 初学者）向けの **HTML 研修教材** リポジトリです。アプリを開発する場ではなく、**学習者が読んで手を動かす教材**を管理します。受講者・編集者ともに日本語が前提で、学習者向けの文章はすべて初学者にわかる平易な日本語で書きます。

## このリポジトリの性質

- **ビルド・テスト・Lint のツールチェーンはありません**（`package.json` もなし）。中身は素の HTML / CSS / JS で、VSCode の **Live Server 拡張**でブラウザに開いて確認します。npm スクリプトなどを探さないでください。
- 整形は **Prettier（VSCode 拡張）の保存時フォーマット**で行います。設定は [`.prettierrc.json`](.prettierrc.json)（2 スペース / ダブルクォート / セミコロンあり / printWidth 120）。推奨拡張は [`.vscode/extensions.json`](.vscode/extensions.json)（Live Server・日本語パック・Prettier）。

## 最重要: `main` と `answer` の二重管理

GitHub Pages は **`answer` ブランチ**（path `/`）から配信されています（公開 URL: https://itsvapp.github.io/htmlkenshu/ ）。

- `main` = 教材本体、`answer` = 解答（各課題の `20_Answer/` 等）＋ **Pages の公開ソース**。両ブランチは**フォルダ構成を揃えて**運用します。
- 各演習の `.url`（最終成果物・参考リンク）は `https://itsvapp.github.io/htmlkenshu/<フォルダ>/...` を指します。
- **フォルダの改名・移動・追加は `main` と `answer` の両方に同じ操作を適用してください。** 片方だけ変えるとデモ／解答リンクが切れます。
- 解答は `answer` ブランチに置きます。**`main` に解答を混ぜない**でください（学習者は説明を読んで自分で取り組んでから解答を見る流れです）。

## 構成

学習者が **`00` から番号順に進む**設計です（詳細は [`README.md`](README.md)）。

| フォルダ | 内容 |
| --- | --- |
| `00_はじめに` 〜 `06_WebAPI` | 環境構築 → HTML/CSS 基礎 → 制作演習（自己紹介・模写・各種フォーム・WebAPI） |
| `99_リファレンス_調べ方` | 逆引き集（`10_VSCodeショートカット` / `20_やりたいこと別サンプル` / `30_調べ方とAIプロンプト`）。サンプル実体は `99_リファレンス_調べ方/サンプル/` に集約 |
| `docs/` | README 用画像と設計ドキュメント（`docs/superpowers/specs/`） |

### 各演習フォルダの共通パターン

- 入口に `README.md`、課題ごとに `学習事項.md`（目標・仕様）と `参考.url`（Pages 上の参考リンク）。
- 学習者が編集する出発点は `10_Problem/`（`index.html` など）。対応する解答は **`answer` ブランチの `20_Answer/`**。
- 課題を追加するときは、この構成と番号付け（`10_`, `20_` …）を踏襲します。
- 大きな再構成を行う前に、設計の経緯は [`docs/superpowers/specs/2026-06-15-htmlkenshu-saikousei-design.md`](docs/superpowers/specs/2026-06-15-htmlkenshu-saikousei-design.md) を参照。

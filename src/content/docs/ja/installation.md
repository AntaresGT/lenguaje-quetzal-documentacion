---
title: インストール
description: システムにQuetzalプログラミング言語をインストールする方法
---

# Quetzalのインストール

Quetzalは簡単にインストールして使用できるように設計されています。このガイドに従って開発環境をセットアップしてください。

## システム要件

- **オペレーティングシステム**: Windows 10/11 (64-bit)
- **RAM**: 最低512MB（推奨1GB）
- **ディスク容量**: 100MBの空き容量
- **プロセッサー**: Intel/AMD x64

## Quetzalのダウンロード

### 1. GitHub Releases から（推奨）

[GitHub Releases](https://github.com/AntaresGT/lenguaje-quetzal/releases) ページにアクセスして最新版をダウンロードしてください：

```bash
# 最新リリースをダウンロード
https://github.com/AntaresGT/lenguaje-quetzal/releases/latest
```

### 2. Gitを使用

```bash
git clone https://github.com/AntaresGT/lenguaje-quetzal.git
cd lenguaje-quetzal
```

## インストール

### Windows

1. **実行ファイルをダウンロード**:
   - GitHub ReleasesからとQuetzal-windows-x64.exeをダウンロード
   - ファイルサイズ: ~56KB

2. **PATHに追加**（オプション）:
   ```cmd
   # quetzal.exeをPATH内のディレクトリにコピー
   copy quetzal.exe C:\Windows\System32\
   ```

3. **インストールの確認**:
   ```cmd
   quetzal --version
   ```

## VS Code 拡張機能のインストール

最高の開発体験のために、Visual Studio Code用の公式Quetzal拡張機能をインストールしてください：

### VS Code Marketplace から

1. Visual Studio Codeを開く
2. 拡張機能パネルに移動（`Ctrl+Shift+X`）
3. "Quetzal Language"を検索
4. AntaresGTによる拡張機能の"Install"をクリック

### コマンドライン から

```bash
code --install-extension AntaresGT.quetzal-language
```

### 拡張機能の機能

- ✅ **シンタックスハイライト**: `.qz`ファイルの構文強調表示
- ✅ **IntelliSense**: オートコンプリートと提案
- ✅ **エラー検出**: エラーの検出と強調表示
- ✅ **コードスニペット**: 使い応えあるコードテンプレート
- ✅ **統合ターミナル**: エディターから直接コードを実行

## インストールの確認

すべてが正常に動作することを確認するために、簡単なテストファイルを作成してください：

### 1. `hola_mundo.qz` ファイルを作成

```javascript
// ファイル: hola_mundo.qz
imprimir_exito("¡Hola mundo desde Quetzal!")

cadena nombre = "Quetzal学習中"
imprimir("私は: " + nombre)
```

### 2. ファイルを実行

```cmd
quetzal run hola_mundo.qz
```

### 3. 期待される出力

```
✓ コンパイル成功
¡Hola mundo desde Quetzal!
私は: Quetzal学習中
```

## トラブルシューティング

### 一般的なエラー

**エラー: "quetzalはコマンドとして認識されません"**
- 解決策: `quetzal.exe`がシステムのPATHにあることを確認してください

**エラー: "ファイルを実行できません"**
- 解決策: Windowsシステム用の正しいバージョンをダウンロードしたことを確認してください

**コンパイルエラー: "無効な構文"**
- 解決策: エラーハイライト機能を提供するVS Code拡張機能を使用して構文を確認してください

### さらなるヘルプ

- 📚 [完全なドキュメント](/)
- 🐛 [バグ報告](https://github.com/AntaresGT/lenguaje-quetzal/issues)
- 💬 [コミュニティディスカッション](https://github.com/AntaresGT/lenguaje-quetzal/discussions)
- 📧 [開発者連絡先](mailto:contact@antaresgt.com)

## 次のステップ

インストールが成功したら：

1. 📖 **[最初のステップ](/ja/first-steps/)** - 基本概念を学ぶ
2. 🎯 **[基本構文](/ja/basics/)** - Quetzalの構文を学習
3. 💡 **[例](/ja/examples/)** - 実用的なコード例を見る
4. 🛠️ **[VS Codeのヒント](/ja/tools/)** - 拡張機能の使用を最大化

---

🎉 **おめでとうございます！Quetzalのインストールが完了しました。** これでスペイン語での関数型プログラミングの旅を始める準備が整いました！

---
title: 最初のステップ
description: Quetzalプログラミング言語での最初のステップチュートリアル
---

# Quetzalでの最初のステップ

Quetzalによる関数型プログラミングの世界へようこそ！このチュートリアルでは、基本概念を案内し、最初のプログラムを書く方法を学びます。

## 最初のプログラム

伝統的な「Hola Mundo」から始めましょう：

```javascript
// ファイル: hola_mundo.qz
imprimir_exito("¡Hola mundo desde Quetzal!")
```

実行するには：

```bash
quetzal run hola_mundo.qz
```

出力：
```
✓ コンパイル成功
¡Hola mundo desde Quetzal!
```

## 基本概念

### 1. 変数とデータ型

Quetzalは自動推論機能を持つ強力な型システムを持っています：

```javascript
// 明示的な型での変数宣言
cadena nombre = "田中太郎"
entero edad = 25
decimal altura = 1.68
booleano activo = verdadero

// 自動型推論
numero pi = 3.14159
lista números = [1, 2, 3, 4, 5]
```

### 2. 基本関数

関数はQuetzalの第一級市民です：

```javascript
// シンプルな関数
cadena saludar(cadena nombre) {
    devolver "¡Hola, " + nombre + "!"
}

// 使用方法
cadena mensaje = saludar("Mundo")
imprimir(mensaje)  // 出力: ¡Hola, Mundo!
```

### 3. 制御構造

#### 条件分岐

```javascript
entero edad = 18

si (edad >= 18) {
    imprimir("成人です")
} sino {
    imprimir("未成年です")
}
```

#### ループ

```javascript
// 伝統的なforループ
para i desde 1 hasta 5 {
    imprimir("Número: " + i.cadena())
}

// リストでのループ
lista nombres = ["田中", "佐藤", "鈴木"]
para nombre en nombres {
    imprimir("こんにちは " + nombre)
}
```

## データの操作

### リストと操作

```javascript
// リストの作成と操作
lista números = [1, 2, 3, 4, 5]

// 関数型操作
lista pares = números.filtrar(n => n % 2 == 0)
lista doblar = números.mapear(n => n * 2)
numero suma = números.reducir((a, b) => a + b, 0)

imprimir("偶数: " + pares.cadena())
imprimir("2倍した数: " + doblar.cadena())
imprimir("合計: " + suma.cadena())
```

### オブジェクトとプロパティ

```javascript
// オブジェクト定義
objeto persona = {
    nombre: "山田花子",
    edad: 30,
    ciudad: "東京",
    activo: verdadero
}

// プロパティアクセス
imprimir("名前: " + persona.nombre)
imprimir("住んでいる場所: " + persona.ciudad)

// プロパティ変更
persona.edad = 31
imprimir("新しい年齢: " + persona.edad.cadena())
```

## 入力と出力

### ユーザー入力

```javascript
// 文字列入力
cadena nombre = entrada("お名前は？ ")
imprimir("こんにちは " + nombre)

// 数値入力
entero edad = entrada_numero("年齢は？ ")
si (edad >= 18) {
    imprimir("成人です")
}

// ブール値入力
booleano continuar = entrada_booleano("続けますか？ (si/no) ")
si (continuar) {
    imprimir("続行中...")
}
```

### フォーマットされた出力

```javascript
cadena nombre = "田中"
entero edad = 25
decimal salario = 450000.50

// シンプルな出力
imprimir("名前: " + nombre)

// 色付き出力
imprimir_exito("✓ 操作成功")
imprimir_error("✗ エラーが発生しました")
imprimir_advertencia("⚠ 重要な警告")

// 複雑なデータの書式設定
imprimir("従業員: " + nombre + ", 年齢: " + edad.cadena() + ", 給与: ¥" + salario.cadena())
```

## エラーハンドリング

```javascript
// try-catchブロック
intentar {
    entero resultado = 10 / 0  // これはエラーを引き起こします
    imprimir("結果: " + resultado.cadena())
} capturar error {
    imprimir_error("エラー: ゼロ除算")
} finalmente {
    imprimir("操作完了")
}
```

## 実用例：シンプルな電卓

```javascript
// ファイル: calculadora.qz

cadena operacion = entrada("演算を入力してください (+, -, *, /): ")
numero num1 = entrada_numero("最初の数: ")
numero num2 = entrada_numero("2番目の数: ")

numero resultado = 0

si (operacion == "+") {
    resultado = num1 + num2
} sino si (operacion == "-") {
    resultado = num1 - num2
} sino si (operacion == "*") {
    resultado = num1 * num2
} sino si (operacion == "/") {
    si (num2 != 0) {
        resultado = num1 / num2
    } sino {
        imprimir_error("エラー: ゼロ除算")
        devolver
    }
} sino {
    imprimir_error("無効な演算")
    devolver
}

imprimir_exito("結果: " + resultado.cadena())
```

## 初心者向けのヒント

### 1. **VS Code拡張機能を使用**
- シンタックスハイライトのためにQuetzal拡張機能をインストール
- オートコンプリートにIntelliSenseを使用

### 2. **デバッグ**
```javascript
// デバッグにimprimirを使用
entero x = 10
imprimir("デバッグ: x = " + x.cadena())
```

### 3. **きれいなコード**
```javascript
// 説明的な変数名を使用
cadena nombreCompleto = "田中太郎"  // ✓ 良い
cadena n = "田中太郎"              // ✗ 悪い

// 有用なコメント
// 円の面積を計算
numero calcularArea(numero radio) {
    numero pi = 3.14159
    devolver pi * radio * radio
}
```

### 4. **コードの整理**
```javascript
// 関連するコードをグループ化
// === 数学関数 ===
numero sumar(numero a, numero b) { devolver a + b }
numero restar(numero a, numero b) { devolver a - b }

// === メインプログラム ===
numero x = 10
numero y = 5
numero resultado = sumar(x, y)
```

## 次のステップ

基本をマスターしたので、さらに探求しましょう：

1. 📖 **[基本構文](/ja/basics/syntax)** - 完全な構文を学習
2. 🎯 **[高度な関数](/ja/functions/)** - 関数の深い概念
3. 📚 **[データ構造](/ja/data-structures/)** - リスト、オブジェクトなど
4. ⚡ **[非同期プログラミング](/ja/async/)** - Async/awaitとpromises
5. 💡 **[プロジェクト例](/ja/examples/projects/)** - 完全なプロジェクト

## 練習問題

以下のプログラムを書いて練習してください：

1. **温度コンバーター**: 摂氏から華氏への変換
2. **階乗計算機**: 数値の階乗を計算
3. **タスクリスト**: シンプルなTODOアプリケーション
4. **パスワード生成器**: ランダムパスワードを作成

---

🎉 **おめでとうございます！** Quetzalでの最初のステップを完了しました。練習を続けて、この言語の高度な機能を探求してください！

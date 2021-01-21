

## ES5へ変換

### 0、変換の土台
@babel/preset-env

#### options
いろいろオプション
```
"useBuiltIns": "entry",
"useBuiltIns": "usage",
```

### 1、ES6〜の構文をES5に変換
@bable/core

### 2、polyfill
core-js@3 (bable7ではこちらを推奨)

```
npm install --save-dev core-js@3
```

とりあえず全部読み込み

```
import "core-js/proposals/string-replace-all"
```

@babel/preset-env は @bable/core とセット使う必要あり。

@babel/preset-envしかないと下記のエラー

```
Error: Cannot find module '@babel/core'
```

### browserslist と組み合わせる

``.browserslistrc``というファイルに対応するブラウザや対応範囲を記載
package.jsonでも可

```
npm install --save-dev browserslist
```


## typescriptをコンパイル

- tsconfig.json を追加する

https://webpack.js.org/guides/typescript/#root



### jqueryなどmoduleをインポートする際

**注意 noImplicitAnyのoptionsをfalseにしないと型指定ないよとエラーになる**

- 「全てのエクスポート」をインポート

```
import * as _ from 'lodash';
import * as $ from 'jquery';
```


- 複数をインポート

```
import { hello, goodbye } from './module'
```







```
webpack webpack-cli sass sass-loader style-loader
```

babel-loader @babel/preset-env @babel/core
https://aloerina01.github.io/blog/2019-06-21-1#babel-%E3%81%A8-core-js-%E3%81%AE%E9%96%A2%E4%BF%82%E3%81%AE%E3%81%8A%E3%81%95%E3%82%89%E3%81%84
core-js と follyfileは同じようなもの
でcore-jsをbabelで使用する場合は@babel/coreが必要

## exclude

下記は例えばjqueryなどは無視したいよね・・など

```
// ローダーの処理対象から外すディレクトリ
exclude: /node_modules/,
```

## target

https://webpack.js.org/configuration/target/

https://github.com/browserslist/browserslist#queries



- autoplefixser browserslist

https://www.npmjs.com/package/browserslist

```

```
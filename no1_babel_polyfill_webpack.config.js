
const path = require('path');

module.exports = {

  mode: 'development',
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'prod'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: {
          loader: "babel-loader",
          options: { // Babel のオプションを指定する
            presets: [[
              "@babel/preset-env", // プリセットを指定することで、ES2020 を ES5 に変換
              {
                // polyfillどこまでいれるか？ usageだと必要なものだけ。entryは全部はいる
                "useBuiltIns": "usage",
                // polyfillはこれ。
                corejs: {
                  version: "3.8",
                  proposals: true
                },
                debug:true //実行時のデバックを表示するかどうか？
              }
            ]]
          }
        }
      }
    ],
  },
  // ES5(IE11等)向けの指定（webpack 5以上で必要）
  // es6の構文 （es6の構文何もつけない & core-js + browswerlist を不使用）
  // es5の構文
  // browserlistにそった内容の構文 （es6の構文何もつけない & core-js + browswerlist を使用）
  target: ["web","es5"]
}
var path = require("path");

module.exports = {
  pages: {
    index: {
      // 最初に実行されるファイル名
      entry: "src/main.js",
      // テンプレートファイル
      template: "public/index.html",
      // 出力されるファイル名
      filename: "index.html",
      // タイトルの設定
      // <title><%= htmlWebpackPlugin.options.title %></title>
      title: "Index Page",
      // チャンクの指定
      chunks: ["chunk-vendors", "chunk-common", "index"]
    }
    // サブページをせっているするとエントリーページのファイル以外はこちらが参照される。
    // テンプレートファイルは、 `public/subpage.html`
    // public/subpage.htmlがなかったら `public/index.html`が呼び出される。
    // 出力されるファイル名は `subpage.html`となる。
    // subpage: "src/subpage/main.js"
  },
  // outputDir: "docs/",
  // キャッシュバスティングのためにファイル名にハッシュをつけている。
  // デフォルトでtrueなので、falseの場合のみ指定
  filenameHashing: true,
  // ポートなどの設定
  devServer: {
    port: 8080,
    contentBase: path.resolve(__dirname, "public"),
    host: "localhost"
  },
  css: {
    // 毎回読み込んでおくscssファイルの指定
    loaderOptions: {
      sass: {
        data: `@import "@/val.scss";`
      }
    }
  },
  chainWebpack: config => {
    config.module
      .rule("vue")
      .use("vue-loader")
      .loader("vue-loader")
      .tap(options => {
        options.transformAssetUrls = {
          "b-img": "src"
        };
        return options;
      });
  },
  configureWebpack: {
    module: {
      rules: [
        {
          test: /\.js$/,
          loader: "babel-loader",
          exclude: /node_modules/
        }
      ]
    },
    resolve: {
      alias: {
        vue$: "vue/dist/vue.esm.js",
        "@": path.resolve(__dirname, "src/")
      }
    },
    plugins: [
      // plugin
    ]
  },
  publicPath: process.env.NODE_ENV === "production" ? "/portfolio/" : "/"
};

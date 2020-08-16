npm init -y
npm install webpack webpack-cli --save-dev
добавляем строку "webpack": "webpack", в разделе scripts файла package.json
mkdir src
создать файл src/index.js

в корне создаем файл webpack.config.json
записываем в файл:
const path = require("path")
module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist')
    }
}

подключить файл сборки main.js на странице

выполнить комануд в терминале npm run webpack
<script type="text/javascript" src="dist/main.js"></script>

Подключение css
создать файл стилей в папке src
импортируем созданный файл import "./styles.css" в файле src/index.js 
установить плагины
npm i mini-css-extract-plugin css-loader --save-dev
добавить в файл webpack.config.js в раздел plugins

    new MiniCssExtractPlugin({
      filename: '[name].css',
    }),

либо сам раздел если не существует

  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].css',
    }),
  ],

добавить в webpack.config.js раздел

module: {
    rules: [
        {
            test: /\.css$/,
            use: [
                {
                    loader: MiniCssExtractPlugin.loader,
                },
                'css-loader',
            ]
        }
        
    ]
},

выполнить комануд в терминале npm run webpack
подключить файл сборки main.css на странице
<link rel="stylesheet" href="dist/main.css">

Подключаем jquery
набираем в терминале
npm i jquery popper.js --save
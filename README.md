# SWAPI-pixabay


1) Создать в корне проекта package.json с параметрами по умолчанию
npm init -y

2) Создать основной конфиг для сборки  webpack.config.js
```javascript
module.exports = {
    entry: "./js/swapi.js",
    mode: "production",
    output: {
        filename: "swapi.min.js"
    },
 };
```
3) установите gulg

nmp i gulp --save-dev
npm i gulp-autoprefixer gulp-clean-css -save-dev gulp-watch --save-dev

4) gulp watch

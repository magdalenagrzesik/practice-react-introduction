const taskNumber = '05';
//numer przerabianego zadania

const path = require('path');
// importuję bibliotękę [path] z [node.js]
const HtmlWebpackPlugin = require('html-webpack-plugin');
// importuję odpowiedni plugin
module.exports = {
    dependencies: [
        path.join(__dirname, "node_modules")
    ],
    entry: `./${taskNumber}/app.js`,
    // definiuję plik wejściowy
    output: {
        path: path.resolve(__dirname, 'build'),
        // definiuje ścieżką wyjściową
        filename: 'app.min.js',
        // definiuję nazwę pliku wyjściowego
    },
    target: "web", 
    // niezbędne do uruchomienia automatycznego odświeżania z webpack-dev-server@3
    // https://github.com/webpack/webpack-dev-server/issues/2758
    module: {
        rules: [
            {
                test: /\.js$/,
                // określam jakie pliki 
                // będą brane pod uwagę
                exclude: /node_modules/,
                // określam wykluczenia
                use: 'babel-loader',
                // określam jaki [loader]
                // ma być wykorzystany
            }
        ]
        // obecnie brak dodatkowych ustawień
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: `./${taskNumber}/index.html`,
            // wskazuje plik źródłowy
            filename: 'index.html'
            // określam nazwę dla pliku
        })
    ]
}
// eksportuję ustawienia dla webpack-a

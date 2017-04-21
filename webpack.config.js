const path = require('path');

module.exports = {
    entry: './src/Lib.js',
    output: {
        path: path.resolve(__dirname, './'),
        filename: 'index.js',
        library: 'lib',
        libraryTarget: 'umd',
    },
    module: {
        rules: [{
            test: /\.js$/,
            exclude: /node_modules/,
            loader: 'babel-loader',
        }],
    },
};

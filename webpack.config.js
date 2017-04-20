const path = require('path');

module.exports = {
    entry: './src/Lib.js',
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: 'lib.js',
        library: 'lib',
        // libraryTarget: 'this',
    },
    module: {
        rules: [{
            test: /\.js$/,
            exclude: /node_modules/,
            loader: 'babel-loader',
        }],
    },
};

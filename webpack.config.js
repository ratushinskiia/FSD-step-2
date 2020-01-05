const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'bundle.[name].js',
        path: path.resolve(__dirname +'/dist'), 
    },
    devServer: {
        contentBase: './dist',
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.pug'
         }),
        ],
    module: {
        rules: [
              { 
                test: /\.pug$/,
                use: ['pug-loader']
              },
        ]
    }
}
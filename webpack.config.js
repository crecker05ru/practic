<<<<<<< HEAD
const HTMLPlugin = require ('html-webpack-plugin')

module.exports={
    entry:['@babel/polyfill', './src/index.js'],
    output:{
        path:__dirname + '/dist',
        filename: 'bundle.js'
    },
    devServer:{
        contentBase: __dirname + '/dist'
    },
    plugins: [
        new HTMLPlugin({
            filename: 'index.html',
            template: './src/index.html'
        })
    ],
    resolve:{
        extensions: ['.js']
    },
    module: {
        rules: [
          { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader' }
        ]
      }
=======
const HTMLPlugin = require ('html-webpack-plugin')

module.exports={
    entry:['@babel/polyfill', './src/index.js'],
    output:{
        path:__dirname + '/dist',
        filename: 'bundle.js'
    },
    devServer:{
        contentBase: __dirname + '/dist'
    },
    plugins: [
        new HTMLPlugin({
            filename: 'index.html',
            template: './src/index.html'
        })
    ],
    resolve:{
        extensions: ['.js']
    },
    module: {
        rules: [
          { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader' }
        ]
      }
>>>>>>> 75a81fb092f6424420c63731db53a384af3cdb9e
}
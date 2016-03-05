var path = require('path');
module.exports = {
    entry: './src/application.js',
    output: {
        path: __dirname + '/www',
        filename: 'bundle.js'
    },
    resolve: {

    modulesDirectories: [
      'node_modules'
    ],

    extensions: [
      "",
      ".js",
      ".jsx"
    ]
  },
    module: {
        loaders: [
        {
          test: /\.jsx?$/,
          exclude: /(node_modules|bower_components)/,
          loader: 'babel', // 'babel-loader' is also a legal name to reference
          query: {
            presets: ['react', 'es2015']
          }
        }
      ]
    }
};

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
            { test: path.join(__dirname, 'src'),
              loader: 'babel-loader' }
        ]
    }
};

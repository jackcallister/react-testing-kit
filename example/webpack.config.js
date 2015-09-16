module.exports = {
  entry: './src/app.jsx',

  output: {
    filename: './dist/bundle.js'
  },

  resolve: {
    extensions: ['', '.js', '.jsx', '.css', '.less']
  },

  module: {
    loaders: [
      { test: /.jsx?$/, loader: 'babel' },
      { test: /.less$/, loader: 'style!css!less' }
    ]
  }
};

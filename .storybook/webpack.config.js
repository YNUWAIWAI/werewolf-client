const path = require('path')

module.exports = {
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'style-loader',
          { loader: 'css-loader', options: { importLoaders: 1 } },
          {
            loader: 'postcss-loader',
            options: {
              ident: 'postcss',
              plugins: (loader) => [
                require('postcss-nested')(),
                require('autoprefixer')()
              ]
            }
          }
        ],
        include: path.resolve(__dirname, "../src/styles")
      },
      {
        test: /\.(ts|tsx)$/,
        use: [{
          loader: require.resolve('awesome-typescript-loader')
        }]
      }
    ]
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.css', '.js']
  }
}

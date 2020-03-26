const path = require('path')

module.exports = ({ config, mode }) => {
  config.module.rules = [
    {
      test: /\.css$/,
      loaders: [
        'style-loader',
        { loader: 'css-loader', options: { importLoaders: 1 } },
        {
          loader: 'postcss-loader',
          options: {
            ident: 'postcss',
            plugins: () => [
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
      use: [
        {
          loader: require.resolve('ts-loader')
        }
      ]
    }
  ]
  config.resolve.extensions.push('.ts', '.tsx', '.css')

  return config
}

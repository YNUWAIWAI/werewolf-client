const TerserPlugin = require('terser-webpack-plugin')
const path = require('path')
const postcssNested = require('postcss-nested')
const autoprefixer = require('autoprefixer')
const config = require('./config')

module.exports = {
  entry: {
    landing: './src/scripts/landing',
    lobby: './src/scripts/lobby',
    village: './src/scripts/village'
  },
  externals: {
    'fuse.js': 'Fuse',
    'prop-types': 'PropTypes',
    'react': 'React',
    'react-dom': 'ReactDOM',
    'react-intl': 'ReactIntl',
    'react-redux': 'ReactRedux',
    'react-router-dom': 'ReactRouterDOM',
    'redux': 'Redux'
  },
  mode: 'production',
  module: {
    rules: [
      {
        loader: 'ts-loader',
        test: /\.tsx?$/
      },
      {
        enforce: 'pre',
        loader: 'source-map-loader',
        test: /\.js$/
      },
      {
        include: path.resolve(__dirname, './src/styles'),
        loaders: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1
            }
          },
          {
            loader: 'postcss-loader',
            options: {
              ident: 'postcss',
              plugins: () => [
                postcssNested(),
                autoprefixer()
              ]
            }
          }
        ],
        test: /\.css$/
      }
    ]
  },
  optimization: {
    minimizer: [
      new TerserPlugin({
        parallel: true,
        terserOptions: {
          compress: {
            'drop_console': true
          }
        }
      })
    ]
  },
  output: {
    filename: '[name].js',
    path: path.resolve(config.dest, 'javascripts')
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.json', '.css']
  }
}

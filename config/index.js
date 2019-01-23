/* eslint no-process-env: 0 */
const path = require('path')

exports.default = {
  dest: path.resolve('../public'),
  env: process.env.NODE_ENV || 'production'
}

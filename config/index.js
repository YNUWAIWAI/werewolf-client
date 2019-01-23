/* eslint no-process-env: 0 */
const path = require('path')

module.exports = {
  dest: path.resolve('../public'),
  env: process.env.NODE_ENV || 'production'
}

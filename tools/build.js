const fs = require('fs')
const path = require('path')
const postcss = require('postcss')
const nested = require('postcss-nested')
const autoprefixer = require('autoprefixer')
const glob = require('glob')
const webpack = require('webpack')
const webpackConfig = require('../webpack.config.js')

const mkdir = dir => {
  return new Promise((resolve, reject) => {
    fs.stat(path.dirname(dir), (err, stats) => {
      if (err) {
        if (err.code === 'ENOENT') {
          fs.mkdir(path.dirname(dir), err => {
            if (err) {
              reject(err)
            }
          })
        } else {
          reject(err)
        }
      }
      resolve()
    })
  })
}

const buildCSS = (src, dest) => {
  fs.readFile(src, (err, css) => {
    if (err) {
      throw err
    }
    postcss([ nested, autoprefixer ])
      .process(css, {
        from: src,
        to: dest
      })
      .then(result => {
        mkdir(dest)
          .then(() => {
            fs.writeFile(dest, result.css, err => {
              if (err) {
                throw err
              }
            })
          })
      })
      .catch(err => {
        console.log(err)
      })
  })
}

const buildHTML = (src, dest) => {
  fs.readFile(src, (err, data) => {
    if (err) {
      throw err
    }
    mkdir(dest)
      .then(() => {
        fs.writeFile(dest, data, err => {
          if (err) {
            throw err
          }
        })
      })
  })
}

const build = destDir => {
  const CSSfiles = glob.sync('src/**/*.css')
  const HTMLfiles = glob.sync('src/**/*.html')

  CSSfiles.forEach(file => {
    buildCSS(file, `${destDir}/stylesheets/${path.relative('src/styles', file)}`)
  })

  HTMLfiles.forEach(file => {
    buildHTML(file, `${destDir}/../app/views/${path.parse(file).name}.scala.html`)
  })
}

const compiler = webpack(webpackConfig)

if (process.argv[2] === '-w') {
  build('../public')
  fs.watch('./src', {recursive: true}, (eventType, filename) => {
    if (filename) {
      console.log(`${eventType}: ${filename}`)
      build('../public')
    }
  })
  compiler.watch({}, (err, stats) => {
    if (err) {
      throw err
    }
  })
} else if (process.argv[2] === '-d') {
  build('docs')
} else {
  build('../public')
  compiler.run((err, stats) => {
    if (err) {
      throw err
    }
    const info = stats.toJson()

    if (stats.hasErrors()) {
      console.error(info.errors)
    }

    if (stats.hasWarnings()) {
      console.warn(info.warnings)
    }
  })
}

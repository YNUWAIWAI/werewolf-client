const fs = require('fs')
const path = require('path')
const postcss = require('postcss')
const nested = require('postcss-nested')
const autoprefixer = require('autoprefixer')
const glob = require('glob')
const express = require('express')

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

const buildJS = (src, dest) => {
  console.log(src, dest)
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
  buildCSS('src/app.css', `${destDir}/app.css`)
  buildHTML('src/index.html', `${destDir}/index.html`)
  glob('src/**/*.js', (err, files) => {
    if (err) {
      throw err
    }
    files.forEach(file => {
      buildJS(file, `${destDir}/${path.relative('src', file)}`)
    })
  })
}

if (process.argv[2] === '-w') {
  fs.watch('./src', {recursive: true}, (eventType, filename) => {
    if (filename) {
      console.log(`${eventType}: ${filename}`)
      build('dest')
    }
  })
  const app = express()
  app.use(express.static('dest'))
  app.listen(8000)
  console.log('see http://localhost:8000/')
} else if (process.argv[2] === '-d') {
  build('docs')
} else {
  build('dest')
}

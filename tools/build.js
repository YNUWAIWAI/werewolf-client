const fs = require('fs')
const path = require('path')
const postcss = require('postcss')
const nested = require('postcss-nested')
const autoprefixer = require('autoprefixer')

function mkdir(dir) {
  return new Promise((resolve, reject) => {
    fs.stat(path.dirname(dir), (err, stats) => {
      if (err) {
        if (err.code === 'ENOENT') {
          fs.mkdir(path.dirname(dir), (err) => {
            if (err) reject(err)
          })
        } else {
          reject(err)
        }
      }
      resolve();
    })
  })
}

function buildCSS(src, dest) {
  fs.readFile(src, (err, css) => {
    if (err) throw err
    postcss([nested, autoprefixer])
    .process(css, {
      from: src,
      to: dest
    }).then(result => {
      mkdir(dest)
      .then(() => {
        fs.writeFile(dest, result.css, err => {
          if (err) throw err
        })
      })
    }).catch(err => {
      console.log(err)
    })
  })
}

function buildHTML(src, dest) {
  fs.readFile(src, (err, data) => {
    mkdir(dest)
      .then(() => {
        fs.writeFile(dest, data, err => {
          if (err) throw err
        })
      })
  })
}

function build(destDir) {
  buildCSS('src/app.css', `${destDir}/app.css`)
  buildHTML('src/index.html', `${destDir}/index.html`)
}


if (process.argv[2] === '-w') {
  const watcher = fs.watch('./src', {recursive: true}, (eventType, filename) => {
    if (filename) {
      console.log(`${eventType}: ${filename}`)
      build('dest')
    }
  })
} else if (process.argv[2] === '-d') {
  build('docs')
} else {
  build('dest')
}

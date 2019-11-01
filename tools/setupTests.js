const Adapter = require('enzyme-adapter-react-16')
const Enzyme = require('enzyme')
const {JSDOM} = require('jsdom')

Enzyme.configure({
  adapter: new Adapter()
})

const jsdom = new JSDOM(
  '<!doctype html><html><body></body></html>',
  {
    url: 'http://localhost'
  }
)
const {window} = jsdom

const copyProps = (src, target) => {
  Object.defineProperties(target, {
    ... Object.getOwnPropertyDescriptors(src),
    ... Object.getOwnPropertyDescriptors(target)
  })
}

global.window = window
global.document = window.document
global.navigator = {
  userAgent: 'node.js'
}
global.requestAnimationFrame = cb => setTimeout(cb, 0)
global.cancelAnimationFrame = id => {
  clearTimeout(id)
}
copyProps(window, global)

const Adapter = require('enzyme-adapter-react-16')
const Enzyme = require('enzyme')
const {JSDOM} = require('jsdom')

Enzyme.configure({
  adapter: new Adapter()
})

const jsdom = new JSDOM('<!doctype html><html><body></body></html>')
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
if (!global.Intl.PluralRules) {
  require('@formatjs/intl-pluralrules/polyfill')
  require('@formatjs/intl-pluralrules/dist/locale-data/en')
  require('@formatjs/intl-pluralrules/dist/locale-data/fr')
  require('@formatjs/intl-pluralrules/dist/locale-data/it')
  require('@formatjs/intl-pluralrules/dist/locale-data/ja')
}

if (!global.Intl.RelativeTimeFormat) {
  require('@formatjs/intl-relativetimeformat/polyfill')
  require('@formatjs/intl-relativetimeformat/dist/locale-data/en')
  require('@formatjs/intl-relativetimeformat/dist/locale-data/fr')
  require('@formatjs/intl-relativetimeformat/dist/locale-data/it')
  require('@formatjs/intl-relativetimeformat/dist/locale-data/ja')
}
copyProps(window, global)

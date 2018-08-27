import {configure} from '@storybook/react'
import {setOptions} from '@storybook/addon-options'
import '../src/styles/app.css'

setOptions({
  hierarchyRootSeparator: /\|/
})
const req = require.context('../stories', true, /.stories.js$/);
function loadStories() {
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);

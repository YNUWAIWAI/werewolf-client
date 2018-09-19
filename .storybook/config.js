import {configure} from '@storybook/react'
import {setOptions} from '@storybook/addon-options'
import '../src/styles/village.css'
import '../src/styles/lobby.css'

setOptions({
  hierarchyRootSeparator: /\|/
})
const req = require.context('../stories', true, /.stories.js$/);
function loadStories() {
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);

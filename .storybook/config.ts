import {addDecorator, configure} from '@storybook/react'
import {withOptions} from '@storybook/addon-options'
import '../src/styles/village.css'
import '../src/styles/lobby.css'

addDecorator(
  withOptions({
    hierarchyRootSeparator: /\|/
  })
)

const req = require.context('../stories', true, /.stories.tsx?$/);
function loadStories() {
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);

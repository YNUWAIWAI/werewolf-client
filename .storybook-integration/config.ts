import {configure} from '@storybook/react'
import '../src/styles/village.css'
import '../src/styles/lobby.css'
import '../src/styles/landing.css'

const req = require.context('../stories', true, /.stories.tsx?$/);
function loadStories() {
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);

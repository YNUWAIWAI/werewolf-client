import {addDecorator, configure} from '@storybook/react'
import {withKnobs} from '@storybook/addon-knobs'
import '../src/styles/village'
import '../src/styles/lobby'
import '../src/styles/landing'

addDecorator(withKnobs)

const req = (require as NodeRequire).context('../stories', true, /.stories.tsx?$/);
function loadStories() {
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);

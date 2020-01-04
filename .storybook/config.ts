import {addDecorator, addParameters, configure} from '@storybook/react'
import {withKnobs} from '@storybook/addon-knobs'
import '../src/styles/village.css'
import '../src/styles/lobby.css'
import '../src/styles/landing.css'

const options = {
  panelPosition: 'right'
}
const viewport = {
  viewports: {
    FHD: {
      name: 'FHD',
      styles: {
        width: '1920px',
        height: '1080px'
      },
      type: 'desktop'
    },
    WXGA: {
      name: 'WXGA',
      styles: {
        width: '1280px',
        height: '800px',
      },
      type: 'desktop'
    },
    WXGAplus: {
      name: 'WXGA+',
      styles: {
        width: '1440px',
        height: '900px',
      },
      type: 'desktop'
    },
    FHD75: {
      name: 'FHDx0.75',
      styles: {
        width: `${1920 * 0.75}px`,
        height: `${1080 * 0.75}px`
      },
      type: 'desktop'
    },
    WXGA75: {
      name: 'WXGAx0.75',
      styles: {
        width: `${1280 * 0.75}px`,
        height: `${800 * 0.75}px`
      },
      type: 'desktop'
    },
    WXGAplus75: {
      name: 'WXGA+x0.75',
      styles: {
        width: `${1440 * 0.75}px`,
        height: `${900 * 0.75}px`
      },
      type: 'desktop'
    }
  }
}

addDecorator(withKnobs)
addParameters({
  options,
  viewport
})

const req = (require as NodeRequire).context('../stories', true, /.stories.tsx?$/);
function loadStories() {
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);

import * as React from 'react'
import {number, select, withKnobs} from '@storybook/addon-knobs'
import IntlProvider from '../../src/scripts/village/containers/IntlProviderContainer'
import {Provider} from 'react-redux'
import Timer from '../../src/scripts/village/components/atoms/Timer'
import {createStore} from 'redux'
import reducer from '../../src/scripts/village/reducers'
import {storiesOf} from '@storybook/react'

const store = createStore(
  reducer
)

storiesOf('village|Timer', module)
  .addDecorator(withKnobs)
  .addDecorator(story =>
    <Provider store={store}>
      <IntlProvider>
        {story()}
      </IntlProvider>
    </Provider>
  )
  .add('default', () => {
    const limit = number('limit', 10)
    const phase = select(
      'phase',
      [
        village.Phase.morning,
        village.Phase.day,
        village.Phase.night,
        village.Phase.postMortem,
        village.Phase.result,
        village.Phase.flavorText
      ],
      village.Phase.day
    )
    const story = <Timer limit={limit} phase={phase} />

    return story
  })

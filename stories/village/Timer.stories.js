// @flow
import {number, select, withKnobs} from '@storybook/addon-knobs'
import IntlProvider from '../../src/scripts/village/containers/IntlProviderContainer'
import React from 'react'
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
    <IntlProvider store={store}>
      {story()}
    </IntlProvider>
  )
  .add('default', () => {
    const limit = number('limit', 10)
    const phase = select('phase', ['morning', 'day', 'night', 'post mortem', 'result'], 'day')
    const story = <Timer limit={limit} phase={phase} />

    return story
  })

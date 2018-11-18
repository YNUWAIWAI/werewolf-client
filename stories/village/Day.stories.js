// @flow
import {number, select, withKnobs} from '@storybook/addon-knobs'
import Day from '../../src/scripts/village/components/molecules/Day'
import IntlProvider from '../../src/scripts/village/containers/IntlProviderContainer'
import React from 'react'
import {createStore} from 'redux'
import reducer from '../../src/scripts/village/reducers'
import {storiesOf} from '@storybook/react'

const store = createStore(
  reducer
)

storiesOf('village|Info/Day', module)
  .addDecorator(withKnobs)
  .addDecorator(getStory =>
    <IntlProvider store={store}>
      {getStory()}
    </IntlProvider>
  )
  .add('default', () => {
    const date = number('date', 0)
    const phase = select('phase', ['morning', 'day', 'night', 'post mortem', 'result'], 'day')
    const timer = {
      limit: number('limit', 10),
      phase
    }

    const story =
      <div className="info">
        <Day
          date={date}
          phase={phase}
          timer={timer}
        />
      </div>

    return story
  })

// @flow
import {number, select, withKnobs} from '@storybook/addon-knobs'
import InfoDay from '../../src/scripts/village/components/molecules/InfoDay'
import IntlProvider from '../../src/scripts/village/containers/IntlProviderContainer'
import React from 'react'
import {createStore} from 'redux'
import reducer from '../../src/scripts/village/reducers'
import {storiesOf} from '@storybook/react'

storiesOf('village|Info/InfoDay', module)
  .addDecorator(withKnobs)
  .add('ja', () => {
    const store = createStore(
      reducer,
      {
        language: 'ja'
      }
    )
    const date = number('date', 0)
    const phase = select('phase', ['morning', 'day', 'night', 'post mortem', 'result', 'flavor text'], 'day')
    const timer = {
      limit: number('limit', 10),
      phase
    }
    const story =
      <IntlProvider store={store}>
        <div className="info">
          <InfoDay
            date={date}
            phase={phase}
            timer={timer}
          />
        </div>
      </IntlProvider>

    return story
  })
  .add('en', () => {
    const store = createStore(
      reducer,
      {
        language: 'en'
      }
    )
    const date = number('date', 0)
    const phase = select('phase', ['morning', 'day', 'night', 'post mortem', 'result', 'flavor text'], 'day')
    const timer = {
      limit: number('limit', 10),
      phase
    }
    const story =
      <IntlProvider store={store}>
        <div className="info">
          <InfoDay
            date={date}
            phase={phase}
            timer={timer}
          />
        </div>
      </IntlProvider>

    return story
  })

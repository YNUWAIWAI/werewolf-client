// @flow
import {number, selectV2, withKnobs} from '@storybook/addon-knobs'
import Day from '../../src/scripts/village/components/molecules/Day'
import {Provider} from 'react-redux'
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
    <Provider store={store}>
      {getStory()}
    </Provider>
  )
  .add('default', () => {
    const date = number('date', 0)
    const phase = selectV2('phase', ['day conversation', 'day vote', 'night', 'post mortem', 'results'], '')
    const timer = {
      limit: number('limit', 10),
      phase
    }

    const story =
      <div className="info">
        <Day date={date} phase={phase} timer={timer} />
      </div>

    return story
  })

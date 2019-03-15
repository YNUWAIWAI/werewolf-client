/* global village */
import * as React from 'react'
import {number, select} from '@storybook/addon-knobs'
import InfoDay from '../../src/scripts/village/components/molecules/InfoDay'
import IntlProvider from '../../src/scripts/village/containers/IntlProviderContainer'
import {Provider} from 'react-redux'
import {createStore} from 'redux'
import reducer from '../../src/scripts/village/reducers'
import {storiesOf} from '@storybook/react'

storiesOf('village|Info/InfoDay', module)
  .add('ja', () => {
    const store = createStore(
      reducer,
      {
        language: village.Language.ja
      }
    )
    const date = number('date', 0)
    const phase = select(
      'phase',
      {
        day: village.Phase.day,
        flavorText: village.Phase.flavorText,
        morning: village.Phase.morning,
        night: village.Phase.night,
        postMortem: village.Phase.postMortem,
        result: village.Phase.result
      },
      village.Phase.day
    )
    const story =
      <Provider store={store}>
        <IntlProvider>
          <div className="vi--info">
            <InfoDay
              date={date}
              phase={phase}
            />
          </div>
        </IntlProvider>
      </Provider>

    return story
  })
  .add('en', () => {
    const store = createStore(
      reducer,
      {
        language: village.Language.en
      }
    )
    const date = number('date', 0)
    const phase = select(
      'phase',
      {
        day: village.Phase.day,
        flavorText: village.Phase.flavorText,
        morning: village.Phase.morning,
        night: village.Phase.night,
        postMortem: village.Phase.postMortem,
        result: village.Phase.result
      },
      village.Phase.day
    )
    const story =
      <Provider store={store}>
        <IntlProvider>
          <div className="vi--info">
            <InfoDay
              date={date}
              phase={phase}
            />
          </div>
        </IntlProvider>
      </Provider>

    return story
  })

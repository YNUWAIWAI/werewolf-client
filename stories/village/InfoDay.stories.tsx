/* global village */
import * as React from 'react'
import {number, select, withKnobs} from '@storybook/addon-knobs'
import InfoDay from '../../src/scripts/village/components/molecules/InfoDay'
import IntlProvider from '../../src/scripts/village/containers/IntlProviderContainer'
import {Provider} from 'react-redux'
import {createStore} from 'redux'
import reducer from '../../src/scripts/village/reducers'
import {storiesOf} from '@storybook/react'

storiesOf('village|Info/InfoDay', module)
  .addDecorator(withKnobs)
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
    const story =
      <Provider store={store}>
        <IntlProvider>
          <div className="info">
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
    const story =
      <Provider store={store}>
        <IntlProvider>
          <div className="info">
            <InfoDay
              date={date}
              phase={phase}
            />
          </div>
        </IntlProvider>
      </Provider>

    return story
  })

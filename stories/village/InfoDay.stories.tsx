import * as React from 'react'
import {
  number,
  radios,
  select
} from '@storybook/addon-knobs'
import InfoDay from '../../src/scripts/village/components/molecules/InfoDay'
import IntlProvider from '../../src/scripts/village/containers/IntlProviderContainer'
import {Provider} from 'react-redux'
import {createStore} from 'redux'
import {language} from './language'
import reducer from '../../src/scripts/village/reducers'
import {storiesOf} from '@storybook/react'
import {theme} from './theme'
import {village} from './types'

storiesOf('village|Info/InfoDay', module)
  .addDecorator(story => (
    <div
      className={`vi ${radios(theme.label, theme.options, theme.defaultValue)}`}
    >
      {story()}
      <div className="vi--background" />
    </div>
  ))
  .add('default', () => {
    const store = createStore(
      reducer,
      {
        language: radios(language.label, language.options, language.defaultValue)
      }
    )
    const day = number('day', 0)
    const phase = select(
      'phase',
      {
        flavorText: village.Phase.flavorText,
        morning: village.Phase.morning,
        night: village.Phase.night,
        noon: village.Phase.noon,
        postMortem: village.Phase.postMortem,
        result: village.Phase.result
      },
      village.Phase.noon
    )
    const story =
      <Provider store={store}>
        <IntlProvider>
          <div className="vi--info">
            <InfoDay
              day={day}
              phase={phase}
            />
          </div>
        </IntlProvider>
      </Provider>

    return story
  })

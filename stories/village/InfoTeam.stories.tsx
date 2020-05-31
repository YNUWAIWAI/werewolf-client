import * as React from 'react'
import {IntlProviderContainer as IntlProvider} from '../../src/scripts/village/containers/IntlProviderContainer'
import {Provider} from 'react-redux'
import {TeamIcon} from '../../src/scripts/village/components/atoms/TeamIcon'
import {createStore} from 'redux'
import {language} from './language'
import {radios} from '@storybook/addon-knobs'
import reducer from '../../src/scripts/village/reducers'
import {storiesOf} from '@storybook/react'
import {theme} from './theme'
import {village} from './types'

storiesOf('village|Info/InfoTeam', module)
  .addDecorator(story => (
    <div
      className={`vi ${radios(theme.label, theme.options, theme.defaultValue)}`}
    >
      {story()}
      <div className="vi--background" />
    </div>
  ))
  .add('villager', () => {
    const store = createStore(
      reducer,
      {
        language: radios(language.label, language.options, language.defaultValue)
      }
    )
    const story =
      <Provider store={store}>
        <IntlProvider>
          <div className="vi--info">
            <TeamIcon
              class="vi--info--team"
              team={village.Team.villager}
            />
          </div>
        </IntlProvider>
      </Provider>

    return story
  })
  .add('werehamster', () => {
    const store = createStore(
      reducer,
      {
        language: radios(language.label, language.options, language.defaultValue)
      }
    )
    const story =
      <Provider store={store}>
        <IntlProvider>
          <div className="vi--info">
            <TeamIcon
              class="vi--info--team"
              team={village.Team.werehamster}
            />
          </div>
        </IntlProvider>
      </Provider>

    return story
  })
  .add('werewolf', () => {
    const store = createStore(
      reducer,
      {
        language: radios(language.label, language.options, language.defaultValue)
      }
    )
    const story =
      <Provider store={store}>
        <IntlProvider>
          <div className="vi--info">
            <TeamIcon
              class="vi--info--team"
              team={village.Team.werewolf}
            />
          </div>
        </IntlProvider>
      </Provider>

    return story
  })

import * as React from 'react'
import * as village from './types'
import Info from '../../src/scripts/village/components/organisms/Info'
import IntlProvider from '../../src/scripts/village/containers/IntlProviderContainer'
import {Provider} from 'react-redux'
import {VERSION} from '../../src/scripts/village/constants/Version'
import {createStore} from 'redux'
import language from './language'
import {radios} from '@storybook/addon-knobs'
import reducer from '../../src/scripts/village/reducers'
import {storiesOf} from '@storybook/react'

storiesOf('village|Info', module)
  .add('default', () => {
    const store = createStore(
      reducer,
      {
        language: radios(language.label, language.options, language.defaultValue),
        mine: {
          character: {
            '@id': `https://licos.online/state/${VERSION}/village#3/character#1`,
            'id': 1,
            'image': 'https://werewolf.world/image/0.3/character_icons/50x50/a_50x50.png',
            'name': {
              'en': 'Adil',
              'ja': 'アーディル'
            }
          },
          role: {
            '@id': `https://licos.online/state/${VERSION}/village#3/role#seer`,
            'id': village.RoleId.seer,
            'image': 'https://werewolf.world/image/0.3/role_icons/50x50withTI/seer_50x50.png',
            'name': {
              'en': 'Seer',
              'ja': '占い師'
            }
          }
        }
      }
    )
    const story =
      <Provider store={store}>
        <IntlProvider>
          <Info />
        </IntlProvider>
      </Provider>

    return story
  })

import * as React from 'react'
import {Character} from '../../src/scripts/village/constants/Character'
import {ImagePath} from '../../src/scripts/village/constants/ImagePath'
import Info from '../../src/scripts/village/components/organisms/Info'
import IntlProvider from '../../src/scripts/village/containers/IntlProviderContainer'
import {Provider} from 'react-redux'
import {Role} from '../../src/scripts/village/constants/Role'
import {VERSION} from '../../src/scripts/village/constants/Version'
import {createStore} from 'redux'
import {language} from './language'
import {radios} from '@storybook/addon-knobs'
import reducer from '../../src/scripts/village/reducers'
import {storiesOf} from '@storybook/react'
import {village} from './types'

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
            'image': ImagePath.Character.a,
            'name': Character.a
          },
          role: {
            '@id': `https://licos.online/state/${VERSION}/village#3/role#seer`,
            'id': village.RoleId.seer,
            'image': ImagePath.Role.seer,
            'name': Role.seer
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

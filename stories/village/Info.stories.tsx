/* global village */
import * as React from 'react'
import Info from '../../src/scripts/village/components/organisms/Info'
import IntlProvider from '../../src/scripts/village/containers/IntlProviderContainer'
import {Provider} from 'react-redux'
import {createStore} from 'redux'
import reducer from '../../src/scripts/village/reducers'
import {storiesOf} from '@storybook/react'

const store = createStore(
  reducer,
  {
    mine: {
      agent: {
        '@id': 'https://licos.online/state/0.2/village#3/agent#1',
        'id': 1,
        'image': 'https://werewolf.world/image/0.2/Walter.jpg',
        'name': {
          'en': 'Walter',
          'ja': 'ヴァルター'
        }
      },
      role: {
        '@id': 'https://licos.online/state/0.2/village#3/role#seer',
        'id': village.RoleId.seer,
        'image': 'https://werewolf.world/image/0.2/seer.jpg',
        'name': {
          'en': 'Seer',
          'ja': '占い師'
        }
      }
    }
  }
)

storiesOf('village|Info', module)
  .addDecorator(getStory => (
    <Provider store={store}>
      <IntlProvider>
        {getStory()}
      </IntlProvider>
    </Provider>
  ))
  .add('default', () => {
    const story = <Info />

    return story
  })

// @flow
import Info from '../../src/scripts/village/components/organisms/Info'
import IntlProvider from '../../src/scripts/village/containers/IntlProviderContainer'
import {Provider} from 'react-redux'
import React from 'react'
import {createStore} from 'redux'
import reducer from '../../src/scripts/village/reducers'
import {storiesOf} from '@storybook/react'
import {withKnobs} from '@storybook/addon-knobs'

const store = createStore(
  reducer,
  {
    agents: {
      all: [],
      mine: {
        '@context': 'https://werewolf.world/context/0.2/agent.jsonld',
        '@id': 'https://licos.online/state/0.2/village#3/agent#1',
        'id': 1,
        'image': 'https://werewolf.world/image/0.2/Walter.jpg',
        'isAChoice': false,
        'isMine': true,
        'name': {
          'en': 'Walter',
          'ja': 'ヴァルター'
        },
        'status': 'alive',
        'update': {
          '@id': 'https://licos.online/state/0.2/village#3/agent#1/update',
          'date': 1,
          'phase': 'morning'
        }
      }
    },
    roles: {
      all: [],
      mine: {
        '@context': 'https://werewolf.world/context/0.2/role.jsonld',
        '@id': 'https://licos.online/state/0.2/village#3/role#seer',
        'board': [
          {
            '@context': 'https://werewolf.world/context/0.2/boardResult.jsonld',
            '@id': 'https://licos.online/state/0.2/village#3/role#seer/board#1',
            'agent': {
              '@context': 'https://werewolf.world/context/0.2/agent.jsonld',
              '@id': 'https://licos.online/state/0.2/village#3/role#seer/board#1/agent#1',
              'id': 1,
              'image': 'https://werewolf.world/image/0.2/Walter.jpg',
              'name': {
                'en': 'Walter',
                'ja': 'ヴァルター'
              }
            },
            'date': 1,
            'phase': 'morning',
            'polarity': 'positive'
          }
        ],
        'image': 'https://werewolf.world/image/0.2/seer.jpg',
        'isMine': true,
        'name': {
          'en': 'Seer',
          'ja': '占い師'
        },
        'numberOfAgents': 1
      }
    }
  }
)

storiesOf('village|Info', module)
  .addDecorator(withKnobs)
  .addDecorator(getStory =>
    <Provider store={store}>
      <IntlProvider>
        {getStory()}
      </IntlProvider>
    </Provider>
  )
  .add('default', () => {
    const story = <Info />

    return story
  })

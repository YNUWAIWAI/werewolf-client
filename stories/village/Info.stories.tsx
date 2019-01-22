import * as React from 'react'
import Info from '../../src/scripts/village/components/organisms/Info'
import IntlProvider from '../../src/scripts/village/containers/IntlProviderContainer'
import {Provider} from 'react-redux'
import {initialState as agents} from '../../src/scripts/village/reducers/agents'
import {createStore} from 'redux'
import reducer from '../../src/scripts/village/reducers'
import {initialState as roles} from '../../src/scripts/village/reducers/roles'
import {storiesOf} from '@storybook/react'
import {withKnobs} from '@storybook/addon-knobs'

const store = createStore(
  reducer,
  {
    agents: {
      ... agents,
      mine: {
        '@context': village.Context.Agent,
        '@id': 'https://licos.online/state/0.2/village#3/agent#1',
        'id': 1,
        'image': 'https://werewolf.world/image/0.2/Walter.jpg',
        'isAChoice': false,
        'isMine': true,
        'name': {
          'en': 'Walter',
          'ja': 'ヴァルター'
        },
        'status': village.AgentStatus.alive,
        'update': {
          '@id': 'https://licos.online/state/0.2/village#3/agent#1/update',
          'date': 1,
          'phase': village.Phase.morning
        }
      }
    },
    roles: {
      ... roles,
      mine: {
        '@context': village.Context.Role,
        '@id': 'https://licos.online/state/0.2/village#3/role#seer',
        'board': [
          {
            '@context': village.Context.BoardResult,
            '@id': 'https://licos.online/state/0.2/village#3/role#seer/board#1',
            'agent': {
              '@context': village.Context.Agent,
              '@id': 'https://licos.online/state/0.2/village#3/role#seer/board#1/agent#1',
              'id': 1,
              'image': 'https://werewolf.world/image/0.2/Walter.jpg',
              'name': {
                'en': 'Walter',
                'ja': 'ヴァルター'
              }
            },
            'date': 1,
            'phase': village.Phase.morning,
            'polarity': village.Polarity.positive
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

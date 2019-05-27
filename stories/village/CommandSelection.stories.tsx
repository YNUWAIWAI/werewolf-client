/* global village */
import * as React from 'react'
import CommandSelection from '../../src/scripts/village/components/organisms/CommandSelection'
import IntlProvider from '../../src/scripts/village/containers/IntlProviderContainer'
import {Provider} from 'react-redux'
import {action} from '@storybook/addon-actions'
import {createStore} from 'redux'
import reducer from '../../src/scripts/village/reducers'
import {storiesOf} from '@storybook/react'

const store = createStore(
  reducer
)

storiesOf('village|Command/CommandSelection', module)
  .addDecorator(story => (
    <Provider store={store}>
      <IntlProvider>
        {story()}
      </IntlProvider>
    </Provider>
  ))
  .add('default', () => {
    const agents = [
      {
        id: 2,
        image: 'https://werewolf.world/image/0.3/agent_icons/50x50/b_50x50.png',
        name: 'Borya'
      },
      {
        id: 3,
        image: 'https://werewolf.world/image/0.3/agent_icons/50x50/c_50x50.png',
        name: 'Chacha'
      },
      {
        id: 4,
        image: 'https://werewolf.world/image/0.3/agent_icons/50x50/d_50x50.png',
        name: 'Devdatta'
      },
      {
        id: 5,
        image: 'https://werewolf.world/image/0.3/agent_icons/50x50/e_50x50.png',
        name: 'Ekrem'
      },
      {
        id: 6,
        image: 'https://werewolf.world/image/0.3/agent_icons/50x50/f_50x50.png',
        name: 'Fernando'
      },
      {
        id: 7,
        image: 'https://werewolf.world/image/0.3/agent_icons/50x50/g_50x50.png',
        name: 'Gavriil'
      },
      {
        id: 8,
        image: 'https://werewolf.world/image/0.3/agent_icons/50x50/h_50x50.png',
        name: 'Henrik'
      },
      {
        id: 9,
        image: 'https://werewolf.world/image/0.3/agent_icons/50x50/i_50x50.png',
        name: 'Ileanna'
      },
      {
        id: 10,
        image: 'https://werewolf.world/image/0.3/agent_icons/50x50/j_50x50.png',
        name: 'Jasmin'
      },
      {
        id: 11,
        image: 'https://werewolf.world/image/0.3/agent_icons/50x50/k_50x50.png',
        name: 'Kaiji'
      },
      {
        id: 12,
        image: 'https://werewolf.world/image/0.3/agent_icons/50x50/l_50x50.png',
        name: 'Louise'
      },
      {
        id: 13,
        image: 'https://werewolf.world/image/0.3/agent_icons/50x50/m_50x50.png',
        name: 'Marthe'
      },
      {
        id: 14,
        image: 'https://werewolf.world/image/0.3/agent_icons/50x50/n_50x50.png',
        name: 'Nanyamka'
      },
      {
        id: 15,
        image: 'https://werewolf.world/image/0.3/agent_icons/50x50/o_50x50.png',
        name: 'Oliwia'
      }
    ]
    const story =
      <CommandSelection
        agents={agents}
        descriptionId="CommandSelection.Description.dayVote.unfixed"
        fixed={false}
        handleSelectOption={id => action(`handleSelectOption id: ${id}`)}
        phase={village.Phase.day}
      />

    return story
  })

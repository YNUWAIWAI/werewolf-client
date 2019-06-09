/* global village */
import * as React from 'react'
import CommandSelection from '../../src/scripts/village/components/organisms/CommandSelection'
import IntlProvider from '../../src/scripts/village/containers/IntlProviderContainer'
import {Provider} from 'react-redux'
import {action} from '@storybook/addon-actions'
import {createStore} from 'redux'
import language from './language'
import {radios} from '@storybook/addon-knobs'
import reducer from '../../src/scripts/village/reducers'
import {storiesOf} from '@storybook/react'

storiesOf('village|Command/CommandSelection', module)
  .add('default', () => {
    const agents = [
      {
        id: 2,
        image: 'https://werewolf.world/image/0.3/agent_icons/50x50/b_50x50.png',
        initial: 'B',
        name: 'Borya'
      },
      {
        id: 3,
        image: 'https://werewolf.world/image/0.3/agent_icons/50x50/c_50x50.png',
        initial: 'C',
        name: 'Chacha'
      },
      {
        id: 4,
        image: 'https://werewolf.world/image/0.3/agent_icons/50x50/d_50x50.png',
        initial: 'D',
        name: 'Devdatta'
      },
      {
        id: 5,
        image: 'https://werewolf.world/image/0.3/agent_icons/50x50/e_50x50.png',
        initial: 'E',
        name: 'Ekrem'
      },
      {
        id: 6,
        image: 'https://werewolf.world/image/0.3/agent_icons/50x50/f_50x50.png',
        initial: 'F',
        name: 'Fernando'
      },
      {
        id: 7,
        image: 'https://werewolf.world/image/0.3/agent_icons/50x50/g_50x50.png',
        initial: 'G',
        name: 'Gavriil'
      },
      {
        id: 8,
        image: 'https://werewolf.world/image/0.3/agent_icons/50x50/h_50x50.png',
        initial: 'H',
        name: 'Henrik'
      },
      {
        id: 9,
        image: 'https://werewolf.world/image/0.3/agent_icons/50x50/i_50x50.png',
        initial: 'I',
        name: 'Ileanna'
      },
      {
        id: 10,
        image: 'https://werewolf.world/image/0.3/agent_icons/50x50/j_50x50.png',
        initial: 'J',
        name: 'Jasmin'
      },
      {
        id: 11,
        image: 'https://werewolf.world/image/0.3/agent_icons/50x50/k_50x50.png',
        initial: 'K',
        name: 'Kaiji'
      },
      {
        id: 12,
        image: 'https://werewolf.world/image/0.3/agent_icons/50x50/l_50x50.png',
        initial: 'L',
        name: 'Louise'
      },
      {
        id: 13,
        image: 'https://werewolf.world/image/0.3/agent_icons/50x50/m_50x50.png',
        initial: 'M',
        name: 'Marthe'
      },
      {
        id: 14,
        image: 'https://werewolf.world/image/0.3/agent_icons/50x50/n_50x50.png',
        initial: 'N',
        name: 'Nanyamka'
      },
      {
        id: 15,
        image: 'https://werewolf.world/image/0.3/agent_icons/50x50/o_50x50.png',
        initial: 'O',
        name: 'Oliwia'
      }
    ]
    const store = createStore(
      reducer,
      {
        language: radios(language.label, language.options, language.defaultValue)
      }
    )
    const story =
      <Provider store={store}>
        <IntlProvider>
          <CommandSelection
            agents={agents}
            descriptionId="CommandSelection.Description.dayVote.unfixed"
            fixed={false}
            handleSelectOption={id => action(`handleSelectOption id: ${id}`)}
            phase={village.Phase.day}
          />
        </IntlProvider>
      </Provider>

    return story
  })

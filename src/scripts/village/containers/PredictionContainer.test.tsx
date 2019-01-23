import * as React from 'react'
import IntlProviderContainer from './IntlProviderContainer'
import PredictionContainer from './PredictionContainer'
import {Provider} from 'react-redux'
import fakeStore from './fakeStore'
import {mount} from 'enzyme'

test('<PredictionContainer />', () => {
  const playerStatus = [
    {
      id: 1,
      image: 'https://werewolf.world/image/0.2/Walter.jpg',
      name: {
        en: 'Walter',
        ja: 'ヴァルター'
      },
      status: 'alive'
    },
    {
      id: 2,
      image: 'https://werewolf.world/image/0.2/Moritz.jpg',
      name: {
        en: 'Moritz',
        ja: 'モーリッツ'
      },
      status: 'alive'
    },
    {
      id: 3,
      image: 'https://werewolf.world/image/0.2/Simson.jpg',
      name: {
        en: 'Simson',
        ja: 'ジムゾン'
      },
      status: 'alive'
    },
    {
      id: 4,
      image: 'https://werewolf.world/image/0.2/Thomas.jpg',
      name: {
        en: 'Thomas',
        ja: 'トーマス'
      },
      status: 'alive'
    },
    {
      id: 5,
      image: 'https://werewolf.world/image/0.2/Nicholas.jpg',
      name: {
        en: 'Nicholas',
        ja: 'ニコラス'
      },
      status: 'alive'
    }
  ]
  const roleStatus = [
    {
      caption: {
        en: 'Villager',
        ja: '村人'
      },
      id: 'villager',
      image: 'https://werewolf.world/image/0.2/villager.jpg',
      numberOfAgents: 2
    },
    {
      caption: {
        en: 'Seer',
        ja: '占い師'
      },
      id: 'seer',
      image: 'https://werewolf.world/image/0.2/seer.jpg',
      numberOfAgents: 1
    },
    {
      caption: {
        en: 'Madman',
        ja: '狂人'
      },
      id: 'madman',
      image: 'https://werewolf.world/image/0.2/madman.jpg',
      numberOfAgents: 1
    },
    {
      caption: {
        en: 'Werewolf',
        ja: '人狼'
      },
      id: 'werewolf',
      image: 'https://werewolf.world/image/0.2/werewolf.jpg',
      numberOfAgents: 1
    }
  ]
  const table = {
    '1': {
      madman: {
        date: 1,
        fixed: true,
        state: 'fill'
      },
      seer: {
        date: 1,
        fixed: true,
        state: 'O'
      },
      villager: {
        date: 1,
        fixed: true,
        state: 'fill'
      },
      werewolf: {
        date: 1,
        fixed: true,
        state: 'fill'
      }
    },
    '2': {
      madman: {
        date: 1,
        fixed: false,
        state: '?'
      },
      seer: {
        date: 1,
        fixed: true,
        state: 'fill'
      },
      villager: {
        date: 1,
        fixed: false,
        state: 'Δ'
      },
      werewolf: {
        date: 1,
        fixed: false,
        state: '?'
      }
    },
    '3': {
      madman: {
        date: 1,
        fixed: false,
        state: '?'
      },
      seer: {
        date: 1,
        fixed: true,
        state: 'fill'
      },
      villager: {
        date: 1,
        fixed: false,
        state: '?'
      },
      werewolf: {
        date: 1,
        fixed: false,
        state: '?'
      }
    },
    '4': {
      madman: {
        date: 1,
        fixed: false,
        state: '?'
      },
      seer: {
        date: 1,
        fixed: true,
        state: 'fill'
      },
      villager: {
        date: 1,
        fixed: false,
        state: '?'
      },
      werewolf: {
        date: 1,
        fixed: false,
        state: '?'
      }
    },
    '5': {
      madman: {
        date: 1,
        fixed: false,
        state: '?'
      },
      seer: {
        date: 1,
        fixed: true,
        state: 'fill'
      },
      villager: {
        date: 1,
        fixed: false,
        state: '?'
      },
      werewolf: {
        date: 1,
        fixed: false,
        state: '?'
      }
    }
  }
  const store = fakeStore(
    {
      language: 'ja',
      prediction: {
        playerStatus,
        roleStatus,
        table
      }
    }
  )
  const wrapper = mount(
    <Provider store={store} >
      <IntlProviderContainer>
        <PredictionContainer />
      </IntlProviderContainer>
    </Provider>
  )

  expect(wrapper.html()).toMatchSnapshot()
})

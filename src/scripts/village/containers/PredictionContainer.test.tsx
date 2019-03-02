import * as React from 'react'
import IntlProviderContainer from './IntlProviderContainer'
import PredictionContainer from './PredictionContainer'
import {Provider} from 'react-redux'
import fakeStore from './fakeStore'
import {mount} from 'enzyme'

test('<PredictionContainer />', () => {
  const playerStatus = [
    {
      '@id': 'https://licos.online/state/0.2/village#3/agent#1',
      'id': 1,
      'image': 'https://werewolf.world/image/0.2/Walter.jpg',
      'name': {
        en: 'Walter',
        ja: 'ヴァルター'
      },
      'status': 'alive'
    },
    {
      '@id': 'https://licos.online/state/0.2/village#3/agent#2',
      'id': 2,
      'image': 'https://werewolf.world/image/0.2/Moritz.jpg',
      'name': {
        en: 'Moritz',
        ja: 'モーリッツ'
      },
      'status': 'alive'
    },
    {
      '@id': 'https://licos.online/state/0.2/village#3/agent#3',
      'id': 3,
      'image': 'https://werewolf.world/image/0.2/Simson.jpg',
      'name': {
        en: 'Simson',
        ja: 'ジムゾン'
      },
      'status': 'alive'
    },
    {
      '@id': 'https://licos.online/state/0.2/village#3/agent#4',
      'id': 4,
      'image': 'https://werewolf.world/image/0.2/Thomas.jpg',
      'name': {
        en: 'Thomas',
        ja: 'トーマス'
      },
      'status': 'alive'
    },
    {
      '@id': 'https://licos.online/state/0.2/village#3/agent#5',
      'id': 5,
      'image': 'https://werewolf.world/image/0.2/Nicholas.jpg',
      'name': {
        en: 'Nicholas',
        ja: 'ニコラス'
      },
      'status': 'alive'
    }
  ]
  const roleStatus = [
    {
      '@id': 'https://licos.online/state/0.2/village#3/role#villager',
      'id': 'villager',
      'image': 'https://werewolf.world/image/0.2/villager.jpg',
      'name': {
        en: 'Villager',
        ja: '村人'
      },
      'numberOfAgents': 2
    },
    {
      '@id': 'https://licos.online/state/0.2/village#3/role#seer',
      'id': 'seer',
      'image': 'https://werewolf.world/image/0.2/seer.jpg',
      'name': {
        en: 'Seer',
        ja: '占い師'
      },
      'numberOfAgents': 1
    },
    {
      '@id': 'https://licos.online/state/0.2/village#3/role#madman',
      'id': 'madman',
      'image': 'https://werewolf.world/image/0.2/madman.jpg',
      'name': {
        en: 'Madman',
        ja: '狂人'
      },
      'numberOfAgents': 1
    },
    {
      '@id': 'https://licos.online/state/0.2/village#3/role#werewolf',
      'id': 'werewolf',
      'image': 'https://werewolf.world/image/0.2/werewolf.jpg',
      'name': {
        en: 'Werewolf',
        ja: '人狼'
      },
      'numberOfAgents': 1
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

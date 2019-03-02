/* global village */
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
      'status': village.AgentStatus.alive
    },
    {
      '@id': 'https://licos.online/state/0.2/village#3/agent#2',
      'id': 2,
      'image': 'https://werewolf.world/image/0.2/Moritz.jpg',
      'name': {
        en: 'Moritz',
        ja: 'モーリッツ'
      },
      'status': village.AgentStatus.alive
    },
    {
      '@id': 'https://licos.online/state/0.2/village#3/agent#3',
      'id': 3,
      'image': 'https://werewolf.world/image/0.2/Simson.jpg',
      'name': {
        en: 'Simson',
        ja: 'ジムゾン'
      },
      'status': village.AgentStatus.alive
    },
    {
      '@id': 'https://licos.online/state/0.2/village#3/agent#4',
      'id': 4,
      'image': 'https://werewolf.world/image/0.2/Thomas.jpg',
      'name': {
        en: 'Thomas',
        ja: 'トーマス'
      },
      'status': village.AgentStatus.alive
    },
    {
      '@id': 'https://licos.online/state/0.2/village#3/agent#5',
      'id': 5,
      'image': 'https://werewolf.world/image/0.2/Nicholas.jpg',
      'name': {
        en: 'Nicholas',
        ja: 'ニコラス'
      },
      'status': village.AgentStatus.alive
    }
  ]
  const roleStatus = [
    {
      '@id': 'https://licos.online/state/0.2/village#3/role#villager',
      'id': village.RoleId.villager,
      'image': 'https://werewolf.world/image/0.2/villager.jpg',
      'name': {
        en: 'Villager',
        ja: '村人'
      },
      'numberOfAgents': 2
    },
    {
      '@id': 'https://licos.online/state/0.2/village#3/role#seer',
      'id': village.RoleId.seer,
      'image': 'https://werewolf.world/image/0.2/seer.jpg',
      'name': {
        en: 'Seer',
        ja: '占い師'
      },
      'numberOfAgents': 1
    },
    {
      '@id': 'https://licos.online/state/0.2/village#3/role#madman',
      'id': village.RoleId.madman,
      'image': 'https://werewolf.world/image/0.2/madman.jpg',
      'name': {
        en: 'Madman',
        ja: '狂人'
      },
      'numberOfAgents': 1
    },
    {
      '@id': 'https://licos.online/state/0.2/village#3/role#werewolf',
      'id': village.RoleId.werewolf,
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
        state: village.BoardState.FILL
      },
      seer: {
        date: 1,
        fixed: true,
        state: village.BoardState.CIRCLE
      },
      villager: {
        date: 1,
        fixed: true,
        state: village.BoardState.FILL
      },
      werewolf: {
        date: 1,
        fixed: true,
        state: village.BoardState.FILL
      }
    },
    '2': {
      madman: {
        date: 1,
        fixed: false,
        state: village.BoardState.QUESTION
      },
      seer: {
        date: 1,
        fixed: true,
        state: village.BoardState.FILL
      },
      villager: {
        date: 1,
        fixed: false,
        state: village.BoardState.TRIANGLE
      },
      werewolf: {
        date: 1,
        fixed: false,
        state: village.BoardState.QUESTION
      }
    },
    '3': {
      madman: {
        date: 1,
        fixed: false,
        state: village.BoardState.QUESTION
      },
      seer: {
        date: 1,
        fixed: true,
        state: village.BoardState.FILL
      },
      villager: {
        date: 1,
        fixed: false,
        state: village.BoardState.QUESTION
      },
      werewolf: {
        date: 1,
        fixed: false,
        state: village.BoardState.QUESTION
      }
    },
    '4': {
      madman: {
        date: 1,
        fixed: false,
        state: village.BoardState.QUESTION
      },
      seer: {
        date: 1,
        fixed: true,
        state: village.BoardState.FILL
      },
      villager: {
        date: 1,
        fixed: false,
        state: village.BoardState.QUESTION
      },
      werewolf: {
        date: 1,
        fixed: false,
        state: village.BoardState.QUESTION
      }
    },
    '5': {
      madman: {
        date: 1,
        fixed: false,
        state: village.BoardState.QUESTION
      },
      seer: {
        date: 1,
        fixed: true,
        state: village.BoardState.FILL
      },
      villager: {
        date: 1,
        fixed: false,
        state: village.BoardState.QUESTION
      },
      werewolf: {
        date: 1,
        fixed: false,
        state: village.BoardState.QUESTION
      }
    }
  }
  const store = fakeStore(
    {
      language: village.Language.ja,
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

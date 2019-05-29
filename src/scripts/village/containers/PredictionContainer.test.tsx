/* global village */
import * as ActionTypes from '../constants/ActionTypes'
import * as React from 'react'
import IntlProviderContainer from './IntlProviderContainer'
import Prediction from '../components/organisms/Prediction'
import PredictionContainer from './PredictionContainer'
import {Provider} from 'react-redux'
import fakeStore from './fakeStore'
import {mount} from 'enzyme'

describe('<PredictionContainer />', () => {
  test('render', () => {
    const playerStatus = [
      {
        '@id': 'https://licos.online/state/0.2/village#3/agent#1',
        'id': 1,
        'image': 'https://werewolf.world/image/0.3/agent_icons/50x50/a_50x50.png',
        'name': {
          'en': 'Adil',
          'ja': 'アーディル'
        },
        'status': village.AgentStatus.alive
      },
      {
        '@id': 'https://licos.online/state/0.2/village#3/agent#2',
        'id': 2,
        'image': 'https://werewolf.world/image/0.3/agent_icons/50x50/b_50x50.png',
        'name': {
          'en': 'Borya',
          'ja': 'ボーリャ'
        },
        'status': village.AgentStatus.alive
      },
      {
        '@id': 'https://licos.online/state/0.2/village#3/agent#3',
        'id': 3,
        'image': 'https://werewolf.world/image/0.3/agent_icons/50x50/c_50x50.png',
        'name': {
          'en': 'Chacha',
          'ja': 'チャチャ'
        },
        'status': village.AgentStatus.alive
      },
      {
        '@id': 'https://licos.online/state/0.2/village#3/agent#4',
        'id': 4,
        'image': 'https://werewolf.world/image/0.3/agent_icons/50x50/d_50x50.png',
        'name': {
          'en': 'Devdatta',
          'ja': 'デヴゥダッタ'
        },
        'status': village.AgentStatus.alive
      },
      {
        '@id': 'https://licos.online/state/0.2/village#3/agent#5',
        'id': 5,
        'image': 'https://werewolf.world/image/0.3/agent_icons/50x50/e_50x50.png',
        'name': {
          'en': 'Ekrem',
          'ja': 'エクレム'
        },
        'status': village.AgentStatus.alive
      }
    ]
    const roleStatus = [
      {
        '@id': 'https://licos.online/state/0.2/village#3/role#villager',
        'id': village.RoleId.villager,
        'image': 'https://werewolf.world/image/0.3/role_icons/50x50withTI/villager_50x50.png',
        'name': {
          'en': 'Villager',
          'ja': '村人'
        },
        'numberOfAgents': 2
      },
      {
        '@id': 'https://licos.online/state/0.2/village#3/role#seer',
        'id': village.RoleId.seer,
        'image': 'https://werewolf.world/image/0.3/role_icons/50x50withTI/seer_50x50.png',
        'name': {
          'en': 'Seer',
          'ja': '占い師'
        },
        'numberOfAgents': 1
      },
      {
        '@id': 'https://licos.online/state/0.2/village#3/role#madman',
        'id': village.RoleId.madman,
        'image': 'https://werewolf.world/image/0.3/role_icons/50x50withTI/madman_50x50.png',
        'name': {
          'en': 'Madman',
          'ja': '狂人'
        },
        'numberOfAgents': 1
      },
      {
        '@id': 'https://licos.online/state/0.2/village#3/role#werewolf',
        'id': village.RoleId.werewolf,
        'image': 'https://werewolf.world/image/0.3/role_icons/50x50withTI/werewolf_50x50.png',
        'name': {
          'en': 'Werewolf',
          'ja': '人狼'
        },
        'numberOfAgents': 1
      }
    ]
    const spec = {
      role: village.RoleId.villager,
      visible: false
    }
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
          spec,
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
  test('handleBoardClick', () => {
    const store = fakeStore(
      {
        language: village.Language.ja
      }
    )
    const dispatch = jest.fn()

    store.dispatch = dispatch

    const wrapper = mount(
      <Provider store={store} >
        <IntlProviderContainer>
          <PredictionContainer />
        </IntlProviderContainer>
      </Provider>
    )
    const playerId = 4
    const roleId = village.RoleId.villager
    const nextState = village.BoardState.CROSS

    wrapper.find(Prediction).props().handleBoardClick(playerId, roleId)(nextState)
    expect(dispatch).toHaveBeenCalledTimes(1)
    expect(dispatch).toHaveBeenCalledWith({
      nextState,
      playerId,
      roleId,
      type: ActionTypes.global.CHANGE_PREDICTION_BOARD
    })
  })
  test('handleMouseEnter', () => {
    const store = fakeStore(
      {
        language: village.Language.ja
      }
    )
    const dispatch = jest.fn()

    store.dispatch = dispatch

    const wrapper = mount(
      <Provider store={store} >
        <IntlProviderContainer>
          <PredictionContainer />
        </IntlProviderContainer>
      </Provider>
    )
    const role = village.RoleId.villager

    wrapper.find(Prediction).props().handleMouseEnter(role)()
    expect(dispatch).toHaveBeenCalledTimes(1)
    expect(dispatch).toHaveBeenCalledWith({
      role,
      type: ActionTypes.global.SHOW_PREDICTION_SPEC
    })
  })
  test('handleMouseLeave', () => {
    const store = fakeStore(
      {
        language: village.Language.ja
      }
    )
    const dispatch = jest.fn()

    store.dispatch = dispatch

    const wrapper = mount(
      <Provider store={store} >
        <IntlProviderContainer>
          <PredictionContainer />
        </IntlProviderContainer>
      </Provider>
    )

    wrapper.find(Prediction).props().handleMouseLeave()
    expect(dispatch).toHaveBeenCalledTimes(1)
    expect(dispatch).toHaveBeenCalledWith({
      type: ActionTypes.global.HIDE_PREDICTION_SPEC
    })
  })
})

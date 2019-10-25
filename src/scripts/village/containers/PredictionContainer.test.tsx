import * as ActionTypes from '../constants/ActionTypes'
import * as React from 'react'
import {Agent} from '../constants/Agent'
import {ImagePath} from '../constants/ImagePath'
import IntlProviderContainer from './IntlProviderContainer'
import Prediction from '../components/organisms/Prediction'
import PredictionContainer from './PredictionContainer'
import {Provider} from 'react-redux'
import {Role} from '../constants/Role'
import fakeStore from './fakeStore'
import {mount} from 'enzyme'
import {village} from '../types'

describe('<PredictionContainer />', () => {
  test('render', () => {
    const playerStatus = {
      allIds: [
        '1',
        '2',
        '3',
        '4',
        '5'
      ],
      byId: {
        '1': {
          '@id': 'https://licos.online/state/0.2/village#3/agent#1',
          'id': '1',
          'image': ImagePath.Agent.a,
          'name': Agent.a,
          'status': village.AgentStatus.alive
        },
        '2': {
          '@id': 'https://licos.online/state/0.2/village#3/agent#2',
          'id': '2',
          'image': ImagePath.Agent.b,
          'name': Agent.b,
          'status': village.AgentStatus.alive
        },
        '3': {
          '@id': 'https://licos.online/state/0.2/village#3/agent#3',
          'id': '3',
          'image': ImagePath.Agent.c,
          'name': Agent.c,
          'status': village.AgentStatus.alive
        },
        '4': {
          '@id': 'https://licos.online/state/0.2/village#3/agent#4',
          'id': '4',
          'image': ImagePath.Agent.d,
          'name': Agent.d,
          'status': village.AgentStatus.alive
        },
        '5': {
          '@id': 'https://licos.online/state/0.2/village#3/agent#5',
          'id': '5',
          'image': ImagePath.Agent.e,
          'name': Agent.e,
          'status': village.AgentStatus.alive
        }
      }
    }
    const roleStatus = {
      allIds: [
        village.RoleId.villager,
        village.RoleId.seer,
        village.RoleId.madman,
        village.RoleId.werewolf
      ],
      byId: {
        [village.RoleId.villager]: {
          '@id': 'https://licos.online/state/0.2/village#3/role#villager',
          'id': village.RoleId.villager,
          'image': ImagePath.Role.villager,
          'name': Role.villager,
          'numberOfCharacters': 2
        },
        [village.RoleId.seer]: {
          '@id': 'https://licos.online/state/0.2/village#3/role#seer',
          'id': village.RoleId.seer,
          'image': ImagePath.Role.seer,
          'name': Role.seer,
          'numberOfCharacters': 1
        },
        [village.RoleId.madman]: {
          '@id': 'https://licos.online/state/0.2/village#3/role#madman',
          'id': village.RoleId.madman,
          'image': ImagePath.Role.madman,
          'name': Role.madman,
          'numberOfCharacters': 1
        },
        [village.RoleId.werewolf]: {
          '@id': 'https://licos.online/state/0.2/village#3/role#werewolf',
          'id': village.RoleId.werewolf,
          'image': ImagePath.Role.werewolf,
          'name': Role.werewolf,
          'numberOfCharacters': 1
        }
      }
    }
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
        base: {
          '@id': 'https://licos.online/state/0.2/village#3',
          'clientTimestamp': '2006-10-07T12:06:56.568+09:00',
          'date': 1,
          'intensionalDisclosureRange': village.Channel.private,
          'phase': village.Phase.morning,
          'phaseStartTime': '2006-10-07T12:06:56.568+09:00',
          'phaseTimeLimit': 600,
          'serverTimestamp': '2006-10-07T12:06:56.568+09:00',
          'token': 'eFVr3O93oLhmnE8OqTMl5VSVGIV',
          'village': {
            '@context': village.Context.Village,
            '@id': 'https://licos.online/state/0.2/village',
            'chatSettings': {
              characterLimit: 140,
              limit: 10
            },
            'id': 3,
            'lang': village.Language.en,
            'name': '横国の森の奥にある時代に取り残された小さな村',
            'totalNumberOfCharacters': 15
          }
        },
        chat: {
          allIds: [
            'chat0'
          ],
          byId: {
            chat0: {
              agentId: '1',
              clientTimestamp: '2006-10-07T12:06:56.568+09:00',
              date: 1,
              id: 12,
              image: ImagePath.Agent120x120.a,
              intensionalDisclosureRange: village.Channel.public,
              isMarked: false,
              isMine: true,
              name: Agent.a,
              phaseStartTime: '2006-10-07T12:06:56.568+09:00',
              phaseTimeLimit: 600,
              serverTimestamp: '2006-10-07T12:06:56.568+09:00',
              text: '>>11\nそれで、あなたは人狼が誰だと思うの？\n\n私はパメラが人狼だと思う。',
              type: 'item'
            }
          }
        },
        language: village.Language.en,
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
        language: village.Language.en
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
    const playerId = '4'
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
        language: village.Language.en
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
        language: village.Language.en
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

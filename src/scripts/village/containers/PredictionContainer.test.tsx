import * as ActionTypes from '../constants/ActionTypes'
import * as React from 'react'
import {Character} from '../constants/Character'
import {ImagePath} from '../constants/ImagePath'
import IntlProviderContainer from './IntlProviderContainer'
import Prediction from '../components/organisms/Prediction'
import PredictionContainer from './PredictionContainer'
import {Provider} from 'react-redux'
import {Role} from '../constants/Role'
import {VERSION} from '../constants/Version'
import fakeStore from './fakeStore'
import {mount} from 'enzyme'
import {village} from '../types'

describe('<PredictionContainer />', () => {
  test('render', () => {
    const characterStatus = {
      allIds: [
        '1',
        '2',
        '3',
        '4',
        '5'
      ],
      byId: {
        '1': {
          '@id': `https://licos.online/state/${VERSION}/village#3/character#1`,
          'id': '1',
          'image': ImagePath.Character.a,
          'name': Character.a,
          'status': village.CharacterStatus.alive
        },
        '2': {
          '@id': `https://licos.online/state/${VERSION}/village#3/character#2`,
          'id': '2',
          'image': ImagePath.Character.b,
          'name': Character.b,
          'status': village.CharacterStatus.alive
        },
        '3': {
          '@id': `https://licos.online/state/${VERSION}/village#3/character#3`,
          'id': '3',
          'image': ImagePath.Character.c,
          'name': Character.c,
          'status': village.CharacterStatus.alive
        },
        '4': {
          '@id': `https://licos.online/state/${VERSION}/village#3/character#4`,
          'id': '4',
          'image': ImagePath.Character.d,
          'name': Character.d,
          'status': village.CharacterStatus.alive
        },
        '5': {
          '@id': `https://licos.online/state/${VERSION}/village#3/character#5`,
          'id': '5',
          'image': ImagePath.Character.e,
          'name': Character.e,
          'status': village.CharacterStatus.alive
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
          '@id': `https://licos.online/state/${VERSION}/village#3/role#villager`,
          'id': village.RoleId.villager,
          'image': ImagePath.Role.villager,
          'name': Role.villager,
          'numberOfPlayers': 2
        },
        [village.RoleId.seer]: {
          '@id': `https://licos.online/state/${VERSION}/village#3/role#seer`,
          'id': village.RoleId.seer,
          'image': ImagePath.Role.seer,
          'name': Role.seer,
          'numberOfPlayers': 1
        },
        [village.RoleId.madman]: {
          '@id': `https://licos.online/state/${VERSION}/village#3/role#madman`,
          'id': village.RoleId.madman,
          'image': ImagePath.Role.madman,
          'name': Role.madman,
          'numberOfPlayers': 1
        },
        [village.RoleId.werewolf]: {
          '@id': `https://licos.online/state/${VERSION}/village#3/role#werewolf`,
          'id': village.RoleId.werewolf,
          'image': ImagePath.Role.werewolf,
          'name': Role.werewolf,
          'numberOfPlayers': 1
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
          day: 1,
          fixed: true,
          state: village.BoardState.FILL
        },
        seer: {
          day: 1,
          fixed: true,
          state: village.BoardState.CIRCLE
        },
        villager: {
          day: 1,
          fixed: true,
          state: village.BoardState.FILL
        },
        werewolf: {
          day: 1,
          fixed: true,
          state: village.BoardState.FILL
        }
      },
      '2': {
        madman: {
          day: 1,
          fixed: false,
          state: village.BoardState.QUESTION
        },
        seer: {
          day: 1,
          fixed: true,
          state: village.BoardState.FILL
        },
        villager: {
          day: 1,
          fixed: false,
          state: village.BoardState.TRIANGLE
        },
        werewolf: {
          day: 1,
          fixed: false,
          state: village.BoardState.QUESTION
        }
      },
      '3': {
        madman: {
          day: 1,
          fixed: false,
          state: village.BoardState.QUESTION
        },
        seer: {
          day: 1,
          fixed: true,
          state: village.BoardState.FILL
        },
        villager: {
          day: 1,
          fixed: false,
          state: village.BoardState.QUESTION
        },
        werewolf: {
          day: 1,
          fixed: false,
          state: village.BoardState.QUESTION
        }
      },
      '4': {
        madman: {
          day: 1,
          fixed: false,
          state: village.BoardState.QUESTION
        },
        seer: {
          day: 1,
          fixed: true,
          state: village.BoardState.FILL
        },
        villager: {
          day: 1,
          fixed: false,
          state: village.BoardState.QUESTION
        },
        werewolf: {
          day: 1,
          fixed: false,
          state: village.BoardState.QUESTION
        }
      },
      '5': {
        madman: {
          day: 1,
          fixed: false,
          state: village.BoardState.QUESTION
        },
        seer: {
          day: 1,
          fixed: true,
          state: village.BoardState.FILL
        },
        villager: {
          day: 1,
          fixed: false,
          state: village.BoardState.QUESTION
        },
        werewolf: {
          day: 1,
          fixed: false,
          state: village.BoardState.QUESTION
        }
      }
    }
    const store = fakeStore(
      {
        base: {
          '@id': `https://licos.online/state/${VERSION}/village#3`,
          'clientTimestamp': '2006-10-07T12:06:56.568+09:00',
          'day': 1,
          'intensionalDisclosureRange': village.Channel.private,
          'phase': village.Phase.morning,
          'phaseStartTime': '2006-10-07T12:06:56.568+09:00',
          'phaseTimeLimit': 600,
          'serverTimestamp': '2006-10-07T12:06:56.568+09:00',
          'token': '3F2504E0-4F89-11D3-9A0C-0305E82C3300',
          'village': {
            '@id': `https://licos.online/state/${VERSION}/village`,
            'chatSettings': {
              maxLengthOfUnicodeCodePoints: 140,
              maxNumberOfChatMessages: 10
            },
            'id': 3,
            'language': village.Language.en,
            'name': '横国の森の奥にある時代に取り残された小さな村',
            'totalNumberOfPlayers': 15
          }
        },
        chat: {
          allIds: [
            'chat0'
          ],
          byId: {
            chat0: {
              characterId: '1',
              clientTimestamp: '2006-10-07T12:06:56.568+09:00',
              day: 1,
              id: 12,
              image: ImagePath.Character120x120.a,
              intensionalDisclosureRange: village.Channel.public,
              isMarked: false,
              isMine: true,
              name: Character.a,
              phaseStartTime: '2006-10-07T12:06:56.568+09:00',
              phaseTimeLimit: 600,
              serverTimestamp: '2006-10-07T12:06:56.568+09:00',
              text: '>>11\nそれで、あなたは人狼が誰だと思うの？\n\n私はパメラが人狼だと思う。',
              type: village.ChatItemType.item
            }
          }
        },
        language: village.Language.en,
        prediction: {
          characterStatus,
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
    const characterId = '4'
    const roleId = village.RoleId.villager
    const nextState = village.BoardState.CROSS

    wrapper.find(Prediction).props().handleBoardClick({
      characterId,
      roleId
    })(nextState)
    expect(dispatch).toHaveBeenCalledTimes(1)
    expect(dispatch).toHaveBeenCalledWith({
      characterId,
      nextState,
      roleId,
      type: ActionTypes.App.CHANGE_PREDICTION_BOARD
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
      type: ActionTypes.App.SHOW_PREDICTION_SPEC
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
      type: ActionTypes.App.HIDE_PREDICTION_SPEC
    })
  })
})

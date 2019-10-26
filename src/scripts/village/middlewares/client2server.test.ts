import * as ActionTypes from '../constants/ActionTypes'
import {
  ChangePredictionBoard,
  PostChat,
  Ready,
  SelectYes,
  StarChat,
  socket
} from '../actions'
import {
  firstMorning,
  flavorText,
  myMessageOnChat
} from '../reducers/fakeServer'
import {
  lobby,
  village
} from '../types'
import {Agent} from '../constants/Agent'
import Ajv from 'ajv'
import {ImagePath} from '../constants/ImagePath'
import {Role} from '../constants/Role'
import {VERSION} from '../constants/Version'
import fakeStore from '../containers/fakeStore'
import fetch from 'node-fetch'
import middleware from './client2server'

const clientTimestamp = new Date('2006-10-07T12:06:56.568+09:00').toISOString()
const BASE_URI = `https://werewolf.world/village/schema/${VERSION}`

describe('CHANGE_PREDICTION_BOARD', () => {
  const store = fakeStore({
    base: {
      '@id': `https://licos.online/state/${VERSION}/village#3`,
      'clientTimestamp': '2006-10-07T12:06:56.568+09:00',
      'day': 1,
      'intensionalDisclosureRange': village.Channel.private,
      'phase': village.Phase.morning,
      'phaseStartTime': '2006-10-07T12:06:56.568+09:00',
      'phaseTimeLimit': 600,
      'serverTimestamp': '2006-10-07T12:06:56.568+09:00',
      'token': 'eFVr3O93oLhmnE8OqTMl5VSVGIV',
      'village': {
        '@id': `https://licos.online/state/${VERSION}/village`,
        'chatSettings': {
          maxLengthOfUnicodeCodePoints: 140,
          maxNumberOfChatMessages: 10
        },
        'id': 3,
        'lang': village.Language.en,
        'name': '横国の森の奥にある時代に取り残された小さな村',
        'totalNumberOfCharacters': 15
      }
    },
    mine: {
      character: {
        '@id': `https://licos.online/state/${VERSION}/village#3/character#1`,
        'id': 1,
        'image': ImagePath.Agent.a,
        'name': Agent.a
      },
      role: {
        '@id': `https://licos.online/state/${VERSION}/village#3/role#seer`,
        'id': village.RoleId.seer,
        'image': ImagePath.Role.seer,
        'name': Role.seer
      }
    },
    prediction: {
      characterStatus: {
        allIds: [
          '1',
          '2',
          '3',
          '4',
          '5',
          '6',
          '7',
          '8',
          '9',
          '10',
          '11',
          '12',
          '13',
          '14'
        ],
        byId: {
          '1': {
            '@id': `https://licos.online/state/${VERSION}/village#3/character#1`,
            'id': '1',
            'image': ImagePath.Agent.a,
            'name': Agent.a,
            'status': village.CharacterStatus.alive
          },
          '2': {
            '@id': `https://licos.online/state/${VERSION}/village#3/character#2`,
            'id': '2',
            'image': ImagePath.Agent.b,
            'name': Agent.b,
            'status': village.CharacterStatus.alive
          },
          '3': {
            '@id': `https://licos.online/state/${VERSION}/village#3/character#3`,
            'id': '3',
            'image': ImagePath.Agent.c,
            'name': Agent.c,
            'status': village.CharacterStatus.alive
          },
          '4': {
            '@id': `https://licos.online/state/${VERSION}/village#3/character#4`,
            'id': '4',
            'image': ImagePath.Agent.d,
            'name': Agent.d,
            'status': village.CharacterStatus.alive
          },
          '5': {
            '@id': `https://licos.online/state/${VERSION}/village#3/character#5`,
            'id': '5',
            'image': ImagePath.Agent.e,
            'name': Agent.e,
            'status': village.CharacterStatus.alive
          },
          '6': {
            '@id': `https://licos.online/state/${VERSION}/village#3/character#6`,
            'id': '6',
            'image': ImagePath.Agent.f,
            'name': Agent.f,
            'status': village.CharacterStatus.alive
          },
          '7': {
            '@id': `https://licos.online/state/${VERSION}/village#3/character#7`,
            'id': '7',
            'image': ImagePath.Agent.g,
            'name': Agent.g,
            'status': village.CharacterStatus.alive
          },
          '8': {
            '@id': `https://licos.online/state/${VERSION}/village#3/character#8`,
            'id': '8',
            'image': ImagePath.Agent.h,
            'name': Agent.h,
            'status': village.CharacterStatus.alive
          },
          '9': {
            '@id': `https://licos.online/state/${VERSION}/village#3/character#9`,
            'id': '9',
            'image': ImagePath.Agent.i,
            'name': Agent.i,
            'status': village.CharacterStatus.alive
          },
          '10': {
            '@id': `https://licos.online/state/${VERSION}/village#3/character#10`,
            'id': '10',
            'image': ImagePath.Agent.j,
            'name': Agent.j,
            'status': village.CharacterStatus.alive
          },
          '11': {
            '@id': `https://licos.online/state/${VERSION}/village#3/character#11`,
            'id': '11',
            'image': ImagePath.Agent.k,
            'name': Agent.k,
            'status': village.CharacterStatus.alive
          },
          '12': {
            '@id': `https://licos.online/state/${VERSION}/village#3/character#12`,
            'id': '12',
            'image': ImagePath.Agent.l,
            'name': Agent.l,
            'status': village.CharacterStatus.alive
          },
          '13': {
            '@id': `https://licos.online/state/${VERSION}/village#3/character#13`,
            'id': '13',
            'image': ImagePath.Agent.m,
            'name': Agent.m,
            'status': village.CharacterStatus.alive
          },
          '14': {
            '@id': `https://licos.online/state/${VERSION}/village#3/character#14`,
            'id': '14',
            'image': ImagePath.Agent.n,
            'name': Agent.n,
            'status': village.CharacterStatus.alive
          },
          '15': {
            '@id': `https://licos.online/state/${VERSION}/village#3/character#15`,
            'id': '15',
            'image': ImagePath.Agent.o,
            'name': Agent.o,
            'status': village.CharacterStatus.alive
          }
        }
      },
      roleStatus: {
        allIds: [
          village.RoleId.villager,
          village.RoleId.seer,
          village.RoleId.medium,
          village.RoleId.hunter,
          village.RoleId.mason,
          village.RoleId.madman,
          village.RoleId.werewolf,
          village.RoleId.werehamster
        ],
        byId: {
          [village.RoleId.villager]: {
            '@id': `https://licos.online/state/${VERSION}/village#3/role#villager`,
            'id': village.RoleId.villager,
            'image': ImagePath.Role.villager,
            'name': Role.villager,
            'numberOfCharacters': 6
          },
          [village.RoleId.seer]: {
            '@id': `https://licos.online/state/${VERSION}/village#3/role#seer`,
            'id': village.RoleId.seer,
            'image': ImagePath.Role.seer,
            'name': Role.seer,
            'numberOfCharacters': 1
          },
          [village.RoleId.medium]: {
            '@id': `https://licos.online/state/${VERSION}/village#3/role#medium`,
            'id': village.RoleId.medium,
            'image': ImagePath.Role.medium,
            'name': Role.medium,
            'numberOfCharacters': 1
          },
          [village.RoleId.hunter]: {
            '@id': `https://licos.online/state/${VERSION}/village#3/role#hunter`,
            'id': village.RoleId.hunter,
            'image': ImagePath.Role.hunter,
            'name': Role.hunter,
            'numberOfCharacters': 1
          },
          [village.RoleId.mason]: {
            '@id': `https://licos.online/state/${VERSION}/village#3/role#mason`,
            'id': village.RoleId.mason,
            'image': ImagePath.Role.mason,
            'name': Role.mason,
            'numberOfCharacters': 2
          },
          [village.RoleId.madman]: {
            '@id': `https://licos.online/state/${VERSION}/village#3/role#madman`,
            'id': village.RoleId.madman,
            'image': ImagePath.Role.madman,
            'name': Role.madman,
            'numberOfCharacters': 1
          },
          [village.RoleId.werewolf]: {
            '@id': `https://licos.online/state/${VERSION}/village#3/role#werewolf`,
            'id': village.RoleId.werewolf,
            'image': ImagePath.Role.werewolf,
            'name': Role.werewolf,
            'numberOfCharacters': 2
          },
          [village.RoleId.werehamster]: {
            '@id': `https://licos.online/state/${VERSION}/village#3/role#werehamster`,
            'id': village.RoleId.werehamster,
            'image': ImagePath.Role.werehamster,
            'name': Role.werehamster,
            'numberOfCharacters': 1
          }
        }
      },
      spec: {
        role: village.RoleId.villager,
        visible: false
      },
      table: {}
    }
  })
  const dispatch = jest.fn()

  store.dispatch = dispatch
  const nextHandler = middleware(store)
  const dispatchAPI = jest.fn()
  const actionHandler = nextHandler(dispatchAPI)
  const action: ChangePredictionBoard = {
    characterId: '2',
    nextState: village.BoardState.CIRCLE,
    roleId: village.RoleId.villager,
    type: ActionTypes.CHANGE_PREDICTION_BOARD
  }
  const payload: village.Payload$BoardMessage = {
    '@context': [
      village.BaseContext.Base,
      village.BaseContext.Board
    ],
    '@id': `https://licos.online/state/${VERSION}/village#3/boardMessage`,
    'character': {
      '@context': village.Context.Character,
      '@id': `https://licos.online/state/${VERSION}/village#3/character#2`,
      'id': 2,
      'image': ImagePath.Agent.b,
      'name': Agent.b
    },
    clientTimestamp,
    'day': 1,
    'directionality': village.Directionality.clientToServer,
    'extensionalDisclosureRange': [],
    'intensionalDisclosureRange': village.Channel.private,
    'myCharacter': {
      '@context': village.Context.Character,
      '@id': `https://licos.online/state/${VERSION}/village#3/character#1`,
      'id': 1,
      'image': ImagePath.Agent.a,
      'name': Agent.a,
      'role': {
        '@context': village.Context.Role,
        '@id': `https://licos.online/state/${VERSION}/village#3/role#seer`,
        'image': ImagePath.Role.seer,
        'name': Role.seer
      }
    },
    'phase': village.Phase.morning,
    'phaseStartTime': '2006-10-07T12:06:56.568+09:00',
    'phaseTimeLimit': 600,
    'prediction': village.BoardState.CIRCLE,
    'role': {
      '@context': village.Context.Role,
      '@id': `https://licos.online/state/${VERSION}/village#3/role#villager`,
      'image': ImagePath.Role.villager,
      'name': Role.villager
    },
    'serverTimestamp': '2006-10-07T12:06:56.568+09:00',
    'token': 'eFVr3O93oLhmnE8OqTMl5VSVGIV',
    'village': {
      '@context': village.Context.Village,
      '@id': `https://licos.online/state/${VERSION}/village`,
      'chatSettings': {
        '@context': village.Context.ChatSettings,
        '@id': `https://licos.online/state/${VERSION}/village#3/chatSettings`,
        'maxLengthOfUnicodeCodePoints': 140,
        'maxNumberOfChatMessages': 10
      },
      'id': 3,
      'lang': village.Language.en,
      'name': '横国の森の奥にある時代に取り残された小さな村',
      'totalNumberOfCharacters': 15
    }
  }

  test('validate the JSON', async () => {
    expect.hasAssertions()
    const [mainSchema, baseSchema, ... schemas] = await Promise.all([
      fetch(`${BASE_URI}/boardMessage.json`)
        .then(res => res.json()),
      fetch(`${BASE_URI}/base.json`)
        .then(res => res.json()),
      fetch(`${BASE_URI}/avatar.json`)
        .then(res => res.json()),
      fetch(`${BASE_URI}/board.json`)
        .then(res => res.json()),
      fetch(`${BASE_URI}/character.json`)
        .then(res => res.json()),
      fetch(`${BASE_URI}/chat.json`)
        .then(res => res.json()),
      fetch(`${BASE_URI}/chatSettings.json`)
        .then(res => res.json()),
      fetch(`${BASE_URI}/role.json`)
        .then(res => res.json()),
      fetch(`${BASE_URI}/time.json`)
        .then(res => res.json()),
      fetch(`${BASE_URI}/village.json`)
        .then(res => res.json())
    ])
    const mergedSchema = {
      ... mainSchema,
      properties: {
        ... mainSchema.properties,
        ... baseSchema.definitions
      }
    }
    const ajv = new Ajv({
      schemas: [
        mergedSchema,
        baseSchema,
        ... schemas
      ]
    })
    const validate = ajv.validate(`${BASE_URI}/boardMessage.json`, payload)

    if (!validate) {
      console.error(ajv.errors)
    }
    expect(validate).toBe(true)
  })
  test('dispatch correctly', () => {
    const spy = jest.spyOn(Date.prototype, 'toISOString').mockReturnValue(clientTimestamp)

    actionHandler(action)
    expect(spy).toHaveBeenCalled()
    expect(dispatch).toHaveBeenCalledTimes(1)
    expect(dispatch).toHaveBeenCalledWith({
      payload,
      type: ActionTypes.Socket.SEND
    })
  })
})
describe('POST_CHAT', () => {
  const store = fakeStore({
    base: {
      '@id': `https://licos.online/state/${VERSION}/village#3`,
      'clientTimestamp': '2006-10-07T12:06:56.568+09:00',
      'day': 1,
      'intensionalDisclosureRange': village.Channel.private,
      'phase': village.Phase.morning,
      'phaseStartTime': '2006-10-07T12:06:56.568+09:00',
      'phaseTimeLimit': 600,
      'serverTimestamp': '2006-10-07T12:06:56.568+09:00',
      'token': 'eFVr3O93oLhmnE8OqTMl5VSVGIV',
      'village': {
        '@id': `https://licos.online/state/${VERSION}/village`,
        'chatSettings': {
          maxLengthOfUnicodeCodePoints: 140,
          maxNumberOfChatMessages: 10
        },
        'id': 3,
        'lang': village.Language.en,
        'name': '横国の森の奥にある時代に取り残された小さな村',
        'totalNumberOfCharacters': 15
      }
    },
    mine: {
      character: {
        '@id': `https://licos.online/state/${VERSION}/village#3/character#1`,
        'id': 1,
        'image': ImagePath.Agent.a,
        'name': Agent.a
      },
      role: {
        '@id': `https://licos.online/state/${VERSION}/village#3/role#seer`,
        'id': village.RoleId.seer,
        'image': ImagePath.Role.seer,
        'name': Role.seer
      }
    }
  })
  const dispatch = jest.fn()

  store.dispatch = dispatch
  const nextHandler = middleware(store)
  const dispatchAPI = jest.fn()
  const actionHandler = nextHandler(dispatchAPI)
  const action: PostChat = {
    channel: village.InputChannel.public,
    text: 'text',
    type: ActionTypes.POST_CHAT
  }
  const payload: village.Payload$ChatMessage = {
    '@context': [
      village.BaseContext.Base,
      village.BaseContext.Chat
    ],
    '@id': `https://licos.online/state/${VERSION}/village#3/chatMessage`,
    'character': {
      '@context': village.Context.Character,
      '@id': `https://licos.online/state/${VERSION}/village#3/character#1`,
      'id': 1,
      'image': ImagePath.Agent.a,
      'name': Agent.a
    },
    clientTimestamp,
    'day': 1,
    'directionality': village.Directionality.clientToServer,
    'extensionalDisclosureRange': [],
    'intensionalDisclosureRange': village.Channel.public,
    'isFromServer': true,
    'isMine': true,
    'isOver': false,
    'maxLengthOfUnicodeCodePoints': 140,
    'myCharacter': {
      '@context': village.Context.Character,
      '@id': `https://licos.online/state/${VERSION}/village#3/character#1`,
      'id': 1,
      'image': ImagePath.Agent.a,
      'name': Agent.a,
      'role': {
        '@context': village.Context.Role,
        '@id': `https://licos.online/state/${VERSION}/village#3/role#seer`,
        'image': ImagePath.Role.seer,
        'name': Role.seer
      }
    },
    'phase': village.Phase.morning,
    'phaseStartTime': '2006-10-07T12:06:56.568+09:00',
    'phaseTimeLimit': 600,
    'serverTimestamp': '2006-10-07T12:06:56.568+09:00',
    'text': {
      '@language': village.Language.en,
      '@value': 'text'
    },
    'token': 'eFVr3O93oLhmnE8OqTMl5VSVGIV',
    'village': {
      '@context': village.Context.Village,
      '@id': `https://licos.online/state/${VERSION}/village`,
      'chatSettings': {
        '@context': village.Context.ChatSettings,
        '@id': `https://licos.online/state/${VERSION}/village#3/chatSettings`,
        'maxLengthOfUnicodeCodePoints': 140,
        'maxNumberOfChatMessages': 10
      },
      'id': 3,
      'lang': village.Language.en,
      'name': '横国の森の奥にある時代に取り残された小さな村',
      'totalNumberOfCharacters': 15
    }
  }

  test('validate the JSON', async () => {
    expect.hasAssertions()
    const [mainSchema, baseSchema, ... schemas] = await Promise.all([
      fetch(`${BASE_URI}/chatMessage.json`)
        .then(res => res.json()),
      fetch(`${BASE_URI}/base.json`)
        .then(res => res.json()),
      fetch(`${BASE_URI}/character.json`)
        .then(res => res.json()),
      fetch(`${BASE_URI}/avatar.json`)
        .then(res => res.json()),
      fetch(`${BASE_URI}/chat.json`)
        .then(res => res.json()),
      fetch(`${BASE_URI}/chatSettings.json`)
        .then(res => res.json()),
      fetch(`${BASE_URI}/role.json`)
        .then(res => res.json()),
      fetch(`${BASE_URI}/time.json`)
        .then(res => res.json()),
      fetch(`${BASE_URI}/village.json`)
        .then(res => res.json())
    ])
    const mergedSchema = {
      ... mainSchema,
      properties: {
        ... mainSchema.properties,
        ... baseSchema.definitions
      }
    }
    const ajv = new Ajv({
      schemas: [
        mergedSchema,
        baseSchema,
        ... schemas
      ]
    })
    const validate = ajv.validate(`${BASE_URI}/chatMessage.json`, payload)

    if (!validate) {
      console.error(ajv.errors)
    }
    expect(validate).toBe(true)
  })
  test('dispatch correctly', () => {
    const spy = jest.spyOn(Date.prototype, 'toISOString').mockReturnValue(clientTimestamp)

    actionHandler(action)
    expect(spy).toHaveBeenCalled()
    expect(dispatch).toHaveBeenCalledTimes(1)
    expect(dispatch).toHaveBeenCalledWith({
      payload,
      type: ActionTypes.Socket.SEND
    })
  })
})
describe('READY', () => {
  const store = fakeStore()
  const dispatch = jest.fn()

  store.dispatch = dispatch
  const nextHandler = middleware(store)
  const dispatchAPI = jest.fn()
  const actionHandler = nextHandler(dispatchAPI)
  const token = '3F2504E0-4F89-11D3-9A0C-0305E82C3301'
  const villageId = 3
  const action: Ready = {
    token,
    type: ActionTypes.READY,
    villageId
  }
  const payload: village.Payload$Ready = {
    token,
    type: lobby.PayloadType.ready,
    villageId
  }

  test('validate the JSON of play', async () => {
    const ajv = new Ajv()

    expect.hasAssertions()
    await fetch(`https://werewolf.world/lobby/schema/${VERSION}/client2server/ready.json`)
      .then(res => res.json())
      .then(schema => {
        const validate = ajv.validate(schema, payload)

        expect(validate).toBe(true)
      })
  })
  test('dispatch correctly', () => {
    actionHandler(action)
    expect(dispatch).toHaveBeenCalledTimes(1)
    expect(dispatch).toHaveBeenCalledWith({
      payload,
      type: ActionTypes.Socket.SEND
    })
  })
})
describe('SELECT_YES', () => {
  const store = fakeStore({
    base: {
      '@id': `https://licos.online/state/${VERSION}/village#3`,
      'clientTimestamp': '2006-10-07T12:06:56.568+09:00',
      'day': 1,
      'intensionalDisclosureRange': village.Channel.private,
      'phase': village.Phase.noon,
      'phaseStartTime': '2006-10-07T12:06:56.568+09:00',
      'phaseTimeLimit': 600,
      'serverTimestamp': '2006-10-07T12:06:56.568+09:00',
      'token': 'eFVr3O93oLhmnE8OqTMl5VSVGIV',
      'village': {
        '@id': `https://licos.online/state/${VERSION}/village`,
        'chatSettings': {
          maxLengthOfUnicodeCodePoints: 140,
          maxNumberOfChatMessages: 10
        },
        'id': 3,
        'lang': village.Language.en,
        'name': '横国の森の奥にある時代に取り残された小さな村',
        'totalNumberOfCharacters': 15
      }
    },
    commandSelection: {
      allIds: [
        '2',
        '3',
        '4',
        '5',
        '6',
        '7',
        '8',
        '9',
        '10',
        '11',
        '12',
        '13',
        '14',
        '15'
      ],
      byId: {
        '2': {
          '@id': `https://licos.online/state/${VERSION}/village#3/character#2`,
          'id': '2',
          'image': ImagePath.Agent.b,
          'name': Agent.b
        },
        '3': {
          '@id': `https://licos.online/state/${VERSION}/village#3/character#3`,
          'id': '3',
          'image': ImagePath.Agent.c,
          'name': Agent.c
        },
        '4': {
          '@id': `https://licos.online/state/${VERSION}/village#3/character#4`,
          'id': '4',
          'image': ImagePath.Agent.d,
          'name': Agent.d
        },
        '5': {
          '@id': `https://licos.online/state/${VERSION}/village#3/character#5`,
          'id': '5',
          'image': ImagePath.Agent.e,
          'name': Agent.e
        },
        '6': {
          '@id': `https://licos.online/state/${VERSION}/village#3/character#6`,
          'id': '6',
          'image': ImagePath.Agent.f,
          'name': Agent.f
        },
        '7': {
          '@id': `https://licos.online/state/${VERSION}/village#3/character#7`,
          'id': '7',
          'image': ImagePath.Agent.g,
          'name': Agent.g
        },
        '8': {
          '@id': `https://licos.online/state/${VERSION}/village#3/character#8`,
          'id': '8',
          'image': ImagePath.Agent.h,
          'name': Agent.h
        },
        '9': {
          '@id': `https://licos.online/state/${VERSION}/village#3/character#9`,
          'id': '9',
          'image': ImagePath.Agent.i,
          'name': Agent.i
        },
        '10': {
          '@id': `https://licos.online/state/${VERSION}/village#3/character#10`,
          'id': '10',
          'image': ImagePath.Agent.j,
          'name': Agent.j
        },
        '11': {
          '@id': `https://licos.online/state/${VERSION}/village#3/character#11`,
          'id': '11',
          'image': ImagePath.Agent.k,
          'name': Agent.k
        },
        '12': {
          '@id': `https://licos.online/state/${VERSION}/village#3/character#12`,
          'id': '12',
          'image': ImagePath.Agent.l,
          'name': Agent.l
        },
        '13': {
          '@id': `https://licos.online/state/${VERSION}/village#3/character#13`,
          'id': '13',
          'image': ImagePath.Agent.m,
          'name': Agent.m
        },
        '14': {
          '@id': `https://licos.online/state/${VERSION}/village#3/character#14`,
          'id': '14',
          'image': ImagePath.Agent.n,
          'name': Agent.n
        },
        '15': {
          '@id': `https://licos.online/state/${VERSION}/village#3/character#15`,
          'id': '15',
          'image': ImagePath.Agent.o,
          'name': Agent.o
        }
      },
      fixed: true
    },
    mine: {
      character: {
        '@id': `https://licos.online/state/${VERSION}/village#3/character#1`,
        'id': 1,
        'image': ImagePath.Agent.a,
        'name': Agent.a
      },
      role: {
        '@id': `https://licos.online/state/${VERSION}/village#3/role#seer`,
        'id': village.RoleId.seer,
        'image': ImagePath.Role.seer,
        'name': Role.seer
      }
    }
  })
  const dispatch = jest.fn()

  store.dispatch = dispatch
  const nextHandler = middleware(store)
  const dispatchAPI = jest.fn()
  const actionHandler = nextHandler(dispatchAPI)
  const action: SelectYes = {
    characterId: '2',
    type: ActionTypes.SELECT_YES
  }
  const payload: village.Payload$VoteMessage = {
    '@context': [
      village.BaseContext.Base,
      village.BaseContext.Vote
    ],
    '@id': `https://licos.online/state/${VERSION}/village#3/voteMessage`,
    'character': {
      '@context': village.Context.Character,
      '@id': `https://licos.online/state/${VERSION}/village#3/character#2`,
      'id': 2,
      'image': ImagePath.Agent.b,
      'name': Agent.b
    },
    clientTimestamp,
    'day': 1,
    'directionality': village.Directionality.clientToServer,
    'extensionalDisclosureRange': [],
    'intensionalDisclosureRange': village.Channel.private,
    'myCharacter': {
      '@context': village.Context.Character,
      '@id': `https://licos.online/state/${VERSION}/village#3/character#1`,
      'id': 1,
      'image': ImagePath.Agent.a,
      'name': Agent.a,
      'role': {
        '@context': village.Context.Role,
        '@id': `https://licos.online/state/${VERSION}/village#3/role#seer`,
        'image': ImagePath.Role.seer,
        'name': Role.seer
      }
    },
    'phase': village.Phase.noon,
    'phaseStartTime': '2006-10-07T12:06:56.568+09:00',
    'phaseTimeLimit': 600,
    'serverTimestamp': '2006-10-07T12:06:56.568+09:00',
    'token': 'eFVr3O93oLhmnE8OqTMl5VSVGIV',
    'village': {
      '@context': village.Context.Village,
      '@id': `https://licos.online/state/${VERSION}/village`,
      'chatSettings': {
        '@context': village.Context.ChatSettings,
        '@id': `https://licos.online/state/${VERSION}/village#3/chatSettings`,
        'maxLengthOfUnicodeCodePoints': 140,
        'maxNumberOfChatMessages': 10
      },
      'id': 3,
      'lang': village.Language.en,
      'name': '横国の森の奥にある時代に取り残された小さな村',
      'totalNumberOfCharacters': 15
    }
  }

  test('validate the JSON', async () => {
    expect.hasAssertions()
    const [mainSchema, baseSchema, ... schemas] = await Promise.all([
      fetch(`${BASE_URI}/voteMessage.json`)
        .then(res => res.json()),
      fetch(`${BASE_URI}/base.json`)
        .then(res => res.json()),
      fetch(`${BASE_URI}/avatar.json`)
        .then(res => res.json()),
      fetch(`${BASE_URI}/character.json`)
        .then(res => res.json()),
      fetch(`${BASE_URI}/chat.json`)
        .then(res => res.json()),
      fetch(`${BASE_URI}/chatSettings.json`)
        .then(res => res.json()),
      fetch(`${BASE_URI}/role.json`)
        .then(res => res.json()),
      fetch(`${BASE_URI}/time.json`)
        .then(res => res.json()),
      fetch(`${BASE_URI}/village.json`)
        .then(res => res.json())
    ])
    const mergedSchema = {
      ... mainSchema,
      properties: {
        ... mainSchema.properties,
        ... baseSchema.definitions
      }
    }
    const ajv = new Ajv({
      schemas: [
        mergedSchema,
        baseSchema,
        ... schemas
      ]
    })
    const validate = ajv.validate(`${BASE_URI}/voteMessage.json`, payload)

    if (!validate) {
      console.error(ajv.errors)
    }
    expect(validate).toBe(true)
  })
  test('dispatch correctly', () => {
    const spy = jest.spyOn(Date.prototype, 'toISOString').mockReturnValue(clientTimestamp)

    actionHandler(action)
    expect(spy).toHaveBeenCalled()
    expect(dispatch).toHaveBeenCalledTimes(1)
    expect(dispatch).toHaveBeenCalledWith({
      payload,
      type: ActionTypes.Socket.SEND
    })
  })
})
describe('STAR', () => {
  const store = fakeStore({
    base: {
      '@id': `https://licos.online/state/${VERSION}/village#3`,
      'clientTimestamp': '2006-10-07T12:06:56.568+09:00',
      'day': 1,
      'intensionalDisclosureRange': village.Channel.private,
      'phase': village.Phase.noon,
      'phaseStartTime': '2006-10-07T12:06:56.568+09:00',
      'phaseTimeLimit': 600,
      'serverTimestamp': '2006-10-07T12:06:56.568+09:00',
      'token': 'eFVr3O93oLhmnE8OqTMl5VSVGIV',
      'village': {
        '@id': `https://licos.online/state/${VERSION}/village`,
        'chatSettings': {
          maxLengthOfUnicodeCodePoints: 140,
          maxNumberOfChatMessages: 10
        },
        'id': 3,
        'lang': village.Language.en,
        'name': '横国の森の奥にある時代に取り残された小さな村',
        'totalNumberOfCharacters': 15
      }
    },
    chat: {
      allIds: ['chat0'],
      byId: {
        chat0: {
          characterId: '1',
          clientTimestamp: '2006-10-07T12:06:56.568+09:00',
          day: 1,
          id: 12,
          image: ImagePath.Agent.a,
          intensionalDisclosureRange: village.Channel.public,
          isMarked: false,
          isMine: true,
          name: Agent.a,
          phaseStartTime: '2006-10-07T12:06:56.568+09:00',
          phaseTimeLimit: 600,
          serverTimestamp: '2006-10-07T12:06:56.568+09:00',
          text: '>>11\nそれで、あなたは人狼が誰だと思うの？\n\n私はパメラが人狼だと思う。',
          type: village.ChatItemType.item
        }
      }
    },
    mine: {
      character: {
        '@id': `https://licos.online/state/${VERSION}/village#3/character#1`,
        'id': 1,
        'image': ImagePath.Agent.a,
        'name': Agent.a
      },
      role: {
        '@id': `https://licos.online/state/${VERSION}/village#3/role#seer`,
        'id': village.RoleId.seer,
        'image': ImagePath.Role.seer,
        'name': Role.seer
      }
    }
  })
  const dispatch = jest.fn()

  store.dispatch = dispatch
  const nextHandler = middleware(store)
  const dispatchAPI = jest.fn()
  const actionHandler = nextHandler(dispatchAPI)
  const action: StarChat = {
    id: 'chat0',
    isMarked: true,
    type: ActionTypes.STAR
  }
  const payload: village.Payload$StarMessage = {
    '@context': [
      village.BaseContext.Base,
      village.BaseContext.Star
    ],
    '@id': `https://licos.online/state/${VERSION}/village#3/starMessage`,
    clientTimestamp,
    'day': 1,
    'directionality': village.Directionality.clientToServer,
    'extensionalDisclosureRange': [],
    'intensionalDisclosureRange': village.Channel.private,
    'myCharacter': {
      '@context': village.Context.Character,
      '@id': `https://licos.online/state/${VERSION}/village#3/character#1`,
      'id': 1,
      'image': ImagePath.Agent.a,
      'name': Agent.a,
      'role': {
        '@context': village.Context.Role,
        '@id': `https://licos.online/state/${VERSION}/village#3/role#seer`,
        'image': ImagePath.Role.seer,
        'name': Role.seer
      }
    },
    'phase': village.Phase.noon,
    'phaseStartTime': '2006-10-07T12:06:56.568+09:00',
    'phaseTimeLimit': 600,
    'serverTimestamp': '2006-10-07T12:06:56.568+09:00',
    'star': {
      '@context': village.Context.Star,
      '@id': `https://licos.online/state/${VERSION}/village#3/star`,
      'clientTimestamp': '2006-10-07T12:06:56.568+09:00',
      'isMarked': true,
      'serverTimestamp': '2006-10-07T12:06:56.568+09:00',
      'token': 'eFVr3O93oLhmnE8OqTMl5VSVGIV'
    },
    'token': 'eFVr3O93oLhmnE8OqTMl5VSVGIV',
    'village': {
      '@context': village.Context.Village,
      '@id': `https://licos.online/state/${VERSION}/village`,
      'chatSettings': {
        '@context': village.Context.ChatSettings,
        '@id': `https://licos.online/state/${VERSION}/village#3/chatSettings`,
        'maxLengthOfUnicodeCodePoints': 140,
        'maxNumberOfChatMessages': 10
      },
      'id': 3,
      'lang': village.Language.en,
      'name': '横国の森の奥にある時代に取り残された小さな村',
      'totalNumberOfCharacters': 15
    }
  }

  test('validate the JSON', async () => {
    expect.hasAssertions()
    const [mainSchema, baseSchema, ... schemas] = await Promise.all([
      fetch(`${BASE_URI}/starMessage.json`)
        .then(res => res.json()),
      fetch(`${BASE_URI}/base.json`)
        .then(res => res.json()),
      fetch(`${BASE_URI}/avatar.json`)
        .then(res => res.json()),
      fetch(`${BASE_URI}/character.json`)
        .then(res => res.json()),
      fetch(`${BASE_URI}/chat.json`)
        .then(res => res.json()),
      fetch(`${BASE_URI}/chatSettings.json`)
        .then(res => res.json()),
      fetch(`${BASE_URI}/role.json`)
        .then(res => res.json()),
      fetch(`${BASE_URI}/star.json`)
        .then(res => res.json()),
      fetch(`${BASE_URI}/time.json`)
        .then(res => res.json()),
      fetch(`${BASE_URI}/village.json`)
        .then(res => res.json())
    ])
    const mergedSchema = {
      ... mainSchema,
      properties: {
        ... mainSchema.properties,
        ... baseSchema.definitions
      }
    }
    const ajv = new Ajv({
      schemas: [
        mergedSchema,
        baseSchema,
        ... schemas
      ]
    })
    const validate = ajv.validate(`${BASE_URI}/starMessage.json`, payload)

    if (!validate) {
      console.error(ajv.errors)
    }
    expect(validate).toBe(true)
  })
  test('dispatch correctly', () => {
    actionHandler(action)
    expect(dispatch).toHaveBeenCalledTimes(1)
    expect(dispatch).toHaveBeenCalledWith({
      payload,
      type: ActionTypes.Socket.SEND
    })
  })
})
describe('socket/MESSAGE', () => {
  describe('receivedFlavorTextMessage', () => {
    const store = fakeStore()
    const dispatch = jest.fn()

    store.dispatch = dispatch
    const nextHandler = middleware(store)
    const dispatchAPI = jest.fn()
    const actionHandler = nextHandler(dispatchAPI)
    const token = 'eFVr3O93oLhmnE8OqTMl5VSVGIV'
    const villageId = 3
    const action = socket.message(flavorText)
    const payload: village.Payload$ReceivedFlavorTextMessage = {
      day: 0,
      phase: village.Phase.flavorText,
      token,
      type: village.PayloadType.receivedFlavorTextMessage,
      villageId
    }

    test('validate the JSON of play', async () => {
      expect.hasAssertions()
      const schemas = await Promise.all([
        fetch(`${BASE_URI}/receipt/receivedFlavorTextMessage.json`)
          .then(res => res.json()),
        fetch(`${BASE_URI}/avatar.json`)
          .then(res => res.json()),
        fetch(`${BASE_URI}/time.json`)
          .then(res => res.json()),
        fetch(`${BASE_URI}/village.json`)
          .then(res => res.json())
      ])
      const ajv = new Ajv({
        schemas
      })
      const validate = ajv.validate(`${BASE_URI}/receipt/receivedFlavorTextMessage.json`, payload)

      if (!validate) {
        console.error(ajv.errors)
      }
      expect(validate).toBe(true)
    })
    test('dispatch correctly', () => {
      actionHandler(action)
      expect(dispatch).toHaveBeenCalledTimes(1)
      expect(dispatch).toHaveBeenCalledWith({
        payload,
        type: ActionTypes.Socket.SEND
      })
    })
  })
  describe('receivedChatMessage', () => {
    const store = fakeStore()
    const dispatch = jest.fn()

    store.dispatch = dispatch
    const nextHandler = middleware(store)
    const dispatchAPI = jest.fn()
    const actionHandler = nextHandler(dispatchAPI)
    const token = 'eFVr3O93oLhmnE8OqTMl5VSVGIV'
    const villageId = 3
    const action = socket.message(myMessageOnChat)
    const payload: village.Payload$ReceivedChatMessage = {
      clientTimestamp: '2006-10-07T12:06:56.568+09:00',
      serverTimestamp: '2006-10-07T12:06:56.568+09:00',
      token,
      type: village.PayloadType.receivedChatMessage,
      villageId
    }

    test('validate the JSON of play', async () => {
      expect.hasAssertions()
      const schemas = await Promise.all([
        fetch(`${BASE_URI}/receipt/receivedChatMessage.json`)
          .then(res => res.json()),
        fetch(`${BASE_URI}/avatar.json`)
          .then(res => res.json()),
        fetch(`${BASE_URI}/base.json`)
          .then(res => res.json()),
        fetch(`${BASE_URI}/village.json`)
          .then(res => res.json())
      ])
      const ajv = new Ajv({
        schemas
      })
      const validate = ajv.validate(`${BASE_URI}/receipt/receivedChatMessage.json`, payload)

      if (!validate) {
        console.error(ajv.errors)
      }
      expect(validate).toBe(true)
    })
    test('dispatch correctly', () => {
      actionHandler(action)
      expect(dispatch).toHaveBeenCalledTimes(1)
      expect(dispatch).toHaveBeenCalledWith({
        payload,
        type: ActionTypes.Socket.SEND
      })
    })
  })
  describe('receivedSystemMessage', () => {
    const store = fakeStore()
    const dispatch = jest.fn()

    store.dispatch = dispatch
    const nextHandler = middleware(store)
    const dispatchAPI = jest.fn()
    const actionHandler = nextHandler(dispatchAPI)
    const token = 'eFVr3O93oLhmnE8OqTMl5VSVGIV'
    const villageId = 3
    const action = socket.message(firstMorning)
    const payload: village.Payload$ReceivedSystemMessage = {
      day: 1,
      phase: village.Phase.morning,
      token,
      type: village.PayloadType.receivedSystemMessage,
      villageId
    }

    test('validate the JSON of play', async () => {
      expect.hasAssertions()
      const schemas = await Promise.all([
        fetch(`${BASE_URI}/receipt/receivedSystemMessage.json`)
          .then(res => res.json()),
        fetch(`${BASE_URI}/avatar.json`)
          .then(res => res.json()),
        fetch(`${BASE_URI}/time.json`)
          .then(res => res.json()),
        fetch(`${BASE_URI}/village.json`)
          .then(res => res.json())
      ])
      const ajv = new Ajv({
        schemas
      })
      const validate = ajv.validate(`${BASE_URI}/receipt/receivedSystemMessage.json`, payload)

      if (!validate) {
        console.error(ajv.errors)
      }
      expect(validate).toBe(true)
    })
    test('dispatch correctly', () => {
      actionHandler(action)
      expect(dispatch).toHaveBeenCalledTimes(1)
      expect(dispatch).toHaveBeenCalledWith({
        payload,
        type: ActionTypes.Socket.SEND
      })
    })
  })
})

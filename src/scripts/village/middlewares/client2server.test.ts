import * as ActionTypes from '../constants/ActionTypes'
import {
  ChangePredictionBoard,
  PostChat,
  Ready,
  SelectYes,
  StarChat,
  message
} from '../actions'
import {
  LOBBY_SCHEMA,
  VILLAGE_SCHEMA
} from '../constants/SchemaPath'
import {
  firstMorning,
  flavorText,
  myMessageOnChat
} from '../reducers/fakeServer'
import {
  lobby,
  village
} from '../types'
import Ajv from 'ajv'
import {Character} from '../constants/Character'
import {ImagePath} from '../constants/ImagePath'
import {Role} from '../constants/Role'
import {VERSION} from '../constants/Version'
import fakeStore from '../containers/fakeStore'
import fetch from 'node-fetch'
import middleware from './client2server'

const clientTimestamp = new Date('2006-10-07T12:06:56.568+09:00').toISOString()

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
    mine: {
      character: {
        '@id': `https://licos.online/state/${VERSION}/village#3/character#1`,
        'id': 1,
        'image': ImagePath.Character.a,
        'name': Character.a
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
          },
          '6': {
            '@id': `https://licos.online/state/${VERSION}/village#3/character#6`,
            'id': '6',
            'image': ImagePath.Character.f,
            'name': Character.f,
            'status': village.CharacterStatus.alive
          },
          '7': {
            '@id': `https://licos.online/state/${VERSION}/village#3/character#7`,
            'id': '7',
            'image': ImagePath.Character.g,
            'name': Character.g,
            'status': village.CharacterStatus.alive
          },
          '8': {
            '@id': `https://licos.online/state/${VERSION}/village#3/character#8`,
            'id': '8',
            'image': ImagePath.Character.h,
            'name': Character.h,
            'status': village.CharacterStatus.alive
          },
          '9': {
            '@id': `https://licos.online/state/${VERSION}/village#3/character#9`,
            'id': '9',
            'image': ImagePath.Character.i,
            'name': Character.i,
            'status': village.CharacterStatus.alive
          },
          '10': {
            '@id': `https://licos.online/state/${VERSION}/village#3/character#10`,
            'id': '10',
            'image': ImagePath.Character.j,
            'name': Character.j,
            'status': village.CharacterStatus.alive
          },
          '11': {
            '@id': `https://licos.online/state/${VERSION}/village#3/character#11`,
            'id': '11',
            'image': ImagePath.Character.k,
            'name': Character.k,
            'status': village.CharacterStatus.alive
          },
          '12': {
            '@id': `https://licos.online/state/${VERSION}/village#3/character#12`,
            'id': '12',
            'image': ImagePath.Character.l,
            'name': Character.l,
            'status': village.CharacterStatus.alive
          },
          '13': {
            '@id': `https://licos.online/state/${VERSION}/village#3/character#13`,
            'id': '13',
            'image': ImagePath.Character.m,
            'name': Character.m,
            'status': village.CharacterStatus.alive
          },
          '14': {
            '@id': `https://licos.online/state/${VERSION}/village#3/character#14`,
            'id': '14',
            'image': ImagePath.Character.n,
            'name': Character.n,
            'status': village.CharacterStatus.alive
          },
          '15': {
            '@id': `https://licos.online/state/${VERSION}/village#3/character#15`,
            'id': '15',
            'image': ImagePath.Character.o,
            'name': Character.o,
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
            'numberOfPlayers': 6
          },
          [village.RoleId.seer]: {
            '@id': `https://licos.online/state/${VERSION}/village#3/role#seer`,
            'id': village.RoleId.seer,
            'image': ImagePath.Role.seer,
            'name': Role.seer,
            'numberOfPlayers': 1
          },
          [village.RoleId.medium]: {
            '@id': `https://licos.online/state/${VERSION}/village#3/role#medium`,
            'id': village.RoleId.medium,
            'image': ImagePath.Role.medium,
            'name': Role.medium,
            'numberOfPlayers': 1
          },
          [village.RoleId.hunter]: {
            '@id': `https://licos.online/state/${VERSION}/village#3/role#hunter`,
            'id': village.RoleId.hunter,
            'image': ImagePath.Role.hunter,
            'name': Role.hunter,
            'numberOfPlayers': 1
          },
          [village.RoleId.mason]: {
            '@id': `https://licos.online/state/${VERSION}/village#3/role#mason`,
            'id': village.RoleId.mason,
            'image': ImagePath.Role.mason,
            'name': Role.mason,
            'numberOfPlayers': 2
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
            'numberOfPlayers': 2
          },
          [village.RoleId.werehamster]: {
            '@id': `https://licos.online/state/${VERSION}/village#3/role#werehamster`,
            'id': village.RoleId.werehamster,
            'image': ImagePath.Role.werehamster,
            'name': Role.werehamster,
            'numberOfPlayers': 1
          }
        }
      },
      spec: {
        position: {
          left: 0,
          top: 0
        },
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
    type: ActionTypes.App.CHANGE_PREDICTION_BOARD
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
      'image': ImagePath.Character.b,
      'name': Character.b
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
      'image': ImagePath.Character.a,
      'name': Character.a,
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
    'token': '3F2504E0-4F89-11D3-9A0C-0305E82C3300',
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
      'language': village.Language.en,
      'name': '横国の森の奥にある時代に取り残された小さな村',
      'totalNumberOfPlayers': 15
    }
  }

  test('validate the JSON', async () => {
    expect.hasAssertions()
    const [mainSchema, baseSchema, ... schemas] = await Promise.all([
      VILLAGE_SCHEMA.boardMessage,
      VILLAGE_SCHEMA.base,
      VILLAGE_SCHEMA.avatar,
      VILLAGE_SCHEMA.board,
      VILLAGE_SCHEMA.character,
      VILLAGE_SCHEMA.chat,
      VILLAGE_SCHEMA.chatSettings,
      VILLAGE_SCHEMA.role,
      VILLAGE_SCHEMA.time,
      VILLAGE_SCHEMA.timestamp,
      VILLAGE_SCHEMA.village
    ].map(
      schema => fetch(schema)
        .then(res => res.json())
    ))
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
    const validate = ajv.validate(VILLAGE_SCHEMA.boardMessage, payload)

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
    mine: {
      character: {
        '@id': `https://licos.online/state/${VERSION}/village#3/character#1`,
        'id': 1,
        'image': ImagePath.Character.a,
        'name': Character.a
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
    type: ActionTypes.App.POST_CHAT
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
      'image': ImagePath.Character.a,
      'name': Character.a
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
      'image': ImagePath.Character.a,
      'name': Character.a,
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
    'token': '3F2504E0-4F89-11D3-9A0C-0305E82C3300',
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
      'language': village.Language.en,
      'name': '横国の森の奥にある時代に取り残された小さな村',
      'totalNumberOfPlayers': 15
    }
  }

  test('validate the JSON', async () => {
    expect.hasAssertions()
    const [mainSchema, baseSchema, ... schemas] = await Promise.all([
      VILLAGE_SCHEMA.chatMessage,
      VILLAGE_SCHEMA.base,
      VILLAGE_SCHEMA.character,
      VILLAGE_SCHEMA.avatar,
      VILLAGE_SCHEMA.chat,
      VILLAGE_SCHEMA.chatSettings,
      VILLAGE_SCHEMA.role,
      VILLAGE_SCHEMA.time,
      VILLAGE_SCHEMA.timestamp,
      VILLAGE_SCHEMA.village
    ].map(
      schema => fetch(schema)
        .then(res => res.json())
    ))
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
    const validate = ajv.validate(VILLAGE_SCHEMA.chatMessage, payload)

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
    type: ActionTypes.App.READY,
    villageId
  }
  const payload: village.Payload$Ready = {
    token,
    type: lobby.PayloadType.ready,
    villageId
  }

  test('validate the JSON of play', async () => {
    expect.hasAssertions()
    const [mainSchema, baseSchema, ... schemas] = await Promise.all([
      LOBBY_SCHEMA.client2server.ready,
      VILLAGE_SCHEMA.avatar,
      VILLAGE_SCHEMA.village
    ].map(
      schema => fetch(schema)
        .then(res => res.json())
    ))
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
    const validate = ajv.validate(LOBBY_SCHEMA.client2server.ready, payload)

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
          'image': ImagePath.Character.b,
          'name': Character.b
        },
        '3': {
          '@id': `https://licos.online/state/${VERSION}/village#3/character#3`,
          'id': '3',
          'image': ImagePath.Character.c,
          'name': Character.c
        },
        '4': {
          '@id': `https://licos.online/state/${VERSION}/village#3/character#4`,
          'id': '4',
          'image': ImagePath.Character.d,
          'name': Character.d
        },
        '5': {
          '@id': `https://licos.online/state/${VERSION}/village#3/character#5`,
          'id': '5',
          'image': ImagePath.Character.e,
          'name': Character.e
        },
        '6': {
          '@id': `https://licos.online/state/${VERSION}/village#3/character#6`,
          'id': '6',
          'image': ImagePath.Character.f,
          'name': Character.f
        },
        '7': {
          '@id': `https://licos.online/state/${VERSION}/village#3/character#7`,
          'id': '7',
          'image': ImagePath.Character.g,
          'name': Character.g
        },
        '8': {
          '@id': `https://licos.online/state/${VERSION}/village#3/character#8`,
          'id': '8',
          'image': ImagePath.Character.h,
          'name': Character.h
        },
        '9': {
          '@id': `https://licos.online/state/${VERSION}/village#3/character#9`,
          'id': '9',
          'image': ImagePath.Character.i,
          'name': Character.i
        },
        '10': {
          '@id': `https://licos.online/state/${VERSION}/village#3/character#10`,
          'id': '10',
          'image': ImagePath.Character.j,
          'name': Character.j
        },
        '11': {
          '@id': `https://licos.online/state/${VERSION}/village#3/character#11`,
          'id': '11',
          'image': ImagePath.Character.k,
          'name': Character.k
        },
        '12': {
          '@id': `https://licos.online/state/${VERSION}/village#3/character#12`,
          'id': '12',
          'image': ImagePath.Character.l,
          'name': Character.l
        },
        '13': {
          '@id': `https://licos.online/state/${VERSION}/village#3/character#13`,
          'id': '13',
          'image': ImagePath.Character.m,
          'name': Character.m
        },
        '14': {
          '@id': `https://licos.online/state/${VERSION}/village#3/character#14`,
          'id': '14',
          'image': ImagePath.Character.n,
          'name': Character.n
        },
        '15': {
          '@id': `https://licos.online/state/${VERSION}/village#3/character#15`,
          'id': '15',
          'image': ImagePath.Character.o,
          'name': Character.o
        }
      },
      fixed: true
    },
    mine: {
      character: {
        '@id': `https://licos.online/state/${VERSION}/village#3/character#1`,
        'id': 1,
        'image': ImagePath.Character.a,
        'name': Character.a
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
    type: ActionTypes.App.SELECT_YES
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
      'image': ImagePath.Character.b,
      'name': Character.b
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
      'image': ImagePath.Character.a,
      'name': Character.a,
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
    'token': '3F2504E0-4F89-11D3-9A0C-0305E82C3300',
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
      'language': village.Language.en,
      'name': '横国の森の奥にある時代に取り残された小さな村',
      'totalNumberOfPlayers': 15
    }
  }

  test('validate the JSON', async () => {
    expect.hasAssertions()
    const [mainSchema, baseSchema, ... schemas] = await Promise.all([
      VILLAGE_SCHEMA.voteMessage,
      VILLAGE_SCHEMA.base,
      VILLAGE_SCHEMA.avatar,
      VILLAGE_SCHEMA.character,
      VILLAGE_SCHEMA.chat,
      VILLAGE_SCHEMA.chatSettings,
      VILLAGE_SCHEMA.role,
      VILLAGE_SCHEMA.time,
      VILLAGE_SCHEMA.timestamp,
      VILLAGE_SCHEMA.village
    ].map(
      schema => fetch(schema)
        .then(res => res.json())
    ))
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
    const validate = ajv.validate(VILLAGE_SCHEMA.voteMessage, payload)

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
      allIds: ['chat0'],
      byId: {
        chat0: {
          characterId: '1',
          clientTimestamp: '2006-10-07T12:06:56.568+09:00',
          day: 1,
          id: 12,
          image: ImagePath.Character.a,
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
    mine: {
      character: {
        '@id': `https://licos.online/state/${VERSION}/village#3/character#1`,
        'id': 1,
        'image': ImagePath.Character.a,
        'name': Character.a
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
    type: ActionTypes.App.STAR
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
      'image': ImagePath.Character.a,
      'name': Character.a,
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
      'token': '3F2504E0-4F89-11D3-9A0C-0305E82C3300'
    },
    'token': '3F2504E0-4F89-11D3-9A0C-0305E82C3300',
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
      'language': village.Language.en,
      'name': '横国の森の奥にある時代に取り残された小さな村',
      'totalNumberOfPlayers': 15
    }
  }

  test('validate the JSON', async () => {
    expect.hasAssertions()
    const [mainSchema, baseSchema, ... schemas] = await Promise.all([
      VILLAGE_SCHEMA.starMessage,
      VILLAGE_SCHEMA.base,
      VILLAGE_SCHEMA.avatar,
      VILLAGE_SCHEMA.character,
      VILLAGE_SCHEMA.chat,
      VILLAGE_SCHEMA.chatSettings,
      VILLAGE_SCHEMA.role,
      VILLAGE_SCHEMA.star,
      VILLAGE_SCHEMA.time,
      VILLAGE_SCHEMA.timestamp,
      VILLAGE_SCHEMA.village
    ].map(
      schema => fetch(schema)
        .then(res => res.json())
    ))
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
    const validate = ajv.validate(VILLAGE_SCHEMA.starMessage, payload)

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
describe('message/CHAT_MESSAGE', () => {
  const store = fakeStore()
  const dispatch = jest.fn()

  store.dispatch = dispatch
  const nextHandler = middleware(store)
  const dispatchAPI = jest.fn()
  const actionHandler = nextHandler(dispatchAPI)
  const token = '3F2504E0-4F89-11D3-9A0C-0305E82C3300'
  const villageId = 3
  const action = message.chatMessage(myMessageOnChat)
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
      VILLAGE_SCHEMA.receipt.receivedChatMessage,
      VILLAGE_SCHEMA.avatar,
      VILLAGE_SCHEMA.base,
      VILLAGE_SCHEMA.timestamp,
      VILLAGE_SCHEMA.village
    ].map(
      schema => fetch(schema)
        .then(res => res.json())
    ))
    const ajv = new Ajv({
      schemas
    })
    const validate = ajv.validate(VILLAGE_SCHEMA.receipt.receivedChatMessage, payload)

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
describe('message/FLAVOR_TEXT_MESSAGE', () => {
  const store = fakeStore()
  const dispatch = jest.fn()

  store.dispatch = dispatch
  const nextHandler = middleware(store)
  const dispatchAPI = jest.fn()
  const actionHandler = nextHandler(dispatchAPI)
  const token = '3F2504E0-4F89-11D3-9A0C-0305E82C3300'
  const villageId = 3
  const action = message.flavorTextMessage(flavorText)
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
      VILLAGE_SCHEMA.receipt.receivedFlavorTextMessage,
      VILLAGE_SCHEMA.avatar,
      VILLAGE_SCHEMA.time,
      VILLAGE_SCHEMA.timestamp,
      VILLAGE_SCHEMA.village
    ].map(
      schema => fetch(schema)
        .then(res => res.json())
    ))
    const ajv = new Ajv({
      schemas
    })
    const validate = ajv.validate(VILLAGE_SCHEMA.receipt.receivedFlavorTextMessage, payload)

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
describe('message/SYSTEM_MESSAGE', () => {
  const store = fakeStore()
  const dispatch = jest.fn()

  store.dispatch = dispatch
  const nextHandler = middleware(store)
  const dispatchAPI = jest.fn()
  const actionHandler = nextHandler(dispatchAPI)
  const token = '3F2504E0-4F89-11D3-9A0C-0305E82C3300'
  const villageId = 3
  const action = message.systemMessage(firstMorning)
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
      VILLAGE_SCHEMA.receipt.receivedSystemMessage,
      VILLAGE_SCHEMA.avatar,
      VILLAGE_SCHEMA.time,
      VILLAGE_SCHEMA.timestamp,
      VILLAGE_SCHEMA.village
    ].map(
      schema => fetch(schema)
        .then(res => res.json())
    ))
    const ajv = new Ajv({
      schemas
    })
    const validate = ajv.validate(VILLAGE_SCHEMA.receipt.receivedSystemMessage, payload)

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

/* global village */
import * as ActionTypes from '../constants/ActionTypes'
import {
  ChangePredictionBoard,
  PostChat,
  Ready,
  SelectYes,
  StarChat,
  socket
} from '../actions'
import {firstMorning, flavorText, myMessageOnChat} from '../reducers/fakeServer'
import Agent from '../constants/Agent'
import Ajv from 'ajv'
import ImagePath from '../constants/ImagePath'
import {Role} from '../constants/Role'
import {VERSION} from '../constants/Version'
import fakeStore from '../containers/fakeStore'
import fetch from 'node-fetch'
import middleware from './client2server'

const clientTimestamp = new Date('2006-10-07T12:06:56.568+09:00').toISOString()
const BASE_URI = `https://werewolf.world/schema/${VERSION}`

describe('CHANGE_PREDICTION_BOARD', () => {
  const store = fakeStore({
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
        'lang': village.Language.ja,
        'name': '横国の森の奥にある時代に取り残された小さな村',
        'totalNumberOfAgents': 15
      }
    },
    mine: {
      agent: {
        '@id': 'https://licos.online/state/0.2/village#3/agent#1',
        'id': 1,
        'image': ImagePath.Agent.a,
        'name': Agent.a
      },
      role: {
        '@id': 'https://licos.online/state/0.2/village#3/role#seer',
        'id': village.RoleId.seer,
        'image': ImagePath.Role.seer,
        'name': Role.seer
      }
    },
    prediction: {
      playerStatus: {
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
          },
          '6': {
            '@id': 'https://licos.online/state/0.2/village#3/agent#6',
            'id': '6',
            'image': ImagePath.Agent.f,
            'name': Agent.f,
            'status': village.AgentStatus.alive
          },
          '7': {
            '@id': 'https://licos.online/state/0.2/village#3/agent#7',
            'id': '7',
            'image': ImagePath.Agent.g,
            'name': Agent.g,
            'status': village.AgentStatus.alive
          },
          '8': {
            '@id': 'https://licos.online/state/0.2/village#3/agent#8',
            'id': '8',
            'image': ImagePath.Agent.h,
            'name': Agent.h,
            'status': village.AgentStatus.alive
          },
          '9': {
            '@id': 'https://licos.online/state/0.2/village#3/agent#9',
            'id': '9',
            'image': ImagePath.Agent.i,
            'name': Agent.i,
            'status': village.AgentStatus.alive
          },
          '10': {
            '@id': 'https://licos.online/state/0.2/village#3/agent#10',
            'id': '10',
            'image': ImagePath.Agent.j,
            'name': Agent.j,
            'status': village.AgentStatus.alive
          },
          '11': {
            '@id': 'https://licos.online/state/0.2/village#3/agent#11',
            'id': '11',
            'image': ImagePath.Agent.k,
            'name': Agent.k,
            'status': village.AgentStatus.alive
          },
          '12': {
            '@id': 'https://licos.online/state/0.2/village#3/agent#12',
            'id': '12',
            'image': ImagePath.Agent.l,
            'name': Agent.l,
            'status': village.AgentStatus.alive
          },
          '13': {
            '@id': 'https://licos.online/state/0.2/village#3/agent#13',
            'id': '13',
            'image': ImagePath.Agent.m,
            'name': Agent.m,
            'status': village.AgentStatus.alive
          },
          '14': {
            '@id': 'https://licos.online/state/0.2/village#3/agent#14',
            'id': '14',
            'image': ImagePath.Agent.n,
            'name': Agent.n,
            'status': village.AgentStatus.alive
          },
          '15': {
            '@id': 'https://licos.online/state/0.2/village#3/agent#15',
            'id': '15',
            'image': ImagePath.Agent.o,
            'name': Agent.o,
            'status': village.AgentStatus.alive
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
            '@id': 'https://licos.online/state/0.2/village#3/role#villager',
            'id': village.RoleId.villager,
            'image': ImagePath.Role.villager,
            'name': Role.villager,
            'numberOfAgents': 6
          },
          [village.RoleId.seer]: {
            '@id': 'https://licos.online/state/0.2/village#3/role#seer',
            'id': village.RoleId.seer,
            'image': ImagePath.Role.seer,
            'name': Role.seer,
            'numberOfAgents': 1
          },
          [village.RoleId.medium]: {
            '@id': 'https://licos.online/state/0.2/village#3/role#medium',
            'id': village.RoleId.medium,
            'image': ImagePath.Role.medium,
            'name': Role.medium,
            'numberOfAgents': 1
          },
          [village.RoleId.hunter]: {
            '@id': 'https://licos.online/state/0.2/village#3/role#hunter',
            'id': village.RoleId.hunter,
            'image': ImagePath.Role.hunter,
            'name': Role.hunter,
            'numberOfAgents': 1
          },
          [village.RoleId.mason]: {
            '@id': 'https://licos.online/state/0.2/village#3/role#mason',
            'id': village.RoleId.mason,
            'image': ImagePath.Role.mason,
            'name': Role.mason,
            'numberOfAgents': 2
          },
          [village.RoleId.madman]: {
            '@id': 'https://licos.online/state/0.2/village#3/role#madman',
            'id': village.RoleId.madman,
            'image': ImagePath.Role.madman,
            'name': Role.madman,
            'numberOfAgents': 1
          },
          [village.RoleId.werewolf]: {
            '@id': 'https://licos.online/state/0.2/village#3/role#werewolf',
            'id': village.RoleId.werewolf,
            'image': ImagePath.Role.werewolf,
            'name': Role.werewolf,
            'numberOfAgents': 2
          },
          [village.RoleId.werehamster]: {
            '@id': 'https://licos.online/state/0.2/village#3/role#werehamster',
            'id': village.RoleId.werehamster,
            'image': ImagePath.Role.werehamster,
            'name': Role.werehamster,
            'numberOfAgents': 1
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
    nextState: village.BoardState.CIRCLE,
    playerId: '2',
    roleId: village.RoleId.villager,
    type: ActionTypes.global.CHANGE_PREDICTION_BOARD
  }
  const payload: village.Payload$boardMessage = {
    '@context': [
      village.BaseContext.Base,
      village.BaseContext.Board
    ],
    '@id': 'https://licos.online/state/0.2/village#3/boardMessage',
    'agent': {
      '@context': village.Context.Agent,
      '@id': 'https://licos.online/state/0.2/village#3/agent#2',
      'id': 2,
      'image': ImagePath.Agent.b,
      'name': Agent.b
    },
    clientTimestamp,
    'date': 1,
    'directionality': village.Directionality.clientToServer,
    'extensionalDisclosureRange': [],
    'intensionalDisclosureRange': village.Channel.private,
    'myAgent': {
      '@context': village.Context.Agent,
      '@id': 'https://licos.online/state/0.2/village#3/agent#1',
      'id': 1,
      'image': ImagePath.Agent.a,
      'name': Agent.a,
      'role': {
        '@context': village.Context.Role,
        '@id': 'https://licos.online/state/0.2/village#3/role#seer',
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
      '@id': 'https://licos.online/state/0.2/village#3/role#villager',
      'image': ImagePath.Role.villager,
      'name': Role.villager
    },
    'serverTimestamp': '2006-10-07T12:06:56.568+09:00',
    'token': 'eFVr3O93oLhmnE8OqTMl5VSVGIV',
    'village': {
      '@context': village.Context.Village,
      '@id': 'https://licos.online/state/0.2/village',
      'chatSettings': {
        '@context': village.Context.ChatSettings,
        '@id': 'https://licos.online/state/0.2/village#3/chatSettings',
        'characterLimit': 140,
        'limit': 10
      },
      'id': 3,
      'lang': village.Language.ja,
      'name': '横国の森の奥にある時代に取り残された小さな村',
      'totalNumberOfAgents': 15
    }
  }

  test('validate the JSON', async () => {
    expect.hasAssertions()
    const [mainSchema, baseSchema, ... schemas] = await Promise.all([
      fetch(`${BASE_URI}/boardMessage.json`)
        .then(res => res.json()),
      fetch(`${BASE_URI}/base.json`)
        .then(res => res.json()),
      fetch(`${BASE_URI}/agent.json`)
        .then(res => res.json()),
      fetch(`${BASE_URI}/avatar.json`)
        .then(res => res.json()),
      fetch(`${BASE_URI}/board.json`)
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
      type: ActionTypes.socket.SEND
    })
  })
})
describe('POST_CHAT', () => {
  const store = fakeStore({
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
        'lang': village.Language.ja,
        'name': '横国の森の奥にある時代に取り残された小さな村',
        'totalNumberOfAgents': 15
      }
    },
    mine: {
      agent: {
        '@id': 'https://licos.online/state/0.2/village#3/agent#1',
        'id': 1,
        'image': ImagePath.Agent.a,
        'name': Agent.a
      },
      role: {
        '@id': 'https://licos.online/state/0.2/village#3/role#seer',
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
    type: ActionTypes.global.POST_CHAT
  }
  const payload: village.Payload$playerMessage = {
    '@context': [
      village.BaseContext.Base,
      village.BaseContext.Chat
    ],
    '@id': 'https://licos.online/state/0.2/village#3/playerMessage',
    'agent': {
      '@context': village.Context.Agent,
      '@id': 'https://licos.online/state/0.2/village#3/agent#1',
      'id': 1,
      'image': ImagePath.Agent.a,
      'name': Agent.a
    },
    'characterLimit': 140,
    clientTimestamp,
    'date': 1,
    'directionality': village.Directionality.clientToServer,
    'extensionalDisclosureRange': [],
    'intensionalDisclosureRange': village.Channel.public,
    'isMine': true,
    'isOver': false,
    'myAgent': {
      '@context': village.Context.Agent,
      '@id': 'https://licos.online/state/0.2/village#3/agent#1',
      'id': 1,
      'image': ImagePath.Agent.a,
      'name': Agent.a,
      'role': {
        '@context': village.Context.Role,
        '@id': 'https://licos.online/state/0.2/village#3/role#seer',
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
      '@id': 'https://licos.online/state/0.2/village',
      'chatSettings': {
        '@context': village.Context.ChatSettings,
        '@id': 'https://licos.online/state/0.2/village#3/chatSettings',
        'characterLimit': 140,
        'limit': 10
      },
      'id': 3,
      'lang': village.Language.ja,
      'name': '横国の森の奥にある時代に取り残された小さな村',
      'totalNumberOfAgents': 15
    }
  }

  test('validate the JSON', async () => {
    expect.hasAssertions()
    const [mainSchema, baseSchema, ... schemas] = await Promise.all([
      fetch(`${BASE_URI}/playerMessage.json`)
        .then(res => res.json()),
      fetch(`${BASE_URI}/base.json`)
        .then(res => res.json()),
      fetch(`${BASE_URI}/agent.json`)
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
    const validate = ajv.validate(`${BASE_URI}/playerMessage.json`, payload)

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
      type: ActionTypes.socket.SEND
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
    type: ActionTypes.global.READY,
    villageId
  }
  const payload: village.Payload$ready = {
    token,
    type: village.PayloadType.ready,
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
      type: ActionTypes.socket.SEND
    })
  })
})
describe('SELECT_YES', () => {
  const store = fakeStore({
    base: {
      '@id': 'https://licos.online/state/0.2/village#3',
      'clientTimestamp': '2006-10-07T12:06:56.568+09:00',
      'date': 1,
      'intensionalDisclosureRange': village.Channel.private,
      'phase': village.Phase.day,
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
        'lang': village.Language.ja,
        'name': '横国の森の奥にある時代に取り残された小さな村',
        'totalNumberOfAgents': 15
      }
    },
    commandSelection: {
      agents: [
        {
          '@id': 'https://licos.online/state/0.2/village#3/agent#2',
          'id': 2,
          'image': ImagePath.Agent.b,
          'name': Agent.b
        },
        {
          '@id': 'https://licos.online/state/0.2/village#3/agent#3',
          'id': 3,
          'image': ImagePath.Agent.c,
          'name': Agent.c
        },
        {
          '@id': 'https://licos.online/state/0.2/village#3/agent#4',
          'id': 4,
          'image': ImagePath.Agent.d,
          'name': Agent.d
        },
        {
          '@id': 'https://licos.online/state/0.2/village#3/agent#5',
          'id': 5,
          'image': ImagePath.Agent.e,
          'name': Agent.e
        },
        {
          '@id': 'https://licos.online/state/0.2/village#3/agent#6',
          'id': 6,
          'image': ImagePath.Agent.f,
          'name': Agent.f
        },
        {
          '@id': 'https://licos.online/state/0.2/village#3/agent#7',
          'id': 7,
          'image': ImagePath.Agent.g,
          'name': Agent.g
        },
        {
          '@id': 'https://licos.online/state/0.2/village#3/agent#8',
          'id': 8,
          'image': ImagePath.Agent.h,
          'name': Agent.h
        },
        {
          '@id': 'https://licos.online/state/0.2/village#3/agent#9',
          'id': 9,
          'image': ImagePath.Agent.i,
          'name': Agent.i
        },
        {
          '@id': 'https://licos.online/state/0.2/village#3/agent#10',
          'id': 10,
          'image': ImagePath.Agent.j,
          'name': Agent.j
        },
        {
          '@id': 'https://licos.online/state/0.2/village#3/agent#11',
          'id': 11,
          'image': ImagePath.Agent.k,
          'name': Agent.k
        },
        {
          '@id': 'https://licos.online/state/0.2/village#3/agent#12',
          'id': 12,
          'image': ImagePath.Agent.l,
          'name': Agent.l
        },
        {
          '@id': 'https://licos.online/state/0.2/village#3/agent#13',
          'id': 13,
          'image': ImagePath.Agent.m,
          'name': Agent.m
        },
        {
          '@id': 'https://licos.online/state/0.2/village#3/agent#14',
          'id': 14,
          'image': ImagePath.Agent.n,
          'name': Agent.n
        }
      ],
      fixed: true
    },
    mine: {
      agent: {
        '@id': 'https://licos.online/state/0.2/village#3/agent#1',
        'id': 1,
        'image': ImagePath.Agent.a,
        'name': Agent.a
      },
      role: {
        '@id': 'https://licos.online/state/0.2/village#3/role#seer',
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
    agentId: 2,
    type: ActionTypes.global.SELECT_YES
  }
  const payload: village.Payload$voteMessage = {
    '@context': [
      village.BaseContext.Base,
      village.BaseContext.Vote
    ],
    '@id': 'https://licos.online/state/0.2/village#3/voteMessage',
    'agent': {
      '@context': village.Context.Agent,
      '@id': 'https://licos.online/state/0.2/village#3/agent#2',
      'id': 2,
      'image': ImagePath.Agent.b,
      'name': Agent.b
    },
    clientTimestamp,
    'date': 1,
    'directionality': village.Directionality.clientToServer,
    'extensionalDisclosureRange': [],
    'intensionalDisclosureRange': village.Channel.private,
    'myAgent': {
      '@context': village.Context.Agent,
      '@id': 'https://licos.online/state/0.2/village#3/agent#1',
      'id': 1,
      'image': ImagePath.Agent.a,
      'name': Agent.a,
      'role': {
        '@context': village.Context.Role,
        '@id': 'https://licos.online/state/0.2/village#3/role#seer',
        'image': ImagePath.Role.seer,
        'name': Role.seer
      }
    },
    'phase': village.Phase.day,
    'phaseStartTime': '2006-10-07T12:06:56.568+09:00',
    'phaseTimeLimit': 600,
    'serverTimestamp': '2006-10-07T12:06:56.568+09:00',
    'token': 'eFVr3O93oLhmnE8OqTMl5VSVGIV',
    'village': {
      '@context': village.Context.Village,
      '@id': 'https://licos.online/state/0.2/village',
      'chatSettings': {
        '@context': village.Context.ChatSettings,
        '@id': 'https://licos.online/state/0.2/village#3/chatSettings',
        'characterLimit': 140,
        'limit': 10
      },
      'id': 3,
      'lang': village.Language.ja,
      'name': '横国の森の奥にある時代に取り残された小さな村',
      'totalNumberOfAgents': 15
    }
  }

  test('validate the JSON', async () => {
    expect.hasAssertions()
    const [mainSchema, baseSchema, ... schemas] = await Promise.all([
      fetch(`${BASE_URI}/voteMessage.json`)
        .then(res => res.json()),
      fetch(`${BASE_URI}/base.json`)
        .then(res => res.json()),
      fetch(`${BASE_URI}/agent.json`)
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
      type: ActionTypes.socket.SEND
    })
  })
})
describe('STAR', () => {
  const store = fakeStore({
    base: {
      '@id': 'https://licos.online/state/0.2/village#3',
      'clientTimestamp': '2006-10-07T12:06:56.568+09:00',
      'date': 1,
      'intensionalDisclosureRange': village.Channel.private,
      'phase': village.Phase.day,
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
        'lang': village.Language.ja,
        'name': '横国の森の奥にある時代に取り残された小さな村',
        'totalNumberOfAgents': 15
      }
    },
    chat: {
      allIds: ['chat0'],
      byId: {
        chat0: {
          agentId: '1',
          clientTimestamp: '2006-10-07T12:06:56.568+09:00',
          date: 1,
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
          type: 'item'
        }
      }
    },
    mine: {
      agent: {
        '@id': 'https://licos.online/state/0.2/village#3/agent#1',
        'id': 1,
        'image': ImagePath.Agent.a,
        'name': Agent.a
      },
      role: {
        '@id': 'https://licos.online/state/0.2/village#3/role#seer',
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
    type: ActionTypes.global.STAR
  }
  const payload: village.Payload$starMessage = {
    '@context': [
      village.BaseContext.Base,
      village.BaseContext.Star
    ],
    '@id': 'https://licos.online/state/0.2/village#3/starMessage',
    clientTimestamp,
    'date': 1,
    'directionality': village.Directionality.clientToServer,
    'extensionalDisclosureRange': [],
    'intensionalDisclosureRange': village.Channel.private,
    'myAgent': {
      '@context': village.Context.Agent,
      '@id': 'https://licos.online/state/0.2/village#3/agent#1',
      'id': 1,
      'image': ImagePath.Agent.a,
      'name': Agent.a,
      'role': {
        '@context': village.Context.Role,
        '@id': 'https://licos.online/state/0.2/village#3/role#seer',
        'image': ImagePath.Role.seer,
        'name': Role.seer
      }
    },
    'phase': village.Phase.day,
    'phaseStartTime': '2006-10-07T12:06:56.568+09:00',
    'phaseTimeLimit': 600,
    'serverTimestamp': '2006-10-07T12:06:56.568+09:00',
    'star': {
      '@context': village.Context.Star,
      '@id': 'https://licos.online/state/0.2/village#3/star',
      'clientTimestamp': '2006-10-07T12:06:56.568+09:00',
      'isMarked': true,
      'serverTimestamp': '2006-10-07T12:06:56.568+09:00',
      'token': 'eFVr3O93oLhmnE8OqTMl5VSVGIV'
    },
    'token': 'eFVr3O93oLhmnE8OqTMl5VSVGIV',
    'village': {
      '@context': village.Context.Village,
      '@id': 'https://licos.online/state/0.2/village',
      'chatSettings': {
        '@context': village.Context.ChatSettings,
        '@id': 'https://licos.online/state/0.2/village#3/chatSettings',
        'characterLimit': 140,
        'limit': 10
      },
      'id': 3,
      'lang': village.Language.ja,
      'name': '横国の森の奥にある時代に取り残された小さな村',
      'totalNumberOfAgents': 15
    }
  }

  test('validate the JSON', async () => {
    expect.hasAssertions()
    const [mainSchema, baseSchema, ... schemas] = await Promise.all([
      fetch(`${BASE_URI}/starMessage.json`)
        .then(res => res.json()),
      fetch(`${BASE_URI}/base.json`)
        .then(res => res.json()),
      fetch(`${BASE_URI}/agent.json`)
        .then(res => res.json()),
      fetch(`${BASE_URI}/avatar.json`)
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
      type: ActionTypes.socket.SEND
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
    const payload: village.Payload$receivedFlavorTextMessage = {
      date: 0,
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
        type: ActionTypes.socket.SEND
      })
    })
  })
  describe('receivedPlayerMessage', () => {
    const store = fakeStore()
    const dispatch = jest.fn()

    store.dispatch = dispatch
    const nextHandler = middleware(store)
    const dispatchAPI = jest.fn()
    const actionHandler = nextHandler(dispatchAPI)
    const token = 'eFVr3O93oLhmnE8OqTMl5VSVGIV'
    const villageId = 3
    const action = socket.message(myMessageOnChat)
    const payload: village.Payload$receivedPlayerMessage = {
      clientTimestamp: '2006-10-07T12:06:56.568+09:00',
      serverTimestamp: '2006-10-07T12:06:56.568+09:00',
      token,
      type: village.PayloadType.receivedPlayerMessage,
      villageId
    }

    test('validate the JSON of play', async () => {
      expect.hasAssertions()
      const schemas = await Promise.all([
        fetch(`${BASE_URI}/receipt/receivedPlayerMessage.json`)
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
      const validate = ajv.validate(`${BASE_URI}/receipt/receivedPlayerMessage.json`, payload)

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
        type: ActionTypes.socket.SEND
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
    const payload: village.Payload$receivedSystemMessage = {
      date: 1,
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
        type: ActionTypes.socket.SEND
      })
    })
  })
})

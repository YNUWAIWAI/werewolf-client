import * as ActionTypes from '../constants/ActionTypes'
import {
  KickOutPlayer,
  SelectVillage,
  Settings,
  Transition,
  message,
  selectAvatarImage,
  selectRobotAvatar
} from '../actions'
import {
  LOBBY_SCHEMA,
  VILLAGE_SCHEMA
} from '../constants/SchemaPath'
import Ajv from 'ajv'
import {ImagePath} from '../constants/ImagePath'
import {initialState as advancedSearch} from '../reducers/advancedSearch'
import {initialState as avatarImageList} from '../reducers/avatarImageList'
import {initialState as buildVillage} from '../reducers/buildVillage'
import fakeStore from '../containers/fakeStore'
import fetch from 'node-fetch'
import {getCastFromNumberOfPlayers} from '../util'
import {initialState as idSearch} from '../reducers/idSearch'
import {lobby} from '../types'
import middleware from './client2server'

const avatarToken = {
  humanPlayer: '3F2504E0-4F89-11D3-9A0C-0305E82C3310',
  onymousAudience: '3F2504E0-4F89-11D3-9A0C-0305E82C3311',
  robotPlayer: '3F2504E0-4F89-11D3-9A0C-0305E82C3312'
}

describe('ADVANCED_SEARCH', () => {
  describe('validity: true', () => {
    const value = {
      avatar: lobby.Avatar.fixed,
      comment: 'Beginners are welcome',
      hostName: 'Alice',
      maximum: 15,
      minimum: 5,
      villageName: 'Alice\'s Village'
    }
    const store = fakeStore({
      advancedSearch: {
        ... advancedSearch,
        checked: {
          avatar: true,
          comment: true,
          hostName: true,
          maximum: true,
          minimum: true,
          villageName: true
        },
        validity: {
          avatar: true,
          comment: true,
          hostName: true,
          maximum: true,
          minimum: true,
          villageName: true
        },
        value
      },
      token: {
        [lobby.LobbyType.anonymousAudience]: '',
        [lobby.LobbyType.human]: avatarToken.humanPlayer,
        'lobby': lobby.LobbyType.human,
        [lobby.LobbyType.onymousAudience]: avatarToken.onymousAudience,
        [lobby.LobbyType.robot]: avatarToken.robotPlayer
      }
    })
    const dispatch = jest.fn()

    store.dispatch = dispatch
    const nextHandler = middleware(store)
    const dispatchAPI = jest.fn()
    const actionHandler = nextHandler(dispatchAPI)
    const action: Transition = {
      type: ActionTypes.AdvancedSearch.SEARCH
    }
    const payload: lobby.Payload$AdvancedSearch = {
      ... value,
      lobby: lobby.LobbyType.human,
      token: avatarToken.humanPlayer,
      type: lobby.PayloadType.advancedSearch
    }

    test('validate the JSON of advancedSearch', async () => {
      expect.hasAssertions()
      const schemas = await Promise.all([
        LOBBY_SCHEMA.client2server.advancedSearch,
        VILLAGE_SCHEMA.avatar
      ].map(
        schema => fetch(schema)
          .then(res => res.json())
      ))
      const ajv = new Ajv({
        schemas
      })
      const validate = ajv.validate(LOBBY_SCHEMA.client2server.advancedSearch, payload)

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
  describe('validity: false', () => {
    const store = fakeStore({
      advancedSearch: {
        ... advancedSearch,
        checked: {
          avatar: false,
          comment: false,
          hostName: false,
          maximum: false,
          minimum: false,
          villageName: false
        },
        validity: {
          avatar: false,
          comment: false,
          hostName: false,
          maximum: false,
          minimum: false,
          villageName: false
        }
      },
      token: {
        [lobby.LobbyType.anonymousAudience]: '',
        [lobby.LobbyType.human]: avatarToken.humanPlayer,
        'lobby': lobby.LobbyType.human,
        [lobby.LobbyType.onymousAudience]: avatarToken.onymousAudience,
        [lobby.LobbyType.robot]: avatarToken.robotPlayer
      }
    })
    const dispatch = jest.fn()

    store.dispatch = dispatch
    const nextHandler = middleware(store)
    const dispatchAPI = jest.fn()
    const actionHandler = nextHandler(dispatchAPI)
    const action: Transition = {
      type: ActionTypes.AdvancedSearch.SEARCH
    }
    const payload: lobby.Payload$AdvancedSearch = {
      avatar: lobby.Avatar.random,
      comment: null,
      hostName: null,
      lobby: lobby.LobbyType.human,
      maximum: null,
      minimum: null,
      token: avatarToken.humanPlayer,
      type: lobby.PayloadType.advancedSearch,
      villageName: null
    }

    test('validate the JSON', async () => {
      expect.hasAssertions()
      const schemas = await Promise.all([
        LOBBY_SCHEMA.client2server.advancedSearch,
        VILLAGE_SCHEMA.avatar
      ].map(
        schema => fetch(schema)
          .then(res => res.json())
      ))
      const ajv = new Ajv({
        schemas
      })
      const validate = ajv.validate(LOBBY_SCHEMA.client2server.advancedSearch, payload)

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
describe('BUILD_VILLAGE', () => {
  const store = fakeStore({
    token: {
      [lobby.LobbyType.anonymousAudience]: '',
      [lobby.LobbyType.human]: avatarToken.humanPlayer,
      'lobby': lobby.LobbyType.human,
      [lobby.LobbyType.onymousAudience]: avatarToken.onymousAudience,
      [lobby.LobbyType.robot]: avatarToken.robotPlayer
    }
  })
  const dispatch = jest.fn()

  store.dispatch = dispatch
  const nextHandler = middleware(store)
  const dispatchAPI = jest.fn()
  const actionHandler = nextHandler(dispatchAPI)
  const action: Transition = {
    type: ActionTypes.BuildVillage.BUILD
  }
  const payload: lobby.Payload$BuildVillage = {
    avatar: buildVillage.value.avatar,
    comment: buildVillage.value.comment,
    hostPlayer: {
      isAnonymous: buildVillage.value.avatar === 'random',
      isHuman: buildVillage.value.isHuman,
      name: buildVillage.value.hostName
    },
    id: -1,
    idForSearching: -1,
    name: buildVillage.value.villageName,
    playerSetting: {
      current: -1,
      human: {
        current: -1,
        max: buildVillage.value.numberOfHumans
      },
      number: buildVillage.value.numberOfPlayers,
      robot: {
        current: -1,
        min: buildVillage.value.numberOfRobots
      }
    },
    roleSetting: getCastFromNumberOfPlayers(buildVillage.value.numberOfPlayers)[buildVillage.value.member],
    token: avatarToken.humanPlayer,
    type: lobby.PayloadType.buildVillage
  }

  test('validate the JSON of buildVillage', async () => {
    expect.hasAssertions()
    const schemas = await Promise.all([
      LOBBY_SCHEMA.client2server.buildVillage,
      VILLAGE_SCHEMA.avatar,
      VILLAGE_SCHEMA.village
    ].map(
      schema => fetch(schema)
        .then(res => res.json())
    ))
    const ajv = new Ajv({
      schemas
    })
    const validate = ajv.validate(LOBBY_SCHEMA.client2server.buildVillage, payload)

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
describe('CHANGE_LANGUAGE', () => {
  const store = fakeStore({
    token: {
      [lobby.LobbyType.anonymousAudience]: '',
      [lobby.LobbyType.human]: avatarToken.humanPlayer,
      'lobby': lobby.LobbyType.human,
      [lobby.LobbyType.onymousAudience]: avatarToken.onymousAudience,
      [lobby.LobbyType.robot]: avatarToken.robotPlayer
    }
  })
  const dispatch = jest.fn()

  store.dispatch = dispatch
  const nextHandler = middleware(store)
  const dispatchAPI = jest.fn()
  const actionHandler = nextHandler(dispatchAPI)
  const action: Settings.ChangeLanguage = {
    language: lobby.Language.ja,
    type: ActionTypes.Settings.CHANGE_LANGUAGE
  }
  const payload: lobby.Payload$ChangeLanguage = {
    language: lobby.Language.ja,
    type: lobby.PayloadType.changeLanguage
  }

  test('validate the JSON', async () => {
    expect.hasAssertions()
    const schemas = await Promise.all([
      LOBBY_SCHEMA.client2server.changeLanguage,
      VILLAGE_SCHEMA.village
    ].map(
      schema => fetch(schema)
        .then(res => res.json())
    ))
    const ajv = new Ajv({
      schemas
    })
    const validate = ajv.validate(LOBBY_SCHEMA.client2server.changeLanguage, payload)

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
describe('CHANGE_USER_EMAIL', () => {
  const store = fakeStore({
    token: {
      [lobby.LobbyType.anonymousAudience]: '',
      [lobby.LobbyType.human]: avatarToken.humanPlayer,
      'lobby': lobby.LobbyType.human,
      [lobby.LobbyType.onymousAudience]: avatarToken.onymousAudience,
      [lobby.LobbyType.robot]: avatarToken.robotPlayer
    }
  })
  const dispatch = jest.fn()

  store.dispatch = dispatch
  const nextHandler = middleware(store)
  const dispatchAPI = jest.fn()
  const actionHandler = nextHandler(dispatchAPI)
  const action: Settings.ChangeUserEmail = {
    type: ActionTypes.Settings.CHANGE_USER_EMAIL,
    userEmail: 'example@example.com'
  }
  const payload: lobby.Payload$ChangeUserEmail = {
    type: lobby.PayloadType.changeUserEmail,
    userEmail: 'example@example.com'
  }

  test('validate the JSON', async () => {
    expect.hasAssertions()
    const ajv = new Ajv()
    const schema = await fetch(LOBBY_SCHEMA.client2server.changeUserEmail)
      .then(res => res.json())
    const validate = ajv.validate(schema, payload)

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
describe('CHANGE_USER_NAME', () => {
  const store = fakeStore({
    token: {
      [lobby.LobbyType.anonymousAudience]: '',
      [lobby.LobbyType.human]: avatarToken.humanPlayer,
      'lobby': lobby.LobbyType.human,
      [lobby.LobbyType.onymousAudience]: avatarToken.onymousAudience,
      [lobby.LobbyType.robot]: avatarToken.robotPlayer
    }
  })
  const dispatch = jest.fn()

  store.dispatch = dispatch
  const nextHandler = middleware(store)
  const dispatchAPI = jest.fn()
  const actionHandler = nextHandler(dispatchAPI)
  const action: Settings.ChangeUserName = {
    type: ActionTypes.Settings.CHANGE_USER_NAME,
    userName: 'userName'
  }
  const payload: lobby.Payload$ChangeUserName = {
    type: lobby.PayloadType.changeUserName,
    userName: 'userName'
  }

  test('validate the JSON', async () => {
    expect.hasAssertions()
    const ajv = new Ajv()
    const schema = await fetch(LOBBY_SCHEMA.client2server.changeUserName)
      .then(res => res.json())
    const validate = ajv.validate(schema, payload)

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
describe('CHANGE_USER_PASSWORD', () => {
  const store = fakeStore({
    token: {
      [lobby.LobbyType.anonymousAudience]: '',
      [lobby.LobbyType.human]: avatarToken.humanPlayer,
      'lobby': lobby.LobbyType.human,
      [lobby.LobbyType.onymousAudience]: avatarToken.onymousAudience,
      [lobby.LobbyType.robot]: avatarToken.robotPlayer
    }
  })
  const dispatch = jest.fn()

  store.dispatch = dispatch
  const nextHandler = middleware(store)
  const dispatchAPI = jest.fn()
  const actionHandler = nextHandler(dispatchAPI)
  const action: Settings.ChangeUserPassword = {
    type: ActionTypes.Settings.CHANGE_USER_PASSWORD,
    userPassword: 'userPassword'
  }
  const payload: lobby.Payload$ChangeUserPassword = {
    type: lobby.PayloadType.changeUserPassword,
    userPassword: 'userPassword'
  }

  test('validate the JSON', async () => {
    expect.hasAssertions()
    const ajv = new Ajv()
    const schema = await fetch(LOBBY_SCHEMA.client2server.changeUserPassword)
      .then(res => res.json())
    const validate = ajv.validate(schema, payload)

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
describe('KICK_OUT_PLAYER', () => {
  const token = '3F2504E0-4F89-11D3-9A0C-0305E82C3301'
  const store = fakeStore({
    token: {
      [lobby.LobbyType.anonymousAudience]: '',
      [lobby.LobbyType.human]: avatarToken.humanPlayer,
      'lobby': lobby.LobbyType.human,
      [lobby.LobbyType.onymousAudience]: avatarToken.onymousAudience,
      [lobby.LobbyType.robot]: avatarToken.robotPlayer
    },
    waitingForPlayers: {
      isPlayer: true,
      kickOutToken: token,
      menuItems: [],
      players: [],
      village: null
    }
  })
  const dispatch = jest.fn()

  store.dispatch = dispatch
  const nextHandler = middleware(store)
  const dispatchAPI = jest.fn()
  const actionHandler = nextHandler(dispatchAPI)
  const action: KickOutPlayer = {
    type: ActionTypes.App.KICK_OUT_PLAYER
  }
  const payload: lobby.Payload$KickOutPlayer = {
    players: [
      {
        token
      }
    ],
    token: avatarToken.humanPlayer,
    type: lobby.PayloadType.kickOutPlayer
  }

  test('validate the JSON of kickOutPlayer', async () => {
    expect.hasAssertions()
    const schemas = await Promise.all([
      LOBBY_SCHEMA.client2server.kickOutPlayer,
      VILLAGE_SCHEMA.avatar
    ].map(
      schema => fetch(schema)
        .then(res => res.json())
    ))
    const ajv = new Ajv({
      schemas
    })
    const validate = ajv.validate(LOBBY_SCHEMA.client2server.kickOutPlayer, payload)

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
describe('LEAVE_WAITING_PAGE', () => {
  const token = '3F2504E0-4F89-11D3-9A0C-0305E82C3303'
  const villageId = 1
  const store = fakeStore({
    token: {
      [lobby.LobbyType.anonymousAudience]: '',
      [lobby.LobbyType.human]: avatarToken.humanPlayer,
      'lobby': lobby.LobbyType.human,
      [lobby.LobbyType.onymousAudience]: avatarToken.onymousAudience,
      [lobby.LobbyType.robot]: avatarToken.robotPlayer
    },
    waitingForPlayers: {
      isPlayer: true,
      kickOutToken: '',
      menuItems: [],
      players: [
        {
          avatarImage: 'https://werewolf.world/image/0.1/Friedel.jpg',
          isAnonymous: true,
          isHost: false,
          isMe: true,
          name: 'Cathy',
          token
        }
      ],
      village: {
        avatar: lobby.Avatar.random,
        comment: 'Experts recommended',
        hostPlayer: {
          isAnonymous: true,
          isHuman: true,
          name: 'Anonymous'
        },
        id: villageId,
        idForSearching: 123,
        name: 'Fairytale village',
        playerSetting: {
          current: 8,
          human: {
            current: 5,
            max: 8
          },
          number: 15,
          robot: {
            current: 3,
            min: 7
          }
        },
        roleSetting: {
          hunter: 1,
          madman: 1,
          mason: 2,
          medium: 1,
          seer: 1,
          villager: 6,
          werehamster: 1,
          werewolf: 2
        }
      }
    }
  })
  const dispatch = jest.fn()

  store.dispatch = dispatch
  const nextHandler = middleware(store)
  const dispatchAPI = jest.fn()
  const actionHandler = nextHandler(dispatchAPI)
  const action: Transition = {
    type: ActionTypes.App.LEAVE_WAITING_PAGE
  }
  const payload: lobby.Payload$LeaveWaitingPage = {
    lobby: lobby.LobbyType.human,
    token,
    type: lobby.PayloadType.leaveWaitingPage,
    villageId
  }

  test('validate the JSON of leaveWaitingPage', async () => {
    expect.hasAssertions()
    const schemas = await Promise.all([
      LOBBY_SCHEMA.client2server.leaveWaitingPage,
      VILLAGE_SCHEMA.avatar,
      VILLAGE_SCHEMA.village
    ].map(
      schema => fetch(schema)
        .then(res => res.json())
    ))
    const ajv = new Ajv({
      schemas
    })
    const validate = ajv.validate(LOBBY_SCHEMA.client2server.leaveWaitingPage, payload)

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
describe('PLAY_GAME', () => {
  const token = '3F2504E0-4F89-11D3-9A0C-0305E82C3303'
  const villageId = 1
  const store = fakeStore({
    token: {
      [lobby.LobbyType.anonymousAudience]: '',
      [lobby.LobbyType.human]: avatarToken.humanPlayer,
      'lobby': lobby.LobbyType.human,
      [lobby.LobbyType.onymousAudience]: avatarToken.onymousAudience,
      [lobby.LobbyType.robot]: avatarToken.robotPlayer
    },
    waitingForPlayers: {
      isPlayer: true,
      kickOutToken: '',
      menuItems: [],
      players: [
        {
          avatarImage: 'https://werewolf.world/image/0.1/Friedel.jpg',
          isAnonymous: true,
          isHost: false,
          isMe: true,
          name: 'Cathy',
          token
        }
      ],
      village: {
        avatar: lobby.Avatar.random,
        comment: 'Experts recommended',
        hostPlayer: {
          isAnonymous: true,
          isHuman: true,
          name: 'Anonymous'
        },
        id: villageId,
        idForSearching: 123,
        name: 'Fairytale village',
        playerSetting: {
          current: 8,
          human: {
            current: 5,
            max: 8
          },
          number: 15,
          robot: {
            current: 3,
            min: 7
          }
        },
        roleSetting: {
          hunter: 1,
          madman: 1,
          mason: 2,
          medium: 1,
          seer: 1,
          villager: 6,
          werehamster: 1,
          werewolf: 2
        }
      }
    }
  })
  const dispatch = jest.fn()

  store.dispatch = dispatch
  const nextHandler = middleware(store)
  const dispatchAPI = jest.fn()
  const actionHandler = nextHandler(dispatchAPI)
  const action: Transition = {
    type: ActionTypes.App.PLAY_GAME
  }
  const payload: lobby.Payload$Play = {
    token: avatarToken.humanPlayer,
    type: lobby.PayloadType.play,
    villageId
  }

  test('validate the JSON of play', async () => {
    expect.hasAssertions()
    const schemas = await Promise.all([
      LOBBY_SCHEMA.client2server.play,
      VILLAGE_SCHEMA.avatar,
      VILLAGE_SCHEMA.village
    ].map(
      schema => fetch(schema)
        .then(res => res.json())
    ))
    const ajv = new Ajv({
      schemas
    })
    const validate = ajv.validate(LOBBY_SCHEMA.client2server.play, payload)

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
describe('ID_SEARCH valid id', () => {
  const idForSearching = 123
  const store = fakeStore({
    idSearch: {
      ... idSearch,
      id: idForSearching
    },
    token: {
      [lobby.LobbyType.anonymousAudience]: '',
      [lobby.LobbyType.human]: avatarToken.humanPlayer,
      'lobby': lobby.LobbyType.human,
      [lobby.LobbyType.onymousAudience]: avatarToken.onymousAudience,
      [lobby.LobbyType.robot]: avatarToken.robotPlayer
    }
  })
  const dispatch = jest.fn()

  store.dispatch = dispatch
  const nextHandler = middleware(store)
  const dispatchAPI = jest.fn()
  const actionHandler = nextHandler(dispatchAPI)
  const action: Transition = {
    type: ActionTypes.App.ID_SEARCH
  }
  const payload: lobby.Payload$IdSearch = {
    idForSearching,
    lobby: lobby.LobbyType.human,
    token: avatarToken.humanPlayer,
    type: lobby.PayloadType.idSearch
  }

  test('validate the JSON of idSearch', async () => {
    expect.hasAssertions()
    const schemas = await Promise.all([
      LOBBY_SCHEMA.client2server.idSearch,
      VILLAGE_SCHEMA.avatar
    ].map(
      schema => fetch(schema)
        .then(res => res.json())
    ))
    const ajv = new Ajv({
      schemas
    })
    const validate = ajv.validate(LOBBY_SCHEMA.client2server.idSearch, payload)

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
describe('ID_SEARCH invalid id(=-1)', () => {
  const store = fakeStore({
    token: {
      [lobby.LobbyType.anonymousAudience]: '',
      [lobby.LobbyType.human]: avatarToken.humanPlayer,
      'lobby': lobby.LobbyType.human,
      [lobby.LobbyType.onymousAudience]: avatarToken.onymousAudience,
      [lobby.LobbyType.robot]: avatarToken.robotPlayer
    }
  })
  const dispatch = jest.fn()

  store.dispatch = dispatch
  const nextHandler = middleware(store)
  const dispatchAPI = jest.fn()
  const actionHandler = nextHandler(dispatchAPI)
  const action: Transition = {
    type: ActionTypes.App.ID_SEARCH
  }

  test('dispatch correctly', () => {
    actionHandler(action)
    expect(dispatch).toHaveBeenCalledTimes(0)
  })
})
describe('SELECT_VILLAGE', () => {
  const store = fakeStore({
    token: {
      [lobby.LobbyType.anonymousAudience]: '',
      [lobby.LobbyType.human]: avatarToken.humanPlayer,
      'lobby': lobby.LobbyType.human,
      [lobby.LobbyType.onymousAudience]: avatarToken.onymousAudience,
      [lobby.LobbyType.robot]: avatarToken.robotPlayer
    }
  })
  const dispatch = jest.fn()

  store.dispatch = dispatch
  const nextHandler = middleware(store)
  const dispatchAPI = jest.fn()
  const actionHandler = nextHandler(dispatchAPI)
  const villageId = 1
  const action: SelectVillage = {
    id: villageId,
    type: ActionTypes.App.SELECT_VILLAGE
  }
  const payload: lobby.Payload$SelectVillage = {
    token: avatarToken.humanPlayer,
    type: lobby.PayloadType.selectVillage,
    villageId
  }

  test('validate the JSON of selectVillage', async () => {
    expect.hasAssertions()
    const schemas = await Promise.all([
      LOBBY_SCHEMA.client2server.selectVillage,
      VILLAGE_SCHEMA.avatar,
      VILLAGE_SCHEMA.village
    ].map(
      schema => fetch(schema)
        .then(res => res.json())
    ))
    const ajv = new Ajv({
      schemas
    })
    const validate = ajv.validate(LOBBY_SCHEMA.client2server.selectVillage, payload)

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
describe('SHOW_LOBBY_FOR_AUDIENCE', () => {
  const store = fakeStore({
    token: {
      [lobby.LobbyType.anonymousAudience]: '',
      [lobby.LobbyType.human]: avatarToken.humanPlayer,
      'lobby': lobby.LobbyType.human,
      [lobby.LobbyType.onymousAudience]: avatarToken.onymousAudience,
      [lobby.LobbyType.robot]: avatarToken.robotPlayer
    }
  })
  const dispatch = jest.fn()

  store.dispatch = dispatch
  const nextHandler = middleware(store)
  const dispatchAPI = jest.fn()
  const actionHandler = nextHandler(dispatchAPI)
  const action: Transition = {
    type: ActionTypes.App.SHOW_LOBBY_FOR_AUDIENCE
  }
  const enterLobbyPayload: lobby.Payload$EnterLobby = {
    lobby: lobby.LobbyType.onymousAudience,
    page: 1,
    token: avatarToken.humanPlayer,
    type: lobby.PayloadType.enterLobby
  }
  const getAvatarPayload: lobby.Payload$GetAvatar = {
    token: avatarToken.humanPlayer,
    type: lobby.PayloadType.getAvatar
  }

  test('validate the JSON of enterLobby', async () => {
    expect.hasAssertions()
    const schemas = await Promise.all([
      LOBBY_SCHEMA.client2server.enterLobby,
      VILLAGE_SCHEMA.avatar
    ].map(
      schema => fetch(schema)
        .then(res => res.json())
    ))
    const ajv = new Ajv({
      schemas
    })
    const validate = ajv.validate(LOBBY_SCHEMA.client2server.enterLobby, enterLobbyPayload)

    if (!validate) {
      console.error(ajv.errors)
    }
    expect(validate).toBe(true)
  })
  test('validate the JSON of getAvatar', async () => {
    expect.hasAssertions()
    const schemas = await Promise.all([
      LOBBY_SCHEMA.client2server.getAvatar,
      VILLAGE_SCHEMA.avatar
    ].map(
      schema => fetch(schema)
        .then(res => res.json())
    ))
    const ajv = new Ajv({
      schemas
    })
    const validate = ajv.validate(LOBBY_SCHEMA.client2server.getAvatar, getAvatarPayload)

    if (!validate) {
      console.error(ajv.errors)
    }
    expect(validate).toBe(true)
  })
  test('dispatch correctly', () => {
    actionHandler(action)
    expect(dispatch).toHaveBeenCalledTimes(2)
    expect(dispatch).toHaveBeenCalledWith({
      payload: enterLobbyPayload,
      type: ActionTypes.Socket.SEND
    })
    expect(dispatch).toHaveBeenCalledWith({
      payload: getAvatarPayload,
      type: ActionTypes.Socket.SEND
    })
  })
})
describe('SHOW_LOBBY_FOR_HUMAN_PLAYER', () => {
  const store = fakeStore({
    token: {
      [lobby.LobbyType.anonymousAudience]: '',
      [lobby.LobbyType.human]: avatarToken.humanPlayer,
      'lobby': lobby.LobbyType.human,
      [lobby.LobbyType.onymousAudience]: avatarToken.onymousAudience,
      [lobby.LobbyType.robot]: avatarToken.robotPlayer
    }
  })
  const dispatch = jest.fn()

  store.dispatch = dispatch
  const nextHandler = middleware(store)
  const dispatchAPI = jest.fn()
  const actionHandler = nextHandler(dispatchAPI)
  const action: Transition = {
    type: ActionTypes.App.SHOW_LOBBY_FOR_HUMAN_PLAYER
  }
  const enterLobbyPayload: lobby.Payload$EnterLobby = {
    lobby: lobby.LobbyType.human,
    page: 1,
    token: avatarToken.humanPlayer,
    type: lobby.PayloadType.enterLobby
  }
  const getAvatarPayload: lobby.Payload$GetAvatar = {
    token: avatarToken.humanPlayer,
    type: lobby.PayloadType.getAvatar
  }

  test('validate the JSON of enterLobby', async () => {
    expect.hasAssertions()
    const schemas = await Promise.all([
      LOBBY_SCHEMA.client2server.enterLobby,
      VILLAGE_SCHEMA.avatar
    ].map(
      schema => fetch(schema)
        .then(res => res.json())
    ))
    const ajv = new Ajv({
      schemas
    })
    const validate = ajv.validate(LOBBY_SCHEMA.client2server.enterLobby, enterLobbyPayload)

    if (!validate) {
      console.error(ajv.errors)
    }
    expect(validate).toBe(true)
  })
  test('validate the JSON of getAvatar', async () => {
    expect.hasAssertions()
    const schemas = await Promise.all([
      LOBBY_SCHEMA.client2server.getAvatar,
      VILLAGE_SCHEMA.avatar
    ].map(
      schema => fetch(schema)
        .then(res => res.json())
    ))
    const ajv = new Ajv({
      schemas
    })
    const validate = ajv.validate(LOBBY_SCHEMA.client2server.getAvatar, getAvatarPayload)

    if (!validate) {
      console.error(ajv.errors)
    }
    expect(validate).toBe(true)
  })
  test('dispatch correctly', () => {
    actionHandler(action)
    expect(dispatch).toHaveBeenCalledTimes(2)
    expect(dispatch).toHaveBeenCalledWith({
      payload: enterLobbyPayload,
      type: ActionTypes.Socket.SEND
    })
    expect(dispatch).toHaveBeenCalledWith({
      payload: getAvatarPayload,
      type: ActionTypes.Socket.SEND
    })
  })
})
describe('SHOW_LOBBY_FOR_ROBOT_PLAYER', () => {
  const store = fakeStore({
    token: {
      [lobby.LobbyType.anonymousAudience]: '',
      [lobby.LobbyType.human]: avatarToken.humanPlayer,
      'lobby': lobby.LobbyType.human,
      [lobby.LobbyType.onymousAudience]: avatarToken.onymousAudience,
      [lobby.LobbyType.robot]: avatarToken.robotPlayer
    }
  })
  const dispatch = jest.fn()

  store.dispatch = dispatch
  const nextHandler = middleware(store)
  const dispatchAPI = jest.fn()
  const actionHandler = nextHandler(dispatchAPI)
  const action: Transition = {
    type: ActionTypes.App.SHOW_LOBBY_FOR_ROBOT_PLAYER
  }
  const enterLobbyPayload: lobby.Payload$EnterLobby = {
    lobby: lobby.LobbyType.robot,
    page: 1,
    token: avatarToken.humanPlayer,
    type: lobby.PayloadType.enterLobby
  }
  const getAvatarPayload: lobby.Payload$GetAvatar = {
    token: avatarToken.humanPlayer,
    type: lobby.PayloadType.getAvatar
  }

  test('validate the JSON of enterLobby', async () => {
    expect.hasAssertions()
    const schemas = await Promise.all([
      LOBBY_SCHEMA.client2server.enterLobby,
      VILLAGE_SCHEMA.avatar
    ].map(
      schema => fetch(schema)
        .then(res => res.json())
    ))
    const ajv = new Ajv({
      schemas
    })
    const validate = ajv.validate(LOBBY_SCHEMA.client2server.enterLobby, enterLobbyPayload)

    if (!validate) {
      console.error(ajv.errors)
    }
    expect(validate).toBe(true)
  })
  test('validate the JSON of getAvatar', async () => {
    expect.hasAssertions()
    const schemas = await Promise.all([
      LOBBY_SCHEMA.client2server.getAvatar,
      VILLAGE_SCHEMA.avatar
    ].map(
      schema => fetch(schema)
        .then(res => res.json())
    ))
    const ajv = new Ajv({
      schemas
    })
    const validate = ajv.validate(LOBBY_SCHEMA.client2server.getAvatar, getAvatarPayload)

    if (!validate) {
      console.error(ajv.errors)
    }
    expect(validate).toBe(true)
  })
  test('dispatch correctly', () => {
    actionHandler(action)
    expect(dispatch).toHaveBeenCalledTimes(2)
    expect(dispatch).toHaveBeenCalledWith({
      payload: enterLobbyPayload,
      type: ActionTypes.Socket.SEND
    })
    expect(dispatch).toHaveBeenCalledWith({
      payload: getAvatarPayload,
      type: ActionTypes.Socket.SEND
    })
  })
})
describe('SHOW_SETTINGS', () => {
  const store = fakeStore({
    token: {
      [lobby.LobbyType.anonymousAudience]: '',
      [lobby.LobbyType.human]: avatarToken.humanPlayer,
      'lobby': lobby.LobbyType.human,
      [lobby.LobbyType.onymousAudience]: avatarToken.onymousAudience,
      [lobby.LobbyType.robot]: avatarToken.robotPlayer
    }
  })
  const dispatch = jest.fn()

  store.dispatch = dispatch
  const nextHandler = middleware(store)
  const dispatchAPI = jest.fn()
  const actionHandler = nextHandler(dispatchAPI)
  const action: Transition = {
    type: ActionTypes.App.SHOW_SETTINGS
  }
  const payload = {
    type: 'getSettings'
  }

  test('validate the JSON', async () => {
    expect.hasAssertions()
    const ajv = new Ajv()
    const schema = await fetch(LOBBY_SCHEMA.client2server.getSettings)
      .then(res => res.json())
    const validate = ajv.validate(schema, payload)

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
describe('message/PING', () => {
  const store = fakeStore({
    token: {
      [lobby.LobbyType.anonymousAudience]: '',
      [lobby.LobbyType.human]: avatarToken.humanPlayer,
      'lobby': lobby.LobbyType.human,
      [lobby.LobbyType.onymousAudience]: avatarToken.onymousAudience,
      [lobby.LobbyType.robot]: avatarToken.robotPlayer
    }
  })
  const dispatch = jest.fn()

  store.dispatch = dispatch
  const nextHandler = middleware(store)
  const dispatchAPI = jest.fn()
  const actionHandler = nextHandler(dispatchAPI)
  const pingId = '3F2504E0-4F89-11D3-9A0C-0305E82C3300'
  const pingPayload: lobby.Payload$Ping = {
    id: pingId,
    results: [
      {
        ping: '99.999',
        status: lobby.PingStatus.danger,
        token: '3F2504E0-4F89-11D3-9A0C-0305E82C3301'
      }
    ],
    type: lobby.PayloadType.ping
  }
  const action = message.ping(pingPayload)
  const pongPayload: lobby.Payload$Pong = {
    id: pingId,
    token: avatarToken.humanPlayer,
    type: lobby.PayloadType.pong
  }

  test('validate the JSON of ping', async () => {
    expect.hasAssertions()
    const schemas = await Promise.all([
      LOBBY_SCHEMA.server2client.ping,
      VILLAGE_SCHEMA.avatar
    ].map(
      schema => fetch(schema)
        .then(res => res.json())
    ))
    const ajv = new Ajv({
      schemas
    })
    const validate = ajv.validate(LOBBY_SCHEMA.server2client.ping, pingPayload)

    if (!validate) {
      console.error(ajv.errors)
    }
    expect(validate).toBe(true)
  })
  test('validate the JSON of pong', async () => {
    expect.hasAssertions()
    const schemas = await Promise.all([
      LOBBY_SCHEMA.client2server.pong,
      VILLAGE_SCHEMA.avatar
    ].map(
      schema => fetch(schema)
        .then(res => res.json())
    ))
    const ajv = new Ajv({
      schemas
    })
    const validate = ajv.validate(LOBBY_SCHEMA.client2server.pong, pongPayload)

    if (!validate) {
      console.error(ajv.errors)
    }
    expect(validate).toBe(true)
  })
  test('dispatch correctly', () => {
    actionHandler(action)
    expect(dispatch).toHaveBeenCalledTimes(1)
    expect(dispatch).toHaveBeenCalledWith({
      payload: pongPayload,
      type: ActionTypes.Socket.SEND
    })
  })
})
describe('selectAvatarImage/SELECT_AVATAR', () => {
  const token = '3F2504E0-4F89-11D3-9A0C-0305E82C3301'
  const store = fakeStore({
    avatarImageList: {
      ... avatarImageList,
      lobby: lobby.LobbyType.human,
      token
    }
  })
  const dispatch = jest.fn()

  store.dispatch = dispatch
  const nextHandler = middleware(store)
  const dispatchAPI = jest.fn()
  const actionHandler = nextHandler(dispatchAPI)
  const image = ImagePath.Character.a
  const payload: lobby.Payload$ChangeAvatar = {
    image,
    language: null,
    lobby: lobby.LobbyType.human,
    name: null,
    token,
    type: lobby.PayloadType.changeAvatar
  }
  const action = selectAvatarImage.selectAvatar(image)

  test('validate the JSON', async () => {
    expect.hasAssertions()
    const schemas = await Promise.all([
      LOBBY_SCHEMA.client2server.changeAvatar,
      VILLAGE_SCHEMA.avatar
    ].map(
      schema => fetch(schema)
        .then(res => res.json())
    ))
    const ajv = new Ajv({
      schemas
    })
    const validate = ajv.validate(LOBBY_SCHEMA.client2server.changeAvatar, payload)

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
describe('selectRobotAvatar/AUTHORIZATION_REQUEST_ACCEPTED', () => {
  const store = fakeStore()
  const dispatch = jest.fn()

  store.dispatch = dispatch
  const nextHandler = middleware(store)
  const dispatchAPI = jest.fn()
  const actionHandler = nextHandler(dispatchAPI)
  const accessToken = '3F2504E0-4F89-11D3-9A0C-0305E82C3301'
  const payload: lobby.Payload$AuthorizationRequestAccepted = {
    accessToken,
    type: lobby.PayloadType.authorizationRequestAccepted
  }
  const action = selectRobotAvatar.autorizationRequestAccepted(accessToken)

  test('validate the JSON', async () => {
    expect.hasAssertions()
    const schemas = await Promise.all([
      LOBBY_SCHEMA.client2server.authorizationRequestAccepted,
      VILLAGE_SCHEMA.avatar
    ].map(
      schema => fetch(schema)
        .then(res => res.json())
    ))
    const ajv = new Ajv({
      schemas
    })
    const validate = ajv.validate(LOBBY_SCHEMA.client2server.authorizationRequestAccepted, payload)

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
describe('selectRobotAvatar/CHANGE_AVATAR_IMAGE', () => {
  const store = fakeStore()
  const dispatch = jest.fn()

  store.dispatch = dispatch
  const nextHandler = middleware(store)
  const dispatchAPI = jest.fn()
  const actionHandler = nextHandler(dispatchAPI)
  const image = ImagePath.Character.a
  const token = '3F2504E0-4F89-11D3-9A0C-0305E82C3301'
  const payload: lobby.Payload$ChangeAvatar = {
    image,
    language: null,
    lobby: lobby.LobbyType.robot,
    name: null,
    token,
    type: lobby.PayloadType.changeAvatar
  }
  const action = selectRobotAvatar.changeAvatarImage(token)(image)

  test('validate the JSON', async () => {
    expect.hasAssertions()
    const schemas = await Promise.all([
      LOBBY_SCHEMA.client2server.changeAvatar,
      VILLAGE_SCHEMA.avatar
    ].map(
      schema => fetch(schema)
        .then(res => res.json())
    ))
    const ajv = new Ajv({
      schemas
    })
    const validate = ajv.validate(LOBBY_SCHEMA.client2server.changeAvatar, payload)

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
describe('selectRobotAvatar/CHANGE_AVATAR_LANGUAGE', () => {
  const store = fakeStore()
  const dispatch = jest.fn()

  store.dispatch = dispatch
  const nextHandler = middleware(store)
  const dispatchAPI = jest.fn()
  const actionHandler = nextHandler(dispatchAPI)
  const language = lobby.Language.en
  const token = '3F2504E0-4F89-11D3-9A0C-0305E82C3301'
  const payload: lobby.Payload$ChangeAvatar = {
    image: null,
    language,
    lobby: lobby.LobbyType.robot,
    name: null,
    token,
    type: lobby.PayloadType.changeAvatar
  }
  const action = selectRobotAvatar.changeAvatarLanguage(token)(language)

  test('validate the JSON', async () => {
    expect.hasAssertions()
    const schemas = await Promise.all([
      LOBBY_SCHEMA.client2server.changeAvatar,
      VILLAGE_SCHEMA.avatar
    ].map(
      schema => fetch(schema)
        .then(res => res.json())
    ))
    const ajv = new Ajv({
      schemas
    })
    const validate = ajv.validate(LOBBY_SCHEMA.client2server.changeAvatar, payload)

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
describe('selectRobotAvatar/CHANGE_AVATAR_NAME', () => {
  const store = fakeStore()
  const dispatch = jest.fn()

  store.dispatch = dispatch
  const nextHandler = middleware(store)
  const dispatchAPI = jest.fn()
  const actionHandler = nextHandler(dispatchAPI)
  const name = 'Avatar'
  const token = '3F2504E0-4F89-11D3-9A0C-0305E82C3301'
  const payload: lobby.Payload$ChangeAvatar = {
    image: null,
    language: null,
    lobby: lobby.LobbyType.robot,
    name,
    token,
    type: lobby.PayloadType.changeAvatar
  }
  const action = selectRobotAvatar.changeAvatarName(token)(name)

  test('validate the JSON', async () => {
    expect.hasAssertions()
    const schemas = await Promise.all([
      LOBBY_SCHEMA.client2server.changeAvatar,
      VILLAGE_SCHEMA.avatar
    ].map(
      schema => fetch(schema)
        .then(res => res.json())
    ))
    const ajv = new Ajv({
      schemas
    })
    const validate = ajv.validate(LOBBY_SCHEMA.client2server.changeAvatar, payload)

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
describe('selectRobotAvatar/DELETE', () => {
  const store = fakeStore({
    selectRobotAvatar: {
      avatar: {
        allIds: [
          '3F2504E0-4F89-11D3-9A0C-0305E82C3300',
          '3F2504E0-4F89-11D3-9A0C-0305E82C3301',
          '3F2504E0-4F89-11D3-9A0C-0305E82C3302',
          '3F2504E0-4F89-11D3-9A0C-0305E82C3303',
          '3F2504E0-4F89-11D3-9A0C-0305E82C3304'
        ],
        byId: {
          '3F2504E0-4F89-11D3-9A0C-0305E82C3300': {
            checked: true,
            image: ImagePath.Character.a,
            isAuthorized: false,
            isFullyAutomated: true,
            isHover: false,
            isReadyForAcceptance: false,
            isTestPassed: false,
            language: lobby.Language.en,
            name: 'avatar1',
            status: lobby.AvatarStatus.awaitingAuthorization,
            token: '3F2504E0-4F89-11D3-9A0C-0305E82C3300'
          },
          '3F2504E0-4F89-11D3-9A0C-0305E82C3301': {
            checked: false,
            image: ImagePath.Character.a,
            isAuthorized: true,
            isFullyAutomated: false,
            isHover: false,
            isReadyForAcceptance: false,
            isTestPassed: true,
            language: lobby.Language.en,
            name: 'avatar2',
            status: lobby.AvatarStatus.awaitingCommunicationTest,
            token: '3F2504E0-4F89-11D3-9A0C-0305E82C3301'
          },
          '3F2504E0-4F89-11D3-9A0C-0305E82C3302': {
            checked: true,
            image: ImagePath.Character.a,
            isAuthorized: false,
            isFullyAutomated: false,
            isHover: false,
            isReadyForAcceptance: true,
            isTestPassed: true,
            language: lobby.Language.en,
            name: 'avatar3',
            status: lobby.AvatarStatus.connected,
            token: '3F2504E0-4F89-11D3-9A0C-0305E82C3302'
          },
          '3F2504E0-4F89-11D3-9A0C-0305E82C3303': {
            checked: false,
            image: ImagePath.Character.a,
            isAuthorized: false,
            isFullyAutomated: false,
            isHover: false,
            isReadyForAcceptance: true,
            isTestPassed: true,
            language: lobby.Language.en,
            name: 'avatar4',
            status: lobby.AvatarStatus.runningInTheBackground,
            token: '3F2504E0-4F89-11D3-9A0C-0305E82C3303'
          },
          '3F2504E0-4F89-11D3-9A0C-0305E82C3304': {
            checked: false,
            image: ImagePath.Character.a,
            isAuthorized: false,
            isFullyAutomated: false,
            isHover: false,
            isReadyForAcceptance: true,
            isTestPassed: true,
            language: lobby.Language.en,
            name: 'avatar5',
            status: lobby.AvatarStatus.runningInTheForeground,
            token: '3F2504E0-4F89-11D3-9A0C-0305E82C3304'
          }
        }
      },
      command: [],
      menuItems: []
    }
  })
  const dispatch = jest.fn()

  store.dispatch = dispatch
  const nextHandler = middleware(store)
  const dispatchAPI = jest.fn()
  const actionHandler = nextHandler(dispatchAPI)
  const token = [
    '3F2504E0-4F89-11D3-9A0C-0305E82C3300',
    '3F2504E0-4F89-11D3-9A0C-0305E82C3302'
  ]
  const payload: lobby.Payload$DeleteAvatar = {
    lobby: lobby.LobbyType.robot,
    token,
    type: lobby.PayloadType.deleteAvatar
  }
  const action = selectRobotAvatar.deleteAvatar()

  test('validate the JSON', async () => {
    expect.hasAssertions()
    const schemas = await Promise.all([
      LOBBY_SCHEMA.client2server.deleteAvatar,
      VILLAGE_SCHEMA.avatar
    ].map(
      schema => fetch(schema)
        .then(res => res.json())
    ))
    const ajv = new Ajv({
      schemas
    })
    const validate = ajv.validate(LOBBY_SCHEMA.client2server.deleteAvatar, payload)

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
describe('selectRobotAvatar/RENEW_AVATAR_TOKEN', () => {
  const store = fakeStore()
  const dispatch = jest.fn()

  store.dispatch = dispatch
  const nextHandler = middleware(store)
  const dispatchAPI = jest.fn()
  const actionHandler = nextHandler(dispatchAPI)
  const token = '3F2504E0-4F89-11D3-9A0C-0305E82C3301'
  const payload: lobby.Payload$RenewAvatarToken = {
    lobby: lobby.LobbyType.robot,
    token,
    type: lobby.PayloadType.renewAvatarToken
  }
  const action = selectRobotAvatar.renewAvatarToken(token)

  test('validate the JSON', async () => {
    expect.hasAssertions()
    const schemas = await Promise.all([
      LOBBY_SCHEMA.client2server.renewAvatarToken,
      VILLAGE_SCHEMA.avatar
    ].map(
      schema => fetch(schema)
        .then(res => res.json())
    ))
    const ajv = new Ajv({
      schemas
    })
    const validate = ajv.validate(LOBBY_SCHEMA.client2server.renewAvatarToken, payload)

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
describe('selectRobotAvatar/RUN_IN_THE_BACKGROUND', () => {
  const store = fakeStore({
    selectRobotAvatar: {
      avatar: {
        allIds: [
          '3F2504E0-4F89-11D3-9A0C-0305E82C3300',
          '3F2504E0-4F89-11D3-9A0C-0305E82C3301',
          '3F2504E0-4F89-11D3-9A0C-0305E82C3302',
          '3F2504E0-4F89-11D3-9A0C-0305E82C3303',
          '3F2504E0-4F89-11D3-9A0C-0305E82C3304'
        ],
        byId: {
          '3F2504E0-4F89-11D3-9A0C-0305E82C3300': {
            checked: true,
            image: ImagePath.Character.a,
            isAuthorized: false,
            isFullyAutomated: true,
            isHover: false,
            isReadyForAcceptance: false,
            isTestPassed: false,
            language: lobby.Language.en,
            name: 'avatar1',
            status: lobby.AvatarStatus.awaitingAuthorization,
            token: '3F2504E0-4F89-11D3-9A0C-0305E82C3300'
          },
          '3F2504E0-4F89-11D3-9A0C-0305E82C3301': {
            checked: false,
            image: ImagePath.Character.a,
            isAuthorized: true,
            isFullyAutomated: false,
            isHover: false,
            isReadyForAcceptance: false,
            isTestPassed: true,
            language: lobby.Language.en,
            name: 'avatar2',
            status: lobby.AvatarStatus.awaitingCommunicationTest,
            token: '3F2504E0-4F89-11D3-9A0C-0305E82C3301'
          },
          '3F2504E0-4F89-11D3-9A0C-0305E82C3302': {
            checked: true,
            image: ImagePath.Character.a,
            isAuthorized: false,
            isFullyAutomated: false,
            isHover: false,
            isReadyForAcceptance: true,
            isTestPassed: true,
            language: lobby.Language.en,
            name: 'avatar3',
            status: lobby.AvatarStatus.connected,
            token: '3F2504E0-4F89-11D3-9A0C-0305E82C3302'
          },
          '3F2504E0-4F89-11D3-9A0C-0305E82C3303': {
            checked: false,
            image: ImagePath.Character.a,
            isAuthorized: false,
            isFullyAutomated: false,
            isHover: false,
            isReadyForAcceptance: true,
            isTestPassed: true,
            language: lobby.Language.en,
            name: 'avatar4',
            status: lobby.AvatarStatus.runningInTheBackground,
            token: '3F2504E0-4F89-11D3-9A0C-0305E82C3303'
          },
          '3F2504E0-4F89-11D3-9A0C-0305E82C3304': {
            checked: false,
            image: ImagePath.Character.a,
            isAuthorized: false,
            isFullyAutomated: false,
            isHover: false,
            isReadyForAcceptance: true,
            isTestPassed: true,
            language: lobby.Language.en,
            name: 'avatar5',
            status: lobby.AvatarStatus.runningInTheForeground,
            token: '3F2504E0-4F89-11D3-9A0C-0305E82C3304'
          }
        }
      },
      command: [],
      menuItems: []
    }
  })
  const dispatch = jest.fn()

  store.dispatch = dispatch
  const nextHandler = middleware(store)
  const dispatchAPI = jest.fn()
  const actionHandler = nextHandler(dispatchAPI)
  const token = [
    '3F2504E0-4F89-11D3-9A0C-0305E82C3300',
    '3F2504E0-4F89-11D3-9A0C-0305E82C3302'
  ]
  const payload: lobby.Payload$RunRobotPlayerInTheBackground = {
    token,
    type: lobby.PayloadType.runRobotPlayerInTheBackground
  }
  const action = selectRobotAvatar.runInTheBackground()

  test('validate the JSON', async () => {
    expect.hasAssertions()
    const schemas = await Promise.all([
      LOBBY_SCHEMA.client2server.runRobotPlayerInTheBackground,
      VILLAGE_SCHEMA.avatar
    ].map(
      schema => fetch(schema)
        .then(res => res.json())
    ))
    const ajv = new Ajv({
      schemas
    })
    const validate = ajv.validate(LOBBY_SCHEMA.client2server.runRobotPlayerInTheBackground, payload)

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
describe('selectRobotAvatar/STOP', () => {
  const store = fakeStore({
    selectRobotAvatar: {
      avatar: {
        allIds: [
          '3F2504E0-4F89-11D3-9A0C-0305E82C3300',
          '3F2504E0-4F89-11D3-9A0C-0305E82C3301',
          '3F2504E0-4F89-11D3-9A0C-0305E82C3302',
          '3F2504E0-4F89-11D3-9A0C-0305E82C3303',
          '3F2504E0-4F89-11D3-9A0C-0305E82C3304'
        ],
        byId: {
          '3F2504E0-4F89-11D3-9A0C-0305E82C3300': {
            checked: true,
            image: ImagePath.Character.a,
            isAuthorized: false,
            isFullyAutomated: true,
            isHover: false,
            isReadyForAcceptance: false,
            isTestPassed: false,
            language: lobby.Language.en,
            name: 'avatar1',
            status: lobby.AvatarStatus.awaitingAuthorization,
            token: '3F2504E0-4F89-11D3-9A0C-0305E82C3300'
          },
          '3F2504E0-4F89-11D3-9A0C-0305E82C3301': {
            checked: false,
            image: ImagePath.Character.a,
            isAuthorized: true,
            isFullyAutomated: false,
            isHover: false,
            isReadyForAcceptance: false,
            isTestPassed: true,
            language: lobby.Language.en,
            name: 'avatar2',
            status: lobby.AvatarStatus.awaitingCommunicationTest,
            token: '3F2504E0-4F89-11D3-9A0C-0305E82C3301'
          },
          '3F2504E0-4F89-11D3-9A0C-0305E82C3302': {
            checked: true,
            image: ImagePath.Character.a,
            isAuthorized: false,
            isFullyAutomated: false,
            isHover: false,
            isReadyForAcceptance: true,
            isTestPassed: true,
            language: lobby.Language.en,
            name: 'avatar3',
            status: lobby.AvatarStatus.connected,
            token: '3F2504E0-4F89-11D3-9A0C-0305E82C3302'
          },
          '3F2504E0-4F89-11D3-9A0C-0305E82C3303': {
            checked: false,
            image: ImagePath.Character.a,
            isAuthorized: false,
            isFullyAutomated: false,
            isHover: false,
            isReadyForAcceptance: true,
            isTestPassed: true,
            language: lobby.Language.en,
            name: 'avatar4',
            status: lobby.AvatarStatus.runningInTheBackground,
            token: '3F2504E0-4F89-11D3-9A0C-0305E82C3303'
          },
          '3F2504E0-4F89-11D3-9A0C-0305E82C3304': {
            checked: false,
            image: ImagePath.Character.a,
            isAuthorized: false,
            isFullyAutomated: false,
            isHover: false,
            isReadyForAcceptance: true,
            isTestPassed: true,
            language: lobby.Language.en,
            name: 'avatar5',
            status: lobby.AvatarStatus.runningInTheForeground,
            token: '3F2504E0-4F89-11D3-9A0C-0305E82C3304'
          }
        }
      },
      command: [],
      menuItems: []
    }
  })
  const dispatch = jest.fn()

  store.dispatch = dispatch
  const nextHandler = middleware(store)
  const dispatchAPI = jest.fn()
  const actionHandler = nextHandler(dispatchAPI)
  const token = [
    '3F2504E0-4F89-11D3-9A0C-0305E82C3300',
    '3F2504E0-4F89-11D3-9A0C-0305E82C3302'
  ]
  const payload: lobby.Payload$StopRobotPlayer = {
    token,
    type: lobby.PayloadType.stopRobotPlayer
  }
  const action = selectRobotAvatar.stopAvatar(token)

  test('validate the JSON', async () => {
    expect.hasAssertions()
    const schemas = await Promise.all([
      LOBBY_SCHEMA.client2server.stopRobotPlayer,
      VILLAGE_SCHEMA.avatar
    ].map(
      schema => fetch(schema)
        .then(res => res.json())
    ))
    const ajv = new Ajv({
      schemas
    })
    const validate = ajv.validate(LOBBY_SCHEMA.client2server.stopRobotPlayer, payload)

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

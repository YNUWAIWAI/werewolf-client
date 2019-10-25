import * as ActionTypes from '../constants/ActionTypes'
import {
  ChangeLanguage,
  ChangeUserEmail,
  ChangeUserName,
  ChangeUserPassword,
  KickOutPlayer,
  SelectVillage,
  SocketMessage
} from '../actions'
import Ajv from 'ajv'
import {VERSION} from '../constants/Version'
import {initialState as advancedSearch} from '../reducers/advancedSearch'
import {initialState as buildVillage} from '../reducers/buildVillage'
import fakeStore from '../containers/fakeStore'
import fetch from 'node-fetch'
import {getCastFromNumberOfPlayers} from '../util'
import {initialState as idSearch} from '../reducers/idSearch'
import {lobby} from '../types'
import middleware from './client2server'

const BASE_URI = `https://werewolf.world/lobby/schema/${VERSION}`
const CLIENT2SERVER = `${BASE_URI}/client2server`
const SERVER2CLIENT = `${BASE_URI}/server2client`
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
        'human player': avatarToken.humanPlayer,
        'lobby': lobby.Lobby.human,
        'onymous audience': avatarToken.onymousAudience,
        'robot player': avatarToken.robotPlayer
      }
    })
    const dispatch = jest.fn()

    store.dispatch = dispatch
    const nextHandler = middleware(store)
    const dispatchAPI = jest.fn()
    const actionHandler = nextHandler(dispatchAPI)
    const action = {
      type: ActionTypes.Target.ADVANCED_SEARCH
    }
    const advancedSearchPayload = {
      ... value,
      lobby: lobby.Lobby.human,
      token: avatarToken.humanPlayer,
      type: 'advancedSearch'
    }

    test('validate the JSON of advancedSearch', async () => {
      expect.hasAssertions()
      const ajv = new Ajv()
      const schema = await fetch(`${CLIENT2SERVER}/advancedSearch.json`)
        .then(res => res.json())
      const validate = ajv.validate(schema, advancedSearchPayload)

      if (!validate) {
        console.error(ajv.errors)
      }
      expect(validate).toBe(true)
    })
    test('dispatch correctly', () => {
      actionHandler(action)
      expect(dispatch).toHaveBeenCalledTimes(1)
      expect(dispatch).toHaveBeenCalledWith({
        payload: advancedSearchPayload,
        type: ActionTypes.socket.SEND
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
        'human player': avatarToken.humanPlayer,
        'lobby': lobby.Lobby.human,
        'onymous audience': avatarToken.onymousAudience,
        'robot player': avatarToken.robotPlayer
      }
    })
    const dispatch = jest.fn()

    store.dispatch = dispatch
    const nextHandler = middleware(store)
    const dispatchAPI = jest.fn()
    const actionHandler = nextHandler(dispatchAPI)
    const action = {
      type: ActionTypes.Target.ADVANCED_SEARCH
    }
    const advancedSearchPayload = {
      avatar: 'random',
      comment: null,
      hostName: null,
      lobby: 'human player',
      maximum: null,
      minimum: null,
      token: avatarToken.humanPlayer,
      type: 'advancedSearch',
      villageName: null
    }

    test('validate the JSON of advancedSearch', async () => {
      expect.hasAssertions()
      const ajv = new Ajv()
      const schema = await fetch(`${CLIENT2SERVER}/advancedSearch.json`)
        .then(res => res.json())
      const validate = ajv.validate(schema, advancedSearchPayload)

      if (!validate) {
        console.error(ajv.errors)
      }
      expect(validate).toBe(true)
    })
    test('dispatch correctly', () => {
      actionHandler(action)
      expect(dispatch).toHaveBeenCalledTimes(1)
      expect(dispatch).toHaveBeenCalledWith({
        payload: advancedSearchPayload,
        type: ActionTypes.socket.SEND
      })
    })
  })
})
describe('BUILD_VILLAGE', () => {
  const store = fakeStore({
    token: {
      'human player': avatarToken.humanPlayer,
      'lobby': lobby.Lobby.human,
      'onymous audience': avatarToken.onymousAudience,
      'robot player': avatarToken.robotPlayer
    }
  })
  const dispatch = jest.fn()

  store.dispatch = dispatch
  const nextHandler = middleware(store)
  const dispatchAPI = jest.fn()
  const actionHandler = nextHandler(dispatchAPI)
  const action = {
    type: ActionTypes.Target.BUILD_VILLAGE
  }
  const buildVillagePayload = {
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
    type: 'buildVillage'
  }

  test('validate the JSON of buildVillage', async () => {
    expect.hasAssertions()
    const ajv = new Ajv()
    const schema = await fetch(`${CLIENT2SERVER}/buildVillage.json`)
      .then(res => res.json())
    const validate = ajv.validate(schema, buildVillagePayload)

    if (!validate) {
      console.error(ajv.errors)
    }
    expect(validate).toBe(true)
  })
  test('dispatch correctly', () => {
    actionHandler(action)
    expect(dispatch).toHaveBeenCalledTimes(1)
    expect(dispatch).toHaveBeenCalledWith({
      payload: buildVillagePayload,
      type: ActionTypes.socket.SEND
    })
  })
})
describe('CHANGE_LANGUAGE', () => {
  const store = fakeStore({
    token: {
      'human player': avatarToken.humanPlayer,
      'lobby': lobby.Lobby.human,
      'onymous audience': avatarToken.onymousAudience,
      'robot player': avatarToken.robotPlayer
    }
  })
  const dispatch = jest.fn()

  store.dispatch = dispatch
  const nextHandler = middleware(store)
  const dispatchAPI = jest.fn()
  const actionHandler = nextHandler(dispatchAPI)
  const action: ChangeLanguage = {
    language: lobby.Language.ja,
    type: ActionTypes.global.CHANGE_LANGUAGE
  }
  const changeLangPayload = {
    lang: 'ja',
    type: 'changeLang'
  }

  test('validate the JSON', async () => {
    expect.hasAssertions()
    const ajv = new Ajv()
    const schema = await fetch(`${CLIENT2SERVER}/changeLang.json`)
      .then(res => res.json())
    const validate = ajv.validate(schema, changeLangPayload)

    if (!validate) {
      console.error(ajv.errors)
    }
    expect(validate).toBe(true)
  })
  test('dispatch correctly', () => {
    actionHandler(action)
    expect(dispatch).toHaveBeenCalledTimes(1)
    expect(dispatch).toHaveBeenCalledWith({
      payload: changeLangPayload,
      type: ActionTypes.socket.SEND
    })
  })
})
describe('CHANGE_USER_EMAIL', () => {
  const store = fakeStore({
    token: {
      'human player': avatarToken.humanPlayer,
      'lobby': lobby.Lobby.human,
      'onymous audience': avatarToken.onymousAudience,
      'robot player': avatarToken.robotPlayer
    }
  })
  const dispatch = jest.fn()

  store.dispatch = dispatch
  const nextHandler = middleware(store)
  const dispatchAPI = jest.fn()
  const actionHandler = nextHandler(dispatchAPI)
  const action: ChangeUserEmail = {
    type: ActionTypes.global.CHANGE_USER_EMAIL,
    userEmail: 'example@example.com'
  }
  const changeUserEmailPayload = {
    type: 'changeUserEmail',
    userEmail: 'example@example.com'
  }

  test('validate the JSON', async () => {
    expect.hasAssertions()
    const ajv = new Ajv()
    const schema = await fetch(`${CLIENT2SERVER}/changeUserEmail.json`)
      .then(res => res.json())
    const validate = ajv.validate(schema, changeUserEmailPayload)

    if (!validate) {
      console.error(ajv.errors)
    }
    expect(validate).toBe(true)
  })
  test('dispatch correctly', () => {
    actionHandler(action)
    expect(dispatch).toHaveBeenCalledTimes(1)
    expect(dispatch).toHaveBeenCalledWith({
      payload: changeUserEmailPayload,
      type: ActionTypes.socket.SEND
    })
  })
})
describe('CHANGE_USER_NAME', () => {
  const store = fakeStore({
    token: {
      'human player': avatarToken.humanPlayer,
      'lobby': lobby.Lobby.human,
      'onymous audience': avatarToken.onymousAudience,
      'robot player': avatarToken.robotPlayer
    }
  })
  const dispatch = jest.fn()

  store.dispatch = dispatch
  const nextHandler = middleware(store)
  const dispatchAPI = jest.fn()
  const actionHandler = nextHandler(dispatchAPI)
  const action: ChangeUserName = {
    type: ActionTypes.global.CHANGE_USER_NAME,
    userName: 'userName'
  }
  const changeUserNamePayload = {
    type: 'changeUserName',
    userName: 'userName'
  }

  test('validate the JSON', async () => {
    expect.hasAssertions()
    const ajv = new Ajv()
    const schema = await fetch(`${CLIENT2SERVER}/changeUserName.json`)
      .then(res => res.json())
    const validate = ajv.validate(schema, changeUserNamePayload)

    if (!validate) {
      console.error(ajv.errors)
    }
    expect(validate).toBe(true)
  })
  test('dispatch correctly', () => {
    actionHandler(action)
    expect(dispatch).toHaveBeenCalledTimes(1)
    expect(dispatch).toHaveBeenCalledWith({
      payload: changeUserNamePayload,
      type: ActionTypes.socket.SEND
    })
  })
})
describe('CHANGE_USER_PASSWORD', () => {
  const store = fakeStore({
    token: {
      'human player': avatarToken.humanPlayer,
      'lobby': lobby.Lobby.human,
      'onymous audience': avatarToken.onymousAudience,
      'robot player': avatarToken.robotPlayer
    }
  })
  const dispatch = jest.fn()

  store.dispatch = dispatch
  const nextHandler = middleware(store)
  const dispatchAPI = jest.fn()
  const actionHandler = nextHandler(dispatchAPI)
  const action: ChangeUserPassword = {
    type: ActionTypes.global.CHANGE_USER_PASSWORD,
    userPassword: 'userPassword'
  }
  const changeUserPasswordPayload = {
    type: 'changeUserPassword',
    userPassword: 'userPassword'
  }

  test('validate the JSON', async () => {
    expect.hasAssertions()
    const ajv = new Ajv()
    const schema = await fetch(`${CLIENT2SERVER}/changeUserPassword.json`)
      .then(res => res.json())
    const validate = ajv.validate(schema, changeUserPasswordPayload)

    if (!validate) {
      console.error(ajv.errors)
    }
    expect(validate).toBe(true)
  })
  test('dispatch correctly', () => {
    actionHandler(action)
    expect(dispatch).toHaveBeenCalledTimes(1)
    expect(dispatch).toHaveBeenCalledWith({
      payload: changeUserPasswordPayload,
      type: ActionTypes.socket.SEND
    })
  })
})
describe('KICK_OUT_PLAYER', () => {
  const token = '3F2504E0-4F89-11D3-9A0C-0305E82C3301'
  const store = fakeStore({
    token: {
      'human player': avatarToken.humanPlayer,
      'lobby': lobby.Lobby.human,
      'onymous audience': avatarToken.onymousAudience,
      'robot player': avatarToken.robotPlayer
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
    type: ActionTypes.global.KICK_OUT_PLAYER
  }
  const kickOutPlayerPayload = {
    players: [
      {
        token
      }
    ],
    token: avatarToken.humanPlayer,
    type: 'kickOutPlayer'
  }

  test('validate the JSON of kickOutPlayer', async () => {
    expect.hasAssertions()
    const ajv = new Ajv()
    const schema = await fetch(`${CLIENT2SERVER}/kickOutPlayer.json`)
      .then(res => res.json())
    const validate = ajv.validate(schema, kickOutPlayerPayload)

    if (!validate) {
      console.error(ajv.errors)
    }
    expect(validate).toBe(true)
  })
  test('dispatch correctly', () => {
    actionHandler(action)
    expect(dispatch).toHaveBeenCalledTimes(1)
    expect(dispatch).toHaveBeenCalledWith({
      payload: kickOutPlayerPayload,
      type: ActionTypes.socket.SEND
    })
  })
})
describe('LEAVE_WAITING_PAGE', () => {
  const token = '3F2504E0-4F89-11D3-9A0C-0305E82C3303'
  const villageId = 1
  const store = fakeStore({
    token: {
      'human player': avatarToken.humanPlayer,
      'lobby': lobby.Lobby.human,
      'onymous audience': avatarToken.onymousAudience,
      'robot player': avatarToken.robotPlayer
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
  const action = {
    type: ActionTypes.Target.LEAVE_WAITING_PAGE
  }
  const leaveWaitingPagePayload = {
    lobby: 'human player',
    token,
    type: 'leaveWaitingPage',
    villageId
  }

  test('validate the JSON of leaveWaitingPage', async () => {
    expect.hasAssertions()
    const ajv = new Ajv()
    const schema = await fetch(`${CLIENT2SERVER}/leaveWaitingPage.json`)
      .then(res => res.json())
    const validate = ajv.validate(schema, leaveWaitingPagePayload)

    if (!validate) {
      console.error(ajv.errors)
    }
    expect(validate).toBe(true)
  })
  test('dispatch correctly', () => {
    actionHandler(action)
    expect(dispatch).toHaveBeenCalledTimes(1)
    expect(dispatch).toHaveBeenCalledWith({
      payload: leaveWaitingPagePayload,
      type: ActionTypes.socket.SEND
    })
  })
})
describe('PLAY_GAME', () => {
  const token = '3F2504E0-4F89-11D3-9A0C-0305E82C3303'
  const villageId = 1
  const store = fakeStore({
    token: {
      'human player': avatarToken.humanPlayer,
      'lobby': lobby.Lobby.human,
      'onymous audience': avatarToken.onymousAudience,
      'robot player': avatarToken.robotPlayer
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
  const action = {
    type: ActionTypes.Target.PLAY_GAME
  }
  const playPayload = {
    token: avatarToken.humanPlayer,
    type: 'play',
    villageId
  }

  test('validate the JSON of play', async () => {
    expect.hasAssertions()
    const ajv = new Ajv()
    const schema = await fetch(`${CLIENT2SERVER}/play.json`)
      .then(res => res.json())
    const validate = ajv.validate(schema, playPayload)

    if (!validate) {
      console.error(ajv.errors)
    }
    expect(validate).toBe(true)
  })
  test('dispatch correctly', () => {
    actionHandler(action)
    expect(dispatch).toHaveBeenCalledTimes(1)
    expect(dispatch).toHaveBeenCalledWith({
      payload: playPayload,
      type: ActionTypes.socket.SEND
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
      'human player': avatarToken.humanPlayer,
      'lobby': lobby.Lobby.human,
      'onymous audience': avatarToken.onymousAudience,
      'robot player': avatarToken.robotPlayer
    }
  })
  const dispatch = jest.fn()

  store.dispatch = dispatch
  const nextHandler = middleware(store)
  const dispatchAPI = jest.fn()
  const actionHandler = nextHandler(dispatchAPI)
  const action = {
    type: ActionTypes.Target.ID_SEARCH
  }
  const idSearchPayload = {
    idForSearching,
    lobby: 'human player',
    token: avatarToken.humanPlayer,
    type: 'idSearch'
  }

  test('validate the JSON of idSearch', async () => {
    expect.hasAssertions()
    const ajv = new Ajv()
    const schema = await fetch(`${CLIENT2SERVER}/idSearch.json`)
      .then(res => res.json())
    const validate = ajv.validate(schema, idSearchPayload)

    if (!validate) {
      console.error(ajv.errors)
    }
    expect(validate).toBe(true)
  })
  test('dispatch correctly', () => {
    actionHandler(action)
    expect(dispatch).toHaveBeenCalledTimes(1)
    expect(dispatch).toHaveBeenCalledWith({
      payload: idSearchPayload,
      type: ActionTypes.socket.SEND
    })
  })
})
describe('ID_SEARCH invalid id(=-1)', () => {
  const store = fakeStore({
    token: {
      'human player': avatarToken.humanPlayer,
      'lobby': lobby.Lobby.human,
      'onymous audience': avatarToken.onymousAudience,
      'robot player': avatarToken.robotPlayer
    }
  })
  const dispatch = jest.fn()

  store.dispatch = dispatch
  const nextHandler = middleware(store)
  const dispatchAPI = jest.fn()
  const actionHandler = nextHandler(dispatchAPI)
  const action = {
    type: ActionTypes.Target.ID_SEARCH
  }

  test('dispatch correctly', () => {
    actionHandler(action)
    expect(dispatch).toHaveBeenCalledTimes(0)
  })
})
describe('SELECT_VILLAGE', () => {
  const store = fakeStore({
    token: {
      'human player': avatarToken.humanPlayer,
      'lobby': lobby.Lobby.human,
      'onymous audience': avatarToken.onymousAudience,
      'robot player': avatarToken.robotPlayer
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
    type: ActionTypes.global.SELECT_VILLAGE
  }
  const payload = {
    token: avatarToken.humanPlayer,
    type: 'selectVillage',
    villageId
  }

  test('validate the JSON of selectVillage', async () => {
    expect.hasAssertions()
    const ajv = new Ajv()
    const schema = await fetch(`${CLIENT2SERVER}/selectVillage.json`)
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
      type: ActionTypes.socket.SEND
    })
  })
})
describe('SHOW_LOBBY_FOR_AUDIENCE', () => {
  const store = fakeStore({
    token: {
      'human player': avatarToken.humanPlayer,
      'lobby': lobby.Lobby.human,
      'onymous audience': avatarToken.onymousAudience,
      'robot player': avatarToken.robotPlayer
    }
  })
  const dispatch = jest.fn()

  store.dispatch = dispatch
  const nextHandler = middleware(store)
  const dispatchAPI = jest.fn()
  const actionHandler = nextHandler(dispatchAPI)
  const action = {
    type: ActionTypes.Target.SHOW_LOBBY_FOR_AUDIENCE
  }
  const enterLobbyPayload = {
    lobby: 'onymous audience',
    page: 1,
    token: avatarToken.humanPlayer,
    type: 'enterLobby'
  }
  const getAvatarPayload = {
    token: avatarToken.humanPlayer,
    type: 'getAvatar'
  }

  test('validate the JSON of enterLobby', async () => {
    expect.hasAssertions()
    const ajv = new Ajv()
    const schema = await fetch(`${CLIENT2SERVER}/enterLobby.json`)
      .then(res => res.json())
    const validate = ajv.validate(schema, enterLobbyPayload)

    if (!validate) {
      console.error(ajv.errors)
    }
    expect(validate).toBe(true)
  })
  test('validate the JSON of getAvatar', async () => {
    expect.hasAssertions()
    const ajv = new Ajv()
    const schema = await fetch(`${CLIENT2SERVER}/getAvatar.json`)
      .then(res => res.json())
    const validate = ajv.validate(schema, getAvatarPayload)

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
      type: ActionTypes.socket.SEND
    })
    expect(dispatch).toHaveBeenCalledWith({
      payload: getAvatarPayload,
      type: ActionTypes.socket.SEND
    })
  })
})
describe('SHOW_LOBBY_FOR_HUMAN_PLAYER', () => {
  const store = fakeStore({
    token: {
      'human player': avatarToken.humanPlayer,
      'lobby': lobby.Lobby.human,
      'onymous audience': avatarToken.onymousAudience,
      'robot player': avatarToken.robotPlayer
    }
  })
  const dispatch = jest.fn()

  store.dispatch = dispatch
  const nextHandler = middleware(store)
  const dispatchAPI = jest.fn()
  const actionHandler = nextHandler(dispatchAPI)
  const action = {
    type: ActionTypes.Target.SHOW_LOBBY_FOR_HUMAN_PLAYER
  }
  const enterLobbyPayload = {
    lobby: lobby.Lobby.human,
    page: 1,
    token: avatarToken.humanPlayer,
    type: 'enterLobby'
  }
  const getAvatarPayload = {
    token: avatarToken.humanPlayer,
    type: 'getAvatar'
  }

  test('validate the JSON of enterLobby', async () => {
    expect.hasAssertions()
    const ajv = new Ajv()
    const schema = await fetch(`${CLIENT2SERVER}/enterLobby.json`)
      .then(res => res.json())
    const validate = ajv.validate(schema, enterLobbyPayload)

    if (!validate) {
      console.error(ajv.errors)
    }
    expect(validate).toBe(true)
  })
  test('validate the JSON of getAvatar', async () => {
    expect.hasAssertions()
    const ajv = new Ajv()
    const schema = await fetch(`${CLIENT2SERVER}/getAvatar.json`)
      .then(res => res.json())
    const validate = ajv.validate(schema, getAvatarPayload)

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
      type: ActionTypes.socket.SEND
    })
    expect(dispatch).toHaveBeenCalledWith({
      payload: getAvatarPayload,
      type: ActionTypes.socket.SEND
    })
  })
})
describe('SHOW_LOBBY_FOR_ROBOT_PLAYER', () => {
  const store = fakeStore({
    token: {
      'human player': avatarToken.humanPlayer,
      'lobby': lobby.Lobby.human,
      'onymous audience': avatarToken.onymousAudience,
      'robot player': avatarToken.robotPlayer
    }
  })
  const dispatch = jest.fn()

  store.dispatch = dispatch
  const nextHandler = middleware(store)
  const dispatchAPI = jest.fn()
  const actionHandler = nextHandler(dispatchAPI)
  const action = {
    type: ActionTypes.Target.SHOW_LOBBY_FOR_ROBOT_PLAYER
  }
  const enterLobbyPayload = {
    lobby: 'robot player',
    page: 1,
    token: avatarToken.humanPlayer,
    type: 'enterLobby'
  }
  const getAvatarPayload = {
    token: avatarToken.humanPlayer,
    type: 'getAvatar'
  }

  test('validate the JSON of enterLobby', async () => {
    expect.hasAssertions()
    const ajv = new Ajv()
    const schema = await fetch(`${CLIENT2SERVER}/enterLobby.json`)
      .then(res => res.json())
    const validate = ajv.validate(schema, enterLobbyPayload)

    if (!validate) {
      console.error(ajv.errors)
    }
    expect(validate).toBe(true)
  })
  test('validate the JSON of getAvatar', async () => {
    expect.hasAssertions()
    const ajv = new Ajv()
    const schema = await fetch(`${CLIENT2SERVER}/getAvatar.json`)
      .then(res => res.json())
    const validate = ajv.validate(schema, getAvatarPayload)

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
      type: ActionTypes.socket.SEND
    })
    expect(dispatch).toHaveBeenCalledWith({
      payload: getAvatarPayload,
      type: ActionTypes.socket.SEND
    })
  })
})
describe('SHOW_SETTINGS', () => {
  const store = fakeStore({
    token: {
      'human player': avatarToken.humanPlayer,
      'lobby': lobby.Lobby.human,
      'onymous audience': avatarToken.onymousAudience,
      'robot player': avatarToken.robotPlayer
    }
  })
  const dispatch = jest.fn()

  store.dispatch = dispatch
  const nextHandler = middleware(store)
  const dispatchAPI = jest.fn()
  const actionHandler = nextHandler(dispatchAPI)
  const action = {
    type: ActionTypes.Target.SHOW_SETTINGS
  }
  const payload = {
    type: 'getSettings'
  }

  test('validate the JSON', async () => {
    expect.hasAssertions()
    const ajv = new Ajv()
    const schema = await fetch(`${CLIENT2SERVER}/getSettings.json`)
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
      type: ActionTypes.socket.SEND
    })
  })
})
describe('socket/MESSAGE tyoe: "ping"', () => {
  const store = fakeStore({
    token: {
      'human player': avatarToken.humanPlayer,
      'lobby': lobby.Lobby.human,
      'onymous audience': avatarToken.onymousAudience,
      'robot player': avatarToken.robotPlayer
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
        ping: '99.999 s',
        status: lobby.PingStatus.danger,
        token: '3F2504E0-4F89-11D3-9A0C-0305E82C3301'
      }
    ],
    type: lobby.PayloadType.ping
  }
  const action: SocketMessage = {
    payload: pingPayload,
    type: ActionTypes.socket.MESSAGE
  }
  const pongPayload = {
    id: pingId,
    token: avatarToken.humanPlayer,
    type: 'pong'
  }

  test('validate the JSON of ping', async () => {
    expect.hasAssertions()
    const ajv = new Ajv()
    const schema = await fetch(`${SERVER2CLIENT}/ping.json`)
      .then(res => res.json())
    const validate = ajv.validate(schema, pingPayload)

    if (!validate) {
      console.error(ajv.errors)
    }
    expect(validate).toBe(true)
  })
  test('validate the JSON of pong', async () => {
    expect.hasAssertions()
    const ajv = new Ajv()
    const schema = await fetch(`${CLIENT2SERVER}/pong.json`)
      .then(res => res.json())
    const validate = ajv.validate(schema, pongPayload)

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
      type: ActionTypes.socket.SEND
    })
  })
})

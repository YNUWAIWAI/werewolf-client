// @flow
import * as ActionTypes from '../constants/ActionTypes'
import Ajv from 'ajv'
import {VERSION} from '../constants/Version'
import {initialState as advancedSearch} from '../reducers/advancedSearch'
import {initialState as app} from '../reducers/app'
import {initialState as buildVillage} from '../reducers/buildVillage'
import {initialState as connectingToRobotPlayer} from '../reducers/connectingToRobotPlayer'
import fetch from 'node-fetch'
import {getCastFromNumberOfPlayers} from '../constants/Cast'
import {initialState as history} from '../reducers/history'
import {initialState as idSearch} from '../reducers/idSearch'
import {initialState as language} from '../reducers/language'
import {initialState as lobbyForAudience} from '../reducers/lobbyForAudience'
import {initialState as lobbyForHumanPlayer} from '../reducers/lobbyForHumanPlayer'
import {initialState as lobbyForRobotPlayer} from '../reducers/lobbyForRobotPlayer'
import {initialState as main} from '../reducers/main'
import middleware from './client2server'
import {initialState as ping} from '../reducers/ping'
import {initialState as settings} from '../reducers/settings'
import {initialState as waitingForPlayers} from '../reducers/waitingForPlayers'

const BASE_URI = `https://werewolf.world/lobby/schema/${VERSION}`
const CLIENT2SERVER = `${BASE_URI}/client2server`
const SERVER2CLIENT = `${BASE_URI}/server2client`
const avatarToken = {
  humanPlayer: '3F2504E0-4F89-11D3-9A0C-0305E82C3310',
  onymousAudience: '3F2504E0-4F89-11D3-9A0C-0305E82C3311',
  robotPlayer: '3F2504E0-4F89-11D3-9A0C-0305E82C3312'
}
const ajv = new Ajv()

describe('ADVANCED_SEARCH', () => {
  describe('validity: true', () => {
    const dispatch = jest.fn()
    const value = {
      avatar: 'fixed',
      comment: 'Beginners are welcome',
      hostName: 'Alice',
      maximum: 15,
      minimum: 5,
      villageName: 'Alice\'s Village'
    }
    const getState = () => ({
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
      app,
      buildVillage,
      connectingToRobotPlayer,
      history,
      idSearch,
      language,
      lobbyForAudience,
      lobbyForHumanPlayer,
      lobbyForRobotPlayer,
      main,
      ping,
      settings,
      token: {
        'human player': avatarToken.humanPlayer,
        'lobby': 'human player',
        'onymous audience': avatarToken.onymousAudience,
        'robot player': avatarToken.robotPlayer
      },
      waitingForPlayers
    })
    const nextHandler = middleware({
      dispatch,
      getState
    })
    const dispatchAPI = jest.fn()
    const actionHandler = nextHandler(dispatchAPI)
    const action = {
      type: ActionTypes.ADVANCED_SEARCH
    }
    const advancedSearchPayload = {
      ... value,
      lobby: 'human player',
      token: avatarToken.humanPlayer,
      type: 'advancedSearch'
    }

    test('validate the JSON of advancedSearch', async () => {
      expect.hasAssertions()
      await fetch(`${CLIENT2SERVER}/advancedSearch.json`)
        .then(res => res.json())
        .then(schema => {
          const validate = ajv.validate(schema, advancedSearchPayload)

          expect(validate).toBe(true)
        })
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
    const dispatch = jest.fn()
    const getState = () => ({
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
      app,
      buildVillage,
      connectingToRobotPlayer,
      history,
      idSearch,
      language,
      lobbyForAudience,
      lobbyForHumanPlayer,
      lobbyForRobotPlayer,
      main,
      ping,
      settings,
      token: {
        'human player': avatarToken.humanPlayer,
        'lobby': 'human player',
        'onymous audience': avatarToken.onymousAudience,
        'robot player': avatarToken.robotPlayer
      },
      waitingForPlayers
    })
    const nextHandler = middleware({
      dispatch,
      getState
    })
    const dispatchAPI = jest.fn()
    const actionHandler = nextHandler(dispatchAPI)
    const action = {
      type: ActionTypes.ADVANCED_SEARCH
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
      await fetch(`${CLIENT2SERVER}/advancedSearch.json`)
        .then(res => res.json())
        .then(schema => {
          const validate = ajv.validate(schema, advancedSearchPayload)

          expect(validate).toBe(true)
        })
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
  const dispatch = jest.fn()
  const getState = () => ({
    advancedSearch,
    app,
    buildVillage,
    connectingToRobotPlayer,
    history,
    idSearch,
    language,
    lobbyForAudience,
    lobbyForHumanPlayer,
    lobbyForRobotPlayer,
    main,
    ping,
    settings,
    token: {
      'human player': avatarToken.humanPlayer,
      'lobby': 'human player',
      'onymous audience': avatarToken.onymousAudience,
      'robot player': avatarToken.robotPlayer
    },
    waitingForPlayers
  })
  const nextHandler = middleware({
    dispatch,
    getState
  })
  const dispatchAPI = jest.fn()
  const actionHandler = nextHandler(dispatchAPI)
  const action = {
    type: ActionTypes.BUILD_VILLAGE
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
    await fetch(`${CLIENT2SERVER}/buildVillage.json`)
      .then(res => res.json())
      .then(schema => {
        const validate = ajv.validate(schema, buildVillagePayload)

        expect(validate).toBe(true)
      })
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
  const dispatch = jest.fn()
  const getState = () => ({
    advancedSearch,
    app,
    buildVillage,
    connectingToRobotPlayer,
    history,
    idSearch,
    language,
    lobbyForAudience,
    lobbyForHumanPlayer,
    lobbyForRobotPlayer,
    main,
    ping,
    settings,
    token: {
      'human player': avatarToken.humanPlayer,
      'lobby': 'human player',
      'onymous audience': avatarToken.onymousAudience,
      'robot player': avatarToken.robotPlayer
    },
    waitingForPlayers
  })
  const nextHandler = middleware({
    dispatch,
    getState
  })
  const dispatchAPI = jest.fn()
  const actionHandler = nextHandler(dispatchAPI)
  const action = {
    language: 'ja',
    type: ActionTypes.CHANGE_LANGUAGE
  }
  const changeLangPayload = {
    lang: 'ja',
    type: 'changeLang'
  }

  test('validate the JSON', async () => {
    expect.hasAssertions()
    await fetch(`${CLIENT2SERVER}/changeLang.json`)
      .then(res => res.json())
      .then(schema => {
        const validate = ajv.validate(schema, changeLangPayload)

        expect(validate).toBe(true)
      })
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
  const dispatch = jest.fn()
  const getState = () => ({
    advancedSearch,
    app,
    buildVillage,
    connectingToRobotPlayer,
    history,
    idSearch,
    language,
    lobbyForAudience,
    lobbyForHumanPlayer,
    lobbyForRobotPlayer,
    main,
    ping,
    settings,
    token: {
      'human player': avatarToken.humanPlayer,
      'lobby': 'human player',
      'onymous audience': avatarToken.onymousAudience,
      'robot player': avatarToken.robotPlayer
    },
    waitingForPlayers
  })
  const nextHandler = middleware({
    dispatch,
    getState
  })
  const dispatchAPI = jest.fn()
  const actionHandler = nextHandler(dispatchAPI)
  const action = {
    type: ActionTypes.CHANGE_USER_EMAIL,
    userEmail: 'example@example.com'
  }
  const changeUserEmailPayload = {
    type: 'changeUserEmail',
    userEmail: 'example@example.com'
  }

  test('validate the JSON', async () => {
    expect.hasAssertions()
    await fetch(`${CLIENT2SERVER}/changeUserEmail.json`)
      .then(res => res.json())
      .then(schema => {
        const validate = ajv.validate(schema, changeUserEmailPayload)

        expect(validate).toBe(true)
      })
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
  const dispatch = jest.fn()
  const getState = () => ({
    advancedSearch,
    app,
    buildVillage,
    connectingToRobotPlayer,
    history,
    idSearch,
    language,
    lobbyForAudience,
    lobbyForHumanPlayer,
    lobbyForRobotPlayer,
    main,
    ping,
    settings,
    token: {
      'human player': avatarToken.humanPlayer,
      'lobby': 'human player',
      'onymous audience': avatarToken.onymousAudience,
      'robot player': avatarToken.robotPlayer
    },
    waitingForPlayers
  })
  const nextHandler = middleware({
    dispatch,
    getState
  })
  const dispatchAPI = jest.fn()
  const actionHandler = nextHandler(dispatchAPI)
  const action = {
    type: ActionTypes.CHANGE_USER_NAME,
    userName: 'userName'
  }
  const changeUserNamePayload = {
    type: 'changeUserName',
    userName: 'userName'
  }

  test('validate the JSON', async () => {
    expect.hasAssertions()
    await fetch(`${CLIENT2SERVER}/changeUserName.json`)
      .then(res => res.json())
      .then(schema => {
        const validate = ajv.validate(schema, changeUserNamePayload)

        expect(validate).toBe(true)
      })
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
  const dispatch = jest.fn()
  const getState = () => ({
    advancedSearch,
    app,
    buildVillage,
    connectingToRobotPlayer,
    history,
    idSearch,
    language,
    lobbyForAudience,
    lobbyForHumanPlayer,
    lobbyForRobotPlayer,
    main,
    ping,
    settings,
    token: {
      'human player': avatarToken.humanPlayer,
      'lobby': 'human player',
      'onymous audience': avatarToken.onymousAudience,
      'robot player': avatarToken.robotPlayer
    },
    waitingForPlayers
  })
  const nextHandler = middleware({
    dispatch,
    getState
  })
  const dispatchAPI = jest.fn()
  const actionHandler = nextHandler(dispatchAPI)
  const action = {
    type: ActionTypes.CHANGE_USER_PASSWORD,
    userPassword: 'userPassword'
  }
  const changeUserPasswordPayload = {
    type: 'changeUserPassword',
    userPassword: 'userPassword'
  }

  test('validate the JSON', async () => {
    expect.hasAssertions()
    await fetch(`${CLIENT2SERVER}/changeUserPassword.json`)
      .then(res => res.json())
      .then(schema => {
        const validate = ajv.validate(schema, changeUserPasswordPayload)

        expect(validate).toBe(true)
      })
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
  const dispatch = jest.fn()
  const getState = () => ({
    advancedSearch,
    app,
    buildVillage,
    connectingToRobotPlayer,
    history,
    idSearch,
    language,
    lobbyForAudience,
    lobbyForHumanPlayer,
    lobbyForRobotPlayer,
    main,
    ping,
    settings,
    token: {
      'human player': avatarToken.humanPlayer,
      'lobby': 'human player',
      'onymous audience': avatarToken.onymousAudience,
      'robot player': avatarToken.robotPlayer
    },
    waitingForPlayers
  })
  const nextHandler = middleware({
    dispatch,
    getState
  })
  const dispatchAPI = jest.fn()
  const actionHandler = nextHandler(dispatchAPI)
  const token = '3F2504E0-4F89-11D3-9A0C-0305E82C3301'
  const action = {
    token,
    type: ActionTypes.KICK_OUT_PLAYER
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
    await fetch(`${CLIENT2SERVER}/kickOutPlayer.json`)
      .then(res => res.json())
      .then(schema => {
        const validate = ajv.validate(schema, kickOutPlayerPayload)

        expect(validate).toBe(true)
      })
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
  const dispatch = jest.fn()
  const token = '3F2504E0-4F89-11D3-9A0C-0305E82C3303'
  const villageId = 1
  const getState = () => ({
    advancedSearch,
    app,
    buildVillage,
    connectingToRobotPlayer,
    history,
    idSearch,
    language,
    lobbyForAudience,
    lobbyForHumanPlayer,
    lobbyForRobotPlayer,
    main,
    ping,
    settings,
    token: {
      'human player': avatarToken.humanPlayer,
      'lobby': 'human player',
      'onymous audience': avatarToken.onymousAudience,
      'robot player': avatarToken.robotPlayer
    },
    waitingForPlayers: {
      isPlayer: true,
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
        avatar: 'random',
        comment: 'Experts recommended',
        hostPlayer: {
          isAnonymous: true,
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
  const nextHandler = middleware({
    dispatch,
    getState
  })
  const dispatchAPI = jest.fn()
  const actionHandler = nextHandler(dispatchAPI)
  const action = {
    type: ActionTypes.LEAVE_WAITING_PAGE
  }
  const leaveWaitingPagePayload = {
    lobby: 'human player',
    token,
    type: 'leaveWaitingPage',
    villageId
  }

  test('validate the JSON of leaveWaitingPage', async () => {
    expect.hasAssertions()
    await fetch(`${CLIENT2SERVER}/leaveWaitingPage.json`)
      .then(res => res.json())
      .then(schema => {
        const validate = ajv.validate(schema, leaveWaitingPagePayload)

        expect(validate).toBe(true)
      })
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
  const dispatch = jest.fn()
  const token = '3F2504E0-4F89-11D3-9A0C-0305E82C3303'
  const villageId = 1
  const getState = () => ({
    advancedSearch,
    app,
    buildVillage,
    connectingToRobotPlayer,
    history,
    idSearch,
    language,
    lobbyForAudience,
    lobbyForHumanPlayer,
    lobbyForRobotPlayer,
    main,
    ping,
    settings,
    token: {
      'human player': avatarToken.humanPlayer,
      'lobby': 'human player',
      'onymous audience': avatarToken.onymousAudience,
      'robot player': avatarToken.robotPlayer
    },
    waitingForPlayers: {
      isPlayer: true,
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
        avatar: 'random',
        comment: 'Experts recommended',
        hostPlayer: {
          isAnonymous: true,
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
  const nextHandler = middleware({
    dispatch,
    getState
  })
  const dispatchAPI = jest.fn()
  const actionHandler = nextHandler(dispatchAPI)
  const action = {
    type: ActionTypes.PLAY_GAME
  }
  const playPayload = {
    token: avatarToken.humanPlayer,
    type: 'play',
    villageId
  }

  test('validate the JSON of play', async () => {
    expect.hasAssertions()
    await fetch(`${CLIENT2SERVER}/play.json`)
      .then(res => res.json())
      .then(schema => {
        const validate = ajv.validate(schema, playPayload)

        expect(validate).toBe(true)
      })
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
  const dispatch = jest.fn()
  const idForSearching = 123
  const getState = () => ({
    advancedSearch,
    app,
    buildVillage,
    connectingToRobotPlayer,
    history,
    idSearch: {
      ... idSearch,
      id: idForSearching
    },
    language,
    lobbyForAudience,
    lobbyForHumanPlayer,
    lobbyForRobotPlayer,
    main,
    ping,
    settings,
    token: {
      'human player': avatarToken.humanPlayer,
      'lobby': 'human player',
      'onymous audience': avatarToken.onymousAudience,
      'robot player': avatarToken.robotPlayer
    },
    waitingForPlayers
  })
  const nextHandler = middleware({
    dispatch,
    getState
  })
  const dispatchAPI = jest.fn()
  const actionHandler = nextHandler(dispatchAPI)
  const action = {
    type: ActionTypes.ID_SEARCH
  }
  const idSearchPayload = {
    idForSearching,
    lobby: 'human player',
    token: avatarToken.humanPlayer,
    type: 'idSearch'
  }

  test('validate the JSON of idSearch', async () => {
    expect.hasAssertions()
    await fetch(`${CLIENT2SERVER}/idSearch.json`)
      .then(res => res.json())
      .then(schema => {
        const validate = ajv.validate(schema, idSearchPayload)

        expect(validate).toBe(true)
      })
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
  const dispatch = jest.fn()
  const getState = () => ({
    advancedSearch,
    app,
    buildVillage,
    connectingToRobotPlayer,
    history,
    idSearch,
    language,
    lobbyForAudience,
    lobbyForHumanPlayer,
    lobbyForRobotPlayer,
    main,
    ping,
    settings,
    token: {
      'human player': avatarToken.humanPlayer,
      'lobby': 'human player',
      'onymous audience': avatarToken.onymousAudience,
      'robot player': avatarToken.robotPlayer
    },
    waitingForPlayers
  })
  const nextHandler = middleware({
    dispatch,
    getState
  })
  const dispatchAPI = jest.fn()
  const actionHandler = nextHandler(dispatchAPI)
  const action = {
    type: ActionTypes.ID_SEARCH
  }

  test('dispatch correctly', () => {
    actionHandler(action)
    expect(dispatch).toHaveBeenCalledTimes(0)
  })
})
describe('SELECT_VILLAGE', () => {
  const dispatch = jest.fn()
  const getState = () => ({
    advancedSearch,
    app,
    buildVillage,
    connectingToRobotPlayer,
    history,
    idSearch,
    language,
    lobbyForAudience,
    lobbyForHumanPlayer,
    lobbyForRobotPlayer,
    main,
    ping,
    settings,
    token: {
      'human player': avatarToken.humanPlayer,
      'lobby': 'human player',
      'onymous audience': avatarToken.onymousAudience,
      'robot player': avatarToken.robotPlayer
    },
    waitingForPlayers
  })
  const nextHandler = middleware({
    dispatch,
    getState
  })
  const dispatchAPI = jest.fn()
  const actionHandler = nextHandler(dispatchAPI)
  const villageId = 1
  const action = {
    id: villageId,
    type: ActionTypes.SELECT_VILLAGE
  }
  const selectVillagePayload = {
    token: avatarToken.humanPlayer,
    type: 'selectVillage',
    villageId
  }

  test('validate the JSON of selectVillage', async () => {
    expect.hasAssertions()
    await fetch(`${CLIENT2SERVER}/selectVillage.json`)
      .then(res => res.json())
      .then(schema => {
        const validate = ajv.validate(schema, selectVillagePayload)

        expect(validate).toBe(true)
      })
  })
  test('dispatch correctly', () => {
    actionHandler(action)
    expect(dispatch).toHaveBeenCalledTimes(1)
    expect(dispatch).toHaveBeenCalledWith({
      payload: selectVillagePayload,
      type: ActionTypes.socket.SEND
    })
  })
})
describe('SHOW_LOBBY_FOR_AUDIENCE', () => {
  const dispatch = jest.fn()
  const getState = () => ({
    advancedSearch,
    app,
    buildVillage,
    connectingToRobotPlayer,
    history,
    idSearch,
    language,
    lobbyForAudience,
    lobbyForHumanPlayer,
    lobbyForRobotPlayer,
    main,
    ping,
    settings,
    token: {
      'human player': avatarToken.humanPlayer,
      'lobby': 'human player',
      'onymous audience': avatarToken.onymousAudience,
      'robot player': avatarToken.robotPlayer
    },
    waitingForPlayers
  })
  const nextHandler = middleware({
    dispatch,
    getState
  })
  const dispatchAPI = jest.fn()
  const actionHandler = nextHandler(dispatchAPI)
  const action = {
    type: ActionTypes.SHOW_LOBBY_FOR_AUDIENCE
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
    await fetch(`${CLIENT2SERVER}/enterLobby.json`)
      .then(res => res.json())
      .then(schema => {
        const validate = ajv.validate(schema, enterLobbyPayload)

        expect(validate).toBe(true)
      })
  })
  test('validate the JSON of getAvatar', async () => {
    expect.hasAssertions()
    await fetch(`${CLIENT2SERVER}/getAvatar.json`)
      .then(res => res.json())
      .then(schema => {
        const validate = ajv.validate(schema, getAvatarPayload)

        expect(validate).toBe(true)
      })
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
  const dispatch = jest.fn()
  const getState = () => ({
    advancedSearch,
    app,
    buildVillage,
    connectingToRobotPlayer,
    history,
    idSearch,
    language,
    lobbyForAudience,
    lobbyForHumanPlayer,
    lobbyForRobotPlayer,
    main,
    ping,
    settings,
    token: {
      'human player': avatarToken.humanPlayer,
      'lobby': 'human player',
      'onymous audience': avatarToken.onymousAudience,
      'robot player': avatarToken.robotPlayer
    },
    waitingForPlayers
  })
  const nextHandler = middleware({
    dispatch,
    getState
  })
  const dispatchAPI = jest.fn()
  const actionHandler = nextHandler(dispatchAPI)
  const action = {
    type: ActionTypes.SHOW_LOBBY_FOR_HUMAN_PLAYER
  }
  const enterLobbyPayload = {
    lobby: 'human player',
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
    await fetch(`${CLIENT2SERVER}/enterLobby.json`)
      .then(res => res.json())
      .then(schema => {
        const validate = ajv.validate(schema, enterLobbyPayload)

        expect(validate).toBe(true)
      })
  })
  test('validate the JSON of getAvatar', async () => {
    expect.hasAssertions()
    await fetch(`${CLIENT2SERVER}/getAvatar.json`)
      .then(res => res.json())
      .then(schema => {
        const validate = ajv.validate(schema, getAvatarPayload)

        expect(validate).toBe(true)
      })
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
  const dispatch = jest.fn()
  const getState = () => ({
    advancedSearch,
    app,
    buildVillage,
    connectingToRobotPlayer,
    history,
    idSearch,
    language,
    lobbyForAudience,
    lobbyForHumanPlayer,
    lobbyForRobotPlayer,
    main,
    ping,
    settings,
    token: {
      'human player': avatarToken.humanPlayer,
      'lobby': 'human player',
      'onymous audience': avatarToken.onymousAudience,
      'robot player': avatarToken.robotPlayer
    },
    waitingForPlayers
  })
  const nextHandler = middleware({
    dispatch,
    getState
  })
  const dispatchAPI = jest.fn()
  const actionHandler = nextHandler(dispatchAPI)
  const action = {
    type: ActionTypes.SHOW_LOBBY_FOR_ROBOT_PLAYER
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
    await fetch(`${CLIENT2SERVER}/enterLobby.json`)
      .then(res => res.json())
      .then(schema => {
        const validate = ajv.validate(schema, enterLobbyPayload)

        expect(validate).toBe(true)
      })
  })
  test('validate the JSON of getAvatar', async () => {
    expect.hasAssertions()
    await fetch(`${CLIENT2SERVER}/getAvatar.json`)
      .then(res => res.json())
      .then(schema => {
        const validate = ajv.validate(schema, getAvatarPayload)

        expect(validate).toBe(true)
      })
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
  const dispatch = jest.fn()
  const getState = () => ({
    advancedSearch,
    app,
    buildVillage,
    connectingToRobotPlayer,
    history,
    idSearch,
    language,
    lobbyForAudience,
    lobbyForHumanPlayer,
    lobbyForRobotPlayer,
    main,
    ping,
    settings,
    token: {
      'human player': avatarToken.humanPlayer,
      'lobby': 'human player',
      'onymous audience': avatarToken.onymousAudience,
      'robot player': avatarToken.robotPlayer
    },
    waitingForPlayers
  })
  const nextHandler = middleware({
    dispatch,
    getState
  })
  const dispatchAPI = jest.fn()
  const actionHandler = nextHandler(dispatchAPI)
  const action = {
    type: ActionTypes.SHOW_SETTINGS
  }
  const getSettingsPayload = {
    type: 'getSettings'
  }

  test('validate the JSON', async () => {
    expect.hasAssertions()
    await fetch(`${CLIENT2SERVER}/getSettings.json`)
      .then(res => res.json())
      .then(schema => {
        const validate = ajv.validate(schema, getSettingsPayload)

        expect(validate).toBe(true)
      })
  })
  test('dispatch correctly', () => {
    actionHandler(action)
    expect(dispatch).toHaveBeenCalledTimes(1)
    expect(dispatch).toHaveBeenCalledWith({
      payload: getSettingsPayload,
      type: ActionTypes.socket.SEND
    })
  })
})
describe('socket/MESSAGE tyoe: "ping"', () => {
  const dispatch = jest.fn()
  const getState = () => ({
    advancedSearch,
    app,
    buildVillage,
    connectingToRobotPlayer,
    history,
    idSearch,
    language,
    lobbyForAudience,
    lobbyForHumanPlayer,
    lobbyForRobotPlayer,
    main,
    ping,
    settings,
    token: {
      'human player': avatarToken.humanPlayer,
      'lobby': 'human player',
      'onymous audience': avatarToken.onymousAudience,
      'robot player': avatarToken.robotPlayer
    },
    waitingForPlayers
  })
  const nextHandler = middleware({
    dispatch,
    getState
  })
  const dispatchAPI = jest.fn()
  const actionHandler = nextHandler(dispatchAPI)
  const pingId = '3F2504E0-4F89-11D3-9A0C-0305E82C3300'
  const action = {
    payload: {
      error: null,
      id: pingId,
      results: [
        {
          ping: '99.999 s',
          status: 'danger',
          token: '3F2504E0-4F89-11D3-9A0C-0305E82C3301'
        }
      ],
      type: 'ping'
    },
    type: ActionTypes.socket.MESSAGE
  }
  const pongPayload = {
    id: pingId,
    token: avatarToken.humanPlayer,
    type: 'pong'
  }

  test('validate the JSON of ping', async () => {
    expect.hasAssertions()
    await fetch(`${SERVER2CLIENT}/ping.json`)
      .then(res => res.json())
      .then(schema => {
        const validate = ajv.validate(schema, action.payload)

        expect(validate).toBe(true)
      })
  })
  test('validate the JSON of pong', async () => {
    expect.hasAssertions()
    await fetch(`${CLIENT2SERVER}/pong.json`)
      .then(res => res.json())
      .then(schema => {
        const validate = ajv.validate(schema, pongPayload)

        expect(validate).toBe(true)
      })
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

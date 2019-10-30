import * as ActionTypes from '../../src/scripts/lobby/constants/ActionTypes'
import * as React from 'react'
import WaitingForPlayers, {Props} from '../../src/scripts/lobby/components/templates/WaitingForPlayers'
import {ImagePath} from '../../src/scripts/lobby/constants/ImagePath'
import IntlProvider from '../../src/scripts/lobby/containers/IntlProviderContainer'
import {Provider} from 'react-redux'
import {action} from '@storybook/addon-actions'
import {createStore} from 'redux'
import {language} from './language'
import {lobby} from './types'
import {radios} from '@storybook/addon-knobs'
import reducer from '../../src/scripts/lobby/reducers'
import {storiesOf} from '@storybook/react'

const players: Props['players'] = [
  {
    avatarImage: ImagePath.Character.anonymous,
    canKickOut: false,
    isAnonymous: true,
    isHost: true,
    isMe: false,
    name: 'Anonymous',
    ping: '99.999 s',
    pingStatus: lobby.PingStatus.danger,
    token: '3F2504E0-4F89-11D3-9A0C-0305E82C3301'
  },
  {
    avatarImage: ImagePath.Character.r,
    canKickOut: false,
    isAnonymous: false,
    isHost: false,
    isMe: true,
    name: 'Ryan',
    ping: '2.000 s',
    pingStatus: lobby.PingStatus.warning,
    token: '3F2504E0-4F89-11D3-9A0C-0305E82C3302'
  },
  {
    avatarImage: ImagePath.Character.anonymous,
    canKickOut: false,
    isAnonymous: true,
    isHost: false,
    isMe: false,
    name: 'Anonymous',
    ping: '0.500 s',
    pingStatus: lobby.PingStatus.safe,
    token: '3F2504E0-4F89-11D3-9A0C-0305E82C3303'
  },
  {
    avatarImage: ImagePath.Character.anonymous,
    canKickOut: false,
    isAnonymous: true,
    isHost: false,
    isMe: false,
    name: 'Anonymous',
    ping: '99.999 s',
    pingStatus: lobby.PingStatus.danger,
    token: '3F2504E0-4F89-11D3-9A0C-0305E82C3304'
  },
  {
    avatarImage: ImagePath.Character.anonymous,
    canKickOut: false,
    isAnonymous: true,
    isHost: false,
    isMe: false,
    name: 'Anonymous',
    ping: '99.999 s',
    pingStatus: lobby.PingStatus.danger,
    token: '3F2504E0-4F89-11D3-9A0C-0305E82C3305'
  },
  {
    avatarImage: ImagePath.Character.anonymous,
    canKickOut: false,
    isAnonymous: true,
    isHost: false,
    isMe: false,
    name: 'Anonymous',
    ping: '99.999 s',
    pingStatus: lobby.PingStatus.danger,
    token: '3F2504E0-4F89-11D3-9A0C-0305E82C3306'
  },
  {
    avatarImage: ImagePath.Character.anonymous,
    canKickOut: false,
    isAnonymous: true,
    isHost: false,
    isMe: false,
    name: 'Anonymous',
    ping: '99.999 s',
    pingStatus: lobby.PingStatus.danger,
    token: '3F2504E0-4F89-11D3-9A0C-0305E82C3307'
  },
  {
    avatarImage: ImagePath.Character.anonymous,
    canKickOut: false,
    isAnonymous: true,
    isHost: false,
    isMe: false,
    name: 'Anonymous',
    ping: '99.999 s',
    pingStatus: lobby.PingStatus.danger,
    token: '3F2504E0-4F89-11D3-9A0C-0305E82C3308'
  },
  {
    avatarImage: ImagePath.Character.anonymous,
    canKickOut: false,
    isAnonymous: true,
    isHost: false,
    isMe: false,
    name: 'Anonymous',
    ping: '99.999 s',
    pingStatus: lobby.PingStatus.danger,
    token: '3F2504E0-4F89-11D3-9A0C-0305E82C3309'
  },
  {
    avatarImage: ImagePath.Character.anonymous,
    canKickOut: false,
    isAnonymous: true,
    isHost: false,
    isMe: false,
    name: 'Anonymous',
    ping: '99.999 s',
    pingStatus: lobby.PingStatus.danger,
    token: '3F2504E0-4F89-11D3-9A0C-0305E82C3310'
  },
  {
    avatarImage: ImagePath.Character.anonymous,
    canKickOut: false,
    isAnonymous: true,
    isHost: false,
    isMe: false,
    name: 'Anonymous',
    ping: '99.999 s',
    pingStatus: lobby.PingStatus.danger,
    token: '3F2504E0-4F89-11D3-9A0C-0305E82C3311'
  },
  {
    avatarImage: ImagePath.Character.anonymous,
    canKickOut: false,
    isAnonymous: true,
    isHost: false,
    isMe: false,
    name: 'Anonymous',
    ping: '99.999 s',
    pingStatus: lobby.PingStatus.danger,
    token: '3F2504E0-4F89-11D3-9A0C-0305E82C3312'
  },
  {
    avatarImage: ImagePath.Character.anonymous,
    canKickOut: false,
    isAnonymous: true,
    isHost: false,
    isMe: false,
    name: 'Anonymous',
    ping: '99.999 s',
    pingStatus: lobby.PingStatus.danger,
    token: '3F2504E0-4F89-11D3-9A0C-0305E82C3313'
  },
  {
    avatarImage: ImagePath.Character.anonymous,
    canKickOut: false,
    isAnonymous: true,
    isHost: false,
    isMe: false,
    name: 'Anonymous',
    ping: '99.999 s',
    pingStatus: lobby.PingStatus.danger,
    token: '3F2504E0-4F89-11D3-9A0C-0305E82C3314'
  },
  {
    avatarImage: ImagePath.Character.anonymous,
    canKickOut: false,
    isAnonymous: true,
    isHost: false,
    isMe: false,
    name: 'Anonymous',
    ping: '99.999 s',
    pingStatus: lobby.PingStatus.danger,
    token: '3F2504E0-4F89-11D3-9A0C-0305E82C3315'
  }
]

storiesOf('lobby|WaitingForPlayers', module)
  .add('15 players', () => {
    const confirmKickOutPlayer = (values: {name: string, token: lobby.Token}) => () => {
      action(`kick out ${values.name},${values.token}`)
    }
    const transition = () => {
      action('transition')
    }
    const menuItems = [
      {
        disabled: true,
        id: 'Menu.playGame',
        types: [ActionTypes.Target.PLAY_GAME]
      },
      {
        id: 'Menu.returnToLobbyForHumanPlayer',
        types: [ActionTypes.Target.LEAVE_WAITING_PAGE, ActionTypes.Target.SHOW_LOBBY_FOR_HUMAN_PLAYER]
      },
      {
        id: 'Menu.returnToMainPage',
        types: [ActionTypes.Target.LEAVE_WAITING_PAGE, ActionTypes.Target.SHOW_MAIN]
      }
    ]
    const village: Props['village'] = {
      avatar: lobby.Avatar.random,
      comment: 'Experts recommended',
      hostPlayer: {
        isAnonymous: true,
        isHuman: true,
        name: 'Anonymous'
      },
      id: 1,
      idForSearching: 123,
      name: 'Fearwick',
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
    const store = createStore(
      reducer,
      {
        language: radios(language.label, language.options, language.defaultValue)
      }
    )
    const story =
      <Provider store={store}>
        <IntlProvider>
          <WaitingForPlayers
            confirmKickOutPlayer={confirmKickOutPlayer}
            isPlayer
            menuItems={menuItems}
            players={players}
            transition={transition}
            village={village}
          />
        </IntlProvider>
      </Provider>

    return story
  })
  .add('14 players', () => {
    const confirmKickOutPlayer = (values: {name: string, token: lobby.Token}) => () => {
      action(`kick out ${values.name},${values.token}`)
    }
    const transition = () => {
      action('transition')
    }
    const menuItems = [
      {
        disabled: true,
        id: 'Menu.playGame',
        types: [ActionTypes.Target.PLAY_GAME]
      },
      {
        id: 'Menu.returnToLobbyForHumanPlayer',
        types: [ActionTypes.Target.LEAVE_WAITING_PAGE, ActionTypes.Target.SHOW_LOBBY_FOR_HUMAN_PLAYER]
      },
      {
        id: 'Menu.returnToMainPage',
        types: [ActionTypes.Target.LEAVE_WAITING_PAGE, ActionTypes.Target.SHOW_MAIN]
      }
    ]
    const village: Props['village'] = {
      avatar: lobby.Avatar.random,
      comment: 'Experts recommended',
      hostPlayer: {
        isAnonymous: true,
        isHuman: true,
        name: 'Anonymous'
      },
      id: 1,
      idForSearching: 123,
      name: 'Fearwick',
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
    const store = createStore(
      reducer,
      {
        language: radios(language.label, language.options, language.defaultValue)
      }
    )
    const story =
      <Provider store={store}>
        <IntlProvider>
          <WaitingForPlayers
            confirmKickOutPlayer={confirmKickOutPlayer}
            isPlayer
            menuItems={menuItems}
            players={players.slice(0, 14)}
            transition={transition}
            village={village}
          />
        </IntlProvider>
      </Provider>

    return story
  })
  .add('13 players', () => {
    const confirmKickOutPlayer = (values: {name: string, token: lobby.Token}) => () => {
      action(`kick out ${values.name},${values.token}`)
    }
    const transition = () => {
      action('transition')
    }
    const menuItems = [
      {
        disabled: true,
        id: 'Menu.playGame',
        types: [ActionTypes.Target.PLAY_GAME]
      },
      {
        id: 'Menu.returnToLobbyForHumanPlayer',
        types: [ActionTypes.Target.LEAVE_WAITING_PAGE, ActionTypes.Target.SHOW_LOBBY_FOR_HUMAN_PLAYER]
      },
      {
        id: 'Menu.returnToMainPage',
        types: [ActionTypes.Target.LEAVE_WAITING_PAGE, ActionTypes.Target.SHOW_MAIN]
      }
    ]
    const village: Props['village'] = {
      avatar: lobby.Avatar.random,
      comment: 'Experts recommended',
      hostPlayer: {
        isAnonymous: true,
        isHuman: true,
        name: 'Anonymous'
      },
      id: 1,
      idForSearching: 123,
      name: 'Fearwick',
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
    const store = createStore(
      reducer,
      {
        language: radios(language.label, language.options, language.defaultValue)
      }
    )
    const story =
      <Provider store={store}>
        <IntlProvider>
          <WaitingForPlayers
            confirmKickOutPlayer={confirmKickOutPlayer}
            isPlayer
            menuItems={menuItems}
            players={players.slice(0, 13)}
            transition={transition}
            village={village}
          />
        </IntlProvider>
      </Provider>

    return story
  })
  .add('12 players', () => {
    const confirmKickOutPlayer = (values: {name: string, token: lobby.Token}) => () => {
      action(`kick out ${values.name},${values.token}`)
    }
    const transition = () => {
      action('transition')
    }
    const menuItems = [
      {
        disabled: true,
        id: 'Menu.playGame',
        types: [ActionTypes.Target.PLAY_GAME]
      },
      {
        id: 'Menu.returnToLobbyForHumanPlayer',
        types: [ActionTypes.Target.LEAVE_WAITING_PAGE, ActionTypes.Target.SHOW_LOBBY_FOR_HUMAN_PLAYER]
      },
      {
        id: 'Menu.returnToMainPage',
        types: [ActionTypes.Target.LEAVE_WAITING_PAGE, ActionTypes.Target.SHOW_MAIN]
      }
    ]
    const village: Props['village'] = {
      avatar: lobby.Avatar.random,
      comment: 'Experts recommended',
      hostPlayer: {
        isAnonymous: true,
        isHuman: true,
        name: 'Anonymous'
      },
      id: 1,
      idForSearching: 123,
      name: 'Fearwick',
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
    const store = createStore(
      reducer,
      {
        language: radios(language.label, language.options, language.defaultValue)
      }
    )
    const story =
      <Provider store={store}>
        <IntlProvider>
          <WaitingForPlayers
            confirmKickOutPlayer={confirmKickOutPlayer}
            isPlayer
            menuItems={menuItems}
            players={players.slice(0, 12)}
            transition={transition}
            village={village}
          />
        </IntlProvider>
      </Provider>

    return story
  })
  .add('11 players', () => {
    const confirmKickOutPlayer = (values: {name: string, token: lobby.Token}) => () => {
      action(`kick out ${values.name},${values.token}`)
    }
    const transition = () => {
      action('transition')
    }
    const menuItems = [
      {
        disabled: true,
        id: 'Menu.playGame',
        types: [ActionTypes.Target.PLAY_GAME]
      },
      {
        id: 'Menu.returnToLobbyForHumanPlayer',
        types: [ActionTypes.Target.LEAVE_WAITING_PAGE, ActionTypes.Target.SHOW_LOBBY_FOR_HUMAN_PLAYER]
      },
      {
        id: 'Menu.returnToMainPage',
        types: [ActionTypes.Target.LEAVE_WAITING_PAGE, ActionTypes.Target.SHOW_MAIN]
      }
    ]
    const village: Props['village'] = {
      avatar: lobby.Avatar.random,
      comment: 'Experts recommended',
      hostPlayer: {
        isAnonymous: true,
        isHuman: true,
        name: 'Anonymous'
      },
      id: 1,
      idForSearching: 123,
      name: 'Fearwick',
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
    const store = createStore(
      reducer,
      {
        language: radios(language.label, language.options, language.defaultValue)
      }
    )
    const story =
      <Provider store={store}>
        <IntlProvider>
          <WaitingForPlayers
            confirmKickOutPlayer={confirmKickOutPlayer}
            isPlayer
            menuItems={menuItems}
            players={players.slice(0, 11)}
            transition={transition}
            village={village}
          />
        </IntlProvider>
      </Provider>

    return story
  })
  .add('10 players', () => {
    const confirmKickOutPlayer = (values: {name: string, token: lobby.Token}) => () => {
      action(`kick out ${values.name},${values.token}`)
    }
    const transition = () => {
      action('transition')
    }
    const menuItems = [
      {
        disabled: true,
        id: 'Menu.playGame',
        types: [ActionTypes.Target.PLAY_GAME]
      },
      {
        id: 'Menu.returnToLobbyForHumanPlayer',
        types: [ActionTypes.Target.LEAVE_WAITING_PAGE, ActionTypes.Target.SHOW_LOBBY_FOR_HUMAN_PLAYER]
      },
      {
        id: 'Menu.returnToMainPage',
        types: [ActionTypes.Target.LEAVE_WAITING_PAGE, ActionTypes.Target.SHOW_MAIN]
      }
    ]
    const village: Props['village'] = {
      avatar: lobby.Avatar.random,
      comment: 'Experts recommended',
      hostPlayer: {
        isAnonymous: true,
        isHuman: true,
        name: 'Anonymous'
      },
      id: 1,
      idForSearching: 123,
      name: 'Fearwick',
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
    const store = createStore(
      reducer,
      {
        language: radios(language.label, language.options, language.defaultValue)
      }
    )
    const story =
      <Provider store={store}>
        <IntlProvider>
          <WaitingForPlayers
            confirmKickOutPlayer={confirmKickOutPlayer}
            isPlayer
            menuItems={menuItems}
            players={players.slice(0, 10)}
            transition={transition}
            village={village}
          />
        </IntlProvider>
      </Provider>

    return story
  })
  .add('9 players', () => {
    const confirmKickOutPlayer = (values: {name: string, token: lobby.Token}) => () => {
      action(`kick out ${values.name},${values.token}`)
    }
    const transition = () => {
      action('transition')
    }
    const menuItems = [
      {
        disabled: true,
        id: 'Menu.playGame',
        types: [ActionTypes.Target.PLAY_GAME]
      },
      {
        id: 'Menu.returnToLobbyForHumanPlayer',
        types: [ActionTypes.Target.LEAVE_WAITING_PAGE, ActionTypes.Target.SHOW_LOBBY_FOR_HUMAN_PLAYER]
      },
      {
        id: 'Menu.returnToMainPage',
        types: [ActionTypes.Target.LEAVE_WAITING_PAGE, ActionTypes.Target.SHOW_MAIN]
      }
    ]
    const village: Props['village'] = {
      avatar: lobby.Avatar.random,
      comment: 'Experts recommended',
      hostPlayer: {
        isAnonymous: true,
        isHuman: true,
        name: 'Anonymous'
      },
      id: 1,
      idForSearching: 123,
      name: 'Fearwick',
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
    const store = createStore(
      reducer,
      {
        language: radios(language.label, language.options, language.defaultValue)
      }
    )
    const story =
      <Provider store={store}>
        <IntlProvider>
          <WaitingForPlayers
            confirmKickOutPlayer={confirmKickOutPlayer}
            isPlayer
            menuItems={menuItems}
            players={players.slice(0, 9)}
            transition={transition}
            village={village}
          />
        </IntlProvider>
      </Provider>

    return story
  })
  .add('8 players', () => {
    const confirmKickOutPlayer = (values: {name: string, token: lobby.Token}) => () => {
      action(`kick out ${values.name},${values.token}`)
    }
    const transition = () => {
      action('transition')
    }
    const menuItems = [
      {
        disabled: true,
        id: 'Menu.playGame',
        types: [ActionTypes.Target.PLAY_GAME]
      },
      {
        id: 'Menu.returnToLobbyForHumanPlayer',
        types: [ActionTypes.Target.LEAVE_WAITING_PAGE, ActionTypes.Target.SHOW_LOBBY_FOR_HUMAN_PLAYER]
      },
      {
        id: 'Menu.returnToMainPage',
        types: [ActionTypes.Target.LEAVE_WAITING_PAGE, ActionTypes.Target.SHOW_MAIN]
      }
    ]
    const village: Props['village'] = {
      avatar: lobby.Avatar.random,
      comment: 'Experts recommended',
      hostPlayer: {
        isAnonymous: true,
        isHuman: true,
        name: 'Anonymous'
      },
      id: 1,
      idForSearching: 123,
      name: 'Fearwick',
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
    const store = createStore(
      reducer,
      {
        language: radios(language.label, language.options, language.defaultValue)
      }
    )
    const story =
      <Provider store={store}>
        <IntlProvider>
          <WaitingForPlayers
            confirmKickOutPlayer={confirmKickOutPlayer}
            isPlayer
            menuItems={menuItems}
            players={players.slice(0, 8)}
            transition={transition}
            village={village}
          />
        </IntlProvider>
      </Provider>

    return story
  })
  .add('7 players', () => {
    const confirmKickOutPlayer = (values: {name: string, token: lobby.Token}) => () => {
      action(`kick out ${values.name},${values.token}`)
    }
    const transition = () => {
      action('transition')
    }
    const menuItems = [
      {
        disabled: true,
        id: 'Menu.playGame',
        types: [ActionTypes.Target.PLAY_GAME]
      },
      {
        id: 'Menu.returnToLobbyForHumanPlayer',
        types: [ActionTypes.Target.LEAVE_WAITING_PAGE, ActionTypes.Target.SHOW_LOBBY_FOR_HUMAN_PLAYER]
      },
      {
        id: 'Menu.returnToMainPage',
        types: [ActionTypes.Target.LEAVE_WAITING_PAGE, ActionTypes.Target.SHOW_MAIN]
      }
    ]
    const village: Props['village'] = {
      avatar: lobby.Avatar.random,
      comment: 'Experts recommended',
      hostPlayer: {
        isAnonymous: true,
        isHuman: true,
        name: 'Anonymous'
      },
      id: 1,
      idForSearching: 123,
      name: 'Fearwick',
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
    const store = createStore(
      reducer,
      {
        language: radios(language.label, language.options, language.defaultValue)
      }
    )
    const story =
      <Provider store={store}>
        <IntlProvider>
          <WaitingForPlayers
            confirmKickOutPlayer={confirmKickOutPlayer}
            isPlayer
            menuItems={menuItems}
            players={players.slice(0, 7)}
            transition={transition}
            village={village}
          />
        </IntlProvider>
      </Provider>

    return story
  })
  .add('6 players', () => {
    const confirmKickOutPlayer = (values: {name: string, token: lobby.Token}) => () => {
      action(`kick out ${values.name},${values.token}`)
    }
    const transition = () => {
      action('transition')
    }
    const menuItems = [
      {
        disabled: true,
        id: 'Menu.playGame',
        types: [ActionTypes.Target.PLAY_GAME]
      },
      {
        id: 'Menu.returnToLobbyForHumanPlayer',
        types: [ActionTypes.Target.LEAVE_WAITING_PAGE, ActionTypes.Target.SHOW_LOBBY_FOR_HUMAN_PLAYER]
      },
      {
        id: 'Menu.returnToMainPage',
        types: [ActionTypes.Target.LEAVE_WAITING_PAGE, ActionTypes.Target.SHOW_MAIN]
      }
    ]
    const village: Props['village'] = {
      avatar: lobby.Avatar.random,
      comment: 'Experts recommended',
      hostPlayer: {
        isAnonymous: true,
        isHuman: true,
        name: 'Anonymous'
      },
      id: 1,
      idForSearching: 123,
      name: 'Fearwick',
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
    const store = createStore(
      reducer,
      {
        language: radios(language.label, language.options, language.defaultValue)
      }
    )
    const story =
      <Provider store={store}>
        <IntlProvider>
          <WaitingForPlayers
            confirmKickOutPlayer={confirmKickOutPlayer}
            isPlayer
            menuItems={menuItems}
            players={players.slice(0, 6)}
            transition={transition}
            village={village}
          />
        </IntlProvider>
      </Provider>

    return story
  })
  .add('5 players', () => {
    const confirmKickOutPlayer = (values: {name: string, token: lobby.Token}) => () => {
      action(`kick out ${values.name},${values.token}`)
    }
    const transition = () => {
      action('transition')
    }
    const menuItems = [
      {
        disabled: true,
        id: 'Menu.playGame',
        types: [ActionTypes.Target.PLAY_GAME]
      },
      {
        id: 'Menu.returnToLobbyForHumanPlayer',
        types: [ActionTypes.Target.LEAVE_WAITING_PAGE, ActionTypes.Target.SHOW_LOBBY_FOR_HUMAN_PLAYER]
      },
      {
        id: 'Menu.returnToMainPage',
        types: [ActionTypes.Target.LEAVE_WAITING_PAGE, ActionTypes.Target.SHOW_MAIN]
      }
    ]
    const village: Props['village'] = {
      avatar: lobby.Avatar.random,
      comment: 'Experts recommended',
      hostPlayer: {
        isAnonymous: true,
        isHuman: true,
        name: 'Anonymous'
      },
      id: 1,
      idForSearching: 123,
      name: 'Fearwick',
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
    const store = createStore(
      reducer,
      {
        language: radios(language.label, language.options, language.defaultValue)
      }
    )
    const story =
      <Provider store={store}>
        <IntlProvider>
          <WaitingForPlayers
            confirmKickOutPlayer={confirmKickOutPlayer}
            isPlayer
            menuItems={menuItems}
            players={players.slice(0, 5)}
            transition={transition}
            village={village}
          />
        </IntlProvider>
      </Provider>

    return story
  })
  .add('long comment', () => {
    const confirmKickOutPlayer = (values: {name: string, token: lobby.Token}) => () => {
      action(`kick out ${values.name},${values.token}`)
    }
    const transition = () => {
      action('transition')
    }
    const menuItems = [
      {
        disabled: true,
        id: 'Menu.playGame',
        types: [ActionTypes.Target.PLAY_GAME]
      },
      {
        id: 'Menu.returnToLobbyForHumanPlayer',
        types: [ActionTypes.Target.LEAVE_WAITING_PAGE, ActionTypes.Target.SHOW_LOBBY_FOR_HUMAN_PLAYER]
      },
      {
        id: 'Menu.returnToMainPage',
        types: [ActionTypes.Target.LEAVE_WAITING_PAGE, ActionTypes.Target.SHOW_MAIN]
      }
    ]
    const village: Props['village'] = {
      avatar: lobby.Avatar.random,
      comment: 'Too long long long long long long long long long long long long long long long long long long commen',
      hostPlayer: {
        isAnonymous: true,
        isHuman: true,
        name: 'Anonymous'
      },
      id: 1,
      idForSearching: 123,
      name: 'Fearwick',
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
    const store = createStore(
      reducer,
      {
        language: radios(language.label, language.options, language.defaultValue)
      }
    )
    const story =
      <Provider store={store}>
        <IntlProvider>
          <WaitingForPlayers
            confirmKickOutPlayer={confirmKickOutPlayer}
            isPlayer
            menuItems={menuItems}
            players={players}
            transition={transition}
            village={village}
          />
        </IntlProvider>
      </Provider>

    return story
  })

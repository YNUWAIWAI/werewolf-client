import * as ActionTypes from '../../src/scripts/lobby/constants/ActionTypes'
import * as React from 'react'
import WaitingForPlayers, {Props} from '../../src/scripts/lobby/components/templates/WaitingForPlayers'
import IntlProvider from '../../src/scripts/lobby/containers/IntlProviderContainer'
import {Provider} from 'react-redux'
import {createStore} from 'redux'
import reducer from '../../src/scripts/lobby/reducers'
import {storiesOf} from '@storybook/react'
import {withKnobs} from '@storybook/addon-knobs'

const store = createStore(
  reducer
)
const players: Props['players'] = [
  {
    avatarImage: '',
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
    avatarImage: 'https://werewolf.world/image/0.1/Friedel.jpg',
    canKickOut: false,
    isAnonymous: false,
    isHost: false,
    isMe: true,
    name: 'Cathy',
    ping: '2.000 s',
    pingStatus: lobby.PingStatus.warning,
    token: '3F2504E0-4F89-11D3-9A0C-0305E82C3302'
  },
  {
    avatarImage: '',
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
    avatarImage: '',
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
    avatarImage: '',
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
    avatarImage: '',
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
    avatarImage: '',
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
    avatarImage: '',
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
    avatarImage: '',
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
    avatarImage: '',
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
    avatarImage: '',
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
    avatarImage: '',
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
    avatarImage: '',
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
    avatarImage: '',
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
    avatarImage: '',
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
  .addDecorator(withKnobs)
  .addDecorator(story =>
    <Provider store={store}>
      <IntlProvider>
        {story()}
      </IntlProvider>
    </Provider>
  )
  .add('15 players', () => {
    const kickOut = (token: lobby.Token) => () => {
      console.log(`kick out ${token}`)
    }
    const transition = () => {}
    const menuItems = [
      {
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
    const story =
      <WaitingForPlayers
        isPlayer
        kickOut={kickOut}
        menuItems={menuItems}
        players={players}
        transition={transition}
        village={village}
      />

    return story
  })
  .add('14 players', () => {
    const kickOut = (token: lobby.Token) => () => {
      console.log(`kick out ${token}`)
    }
    const transition = () => {}
    const menuItems = [
      {
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
    const story =
      <WaitingForPlayers
        isPlayer
        kickOut={kickOut}
        menuItems={menuItems}
        players={players.slice(0, 14)}
        transition={transition}
        village={village}
      />

    return story
  })
  .add('13 players', () => {
    const kickOut = (token: lobby.Token) => () => {
      console.log(`kick out ${token}`)
    }
    const transition = () => {}
    const menuItems = [
      {
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
    const story =
      <WaitingForPlayers
        isPlayer
        kickOut={kickOut}
        menuItems={menuItems}
        players={players.slice(0, 13)}
        transition={transition}
        village={village}
      />

    return story
  })
  .add('12 players', () => {
    const kickOut = (token: lobby.Token) => () => {
      console.log(`kick out ${token}`)
    }
    const transition = () => {}
    const menuItems = [
      {
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
    const story =
      <WaitingForPlayers
        isPlayer
        kickOut={kickOut}
        menuItems={menuItems}
        players={players.slice(0, 12)}
        transition={transition}
        village={village}
      />

    return story
  })
  .add('11 players', () => {
    const kickOut = (token: lobby.Token) => () => {
      console.log(`kick out ${token}`)
    }
    const transition = () => {}
    const menuItems = [
      {
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
    const story =
      <WaitingForPlayers
        isPlayer
        kickOut={kickOut}
        menuItems={menuItems}
        players={players.slice(0, 11)}
        transition={transition}
        village={village}
      />

    return story
  })
  .add('10 players', () => {
    const kickOut = (token: lobby.Token) => () => {
      console.log(`kick out ${token}`)
    }
    const transition = () => {}
    const menuItems = [
      {
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
    const story =
      <WaitingForPlayers
        isPlayer
        kickOut={kickOut}
        menuItems={menuItems}
        players={players.slice(0, 10)}
        transition={transition}
        village={village}
      />

    return story
  })
  .add('9 players', () => {
    const kickOut = (token: lobby.Token) => () => {
      console.log(`kick out ${token}`)
    }
    const transition = () => {}
    const menuItems = [
      {
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
    const story =
      <WaitingForPlayers
        isPlayer
        kickOut={kickOut}
        menuItems={menuItems}
        players={players.slice(0, 9)}
        transition={transition}
        village={village}
      />

    return story
  })
  .add('8 players', () => {
    const kickOut = (token: lobby.Token) => () => {
      console.log(`kick out ${token}`)
    }
    const transition = () => {}
    const menuItems = [
      {
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
    const story =
      <WaitingForPlayers
        isPlayer
        kickOut={kickOut}
        menuItems={menuItems}
        players={players.slice(0, 8)}
        transition={transition}
        village={village}
      />

    return story
  })
  .add('7 players', () => {
    const kickOut = (token: lobby.Token) => () => {
      console.log(`kick out ${token}`)
    }
    const transition = () => {}
    const menuItems = [
      {
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
    const story =
      <WaitingForPlayers
        isPlayer
        kickOut={kickOut}
        menuItems={menuItems}
        players={players.slice(0, 7)}
        transition={transition}
        village={village}
      />

    return story
  })
  .add('6 players', () => {
    const kickOut = (token: lobby.Token) => () => {
      console.log(`kick out ${token}`)
    }
    const transition = () => {}
    const menuItems = [
      {
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
    const story =
      <WaitingForPlayers
        isPlayer
        kickOut={kickOut}
        menuItems={menuItems}
        players={players.slice(0, 6)}
        transition={transition}
        village={village}
      />

    return story
  })
  .add('5 players', () => {
    const kickOut = (token: lobby.Token) => () => {
      console.log(`kick out ${token}`)
    }
    const transition = () => {}
    const menuItems = [
      {
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
    const story =
      <WaitingForPlayers
        isPlayer
        kickOut={kickOut}
        menuItems={menuItems}
        players={players.slice(0, 5)}
        transition={transition}
        village={village}
      />

    return story
  })
  .add('long comment', () => {
    const kickOut = (token: lobby.Token) => () => {
      console.log(`kick out ${token}`)
    }
    const transition = () => {}
    const menuItems = [
      {
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
    const story =
      <WaitingForPlayers
        isPlayer
        kickOut={kickOut}
        menuItems={menuItems}
        players={players}
        transition={transition}
        village={village}
      />

    return story
  })

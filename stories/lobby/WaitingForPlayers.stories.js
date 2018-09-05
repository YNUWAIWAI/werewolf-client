// @flow
import * as ActionTypes from '../../src/scripts/lobby/constants/ActionTypes'
import React from 'react'
import WaitingForPlayers from '../../src/scripts/lobby/components/WaitingForPlayers'
import {storiesOf} from '@storybook/react'
import {withInfo} from '@storybook/addon-info'
import {withKnobs} from '@storybook/addon-knobs/react'

storiesOf('lobby|WaitingForPlayers', module)
  .addDecorator(withKnobs)
  .add('default', withInfo('')(() => {
    const kickOut = token => () => {
      console.log(`kick out ${token}`)
    }
    const transition = () => {}
    const menuItems = [
      {
        text: 'Play',
        types: [ActionTypes.PLAY_GAME]
      },
      {
        text: 'Return to Lobby for Human Player',
        types: [ActionTypes.LEAVE_WAITING_PAGE, ActionTypes.SHOW_LOBBY_FOR_HUMAN_PLAYER]
      },
      {
        text: 'Return to the Main Page',
        types: [ActionTypes.LEAVE_WAITING_PAGE, ActionTypes.SHOW_MAIN]
      }
    ]
    const players = [
      {
        avatarImage: '',
        canKickOut: false,
        isHost: true,
        isMe: false,
        name: 'Anonymous',
        ping: '99.999 s',
        pingStatus: 'danger',
        token: '3F2504E0-4F89-11D3-9A0C-0305E82C3301'
      },
      {
        avatarImage: 'https://werewolf.world/image/0.1/Friedel.jpg',
        canKickOut: false,
        isHost: false,
        isMe: true,
        name: 'Cathy',
        ping: '2.000 s',
        pingStatus: 'warning',
        token: '3F2504E0-4F89-11D3-9A0C-0305E82C3302'
      },
      {
        avatarImage: '',
        canKickOut: false,
        isHost: false,
        isMe: false,
        name: 'Anonymous',
        ping: '0.500 s',
        pingStatus: 'safe',
        token: '3F2504E0-4F89-11D3-9A0C-0305E82C3303'
      },
      {
        avatarImage: '',
        canKickOut: false,
        isHost: false,
        isMe: false,
        name: 'Anonymous',
        ping: '99.999 s',
        pingStatus: 'danger',
        token: '3F2504E0-4F89-11D3-9A0C-0305E82C3304'
      },
      {
        avatarImage: '',
        canKickOut: false,
        isHost: false,
        isMe: false,
        name: 'Anonymous',
        ping: '99.999 s',
        pingStatus: 'danger',
        token: '3F2504E0-4F89-11D3-9A0C-0305E82C3305'
      },
      {
        avatarImage: '',
        canKickOut: false,
        isHost: false,
        isMe: false,
        name: 'Anonymous',
        ping: '99.999 s',
        pingStatus: 'danger',
        token: '3F2504E0-4F89-11D3-9A0C-0305E82C3306'
      },
      {
        avatarImage: '',
        canKickOut: false,
        isHost: false,
        isMe: false,
        name: 'Anonymous',
        ping: '99.999 s',
        pingStatus: 'danger',
        token: '3F2504E0-4F89-11D3-9A0C-0305E82C3307'
      },
      {
        avatarImage: '',
        canKickOut: false,
        isHost: false,
        isMe: false,
        name: 'Anonymous',
        ping: '99.999 s',
        pingStatus: 'danger',
        token: '3F2504E0-4F89-11D3-9A0C-0305E82C3308'
      },
      {
        avatarImage: '',
        canKickOut: false,
        isHost: false,
        isMe: false,
        name: 'Anonymous',
        ping: '99.999 s',
        pingStatus: 'danger',
        token: '3F2504E0-4F89-11D3-9A0C-0305E82C3309'
      },
      {
        avatarImage: '',
        canKickOut: false,
        isHost: false,
        isMe: false,
        name: 'Anonymous',
        ping: '99.999 s',
        pingStatus: 'danger',
        token: '3F2504E0-4F89-11D3-9A0C-0305E82C3310'
      },
      {
        avatarImage: '',
        canKickOut: false,
        isHost: false,
        isMe: false,
        name: 'Anonymous',
        ping: '99.999 s',
        pingStatus: 'danger',
        token: '3F2504E0-4F89-11D3-9A0C-0305E82C3311'
      },
      {
        avatarImage: '',
        canKickOut: false,
        isHost: false,
        isMe: false,
        name: 'Anonymous',
        ping: '99.999 s',
        pingStatus: 'danger',
        token: '3F2504E0-4F89-11D3-9A0C-0305E82C3312'
      },
      {
        avatarImage: '',
        canKickOut: false,
        isHost: false,
        isMe: false,
        name: 'Anonymous',
        ping: '99.999 s',
        pingStatus: 'danger',
        token: '3F2504E0-4F89-11D3-9A0C-0305E82C3313'
      },
      {
        avatarImage: '',
        canKickOut: false,
        isHost: false,
        isMe: false,
        name: 'Anonymous',
        ping: '99.999 s',
        pingStatus: 'danger',
        token: '3F2504E0-4F89-11D3-9A0C-0305E82C3314'
      },
      {
        avatarImage: '',
        canKickOut: false,
        isHost: false,
        isMe: false,
        name: 'Anonymous',
        ping: '99.999 s',
        pingStatus: 'danger',
        token: '3F2504E0-4F89-11D3-9A0C-0305E82C3315'
      }
    ]
    const village = {
      avatar: 'random',
      comment: 'Experts recommended',
      hostPlayer: {
        isAnonymous: true,
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
        werehumster: 1,
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
  }))

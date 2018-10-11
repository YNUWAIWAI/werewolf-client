// @flow
/* eslint sort-keys: 0 */
import Prediction from '../../src/scripts/village/components/organisms/Prediction'
import React from 'react'
import {action} from '@storybook/addon-actions'
import {storiesOf} from '@storybook/react'
import {withKnobs} from '@storybook/addon-knobs'

storiesOf('village|Prediction', module)
  .addDecorator(withKnobs)
  .add('13 players', () => {
    const playerStatus = [
      {
        'name': 'ヴァルター',
        'image': 'https://werewolf.world/image/0.1/Walter.jpg',
        'id': 1,
        'status': 'alive'
      },
      {
        'name': 'モーリッツ',
        'image': 'https://werewolf.world/image/0.1/Moritz.jpg',
        'id': 2,
        'status': 'alive'
      },
      {
        'name': 'ジムゾン',
        'image': 'https://werewolf.world/image/0.1/Simson.jpg',
        'id': 3,
        'status': 'alive'
      },
      {
        'name': 'トーマス',
        'image': 'https://werewolf.world/image/0.1/Thomas.jpg',
        'id': 4,
        'status': 'alive'
      },
      {
        'name': 'ニコラス',
        'image': 'https://werewolf.world/image/0.1/Nicholas.jpg',
        'id': 5,
        'status': 'alive'
      },
      {
        'name': 'ディーター',
        'image': 'https://werewolf.world/image/0.1/Dieter.jpg',
        'id': 6,
        'status': 'alive'
      },
      {
        'name': 'ペーター',
        'image': 'https://werewolf.world/image/0.1/Peter.jpg',
        'id': 7,
        'status': 'alive'
      },
      {
        'name': 'リーザ',
        'image': 'https://werewolf.world/image/0.1/Lisa.jpg',
        'id': 8,
        'status': 'alive'
      },
      {
        'name': 'アルビン',
        'image': 'https://werewolf.world/image/0.1/Alvin.jpg',
        'id': 9,
        'status': 'alive'
      },
      {
        'name': 'オットー',
        'image': 'https://werewolf.world/image/0.1/Otto.jpg',
        'id': 11,
        'status': 'alive'
      },
      {
        'name': 'ヨアヒム',
        'image': 'https://werewolf.world/image/0.1/Joachim.jpg',
        'id': 12,
        'status': 'alive'
      },
      {
        'name': 'パメラ',
        'image': 'https://werewolf.world/image/0.1/Pamela.jpg',
        'id': 13,
        'status': 'alive'
      },
      {
        'name': 'ヤコブ',
        'image': 'https://werewolf.world/image/0.1/Jacob.jpg',
        'id': 14,
        'status': 'alive'
      }
    ]
    const roleStatus = [
      {
        'caption': '村人',
        'id': 'villager',
        'image': 'https://werewolf.world/image/0.1/villager.jpg',
        'numberOfAgents': 4
      },
      {
        'caption': '占い師',
        'id': 'seer',
        'image': 'https://werewolf.world/image/0.1/seer.jpg',
        'numberOfAgents': 1
      },
      {
        'caption': '霊媒師',
        'id': 'medium',
        'image': 'https://werewolf.world/image/0.1/medium.jpg',
        'numberOfAgents': 1
      },
      {
        'caption': '狩人',
        'id': 'hunter',
        'image': 'https://werewolf.world/image/0.1/hunter.jpg',
        'numberOfAgents': 1
      },
      {
        'caption': '共有者',
        'id': 'mason',
        'image': 'https://werewolf.world/image/0.1/mason.jpg',
        'numberOfAgents': 2
      },
      {
        'caption': '狂人',
        'id': 'madman',
        'image': 'https://werewolf.world/image/0.1/madman.jpg',
        'numberOfAgents': 1
      },
      {
        'caption': '人狼',
        'id': 'werewolf',
        'image': 'https://werewolf.world/image/0.1/werewolf.jpg',
        'numberOfAgents': 2
      },
      {
        'caption': 'ハムスター人間',
        'id': 'werehumster',
        'image': 'https://werewolf.world/image/0.1/werehumster.jpg',
        'numberOfAgents': 1
      }
    ]
    const table = {
      '1': {
        villager: {
          date: 1,
          fixed: true,
          state: 'fill'
        },
        seer: {
          date: 1,
          fixed: true,
          state: 'O'
        },
        medium: {
          date: 1,
          fixed: true,
          state: 'fill'
        },
        hunter: {
          date: 1,
          fixed: true,
          state: 'fill'
        },
        mason: {
          date: 1,
          fixed: true,
          state: 'fill'
        },
        madman: {
          date: 1,
          fixed: true,
          state: 'fill'
        },
        werewolf: {
          date: 1,
          fixed: true,
          state: 'fill'
        },
        werehumster: {
          date: 1,
          fixed: true,
          state: 'fill'
        }
      },
      '2': {
        villager: {
          date: 1,
          fixed: false,
          state: 'Δ'
        },
        seer: {
          date: 1,
          fixed: true,
          state: 'fill'
        },
        medium: {
          date: 1,
          fixed: false,
          state: 'O'
        },
        hunter: {
          date: 1,
          fixed: false,
          state: 'X'
        },
        mason: {
          date: 1,
          fixed: false,
          state: '?'
        },
        madman: {
          date: 1,
          fixed: false,
          state: '?'
        },
        werewolf: {
          date: 1,
          fixed: false,
          state: '?'
        },
        werehumster: {
          date: 1,
          fixed: false,
          state: '?'
        }
      },
      '3': {
        villager: {
          date: 1,
          fixed: false,
          state: '?'
        },
        seer: {
          date: 1,
          fixed: true,
          state: 'fill'
        },
        medium: {
          date: 1,
          fixed: false,
          state: '?'
        },
        hunter: {
          date: 1,
          fixed: false,
          state: '?'
        },
        mason: {
          date: 1,
          fixed: false,
          state: '?'
        },
        madman: {
          date: 1,
          fixed: false,
          state: '?'
        },
        werewolf: {
          date: 1,
          fixed: false,
          state: '?'
        },
        werehumster: {
          date: 1,
          fixed: false,
          state: '?'
        }
      },
      '4': {
        villager: {
          date: 1,
          fixed: false,
          state: '?'
        },
        seer: {
          date: 1,
          fixed: true,
          state: 'fill'
        },
        medium: {
          date: 1,
          fixed: false,
          state: '?'
        },
        hunter: {
          date: 1,
          fixed: false,
          state: '?'
        },
        mason: {
          date: 1,
          fixed: false,
          state: '?'
        },
        madman: {
          date: 1,
          fixed: false,
          state: '?'
        },
        werewolf: {
          date: 1,
          fixed: false,
          state: '?'
        },
        werehumster: {
          date: 1,
          fixed: false,
          state: '?'
        }
      },
      '5': {
        villager: {
          date: 1,
          fixed: false,
          state: '?'
        },
        seer: {
          date: 1,
          fixed: true,
          state: 'fill'
        },
        medium: {
          date: 1,
          fixed: false,
          state: '?'
        },
        hunter: {
          date: 1,
          fixed: false,
          state: '?'
        },
        mason: {
          date: 1,
          fixed: false,
          state: '?'
        },
        madman: {
          date: 1,
          fixed: false,
          state: '?'
        },
        werewolf: {
          date: 1,
          fixed: false,
          state: '?'
        },
        werehumster: {
          date: 1,
          fixed: false,
          state: '?'
        }
      },
      '6': {
        villager: {
          date: 1,
          fixed: false,
          state: '?'
        },
        seer: {
          date: 1,
          fixed: true,
          state: 'fill'
        },
        medium: {
          date: 1,
          fixed: false,
          state: '?'
        },
        hunter: {
          date: 1,
          fixed: false,
          state: '?'
        },
        mason: {
          date: 1,
          fixed: false,
          state: '?'
        },
        madman: {
          date: 1,
          fixed: false,
          state: '?'
        },
        werewolf: {
          date: 1,
          fixed: false,
          state: '?'
        },
        werehumster: {
          date: 1,
          fixed: false,
          state: '?'
        }
      },
      '7': {
        villager: {
          date: 1,
          fixed: false,
          state: '?'
        },
        seer: {
          date: 1,
          fixed: true,
          state: 'fill'
        },
        medium: {
          date: 1,
          fixed: false,
          state: '?'
        },
        hunter: {
          date: 1,
          fixed: false,
          state: '?'
        },
        mason: {
          date: 1,
          fixed: false,
          state: '?'
        },
        madman: {
          date: 1,
          fixed: false,
          state: '?'
        },
        werewolf: {
          date: 1,
          fixed: false,
          state: '?'
        },
        werehumster: {
          date: 1,
          fixed: false,
          state: '?'
        }
      },
      '8': {
        villager: {
          date: 1,
          fixed: false,
          state: '?'
        },
        seer: {
          date: 1,
          fixed: true,
          state: 'fill'
        },
        medium: {
          date: 1,
          fixed: false,
          state: '?'
        },
        hunter: {
          date: 1,
          fixed: false,
          state: '?'
        },
        mason: {
          date: 1,
          fixed: false,
          state: '?'
        },
        madman: {
          date: 1,
          fixed: false,
          state: '?'
        },
        werewolf: {
          date: 1,
          fixed: false,
          state: '?'
        },
        werehumster: {
          date: 1,
          fixed: false,
          state: '?'
        }
      },
      '9': {
        villager: {
          date: 1,
          fixed: false,
          state: '?'
        },
        seer: {
          date: 1,
          fixed: true,
          state: 'fill'
        },
        medium: {
          date: 1,
          fixed: false,
          state: '?'
        },
        hunter: {
          date: 1,
          fixed: false,
          state: '?'
        },
        mason: {
          date: 1,
          fixed: false,
          state: '?'
        },
        madman: {
          date: 1,
          fixed: false,
          state: '?'
        },
        werewolf: {
          date: 1,
          fixed: false,
          state: '?'
        },
        werehumster: {
          date: 1,
          fixed: false,
          state: '?'
        }
      },
      '11': {
        villager: {
          date: 1,
          fixed: false,
          state: '?'
        },
        seer: {
          date: 1,
          fixed: true,
          state: 'fill'
        },
        medium: {
          date: 1,
          fixed: false,
          state: '?'
        },
        hunter: {
          date: 1,
          fixed: false,
          state: '?'
        },
        mason: {
          date: 1,
          fixed: false,
          state: '?'
        },
        madman: {
          date: 1,
          fixed: false,
          state: '?'
        },
        werewolf: {
          date: 1,
          fixed: false,
          state: '?'
        },
        werehumster: {
          date: 1,
          fixed: false,
          state: '?'
        }
      },
      '12': {
        villager: {
          date: 1,
          fixed: false,
          state: '?'
        },
        seer: {
          date: 1,
          fixed: true,
          state: 'fill'
        },
        medium: {
          date: 1,
          fixed: false,
          state: '?'
        },
        hunter: {
          date: 1,
          fixed: false,
          state: '?'
        },
        mason: {
          date: 1,
          fixed: false,
          state: '?'
        },
        madman: {
          date: 1,
          fixed: false,
          state: '?'
        },
        werewolf: {
          date: 1,
          fixed: false,
          state: '?'
        },
        werehumster: {
          date: 1,
          fixed: false,
          state: '?'
        }
      },
      '13': {
        villager: {
          date: 1,
          fixed: false,
          state: '?'
        },
        seer: {
          date: 1,
          fixed: true,
          state: 'fill'
        },
        medium: {
          date: 1,
          fixed: false,
          state: '?'
        },
        hunter: {
          date: 1,
          fixed: false,
          state: '?'
        },
        mason: {
          date: 1,
          fixed: false,
          state: '?'
        },
        madman: {
          date: 1,
          fixed: false,
          state: '?'
        },
        werewolf: {
          date: 1,
          fixed: false,
          state: '?'
        },
        werehumster: {
          date: 1,
          fixed: false,
          state: '?'
        }
      },
      '14': {
        villager: {
          date: 1,
          fixed: false,
          state: '?'
        },
        seer: {
          date: 1,
          fixed: true,
          state: 'fill'
        },
        medium: {
          date: 1,
          fixed: false,
          state: '?'
        },
        hunter: {
          date: 1,
          fixed: false,
          state: '?'
        },
        mason: {
          date: 1,
          fixed: false,
          state: '?'
        },
        madman: {
          date: 1,
          fixed: false,
          state: '?'
        },
        werewolf: {
          date: 1,
          fixed: false,
          state: '?'
        },
        werehumster: {
          date: 1,
          fixed: false,
          state: '?'
        }
      }
    }
    const story =
      <Prediction
        handleBoardClick={(agentId, roleId) => action(`handleBoardClick [${agentId}, ${roleId}]`)}
        playerStatus={playerStatus}
        roleStatus={roleStatus}
        table={table}
      />

    return story
  })
  .add('5 players', () => {
    const playerStatus = [
      {
        'name': 'ヴァルター',
        'image': 'https://werewolf.world/image/0.1/Walter.jpg',
        'id': 1,
        'status': 'alive'
      },
      {
        'name': 'モーリッツ',
        'image': 'https://werewolf.world/image/0.1/Moritz.jpg',
        'id': 2,
        'status': 'alive'
      },
      {
        'name': 'ジムゾン',
        'image': 'https://werewolf.world/image/0.1/Simson.jpg',
        'id': 3,
        'status': 'alive'
      },
      {
        'name': 'トーマス',
        'image': 'https://werewolf.world/image/0.1/Thomas.jpg',
        'id': 4,
        'status': 'alive'
      },
      {
        'name': 'ニコラス',
        'image': 'https://werewolf.world/image/0.1/Nicholas.jpg',
        'id': 5,
        'status': 'alive'
      }
    ]
    const roleStatus = [
      {
        'caption': '村人',
        'id': 'villager',
        'image': 'https://werewolf.world/image/0.1/villager.jpg',
        'numberOfAgents': 2
      },
      {
        'caption': '占い師',
        'id': 'seer',
        'image': 'https://werewolf.world/image/0.1/seer.jpg',
        'numberOfAgents': 1
      },
      {
        'caption': '狂人',
        'id': 'madman',
        'image': 'https://werewolf.world/image/0.1/madman.jpg',
        'numberOfAgents': 1
      },
      {
        'caption': '人狼',
        'id': 'werewolf',
        'image': 'https://werewolf.world/image/0.1/werewolf.jpg',
        'numberOfAgents': 1
      }
    ]
    const table = {
      '1': {
        villager: {
          date: 1,
          fixed: true,
          state: 'fill'
        },
        seer: {
          date: 1,
          fixed: true,
          state: 'O'
        },
        madman: {
          date: 1,
          fixed: true,
          state: 'fill'
        },
        werewolf: {
          date: 1,
          fixed: true,
          state: 'fill'
        }
      },
      '2': {
        villager: {
          date: 1,
          fixed: false,
          state: 'Δ'
        },
        seer: {
          date: 1,
          fixed: true,
          state: 'fill'
        },
        madman: {
          date: 1,
          fixed: false,
          state: '?'
        },
        werewolf: {
          date: 1,
          fixed: false,
          state: '?'
        }
      },
      '3': {
        villager: {
          date: 1,
          fixed: false,
          state: '?'
        },
        seer: {
          date: 1,
          fixed: true,
          state: 'fill'
        },
        madman: {
          date: 1,
          fixed: false,
          state: '?'
        },
        werewolf: {
          date: 1,
          fixed: false,
          state: '?'
        }
      },
      '4': {
        villager: {
          date: 1,
          fixed: false,
          state: '?'
        },
        seer: {
          date: 1,
          fixed: true,
          state: 'fill'
        },
        madman: {
          date: 1,
          fixed: false,
          state: '?'
        },
        werewolf: {
          date: 1,
          fixed: false,
          state: '?'
        }
      },
      '5': {
        villager: {
          date: 1,
          fixed: false,
          state: '?'
        },
        seer: {
          date: 1,
          fixed: true,
          state: 'fill'
        },
        madman: {
          date: 1,
          fixed: false,
          state: '?'
        },
        werewolf: {
          date: 1,
          fixed: false,
          state: '?'
        }
      }
    }
    const story =
      <Prediction
        handleBoardClick={(agentId, roleId) => action(`handleBoardClick [${agentId}, ${roleId}]`)}
        playerStatus={playerStatus}
        roleStatus={roleStatus}
        table={table}
      />

    return story
  })

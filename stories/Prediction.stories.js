// @flow
/* eslint sort-keys: 0 */
import Prediction from '../src/scripts/village/components/Prediction'
import React from 'react'
import {action} from '@storybook/addon-actions'
import {storiesOf} from '@storybook/react'
import {withInfo} from '@storybook/addon-info'
import {withKnobs} from '@storybook/addon-knobs/react'

storiesOf('village/Prediction', module)
  .addDecorator(withKnobs)
  .add('default', withInfo('本来は各マスに画像が出てくるが，設定が面倒なので表示されないままになっている．')(() => {
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
        'id': 'villager',
        'image': 'https://werewolf.world/image/0.1/villager.jpg',
        'numberOfAgents': 6,
        'tooltip': '村人'
      },
      {
        'id': 'seer',
        'image': 'https://werewolf.world/image/0.1/seer.jpg',
        'numberOfAgents': 1,
        'tooltip': '占い師'
      },
      {
        'id': 'medium',
        'image': 'https://werewolf.world/image/0.1/medium.jpg',
        'numberOfAgents': 1,
        'tooltip': '霊媒師'
      },
      {
        'id': 'hunter',
        'image': 'https://werewolf.world/image/0.1/hunter.jpg',
        'numberOfAgents': 1,
        'tooltip': '狩人'
      },
      {
        'id': 'mason',
        'image': 'https://werewolf.world/image/0.1/mason.jpg',
        'numberOfAgents': 2,
        'tooltip': '共有者'
      },
      {
        'id': 'madman',
        'image': 'https://werewolf.world/image/0.1/madman.jpg',
        'numberOfAgents': 1,
        'tooltip': '狂人'
      },
      {
        'id': 'werewolf',
        'image': 'https://werewolf.world/image/0.1/werewolf.jpg',
        'numberOfAgents': 2,
        'tooltip': '人狼'
      },
      {
        'id': 'werehumster',
        'image': 'https://werewolf.world/image/0.1/werehumster.jpg',
        'numberOfAgents': 1,
        'tooltip': 'ハムスター人間'
      }
    ]
    const table = {
      '1': {
        villager: {
          date: 1,
          state: 'fill'
        },
        seer: {
          date: 1,
          state: 'fix'
        },
        medium: {
          date: 1,
          state: 'fill'
        },
        hunter: {
          date: 1,
          state: 'fill'
        },
        mason: {
          date: 1,
          state: 'fill'
        },
        madman: {
          date: 1,
          state: 'fill'
        },
        werewolf: {
          date: 1,
          state: 'fill'
        },
        werehumster: {
          date: 1,
          state: 'fill'
        }
      },
      '2': {
        villager: {
          date: 1,
          state: '?'
        },
        seer: {
          date: 1,
          state: 'fill'
        },
        medium: {
          date: 1,
          state: '?'
        },
        hunter: {
          date: 1,
          state: '?'
        },
        mason: {
          date: 1,
          state: '?'
        },
        madman: {
          date: 1,
          state: '?'
        },
        werewolf: {
          date: 1,
          state: '?'
        },
        werehumster: {
          date: 1,
          state: '?'
        }
      },
      '3': {
        villager: {
          date: 1,
          state: '?'
        },
        seer: {
          date: 1,
          state: 'fill'
        },
        medium: {
          date: 1,
          state: '?'
        },
        hunter: {
          date: 1,
          state: '?'
        },
        mason: {
          date: 1,
          state: '?'
        },
        madman: {
          date: 1,
          state: '?'
        },
        werewolf: {
          date: 1,
          state: '?'
        },
        werehumster: {
          date: 1,
          state: '?'
        }
      },
      '4': {
        villager: {
          date: 1,
          state: '?'
        },
        seer: {
          date: 1,
          state: 'fill'
        },
        medium: {
          date: 1,
          state: '?'
        },
        hunter: {
          date: 1,
          state: '?'
        },
        mason: {
          date: 1,
          state: '?'
        },
        madman: {
          date: 1,
          state: '?'
        },
        werewolf: {
          date: 1,
          state: '?'
        },
        werehumster: {
          date: 1,
          state: '?'
        }
      },
      '5': {
        villager: {
          date: 1,
          state: '?'
        },
        seer: {
          date: 1,
          state: 'fill'
        },
        medium: {
          date: 1,
          state: '?'
        },
        hunter: {
          date: 1,
          state: '?'
        },
        mason: {
          date: 1,
          state: '?'
        },
        madman: {
          date: 1,
          state: '?'
        },
        werewolf: {
          date: 1,
          state: '?'
        },
        werehumster: {
          date: 1,
          state: '?'
        }
      },
      '6': {
        villager: {
          date: 1,
          state: '?'
        },
        seer: {
          date: 1,
          state: 'fill'
        },
        medium: {
          date: 1,
          state: '?'
        },
        hunter: {
          date: 1,
          state: '?'
        },
        mason: {
          date: 1,
          state: '?'
        },
        madman: {
          date: 1,
          state: '?'
        },
        werewolf: {
          date: 1,
          state: '?'
        },
        werehumster: {
          date: 1,
          state: '?'
        }
      },
      '7': {
        villager: {
          date: 1,
          state: '?'
        },
        seer: {
          date: 1,
          state: 'fill'
        },
        medium: {
          date: 1,
          state: '?'
        },
        hunter: {
          date: 1,
          state: '?'
        },
        mason: {
          date: 1,
          state: '?'
        },
        madman: {
          date: 1,
          state: '?'
        },
        werewolf: {
          date: 1,
          state: '?'
        },
        werehumster: {
          date: 1,
          state: '?'
        }
      },
      '8': {
        villager: {
          date: 1,
          state: '?'
        },
        seer: {
          date: 1,
          state: 'fill'
        },
        medium: {
          date: 1,
          state: '?'
        },
        hunter: {
          date: 1,
          state: '?'
        },
        mason: {
          date: 1,
          state: '?'
        },
        madman: {
          date: 1,
          state: '?'
        },
        werewolf: {
          date: 1,
          state: '?'
        },
        werehumster: {
          date: 1,
          state: '?'
        }
      },
      '9': {
        villager: {
          date: 1,
          state: '?'
        },
        seer: {
          date: 1,
          state: 'fill'
        },
        medium: {
          date: 1,
          state: '?'
        },
        hunter: {
          date: 1,
          state: '?'
        },
        mason: {
          date: 1,
          state: '?'
        },
        madman: {
          date: 1,
          state: '?'
        },
        werewolf: {
          date: 1,
          state: '?'
        },
        werehumster: {
          date: 1,
          state: '?'
        }
      },
      '11': {
        villager: {
          date: 1,
          state: '?'
        },
        seer: {
          date: 1,
          state: 'fill'
        },
        medium: {
          date: 1,
          state: '?'
        },
        hunter: {
          date: 1,
          state: '?'
        },
        mason: {
          date: 1,
          state: '?'
        },
        madman: {
          date: 1,
          state: '?'
        },
        werewolf: {
          date: 1,
          state: '?'
        },
        werehumster: {
          date: 1,
          state: '?'
        }
      },
      '12': {
        villager: {
          date: 1,
          state: '?'
        },
        seer: {
          date: 1,
          state: 'fill'
        },
        medium: {
          date: 1,
          state: '?'
        },
        hunter: {
          date: 1,
          state: '?'
        },
        mason: {
          date: 1,
          state: '?'
        },
        madman: {
          date: 1,
          state: '?'
        },
        werewolf: {
          date: 1,
          state: '?'
        },
        werehumster: {
          date: 1,
          state: '?'
        }
      },
      '13': {
        villager: {
          date: 1,
          state: '?'
        },
        seer: {
          date: 1,
          state: 'fill'
        },
        medium: {
          date: 1,
          state: '?'
        },
        hunter: {
          date: 1,
          state: '?'
        },
        mason: {
          date: 1,
          state: '?'
        },
        madman: {
          date: 1,
          state: '?'
        },
        werewolf: {
          date: 1,
          state: '?'
        },
        werehumster: {
          date: 1,
          state: '?'
        }
      },
      '14': {
        villager: {
          date: 1,
          state: '?'
        },
        seer: {
          date: 1,
          state: 'fill'
        },
        medium: {
          date: 1,
          state: '?'
        },
        hunter: {
          date: 1,
          state: '?'
        },
        mason: {
          date: 1,
          state: '?'
        },
        madman: {
          date: 1,
          state: '?'
        },
        werewolf: {
          date: 1,
          state: '?'
        },
        werehumster: {
          date: 1,
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
  }))

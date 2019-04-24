/* global village */
import * as React from 'react'
import Prediction, {Props} from '../../src/scripts/village/components/organisms/Prediction'
import {action} from '@storybook/addon-actions'
import {storiesOf} from '@storybook/react'

storiesOf('village|Prediction', module)
  .addDecorator(story =>
    <div className="vi--app">
      <div className="vi--activity">
        {story()}
      </div>
    </div>
  )
  .add('13 players(spec is invisible)', () => {
    const playerStatus: Props['playerStatus'] = [
      {
        'id': 1,
        'image': 'https://werewolf.world/image/0.1/Walter.jpg',
        'name': 'ヴァルター',
        'status': village.AgentStatus.alive
      },
      {
        'id': 2,
        'image': 'https://werewolf.world/image/0.1/Moritz.jpg',
        'name': 'モーリッツ',
        'status': village.AgentStatus.alive
      },
      {
        'id': 3,
        'image': 'https://werewolf.world/image/0.1/Simson.jpg',
        'name': 'ジムゾン',
        'status': village.AgentStatus.alive
      },
      {
        'id': 4,
        'image': 'https://werewolf.world/image/0.1/Thomas.jpg',
        'name': 'トーマス',
        'status': village.AgentStatus.alive
      },
      {
        'id': 5,
        'image': 'https://werewolf.world/image/0.1/Nicholas.jpg',
        'name': 'ニコラス',
        'status': village.AgentStatus.alive
      },
      {
        'id': 6,
        'image': 'https://werewolf.world/image/0.1/Dieter.jpg',
        'name': 'ディーター',
        'status': village.AgentStatus.alive
      },
      {
        'id': 7,
        'image': 'https://werewolf.world/image/0.1/Peter.jpg',
        'name': 'ペーター',
        'status': village.AgentStatus.alive
      },
      {
        'id': 8,
        'image': 'https://werewolf.world/image/0.1/Lisa.jpg',
        'name': 'リーザ',
        'status': village.AgentStatus.alive
      },
      {
        'id': 9,
        'image': 'https://werewolf.world/image/0.1/Alvin.jpg',
        'name': 'アルビン',
        'status': village.AgentStatus.alive
      },
      {
        'id': 11,
        'image': 'https://werewolf.world/image/0.1/Otto.jpg',
        'name': 'オットー',
        'status': village.AgentStatus.alive
      },
      {
        'id': 12,
        'image': 'https://werewolf.world/image/0.1/Joachim.jpg',
        'name': 'ヨアヒム',
        'status': village.AgentStatus.alive
      },
      {
        'id': 13,
        'image': 'https://werewolf.world/image/0.1/Pamela.jpg',
        'name': 'パメラ',
        'status': village.AgentStatus.alive
      },
      {
        'id': 14,
        'image': 'https://werewolf.world/image/0.1/Jacob.jpg',
        'name': 'ヤコブ',
        'status': village.AgentStatus.alive
      }
    ]
    const roleStatus: Props['roleStatus'] = [
      {
        'id': village.RoleId.villager,
        'image': 'https://werewolf.world/image/0.1/villager.jpg',
        'name': '村人',
        'numberOfAgents': 4
      },
      {
        'id': village.RoleId.seer,
        'image': 'https://werewolf.world/image/0.1/seer.jpg',
        'name': '占い師',
        'numberOfAgents': 1
      },
      {
        'id': village.RoleId.medium,
        'image': 'https://werewolf.world/image/0.1/medium.jpg',
        'name': '霊媒師',
        'numberOfAgents': 1
      },
      {
        'id': village.RoleId.hunter,
        'image': 'https://werewolf.world/image/0.1/hunter.jpg',
        'name': '狩人',
        'numberOfAgents': 1
      },
      {
        'id': village.RoleId.mason,
        'image': 'https://werewolf.world/image/0.1/mason.jpg',
        'name': '共有者',
        'numberOfAgents': 2
      },
      {
        'id': village.RoleId.madman,
        'image': 'https://werewolf.world/image/0.1/madman.jpg',
        'name': '狂人',
        'numberOfAgents': 1
      },
      {
        'id': village.RoleId.werewolf,
        'image': 'https://werewolf.world/image/0.1/werewolf.jpg',
        'name': '人狼',
        'numberOfAgents': 2
      },
      {
        'id': village.RoleId.werehamster,
        'image': 'https://werewolf.world/image/0.1/werehamster.jpg',
        'name': 'ハムスター人間',
        'numberOfAgents': 1
      }
    ]
    const spec: Props['spec'] = {
      role: village.RoleId.villager,
      visible: false
    }
    const table: Props['table'] = {
      '1': {
        hunter: {
          date: 1,
          fixed: true,
          state: village.BoardState.FILL
        },
        madman: {
          date: 1,
          fixed: true,
          state: village.BoardState.FILL
        },
        mason: {
          date: 1,
          fixed: true,
          state: village.BoardState.FILL
        },
        medium: {
          date: 1,
          fixed: true,
          state: village.BoardState.FILL
        },
        seer: {
          date: 1,
          fixed: true,
          state: village.BoardState.CIRCLE
        },
        villager: {
          date: 1,
          fixed: true,
          state: village.BoardState.FILL
        },
        werehamster: {
          date: 1,
          fixed: true,
          state: village.BoardState.FILL
        },
        werewolf: {
          date: 1,
          fixed: true,
          state: village.BoardState.FILL
        }
      },
      '2': {
        hunter: {
          date: 1,
          fixed: false,
          state: village.BoardState.CROSS
        },
        madman: {
          date: 1,
          fixed: false,
          state: village.BoardState.QUESTION
        },
        mason: {
          date: 1,
          fixed: false,
          state: village.BoardState.QUESTION
        },
        medium: {
          date: 1,
          fixed: false,
          state: village.BoardState.CIRCLE
        },
        seer: {
          date: 1,
          fixed: true,
          state: village.BoardState.FILL
        },
        villager: {
          date: 1,
          fixed: false,
          state: village.BoardState.TRIANGLE
        },
        werehamster: {
          date: 1,
          fixed: false,
          state: village.BoardState.QUESTION
        },
        werewolf: {
          date: 1,
          fixed: false,
          state: village.BoardState.QUESTION
        }
      },
      '3': {
        hunter: {
          date: 1,
          fixed: false,
          state: village.BoardState.QUESTION
        },
        madman: {
          date: 1,
          fixed: false,
          state: village.BoardState.QUESTION
        },
        mason: {
          date: 1,
          fixed: false,
          state: village.BoardState.QUESTION
        },
        medium: {
          date: 1,
          fixed: false,
          state: village.BoardState.QUESTION
        },
        seer: {
          date: 1,
          fixed: true,
          state: village.BoardState.FILL
        },
        villager: {
          date: 1,
          fixed: false,
          state: village.BoardState.QUESTION
        },
        werehamster: {
          date: 1,
          fixed: false,
          state: village.BoardState.QUESTION
        },
        werewolf: {
          date: 1,
          fixed: false,
          state: village.BoardState.QUESTION
        }
      },
      '4': {
        hunter: {
          date: 1,
          fixed: false,
          state: village.BoardState.QUESTION
        },
        madman: {
          date: 1,
          fixed: false,
          state: village.BoardState.QUESTION
        },
        mason: {
          date: 1,
          fixed: false,
          state: village.BoardState.QUESTION
        },
        medium: {
          date: 1,
          fixed: false,
          state: village.BoardState.QUESTION
        },
        seer: {
          date: 1,
          fixed: true,
          state: village.BoardState.FILL
        },
        villager: {
          date: 1,
          fixed: false,
          state: village.BoardState.QUESTION
        },
        werehamster: {
          date: 1,
          fixed: false,
          state: village.BoardState.QUESTION
        },
        werewolf: {
          date: 1,
          fixed: false,
          state: village.BoardState.QUESTION
        }
      },
      '5': {
        hunter: {
          date: 1,
          fixed: false,
          state: village.BoardState.QUESTION
        },
        madman: {
          date: 1,
          fixed: false,
          state: village.BoardState.QUESTION
        },
        mason: {
          date: 1,
          fixed: false,
          state: village.BoardState.QUESTION
        },
        medium: {
          date: 1,
          fixed: false,
          state: village.BoardState.QUESTION
        },
        seer: {
          date: 1,
          fixed: true,
          state: village.BoardState.FILL
        },
        villager: {
          date: 1,
          fixed: false,
          state: village.BoardState.QUESTION
        },
        werehamster: {
          date: 1,
          fixed: false,
          state: village.BoardState.QUESTION
        },
        werewolf: {
          date: 1,
          fixed: false,
          state: village.BoardState.QUESTION
        }
      },
      '6': {
        hunter: {
          date: 1,
          fixed: false,
          state: village.BoardState.QUESTION
        },
        madman: {
          date: 1,
          fixed: false,
          state: village.BoardState.QUESTION
        },
        mason: {
          date: 1,
          fixed: false,
          state: village.BoardState.QUESTION
        },
        medium: {
          date: 1,
          fixed: false,
          state: village.BoardState.QUESTION
        },
        seer: {
          date: 1,
          fixed: true,
          state: village.BoardState.FILL
        },
        villager: {
          date: 1,
          fixed: false,
          state: village.BoardState.QUESTION
        },
        werehamster: {
          date: 1,
          fixed: false,
          state: village.BoardState.QUESTION
        },
        werewolf: {
          date: 1,
          fixed: false,
          state: village.BoardState.QUESTION
        }
      },
      '7': {
        hunter: {
          date: 1,
          fixed: false,
          state: village.BoardState.QUESTION
        },
        madman: {
          date: 1,
          fixed: false,
          state: village.BoardState.QUESTION
        },
        mason: {
          date: 1,
          fixed: false,
          state: village.BoardState.QUESTION
        },
        medium: {
          date: 1,
          fixed: false,
          state: village.BoardState.QUESTION
        },
        seer: {
          date: 1,
          fixed: true,
          state: village.BoardState.FILL
        },
        villager: {
          date: 1,
          fixed: false,
          state: village.BoardState.QUESTION
        },
        werehamster: {
          date: 1,
          fixed: false,
          state: village.BoardState.QUESTION
        },
        werewolf: {
          date: 1,
          fixed: false,
          state: village.BoardState.QUESTION
        }
      },
      '8': {
        hunter: {
          date: 1,
          fixed: false,
          state: village.BoardState.QUESTION
        },
        madman: {
          date: 1,
          fixed: false,
          state: village.BoardState.QUESTION
        },
        mason: {
          date: 1,
          fixed: false,
          state: village.BoardState.QUESTION
        },
        medium: {
          date: 1,
          fixed: false,
          state: village.BoardState.QUESTION
        },
        seer: {
          date: 1,
          fixed: true,
          state: village.BoardState.FILL
        },
        villager: {
          date: 1,
          fixed: false,
          state: village.BoardState.QUESTION
        },
        werehamster: {
          date: 1,
          fixed: false,
          state: village.BoardState.QUESTION
        },
        werewolf: {
          date: 1,
          fixed: false,
          state: village.BoardState.QUESTION
        }
      },
      '9': {
        hunter: {
          date: 1,
          fixed: false,
          state: village.BoardState.QUESTION
        },
        madman: {
          date: 1,
          fixed: false,
          state: village.BoardState.QUESTION
        },
        mason: {
          date: 1,
          fixed: false,
          state: village.BoardState.QUESTION
        },
        medium: {
          date: 1,
          fixed: false,
          state: village.BoardState.QUESTION
        },
        seer: {
          date: 1,
          fixed: true,
          state: village.BoardState.FILL
        },
        villager: {
          date: 1,
          fixed: false,
          state: village.BoardState.QUESTION
        },
        werehamster: {
          date: 1,
          fixed: false,
          state: village.BoardState.QUESTION
        },
        werewolf: {
          date: 1,
          fixed: false,
          state: village.BoardState.QUESTION
        }
      },
      '11': {
        hunter: {
          date: 1,
          fixed: false,
          state: village.BoardState.QUESTION
        },
        madman: {
          date: 1,
          fixed: false,
          state: village.BoardState.QUESTION
        },
        mason: {
          date: 1,
          fixed: false,
          state: village.BoardState.QUESTION
        },
        medium: {
          date: 1,
          fixed: false,
          state: village.BoardState.QUESTION
        },
        seer: {
          date: 1,
          fixed: true,
          state: village.BoardState.FILL
        },
        villager: {
          date: 1,
          fixed: false,
          state: village.BoardState.QUESTION
        },
        werehamster: {
          date: 1,
          fixed: false,
          state: village.BoardState.QUESTION
        },
        werewolf: {
          date: 1,
          fixed: false,
          state: village.BoardState.QUESTION
        }
      },
      '12': {
        hunter: {
          date: 1,
          fixed: false,
          state: village.BoardState.QUESTION
        },
        madman: {
          date: 1,
          fixed: false,
          state: village.BoardState.QUESTION
        },
        mason: {
          date: 1,
          fixed: false,
          state: village.BoardState.QUESTION
        },
        medium: {
          date: 1,
          fixed: false,
          state: village.BoardState.QUESTION
        },
        seer: {
          date: 1,
          fixed: true,
          state: village.BoardState.FILL
        },
        villager: {
          date: 1,
          fixed: false,
          state: village.BoardState.QUESTION
        },
        werehamster: {
          date: 1,
          fixed: false,
          state: village.BoardState.QUESTION
        },
        werewolf: {
          date: 1,
          fixed: false,
          state: village.BoardState.QUESTION
        }
      },
      '13': {
        hunter: {
          date: 1,
          fixed: false,
          state: village.BoardState.QUESTION
        },
        madman: {
          date: 1,
          fixed: false,
          state: village.BoardState.QUESTION
        },
        mason: {
          date: 1,
          fixed: false,
          state: village.BoardState.QUESTION
        },
        medium: {
          date: 1,
          fixed: false,
          state: village.BoardState.QUESTION
        },
        seer: {
          date: 1,
          fixed: true,
          state: village.BoardState.FILL
        },
        villager: {
          date: 1,
          fixed: false,
          state: village.BoardState.QUESTION
        },
        werehamster: {
          date: 1,
          fixed: false,
          state: village.BoardState.QUESTION
        },
        werewolf: {
          date: 1,
          fixed: false,
          state: village.BoardState.QUESTION
        }
      },
      '14': {
        hunter: {
          date: 1,
          fixed: false,
          state: village.BoardState.QUESTION
        },
        madman: {
          date: 1,
          fixed: false,
          state: village.BoardState.QUESTION
        },
        mason: {
          date: 1,
          fixed: false,
          state: village.BoardState.QUESTION
        },
        medium: {
          date: 1,
          fixed: false,
          state: village.BoardState.QUESTION
        },
        seer: {
          date: 1,
          fixed: true,
          state: village.BoardState.FILL
        },
        villager: {
          date: 1,
          fixed: false,
          state: village.BoardState.QUESTION
        },
        werehamster: {
          date: 1,
          fixed: false,
          state: village.BoardState.QUESTION
        },
        werewolf: {
          date: 1,
          fixed: false,
          state: village.BoardState.QUESTION
        }
      }
    }
    const story =
      <Prediction
        handleBoardClick={(agentId, roleId) => action(`handleBoardClick [${agentId}, ${roleId}]`)}
        handleMouseEnter={role => action(`handleMouseEnter ${role}`)}
        handleMouseLeave={action('handleMouseLeave')}
        playerStatus={playerStatus}
        roleStatus={roleStatus}
        spec={spec}
        table={table}
      />

    return story
  })
  .add('5 players(spec is invisible)', () => {
    const playerStatus: Props['playerStatus'] = [
      {
        'id': 1,
        'image': 'https://werewolf.world/image/0.1/Walter.jpg',
        'name': 'ヴァルター',
        'status': village.AgentStatus.alive
      },
      {
        'id': 2,
        'image': 'https://werewolf.world/image/0.1/Moritz.jpg',
        'name': 'モーリッツ',
        'status': village.AgentStatus.alive
      },
      {
        'id': 3,
        'image': 'https://werewolf.world/image/0.1/Simson.jpg',
        'name': 'ジムゾン',
        'status': village.AgentStatus.alive
      },
      {
        'id': 4,
        'image': 'https://werewolf.world/image/0.1/Thomas.jpg',
        'name': 'トーマス',
        'status': village.AgentStatus.alive
      },
      {
        'id': 5,
        'image': 'https://werewolf.world/image/0.1/Nicholas.jpg',
        'name': 'ニコラス',
        'status': village.AgentStatus.alive
      }
    ]
    const roleStatus: Props['roleStatus'] = [
      {
        'id': village.RoleId.villager,
        'image': 'https://werewolf.world/image/0.1/villager.jpg',
        'name': '村人',
        'numberOfAgents': 2
      },
      {
        'id': village.RoleId.seer,
        'image': 'https://werewolf.world/image/0.1/seer.jpg',
        'name': '占い師',
        'numberOfAgents': 1
      },
      {
        'id': village.RoleId.madman,
        'image': 'https://werewolf.world/image/0.1/madman.jpg',
        'name': '狂人',
        'numberOfAgents': 1
      },
      {
        'id': village.RoleId.werewolf,
        'image': 'https://werewolf.world/image/0.1/werewolf.jpg',
        'name': '人狼',
        'numberOfAgents': 1
      }
    ]
    const spec: Props['spec'] = {
      role: village.RoleId.villager,
      visible: false
    }
    const table: Props['table'] = {
      '1': {
        madman: {
          date: 1,
          fixed: true,
          state: village.BoardState.FILL
        },
        seer: {
          date: 1,
          fixed: true,
          state: village.BoardState.CIRCLE
        },
        villager: {
          date: 1,
          fixed: true,
          state: village.BoardState.FILL
        },
        werewolf: {
          date: 1,
          fixed: true,
          state: village.BoardState.FILL
        }
      },
      '2': {
        madman: {
          date: 1,
          fixed: false,
          state: village.BoardState.QUESTION
        },
        seer: {
          date: 1,
          fixed: true,
          state: village.BoardState.FILL
        },
        villager: {
          date: 1,
          fixed: false,
          state: village.BoardState.TRIANGLE
        },
        werewolf: {
          date: 1,
          fixed: false,
          state: village.BoardState.QUESTION
        }
      },
      '3': {
        madman: {
          date: 1,
          fixed: false,
          state: village.BoardState.QUESTION
        },
        seer: {
          date: 1,
          fixed: true,
          state: village.BoardState.FILL
        },
        villager: {
          date: 1,
          fixed: false,
          state: village.BoardState.QUESTION
        },
        werewolf: {
          date: 1,
          fixed: false,
          state: village.BoardState.QUESTION
        }
      },
      '4': {
        madman: {
          date: 1,
          fixed: false,
          state: village.BoardState.QUESTION
        },
        seer: {
          date: 1,
          fixed: true,
          state: village.BoardState.FILL
        },
        villager: {
          date: 1,
          fixed: false,
          state: village.BoardState.QUESTION
        },
        werewolf: {
          date: 1,
          fixed: false,
          state: village.BoardState.QUESTION
        }
      },
      '5': {
        madman: {
          date: 1,
          fixed: false,
          state: village.BoardState.QUESTION
        },
        seer: {
          date: 1,
          fixed: true,
          state: village.BoardState.FILL
        },
        villager: {
          date: 1,
          fixed: false,
          state: village.BoardState.QUESTION
        },
        werewolf: {
          date: 1,
          fixed: false,
          state: village.BoardState.QUESTION
        }
      }
    }
    const story =
      <Prediction
        handleBoardClick={(agentId, roleId) => action(`handleBoardClick [${agentId}, ${roleId}]`)}
        handleMouseEnter={role => action(`handleMouseEnter ${role}`)}
        handleMouseLeave={action('handleMouseLeave')}
        playerStatus={playerStatus}
        roleStatus={roleStatus}
        spec={spec}
        table={table}
      />

    return story
  })
  .add('13 players(spec is visible)', () => {
    const playerStatus: Props['playerStatus'] = [
      {
        'id': 1,
        'image': 'https://werewolf.world/image/0.1/Walter.jpg',
        'name': 'ヴァルター',
        'status': village.AgentStatus.alive
      },
      {
        'id': 2,
        'image': 'https://werewolf.world/image/0.1/Moritz.jpg',
        'name': 'モーリッツ',
        'status': village.AgentStatus.alive
      },
      {
        'id': 3,
        'image': 'https://werewolf.world/image/0.1/Simson.jpg',
        'name': 'ジムゾン',
        'status': village.AgentStatus.alive
      },
      {
        'id': 4,
        'image': 'https://werewolf.world/image/0.1/Thomas.jpg',
        'name': 'トーマス',
        'status': village.AgentStatus.alive
      },
      {
        'id': 5,
        'image': 'https://werewolf.world/image/0.1/Nicholas.jpg',
        'name': 'ニコラス',
        'status': village.AgentStatus.alive
      },
      {
        'id': 6,
        'image': 'https://werewolf.world/image/0.1/Dieter.jpg',
        'name': 'ディーター',
        'status': village.AgentStatus.alive
      },
      {
        'id': 7,
        'image': 'https://werewolf.world/image/0.1/Peter.jpg',
        'name': 'ペーター',
        'status': village.AgentStatus.alive
      },
      {
        'id': 8,
        'image': 'https://werewolf.world/image/0.1/Lisa.jpg',
        'name': 'リーザ',
        'status': village.AgentStatus.alive
      },
      {
        'id': 9,
        'image': 'https://werewolf.world/image/0.1/Alvin.jpg',
        'name': 'アルビン',
        'status': village.AgentStatus.alive
      },
      {
        'id': 11,
        'image': 'https://werewolf.world/image/0.1/Otto.jpg',
        'name': 'オットー',
        'status': village.AgentStatus.alive
      },
      {
        'id': 12,
        'image': 'https://werewolf.world/image/0.1/Joachim.jpg',
        'name': 'ヨアヒム',
        'status': village.AgentStatus.alive
      },
      {
        'id': 13,
        'image': 'https://werewolf.world/image/0.1/Pamela.jpg',
        'name': 'パメラ',
        'status': village.AgentStatus.alive
      },
      {
        'id': 14,
        'image': 'https://werewolf.world/image/0.1/Jacob.jpg',
        'name': 'ヤコブ',
        'status': village.AgentStatus.alive
      }
    ]
    const roleStatus: Props['roleStatus'] = [
      {
        'id': village.RoleId.villager,
        'image': 'https://werewolf.world/image/0.1/villager.jpg',
        'name': '村人',
        'numberOfAgents': 4
      },
      {
        'id': village.RoleId.seer,
        'image': 'https://werewolf.world/image/0.1/seer.jpg',
        'name': '占い師',
        'numberOfAgents': 1
      },
      {
        'id': village.RoleId.medium,
        'image': 'https://werewolf.world/image/0.1/medium.jpg',
        'name': '霊媒師',
        'numberOfAgents': 1
      },
      {
        'id': village.RoleId.hunter,
        'image': 'https://werewolf.world/image/0.1/hunter.jpg',
        'name': '狩人',
        'numberOfAgents': 1
      },
      {
        'id': village.RoleId.mason,
        'image': 'https://werewolf.world/image/0.1/mason.jpg',
        'name': '共有者',
        'numberOfAgents': 2
      },
      {
        'id': village.RoleId.madman,
        'image': 'https://werewolf.world/image/0.1/madman.jpg',
        'name': '狂人',
        'numberOfAgents': 1
      },
      {
        'id': village.RoleId.werewolf,
        'image': 'https://werewolf.world/image/0.1/werewolf.jpg',
        'name': '人狼',
        'numberOfAgents': 2
      },
      {
        'id': village.RoleId.werehamster,
        'image': 'https://werewolf.world/image/0.1/werehamster.jpg',
        'name': 'ハムスター人間',
        'numberOfAgents': 1
      }
    ]
    const spec: Props['spec'] = {
      role: village.RoleId.villager,
      visible: true
    }
    const table: Props['table'] = {
      '1': {
        hunter: {
          date: 1,
          fixed: true,
          state: village.BoardState.FILL
        },
        madman: {
          date: 1,
          fixed: true,
          state: village.BoardState.FILL
        },
        mason: {
          date: 1,
          fixed: true,
          state: village.BoardState.FILL
        },
        medium: {
          date: 1,
          fixed: true,
          state: village.BoardState.FILL
        },
        seer: {
          date: 1,
          fixed: true,
          state: village.BoardState.CIRCLE
        },
        villager: {
          date: 1,
          fixed: true,
          state: village.BoardState.FILL
        },
        werehamster: {
          date: 1,
          fixed: true,
          state: village.BoardState.FILL
        },
        werewolf: {
          date: 1,
          fixed: true,
          state: village.BoardState.FILL
        }
      },
      '2': {
        hunter: {
          date: 1,
          fixed: false,
          state: village.BoardState.CROSS
        },
        madman: {
          date: 1,
          fixed: false,
          state: village.BoardState.QUESTION
        },
        mason: {
          date: 1,
          fixed: false,
          state: village.BoardState.QUESTION
        },
        medium: {
          date: 1,
          fixed: false,
          state: village.BoardState.CIRCLE
        },
        seer: {
          date: 1,
          fixed: true,
          state: village.BoardState.FILL
        },
        villager: {
          date: 1,
          fixed: false,
          state: village.BoardState.TRIANGLE
        },
        werehamster: {
          date: 1,
          fixed: false,
          state: village.BoardState.QUESTION
        },
        werewolf: {
          date: 1,
          fixed: false,
          state: village.BoardState.QUESTION
        }
      },
      '3': {
        hunter: {
          date: 1,
          fixed: false,
          state: village.BoardState.QUESTION
        },
        madman: {
          date: 1,
          fixed: false,
          state: village.BoardState.QUESTION
        },
        mason: {
          date: 1,
          fixed: false,
          state: village.BoardState.QUESTION
        },
        medium: {
          date: 1,
          fixed: false,
          state: village.BoardState.QUESTION
        },
        seer: {
          date: 1,
          fixed: true,
          state: village.BoardState.FILL
        },
        villager: {
          date: 1,
          fixed: false,
          state: village.BoardState.QUESTION
        },
        werehamster: {
          date: 1,
          fixed: false,
          state: village.BoardState.QUESTION
        },
        werewolf: {
          date: 1,
          fixed: false,
          state: village.BoardState.QUESTION
        }
      },
      '4': {
        hunter: {
          date: 1,
          fixed: false,
          state: village.BoardState.QUESTION
        },
        madman: {
          date: 1,
          fixed: false,
          state: village.BoardState.QUESTION
        },
        mason: {
          date: 1,
          fixed: false,
          state: village.BoardState.QUESTION
        },
        medium: {
          date: 1,
          fixed: false,
          state: village.BoardState.QUESTION
        },
        seer: {
          date: 1,
          fixed: true,
          state: village.BoardState.FILL
        },
        villager: {
          date: 1,
          fixed: false,
          state: village.BoardState.QUESTION
        },
        werehamster: {
          date: 1,
          fixed: false,
          state: village.BoardState.QUESTION
        },
        werewolf: {
          date: 1,
          fixed: false,
          state: village.BoardState.QUESTION
        }
      },
      '5': {
        hunter: {
          date: 1,
          fixed: false,
          state: village.BoardState.QUESTION
        },
        madman: {
          date: 1,
          fixed: false,
          state: village.BoardState.QUESTION
        },
        mason: {
          date: 1,
          fixed: false,
          state: village.BoardState.QUESTION
        },
        medium: {
          date: 1,
          fixed: false,
          state: village.BoardState.QUESTION
        },
        seer: {
          date: 1,
          fixed: true,
          state: village.BoardState.FILL
        },
        villager: {
          date: 1,
          fixed: false,
          state: village.BoardState.QUESTION
        },
        werehamster: {
          date: 1,
          fixed: false,
          state: village.BoardState.QUESTION
        },
        werewolf: {
          date: 1,
          fixed: false,
          state: village.BoardState.QUESTION
        }
      },
      '6': {
        hunter: {
          date: 1,
          fixed: false,
          state: village.BoardState.QUESTION
        },
        madman: {
          date: 1,
          fixed: false,
          state: village.BoardState.QUESTION
        },
        mason: {
          date: 1,
          fixed: false,
          state: village.BoardState.QUESTION
        },
        medium: {
          date: 1,
          fixed: false,
          state: village.BoardState.QUESTION
        },
        seer: {
          date: 1,
          fixed: true,
          state: village.BoardState.FILL
        },
        villager: {
          date: 1,
          fixed: false,
          state: village.BoardState.QUESTION
        },
        werehamster: {
          date: 1,
          fixed: false,
          state: village.BoardState.QUESTION
        },
        werewolf: {
          date: 1,
          fixed: false,
          state: village.BoardState.QUESTION
        }
      },
      '7': {
        hunter: {
          date: 1,
          fixed: false,
          state: village.BoardState.QUESTION
        },
        madman: {
          date: 1,
          fixed: false,
          state: village.BoardState.QUESTION
        },
        mason: {
          date: 1,
          fixed: false,
          state: village.BoardState.QUESTION
        },
        medium: {
          date: 1,
          fixed: false,
          state: village.BoardState.QUESTION
        },
        seer: {
          date: 1,
          fixed: true,
          state: village.BoardState.FILL
        },
        villager: {
          date: 1,
          fixed: false,
          state: village.BoardState.QUESTION
        },
        werehamster: {
          date: 1,
          fixed: false,
          state: village.BoardState.QUESTION
        },
        werewolf: {
          date: 1,
          fixed: false,
          state: village.BoardState.QUESTION
        }
      },
      '8': {
        hunter: {
          date: 1,
          fixed: false,
          state: village.BoardState.QUESTION
        },
        madman: {
          date: 1,
          fixed: false,
          state: village.BoardState.QUESTION
        },
        mason: {
          date: 1,
          fixed: false,
          state: village.BoardState.QUESTION
        },
        medium: {
          date: 1,
          fixed: false,
          state: village.BoardState.QUESTION
        },
        seer: {
          date: 1,
          fixed: true,
          state: village.BoardState.FILL
        },
        villager: {
          date: 1,
          fixed: false,
          state: village.BoardState.QUESTION
        },
        werehamster: {
          date: 1,
          fixed: false,
          state: village.BoardState.QUESTION
        },
        werewolf: {
          date: 1,
          fixed: false,
          state: village.BoardState.QUESTION
        }
      },
      '9': {
        hunter: {
          date: 1,
          fixed: false,
          state: village.BoardState.QUESTION
        },
        madman: {
          date: 1,
          fixed: false,
          state: village.BoardState.QUESTION
        },
        mason: {
          date: 1,
          fixed: false,
          state: village.BoardState.QUESTION
        },
        medium: {
          date: 1,
          fixed: false,
          state: village.BoardState.QUESTION
        },
        seer: {
          date: 1,
          fixed: true,
          state: village.BoardState.FILL
        },
        villager: {
          date: 1,
          fixed: false,
          state: village.BoardState.QUESTION
        },
        werehamster: {
          date: 1,
          fixed: false,
          state: village.BoardState.QUESTION
        },
        werewolf: {
          date: 1,
          fixed: false,
          state: village.BoardState.QUESTION
        }
      },
      '11': {
        hunter: {
          date: 1,
          fixed: false,
          state: village.BoardState.QUESTION
        },
        madman: {
          date: 1,
          fixed: false,
          state: village.BoardState.QUESTION
        },
        mason: {
          date: 1,
          fixed: false,
          state: village.BoardState.QUESTION
        },
        medium: {
          date: 1,
          fixed: false,
          state: village.BoardState.QUESTION
        },
        seer: {
          date: 1,
          fixed: true,
          state: village.BoardState.FILL
        },
        villager: {
          date: 1,
          fixed: false,
          state: village.BoardState.QUESTION
        },
        werehamster: {
          date: 1,
          fixed: false,
          state: village.BoardState.QUESTION
        },
        werewolf: {
          date: 1,
          fixed: false,
          state: village.BoardState.QUESTION
        }
      },
      '12': {
        hunter: {
          date: 1,
          fixed: false,
          state: village.BoardState.QUESTION
        },
        madman: {
          date: 1,
          fixed: false,
          state: village.BoardState.QUESTION
        },
        mason: {
          date: 1,
          fixed: false,
          state: village.BoardState.QUESTION
        },
        medium: {
          date: 1,
          fixed: false,
          state: village.BoardState.QUESTION
        },
        seer: {
          date: 1,
          fixed: true,
          state: village.BoardState.FILL
        },
        villager: {
          date: 1,
          fixed: false,
          state: village.BoardState.QUESTION
        },
        werehamster: {
          date: 1,
          fixed: false,
          state: village.BoardState.QUESTION
        },
        werewolf: {
          date: 1,
          fixed: false,
          state: village.BoardState.QUESTION
        }
      },
      '13': {
        hunter: {
          date: 1,
          fixed: false,
          state: village.BoardState.QUESTION
        },
        madman: {
          date: 1,
          fixed: false,
          state: village.BoardState.QUESTION
        },
        mason: {
          date: 1,
          fixed: false,
          state: village.BoardState.QUESTION
        },
        medium: {
          date: 1,
          fixed: false,
          state: village.BoardState.QUESTION
        },
        seer: {
          date: 1,
          fixed: true,
          state: village.BoardState.FILL
        },
        villager: {
          date: 1,
          fixed: false,
          state: village.BoardState.QUESTION
        },
        werehamster: {
          date: 1,
          fixed: false,
          state: village.BoardState.QUESTION
        },
        werewolf: {
          date: 1,
          fixed: false,
          state: village.BoardState.QUESTION
        }
      },
      '14': {
        hunter: {
          date: 1,
          fixed: false,
          state: village.BoardState.QUESTION
        },
        madman: {
          date: 1,
          fixed: false,
          state: village.BoardState.QUESTION
        },
        mason: {
          date: 1,
          fixed: false,
          state: village.BoardState.QUESTION
        },
        medium: {
          date: 1,
          fixed: false,
          state: village.BoardState.QUESTION
        },
        seer: {
          date: 1,
          fixed: true,
          state: village.BoardState.FILL
        },
        villager: {
          date: 1,
          fixed: false,
          state: village.BoardState.QUESTION
        },
        werehamster: {
          date: 1,
          fixed: false,
          state: village.BoardState.QUESTION
        },
        werewolf: {
          date: 1,
          fixed: false,
          state: village.BoardState.QUESTION
        }
      }
    }
    const story =
      <Prediction
        handleBoardClick={(agentId, roleId) => action(`handleBoardClick [${agentId}, ${roleId}]`)}
        handleMouseEnter={role => action(`handleMouseEnter ${role}`)}
        handleMouseLeave={action('handleMouseLeave')}
        playerStatus={playerStatus}
        roleStatus={roleStatus}
        spec={spec}
        table={table}
      />

    return story
  })
  .add('5 players(spec is visible)', () => {
    const playerStatus: Props['playerStatus'] = [
      {
        'id': 1,
        'image': 'https://werewolf.world/image/0.1/Walter.jpg',
        'name': 'ヴァルター',
        'status': village.AgentStatus.alive
      },
      {
        'id': 2,
        'image': 'https://werewolf.world/image/0.1/Moritz.jpg',
        'name': 'モーリッツ',
        'status': village.AgentStatus.alive
      },
      {
        'id': 3,
        'image': 'https://werewolf.world/image/0.1/Simson.jpg',
        'name': 'ジムゾン',
        'status': village.AgentStatus.alive
      },
      {
        'id': 4,
        'image': 'https://werewolf.world/image/0.1/Thomas.jpg',
        'name': 'トーマス',
        'status': village.AgentStatus.alive
      },
      {
        'id': 5,
        'image': 'https://werewolf.world/image/0.1/Nicholas.jpg',
        'name': 'ニコラス',
        'status': village.AgentStatus.alive
      }
    ]
    const roleStatus: Props['roleStatus'] = [
      {
        'id': village.RoleId.villager,
        'image': 'https://werewolf.world/image/0.1/villager.jpg',
        'name': '村人',
        'numberOfAgents': 2
      },
      {
        'id': village.RoleId.seer,
        'image': 'https://werewolf.world/image/0.1/seer.jpg',
        'name': '占い師',
        'numberOfAgents': 1
      },
      {
        'id': village.RoleId.madman,
        'image': 'https://werewolf.world/image/0.1/madman.jpg',
        'name': '狂人',
        'numberOfAgents': 1
      },
      {
        'id': village.RoleId.werewolf,
        'image': 'https://werewolf.world/image/0.1/werewolf.jpg',
        'name': '人狼',
        'numberOfAgents': 1
      }
    ]
    const spec: Props['spec'] = {
      role: village.RoleId.villager,
      visible: true
    }
    const table: Props['table'] = {
      '1': {
        madman: {
          date: 1,
          fixed: true,
          state: village.BoardState.FILL
        },
        seer: {
          date: 1,
          fixed: true,
          state: village.BoardState.CIRCLE
        },
        villager: {
          date: 1,
          fixed: true,
          state: village.BoardState.FILL
        },
        werewolf: {
          date: 1,
          fixed: true,
          state: village.BoardState.FILL
        }
      },
      '2': {
        madman: {
          date: 1,
          fixed: false,
          state: village.BoardState.QUESTION
        },
        seer: {
          date: 1,
          fixed: true,
          state: village.BoardState.FILL
        },
        villager: {
          date: 1,
          fixed: false,
          state: village.BoardState.TRIANGLE
        },
        werewolf: {
          date: 1,
          fixed: false,
          state: village.BoardState.QUESTION
        }
      },
      '3': {
        madman: {
          date: 1,
          fixed: false,
          state: village.BoardState.QUESTION
        },
        seer: {
          date: 1,
          fixed: true,
          state: village.BoardState.FILL
        },
        villager: {
          date: 1,
          fixed: false,
          state: village.BoardState.QUESTION
        },
        werewolf: {
          date: 1,
          fixed: false,
          state: village.BoardState.QUESTION
        }
      },
      '4': {
        madman: {
          date: 1,
          fixed: false,
          state: village.BoardState.QUESTION
        },
        seer: {
          date: 1,
          fixed: true,
          state: village.BoardState.FILL
        },
        villager: {
          date: 1,
          fixed: false,
          state: village.BoardState.QUESTION
        },
        werewolf: {
          date: 1,
          fixed: false,
          state: village.BoardState.QUESTION
        }
      },
      '5': {
        madman: {
          date: 1,
          fixed: false,
          state: village.BoardState.QUESTION
        },
        seer: {
          date: 1,
          fixed: true,
          state: village.BoardState.FILL
        },
        villager: {
          date: 1,
          fixed: false,
          state: village.BoardState.QUESTION
        },
        werewolf: {
          date: 1,
          fixed: false,
          state: village.BoardState.QUESTION
        }
      }
    }
    const story =
      <Prediction
        handleBoardClick={(agentId, roleId) => action(`handleBoardClick [${agentId}, ${roleId}]`)}
        handleMouseEnter={role => action(`handleMouseEnter ${role}`)}
        handleMouseLeave={action('handleMouseLeave')}
        playerStatus={playerStatus}
        roleStatus={roleStatus}
        spec={spec}
        table={table}
      />

    return story
  })

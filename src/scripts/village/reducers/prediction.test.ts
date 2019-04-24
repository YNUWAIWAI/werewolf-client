/* global village */
import * as ActionTypes from '../constants/ActionTypes'
import {
  firstMorning,
  firstMorning3,
  firstMorning4,
  firstMorning5,
  flavorText
} from './fakeServer'
import reducer, {initialState} from './prediction'
import {socket} from '../actions'

describe('socket/MESSAGE', () => {
  test('flavor text', () => {
    expect(
      reducer(
        initialState,
        socket.message(flavorText)
      )
    ).toEqual(initialState)
  })
  test('my role is seer (numberOfAgents === 1)', () => {
    expect(
      reducer(
        initialState,
        socket.message(firstMorning)
      )
    ).toEqual(
      {
        playerStatus: [
          {
            '@id': 'https://licos.online/state/0.2/village#3/agent#0',
            'id': 0,
            'image': 'https://werewolf.world/image/0.2/Gert.jpg',
            'name': {
              en: 'Gert',
              ja: 'ゲルト'
            },
            'status': 'alive'
          },
          {
            '@id': 'https://licos.online/state/0.2/village#3/agent#1',
            'id': 1,
            'image': 'https://werewolf.world/image/0.2/Walter.jpg',
            'name': {
              en: 'Walter',
              ja: 'ヴァルター'
            },
            'status': 'alive'
          },
          {
            '@id': 'https://licos.online/state/0.2/village#3/agent#2',
            'id': 2,
            'image': 'https://werewolf.world/image/0.2/Moritz.jpg',
            'name': {
              en: 'Moritz',
              ja: 'モーリッツ'
            },
            'status': 'alive'
          },
          {
            '@id': 'https://licos.online/state/0.2/village#3/agent#3',
            'id': 3,
            'image': 'https://werewolf.world/image/0.2/Simson.jpg',
            'name': {
              en: 'Simson',
              ja: 'ジムゾン'
            },
            'status': 'alive'
          },
          {
            '@id': 'https://licos.online/state/0.2/village#3/agent#4',
            'id': 4,
            'image': 'https://werewolf.world/image/0.2/Thomas.jpg',
            'name': {
              en: 'Thomas',
              ja: 'トーマス'
            },
            'status': 'alive'
          },
          {
            '@id': 'https://licos.online/state/0.2/village#3/agent#5',
            'id': 5,
            'image': 'https://werewolf.world/image/0.2/Nicholas.jpg',
            'name': {
              en: 'Nicholas',
              ja: 'ニコラス'
            },
            'status': 'alive'
          },
          {
            '@id': 'https://licos.online/state/0.2/village#3/agent#6',
            'id': 6,
            'image': 'https://werewolf.world/image/0.2/Dieter.jpg',
            'name': {
              en: 'Dieter',
              ja: 'ディーター'
            },
            'status': 'alive'
          },
          {
            '@id': 'https://licos.online/state/0.2/village#3/agent#7',
            'id': 7,
            'image': 'https://werewolf.world/image/0.2/Peter.jpg',
            'name': {
              en: 'Peter',
              ja: 'ペーター'
            },
            'status': 'alive'
          },
          {
            '@id': 'https://licos.online/state/0.2/village#3/agent#8',
            'id': 8,
            'image': 'https://werewolf.world/image/0.2/Lisa.jpg',
            'name': {
              en: 'Lisa',
              ja: 'リーザ'
            },
            'status': 'alive'
          },
          {
            '@id': 'https://licos.online/state/0.2/village#3/agent#9',
            'id': 9,
            'image': 'https://werewolf.world/image/0.2/Alvin.jpg',
            'name': {
              en: 'Alvin',
              ja: 'アルビン'
            },
            'status': 'alive'
          },
          {
            '@id': 'https://licos.online/state/0.2/village#3/agent#10',
            'id': 10,
            'image': 'https://werewolf.world/image/0.2/Catalina.jpg',
            'name': {
              en: 'Catalina',
              ja: 'カタリナ'
            },
            'status': 'alive'
          },
          {
            '@id': 'https://licos.online/state/0.2/village#3/agent#11',
            'id': 11,
            'image': 'https://werewolf.world/image/0.2/Otto.jpg',
            'name': {
              en: 'Otto',
              ja: 'オットー'
            },
            'status': 'alive'
          },
          {
            '@id': 'https://licos.online/state/0.2/village#3/agent#12',
            'id': 12,
            'image': 'https://werewolf.world/image/0.2/Joachim.jpg',
            'name': {
              en: 'Joachim',
              ja: 'ヨアヒム'
            },
            'status': 'alive'
          },
          {
            '@id': 'https://licos.online/state/0.2/village#3/agent#13',
            'id': 13,
            'image': 'https://werewolf.world/image/0.2/Pamela.jpg',
            'name': {
              en: 'Pamela',
              ja: 'パメラ'
            },
            'status': 'alive'
          },
          {
            '@id': 'https://licos.online/state/0.2/village#3/agent#14',
            'id': 14,
            'image': 'https://werewolf.world/image/0.2/Jacob.jpg',
            'name': {
              en: 'Jacob',
              ja: 'ヤコブ'
            },
            'status': 'alive'
          }
        ],
        roleStatus: [
          {
            '@id': 'https://licos.online/state/0.2/village#3/role#villager',
            'id': 'villager',
            'image': 'https://werewolf.world/image/0.2/villager.jpg',
            'name': {
              en: 'Villager',
              ja: '村人'
            },
            'numberOfAgents': 6
          },
          {
            '@id': 'https://licos.online/state/0.2/village#3/role#seer',
            'id': 'seer',
            'image': 'https://werewolf.world/image/0.2/seer.jpg',
            'name': {
              en: 'Seer',
              ja: '占い師'
            },
            'numberOfAgents': 1
          },
          {
            '@id': 'https://licos.online/state/0.2/village#3/role#medium',
            'id': 'medium',
            'image': 'https://werewolf.world/image/0.2/medium.jpg',
            'name': {
              en: 'Medium',
              ja: '霊媒師'
            },
            'numberOfAgents': 1
          },
          {
            '@id': 'https://licos.online/state/0.2/village#3/role#hunter',
            'id': 'hunter',
            'image': 'https://werewolf.world/image/0.2/hunter.jpg',
            'name': {
              en: 'Hunter',
              ja: '狩人'
            },
            'numberOfAgents': 1
          },
          {
            '@id': 'https://licos.online/state/0.2/village#3/role#mason',
            'id': 'mason',
            'image': 'https://werewolf.world/image/0.2/mason.jpg',
            'name': {
              en: 'Mason',
              ja: '共有者'
            },
            'numberOfAgents': 2
          },
          {
            '@id': 'https://licos.online/state/0.2/village#3/role#madman',
            'id': 'madman',
            'image': 'https://werewolf.world/image/0.2/madman.jpg',
            'name': {
              en: 'Madman',
              ja: '狂人'
            },
            'numberOfAgents': 1
          },
          {
            '@id': 'https://licos.online/state/0.2/village#3/role#werewolf',
            'id': 'werewolf',
            'image': 'https://werewolf.world/image/0.2/werewolf.jpg',
            'name': {
              en: 'Werewolf',
              ja: '人狼'
            },
            'numberOfAgents': 2
          },
          {
            '@id': 'https://licos.online/state/0.2/village#3/role#werehamster',
            'id': 'werehamster',
            'image': 'https://werewolf.world/image/0.2/werehamster.jpg',
            'name': {
              en: 'Werehamster',
              ja: 'ハムスター人間'
            },
            'numberOfAgents': 1
          }
        ],
        spec: {
          role: village.RoleId.villager,
          visible: false
        },
        table: {
          '0': {
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
          '10': {
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
      }
    )
  })
  test('my role is villager', () => {
    expect(
      reducer(
        initialState,
        socket.message(firstMorning3)
      )
    ).toEqual(
      {
        playerStatus: [
          {
            '@id': 'https://licos.online/state/0.2/village#3/agent#0',
            'id': 0,
            'image': 'https://werewolf.world/image/0.2/Gert.jpg',
            'name': {
              en: 'Gert',
              ja: 'ゲルト'
            },
            'status': 'alive'
          },
          {
            '@id': 'https://licos.online/state/0.2/village#3/agent#1',
            'id': 1,
            'image': 'https://werewolf.world/image/0.2/Walter.jpg',
            'name': {
              en: 'Walter',
              ja: 'ヴァルター'
            },
            'status': 'alive'
          },
          {
            '@id': 'https://licos.online/state/0.2/village#3/agent#2',
            'id': 2,
            'image': 'https://werewolf.world/image/0.2/Moritz.jpg',
            'name': {
              en: 'Moritz',
              ja: 'モーリッツ'
            },
            'status': 'alive'
          },
          {
            '@id': 'https://licos.online/state/0.2/village#3/agent#3',
            'id': 3,
            'image': 'https://werewolf.world/image/0.2/Simson.jpg',
            'name': {
              en: 'Simson',
              ja: 'ジムゾン'
            },
            'status': 'alive'
          },
          {
            '@id': 'https://licos.online/state/0.2/village#3/agent#4',
            'id': 4,
            'image': 'https://werewolf.world/image/0.2/Thomas.jpg',
            'name': {
              en: 'Thomas',
              ja: 'トーマス'
            },
            'status': 'alive'
          },
          {
            '@id': 'https://licos.online/state/0.2/village#3/agent#5',
            'id': 5,
            'image': 'https://werewolf.world/image/0.2/Nicholas.jpg',
            'name': {
              en: 'Nicholas',
              ja: 'ニコラス'
            },
            'status': 'alive'
          },
          {
            '@id': 'https://licos.online/state/0.2/village#3/agent#6',
            'id': 6,
            'image': 'https://werewolf.world/image/0.2/Dieter.jpg',
            'name': {
              en: 'Dieter',
              ja: 'ディーター'
            },
            'status': 'alive'
          },
          {
            '@id': 'https://licos.online/state/0.2/village#3/agent#7',
            'id': 7,
            'image': 'https://werewolf.world/image/0.2/Peter.jpg',
            'name': {
              en: 'Peter',
              ja: 'ペーター'
            },
            'status': 'alive'
          },
          {
            '@id': 'https://licos.online/state/0.2/village#3/agent#8',
            'id': 8,
            'image': 'https://werewolf.world/image/0.2/Lisa.jpg',
            'name': {
              en: 'Lisa',
              ja: 'リーザ'
            },
            'status': 'alive'
          },
          {
            '@id': 'https://licos.online/state/0.2/village#3/agent#9',
            'id': 9,
            'image': 'https://werewolf.world/image/0.2/Alvin.jpg',
            'name': {
              en: 'Alvin',
              ja: 'アルビン'
            },
            'status': 'alive'
          },
          {
            '@id': 'https://licos.online/state/0.2/village#3/agent#10',
            'id': 10,
            'image': 'https://werewolf.world/image/0.2/Catalina.jpg',
            'name': {
              en: 'Catalina',
              ja: 'カタリナ'
            },
            'status': 'alive'
          },
          {
            '@id': 'https://licos.online/state/0.2/village#3/agent#11',
            'id': 11,
            'image': 'https://werewolf.world/image/0.2/Otto.jpg',
            'name': {
              en: 'Otto',
              ja: 'オットー'
            },
            'status': 'alive'
          },
          {
            '@id': 'https://licos.online/state/0.2/village#3/agent#12',
            'id': 12,
            'image': 'https://werewolf.world/image/0.2/Joachim.jpg',
            'name': {
              en: 'Joachim',
              ja: 'ヨアヒム'
            },
            'status': 'alive'
          },
          {
            '@id': 'https://licos.online/state/0.2/village#3/agent#13',
            'id': 13,
            'image': 'https://werewolf.world/image/0.2/Pamela.jpg',
            'name': {
              en: 'Pamela',
              ja: 'パメラ'
            },
            'status': 'alive'
          },
          {
            '@id': 'https://licos.online/state/0.2/village#3/agent#14',
            'id': 14,
            'image': 'https://werewolf.world/image/0.2/Jacob.jpg',
            'name': {
              en: 'Jacob',
              ja: 'ヤコブ'
            },
            'status': 'alive'
          }
        ],
        roleStatus: [
          {
            '@id': 'https://licos.online/state/0.2/village#3/role#villager',
            'id': 'villager',
            'image': 'https://werewolf.world/image/0.2/villager.jpg',
            'name': {
              en: 'Villager',
              ja: '村人'
            },
            'numberOfAgents': 6
          },
          {
            '@id': 'https://licos.online/state/0.2/village#3/role#seer',
            'id': 'seer',
            'image': 'https://werewolf.world/image/0.2/seer.jpg',
            'name': {
              en: 'Seer',
              ja: '占い師'
            },
            'numberOfAgents': 1
          },
          {
            '@id': 'https://licos.online/state/0.2/village#3/role#medium',
            'id': 'medium',
            'image': 'https://werewolf.world/image/0.2/medium.jpg',
            'name': {
              en: 'Medium',
              ja: '霊媒師'
            },
            'numberOfAgents': 1
          },
          {
            '@id': 'https://licos.online/state/0.2/village#3/role#hunter',
            'id': 'hunter',
            'image': 'https://werewolf.world/image/0.2/hunter.jpg',
            'name': {
              en: 'Hunter',
              ja: '狩人'
            },
            'numberOfAgents': 1
          },
          {
            '@id': 'https://licos.online/state/0.2/village#3/role#mason',
            'id': 'mason',
            'image': 'https://werewolf.world/image/0.2/mason.jpg',
            'name': {
              en: 'Mason',
              ja: '共有者'
            },
            'numberOfAgents': 2
          },
          {
            '@id': 'https://licos.online/state/0.2/village#3/role#madman',
            'id': 'madman',
            'image': 'https://werewolf.world/image/0.2/madman.jpg',
            'name': {
              en: 'Madman',
              ja: '狂人'
            },
            'numberOfAgents': 1
          },
          {
            '@id': 'https://licos.online/state/0.2/village#3/role#werewolf',
            'id': 'werewolf',
            'image': 'https://werewolf.world/image/0.2/werewolf.jpg',
            'name': {
              en: 'Werewolf',
              ja: '人狼'
            },
            'numberOfAgents': 2
          },
          {
            '@id': 'https://licos.online/state/0.2/village#3/role#werehamster',
            'id': 'werehamster',
            'image': 'https://werewolf.world/image/0.2/werehamster.jpg',
            'name': {
              en: 'Werehamster',
              ja: 'ハムスター人間'
            },
            'numberOfAgents': 1
          }
        ],
        spec: {
          role: village.RoleId.villager,
          visible: false
        },
        table: {
          '0': {
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
              fixed: false,
              state: village.BoardState.QUESTION
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
              state: village.BoardState.FILL
            },
            villager: {
              date: 1,
              fixed: true,
              state: village.BoardState.CIRCLE
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
              fixed: false,
              state: village.BoardState.QUESTION
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
              fixed: false,
              state: village.BoardState.QUESTION
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
              fixed: false,
              state: village.BoardState.QUESTION
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
              fixed: false,
              state: village.BoardState.QUESTION
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
              fixed: false,
              state: village.BoardState.QUESTION
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
              fixed: false,
              state: village.BoardState.QUESTION
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
              fixed: false,
              state: village.BoardState.QUESTION
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
              fixed: false,
              state: village.BoardState.QUESTION
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
          '10': {
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
              fixed: false,
              state: village.BoardState.QUESTION
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
              fixed: false,
              state: village.BoardState.QUESTION
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
              fixed: false,
              state: village.BoardState.QUESTION
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
              fixed: false,
              state: village.BoardState.QUESTION
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
              fixed: false,
              state: village.BoardState.QUESTION
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
      }
    )
  })
  test('ignore the role that is not exists', () => {
    expect(
      reducer(
        initialState,
        socket.message(firstMorning4)
      )
    ).toEqual(
      {
        playerStatus: [
          {
            '@id': 'https://licos.online/state/0.2/village#3/agent#0',
            'id': 0,
            'image': 'https://werewolf.world/image/0.2/Gert.jpg',
            'name': {
              en: 'Gert',
              ja: 'ゲルト'
            },
            'status': 'alive'
          },
          {
            '@id': 'https://licos.online/state/0.2/village#3/agent#1',
            'id': 1,
            'image': 'https://werewolf.world/image/0.2/Walter.jpg',
            'name': {
              en: 'Walter',
              ja: 'ヴァルター'
            },
            'status': 'alive'
          },
          {
            '@id': 'https://licos.online/state/0.2/village#3/agent#2',
            'id': 2,
            'image': 'https://werewolf.world/image/0.2/Moritz.jpg',
            'name': {
              en: 'Moritz',
              ja: 'モーリッツ'
            },
            'status': 'alive'
          },
          {
            '@id': 'https://licos.online/state/0.2/village#3/agent#3',
            'id': 3,
            'image': 'https://werewolf.world/image/0.2/Simson.jpg',
            'name': {
              en: 'Simson',
              ja: 'ジムゾン'
            },
            'status': 'alive'
          }
        ],
        roleStatus: [
          {
            '@id': 'https://licos.online/state/0.2/village#3/role#villager',
            'id': 'villager',
            'image': 'https://werewolf.world/image/0.2/villager.jpg',
            'name': {
              en: 'Villager',
              ja: '村人'
            },
            'numberOfAgents': 3
          },
          {
            '@id': 'https://licos.online/state/0.2/village#3/role#werewolf',
            'id': 'werewolf',
            'image': 'https://werewolf.world/image/0.2/werewolf.jpg',
            'name': {
              en: 'Werewolf',
              ja: '人狼'
            },
            'numberOfAgents': 1
          }
        ],
        spec: {
          role: village.RoleId.villager,
          visible: false
        },
        table: {
          '0': {
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
          '1': {
            villager: {
              date: 1,
              fixed: true,
              state: village.BoardState.CIRCLE
            },
            werewolf: {
              date: 1,
              fixed: true,
              state: village.BoardState.FILL
            }
          },
          '2': {
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
          '3': {
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
      }
    )
  })
  test('my role is mason', () => {
    expect(
      reducer(
        initialState,
        socket.message(firstMorning5)
      )
    ).toEqual(
      {
        playerStatus: [
          {
            '@id': 'https://licos.online/state/0.2/village#29/agent#7',
            'id': 7,
            'image': 'https://werewolf.world/image/0.2/adil.jpg',
            'name': {
              en: 'Adil'
            },
            'status': 'alive'
          },
          {
            '@id': 'https://licos.online/state/0.2/village#29/agent#5',
            'id': 5,
            'image': 'https://werewolf.world/image/0.2/fernando.jpg',
            'name': {
              en: 'Fernando'
            },
            'status': 'alive'
          },
          {
            '@id': 'https://licos.online/state/0.2/village#29/agent#2',
            'id': 2,
            'image': 'https://werewolf.world/image/0.2/gavriil.jpg',
            'name': {
              en: 'Gavriil'
            },
            'status': 'alive'
          },
          {
            '@id': 'https://licos.online/state/0.2/village#29/agent#4',
            'id': 4,
            'image': 'https://werewolf.world/image/0.2/henrik.jpg',
            'name': {
              en: 'Henrik'
            },
            'status': 'alive'
          },
          {
            '@id': 'https://licos.online/state/0.2/village#29/agent#6',
            'id': 6,
            'image': 'https://werewolf.world/image/0.2/jasmin.jpg',
            'name': {
              en: 'Jasmin'
            },
            'status': 'alive'
          },
          {
            '@id': 'https://licos.online/state/0.2/village#29/agent#3',
            'id': 3,
            'image': 'https://werewolf.world/image/0.2/oliwia.jpg',
            'name': {
              en: 'Oliwia'
            },
            'status': 'alive'
          },
          {
            '@id': 'https://licos.online/state/0.2/village#29/agent#0',
            'id': 0,
            'image': 'https://werewolf.world/image/0.2/ryan.jpg',
            'name': {
              en: 'Ryan'
            },
            'status': 'alive'
          },
          {
            '@id': 'https://licos.online/state/0.2/village#29/agent#1',
            'id': 1,
            'image': 'https://werewolf.world/image/0.2/susan.jpg',
            'name': {
              en: 'Susan'
            },
            'status': 'alive'
          }
        ],
        roleStatus: [
          {
            '@id': 'https://licos.online/state/0.2/village#29/role#villager',
            'id': 'villager',
            'image': 'https://werewolf.world/image/0.2/villager.jpg',
            'name': {
              en: 'Villager'
            },
            'numberOfAgents': 1
          },
          {
            '@id': 'https://licos.online/state/0.2/village#29/role#seer',
            'id': 'seer',
            'image': 'https://werewolf.world/image/0.2/seer.jpg',
            'name': {
              en: 'Seer'
            },
            'numberOfAgents': 1
          },
          {
            '@id': 'https://licos.online/state/0.2/village#29/role#medium',
            'id': 'medium',
            'image': 'https://werewolf.world/image/0.2/medium.jpg',
            'name': {
              en: 'Medium'
            },
            'numberOfAgents': 1
          },
          {
            '@id': 'https://licos.online/state/0.2/village#29/role#mason',
            'id': 'mason',
            'image': 'https://werewolf.world/image/0.2/mason.jpg',
            'name': {
              en: 'Mason'
            },
            'numberOfAgents': 2
          },
          {
            '@id': 'https://licos.online/state/0.2/village#29/role#madman',
            'id': 'madman',
            'image': 'https://werewolf.world/image/0.2/madman.jpg',
            'name': {
              en: 'Madman'
            },
            'numberOfAgents': 1
          },
          {
            '@id': 'https://licos.online/state/0.2/village#29/role#werewolf',
            'id': 'werewolf',
            'image': 'https://werewolf.world/image/0.2/werewolf.jpg',
            'name': {
              en: 'Werewolf'
            },
            'numberOfAgents': 2
          }
        ],
        spec: {
          role: village.RoleId.villager,
          visible: false
        },
        table: {
          '0': {
            madman: {
              date: 1,
              fixed: true,
              state: village.BoardState.FILL
            },
            mason: {
              date: 1,
              fixed: true,
              state: village.BoardState.CIRCLE
            },
            medium: {
              date: 1,
              fixed: true,
              state: village.BoardState.FILL
            },
            seer: {
              date: 1,
              fixed: true,
              state: village.BoardState.FILL
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
          '1': {
            madman: {
              date: 1,
              fixed: false,
              state: village.BoardState.QUESTION
            },
            mason: {
              date: 1,
              fixed: true,
              state: village.BoardState.FILL
            },
            medium: {
              date: 1,
              fixed: false,
              state: village.BoardState.QUESTION
            },
            seer: {
              date: 1,
              fixed: false,
              state: village.BoardState.QUESTION
            },
            villager: {
              date: 1,
              fixed: false,
              state: village.BoardState.CIRCLE
            },
            werewolf: {
              date: 1,
              fixed: false,
              state: village.BoardState.QUESTION
            }
          },
          '2': {
            madman: {
              date: 1,
              fixed: false,
              state: village.BoardState.QUESTION
            },
            mason: {
              date: 1,
              fixed: true,
              state: village.BoardState.FILL
            },
            medium: {
              date: 1,
              fixed: false,
              state: village.BoardState.QUESTION
            },
            seer: {
              date: 1,
              fixed: false,
              state: village.BoardState.QUESTION
            },
            villager: {
              date: 1,
              fixed: false,
              state: 'X'
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
            mason: {
              date: 1,
              fixed: true,
              state: village.BoardState.FILL
            },
            medium: {
              date: 1,
              fixed: false,
              state: village.BoardState.QUESTION
            },
            seer: {
              date: 1,
              fixed: false,
              state: village.BoardState.QUESTION
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
            mason: {
              date: 1,
              fixed: true,
              state: village.BoardState.FILL
            },
            medium: {
              date: 1,
              fixed: false,
              state: village.BoardState.QUESTION
            },
            seer: {
              date: 1,
              fixed: false,
              state: village.BoardState.QUESTION
            },
            villager: {
              date: 1,
              fixed: false,
              state: 'Δ'
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
            mason: {
              date: 1,
              fixed: true,
              state: village.BoardState.FILL
            },
            medium: {
              date: 1,
              fixed: false,
              state: village.BoardState.QUESTION
            },
            seer: {
              date: 1,
              fixed: false,
              state: village.BoardState.QUESTION
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
          '6': {
            madman: {
              date: 1,
              fixed: true,
              state: village.BoardState.FILL
            },
            mason: {
              date: 1,
              fixed: true,
              state: village.BoardState.CIRCLE
            },
            medium: {
              date: 1,
              fixed: true,
              state: village.BoardState.FILL
            },
            seer: {
              date: 1,
              fixed: true,
              state: village.BoardState.FILL
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
          '7': {
            madman: {
              date: 1,
              fixed: false,
              state: village.BoardState.QUESTION
            },
            mason: {
              date: 1,
              fixed: true,
              state: village.BoardState.FILL
            },
            medium: {
              date: 1,
              fixed: false,
              state: village.BoardState.QUESTION
            },
            seer: {
              date: 1,
              fixed: false,
              state: village.BoardState.QUESTION
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
      }
    )
  })
})
test('CHANGE_PREDICTION_BOARD', () => {
  const playerStatus = [
    {
      '@id': 'https://licos.online/state/0.2/village#3/agent#0',
      'id': 0,
      'image': 'https://werewolf.world/image/0.2/Gert.jpg',
      'name': {
        en: 'Gert',
        ja: 'ゲルト'
      },
      'status': village.AgentStatus.alive
    },
    {
      '@id': 'https://licos.online/state/0.2/village#3/agent#1',
      'id': 1,
      'image': 'https://werewolf.world/image/0.2/Walter.jpg',
      'name': {
        en: 'Walter',
        ja: 'ヴァルター'
      },
      'status': village.AgentStatus.alive
    },
    {
      '@id': 'https://licos.online/state/0.2/village#3/agent#2',
      'id': 2,
      'image': 'https://werewolf.world/image/0.2/Moritz.jpg',
      'name': {
        en: 'Moritz',
        ja: 'モーリッツ'
      },
      'status': village.AgentStatus.alive
    },
    {
      '@id': 'https://licos.online/state/0.2/village#3/agent#3',
      'id': 3,
      'image': 'https://werewolf.world/image/0.2/Simson.jpg',
      'name': {
        en: 'Simson',
        ja: 'ジムゾン'
      },
      'status': village.AgentStatus.alive
    },
    {
      '@id': 'https://licos.online/state/0.2/village#3/agent#4',
      'id': 4,
      'image': 'https://werewolf.world/image/0.2/Thomas.jpg',
      'name': {
        en: 'Thomas',
        ja: 'トーマス'
      },
      'status': village.AgentStatus.alive
    },
    {
      '@id': 'https://licos.online/state/0.2/village#3/agent#5',
      'id': 5,
      'image': 'https://werewolf.world/image/0.2/Nicholas.jpg',
      'name': {
        en: 'Nicholas',
        ja: 'ニコラス'
      },
      'status': village.AgentStatus.alive
    },
    {
      '@id': 'https://licos.online/state/0.2/village#3/agent#6',
      'id': 6,
      'image': 'https://werewolf.world/image/0.2/Dieter.jpg',
      'name': {
        en: 'Dieter',
        ja: 'ディーター'
      },
      'status': village.AgentStatus.alive
    },
    {
      '@id': 'https://licos.online/state/0.2/village#3/agent#7',
      'id': 7,
      'image': 'https://werewolf.world/image/0.2/Peter.jpg',
      'name': {
        en: 'Peter',
        ja: 'ペーター'
      },
      'status': village.AgentStatus.alive
    },
    {
      '@id': 'https://licos.online/state/0.2/village#3/agent#8',
      'id': 8,
      'image': 'https://werewolf.world/image/0.2/Lisa.jpg',
      'name': {
        en: 'Lisa',
        ja: 'リーザ'
      },
      'status': village.AgentStatus.alive
    },
    {
      '@id': 'https://licos.online/state/0.2/village#3/agent#9',
      'id': 9,
      'image': 'https://werewolf.world/image/0.2/Alvin.jpg',
      'name': {
        en: 'Alvin',
        ja: 'アルビン'
      },
      'status': village.AgentStatus.alive
    },
    {
      '@id': 'https://licos.online/state/0.2/village#3/agent#10',
      'id': 10,
      'image': 'https://werewolf.world/image/0.2/Catalina.jpg',
      'name': {
        en: 'Catalina',
        ja: 'カタリナ'
      },
      'status': village.AgentStatus.alive
    },
    {
      '@id': 'https://licos.online/state/0.2/village#3/agent#11',
      'id': 11,
      'image': 'https://werewolf.world/image/0.2/Otto.jpg',
      'name': {
        en: 'Otto',
        ja: 'オットー'
      },
      'status': village.AgentStatus.alive
    },
    {
      '@id': 'https://licos.online/state/0.2/village#3/agent#12',
      'id': 12,
      'image': 'https://werewolf.world/image/0.2/Joachim.jpg',
      'name': {
        en: 'Joachim',
        ja: 'ヨアヒム'
      },
      'status': village.AgentStatus.alive
    },
    {
      '@id': 'https://licos.online/state/0.2/village#3/agent#13',
      'id': 13,
      'image': 'https://werewolf.world/image/0.2/Pamela.jpg',
      'name': {
        en: 'Pamela',
        ja: 'パメラ'
      },
      'status': village.AgentStatus.alive
    },
    {
      '@id': 'https://licos.online/state/0.2/village#3/agent#14',
      'id': 14,
      'image': 'https://werewolf.world/image/0.2/Jacob.jpg',
      'name': {
        en: 'Jacob',
        ja: 'ヤコブ'
      },
      'status': village.AgentStatus.alive
    }
  ]
  const roleStatus = [
    {
      '@id': 'https://licos.online/state/0.2/village#3/role#villager',
      'id': village.RoleId.villager,
      'image': 'https://werewolf.world/image/0.2/villager.jpg',
      'name': {
        en: 'Villager',
        ja: '村人'
      },
      'numberOfAgents': 6
    },
    {
      '@id': 'https://licos.online/state/0.2/village#3/role#seer',
      'id': village.RoleId.seer,
      'image': 'https://werewolf.world/image/0.2/seer.jpg',
      'name': {
        en: 'Seer',
        ja: '占い師'
      },
      'numberOfAgents': 1
    },
    {
      '@id': 'https://licos.online/state/0.2/village#3/role#medium',
      'id': village.RoleId.medium,
      'image': 'https://werewolf.world/image/0.2/medium.jpg',
      'name': {
        en: 'Medium',
        ja: '霊媒師'
      },
      'numberOfAgents': 1
    },
    {
      '@id': 'https://licos.online/state/0.2/village#3/role#hunter',
      'id': village.RoleId.hunter,
      'image': 'https://werewolf.world/image/0.2/hunter.jpg',
      'name': {
        en: 'Hunter',
        ja: '狩人'
      },
      'numberOfAgents': 1
    },
    {
      '@id': 'https://licos.online/state/0.2/village#3/role#mason',
      'id': village.RoleId.mason,
      'image': 'https://werewolf.world/image/0.2/mason.jpg',
      'name': {
        en: 'Mason',
        ja: '共有者'
      },
      'numberOfAgents': 2
    },
    {
      '@id': 'https://licos.online/state/0.2/village#3/role#madman',
      'id': village.RoleId.madman,
      'image': 'https://werewolf.world/image/0.2/madman.jpg',
      'name': {
        en: 'Madman',
        ja: '狂人'
      },
      'numberOfAgents': 1
    },
    {
      '@id': 'https://licos.online/state/0.2/village#3/role#werewolf',
      'id': village.RoleId.werewolf,
      'image': 'https://werewolf.world/image/0.2/werewolf.jpg',
      'name': {
        en: 'Werewolf',
        ja: '人狼'
      },
      'numberOfAgents': 2
    },
    {
      '@id': 'https://licos.online/state/0.2/village#3/role#werehamster',
      'id': village.RoleId.werehamster,
      'image': 'https://werewolf.world/image/0.2/werehamster.jpg',
      'name': {
        en: 'Werehamster',
        ja: 'ハムスター人間'
      },
      'numberOfAgents': 1
    }
  ]
  const table = {
    '0': {
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
    '10': {
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

  expect(
    reducer(
      {
        ... initialState,
        playerStatus,
        roleStatus,
        table
      },
      {
        nextState: village.BoardState.CIRCLE,
        playerId: 0,
        roleId: village.RoleId.villager,
        type: ActionTypes.global.CHANGE_PREDICTION_BOARD
      }
    )
  ).toEqual({
    ... initialState,
    playerStatus,
    roleStatus,
    table: {
      ... table,
      '0': {
        ... table['0'],
        [village.RoleId.villager]: {
          ... table['0'][village.RoleId.villager],
          state: village.BoardState.CIRCLE
        }
      }
    }
  })
})
test('HIDE_PREDICTION_SPEC', () => {
  expect(
    reducer(
      {
        ... initialState,
        spec: {
          ... initialState.spec,
          visible: true
        }
      },
      {
        type: ActionTypes.global.HIDE_PREDICTION_SPEC
      }
    )
  ).toEqual({
    ... initialState,
    spec: {
      ... initialState.spec,
      visible: false
    }
  })
})
test('SHOW_PREDICTION_SPEC', () => {
  expect(
    reducer(
      initialState,
      {
        role: village.RoleId.hunter,
        type: ActionTypes.global.SHOW_PREDICTION_SPEC
      }
    )
  ).toEqual({
    ... initialState,
    spec: {
      role: village.RoleId.hunter,
      visible: true
    }
  })
})

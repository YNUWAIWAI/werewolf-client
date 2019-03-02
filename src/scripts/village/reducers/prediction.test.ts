import {firstMorning, firstMorning3, firstMorning4, firstMorning5, flavorText} from './fakeServer'
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
        table: {
          '0': {
            hunter: {
              date: 1,
              fixed: false,
              state: '?'
            },
            madman: {
              date: 1,
              fixed: false,
              state: '?'
            },
            mason: {
              date: 1,
              fixed: false,
              state: '?'
            },
            medium: {
              date: 1,
              fixed: false,
              state: '?'
            },
            seer: {
              date: 1,
              fixed: true,
              state: 'fill'
            },
            villager: {
              date: 1,
              fixed: false,
              state: '?'
            },
            werehamster: {
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
          '1': {
            hunter: {
              date: 1,
              fixed: true,
              state: 'fill'
            },
            madman: {
              date: 1,
              fixed: true,
              state: 'fill'
            },
            mason: {
              date: 1,
              fixed: true,
              state: 'fill'
            },
            medium: {
              date: 1,
              fixed: true,
              state: 'fill'
            },
            seer: {
              date: 1,
              fixed: true,
              state: 'O'
            },
            villager: {
              date: 1,
              fixed: true,
              state: 'fill'
            },
            werehamster: {
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
            hunter: {
              date: 1,
              fixed: false,
              state: '?'
            },
            madman: {
              date: 1,
              fixed: false,
              state: '?'
            },
            mason: {
              date: 1,
              fixed: false,
              state: '?'
            },
            medium: {
              date: 1,
              fixed: false,
              state: '?'
            },
            seer: {
              date: 1,
              fixed: true,
              state: 'fill'
            },
            villager: {
              date: 1,
              fixed: false,
              state: '?'
            },
            werehamster: {
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
            hunter: {
              date: 1,
              fixed: false,
              state: '?'
            },
            madman: {
              date: 1,
              fixed: false,
              state: '?'
            },
            mason: {
              date: 1,
              fixed: false,
              state: '?'
            },
            medium: {
              date: 1,
              fixed: false,
              state: '?'
            },
            seer: {
              date: 1,
              fixed: true,
              state: 'fill'
            },
            villager: {
              date: 1,
              fixed: false,
              state: '?'
            },
            werehamster: {
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
            hunter: {
              date: 1,
              fixed: false,
              state: '?'
            },
            madman: {
              date: 1,
              fixed: false,
              state: '?'
            },
            mason: {
              date: 1,
              fixed: false,
              state: '?'
            },
            medium: {
              date: 1,
              fixed: false,
              state: '?'
            },
            seer: {
              date: 1,
              fixed: true,
              state: 'fill'
            },
            villager: {
              date: 1,
              fixed: false,
              state: '?'
            },
            werehamster: {
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
            hunter: {
              date: 1,
              fixed: false,
              state: '?'
            },
            madman: {
              date: 1,
              fixed: false,
              state: '?'
            },
            mason: {
              date: 1,
              fixed: false,
              state: '?'
            },
            medium: {
              date: 1,
              fixed: false,
              state: '?'
            },
            seer: {
              date: 1,
              fixed: true,
              state: 'fill'
            },
            villager: {
              date: 1,
              fixed: false,
              state: '?'
            },
            werehamster: {
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
          '6': {
            hunter: {
              date: 1,
              fixed: false,
              state: '?'
            },
            madman: {
              date: 1,
              fixed: false,
              state: '?'
            },
            mason: {
              date: 1,
              fixed: false,
              state: '?'
            },
            medium: {
              date: 1,
              fixed: false,
              state: '?'
            },
            seer: {
              date: 1,
              fixed: true,
              state: 'fill'
            },
            villager: {
              date: 1,
              fixed: false,
              state: '?'
            },
            werehamster: {
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
          '7': {
            hunter: {
              date: 1,
              fixed: false,
              state: '?'
            },
            madman: {
              date: 1,
              fixed: false,
              state: '?'
            },
            mason: {
              date: 1,
              fixed: false,
              state: '?'
            },
            medium: {
              date: 1,
              fixed: false,
              state: '?'
            },
            seer: {
              date: 1,
              fixed: true,
              state: 'fill'
            },
            villager: {
              date: 1,
              fixed: false,
              state: '?'
            },
            werehamster: {
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
          '8': {
            hunter: {
              date: 1,
              fixed: false,
              state: '?'
            },
            madman: {
              date: 1,
              fixed: false,
              state: '?'
            },
            mason: {
              date: 1,
              fixed: false,
              state: '?'
            },
            medium: {
              date: 1,
              fixed: false,
              state: '?'
            },
            seer: {
              date: 1,
              fixed: true,
              state: 'fill'
            },
            villager: {
              date: 1,
              fixed: false,
              state: '?'
            },
            werehamster: {
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
          '9': {
            hunter: {
              date: 1,
              fixed: false,
              state: '?'
            },
            madman: {
              date: 1,
              fixed: false,
              state: '?'
            },
            mason: {
              date: 1,
              fixed: false,
              state: '?'
            },
            medium: {
              date: 1,
              fixed: false,
              state: '?'
            },
            seer: {
              date: 1,
              fixed: true,
              state: 'fill'
            },
            villager: {
              date: 1,
              fixed: false,
              state: '?'
            },
            werehamster: {
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
          '10': {
            hunter: {
              date: 1,
              fixed: false,
              state: '?'
            },
            madman: {
              date: 1,
              fixed: false,
              state: '?'
            },
            mason: {
              date: 1,
              fixed: false,
              state: '?'
            },
            medium: {
              date: 1,
              fixed: false,
              state: '?'
            },
            seer: {
              date: 1,
              fixed: true,
              state: 'fill'
            },
            villager: {
              date: 1,
              fixed: false,
              state: '?'
            },
            werehamster: {
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
          '11': {
            hunter: {
              date: 1,
              fixed: false,
              state: '?'
            },
            madman: {
              date: 1,
              fixed: false,
              state: '?'
            },
            mason: {
              date: 1,
              fixed: false,
              state: '?'
            },
            medium: {
              date: 1,
              fixed: false,
              state: '?'
            },
            seer: {
              date: 1,
              fixed: true,
              state: 'fill'
            },
            villager: {
              date: 1,
              fixed: false,
              state: '?'
            },
            werehamster: {
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
          '12': {
            hunter: {
              date: 1,
              fixed: false,
              state: '?'
            },
            madman: {
              date: 1,
              fixed: false,
              state: '?'
            },
            mason: {
              date: 1,
              fixed: false,
              state: '?'
            },
            medium: {
              date: 1,
              fixed: false,
              state: '?'
            },
            seer: {
              date: 1,
              fixed: true,
              state: 'fill'
            },
            villager: {
              date: 1,
              fixed: false,
              state: '?'
            },
            werehamster: {
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
          '13': {
            hunter: {
              date: 1,
              fixed: false,
              state: '?'
            },
            madman: {
              date: 1,
              fixed: false,
              state: '?'
            },
            mason: {
              date: 1,
              fixed: false,
              state: '?'
            },
            medium: {
              date: 1,
              fixed: false,
              state: '?'
            },
            seer: {
              date: 1,
              fixed: true,
              state: 'fill'
            },
            villager: {
              date: 1,
              fixed: false,
              state: '?'
            },
            werehamster: {
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
          '14': {
            hunter: {
              date: 1,
              fixed: false,
              state: '?'
            },
            madman: {
              date: 1,
              fixed: false,
              state: '?'
            },
            mason: {
              date: 1,
              fixed: false,
              state: '?'
            },
            medium: {
              date: 1,
              fixed: false,
              state: '?'
            },
            seer: {
              date: 1,
              fixed: true,
              state: 'fill'
            },
            villager: {
              date: 1,
              fixed: false,
              state: '?'
            },
            werehamster: {
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
        table: {
          '0': {
            hunter: {
              date: 1,
              fixed: false,
              state: '?'
            },
            madman: {
              date: 1,
              fixed: false,
              state: '?'
            },
            mason: {
              date: 1,
              fixed: false,
              state: '?'
            },
            medium: {
              date: 1,
              fixed: false,
              state: '?'
            },
            seer: {
              date: 1,
              fixed: false,
              state: '?'
            },
            villager: {
              date: 1,
              fixed: false,
              state: '?'
            },
            werehamster: {
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
          '1': {
            hunter: {
              date: 1,
              fixed: true,
              state: 'fill'
            },
            madman: {
              date: 1,
              fixed: true,
              state: 'fill'
            },
            mason: {
              date: 1,
              fixed: true,
              state: 'fill'
            },
            medium: {
              date: 1,
              fixed: true,
              state: 'fill'
            },
            seer: {
              date: 1,
              fixed: true,
              state: 'fill'
            },
            villager: {
              date: 1,
              fixed: true,
              state: 'O'
            },
            werehamster: {
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
            hunter: {
              date: 1,
              fixed: false,
              state: '?'
            },
            madman: {
              date: 1,
              fixed: false,
              state: '?'
            },
            mason: {
              date: 1,
              fixed: false,
              state: '?'
            },
            medium: {
              date: 1,
              fixed: false,
              state: '?'
            },
            seer: {
              date: 1,
              fixed: false,
              state: '?'
            },
            villager: {
              date: 1,
              fixed: false,
              state: '?'
            },
            werehamster: {
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
            hunter: {
              date: 1,
              fixed: false,
              state: '?'
            },
            madman: {
              date: 1,
              fixed: false,
              state: '?'
            },
            mason: {
              date: 1,
              fixed: false,
              state: '?'
            },
            medium: {
              date: 1,
              fixed: false,
              state: '?'
            },
            seer: {
              date: 1,
              fixed: false,
              state: '?'
            },
            villager: {
              date: 1,
              fixed: false,
              state: '?'
            },
            werehamster: {
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
            hunter: {
              date: 1,
              fixed: false,
              state: '?'
            },
            madman: {
              date: 1,
              fixed: false,
              state: '?'
            },
            mason: {
              date: 1,
              fixed: false,
              state: '?'
            },
            medium: {
              date: 1,
              fixed: false,
              state: '?'
            },
            seer: {
              date: 1,
              fixed: false,
              state: '?'
            },
            villager: {
              date: 1,
              fixed: false,
              state: '?'
            },
            werehamster: {
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
            hunter: {
              date: 1,
              fixed: false,
              state: '?'
            },
            madman: {
              date: 1,
              fixed: false,
              state: '?'
            },
            mason: {
              date: 1,
              fixed: false,
              state: '?'
            },
            medium: {
              date: 1,
              fixed: false,
              state: '?'
            },
            seer: {
              date: 1,
              fixed: false,
              state: '?'
            },
            villager: {
              date: 1,
              fixed: false,
              state: '?'
            },
            werehamster: {
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
          '6': {
            hunter: {
              date: 1,
              fixed: false,
              state: '?'
            },
            madman: {
              date: 1,
              fixed: false,
              state: '?'
            },
            mason: {
              date: 1,
              fixed: false,
              state: '?'
            },
            medium: {
              date: 1,
              fixed: false,
              state: '?'
            },
            seer: {
              date: 1,
              fixed: false,
              state: '?'
            },
            villager: {
              date: 1,
              fixed: false,
              state: '?'
            },
            werehamster: {
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
          '7': {
            hunter: {
              date: 1,
              fixed: false,
              state: '?'
            },
            madman: {
              date: 1,
              fixed: false,
              state: '?'
            },
            mason: {
              date: 1,
              fixed: false,
              state: '?'
            },
            medium: {
              date: 1,
              fixed: false,
              state: '?'
            },
            seer: {
              date: 1,
              fixed: false,
              state: '?'
            },
            villager: {
              date: 1,
              fixed: false,
              state: '?'
            },
            werehamster: {
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
          '8': {
            hunter: {
              date: 1,
              fixed: false,
              state: '?'
            },
            madman: {
              date: 1,
              fixed: false,
              state: '?'
            },
            mason: {
              date: 1,
              fixed: false,
              state: '?'
            },
            medium: {
              date: 1,
              fixed: false,
              state: '?'
            },
            seer: {
              date: 1,
              fixed: false,
              state: '?'
            },
            villager: {
              date: 1,
              fixed: false,
              state: '?'
            },
            werehamster: {
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
          '9': {
            hunter: {
              date: 1,
              fixed: false,
              state: '?'
            },
            madman: {
              date: 1,
              fixed: false,
              state: '?'
            },
            mason: {
              date: 1,
              fixed: false,
              state: '?'
            },
            medium: {
              date: 1,
              fixed: false,
              state: '?'
            },
            seer: {
              date: 1,
              fixed: false,
              state: '?'
            },
            villager: {
              date: 1,
              fixed: false,
              state: '?'
            },
            werehamster: {
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
          '10': {
            hunter: {
              date: 1,
              fixed: false,
              state: '?'
            },
            madman: {
              date: 1,
              fixed: false,
              state: '?'
            },
            mason: {
              date: 1,
              fixed: false,
              state: '?'
            },
            medium: {
              date: 1,
              fixed: false,
              state: '?'
            },
            seer: {
              date: 1,
              fixed: false,
              state: '?'
            },
            villager: {
              date: 1,
              fixed: false,
              state: '?'
            },
            werehamster: {
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
          '11': {
            hunter: {
              date: 1,
              fixed: false,
              state: '?'
            },
            madman: {
              date: 1,
              fixed: false,
              state: '?'
            },
            mason: {
              date: 1,
              fixed: false,
              state: '?'
            },
            medium: {
              date: 1,
              fixed: false,
              state: '?'
            },
            seer: {
              date: 1,
              fixed: false,
              state: '?'
            },
            villager: {
              date: 1,
              fixed: false,
              state: '?'
            },
            werehamster: {
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
          '12': {
            hunter: {
              date: 1,
              fixed: false,
              state: '?'
            },
            madman: {
              date: 1,
              fixed: false,
              state: '?'
            },
            mason: {
              date: 1,
              fixed: false,
              state: '?'
            },
            medium: {
              date: 1,
              fixed: false,
              state: '?'
            },
            seer: {
              date: 1,
              fixed: false,
              state: '?'
            },
            villager: {
              date: 1,
              fixed: false,
              state: '?'
            },
            werehamster: {
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
          '13': {
            hunter: {
              date: 1,
              fixed: false,
              state: '?'
            },
            madman: {
              date: 1,
              fixed: false,
              state: '?'
            },
            mason: {
              date: 1,
              fixed: false,
              state: '?'
            },
            medium: {
              date: 1,
              fixed: false,
              state: '?'
            },
            seer: {
              date: 1,
              fixed: false,
              state: '?'
            },
            villager: {
              date: 1,
              fixed: false,
              state: '?'
            },
            werehamster: {
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
          '14': {
            hunter: {
              date: 1,
              fixed: false,
              state: '?'
            },
            madman: {
              date: 1,
              fixed: false,
              state: '?'
            },
            mason: {
              date: 1,
              fixed: false,
              state: '?'
            },
            medium: {
              date: 1,
              fixed: false,
              state: '?'
            },
            seer: {
              date: 1,
              fixed: false,
              state: '?'
            },
            villager: {
              date: 1,
              fixed: false,
              state: '?'
            },
            werehamster: {
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
        table: {
          '0': {
            villager: {
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
          '1': {
            villager: {
              date: 1,
              fixed: true,
              state: 'O'
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
            werewolf: {
              date: 1,
              fixed: false,
              state: '?'
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
        table: {
          '0': {
            madman: {
              date: 1,
              fixed: true,
              state: 'fill'
            },
            mason: {
              date: 1,
              fixed: true,
              state: 'O'
            },
            medium: {
              date: 1,
              fixed: true,
              state: 'fill'
            },
            seer: {
              date: 1,
              fixed: true,
              state: 'fill'
            },
            villager: {
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
          '1': {
            madman: {
              date: 1,
              fixed: false,
              state: '?'
            },
            mason: {
              date: 1,
              fixed: true,
              state: 'fill'
            },
            medium: {
              date: 1,
              fixed: false,
              state: '?'
            },
            seer: {
              date: 1,
              fixed: false,
              state: '?'
            },
            villager: {
              date: 1,
              fixed: false,
              state: 'O'
            },
            werewolf: {
              date: 1,
              fixed: false,
              state: '?'
            }
          },
          '2': {
            madman: {
              date: 1,
              fixed: false,
              state: '?'
            },
            mason: {
              date: 1,
              fixed: true,
              state: 'fill'
            },
            medium: {
              date: 1,
              fixed: false,
              state: '?'
            },
            seer: {
              date: 1,
              fixed: false,
              state: '?'
            },
            villager: {
              date: 1,
              fixed: false,
              state: 'X'
            },
            werewolf: {
              date: 1,
              fixed: false,
              state: '?'
            }
          },
          '3': {
            madman: {
              date: 1,
              fixed: false,
              state: '?'
            },
            mason: {
              date: 1,
              fixed: true,
              state: 'fill'
            },
            medium: {
              date: 1,
              fixed: false,
              state: '?'
            },
            seer: {
              date: 1,
              fixed: false,
              state: '?'
            },
            villager: {
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
            madman: {
              date: 1,
              fixed: false,
              state: '?'
            },
            mason: {
              date: 1,
              fixed: true,
              state: 'fill'
            },
            medium: {
              date: 1,
              fixed: false,
              state: '?'
            },
            seer: {
              date: 1,
              fixed: false,
              state: '?'
            },
            villager: {
              date: 1,
              fixed: false,
              state: 'Δ'
            },
            werewolf: {
              date: 1,
              fixed: false,
              state: '?'
            }
          },
          '5': {
            madman: {
              date: 1,
              fixed: false,
              state: '?'
            },
            mason: {
              date: 1,
              fixed: true,
              state: 'fill'
            },
            medium: {
              date: 1,
              fixed: false,
              state: '?'
            },
            seer: {
              date: 1,
              fixed: false,
              state: '?'
            },
            villager: {
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
          '6': {
            madman: {
              date: 1,
              fixed: true,
              state: 'fill'
            },
            mason: {
              date: 1,
              fixed: true,
              state: 'O'
            },
            medium: {
              date: 1,
              fixed: true,
              state: 'fill'
            },
            seer: {
              date: 1,
              fixed: true,
              state: 'fill'
            },
            villager: {
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
          '7': {
            madman: {
              date: 1,
              fixed: false,
              state: '?'
            },
            mason: {
              date: 1,
              fixed: true,
              state: 'fill'
            },
            medium: {
              date: 1,
              fixed: false,
              state: '?'
            },
            seer: {
              date: 1,
              fixed: false,
              state: '?'
            },
            villager: {
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
      }
    )
  })
})

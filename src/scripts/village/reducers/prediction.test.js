// @flow
import * as ActionTypes from '../constants/ActionTypes'
import {firstMorning, firstMorning3, flavorText} from './fakeServer'
import reducer, {initialState} from './prediction'

describe('socket/MESSAGE', () => {
  test('flavor text', () => {
    expect(
      reducer(
        initialState,
        {
          payload: flavorText,
          type: ActionTypes.socket.MESSAGE
        }
      )
    ).toEqual(initialState)
  })
  test('my role is seer (numberOfAgents === 1)', () => {
    expect(
      reducer(
        initialState,
        {
          payload: firstMorning,
          type: ActionTypes.socket.MESSAGE
        }
      )
    ).toEqual(
      {
        playerStatus: [
          {
            id: 0,
            image: 'https://werewolf.world/image/0.2/Gert.jpg',
            name: {
              en: 'Gert',
              ja: 'ゲルト'
            },
            status: 'alive'
          },
          {
            id: 1,
            image: 'https://werewolf.world/image/0.2/Walter.jpg',
            name: {
              en: 'Walter',
              ja: 'ヴァルター'
            },
            status: 'alive'
          },
          {
            id: 2,
            image: 'https://werewolf.world/image/0.2/Moritz.jpg',
            name: {
              en: 'Moritz',
              ja: 'モーリッツ'
            },
            status: 'alive'
          },
          {
            id: 3,
            image: 'https://werewolf.world/image/0.2/Simson.jpg',
            name: {
              en: 'Simson',
              ja: 'ジムゾン'
            },
            status: 'alive'
          },
          {
            id: 4,
            image: 'https://werewolf.world/image/0.2/Thomas.jpg',
            name: {
              en: 'Thomas',
              ja: 'トーマス'
            },
            status: 'alive'
          },
          {
            id: 5,
            image: 'https://werewolf.world/image/0.2/Nicholas.jpg',
            name: {
              en: 'Nicholas',
              ja: 'ニコラス'
            },
            status: 'alive'
          },
          {
            id: 6,
            image: 'https://werewolf.world/image/0.2/Dieter.jpg',
            name: {
              en: 'Dieter',
              ja: 'ディーター'
            },
            status: 'alive'
          },
          {
            id: 7,
            image: 'https://werewolf.world/image/0.2/Peter.jpg',
            name: {
              en: 'Peter',
              ja: 'ペーター'
            },
            status: 'alive'
          },
          {
            id: 8,
            image: 'https://werewolf.world/image/0.2/Lisa.jpg',
            name: {
              en: 'Lisa',
              ja: 'リーザ'
            },
            status: 'alive'
          },
          {
            id: 9,
            image: 'https://werewolf.world/image/0.2/Alvin.jpg',
            name: {
              en: 'Alvin',
              ja: 'アルビン'
            },
            status: 'alive'
          },
          {
            id: 10,
            image: 'https://werewolf.world/image/0.2/Catalina.jpg',
            name: {
              en: 'Catalina',
              ja: 'カタリナ'
            },
            status: 'alive'
          },
          {
            id: 11,
            image: 'https://werewolf.world/image/0.2/Otto.jpg',
            name: {
              en: 'Otto',
              ja: 'オットー'
            },
            status: 'alive'
          },
          {
            id: 12,
            image: 'https://werewolf.world/image/0.2/Joachim.jpg',
            name: {
              en: 'Joachim',
              ja: 'ヨアヒム'
            },
            status: 'alive'
          },
          {
            id: 13,
            image: 'https://werewolf.world/image/0.2/Pamela.jpg',
            name: {
              en: 'Pamela',
              ja: 'パメラ'
            },
            status: 'alive'
          },
          {
            id: 14,
            image: 'https://werewolf.world/image/0.2/Jacob.jpg',
            name: {
              en: 'Jacob',
              ja: 'ヤコブ'
            },
            status: 'alive'
          }
        ],
        roleStatus: [
          {
            caption: {
              en: 'Villager',
              ja: '村人'
            },
            id: 'villager',
            image: 'https://werewolf.world/image/0.2/villager.jpg',
            numberOfAgents: 6
          },
          {
            caption: {
              en: 'Seer',
              ja: '占い師'
            },
            id: 'seer',
            image: 'https://werewolf.world/image/0.2/seer.jpg',
            numberOfAgents: 1
          },
          {
            caption: {
              en: 'Medium',
              ja: '霊媒師'
            },
            id: 'medium',
            image: 'https://werewolf.world/image/0.2/medium.jpg',
            numberOfAgents: 1
          },
          {
            caption: {
              en: 'Hunter',
              ja: '狩人'
            },
            id: 'hunter',
            image: 'https://werewolf.world/image/0.2/hunter.jpg',
            numberOfAgents: 1
          },
          {
            caption: {
              en: 'Mason',
              ja: '共有者'
            },
            id: 'mason',
            image: 'https://werewolf.world/image/0.2/mason.jpg',
            numberOfAgents: 2
          },
          {
            caption: {
              en: 'Madman',
              ja: '狂人'
            },
            id: 'madman',
            image: 'https://werewolf.world/image/0.2/madman.jpg',
            numberOfAgents: 1
          },
          {
            caption: {
              en: 'Werewolf',
              ja: '人狼'
            },
            id: 'werewolf',
            image: 'https://werewolf.world/image/0.2/werewolf.jpg',
            numberOfAgents: 2
          },
          {
            caption: {
              en: 'Werehamster',
              ja: 'ハムスター人間'
            },
            id: 'werehamster',
            image: 'https://werewolf.world/image/0.2/werehamster.jpg',
            numberOfAgents: 1
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
        {
          payload: firstMorning3,
          type: ActionTypes.socket.MESSAGE
        }
      )
    ).toEqual(
      {
        playerStatus: [
          {
            id: 0,
            image: 'https://werewolf.world/image/0.2/Gert.jpg',
            name: {
              en: 'Gert',
              ja: 'ゲルト'
            },
            status: 'alive'
          },
          {
            id: 1,
            image: 'https://werewolf.world/image/0.2/Walter.jpg',
            name: {
              en: 'Walter',
              ja: 'ヴァルター'
            },
            status: 'alive'
          },
          {
            id: 2,
            image: 'https://werewolf.world/image/0.2/Moritz.jpg',
            name: {
              en: 'Moritz',
              ja: 'モーリッツ'
            },
            status: 'alive'
          },
          {
            id: 3,
            image: 'https://werewolf.world/image/0.2/Simson.jpg',
            name: {
              en: 'Simson',
              ja: 'ジムゾン'
            },
            status: 'alive'
          },
          {
            id: 4,
            image: 'https://werewolf.world/image/0.2/Thomas.jpg',
            name: {
              en: 'Thomas',
              ja: 'トーマス'
            },
            status: 'alive'
          },
          {
            id: 5,
            image: 'https://werewolf.world/image/0.2/Nicholas.jpg',
            name: {
              en: 'Nicholas',
              ja: 'ニコラス'
            },
            status: 'alive'
          },
          {
            id: 6,
            image: 'https://werewolf.world/image/0.2/Dieter.jpg',
            name: {
              en: 'Dieter',
              ja: 'ディーター'
            },
            status: 'alive'
          },
          {
            id: 7,
            image: 'https://werewolf.world/image/0.2/Peter.jpg',
            name: {
              en: 'Peter',
              ja: 'ペーター'
            },
            status: 'alive'
          },
          {
            id: 8,
            image: 'https://werewolf.world/image/0.2/Lisa.jpg',
            name: {
              en: 'Lisa',
              ja: 'リーザ'
            },
            status: 'alive'
          },
          {
            id: 9,
            image: 'https://werewolf.world/image/0.2/Alvin.jpg',
            name: {
              en: 'Alvin',
              ja: 'アルビン'
            },
            status: 'alive'
          },
          {
            id: 10,
            image: 'https://werewolf.world/image/0.2/Catalina.jpg',
            name: {
              en: 'Catalina',
              ja: 'カタリナ'
            },
            status: 'alive'
          },
          {
            id: 11,
            image: 'https://werewolf.world/image/0.2/Otto.jpg',
            name: {
              en: 'Otto',
              ja: 'オットー'
            },
            status: 'alive'
          },
          {
            id: 12,
            image: 'https://werewolf.world/image/0.2/Joachim.jpg',
            name: {
              en: 'Joachim',
              ja: 'ヨアヒム'
            },
            status: 'alive'
          },
          {
            id: 13,
            image: 'https://werewolf.world/image/0.2/Pamela.jpg',
            name: {
              en: 'Pamela',
              ja: 'パメラ'
            },
            status: 'alive'
          },
          {
            id: 14,
            image: 'https://werewolf.world/image/0.2/Jacob.jpg',
            name: {
              en: 'Jacob',
              ja: 'ヤコブ'
            },
            status: 'alive'
          }
        ],
        roleStatus: [
          {
            caption: {
              en: 'Villager',
              ja: '村人'
            },
            id: 'villager',
            image: 'https://werewolf.world/image/0.2/villager.jpg',
            numberOfAgents: 6
          },
          {
            caption: {
              en: 'Seer',
              ja: '占い師'
            },
            id: 'seer',
            image: 'https://werewolf.world/image/0.2/seer.jpg',
            numberOfAgents: 1
          },
          {
            caption: {
              en: 'Medium',
              ja: '霊媒師'
            },
            id: 'medium',
            image: 'https://werewolf.world/image/0.2/medium.jpg',
            numberOfAgents: 1
          },
          {
            caption: {
              en: 'Hunter',
              ja: '狩人'
            },
            id: 'hunter',
            image: 'https://werewolf.world/image/0.2/hunter.jpg',
            numberOfAgents: 1
          },
          {
            caption: {
              en: 'Mason',
              ja: '共有者'
            },
            id: 'mason',
            image: 'https://werewolf.world/image/0.2/mason.jpg',
            numberOfAgents: 2
          },
          {
            caption: {
              en: 'Madman',
              ja: '狂人'
            },
            id: 'madman',
            image: 'https://werewolf.world/image/0.2/madman.jpg',
            numberOfAgents: 1
          },
          {
            caption: {
              en: 'Werewolf',
              ja: '人狼'
            },
            id: 'werewolf',
            image: 'https://werewolf.world/image/0.2/werewolf.jpg',
            numberOfAgents: 2
          },
          {
            caption: {
              en: 'Werehamster',
              ja: 'ハムスター人間'
            },
            id: 'werehamster',
            image: 'https://werewolf.world/image/0.2/werehamster.jpg',
            numberOfAgents: 1
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
})

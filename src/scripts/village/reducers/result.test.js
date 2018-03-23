// @flow
/* eslint sort-keys: 0 */
import * as ActionTypes from '../constants/ActionTypes'
import {firstDayConversation, results} from './fakeServer'
import reducer, {initialState} from './result'

test('SOCKET_MESSAGE phase is not results', () => {
  expect(
    reducer(
      initialState,
      {
        payload: firstDayConversation,
        type: ActionTypes.SOCKET_MESSAGE
      }
    )
  ).toEqual(initialState)
})
test('SOCKET_MESSAGE phase is results', () => {
  expect(
    reducer(
      initialState,
      {
        payload: results,
        type: ActionTypes.SOCKET_MESSAGE
      }
    )
  ).toEqual({
    agents: [
      {
        'agentId': 1,
        'agentImage': 'https://werewolf.world/image/0.1/Walter.jpg',
        'agentName': {
          'en': 'Walter',
          'ja': 'ヴァルター'
        },
        'result': 'win',
        'roleImage': 'https://werewolf.world/image/0.1/seer.jpg',
        'roleName': {
          'en': 'Seer',
          'ja': '占い師'
        },
        'status': 'alive',
        'userAvatar': 'https://werewolf.world/image/0.1/Gert.jpg',
        'userName': 'Suzuki'
      },
      {
        'agentId': 2,
        'agentImage': 'https://werewolf.world/image/0.1/Moritz.jpg',
        'agentName': {
          'en': 'Moritz',
          'ja': 'モーリッツ'
        },
        'result': 'lose',
        'roleImage': 'https://werewolf.world/image/0.1/werewolf.jpg',
        'roleName': {
          'en': 'Werewolf',
          'ja': '人狼'
        },
        'status': 'alive',
        'userAvatar': 'https://werewolf.world/image/0.1/Alvin.jpg',
        'userName': 'Takahashi'
      },
      {
        'agentId': 3,
        'agentImage': 'https://werewolf.world/image/0.1/Simson.jpg',
        'agentName': {
          'en': 'Simson',
          'ja': 'ジムゾン'
        },
        'result': 'win',
        'roleImage': 'https://werewolf.world/image/0.1/hunter.jpg',
        'roleName': {
          'en': 'Hunter',
          'ja': '狩人'
        },
        'status': 'alive',
        'userAvatar': 'https://werewolf.world/image/0.1/Friedel.jpg',
        'userName': 'Tanaka'
      },
      {
        'agentId': 4,
        'agentImage': 'https://werewolf.world/image/0.1/Thomas.jpg',
        'agentName': {
          'en': 'Thomas',
          'ja': 'トーマス'
        },
        'result': 'win',
        'roleImage': 'https://werewolf.world/image/0.1/medium.jpg',
        'roleName': {
          'en': 'Medium',
          'ja': '霊媒師'
        },
        'status': 'alive',
        'userAvatar': 'https://werewolf.world/image/0.1/Dieter.jpg',
        'userName': 'Ito'
      },
      {
        'agentId': 5,
        'agentImage': 'https://werewolf.world/image/0.1/Nicholas.jpg',
        'agentName': {
          'en': 'Nicholas',
          'ja': 'ニコラス'
        },
        'result': 'lose',
        'roleImage': 'https://werewolf.world/image/0.1/werehumster.jpg',
        'roleName': {
          'en': 'Werehuster',
          'ja': 'ハムスター人間'
        },
        'status': 'death by fear',
        'userName': 'Watanabe',
        'userAvatar': 'https://werewolf.world/image/0.1/Erna.jpg'
      },
      {
        'agentId': 6,
        'agentImage': 'https://werewolf.world/image/0.1/Dieter.jpg',
        'agentName': {
          'en': 'Dieter',
          'ja': 'ディーター'
        },
        'result': 'lose',
        'roleImage': 'https://werewolf.world/image/0.1/madman.jpg',
        'roleName': {
          'en': 'Madman',
          'ja': '狂人'
        },
        'status': 'death by execution',
        'userName': 'Yamamoto',
        'userAvatar': 'https://werewolf.world/image/0.1/Jacob.jpg'
      },
      {
        'agentId': 7,
        'agentImage': 'https://werewolf.world/image/0.1/Peter.jpg',
        'agentName': {
          'en': 'Peter',
          'ja': 'ペーター'
        },
        'result': 'lose',
        'roleImage': 'https://werewolf.world/image/0.1/werewolf.jpg',
        'roleName': {
          'en': 'Werewolf',
          'ja': '人狼'
        },
        'status': 'unnatural death',
        'userName': 'Nakamura',
        'userAvatar': 'https://werewolf.world/image/0.1/Nicholas.jpg'
      },
      {
        'agentImage': 'https://werewolf.world/image/0.1/Lisa.jpg',
        'agentName': {
          'en': 'Lisa',
          'ja': 'リーザ'
        },
        'agentId': 8,
        'result': 'win',
        'roleImage': 'https://werewolf.world/image/0.1/villager.jpg',
        'roleName': {
          'en': 'Villager',
          'ja': '村人'
        },
        'status': 'unnatural death',
        'userAvatar': 'https://werewolf.world/image/0.1/Peter.jpg',
        'userName': 'Kobayashi'
      },
      {
        'agentId': 9,
        'agentImage': 'https://werewolf.world/image/0.1/Alvin.jpg',
        'agentName': {
          'en': 'Alvin',
          'ja': 'アルビン'
        },
        'roleImage': 'https://werewolf.world/image/0.1/villager.jpg',
        'roleName': {
          'en': 'Villager',
          'ja': '村人'
        },
        'status': 'unnatural death',
        'result': 'win',
        'userAvatar': 'https://werewolf.world/image/0.1/Peter.jpg',
        'userName': 'Yoshida'
      },
      {
        'agentId': 11,
        'agentImage': 'https://werewolf.world/image/0.1/Otto.jpg',
        'agentName': {
          'en': 'Otto',
          'ja': 'オットー'
        },
        'result': 'win',
        'roleImage': 'https://werewolf.world/image/0.1/mason.jpg',
        'roleName': {
          'en': 'Mason',
          'ja': '共有者'
        },
        'status': 'unnatural death',
        'userAvatar': 'https://werewolf.world/image/0.1/Simson.jpg',
        'userName': 'Sasaki'
      },
      {
        'agentId': 12,
        'agentImage': 'https://werewolf.world/image/0.1/Joachim.jpg',
        'agentName': {
          'en': 'Joachim',
          'ja': 'ヨアヒム'
        },
        'result': 'win',
        'roleImage': 'https://werewolf.world/image/0.1/villager.jpg',
        'roleName': {
          'en': 'Villager',
          'ja': '村人'
        },
        'status': 'death by werewolf attack',
        'userAvatar': 'https://werewolf.world/image/0.1/Otto.jpg',
        'userName': '山口'
      },
      {
        'agentName': {
          'en': 'Pamela',
          'ja': 'パメラ'
        },
        'agentImage': 'https://werewolf.world/image/0.1/Pamela.jpg',
        'agentId': 13,
        'result': 'win',
        'roleImage': 'https://werewolf.world/image/0.1/villager.jpg',
        'roleName': {
          'en': 'Villager',
          'ja': '村人'
        },
        'status': 'alive',
        'userAvatar': 'https://werewolf.world/image/0.1/Joachim.jpg',
        'userName': '松本'
      },
      {
        'agentId': 14,
        'agentImage': 'https://werewolf.world/image/0.1/Jacob.jpg',
        'agentName': {
          'en': 'Jacob',
          'ja': 'ヤコブ'
        },
        'result': 'win',
        'roleImage': 'https://werewolf.world/image/0.1/villager.jpg',
        'roleName': {
          'en': 'Villager',
          'ja': '村人'
        },
        'status': 'alive',
        'userAvatar': 'https://werewolf.world/image/0.1/Catalina.jpg',
        'userName': '井上'
      }
    ],
    summary: {
      isPlayer: true,
      result: 'win',
      role: 'https://werewolf.world/resource/0.1/seer'
    },
    visible: true
  })
})


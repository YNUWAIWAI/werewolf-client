// @flow
/* eslint sort-keys: 0 */
import * as ActionTypes from '../constants/ActionTypes'
import {myMessageOnChat, theirMessageOnChat} from './fakeServer'
import reducer from './chat'

test('SOCKET_MESSAGE', () => {
  expect(
    reducer(
      {
        items: []
      },
      {
        payload: myMessageOnChat,
        type: ActionTypes.SOCKET_MESSAGE
      }
    )
  ).toEqual({
    items: [
      {
        'id': 12,
        'image': 'https://werewolf.world/image/0.1/Walter.jpg',
        'intensionalDisclosureRange': 'public',
        'isMine': true,
        'name': {
          'en': 'Walter',
          'ja': 'ヴァルター'
        },
        'phaseTimeLimit': 600,
        'phaseStartTime': '2006-10-07T12:06:56.568+09:00',
        'serverTimestamp': '2006-10-07T12:06:56.568+09:00',
        'text': '>>11\nそれで、あなたは人狼が誰だと思うの？\n\n私はパメラが人狼だと思う。'
      }
    ]
  })
})

test('SOCKET_MESSAGE 2 items', () => {
  expect(
    reducer(
      {
        items: [
          {
            'id': 12,
            'image': 'https://werewolf.world/image/0.1/Walter.jpg',
            'intensionalDisclosureRange': 'public',
            'isMine': true,
            'name': {
              'en': 'Walter',
              'ja': 'ヴァルター'
            },
            'phaseTimeLimit': 600,
            'phaseStartTime': '2006-10-07T12:06:56.568+09:00',
            'serverTimestamp': '2006-10-07T12:06:56.568+09:00',
            'text': '>>11\nそれで、あなたは人狼が誰だと思うの？\n\n私はパメラが人狼だと思う。'
          }
        ]
      },
      {
        payload: theirMessageOnChat,
        type: ActionTypes.SOCKET_MESSAGE
      }
    )
  ).toEqual({
    items: [
      {
        'id': 12,
        'image': 'https://werewolf.world/image/0.1/Walter.jpg',
        'intensionalDisclosureRange': 'public',
        'isMine': true,
        'name': {
          'en': 'Walter',
          'ja': 'ヴァルター'
        },
        'phaseTimeLimit': 600,
        'phaseStartTime': '2006-10-07T12:06:56.568+09:00',
        'serverTimestamp': '2006-10-07T12:06:56.568+09:00',
        'text': '>>11\nそれで、あなたは人狼が誰だと思うの？\n\n私はパメラが人狼だと思う。'
      },
      {
        'id': 12,
        'image': 'https://werewolf.world/image/0.1/Walter.jpg',
        'intensionalDisclosureRange': 'public',
        'isMine': false,
        'name': {
          'en': 'Walter',
          'ja': 'ヴァルター'
        },
        'phaseTimeLimit': 600,
        'phaseStartTime': '2006-10-07T12:06:56.568+09:00',
        'serverTimestamp': '2006-10-07T12:06:56.568+09:00',
        'text': '>>11\nそれで、あなたは人狼が誰だと思うの？\n\n私はパメラが人狼だと思う。'
      }
    ]
  })
})


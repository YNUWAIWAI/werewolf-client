// @flow
import * as ActionTypes from '../constants/ActionTypes'
import {myMessageOnChat, theirMessageOnChat} from './fakeServer'
import reducer, {initialState} from './chat'

test('SOCKET_MESSAGE', () => {
  expect(
    reducer(
      initialState,
      {
        payload: myMessageOnChat,
        type: ActionTypes.SOCKET_MESSAGE
      }
    )
  ).toEqual({
    allIds: ['chat0'],
    byId: {
      chat0: {
        id: 12,
        image: 'https://werewolf.world/image/0.1/Walter.jpg',
        intensionalDisclosureRange: 'public',
        isMine: true,
        name: {
          en: 'Walter',
          ja: 'ヴァルター'
        },
        phaseStartTime: '2006-10-07T12:06:56.568+09:00',
        phaseTimeLimit: 600,
        serverTimestamp: '2006-10-07T12:06:56.568+09:00',
        text: '>>11\nそれで、あなたは人狼が誰だと思うの？\n\n私はパメラが人狼だと思う。',
        type: 'item'
      }
    }
  })
  expect(
    reducer(
      {
        allIds: ['chat0'],
        byId: {
          chat0: {
            id: 12,
            image: 'https://werewolf.world/image/0.1/Walter.jpg',
            intensionalDisclosureRange: 'public',
            isMine: true,
            name: {
              en: 'Walter',
              ja: 'ヴァルター'
            },
            phaseStartTime: '2006-10-07T12:06:56.568+09:00',
            phaseTimeLimit: 600,
            serverTimestamp: '2006-10-07T12:06:56.568+09:00',
            text: '>>11\nそれで、あなたは人狼が誰だと思うの？\n\n私はパメラが人狼だと思う。',
            type: 'item'
          }
        }
      },
      {
        payload: theirMessageOnChat,
        type: ActionTypes.SOCKET_MESSAGE
      }
    )
  ).toEqual({
    allIds: ['chat1', 'chat0'],
    byId: {
      chat0: {
        id: 12,
        image: 'https://werewolf.world/image/0.1/Walter.jpg',
        intensionalDisclosureRange: 'public',
        isMine: true,
        name: {
          en: 'Walter',
          ja: 'ヴァルター'
        },
        phaseStartTime: '2006-10-07T12:06:56.568+09:00',
        phaseTimeLimit: 600,
        serverTimestamp: '2006-10-07T12:06:56.568+09:00',
        text: '>>11\nそれで、あなたは人狼が誰だと思うの？\n\n私はパメラが人狼だと思う。',
        type: 'item'
      },
      chat1: {
        id: 12,
        image: 'https://werewolf.world/image/0.1/Walter.jpg',
        intensionalDisclosureRange: 'public',
        isMine: false,
        name: {
          en: 'Walter',
          ja: 'ヴァルター'
        },
        phaseStartTime: '2006-10-07T12:06:56.568+09:00',
        phaseTimeLimit: 600,
        serverTimestamp: '2006-10-07T12:06:56.568+09:00',
        text: '>>11\nそれで、あなたは人狼が誰だと思うの？\n\n私はパメラが人狼だと思う。',
        type: 'item'
      }
    }
  })
})
test('CHANGE_DATE', () => {
  expect(
    reducer(
      initialState,
      {
        from: 0,
        to: 1,
        type: ActionTypes.CHANGE_DATE
      }
    )
  ).toEqual({
    allIds: ['delimeter0'],
    byId: {
      'delimeter0': {
        date: 1,
        type: 'delimeter'
      }
    }
  })
})

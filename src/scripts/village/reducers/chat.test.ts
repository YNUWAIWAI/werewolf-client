/* global village */
import * as ActionTypes from '../constants/ActionTypes'
import {anonymousAudienceChat, myMessageOnChat, onymousAudienceChat, theirMessageOnChat} from './fakeServer'
import reducer, {initialState} from './chat'
import {socket} from '../actions'

describe('socket/MESSAGE', () => {
  test('myMessageOnChat', () => {
    expect(
      reducer(
        initialState,
        socket.message(myMessageOnChat)
      )
    ).toEqual({
      allIds: ['chat0'],
      byId: {
        chat0: {
          id: 12,
          image: 'https://werewolf.world/image/0.2/Walter.jpg',
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
  })
  test('theirMessageOnChat', () => {
    expect(
      reducer(
        {
          allIds: ['chat0'],
          byId: {
            chat0: {
              id: 12,
              image: 'https://werewolf.world/image/0.2/Walter.jpg',
              intensionalDisclosureRange: village.Channel.public,
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
        socket.message(theirMessageOnChat)
      )
    ).toEqual({
      allIds: ['chat1', 'chat0'],
      byId: {
        chat0: {
          id: 12,
          image: 'https://werewolf.world/image/0.2/Walter.jpg',
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
          image: 'https://werewolf.world/image/0.2/Walter.jpg',
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
  test('onymousAudienceChat', () => {
    expect(
      reducer(
        {
          allIds: ['chat1', 'chat0'],
          byId: {
            chat0: {
              id: 12,
              image: 'https://werewolf.world/image/0.2/Walter.jpg',
              intensionalDisclosureRange: village.Channel.public,
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
              image: 'https://werewolf.world/image/0.2/Walter.jpg',
              intensionalDisclosureRange: village.Channel.public,
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
        },
        socket.message(onymousAudienceChat)
      )
    ).toEqual({
      allIds: ['chat2', 'chat1', 'chat0'],
      byId: {
        chat0: {
          id: 12,
          image: 'https://werewolf.world/image/0.2/Walter.jpg',
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
          image: 'https://werewolf.world/image/0.2/Walter.jpg',
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
        },
        chat2: {
          id: -1,
          image: 'https://werewolf.world/image/0.2/Regina.jpg',
          intensionalDisclosureRange: 'onymousAudience',
          isMine: true,
          name: 'Katoh',
          phaseStartTime: '2006-10-07T12:06:56.568+09:00',
          phaseTimeLimit: 600,
          serverTimestamp: '2006-10-07T12:06:56.568+09:00',
          text: '>>11\nそれで、あなたは人狼が誰だと思うの？\n\n私はパメラが人狼だと思う。',
          type: 'item'
        }
      }
    })
  })
  test('anonymousAudienceChat', () => {
    expect(
      reducer(
        {
          allIds: ['chat2', 'chat1', 'chat0'],
          byId: {
            chat0: {
              id: 12,
              image: 'https://werewolf.world/image/0.2/Walter.jpg',
              intensionalDisclosureRange: village.Channel.public,
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
              image: 'https://werewolf.world/image/0.2/Walter.jpg',
              intensionalDisclosureRange: village.Channel.public,
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
            },
            chat2: {
              id: -1,
              image: 'https://werewolf.world/image/0.2/Regina.jpg',
              intensionalDisclosureRange: village.Channel.onymousAudience,
              isMine: true,
              name: 'Katoh',
              phaseStartTime: '2006-10-07T12:06:56.568+09:00',
              phaseTimeLimit: 600,
              serverTimestamp: '2006-10-07T12:06:56.568+09:00',
              text: '>>11\nそれで、あなたは人狼が誰だと思うの？\n\n私はパメラが人狼だと思う。',
              type: 'item'
            }
          }
        },
        socket.message(anonymousAudienceChat)
      )
    ).toEqual({
      allIds: ['chat3', 'chat2', 'chat1', 'chat0'],
      byId: {
        chat0: {
          id: 12,
          image: 'https://werewolf.world/image/0.2/Walter.jpg',
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
          image: 'https://werewolf.world/image/0.2/Walter.jpg',
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
        },
        chat2: {
          id: -1,
          image: 'https://werewolf.world/image/0.2/Regina.jpg',
          intensionalDisclosureRange: 'onymousAudience',
          isMine: true,
          name: 'Katoh',
          phaseStartTime: '2006-10-07T12:06:56.568+09:00',
          phaseTimeLimit: 600,
          serverTimestamp: '2006-10-07T12:06:56.568+09:00',
          text: '>>11\nそれで、あなたは人狼が誰だと思うの？\n\n私はパメラが人狼だと思う。',
          type: 'item'
        },
        chat3: {
          id: -1,
          image: 'Anonymous',
          intensionalDisclosureRange: 'anonymousAudience',
          isMine: true,
          name: 'Anonymous',
          phaseStartTime: '2006-10-07T12:06:56.568+09:00',
          phaseTimeLimit: 600,
          serverTimestamp: '2006-10-07T12:06:56.568+09:00',
          text: '>>11\nそれで、あなたは人狼が誰だと思うの？\n\n私はパメラが人狼だと思う。',
          type: 'item'
        }
      }
    })
  })
})
test('CHANGE_DATE', () => {
  expect(
    reducer(
      initialState,
      {
        from: 0,
        to: 1,
        type: ActionTypes.global.CHANGE_DATE
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

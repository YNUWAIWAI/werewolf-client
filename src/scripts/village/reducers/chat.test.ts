import * as ActionTypes from '../constants/ActionTypes'
import {
  anonymousAudienceChat,
  myMessageOnChat,
  onymousAudienceChat,
  theirMessageOnChat
} from './fakeServer'
import reducer, {initialState} from './chat'
import {Character} from '../constants/Character'
import {ImagePath} from '../constants/ImagePath'
import {socket} from '../actions'
import {village} from '../types'

describe('socket/MESSAGE', () => {
  test('myMessageOnChat', () => {
    expect(
      reducer(
        initialState,
        socket.message(myMessageOnChat)
      )
    ).toStrictEqual({
      allIds: ['chat0'],
      byId: {
        chat0: {
          characterId: '1',
          clientTimestamp: '2006-10-07T12:06:56.568+09:00',
          day: 1,
          id: 12,
          image: ImagePath.Character120x120.a,
          intensionalDisclosureRange: 'public',
          isMarked: false,
          isMine: true,
          name: Character.a,
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
              characterId: '1',
              clientTimestamp: '2006-10-07T12:06:56.568+09:00',
              day: 1,
              id: 12,
              image: ImagePath.Character120x120.a,
              intensionalDisclosureRange: village.Channel.public,
              isMarked: false,
              isMine: true,
              name: Character.a,
              phaseStartTime: '2006-10-07T12:06:56.568+09:00',
              phaseTimeLimit: 600,
              serverTimestamp: '2006-10-07T12:06:56.568+09:00',
              text: '>>11\nそれで、あなたは人狼が誰だと思うの？\n\n私はパメラが人狼だと思う。',
              type: village.ChatItemType.item
            }
          }
        },
        socket.message(theirMessageOnChat)
      )
    ).toStrictEqual({
      allIds: ['chat0', 'chat1'],
      byId: {
        chat0: {
          characterId: '1',
          clientTimestamp: '2006-10-07T12:06:56.568+09:00',
          day: 1,
          id: 12,
          image: ImagePath.Character120x120.a,
          intensionalDisclosureRange: 'public',
          isMarked: false,
          isMine: true,
          name: Character.a,
          phaseStartTime: '2006-10-07T12:06:56.568+09:00',
          phaseTimeLimit: 600,
          serverTimestamp: '2006-10-07T12:06:56.568+09:00',
          text: '>>11\nそれで、あなたは人狼が誰だと思うの？\n\n私はパメラが人狼だと思う。',
          type: village.ChatItemType.item
        },
        chat1: {
          characterId: '1',
          clientTimestamp: '2006-10-07T12:06:56.568+09:00',
          day: 1,
          id: 12,
          image: ImagePath.Character120x120.a,
          intensionalDisclosureRange: 'public',
          isMarked: false,
          isMine: false,
          name: Character.a,
          phaseStartTime: '2006-10-07T12:06:56.568+09:00',
          phaseTimeLimit: 600,
          serverTimestamp: '2006-10-07T12:06:56.568+09:00',
          text: '>>11\nそれで、あなたは人狼が誰だと思うの？\n\n私はパメラが人狼だと思う。',
          type: village.ChatItemType.item
        }
      }
    })
  })
  test('onymousAudienceChat', () => {
    expect(
      reducer(
        {
          allIds: ['chat0', 'chat1'],
          byId: {
            chat0: {
              characterId: '1',
              clientTimestamp: '2006-10-07T12:06:56.568+09:00',
              day: 1,
              id: 12,
              image: ImagePath.Character120x120.a,
              intensionalDisclosureRange: village.Channel.public,
              isMarked: false,
              isMine: true,
              name: Character.a,
              phaseStartTime: '2006-10-07T12:06:56.568+09:00',
              phaseTimeLimit: 600,
              serverTimestamp: '2006-10-07T12:06:56.568+09:00',
              text: '>>11\nそれで、あなたは人狼が誰だと思うの？\n\n私はパメラが人狼だと思う。',
              type: village.ChatItemType.item
            },
            chat1: {
              characterId: '1',
              clientTimestamp: '2006-10-07T12:06:56.568+09:00',
              day: 1,
              id: 12,
              image: ImagePath.Character120x120.a,
              intensionalDisclosureRange: village.Channel.public,
              isMarked: false,
              isMine: false,
              name: Character.a,
              phaseStartTime: '2006-10-07T12:06:56.568+09:00',
              phaseTimeLimit: 600,
              serverTimestamp: '2006-10-07T12:06:56.568+09:00',
              text: '>>11\nそれで、あなたは人狼が誰だと思うの？\n\n私はパメラが人狼だと思う。',
              type: village.ChatItemType.item
            }
          }
        },
        socket.message(onymousAudienceChat)
      )
    ).toStrictEqual({
      allIds: ['chat0', 'chat1', 'chat2'],
      byId: {
        chat0: {
          characterId: '1',
          clientTimestamp: '2006-10-07T12:06:56.568+09:00',
          day: 1,
          id: 12,
          image: ImagePath.Character120x120.a,
          intensionalDisclosureRange: 'public',
          isMarked: false,
          isMine: true,
          name: Character.a,
          phaseStartTime: '2006-10-07T12:06:56.568+09:00',
          phaseTimeLimit: 600,
          serverTimestamp: '2006-10-07T12:06:56.568+09:00',
          text: '>>11\nそれで、あなたは人狼が誰だと思うの？\n\n私はパメラが人狼だと思う。',
          type: village.ChatItemType.item
        },
        chat1: {
          characterId: '1',
          clientTimestamp: '2006-10-07T12:06:56.568+09:00',
          day: 1,
          id: 12,
          image: ImagePath.Character120x120.a,
          intensionalDisclosureRange: 'public',
          isMarked: false,
          isMine: false,
          name: Character.a,
          phaseStartTime: '2006-10-07T12:06:56.568+09:00',
          phaseTimeLimit: 600,
          serverTimestamp: '2006-10-07T12:06:56.568+09:00',
          text: '>>11\nそれで、あなたは人狼が誰だと思うの？\n\n私はパメラが人狼だと思う。',
          type: village.ChatItemType.item
        },
        chat2: {
          clientTimestamp: '2006-10-07T12:06:56.568+09:00',
          day: 1,
          id: -1,
          image: ImagePath.Character120x120.y,
          intensionalDisclosureRange: 'onymousAudience',
          isMarked: false,
          isMine: true,
          name: 'Katoh',
          phaseStartTime: '2006-10-07T12:06:56.568+09:00',
          phaseTimeLimit: 600,
          serverTimestamp: '2006-10-07T12:06:56.568+09:00',
          text: '>>11\nそれで、あなたは人狼が誰だと思うの？\n\n私はパメラが人狼だと思う。',
          type: village.ChatItemType.item
        }
      }
    })
  })
  test('anonymousAudienceChat', () => {
    expect(
      reducer(
        {
          allIds: ['chat0', 'chat1', 'chat2'],
          byId: {
            chat0: {
              characterId: '1',
              clientTimestamp: '2006-10-07T12:06:56.568+09:00',
              day: 1,
              id: 12,
              image: ImagePath.Character120x120.a,
              intensionalDisclosureRange: village.Channel.public,
              isMarked: false,
              isMine: true,
              name: Character.a,
              phaseStartTime: '2006-10-07T12:06:56.568+09:00',
              phaseTimeLimit: 600,
              serverTimestamp: '2006-10-07T12:06:56.568+09:00',
              text: '>>11\nそれで、あなたは人狼が誰だと思うの？\n\n私はパメラが人狼だと思う。',
              type: village.ChatItemType.item
            },
            chat1: {
              characterId: '1',
              clientTimestamp: '2006-10-07T12:06:56.568+09:00',
              day: 1,
              id: 12,
              image: ImagePath.Character120x120.a,
              intensionalDisclosureRange: village.Channel.public,
              isMarked: false,
              isMine: false,
              name: Character.a,
              phaseStartTime: '2006-10-07T12:06:56.568+09:00',
              phaseTimeLimit: 600,
              serverTimestamp: '2006-10-07T12:06:56.568+09:00',
              text: '>>11\nそれで、あなたは人狼が誰だと思うの？\n\n私はパメラが人狼だと思う。',
              type: village.ChatItemType.item
            },
            chat2: {
              clientTimestamp: '2006-10-07T12:06:56.568+09:00',
              day: 1,
              id: -1,
              image: ImagePath.Character120x120.y,
              intensionalDisclosureRange: village.Channel.onymousAudience,
              isMarked: false,
              isMine: true,
              name: 'Katoh',
              phaseStartTime: '2006-10-07T12:06:56.568+09:00',
              phaseTimeLimit: 600,
              serverTimestamp: '2006-10-07T12:06:56.568+09:00',
              text: '>>11\nそれで、あなたは人狼が誰だと思うの？\n\n私はパメラが人狼だと思う。',
              type: village.ChatItemType.item
            }
          }
        },
        socket.message(anonymousAudienceChat)
      )
    ).toStrictEqual({
      allIds: ['chat0', 'chat1', 'chat2', 'chat3'],
      byId: {
        chat0: {
          characterId: '1',
          clientTimestamp: '2006-10-07T12:06:56.568+09:00',
          day: 1,
          id: 12,
          image: ImagePath.Character120x120.a,
          intensionalDisclosureRange: 'public',
          isMarked: false,
          isMine: true,
          name: Character.a,
          phaseStartTime: '2006-10-07T12:06:56.568+09:00',
          phaseTimeLimit: 600,
          serverTimestamp: '2006-10-07T12:06:56.568+09:00',
          text: '>>11\nそれで、あなたは人狼が誰だと思うの？\n\n私はパメラが人狼だと思う。',
          type: village.ChatItemType.item
        },
        chat1: {
          characterId: '1',
          clientTimestamp: '2006-10-07T12:06:56.568+09:00',
          day: 1,
          id: 12,
          image: ImagePath.Character120x120.a,
          intensionalDisclosureRange: 'public',
          isMarked: false,
          isMine: false,
          name: Character.a,
          phaseStartTime: '2006-10-07T12:06:56.568+09:00',
          phaseTimeLimit: 600,
          serverTimestamp: '2006-10-07T12:06:56.568+09:00',
          text: '>>11\nそれで、あなたは人狼が誰だと思うの？\n\n私はパメラが人狼だと思う。',
          type: village.ChatItemType.item
        },
        chat2: {
          clientTimestamp: '2006-10-07T12:06:56.568+09:00',
          day: 1,
          id: -1,
          image: ImagePath.Character120x120.y,
          intensionalDisclosureRange: 'onymousAudience',
          isMarked: false,
          isMine: true,
          name: 'Katoh',
          phaseStartTime: '2006-10-07T12:06:56.568+09:00',
          phaseTimeLimit: 600,
          serverTimestamp: '2006-10-07T12:06:56.568+09:00',
          text: '>>11\nそれで、あなたは人狼が誰だと思うの？\n\n私はパメラが人狼だと思う。',
          type: village.ChatItemType.item
        },
        chat3: {
          clientTimestamp: '2006-10-07T12:06:56.568+09:00',
          day: 1,
          id: -1,
          image: ImagePath.Character120x120.anonymous,
          intensionalDisclosureRange: 'anonymousAudience',
          isMarked: false,
          isMine: true,
          name: 'Anonymous',
          phaseStartTime: '2006-10-07T12:06:56.568+09:00',
          phaseTimeLimit: 600,
          serverTimestamp: '2006-10-07T12:06:56.568+09:00',
          text: '>>11\nそれで、あなたは人狼が誰だと思うの？\n\n私はパメラが人狼だと思う。',
          type: village.ChatItemType.item
        }
      }
    })
  })
})
test('CHANGE_day', () => {
  expect(
    reducer(
      initialState,
      {
        from: 0,
        to: 1,
        type: ActionTypes.App.CHANGE_DAY
      }
    )
  ).toStrictEqual({
    allIds: ['delimeter0'],
    byId: {
      'delimeter0': {
        day: 1,
        type: village.ChatItemType.delimeter
      }
    }
  })
})
test('STAR', () => {
  expect(
    reducer(
      {
        allIds: ['chat0'],
        byId: {
          chat0: {
            characterId: '1',
            clientTimestamp: '2006-10-07T12:06:56.568+09:00',
            day: 1,
            id: 12,
            image: ImagePath.Character120x120.a,
            intensionalDisclosureRange: village.Channel.public,
            isMarked: false,
            isMine: true,
            name: Character.a,
            phaseStartTime: '2006-10-07T12:06:56.568+09:00',
            phaseTimeLimit: 600,
            serverTimestamp: '2006-10-07T12:06:56.568+09:00',
            text: '>>11\nそれで、あなたは人狼が誰だと思うの？\n\n私はパメラが人狼だと思う。',
            type: village.ChatItemType.item
          }
        }
      },
      {
        id: 'chat0',
        isMarked: true,
        type: ActionTypes.App.STAR
      }
    )
  ).toStrictEqual({
    allIds: ['chat0'],
    byId: {
      chat0: {
        characterId: '1',
        clientTimestamp: '2006-10-07T12:06:56.568+09:00',
        day: 1,
        id: 12,
        image: ImagePath.Character120x120.a,
        intensionalDisclosureRange: 'public',
        isMarked: true,
        isMine: true,
        name: Character.a,
        phaseStartTime: '2006-10-07T12:06:56.568+09:00',
        phaseTimeLimit: 600,
        serverTimestamp: '2006-10-07T12:06:56.568+09:00',
        text: '>>11\nそれで、あなたは人狼が誰だと思うの？\n\n私はパメラが人狼だと思う。',
        type: village.ChatItemType.item
      }
    }
  })
})


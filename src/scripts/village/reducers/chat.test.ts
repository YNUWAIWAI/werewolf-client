import * as ActionTypes from '../constants/ActionTypes'
import {
  anonymousAudienceChat,
  myMessageOnChat,
  onymousAudienceChat,
  theirMessageOnChat
} from './fakeServer'
import {
  init,
  message
} from '../actions'
import {Character} from '../constants/Character'
import {ImagePath} from '../constants/ImagePath'
import {idGenerator} from '../util'
import {initialState} from './chat'
import {village} from '../types'

jest.mock('../util', () => {
  const originalModule = jest.requireActual('../util')

  return {
    ... originalModule,
    idGenerator: jest.fn(() => originalModule.idGenerator(true))
  }
})
beforeEach(() => {
  jest.resetModules()
})
test('INIT', async () => {
  const module = await import('./chat')
  const reducer = module.default

  expect(
    reducer(
      initialState,
      init()
    )
  ).toStrictEqual(
    initialState
  )
})
describe('message/CHAT_MESSAGE', () => {
  test('myMessageOnChat', async () => {
    const getAllId = idGenerator(true)
    const allIds = [... Array(1)].map(() => getAllId())
    const module = await import('./chat')
    const reducer = module.default

    expect(
      reducer(
        initialState,
        message.chatMessage(myMessageOnChat)
      )
    ).toStrictEqual({
      allIds,
      byId: {
        [allIds[0]]: {
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
  test('theirMessageOnChat', async () => {
    const getAllId = idGenerator(true)
    const allIds = [... Array(2)].map(() => getAllId())
    const module = await import('./chat')
    const reducer = module.default

    expect(
      reducer(
        reducer(
          initialState,
          message.chatMessage(myMessageOnChat)
        ),
        message.chatMessage(theirMessageOnChat)
      )
    ).toStrictEqual({
      allIds,
      byId: {
        [allIds[0]]: {
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
        [allIds[1]]: {
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
  test('onymousAudienceChat', async () => {
    const getAllId = idGenerator(true)
    const allIds = [... Array(3)].map(() => getAllId())
    const module = await import('./chat')
    const reducer = module.default

    expect(
      reducer(
        reducer(
          reducer(
            initialState,
            message.chatMessage(myMessageOnChat)
          ),
          message.chatMessage(theirMessageOnChat)
        ),
        message.chatMessage(onymousAudienceChat)
      )
    ).toStrictEqual({
      allIds,
      byId: {
        [allIds[0]]: {
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
        [allIds[1]]: {
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
        [allIds[2]]: {
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
  test('anonymousAudienceChat', async () => {
    const getAllId = idGenerator(true)
    const allIds = [... Array(4)].map(() => getAllId())
    const module = await import('./chat')
    const reducer = module.default

    expect(
      reducer(
        reducer(
          reducer(
            reducer(
              initialState,
              message.chatMessage(myMessageOnChat)
            ),
            message.chatMessage(theirMessageOnChat)
          ),
          message.chatMessage(onymousAudienceChat)
        ),
        message.chatMessage(anonymousAudienceChat)
      )
    ).toStrictEqual({
      allIds,
      byId: {
        [allIds[0]]: {
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
        [allIds[1]]: {
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
        [allIds[2]]: {
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
        [allIds[3]]: {
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
test('CHANGE_day', async () => {
  const getAllId = idGenerator(true)
  const allIds = [... Array(1)].map(() => getAllId())
  const module = await import('./chat')
  const reducer = module.default

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
    allIds,
    byId: {
      [allIds[0]]: {
        day: 1,
        type: village.ChatItemType.delimeter
      }
    }
  })
})
test('STAR', async () => {
  const getAllId = idGenerator(true)
  const allIds = [... Array(1)].map(() => getAllId())
  const module = await import('./chat')
  const reducer = module.default

  expect(
    reducer(
      {
        allIds,
        byId: {
          [allIds[0]]: {
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
        id: allIds[0],
        isMarked: true,
        type: ActionTypes.App.STAR
      }
    )
  ).toStrictEqual({
    allIds,
    byId: {
      [allIds[0]]: {
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


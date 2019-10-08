import * as ActionTypes from '../constants/ActionTypes'
import * as village from '../types'
import {anonymousAudienceChat, myMessageOnChat, onymousAudienceChat, theirMessageOnChat} from './fakeServer'
import reducer, {initialState} from './chat'
import {Agent} from '../constants/Agent'
import {ImagePath} from '../constants/ImagePath'
import {socket} from '../actions'

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
          agentId: '1',
          clientTimestamp: '2006-10-07T12:06:56.568+09:00',
          date: 1,
          id: 12,
          image: ImagePath.Agent120x120.a,
          intensionalDisclosureRange: 'public',
          isMarked: false,
          isMine: true,
          name: Agent.a,
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
              agentId: '1',
              clientTimestamp: '2006-10-07T12:06:56.568+09:00',
              date: 1,
              id: 12,
              image: ImagePath.Agent120x120.a,
              intensionalDisclosureRange: village.Channel.public,
              isMarked: false,
              isMine: true,
              name: Agent.a,
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
    ).toStrictEqual({
      allIds: ['chat0', 'chat1'],
      byId: {
        chat0: {
          agentId: '1',
          clientTimestamp: '2006-10-07T12:06:56.568+09:00',
          date: 1,
          id: 12,
          image: ImagePath.Agent120x120.a,
          intensionalDisclosureRange: 'public',
          isMarked: false,
          isMine: true,
          name: Agent.a,
          phaseStartTime: '2006-10-07T12:06:56.568+09:00',
          phaseTimeLimit: 600,
          serverTimestamp: '2006-10-07T12:06:56.568+09:00',
          text: '>>11\nそれで、あなたは人狼が誰だと思うの？\n\n私はパメラが人狼だと思う。',
          type: 'item'
        },
        chat1: {
          agentId: '1',
          clientTimestamp: '2006-10-07T12:06:56.568+09:00',
          date: 1,
          id: 12,
          image: ImagePath.Agent120x120.a,
          intensionalDisclosureRange: 'public',
          isMarked: false,
          isMine: false,
          name: Agent.a,
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
          allIds: ['chat0', 'chat1'],
          byId: {
            chat0: {
              agentId: '1',
              clientTimestamp: '2006-10-07T12:06:56.568+09:00',
              date: 1,
              id: 12,
              image: ImagePath.Agent120x120.a,
              intensionalDisclosureRange: village.Channel.public,
              isMarked: false,
              isMine: true,
              name: Agent.a,
              phaseStartTime: '2006-10-07T12:06:56.568+09:00',
              phaseTimeLimit: 600,
              serverTimestamp: '2006-10-07T12:06:56.568+09:00',
              text: '>>11\nそれで、あなたは人狼が誰だと思うの？\n\n私はパメラが人狼だと思う。',
              type: 'item'
            },
            chat1: {
              agentId: '1',
              clientTimestamp: '2006-10-07T12:06:56.568+09:00',
              date: 1,
              id: 12,
              image: ImagePath.Agent120x120.a,
              intensionalDisclosureRange: village.Channel.public,
              isMarked: false,
              isMine: false,
              name: Agent.a,
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
    ).toStrictEqual({
      allIds: ['chat0', 'chat1', 'chat2'],
      byId: {
        chat0: {
          agentId: '1',
          clientTimestamp: '2006-10-07T12:06:56.568+09:00',
          date: 1,
          id: 12,
          image: ImagePath.Agent120x120.a,
          intensionalDisclosureRange: 'public',
          isMarked: false,
          isMine: true,
          name: Agent.a,
          phaseStartTime: '2006-10-07T12:06:56.568+09:00',
          phaseTimeLimit: 600,
          serverTimestamp: '2006-10-07T12:06:56.568+09:00',
          text: '>>11\nそれで、あなたは人狼が誰だと思うの？\n\n私はパメラが人狼だと思う。',
          type: 'item'
        },
        chat1: {
          agentId: '1',
          clientTimestamp: '2006-10-07T12:06:56.568+09:00',
          date: 1,
          id: 12,
          image: ImagePath.Agent120x120.a,
          intensionalDisclosureRange: 'public',
          isMarked: false,
          isMine: false,
          name: Agent.a,
          phaseStartTime: '2006-10-07T12:06:56.568+09:00',
          phaseTimeLimit: 600,
          serverTimestamp: '2006-10-07T12:06:56.568+09:00',
          text: '>>11\nそれで、あなたは人狼が誰だと思うの？\n\n私はパメラが人狼だと思う。',
          type: 'item'
        },
        chat2: {
          clientTimestamp: '2006-10-07T12:06:56.568+09:00',
          date: 1,
          id: -1,
          image: ImagePath.Agent120x120.y,
          intensionalDisclosureRange: 'onymousAudience',
          isMarked: false,
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
          allIds: ['chat0', 'chat1', 'chat2'],
          byId: {
            chat0: {
              agentId: '1',
              clientTimestamp: '2006-10-07T12:06:56.568+09:00',
              date: 1,
              id: 12,
              image: ImagePath.Agent120x120.a,
              intensionalDisclosureRange: village.Channel.public,
              isMarked: false,
              isMine: true,
              name: Agent.a,
              phaseStartTime: '2006-10-07T12:06:56.568+09:00',
              phaseTimeLimit: 600,
              serverTimestamp: '2006-10-07T12:06:56.568+09:00',
              text: '>>11\nそれで、あなたは人狼が誰だと思うの？\n\n私はパメラが人狼だと思う。',
              type: 'item'
            },
            chat1: {
              agentId: '1',
              clientTimestamp: '2006-10-07T12:06:56.568+09:00',
              date: 1,
              id: 12,
              image: ImagePath.Agent120x120.a,
              intensionalDisclosureRange: village.Channel.public,
              isMarked: false,
              isMine: false,
              name: Agent.a,
              phaseStartTime: '2006-10-07T12:06:56.568+09:00',
              phaseTimeLimit: 600,
              serverTimestamp: '2006-10-07T12:06:56.568+09:00',
              text: '>>11\nそれで、あなたは人狼が誰だと思うの？\n\n私はパメラが人狼だと思う。',
              type: 'item'
            },
            chat2: {
              clientTimestamp: '2006-10-07T12:06:56.568+09:00',
              date: 1,
              id: -1,
              image: ImagePath.Agent120x120.y,
              intensionalDisclosureRange: village.Channel.onymousAudience,
              isMarked: false,
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
    ).toStrictEqual({
      allIds: ['chat0', 'chat1', 'chat2', 'chat3'],
      byId: {
        chat0: {
          agentId: '1',
          clientTimestamp: '2006-10-07T12:06:56.568+09:00',
          date: 1,
          id: 12,
          image: ImagePath.Agent120x120.a,
          intensionalDisclosureRange: 'public',
          isMarked: false,
          isMine: true,
          name: Agent.a,
          phaseStartTime: '2006-10-07T12:06:56.568+09:00',
          phaseTimeLimit: 600,
          serverTimestamp: '2006-10-07T12:06:56.568+09:00',
          text: '>>11\nそれで、あなたは人狼が誰だと思うの？\n\n私はパメラが人狼だと思う。',
          type: 'item'
        },
        chat1: {
          agentId: '1',
          clientTimestamp: '2006-10-07T12:06:56.568+09:00',
          date: 1,
          id: 12,
          image: ImagePath.Agent120x120.a,
          intensionalDisclosureRange: 'public',
          isMarked: false,
          isMine: false,
          name: Agent.a,
          phaseStartTime: '2006-10-07T12:06:56.568+09:00',
          phaseTimeLimit: 600,
          serverTimestamp: '2006-10-07T12:06:56.568+09:00',
          text: '>>11\nそれで、あなたは人狼が誰だと思うの？\n\n私はパメラが人狼だと思う。',
          type: 'item'
        },
        chat2: {
          clientTimestamp: '2006-10-07T12:06:56.568+09:00',
          date: 1,
          id: -1,
          image: ImagePath.Agent120x120.y,
          intensionalDisclosureRange: 'onymousAudience',
          isMarked: false,
          isMine: true,
          name: 'Katoh',
          phaseStartTime: '2006-10-07T12:06:56.568+09:00',
          phaseTimeLimit: 600,
          serverTimestamp: '2006-10-07T12:06:56.568+09:00',
          text: '>>11\nそれで、あなたは人狼が誰だと思うの？\n\n私はパメラが人狼だと思う。',
          type: 'item'
        },
        chat3: {
          clientTimestamp: '2006-10-07T12:06:56.568+09:00',
          date: 1,
          id: -1,
          image: 'https://werewolf.world/image/0.3/agent_icons/120x120/anonymous_120x120.png',
          intensionalDisclosureRange: 'anonymousAudience',
          isMarked: false,
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
  ).toStrictEqual({
    allIds: ['delimeter0'],
    byId: {
      'delimeter0': {
        date: 1,
        type: 'delimeter'
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
            agentId: '1',
            clientTimestamp: '2006-10-07T12:06:56.568+09:00',
            date: 1,
            id: 12,
            image: ImagePath.Agent120x120.a,
            intensionalDisclosureRange: village.Channel.public,
            isMarked: false,
            isMine: true,
            name: {
              en: 'Adil',
              ja: 'アーディル'
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
        id: 'chat0',
        isMarked: true,
        type: ActionTypes.global.STAR
      }
    )
  ).toStrictEqual({
    allIds: ['chat0'],
    byId: {
      chat0: {
        agentId: '1',
        clientTimestamp: '2006-10-07T12:06:56.568+09:00',
        date: 1,
        id: 12,
        image: ImagePath.Agent120x120.a,
        intensionalDisclosureRange: 'public',
        isMarked: true,
        isMine: true,
        name: {
          en: 'Adil',
          ja: 'アーディル'
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


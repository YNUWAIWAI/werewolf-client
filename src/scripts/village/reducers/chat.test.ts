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
          clientTimestamp: '2006-10-07T12:06:56.568+09:00',
          id: 12,
          image: 'https://werewolf.world/image/0.3/agent_icons/120x120/a_120x120.png',
          intensionalDisclosureRange: 'public',
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
    })
  })
  test('theirMessageOnChat', () => {
    expect(
      reducer(
        {
          allIds: ['chat0'],
          byId: {
            chat0: {
              clientTimestamp: '2006-10-07T12:06:56.568+09:00',
              id: 12,
              image: 'https://werewolf.world/image/0.3/agent_icons/120x120/a_120x120.png',
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
        socket.message(theirMessageOnChat)
      )
    ).toEqual({
      allIds: ['chat0', 'chat1'],
      byId: {
        chat0: {
          clientTimestamp: '2006-10-07T12:06:56.568+09:00',
          id: 12,
          image: 'https://werewolf.world/image/0.3/agent_icons/120x120/a_120x120.png',
          intensionalDisclosureRange: 'public',
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
        },
        chat1: {
          clientTimestamp: '2006-10-07T12:06:56.568+09:00',
          id: 12,
          image: 'https://werewolf.world/image/0.3/agent_icons/120x120/a_120x120.png',
          intensionalDisclosureRange: 'public',
          isMarked: false,
          isMine: false,
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
  test('onymousAudienceChat', () => {
    expect(
      reducer(
        {
          allIds: ['chat0', 'chat1'],
          byId: {
            chat0: {
              clientTimestamp: '2006-10-07T12:06:56.568+09:00',
              id: 12,
              image: 'https://werewolf.world/image/0.3/agent_icons/120x120/a_120x120.png',
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
            },
            chat1: {
              clientTimestamp: '2006-10-07T12:06:56.568+09:00',
              id: 12,
              image: 'https://werewolf.world/image/0.3/agent_icons/120x120/a_120x120.png',
              intensionalDisclosureRange: village.Channel.public,
              isMarked: false,
              isMine: false,
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
        socket.message(onymousAudienceChat)
      )
    ).toEqual({
      allIds: ['chat0', 'chat1', 'chat2'],
      byId: {
        chat0: {
          clientTimestamp: '2006-10-07T12:06:56.568+09:00',
          id: 12,
          image: 'https://werewolf.world/image/0.3/agent_icons/120x120/a_120x120.png',
          intensionalDisclosureRange: 'public',
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
        },
        chat1: {
          clientTimestamp: '2006-10-07T12:06:56.568+09:00',
          id: 12,
          image: 'https://werewolf.world/image/0.3/agent_icons/120x120/a_120x120.png',
          intensionalDisclosureRange: 'public',
          isMarked: false,
          isMine: false,
          name: {
            en: 'Adil',
            ja: 'アーディル'
          },
          phaseStartTime: '2006-10-07T12:06:56.568+09:00',
          phaseTimeLimit: 600,
          serverTimestamp: '2006-10-07T12:06:56.568+09:00',
          text: '>>11\nそれで、あなたは人狼が誰だと思うの？\n\n私はパメラが人狼だと思う。',
          type: 'item'
        },
        chat2: {
          clientTimestamp: '2006-10-07T12:06:56.568+09:00',
          id: -1,
          image: 'https://werewolf.world/image/0.3/agent_icons/120x120/y_120x120.png',
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
              clientTimestamp: '2006-10-07T12:06:56.568+09:00',
              id: 12,
              image: 'https://werewolf.world/image/0.3/agent_icons/120x120/a_120x120.png',
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
            },
            chat1: {
              clientTimestamp: '2006-10-07T12:06:56.568+09:00',
              id: 12,
              image: 'https://werewolf.world/image/0.3/agent_icons/120x120/a_120x120.png',
              intensionalDisclosureRange: village.Channel.public,
              isMarked: false,
              isMine: false,
              name: {
                en: 'Adil',
                ja: 'アーディル'
              },
              phaseStartTime: '2006-10-07T12:06:56.568+09:00',
              phaseTimeLimit: 600,
              serverTimestamp: '2006-10-07T12:06:56.568+09:00',
              text: '>>11\nそれで、あなたは人狼が誰だと思うの？\n\n私はパメラが人狼だと思う。',
              type: 'item'
            },
            chat2: {
              clientTimestamp: '2006-10-07T12:06:56.568+09:00',
              id: -1,
              image: 'https://werewolf.world/image/0.3/agent_icons/120x120/y_120x120.png',
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
    ).toEqual({
      allIds: ['chat0', 'chat1', 'chat2', 'chat3'],
      byId: {
        chat0: {
          clientTimestamp: '2006-10-07T12:06:56.568+09:00',
          id: 12,
          image: 'https://werewolf.world/image/0.3/agent_icons/120x120/a_120x120.png',
          intensionalDisclosureRange: 'public',
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
        },
        chat1: {
          clientTimestamp: '2006-10-07T12:06:56.568+09:00',
          id: 12,
          image: 'https://werewolf.world/image/0.3/agent_icons/120x120/a_120x120.png',
          intensionalDisclosureRange: 'public',
          isMarked: false,
          isMine: false,
          name: {
            en: 'Adil',
            ja: 'アーディル'
          },
          phaseStartTime: '2006-10-07T12:06:56.568+09:00',
          phaseTimeLimit: 600,
          serverTimestamp: '2006-10-07T12:06:56.568+09:00',
          text: '>>11\nそれで、あなたは人狼が誰だと思うの？\n\n私はパメラが人狼だと思う。',
          type: 'item'
        },
        chat2: {
          clientTimestamp: '2006-10-07T12:06:56.568+09:00',
          id: -1,
          image: 'https://werewolf.world/image/0.3/agent_icons/120x120/y_120x120.png',
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
test('STAR', () => {
  expect(
    reducer(
      {
        allIds: ['chat0'],
        byId: {
          chat0: {
            clientTimestamp: '2006-10-07T12:06:56.568+09:00',
            id: 12,
            image: 'https://werewolf.world/image/0.3/agent_icons/120x120/a_120x120.png',
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
  ).toEqual({
    allIds: ['chat0'],
    byId: {
      chat0: {
        clientTimestamp: '2006-10-07T12:06:56.568+09:00',
        id: 12,
        image: 'https://werewolf.world/image/0.3/agent_icons/120x120/a_120x120.png',
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


import * as ActionTypes from '../constants/ActionTypes'
import * as React from 'react'
import {Agent} from '../constants/Agent'
import Chat from '../components/organisms/Chat'
import ChatContainer from './ChatContainer'
import {ImagePath} from '../constants/ImagePath'
import IntlProviderContainer from './IntlProviderContainer'
import {Provider} from 'react-redux'
import fakeStore from './fakeStore'
import {mount} from 'enzyme'
import {village} from '../types'

describe('<ChatContainer />', () => {
  describe('render', () => {
    test('chat dosen\'t exist', () => {
      const store = fakeStore(
        {
          language: village.Language.en
        }
      )
      const wrapper = mount(
        <Provider store={store} >
          <IntlProviderContainer>
            <ChatContainer />
          </IntlProviderContainer>
        </Provider>
      )

      expect(wrapper.html()).toMatchSnapshot()
    })
    test('chat exists', () => {
      const store = fakeStore(
        {
          chat: {
            allIds: ['chat2', 'chat1', 'delimeter1', 'chat0', 'delimeter0'],
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
              },
              chat2: {
                clientTimestamp: '2006-10-07T12:06:56.568+09:00',
                date: 1,
                id: -1,
                image: ImagePath.Agent120x120.anonymous,
                intensionalDisclosureRange: village.Channel.anonymousAudience,
                isMarked: false,
                isMine: true,
                name: 'Anonymous',
                phaseStartTime: '2006-10-07T12:06:56.568+09:00',
                phaseTimeLimit: 600,
                serverTimestamp: '2006-10-07T12:06:56.568+09:00',
                text: '>>11\nそれで、あなたは人狼が誰だと思うの？\n\n私はパメラが人狼だと思う。',
                type: 'item'
              },
              delimeter0: {
                date: 1,
                type: 'delimeter'
              },
              delimeter1: {
                date: -1,
                type: 'delimeter'
              }
            }
          },
          language: village.Language.en
        }
      )
      const wrapper = mount(
        <Provider store={store} >
          <IntlProviderContainer>
            <ChatContainer />
          </IntlProviderContainer>
        </Provider>
      )

      expect(wrapper.html()).toMatchSnapshot()
    })
  })
  describe('handleStar', () => {
    const store = fakeStore(
      {
        chat: {
          allIds: ['chat2', 'chat1', 'delimeter1', 'chat0', 'delimeter0'],
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
            },
            chat2: {
              clientTimestamp: '2006-10-07T12:06:56.568+09:00',
              date: 1,
              id: -1,
              image: ImagePath.Agent120x120.anonymous,
              intensionalDisclosureRange: village.Channel.anonymousAudience,
              isMarked: false,
              isMine: true,
              name: 'Anonymous',
              phaseStartTime: '2006-10-07T12:06:56.568+09:00',
              phaseTimeLimit: 600,
              serverTimestamp: '2006-10-07T12:06:56.568+09:00',
              text: '>>11\nそれで、あなたは人狼が誰だと思うの？\n\n私はパメラが人狼だと思う。',
              type: 'item'
            },
            delimeter0: {
              date: 1,
              type: 'delimeter'
            },
            delimeter1: {
              date: -1,
              type: 'delimeter'
            }
          }
        },
        language: village.Language.en
      }
    )
    const dispatch = jest.fn()

    store.dispatch = dispatch
    const wrapper = mount(
      <Provider store={store} >
        <IntlProviderContainer>
          <ChatContainer />
        </IntlProviderContainer>
      </Provider>
    )

    wrapper.find(Chat).props().handleStar('chat2')(true)
    expect(dispatch).toHaveBeenCalledTimes(1)
    expect(dispatch).toHaveBeenCalledWith({
      id: 'chat2',
      isMarked: true,
      type: ActionTypes.global.STAR
    })
  })
})

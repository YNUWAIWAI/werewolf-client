// @flow
import ChatContainer from './ChatContainer'
import IntlProviderContainer from './IntlProviderContainer'
import {Provider} from 'react-redux'
import React from 'react'
import fakeStore from './fakeStore'
import {mount} from 'enzyme'

test('<ChatContainer /> initialState', () => {
  const store = fakeStore(
    {
      language: 'ja'
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
test('<ChatContainer />', () => {
  const store = fakeStore(
    {
      chat: {
        allIds: ['chat2', 'chat1', 'delimeter1', 'chat0', 'delimeter0'],
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
          chat2: {
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
      language: 'ja'
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

// @flow
import ChatContainer from './ChatContainer'
import React from 'react'
import {initialState} from '../reducers/chat'
import {shallow} from 'enzyme'

test('<ChatContainer /> initialState', () => {
  const dispatch = jest.fn()
  const getState = () => ({
    chat: initialState
  })
  const subscribe = jest.fn()
  const store = {
    dispatch,
    getState,
    subscribe
  }
  const wrapper = shallow(<ChatContainer store={store} />)

  expect(wrapper.props().allIds).toEqual([])
  expect(wrapper.props().byId).toEqual({})
})
test('<ChatContainer />', () => {
  const dispatch = jest.fn()
  const getState = () => ({
    chat: {
      allIds: ['chat0', 'delimeter0'],
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
        delimeter0: {
          date: 1,
          type: 'delimeter'
        }
      }
    },
    language: 'ja'
  })
  const subscribe = jest.fn()
  const store = {
    dispatch,
    getState,
    subscribe
  }
  const wrapper = shallow(<ChatContainer store={store} />)

  expect(wrapper.props().allIds).toEqual(['chat0', 'delimeter0'])
  expect(wrapper.props().byId).toEqual({
    chat0: {
      id: 12,
      image: 'https://werewolf.world/image/0.1/Walter.jpg',
      intensionalDisclosureRange: 'public',
      isMine: true,
      name: 'ヴァルター',
      phaseStartTime: '2006-10-07T12:06:56.568+09:00',
      phaseTimeLimit: 600,
      serverTimestamp: '2006-10-07T12:06:56.568+09:00',
      text: '>>11\nそれで、あなたは人狼が誰だと思うの？\n\n私はパメラが人狼だと思う。',
      type: 'item'
    },
    delimeter0: {
      text: '1日目',
      type: 'delimeter'
    }
  })
})

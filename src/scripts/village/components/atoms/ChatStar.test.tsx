import * as React from 'react'
import ChatStar from './ChatStar'
import {shallow} from 'enzyme'

describe('rennder', () => {
  test('isMarked={true}', () => {
    const handleStar = jest.fn()
    const wrapper = shallow(
      <ChatStar
        handleStar={handleStar}
        isMarked
      />
    )

    expect(wrapper.find('.vi--chat--star').hasClass('marked')).toBe(true)
    expect(handleStar).toHaveBeenCalledTimes(0)
  })
  test('isMarked={false}', () => {
    const handleStar = jest.fn()
    const wrapper = shallow(
      <ChatStar
        handleStar={handleStar}
        isMarked={false}
      />
    )

    expect(wrapper.find('.vi--chat--star').hasClass('marked')).toBe(false)
    expect(handleStar).toHaveBeenCalledTimes(0)
  })
})
describe('handleStar', () => {
  test('isMarked={true}', () => {
    const handleStar = jest.fn()
    const wrapper = shallow(
      <ChatStar
        handleStar={handleStar}
        isMarked
      />
    )

    wrapper.find('.vi--chat--star').simulate('click')
    expect(handleStar).toHaveBeenCalledTimes(1)
    expect(handleStar).toHaveBeenCalledWith(false)
  })
  test('isMarked={false}', () => {
    const handleStar = jest.fn()
    const wrapper = shallow(
      <ChatStar
        handleStar={handleStar}
        isMarked={false}
      />
    )

    wrapper.find('.vi--chat--star').simulate('click')
    expect(handleStar).toHaveBeenCalledTimes(1)
    expect(handleStar).toHaveBeenCalledWith(true)
  })
})

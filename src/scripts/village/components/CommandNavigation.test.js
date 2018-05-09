// @flow
import CommandNavigation from './CommandNavigation'
import React from 'react'
import {shallow} from 'enzyme'

test('<CommandNavigation />', () => {
  const handleClick = jest.fn()
  const items = [
    {
      text: '結果を表示',
      type: 'OPEN_RESULT'
    },
    {
      text: 'ロビーへ戻る',
      type: 'RETURN_TO_LOBBY'
    }
  ]
  const wrapper = shallow(<CommandNavigation handleClick={handleClick} items={items} />)

  expect(handleClick).toHaveBeenCalledTimes(2)
  expect(wrapper.find('CommandNavigationButton')).toHaveLength(2)
})

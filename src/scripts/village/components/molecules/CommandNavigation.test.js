// @flow
import * as ActionTypes from '../../constants/ActionTypes'
import CommandNavigation from './CommandNavigation'
import React from 'react'
import {shallow} from 'enzyme'

test('<CommandNavigation />', () => {
  const handleClick = jest.fn()
  const items = [
    {
      text: '結果を表示',
      type: ActionTypes.SHOW_RESULT
    },
    {
      text: 'ロビーへ戻る',
      type: ActionTypes.RETURN_TO_LOBBY
    }
  ]
  const wrapper = shallow(<CommandNavigation handleClick={handleClick} items={items} />)

  expect(handleClick).toHaveBeenCalledTimes(2)
  expect(wrapper.find('CommandNavigationButton')).toHaveLength(2)
})

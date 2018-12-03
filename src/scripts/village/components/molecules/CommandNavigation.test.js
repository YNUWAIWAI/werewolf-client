// @flow
import * as ActionTypes from '../../constants/ActionTypes'
import CommandNavigation from './CommandNavigation'
import React from 'react'
import {getMessages} from '../../../../i18n/village'
import {initRenderer} from '../../../../../tools/intl-enzyme-test-helper'

const {mountWithIntl} = initRenderer('ja', getMessages('ja'))

test('<CommandNavigation />', () => {
  const handleClick = jest.fn()
  const items = [
    {
      id: 'CommandNavigation.showResult',
      type: ActionTypes.SHOW_RESULT
    },
    {
      id: 'CommandNavigation.returnToLobby',
      type: ActionTypes.RETURN_TO_LOBBY
    }
  ]
  const wrapper = mountWithIntl(
    <CommandNavigation
      handleClick={handleClick}
      items={items}
    />
  )

  expect(handleClick).toHaveBeenCalledTimes(2)
  expect(wrapper.find('button')).toHaveLength(2)
  expect(wrapper.find('button').at(0).text()).toBe('結果を表示')
  expect(wrapper.find('button').at(1).text()).toBe('ロビーへ戻る')
})

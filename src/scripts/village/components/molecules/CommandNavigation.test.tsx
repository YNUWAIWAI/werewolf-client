/* global village */
import * as ActionTypes from '../../constants/ActionTypes'
import * as React from 'react'
import CommandNavigation from './CommandNavigation'
import {getMessages} from '../../../../i18n/village'
import {initRenderer} from '../../../../../tools/intl-enzyme-test-helper'

const {mountWithIntl} = initRenderer(village.Language.ja, getMessages(village.Language.ja))

describe('<CommandNavigation />', () => {
  test('render', () => {
    const handleClick = jest.fn()
    const items = [
      {
        id: 'CommandNavigation.showResult',
        type: ActionTypes.Navigation.SHOW_RESULT
      },
      {
        id: 'CommandNavigation.returnToLobby',
        type: ActionTypes.Navigation.RETURN_TO_LOBBY
      }
    ]
    const wrapper = mountWithIntl(
      <CommandNavigation
        handleClick={handleClick}
        items={items}
      />
    )

    expect(handleClick).toHaveBeenCalledTimes(0)
    expect(wrapper.find('button')).toHaveLength(2)
    expect(wrapper.find('button').at(0).text()).toBe('結果を表示')
    expect(wrapper.find('button').at(1).text()).toBe('ロビーへ戻る')
  })
  test('onClick', () => {
    const handleClick = jest.fn()
    const items = [
      {
        id: 'CommandNavigation.showResult',
        type: ActionTypes.Navigation.SHOW_RESULT
      },
      {
        id: 'CommandNavigation.returnToLobby',
        type: ActionTypes.Navigation.RETURN_TO_LOBBY
      }
    ]
    const wrapper = mountWithIntl(
      <CommandNavigation
        handleClick={handleClick}
        items={items}
      />
    )

    expect(handleClick).toHaveBeenCalledTimes(0)
    wrapper.find('button').forEach(node => {
      node.simulate('click')
    })
    expect(handleClick).toHaveBeenCalledTimes(2)
    expect(handleClick).toHaveBeenCalledWith(ActionTypes.Navigation.SHOW_RESULT)
    expect(handleClick).toHaveBeenCalledWith(ActionTypes.Navigation.RETURN_TO_LOBBY)
  })
})

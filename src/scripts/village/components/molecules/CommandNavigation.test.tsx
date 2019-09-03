import * as ActionTypes from '../../constants/ActionTypes'
import * as React from 'react'
import * as village from 'types/village'
import CommandNavigation from './CommandNavigation'
import Loader from '../atoms/svg/Loader'
import {getMessages} from '@i18n/village'
import {initRenderer} from '@tools/intl-enzyme-test-helper'

const {mountWithIntl} = initRenderer(village.Language.ja, getMessages(village.Language.ja))

describe('<CommandNavigation />', () => {
  test('render', () => {
    const handleClick = jest.fn()
    const items = [
      {
        className: 'show-result',
        id: 'CommandNavigation.showResult',
        type: ActionTypes.Navigation.SHOW_RESULT
      },
      {
        className: 'next-game',
        disabled: true,
        id: 'CommandNavigation.nextGame',
        type: ActionTypes.Navigation.NEXT_GAME
      },
      {
        className: 'return-to-lobby',
        id: 'CommandNavigation.returnToLobby',
        isLoading: true,
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
    expect(wrapper.find('button')).toHaveLength(3)
    expect(wrapper.find('button').at(0).text()).toBe('結果を表示')
    expect(wrapper.find('button').at(1).text()).toBe('次のゲーム')
    expect(wrapper.find('button').at(1).props().disabled).toBe(true)
    expect(wrapper.find('button').at(2).find(Loader).exists()).toBe(true)
  })
  test('onClick', () => {
    const handleClick = jest.fn()
    const items = [
      {
        className: 'show-result',
        id: 'CommandNavigation.showResult',
        type: ActionTypes.Navigation.SHOW_RESULT
      },
      {
        className: 'next-game',
        disabled: true,
        id: 'CommandNavigation.nextGame',
        type: ActionTypes.Navigation.NEXT_GAME
      },
      {
        className: 'return-to-lobby',
        id: 'CommandNavigation.returnToLobby',
        isLoading: true,
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
    expect(handleClick).toHaveBeenCalledTimes(1)
    expect(handleClick).toHaveBeenCalledWith(ActionTypes.Navigation.SHOW_RESULT)
    expect(handleClick).not.toHaveBeenCalledWith(ActionTypes.Navigation.NEXT_GAME)
    expect(handleClick).not.toHaveBeenCalledWith(ActionTypes.Navigation.RETURN_TO_LOBBY)
  })
})

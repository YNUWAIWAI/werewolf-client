import * as ActionTypes from '../../constants/ActionTypes'
import * as React from 'react'
import CommandNavigation from './CommandNavigation'
import Loader from '../atoms/svg/Loader'
import {getMessages} from '../../i18n'
import {initRenderer} from '../../tools'
import {village} from '../../types'

const {mountWithIntl} = initRenderer(village.Language.en, getMessages(village.Language.en))

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
        navigatable
      />
    )

    expect(handleClick).toHaveBeenCalledTimes(0)
    expect(wrapper.find('button')).toHaveLength(3)
    expect(wrapper.find('button').at(0).text()).toBe('Show results')
    expect(wrapper.find('button').at(1).text()).toBe('Next Game')
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
        navigatable
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

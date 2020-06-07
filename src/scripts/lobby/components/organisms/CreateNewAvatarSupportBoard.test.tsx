import * as React from 'react'
import {
  CreateNewAvatarSupportBoard,
  StateProps
} from './CreateNewAvatarSupportBoard'
import {CreateNewAvatarSupportBoardHover} from '../molecules/CreateNewAvatar/SupportBoard/CreateNewAvatarSupportBoardHover'
import {getMessages} from '../../i18n'
import {initRenderer} from '../../tools'
import {lobby} from '../../types'

const {mountWithIntl} = initRenderer(lobby.Language.en, getMessages(lobby.Language.en))
const data: StateProps['data'] = {
  '4': {
    A: false,
    B: false,
    C: false
  },
  '5': {
    A: false,
    B: false,
    C: false
  },
  '6': {
    A: false,
    B: false,
    C: false
  },
  '7': {
    A: false,
    B: false,
    C: false
  },
  '8': {
    A: false,
    B: false,
    C: false
  },
  '9': {
    A: false,
    B: false,
    C: false
  },
  '10': {
    A: false,
    B: false,
    C: false
  },
  '11': {
    A: false,
    B: false,
    C: false
  },
  '12': {
    A: false,
    B: false,
    C: false
  },
  '13': {
    A: false,
    B: false,
    C: false
  },
  '14': {
    A: false,
    B: false,
    C: false
  },
  '15': {
    A: false,
    B: false,
    C: false
  }
}

test('render', () => {
  const handleSupportBoardClick = jest.fn()
  const wrapper = mountWithIntl(
    <CreateNewAvatarSupportBoard
      data={data}
      handleSupportBoardClick={handleSupportBoardClick}
    />
  )

  expect(wrapper.html()).toMatchSnapshot()
})
test('handleHover', () => {
  const handleSupportBoardClick = jest.fn()
  const wrapper = mountWithIntl(
    <CreateNewAvatarSupportBoard
      data={data}
      handleSupportBoardClick={handleSupportBoardClick}
    />
  )

  wrapper.simulate('mouseover')
  expect(wrapper.find(CreateNewAvatarSupportBoardHover).props().visible).toBe(true)
  expect(wrapper.html()).toMatchSnapshot()
  wrapper.simulate('mouseleave')
  expect(wrapper.find(CreateNewAvatarSupportBoardHover).props().visible).toBe(false)
  expect(wrapper.html()).toMatchSnapshot()
})

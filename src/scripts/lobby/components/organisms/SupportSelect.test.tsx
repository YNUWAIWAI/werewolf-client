import * as React from 'react'
import {
  StateProps,
  SupportSelect
} from './SupportSelect'
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
  const handleCloseButtonClick = jest.fn()
  const handleSelectInner = jest.fn()
  const handleSelect = jest.fn(() => handleSelectInner)
  const wrapper = mountWithIntl(
    <SupportSelect
      data={data}
      handleCloseButtonClick={handleCloseButtonClick}
      handleSelect={handleSelect}
    />
  )

  expect(wrapper.html()).toMatchSnapshot()
  expect(handleCloseButtonClick).toHaveBeenCalledTimes(0)
  expect(handleSelect).toHaveBeenCalledTimes(12)
  expect(handleSelectInner).toHaveBeenCalledTimes(36)
})
test('handleCloseButtonClick', () => {
  const handleCloseButtonClick = jest.fn()
  const handleSelectInner = jest.fn()
  const handleSelect = jest.fn(() => handleSelectInner)
  const wrapper = mountWithIntl(
    <SupportSelect
      data={data}
      handleCloseButtonClick={handleCloseButtonClick}
      handleSelect={handleSelect}
    />
  )

  wrapper.find('.lo--support-select--close').simulate('click')
  expect(handleCloseButtonClick).toHaveBeenCalledTimes(1)
  expect(handleSelect).toHaveBeenCalledTimes(12)
  expect(handleSelectInner).toHaveBeenCalledTimes(36)
})

import * as React from 'react'
import {
  Language,
  getMessages
} from '../../i18n'
import {Login} from './Login'
import {SubmitButton} from '../atoms/SubmitButton'
import {TextField} from '../molecules/TextField'
import {act} from 'react-dom/test-utils'
import {initRenderer} from '../../tools'

const {mountWithIntl} = initRenderer(Language.en, getMessages(Language.en))

test('render', () => {
  const wrapper = mountWithIntl(
    <Login
      action="/login"
      csrfToken="token"
      error={false}
      visible
    />
  )

  expect(wrapper.html()).toMatchSnapshot()
})
test('useEffect', () => {
  const wrapper = mountWithIntl(
    <Login
      action="/login"
      csrfToken="token"
      error={false}
      visible
    />
  )

  expect(wrapper.find(SubmitButton).props().disabled).toBe(true)
  act(() => {
    wrapper.find(TextField).at(0).props().handleValidityChange(true)
    wrapper.find(TextField).at(1).props().handleValidityChange(true)
  })
  wrapper.update()
  expect(wrapper.find(SubmitButton).props().disabled).toBe(false)
})

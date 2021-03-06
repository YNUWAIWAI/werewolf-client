import * as React from 'react'
import {
  Language,
  getMessages
} from '../../i18n'
import {ErrorMessage} from './ErrorMessage'
import {initRenderer} from '../../tools'

const {mountWithIntl} = initRenderer(Language.en, getMessages(Language.en))

describe('render', () => {
  test('visible={true}', () => {
    const wrapper = mountWithIntl(
      <ErrorMessage
        id="login-error"
        visible
      />
    )

    expect(wrapper.html()).toMatchSnapshot()
  })
  test('visible={false}', () => {
    const wrapper = mountWithIntl(
      <ErrorMessage
        id="login-error"
        visible={false}
      />
    )

    expect(wrapper.html()).toMatchSnapshot()
  })
})

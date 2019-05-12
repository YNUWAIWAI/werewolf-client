import * as React from 'react'
import {Language, getMessages} from '../../../../i18n/landing'
import ErrorMessage from './ErrorMessage'
import {initRenderer} from '../../../../../tools/intl-enzyme-test-helper'

const {mountWithIntl} = initRenderer(Language.en, getMessages(Language.en))

describe('render', () => {
  test('visible={true}', () => {
    const wrapper = mountWithIntl(
      <ErrorMessage
        type="login"
        visible
      />
    )

    expect(wrapper.text()).toBe('Invalid email or password')
  })
  test('visible={false}', () => {
    const wrapper = mountWithIntl(
      <ErrorMessage
        type="login"
        visible={false}
      />
    )

    expect(wrapper.isEmptyRender()).toBe(true)
  })
})

import * as React from 'react'
import {
  Language,
  getMessages
} from '../../i18n'
import {FieldDescription} from './FieldDescription'
import {initRenderer} from '../../tools'

const {mountWithIntl} = initRenderer(Language.en, getMessages(Language.en))

describe('render', () => {
  describe('name', () => {
    test('email', () => {
      const wrapper = mountWithIntl(
        <FieldDescription
          name="email"
        />
      )

      expect(wrapper.html()).toMatchSnapshot()
    })
    test('name', () => {
      const wrapper = mountWithIntl(
        <FieldDescription
          name="name"
        />
      )

      expect(wrapper.html()).toMatchSnapshot()
    })
    test('password', () => {
      const wrapper = mountWithIntl(
        <FieldDescription
          name="password"
        />
      )

      expect(wrapper.html()).toMatchSnapshot()
    })
  })
})

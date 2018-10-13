// @flow
import React from 'react'
import RoleText from './RoleText'
import {getMessages} from '../../../../i18n/village'
import {initRenderer} from '../../../../../tools/intl-enzyme-test-helper'

const {mountWithIntl} = initRenderer('ja', getMessages('ja'))

test('<RoleText role="人狼" />', () => {
  const wrapper = mountWithIntl(<RoleText role="人狼" />)

  expect(wrapper.text()).toBe('あなたは人狼です')
})
test('<RoleText role="" />', () => {
  const wrapper = mountWithIntl(<RoleText role="" />)

  expect(wrapper.text()).toBe('あなたはです')
})

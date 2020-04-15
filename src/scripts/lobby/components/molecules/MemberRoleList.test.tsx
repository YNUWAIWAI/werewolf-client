import * as React from 'react'
import Cast from '../../constants/Cast'
import MemberRoleList from './MemberRoleList'
import {getMessages} from '../../i18n'
import {initRenderer} from '../../tools'
import {lobby} from '../../types'

const {mountWithIntl} = initRenderer(lobby.Language.en, getMessages(lobby.Language.en))

test('render', () => {
  const wrapper = mountWithIntl(
    <MemberRoleList
      className="className"
      role={Cast['15'].A}
    />
  )

  expect(wrapper.html()).toMatchSnapshot()
})

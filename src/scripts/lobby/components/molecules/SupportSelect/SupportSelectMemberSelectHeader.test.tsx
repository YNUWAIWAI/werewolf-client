import * as React from 'react'
import {SupportSelectMemberSelectHeader} from './SupportSelectMemberSelectHeader'
import {getMessages} from '../../../i18n'
import {initRenderer} from '../../../tools'
import {lobby} from '../../../types'

const {mountWithIntl} = initRenderer(lobby.Language.en, getMessages(lobby.Language.en))

test('render', () => {
  const wrapper = mountWithIntl(
    <SupportSelectMemberSelectHeader />
  )

  expect(wrapper.html()).toMatchSnapshot()
})

import * as React from 'react'
import BuildVillageCellMemberSelectRole from './BuildVillageCellMemberSelectRole'
import Cast from '../../../../constants/Cast'
import {getMessages} from '../../../../i18n'
import {initRenderer} from '../../../../tools'
import {lobby} from '../../../../types'

const {mountWithIntl} = initRenderer(lobby.Language.en, getMessages(lobby.Language.en))

test('render', () => {
  const handleMemberChange = jest.fn()
  const wrapper = mountWithIntl(
    <BuildVillageCellMemberSelectRole
      defaultChecked
      handleMemberChange={handleMemberChange}
      label={lobby.Member.A}
      role={Cast['15'].A}
    />
  )

  expect(wrapper.html()).toMatchSnapshot()
})

import * as React from 'react'
import BuildVillageCellMemberSelectMaximum from './BuildVillageCellMemberSelectMaximum'
import {getMessages} from '../../../../i18n'
import {initRenderer} from '../../../../tools'
import {lobby} from '../../../../types'

const {mountWithIntl} = initRenderer(lobby.Language.en, getMessages(lobby.Language.en))

test('render', () => {
  const wrapper = mountWithIntl(
    <BuildVillageCellMemberSelectMaximum
      numberOfHumans={8}
    />
  )

  expect(wrapper.html()).toMatchSnapshot()
})

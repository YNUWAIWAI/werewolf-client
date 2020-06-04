import * as React from 'react'
import {CreateNewAvatarSupportBoardRowCell} from './CreateNewAvatarSupportBoardRowCell'
import {getMessages} from '../../../../i18n'
import {initRenderer} from '../../../../tools'
import {lobby} from '../../../../types'

const {mountWithIntl} = initRenderer(lobby.Language.en, getMessages(lobby.Language.en))

describe('render', () => {
  test('support', () => {
    const wrapper = mountWithIntl(
      <CreateNewAvatarSupportBoardRowCell
        className="className"
        support
      />
    )

    expect(wrapper.html()).toMatchSnapshot()
  })
  test('not support', () => {
    const wrapper = mountWithIntl(
      <CreateNewAvatarSupportBoardRowCell
        className="className"
        support={false}
      />
    )

    expect(wrapper.html()).toMatchSnapshot()
  })
})

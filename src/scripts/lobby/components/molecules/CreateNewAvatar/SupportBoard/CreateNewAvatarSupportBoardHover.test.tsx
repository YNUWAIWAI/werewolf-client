import * as React from 'react'
import {CreateNewAvatarSupportBoardHover} from './CreateNewAvatarSupportBoardHover'
import {getMessages} from '../../../../i18n'
import {initRenderer} from '../../../../tools'
import {lobby} from '../../../../types'

const {mountWithIntl} = initRenderer(lobby.Language.en, getMessages(lobby.Language.en))

describe('render', () => {
  test('visible', () => {
    const wrapper = mountWithIntl(
      <CreateNewAvatarSupportBoardHover
        className="className"
        visible
      />
    )

    expect(wrapper.html()).toMatchSnapshot()
  })
  test('invisible', () => {
    const wrapper = mountWithIntl(
      <CreateNewAvatarSupportBoardHover
        className="className"
        visible={false}
      />
    )

    expect(wrapper.isEmptyRender()).toBe(true)
  })
})

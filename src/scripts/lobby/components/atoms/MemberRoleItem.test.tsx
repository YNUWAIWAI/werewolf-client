import * as React from 'react'
import {MemberRoleItem} from './MemberRoleItem'
import {getMessages} from '../../i18n'
import {initRenderer} from '../../tools'
import {lobby} from '../../types'

const {mountWithIntl} = initRenderer(lobby.Language.en, getMessages(lobby.Language.en))

describe('render', () => {
  test('with numberOfPlayers', () => {
    const wrapper = mountWithIntl(
      <MemberRoleItem
        className="className"
        id="villager"
        image="image"
        numberOfPlayers={0}
      />
    )

    expect(wrapper.html()).toMatchSnapshot()
  })
  test('without numberOfPlayers', () => {
    const wrapper = mountWithIntl(
      <MemberRoleItem
        className="className"
        id="villager"
        image="image"
      />
    )

    expect(wrapper.html()).toMatchSnapshot()
  })
})

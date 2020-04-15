import * as React from 'react'
import BuildVillageCellSetup from './BuildVillageCellSetup'
import {getMessages} from '../../../i18n'
import {initRenderer} from '../../../tools'
import {lobby} from '../../../types'

const {mountWithIntl} = initRenderer(lobby.Language.en, getMessages(lobby.Language.en))

test('render', () => {
  const handleAvatarChange = jest.fn()
  const handleNumberOfPlayersChange = jest.fn()
  const wrapper = mountWithIntl(
    <BuildVillageCellSetup
      handleAvatarChange={handleAvatarChange}
      handleNumberOfPlayersChange={handleNumberOfPlayersChange}
      navigatable
      validity={{
        avatar: true,
        numberOfPlayers: true
      }}
      value={{
        avatar: lobby.Avatar.fixed,
        numberOfPlayers: 15
      }}
    />
  )

  expect(wrapper.html()).toMatchSnapshot()
})

import * as React from 'react'
import BuildVillageCellMemberSelect from './BuildVillageCellMemberSelect'
import Cast from '../../../constants/Cast'
import {getMessages} from '../../../i18n'
import {initRenderer} from '../../../tools'
import {lobby} from '../../../types'

const {mountWithIntl} = initRenderer(lobby.Language.en, getMessages(lobby.Language.en))

test('render', () => {
  const handleMemberChange = jest.fn()
  const handleNumberChange = jest.fn()
  const wrapper = mountWithIntl(
    <BuildVillageCellMemberSelect
      handleMemberChange={handleMemberChange}
      handleNumberChange={handleNumberChange}
      navigatable
      role={Cast['15']}
      validity={{
        numberOfRobots: true
      }}
      value={{
        numberOfHumans: 8,
        numberOfPlayers: 15,
        numberOfRobots: 7
      }}
    />
  )

  expect(wrapper.html()).toMatchSnapshot()
})

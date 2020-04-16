import * as React from 'react'
import BuildVillageCellMemberSelectMinimum from './BuildVillageCellMemberSelectMinimum'
import {getMessages} from '../../../../i18n'
import {initRenderer} from '../../../../tools'
import {lobby} from '../../../../types'

const {mountWithIntl} = initRenderer(lobby.Language.en, getMessages(lobby.Language.en))

test('render', () => {
  const handleNumberOfRobotsChange = jest.fn()
  const wrapper = mountWithIntl(
    <BuildVillageCellMemberSelectMinimum
      handleNumberOfRobotsChange={handleNumberOfRobotsChange}
      navigatable
      valid
      value={{
        numberOfPlayers: 15,
        numberOfRobots: 8
      }}
    />
  )

  expect(wrapper.html()).toMatchSnapshot()
})

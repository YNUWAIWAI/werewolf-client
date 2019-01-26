/* global lobby */
import * as React from 'react'
import BuildVillageBox, {Props} from './BuildVillageBox'
import {shallow} from 'enzyme'

describe('<BuildVillageBox />', () => {
  test('render', () => {
    const handleAvatarChange = jest.fn()
    const handleMemberChange = jest.fn()
    const handleNumberChangeInner = jest.fn()
    const handleNumberChange = jest.fn().mockReturnValue(handleNumberChangeInner)
    const handleTextChangeInner = jest.fn()
    const handleTextChange = jest.fn().mockReturnValue(handleTextChangeInner)
    const handleValidityChangeInner = jest.fn()
    const handleValidityChange = jest.fn().mockReturnValue(handleValidityChangeInner)
    const validity: Props['validity'] = {
      avatar: true,
      comment: true,
      hostName: true,
      numberOfPlayers: true,
      numberOfRobots: true,
      villageName: true
    }
    const value: Props['value'] = {
      avatar: lobby.Avatar.fixed,
      comment: '',
      hostName: 'Alice',
      numberOfHumans: 8,
      numberOfPlayers: 15,
      numberOfRobots: 7,
      villageName: 'Alice\'s village'
    }
    const wrapper = shallow(
      <BuildVillageBox
        handleAvatarChange={handleAvatarChange}
        handleMemberChange={handleMemberChange}
        handleNumberChange={handleNumberChange}
        handleTextChange={handleTextChange}
        handleValidityChange={handleValidityChange}
        validity={validity}
        value={value}
      />
    )

    expect(wrapper.children()).toHaveLength(10)
    expect(handleAvatarChange).toHaveBeenCalledTimes(0)
    expect(handleMemberChange).toHaveBeenCalledTimes(0)
    expect(handleNumberChange).toHaveBeenCalledTimes(0)
    expect(handleNumberChangeInner).toHaveBeenCalledTimes(0)
    expect(handleTextChange).toHaveBeenCalledTimes(0)
    expect(handleTextChangeInner).toHaveBeenCalledTimes(0)
    expect(handleValidityChange).toHaveBeenCalledTimes(0)
    expect(handleValidityChangeInner).toHaveBeenCalledTimes(0)
  })
})

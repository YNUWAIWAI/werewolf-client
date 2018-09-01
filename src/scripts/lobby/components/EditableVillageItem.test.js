// @flow
import EditableVillageItem from './EditableVillageItem'
import React from 'react'
import {shallow} from 'enzyme'

describe('<EditableVillageItem />', () => {
  test('render', () => {
    const handleAvatarChange = jest.fn()
    const handleMemberChange = jest.fn()
    const handleNumberChangeInner = jest.fn()
    const handleNumberChange = jest.fn().mockReturnValue(handleNumberChangeInner)
    const handleTextChangeInner = jest.fn()
    const handleTextChange = jest.fn().mockReturnValue(handleTextChangeInner)
    const handleValidityChangeInner = jest.fn()
    const handleValidityChange = jest.fn().mockReturnValue(handleValidityChangeInner)
    const wrapper = shallow(
      <EditableVillageItem
        handleAvatarChange={handleAvatarChange}
        handleMemberChange={handleMemberChange}
        handleNumberChange={handleNumberChange}
        handleTextChange={handleTextChange}
        handleValidityChange={handleValidityChange}
        numberOfHumans={8}
        numberOfPlayers={15}
        numberOfRobots={7}
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

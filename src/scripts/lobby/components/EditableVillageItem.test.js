// @flow
import EditableVillageItem from './EditableVillageItem'
import React from 'react'
import {shallow} from 'enzyme'

test('<EditableVillageItem villageName="villageName" hostName="hostName" numberOfHumans={8} numberOfPlayers={15} numberOfRobots={7} comment="comment" />', () => {
  const handleAvatarChange = jest.fn()
  const handleMemberChange = jest.fn()
  const handleNumberChangeInner = jest.fn()
  const handleNumberChange = jest.fn().mockReturnValue(handleNumberChangeInner)
  const handleTextChangeInner = jest.fn()
  const handleTextChange = jest.fn().mockReturnValue(handleTextChangeInner)
  const wrapper = shallow(
    <EditableVillageItem
      comment="comment"
      handleAvatarChange={handleAvatarChange}
      handleMemberChange={handleMemberChange}
      handleNumberChange={handleNumberChange}
      handleTextChange={handleTextChange}
      hostName="hostName"
      numberOfHumans={8}
      numberOfPlayers={15}
      numberOfRobots={7}
      villageName="villageName"
    />
  )

  expect(wrapper.children()).toHaveLength(10)
  expect(wrapper.find('.village--item--village-name--val[defaultValue="villageName"]').exists()).toBe(true)
  expect(wrapper.find('.village--item--host-name--val[defaultValue="hostName"]').exists()).toBe(true)
  expect(wrapper.find('.village--item--setup--val1').text()).toBe('<NumberSelect />players')
  expect(wrapper.find('.village--item--comment--val[defaultValue="comment"]').exists()).toBe(true)
  expect(handleAvatarChange).toHaveBeenCalledTimes(0)
  expect(handleMemberChange).toHaveBeenCalledTimes(0)
  expect(handleNumberChange).toHaveBeenCalledTimes(1)
  expect(handleNumberChangeInner).toHaveBeenCalledTimes(0)
  expect(handleTextChange).toHaveBeenCalledTimes(0)
  expect(handleTextChangeInner).toHaveBeenCalledTimes(0)
})
test('<EditableVillageItem villageName="villageName" hostName="hostName" numberOfHumans={8} numberOfPlayers={15} numberOfRobots={7} comment="comment" /> onChange', () => {
  const handleAvatarChange = jest.fn()
  const handleMemberChange = jest.fn()
  const handleNumberChangeInner = jest.fn()
  const handleNumberChange = jest.fn().mockReturnValue(handleNumberChangeInner)
  const handleTextChangeInner = jest.fn()
  const handleTextChange = jest.fn().mockReturnValue(handleTextChangeInner)
  const wrapper = shallow(
    <EditableVillageItem
      comment="comment"
      handleAvatarChange={handleAvatarChange}
      handleMemberChange={handleMemberChange}
      handleNumberChange={handleNumberChange}
      handleTextChange={handleTextChange}
      hostName="hostName"
      numberOfHumans={8}
      numberOfPlayers={15}
      numberOfRobots={7}
      villageName="villageName"
    />
  )

  expect(handleTextChangeInner).toHaveBeenCalledTimes(0)
  wrapper.find('.village--item--village-name--val').simulate('change', {
    target: {
      value: 'changed villageName'
    }
  })
  expect(handleTextChangeInner).toHaveBeenCalledTimes(1)
  expect(handleTextChangeInner).toHaveBeenCalledWith('changed villageName')
  wrapper.find('.village--item--host-name--val').simulate('change', {
    target: {
      value: 'changed hostName'
    }
  })
  expect(handleTextChangeInner).toHaveBeenCalledTimes(2)
  expect(handleTextChangeInner).toHaveBeenCalledWith('changed hostName')
  wrapper.find('.village--item--comment--val').simulate('change', {
    target: {
      value: 'changed comment'
    }
  })
  expect(handleTextChangeInner).toHaveBeenCalledTimes(3)
  expect(handleTextChangeInner).toHaveBeenCalledWith('changed comment')
  expect(handleAvatarChange).toHaveBeenCalledTimes(0)
  expect(handleMemberChange).toHaveBeenCalledTimes(0)
  expect(handleNumberChangeInner).toHaveBeenCalledTimes(0)
})

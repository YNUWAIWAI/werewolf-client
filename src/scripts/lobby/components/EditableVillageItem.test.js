// @flow
import EditableVillageItem from './EditableVillageItem'
import React from 'react'
import {shallow} from 'enzyme'

test('<EditableVillageItem villageName="villageName" hostName="hostName" numberOfHumans={8} numberOfPlayers={15} numberOfRobots={7} comment="comment" />', () => {
  const handleChangeEventHandler = jest.fn()
  const handleChange = jest.fn().mockReturnValue(handleChangeEventHandler)
  const wrapper = shallow(
    <EditableVillageItem
      comment="comment"
      handleChange={handleChange}
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
  expect(handleChange).toHaveBeenCalledTimes(5)
  expect(handleChangeEventHandler).toHaveBeenCalledTimes(0)
})
test('<EditableVillageItem villageName="villageName" hostName="hostName" numberOfHumans={8} numberOfPlayers={15} numberOfRobots={7} comment="comment" /> onChange', () => {
  const handleChangeEventHandler = jest.fn()
  const handleChange = jest.fn().mockReturnValue(handleChangeEventHandler)
  const wrapper = shallow(
    <EditableVillageItem
      comment="comment"
      handleChange={handleChange}
      hostName="hostName"
      numberOfHumans={8}
      numberOfPlayers={15}
      numberOfRobots={7}
      villageName="villageName"
    />
  )

  expect(handleChangeEventHandler).toHaveBeenCalledTimes(0)
  wrapper.find('.village--item--village-name--val').simulate('change')
  expect(handleChangeEventHandler).toHaveBeenCalledTimes(1)
  wrapper.find('.village--item--host-name--val').simulate('change')
  expect(handleChangeEventHandler).toHaveBeenCalledTimes(2)
  wrapper.find('.village--item--setup--val2--select').simulate('change')
  expect(handleChangeEventHandler).toHaveBeenCalledTimes(3)
  wrapper.find('.village--item--comment--val').simulate('change')
  expect(handleChangeEventHandler).toHaveBeenCalledTimes(4)
  expect(handleChange).toHaveBeenCalledTimes(5)
})

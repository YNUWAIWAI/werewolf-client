import PredictionItem from './PredictionItem'
import React from 'react'
import {shallow} from 'enzyme'

test('<PredictionItem date={1} playerId={1} roleId="werewolf" state="?" />', () => {
  const wrapper = shallow(<PredictionItem date={1} playerId={1} roleId="werewolf" state="?" />)

  expect(wrapper.is('[data-date=1]')).toBe(true)
  expect(wrapper.is('[data-player=1]')).toBe(true)
  expect(wrapper.is('[data-role="werewolf"]')).toBe(true)
  expect(wrapper.is('[data-state="?"]')).toBe(true)
})
test('<PredictionItem date={undfined} playerId={1} roleId="werewolf" state="?" />', () => {
  const wrapper = shallow(<PredictionItem playerId={1} roleId="werewolf" state="?" />)

  expect(wrapper.is('[data-date]')).toBe(false)
  expect(wrapper.is('[data-player=1]')).toBe(true)
  expect(wrapper.is('[data-role="werewolf"]')).toBe(true)
  expect(wrapper.is('[data-state="?"]')).toBe(true)
})
test('<PredictionItem date={1} playerId={undefined} roleId="werewolf" state="?" />', () => {
  const wrapper = shallow(<PredictionItem date={1} roleId="werewolf" state="?" />)

  expect(wrapper.is('[data-date=1]')).toBe(true)
  expect(wrapper.is('[data-player]')).toBe(false)
  expect(wrapper.is('[data-role="werewolf"]')).toBe(true)
  expect(wrapper.is('[data-state="?"]')).toBe(true)
})
test('<PredictionItem date={1} playerId={1} roleId={undefined} state="?" />', () => {
  const wrapper = shallow(<PredictionItem date={1} playerId={1} state="?" />)

  expect(wrapper.is('[data-date=1]')).toBe(true)
  expect(wrapper.is('[data-player=1]')).toBe(true)
  expect(wrapper.is('[data-role]')).toBe(false)
  expect(wrapper.is('[data-state="?"]')).toBe(true)
})
test('<PredictionItem date={1} playerId={1} roleId="werewolf" state={undefined} />', () => {
  const wrapper = shallow(<PredictionItem date={1} playerId={1} roleId="werewolf" />)

  expect(wrapper.is('[data-date=1]')).toBe(true)
  expect(wrapper.is('[data-player=1]')).toBe(true)
  expect(wrapper.is('[data-role="werewolf"]')).toBe(true)
  expect(wrapper.is('[data-state]')).toBe(false)
})
test('<PredictionItem date={1} playerId={1} roleId="werewolf" state="?" /> handleBoardClick', () => {
  const mockFn = jest.fn().mockName('handleBoardClick')
  const wrapper = shallow(<PredictionItem date={1} handleBoardClick={mockFn} playerId={1} roleId="werewolf" state="?" />)

  expect(wrapper.is('[data-date=1]')).toBe(true)
  expect(wrapper.is('[data-player=1]')).toBe(true)
  expect(wrapper.is('[data-role="werewolf"]')).toBe(true)
  expect(wrapper.is('[data-state="?"]')).toBe(true)
  wrapper.simulate('click')
  expect(mockFn).toHaveBeenCalledWith('Δ', 1, 'werewolf')
})
test('<PredictionItem date={1} playerId={1} roleId="werewolf" state="Δ" /> handleBoardClick', () => {
  const mockFn = jest.fn().mockName('handleBoardClick')
  const wrapper = shallow(<PredictionItem date={1} handleBoardClick={mockFn} playerId={1} roleId="werewolf" state="Δ" />)

  expect(wrapper.is('[data-date=1]')).toBe(true)
  expect(wrapper.is('[data-player=1]')).toBe(true)
  expect(wrapper.is('[data-role="werewolf"]')).toBe(true)
  expect(wrapper.is('[data-state="Δ"]')).toBe(true)
  wrapper.simulate('click')
  expect(mockFn).toHaveBeenCalledWith('O', 1, 'werewolf')
})
test('<PredictionItem date={1} playerId={1} roleId="werewolf" state="O" /> handleBoardClick', () => {
  const mockFn = jest.fn().mockName('handleBoardClick')
  const wrapper = shallow(<PredictionItem date={1} handleBoardClick={mockFn} playerId={1} roleId="werewolf" state="O" />)

  expect(wrapper.is('[data-date=1]')).toBe(true)
  expect(wrapper.is('[data-player=1]')).toBe(true)
  expect(wrapper.is('[data-role="werewolf"]')).toBe(true)
  expect(wrapper.is('[data-state="O"]')).toBe(true)
  wrapper.simulate('click')
  expect(mockFn).toHaveBeenCalledWith('X', 1, 'werewolf')
})
test('<PredictionItem date={1} playerId={1} roleId="werewolf" state="X" /> handleBoardClick', () => {
  const mockFn = jest.fn().mockName('handleBoardClick')
  const wrapper = shallow(<PredictionItem date={1} handleBoardClick={mockFn} playerId={1} roleId="werewolf" state="X" />)

  expect(wrapper.is('[data-date=1]')).toBe(true)
  expect(wrapper.is('[data-player=1]')).toBe(true)
  expect(wrapper.is('[data-role="werewolf"]')).toBe(true)
  expect(wrapper.is('[data-state="X"]')).toBe(true)
  wrapper.simulate('click')
  expect(mockFn).toHaveBeenCalledWith('?', 1, 'werewolf')
})
test('<PredictionItem date={1} playerId={1} roleId="werewolf" state="fill" /> handleBoardClick', () => {
  const mockFn = jest.fn().mockName('handleBoardClick')
  const wrapper = shallow(<PredictionItem date={1} handleBoardClick={mockFn} playerId={1} roleId="werewolf" state="fill" />)

  expect(wrapper.is('[data-date=1]')).toBe(true)
  expect(wrapper.is('[data-player=1]')).toBe(true)
  expect(wrapper.is('[data-role="werewolf"]')).toBe(true)
  expect(wrapper.is('[data-state="fill"]')).toBe(true)
  wrapper.simulate('click')
  expect(mockFn).toHaveBeenCalledTimes(0)
})
test('<PredictionItem date={1} playerId={1} roleId="werewolf" state="fix" /> handleBoardClick', () => {
  const mockFn = jest.fn().mockName('handleBoardClick')
  const wrapper = shallow(<PredictionItem date={1} handleBoardClick={mockFn} playerId={1} roleId="werewolf" state="fix" />)

  expect(wrapper.is('[data-date=1]')).toBe(true)
  expect(wrapper.is('[data-player=1]')).toBe(true)
  expect(wrapper.is('[data-role="werewolf"]')).toBe(true)
  expect(wrapper.is('[data-state="fix"]')).toBe(true)
  wrapper.simulate('click')
  expect(mockFn).toHaveBeenCalledTimes(0)
})

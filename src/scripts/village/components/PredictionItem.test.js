// @flow
import PredictionItem from './PredictionItem'
import React from 'react'
import {shallow} from 'enzyme'

test('<PredictionItem date={1} fixed={false} state="?" />', () => {
  const handleBoardClick = jest.fn()
  const wrapper = shallow(<PredictionItem date={1} fixed={false} handleBoardClick={handleBoardClick} state="?" />)

  expect(wrapper.is('[data-date=1]')).toBe(true)
  expect(wrapper.is('[data-state="?"]')).toBe(true)
})
test('<PredictionItem date={1} fixed={false} state="?" /> handleBoardClick', () => {
  const handleBoardClick = jest.fn()
  const wrapper = shallow(<PredictionItem date={1} fixed={false} handleBoardClick={handleBoardClick} state="?" />)

  expect(wrapper.is('[data-date=1]')).toBe(true)
  expect(wrapper.is('[data-state="?"]')).toBe(true)
  wrapper.simulate('click')
  expect(handleBoardClick).toHaveBeenCalledTimes(1)
  expect(handleBoardClick).toHaveBeenCalledWith('Δ')
})
test('<PredictionItem date={1} fixed state="?" /> handleBoardClick', () => {
  const handleBoardClick = jest.fn()
  const wrapper = shallow(<PredictionItem date={1} fixed handleBoardClick={handleBoardClick} state="?" />)

  expect(wrapper.is('[data-date=1]')).toBe(true)
  expect(wrapper.is('[data-state="?"]')).toBe(true)
  wrapper.simulate('click')
  expect(handleBoardClick).toHaveBeenCalledTimes(0)
})
test('<PredictionItem date={1} fixed={false} state="Δ" /> handleBoardClick', () => {
  const handleBoardClick = jest.fn()
  const wrapper = shallow(<PredictionItem date={1} fixed={false} handleBoardClick={handleBoardClick} state="Δ" />)

  expect(wrapper.is('[data-date=1]')).toBe(true)
  expect(wrapper.is('[data-state="Δ"]')).toBe(true)
  wrapper.simulate('click')
  expect(handleBoardClick).toHaveBeenCalledTimes(1)
  expect(handleBoardClick).toHaveBeenCalledWith('O')
})
test('<PredictionItem date={1} fixed state="Δ" /> handleBoardClick', () => {
  const handleBoardClick = jest.fn()
  const wrapper = shallow(<PredictionItem date={1} fixed handleBoardClick={handleBoardClick} state="Δ" />)

  expect(wrapper.is('[data-date=1]')).toBe(true)
  expect(wrapper.is('[data-state="Δ"]')).toBe(true)
  wrapper.simulate('click')
  expect(handleBoardClick).toHaveBeenCalledTimes(0)
})
test('<PredictionItem date={1} fixed={false} state="O" /> handleBoardClick', () => {
  const handleBoardClick = jest.fn()
  const wrapper = shallow(<PredictionItem date={1} fixed={false} handleBoardClick={handleBoardClick} state="O" />)

  expect(wrapper.is('[data-date=1]')).toBe(true)
  expect(wrapper.is('[data-state="O"]')).toBe(true)
  wrapper.simulate('click')
  expect(handleBoardClick).toHaveBeenCalledTimes(1)
  expect(handleBoardClick).toHaveBeenCalledWith('X')
})
test('<PredictionItem date={1} fixed state="O" /> handleBoardClick', () => {
  const handleBoardClick = jest.fn()
  const wrapper = shallow(<PredictionItem date={1} fixed handleBoardClick={handleBoardClick} state="O" />)

  expect(wrapper.is('[data-date=1]')).toBe(true)
  expect(wrapper.is('[data-state="O"]')).toBe(true)
  wrapper.simulate('click')
  expect(handleBoardClick).toHaveBeenCalledTimes(0)
})
test('<PredictionItem date={1} fixed={false} state="X" /> handleBoardClick', () => {
  const handleBoardClick = jest.fn()
  const wrapper = shallow(<PredictionItem date={1} fixed={false} handleBoardClick={handleBoardClick} state="X" />)

  expect(wrapper.is('[data-date=1]')).toBe(true)
  expect(wrapper.is('[data-state="X"]')).toBe(true)
  wrapper.simulate('click')
  expect(handleBoardClick).toHaveBeenCalledTimes(1)
  expect(handleBoardClick).toHaveBeenCalledWith('?')
})
test('<PredictionItem date={1} fixed state="X" /> handleBoardClick', () => {
  const handleBoardClick = jest.fn()
  const wrapper = shallow(<PredictionItem date={1} fixed handleBoardClick={handleBoardClick} state="X" />)

  expect(wrapper.is('[data-date=1]')).toBe(true)
  expect(wrapper.is('[data-state="X"]')).toBe(true)
  wrapper.simulate('click')
  expect(handleBoardClick).toHaveBeenCalledTimes(0)
})
test('<PredictionItem date={1} fixed={false} state="fill" /> handleBoardClick', () => {
  const handleBoardClick = jest.fn()
  const wrapper = shallow(<PredictionItem date={1} fixed={false} handleBoardClick={handleBoardClick} state="fill" />)

  expect(wrapper.is('[data-date=1]')).toBe(true)
  expect(wrapper.is('[data-state="fill"]')).toBe(true)
  wrapper.simulate('click')
  expect(handleBoardClick).toHaveBeenCalledTimes(0)
})
test('<PredictionItem date={1} fixed state="fill" /> handleBoardClick', () => {
  const handleBoardClick = jest.fn()
  const wrapper = shallow(<PredictionItem date={1} fixed handleBoardClick={handleBoardClick} state="fill" />)

  expect(wrapper.is('[data-date=1]')).toBe(true)
  expect(wrapper.is('[data-state="fill"]')).toBe(true)
  wrapper.simulate('click')
  expect(handleBoardClick).toHaveBeenCalledTimes(0)
})

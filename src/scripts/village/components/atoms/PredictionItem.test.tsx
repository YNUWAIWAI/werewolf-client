import * as React from 'react'
import PredictionItem from './PredictionItem'
import {shallow} from 'enzyme'

describe('<PredictionItem />', () => {
  test('render', () => {
    const handleBoardClick = jest.fn()
    const wrapper = shallow(
      <PredictionItem
        date={1}
        fixed={false}
        handleBoardClick={handleBoardClick}
        state={village.BoardState.QUESTION}
      />
    )

    expect(wrapper.is('[data-date=1]')).toBe(true)
    expect(wrapper.is('[data-state="?"]')).toBe(true)
  })
  describe('handleBoardClick', () => {
    test('date={1} fixed={false} state="?"', () => {
      const handleBoardClick = jest.fn()
      const wrapper = shallow(
        <PredictionItem
          date={1}
          fixed={false}
          handleBoardClick={handleBoardClick}
          state={village.BoardState.QUESTION}
        />
      )

      expect(wrapper.is('[data-date=1]')).toBe(true)
      expect(wrapper.is('[data-state="?"]')).toBe(true)
      wrapper.simulate('click')
      expect(handleBoardClick).toHaveBeenCalledTimes(1)
      expect(handleBoardClick).toHaveBeenCalledWith('Δ')
    })
    test('date={1} fixed state="?"', () => {
      const handleBoardClick = jest.fn()
      const wrapper = shallow(
        <PredictionItem
          date={1}
          fixed
          handleBoardClick={handleBoardClick}
          state={village.BoardState.QUESTION}
        />
      )

      expect(wrapper.is('[data-date=1]')).toBe(true)
      expect(wrapper.is('[data-state="?"]')).toBe(true)
      wrapper.simulate('click')
      expect(handleBoardClick).toHaveBeenCalledTimes(0)
    })
    test('date={1} fixed={false} state="Δ"', () => {
      const handleBoardClick = jest.fn()
      const wrapper = shallow(
        <PredictionItem
          date={1}
          fixed={false}
          handleBoardClick={handleBoardClick}
          state={village.BoardState.TRIANGLE}
        />
      )

      expect(wrapper.is('[data-date=1]')).toBe(true)
      expect(wrapper.is('[data-state="Δ"]')).toBe(true)
      wrapper.simulate('click')
      expect(handleBoardClick).toHaveBeenCalledTimes(1)
      expect(handleBoardClick).toHaveBeenCalledWith('O')
    })
    test('date={1} fixed state="Δ"', () => {
      const handleBoardClick = jest.fn()
      const wrapper = shallow(
        <PredictionItem
          date={1}
          fixed
          handleBoardClick={handleBoardClick}
          state={village.BoardState.TRIANGLE}
        />
      )

      expect(wrapper.is('[data-date=1]')).toBe(true)
      expect(wrapper.is('[data-state="Δ"]')).toBe(true)
      wrapper.simulate('click')
      expect(handleBoardClick).toHaveBeenCalledTimes(0)
    })
    test('date={1} fixed={false} state="O"', () => {
      const handleBoardClick = jest.fn()
      const wrapper = shallow(
        <PredictionItem
          date={1}
          fixed={false}
          handleBoardClick={handleBoardClick}
          state={village.BoardState.CIRCLE}
        />
      )

      expect(wrapper.is('[data-date=1]')).toBe(true)
      expect(wrapper.is('[data-state="O"]')).toBe(true)
      wrapper.simulate('click')
      expect(handleBoardClick).toHaveBeenCalledTimes(1)
      expect(handleBoardClick).toHaveBeenCalledWith('X')
    })
    test('date={1} fixed state="O"', () => {
      const handleBoardClick = jest.fn()
      const wrapper = shallow(
        <PredictionItem
          date={1}
          fixed
          handleBoardClick={handleBoardClick}
          state={village.BoardState.CIRCLE}
        />
      )

      expect(wrapper.is('[data-date=1]')).toBe(true)
      expect(wrapper.is('[data-state="O"]')).toBe(true)
      wrapper.simulate('click')
      expect(handleBoardClick).toHaveBeenCalledTimes(0)
    })
    test('date={1} fixed={false} state="X"', () => {
      const handleBoardClick = jest.fn()
      const wrapper = shallow(
        <PredictionItem
          date={1}
          fixed={false}
          handleBoardClick={handleBoardClick}
          state={village.BoardState.CROSS}
        />
      )

      expect(wrapper.is('[data-date=1]')).toBe(true)
      expect(wrapper.is('[data-state="X"]')).toBe(true)
      wrapper.simulate('click')
      expect(handleBoardClick).toHaveBeenCalledTimes(1)
      expect(handleBoardClick).toHaveBeenCalledWith('?')
    })
    test('date={1} fixed state="X"', () => {
      const handleBoardClick = jest.fn()
      const wrapper = shallow(
        <PredictionItem
          date={1}
          fixed
          handleBoardClick={handleBoardClick}
          state={village.BoardState.CROSS}
        />
      )

      expect(wrapper.is('[data-date=1]')).toBe(true)
      expect(wrapper.is('[data-state="X"]')).toBe(true)
      wrapper.simulate('click')
      expect(handleBoardClick).toHaveBeenCalledTimes(0)
    })
    test('date={1} fixed={false} state="fill"', () => {
      const handleBoardClick = jest.fn()
      const wrapper = shallow(
        <PredictionItem
          date={1}
          fixed={false}
          handleBoardClick={handleBoardClick}
          state={village.BoardState.FILL}
        />
      )

      expect(wrapper.is('[data-date=1]')).toBe(true)
      expect(wrapper.is('[data-state="fill"]')).toBe(true)
      wrapper.simulate('click')
      expect(handleBoardClick).toHaveBeenCalledTimes(0)
    })
    test('date={1} fixed state="fill"', () => {
      const handleBoardClick = jest.fn()
      const wrapper = shallow(
        <PredictionItem
          date={1}
          fixed
          handleBoardClick={handleBoardClick}
          state={village.BoardState.FILL}
        />
      )

      expect(wrapper.is('[data-date=1]')).toBe(true)
      expect(wrapper.is('[data-state="fill"]')).toBe(true)
      wrapper.simulate('click')
      expect(handleBoardClick).toHaveBeenCalledTimes(0)
    })
  })
})

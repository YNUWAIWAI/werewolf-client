// @flow
import AdvancedSearchBoxRow from './AdvancedSearchBoxRow'
import React from 'react'
import {mount} from 'enzyme'

describe('<AdvancedSearchBoxRow />', () => {
  test('type: number', () => {
    const handleChange = jest.fn()
    const handleClick = jest.fn()
    const wrapper = mount(
      <AdvancedSearchBoxRow
        checked
        handleChange={handleChange}
        handleClick={handleClick}
        id="maximum"
        max={15}
        min={4}
        name="Maximum"
        placeholder="4-15"
        type="number"
        validity
      />
    )

    expect(wrapper.contains(
      <div className="advanced-search--prop">
        <input
          checked
          disabled={false}
          id="maximum"
          onClick={handleClick}
          type="checkbox"
        />
        <label htmlFor="maximum">
          {'Maximum'}
        </label>
      </div>
    )).toBe(true)
    expect(wrapper.contains(
      <input
        className="advanced-search--input"
        max={15}
        min={4}
        onChange={handleChange}
        placeholder="4-15"
        type="number"
      />
    )).toBe(true)
  })
  test('type: text', () => {
    const handleChange = jest.fn()
    const handleClick = jest.fn()
    const wrapper = mount(
      <AdvancedSearchBoxRow
        checked
        handleChange={handleChange}
        handleClick={handleClick}
        id="villageName"
        max={30}
        min={5}
        name="Village Name"
        placeholder="5-30 chars"
        type="text"
        validity
      />
    )

    expect(wrapper.contains(
      <div className="advanced-search--prop">
        <input
          checked
          disabled={false}
          id="villageName"
          onClick={handleClick}
          type="checkbox"
        />
        <label htmlFor="villageName">
          {'Village Name'}
        </label>
      </div>
    )).toBe(true)
    expect(wrapper.contains(
      <input
        className="advanced-search--input"
        maxLength={30}
        minLength={5}
        onChange={handleChange}
        placeholder="5-30 chars"
        type="text"
      />
    )).toBe(true)
  })
  test('type: textarea', () => {
    const handleChange = jest.fn()
    const handleClick = jest.fn()
    const wrapper = mount(
      <AdvancedSearchBoxRow
        checked
        handleChange={handleChange}
        handleClick={handleClick}
        id="comment"
        max={100}
        min={0}
        name="Comment"
        placeholder="0-100 chars"
        type="textarea"
        validity
      />
    )

    expect(wrapper.contains(
      <div className="advanced-search--prop">
        <input
          checked
          disabled={false}
          id="comment"
          onClick={handleClick}
          type="checkbox"
        />
        <label htmlFor="comment">
          {'Comment'}
        </label>
      </div>
    )).toBe(true)
    expect(wrapper.contains(
      <textarea
        className="advanced-search--input"
        maxLength={100}
        minLength={0}
        onChange={handleChange}
        placeholder="0-100 chars"
        rows="3"
      />
    )).toBe(true)
  })
})

import * as React from 'react'
import {CommandInputSuggest} from './CommandInputSuggest'
import {mount} from 'enzyme'
import {village} from '../../types'

describe('render', () => {
  test('data.length > 0', () => {
    const data = [
      {
        id: 'Alvin',
        name: {
          'en': 'Alvin',
          'ja': 'アルビン'
        }
      },
      {
        id: 'Catalina',
        name: {
          'en': 'Catalina',
          'ja': 'カタリナ'
        }
      }
    ]
    const handleSuggestClick = jest.fn()
    const wrapper = mount(
      <CommandInputSuggest
        data={data}
        handleSuggestClick={handleSuggestClick}
        language={village.Language.en}
        left={0}
        selected={0}
        suggestable
        top={0}
      />
    )

    expect(wrapper.isEmptyRender()).toBe(false)
    expect(handleSuggestClick).toHaveBeenCalledTimes(0)
  })
  test('data.length <= 0', () => {
    const handleSuggestClick = jest.fn()
    const wrapper = mount(
      <CommandInputSuggest
        data={[]}
        handleSuggestClick={handleSuggestClick}
        language={village.Language.en}
        left={0}
        selected={0}
        suggestable
        top={0}
      />
    )

    expect(wrapper.isEmptyRender()).toBe(true)
    expect(handleSuggestClick).toHaveBeenCalledTimes(0)
  })
  test('suggestable={false}', () => {
    const data = [
      {
        id: 'Alvin',
        name: {
          'en': 'Alvin',
          'ja': 'アルビン'
        }
      },
      {
        id: 'Catalina',
        name: {
          'en': 'Catalina',
          'ja': 'カタリナ'
        }
      }
    ]
    const handleSuggestClick = jest.fn()
    const wrapper = mount(
      <CommandInputSuggest
        data={data}
        handleSuggestClick={handleSuggestClick}
        language={village.Language.en}
        left={0}
        selected={0}
        suggestable={false}
        top={0}
      />
    )

    expect(wrapper.isEmptyRender()).toBe(true)
    expect(handleSuggestClick).toHaveBeenCalledTimes(0)
  })
})
describe('componentDidUpdate', () => {
  test('data.length > 0', () => {
    const data = [
      {
        id: 'Alvin',
        name: {
          'en': 'Alvin',
          'ja': 'アルビン'
        }
      },
      {
        id: 'Catalina',
        name: {
          'en': 'Catalina',
          'ja': 'カタリナ'
        }
      }
    ]
    const handleSuggestClick = jest.fn()
    const wrapper = mount(
      <CommandInputSuggest
        data={data}
        handleSuggestClick={handleSuggestClick}
        language={village.Language.en}
        left={0}
        selected={0}
        suggestable
        top={0}
      />
    )
    const spy = jest.spyOn(
      wrapper.find('.vi--command--input--suggest--list').getDOMNode(),
      'scrollTop',
      'set'
    )

    wrapper.setProps({
      selected: 1
    })
    expect(spy).toHaveBeenCalled()
  })
})
test('handleSuggestClick', () => {
  const data = [
    {
      id: 'Alvin',
      name: {
        'en': 'Alvin',
        'ja': 'アルビン'
      }
    },
    {
      id: 'Catalina',
      name: {
        'en': 'Catalina',
        'ja': 'カタリナ'
      }
    }
  ]
  const handleSuggestClick = jest.fn()
  const wrapper = mount(
    <CommandInputSuggest
      data={data}
      handleSuggestClick={handleSuggestClick}
      language={village.Language.en}
      left={0}
      selected={0}
      suggestable
      top={0}
    />
  )

  wrapper.find('.vi--command--input--suggest--item.selected').simulate('click')
  expect(handleSuggestClick).toHaveBeenCalledTimes(1)
  expect(handleSuggestClick).toHaveBeenCalledWith('Alvin')
})

/* global village */
import * as React from 'react'
import CommandInputSuggest from './CommandInputSuggest'
import {getMessages} from '../../../../i18n/village'
import {initRenderer} from '../../../../../tools/intl-enzyme-test-helper'

const {mountWithIntl} = initRenderer(village.Language.ja, getMessages(village.Language.ja))

describe('<CommandInputSuggest />', () => {
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
      const wrapper = mountWithIntl(
        <CommandInputSuggest
          data={data}
          handleSuggestClick={handleSuggestClick}
          language={village.Language.ja}
          left={0}
          selected={0}
          top={0}
        />
      )

      expect(wrapper.isEmptyRender()).toBe(false)
      expect(handleSuggestClick).toHaveBeenCalledTimes(0)
    })
    test('data.length <= 0', () => {
      const handleSuggestClick = jest.fn()
      const wrapper = mountWithIntl(
        <CommandInputSuggest
          data={[]}
          handleSuggestClick={handleSuggestClick}
          language={village.Language.ja}
          left={0}
          selected={0}
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
      const wrapper = mountWithIntl<CommandInputSuggest>(
        <CommandInputSuggest
          data={data}
          handleSuggestClick={handleSuggestClick}
          language={village.Language.ja}
          left={0}
          selected={0}
          top={0}
        />
      )
      const spy = jest.spyOn(CommandInputSuggest.prototype, 'componentDidUpdate')

      wrapper.setProps({
        selected: 1
      })
      expect(spy).toHaveBeenCalled()
    })
    test('data.length <= 0', () => {
      const handleSuggestClick = jest.fn()
      const wrapper = mountWithIntl<CommandInputSuggest>(
        <CommandInputSuggest
          data={[]}
          handleSuggestClick={handleSuggestClick}
          language={village.Language.ja}
          left={0}
          selected={0}
          top={0}
        />
      )
      const spy = jest.spyOn(CommandInputSuggest.prototype, 'componentDidUpdate')

      wrapper.setProps({
        data: []
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
    const wrapper = mountWithIntl(
      <CommandInputSuggest
        data={data}
        handleSuggestClick={handleSuggestClick}
        language={village.Language.ja}
        left={0}
        selected={0}
        top={0}
      />
    )

    wrapper.find('.vi--command--input--suggest--item.selected').simulate('click')
    expect(handleSuggestClick).toHaveBeenCalledTimes(1)
    expect(handleSuggestClick).toHaveBeenCalledWith('アルビン')
  })
})

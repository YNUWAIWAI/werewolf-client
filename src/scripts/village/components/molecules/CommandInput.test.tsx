import * as React from 'react'
import * as village from '../../types'
import CommandInput, {Key} from './CommandInput'
import {getMessages} from '../../i18n'
import {initRenderer} from '../../tools'

const {mountWithIntl} = initRenderer(village.Language.en, getMessages(village.Language.en))

describe('<CommandInput />', () => {
  describe('render', () => {
    test('inputChannel="grave"', () => {
      const handlePostChat = jest.fn()
      const wrapper = mountWithIntl(
        <CommandInput
          characterLimit={140}
          handlePostChat={handlePostChat}
          inputChannel={village.InputChannel.grave}
          language={village.Language.en}
          postCount={-1}
          postCountLimit={-1}
          suggesttedData={[]}
        />
      )

      expect(wrapper.find('.vi--command--input--textarea').hasClass('grave')).toBe(true)
      expect(wrapper.find('.vi--command--input--textarea').is('[placeholder="Graveyard"]')).toBe(true)
      expect(wrapper.find('.vi--command--input--textarea').is('[value=""]')).toBe(true)
      expect(wrapper.find('.vi--command--input--send').is('[disabled=true]')).toBe(true)
      expect(wrapper.find('.vi--command--input--send').text()).toBe('Send')
      expect(handlePostChat).toHaveBeenCalledTimes(0)
    })
    test('inputChannel="limited"', () => {
      const handlePostChat = jest.fn()
      const wrapper = mountWithIntl(
        <CommandInput
          characterLimit={140}
          handlePostChat={handlePostChat}
          inputChannel={village.InputChannel.limited}
          language={village.Language.en}
          postCount={0}
          postCountLimit={10}
          suggesttedData={[]}
        />
      )

      expect(wrapper.find('.vi--command--input--textarea').hasClass('limited')).toBe(true)
      expect(wrapper.find('.vi--command--input--textarea').is('[placeholder="Werewolf"]')).toBe(true)
      expect(wrapper.find('.vi--command--input--textarea').is('[value=""]')).toBe(true)
      expect(wrapper.find('.vi--command--input--send').is('[disabled=true]')).toBe(true)
      expect(wrapper.find('.vi--command--input--send').text()).toBe('Send')
      expect(handlePostChat).toHaveBeenCalledTimes(0)
    })
    test('inputChannel="private"', () => {
      const handlePostChat = jest.fn()
      const wrapper = mountWithIntl(
        <CommandInput
          characterLimit={140}
          handlePostChat={handlePostChat}
          inputChannel={village.InputChannel.private}
          language={village.Language.en}
          postCount={-1}
          postCountLimit={-1}
          suggesttedData={[]}
        />
      )

      expect(wrapper.find('.vi--command--input--textarea').hasClass('private')).toBe(true)
      expect(wrapper.find('.vi--command--input--textarea').is('[placeholder="Private"]')).toBe(true)
      expect(wrapper.find('.vi--command--input--textarea').is('[value=""]')).toBe(true)
      expect(wrapper.find('.vi--command--input--send').is('[disabled=true]')).toBe(true)
      expect(wrapper.find('.vi--command--input--send').text()).toBe('Send')
      expect(handlePostChat).toHaveBeenCalledTimes(0)
    })
    test('inputChannel="post mortem"', () => {
      const handlePostChat = jest.fn()
      const wrapper = mountWithIntl(
        <CommandInput
          characterLimit={140}
          handlePostChat={handlePostChat}
          inputChannel={village.InputChannel.postMortem}
          language={village.Language.en}
          postCount={-1}
          postCountLimit={-1}
          suggesttedData={[]}
        />
      )

      expect(wrapper.find('.vi--command--input--textarea').hasClass('postMortem')).toBe(true)
      expect(wrapper.find('.vi--command--input--textarea').is('[placeholder="Post-mortem"]')).toBe(true)
      expect(wrapper.find('.vi--command--input--textarea').is('[value=""]')).toBe(true)
      expect(wrapper.find('.vi--command--input--send').is('[disabled=true]')).toBe(true)
      expect(wrapper.find('.vi--command--input--send').text()).toBe('Send')
      expect(handlePostChat).toHaveBeenCalledTimes(0)
    })
    test('inputChannel="public"', () => {
      const handlePostChat = jest.fn()
      const wrapper = mountWithIntl(
        <CommandInput
          characterLimit={140}
          handlePostChat={handlePostChat}
          inputChannel={village.InputChannel.public}
          language={village.Language.en}
          postCount={0}
          postCountLimit={10}
          suggesttedData={[]}
        />
      )

      expect(wrapper.find('.vi--command--input--textarea').hasClass('public')).toBe(true)
      expect(wrapper.find('.vi--command--input--textarea').is('[placeholder="Public"]')).toBe(true)
      expect(wrapper.find('.vi--command--input--textarea').is('[value=""]')).toBe(true)
      expect(wrapper.find('.vi--command--input--send').is('[disabled=true]')).toBe(true)
      expect(wrapper.find('.vi--command--input--send').text()).toBe('Send')
      expect(handlePostChat).toHaveBeenCalledTimes(0)
    })
  })
  test('getSearchText', () => {
    const handlePostChat = jest.fn()
    const wrapper = mountWithIntl<CommandInput>(
      <CommandInput
        characterLimit={140}
        handlePostChat={handlePostChat}
        inputChannel={village.InputChannel.public}
        language={village.Language.en}
        postCount={0}
        postCountLimit={10}
        suggesttedData={[]}
      />
    )

    wrapper.setState({
      trigerPosition: 0
    })
    expect(wrapper.instance().getSearchText('@text', 5)).toBe('text')
    expect(wrapper.instance().getSearchText('@text', 4)).toBe('tex')
  })
  describe('handleKeyDown', () => {
    test('processing === true', () => {
      const handlePostChat = jest.fn()
      const wrapper = mountWithIntl<CommandInput>(
        <CommandInput
          characterLimit={140}
          handlePostChat={handlePostChat}
          inputChannel={village.InputChannel.public}
          language={village.Language.en}
          postCount={0}
          postCountLimit={10}
          suggesttedData={[]}
        />
      )

      wrapper.instance().updateProcessing(true)
      expect(wrapper.state().processing).toBe(true)
      wrapper.find('.vi--command--input--textarea').simulate('keyDown', {
        ctrlKey: true,
        key: Key.Enter,
        metaKey: false
      })
      expect(wrapper.state()).toStrictEqual({
        caretPosition: 0,
        processing: true,
        suggestLeft: 0,
        suggestSelected: 0,
        suggestTop: 0,
        suggestable: false,
        suggesttedData: [],
        text: '',
        trigerPosition: 0
      })
    })
    describe('processing === false', () => {
      describe('suggestable === false, suggesttedData.length <= 0', () => {
        test('(event.ctrlKey || event.metaKey) === true, event.key === Key.Enter', () => {
          const handlePostChat = jest.fn()
          const wrapper = mountWithIntl<CommandInput>(
            <CommandInput
              characterLimit={140}
              handlePostChat={handlePostChat}
              inputChannel={village.InputChannel.public}
              language={village.Language.en}
              postCount={0}
              postCountLimit={10}
              suggesttedData={[]}
            />
          )

          wrapper.instance().updateText('text')
          expect(wrapper.state().processing).toBe(false)
          expect(wrapper.state().suggestable).toBe(false)
          expect(wrapper.state().suggesttedData).toHaveLength(0)
          wrapper.find('.vi--command--input--textarea').simulate('keyDown', {
            ctrlKey: true,
            key: Key.Enter,
            metaKey: false
          })
          expect(wrapper.state()).toStrictEqual({
            caretPosition: 0,
            processing: false,
            suggestLeft: 0,
            suggestSelected: 0,
            suggestTop: 0,
            suggestable: false,
            suggesttedData: [],
            text: '',
            trigerPosition: 0
          })
          expect(handlePostChat).toHaveBeenCalled()
        })
        test('(event.ctrlKey || event.metaKey) === false, event.key === Key.Enter', () => {
          const handlePostChat = jest.fn()
          const wrapper = mountWithIntl<CommandInput>(
            <CommandInput
              characterLimit={140}
              handlePostChat={handlePostChat}
              inputChannel={village.InputChannel.public}
              language={village.Language.en}
              postCount={0}
              postCountLimit={10}
              suggesttedData={[]}
            />
          )

          wrapper.instance().updateText('text')
          expect(wrapper.state().processing).toBe(false)
          expect(wrapper.state().suggestable).toBe(false)
          expect(wrapper.state().suggesttedData).toHaveLength(0)
          wrapper.find('.vi--command--input--textarea').simulate('keyDown', {
            ctrlKey: false,
            key: Key.Enter,
            metaKey: false
          })
          expect(wrapper.state()).toStrictEqual({
            caretPosition: 0,
            processing: false,
            suggestLeft: 0,
            suggestSelected: 0,
            suggestTop: 0,
            suggestable: false,
            suggesttedData: [],
            text: 'text',
            trigerPosition: 0
          })
          expect(handlePostChat).toHaveBeenCalledTimes(0)
        })
        test('(event.ctrlKey || event.metaKey) === true, event.key !== Key.Enter', () => {
          const handlePostChat = jest.fn()
          const wrapper = mountWithIntl<CommandInput>(
            <CommandInput
              characterLimit={140}
              handlePostChat={handlePostChat}
              inputChannel={village.InputChannel.public}
              language={village.Language.en}
              postCount={0}
              postCountLimit={10}
              suggesttedData={[]}
            />
          )

          wrapper.instance().updateText('text')
          expect(wrapper.state().processing).toBe(false)
          expect(wrapper.state().suggestable).toBe(false)
          expect(wrapper.state().suggesttedData).toHaveLength(0)
          wrapper.find('.vi--command--input--textarea').simulate('keyDown', {
            ctrlKey: true,
            key: Key.Tab,
            metaKey: false
          })
          expect(wrapper.state()).toStrictEqual({
            caretPosition: 0,
            processing: false,
            suggestLeft: 0,
            suggestSelected: 0,
            suggestTop: 0,
            suggestable: false,
            suggesttedData: [],
            text: 'text',
            trigerPosition: 0
          })
          expect(handlePostChat).toHaveBeenCalledTimes(0)
        })
      })
      describe('suggestable === true, suggesttedData.length <= 0', () => {
        test('(event.ctrlKey || event.metaKey) === true, event.key === Key.Enter', () => {
          const handlePostChat = jest.fn()
          const wrapper = mountWithIntl<CommandInput>(
            <CommandInput
              characterLimit={140}
              handlePostChat={handlePostChat}
              inputChannel={village.InputChannel.public}
              language={village.Language.en}
              postCount={0}
              postCountLimit={10}
              suggesttedData={[]}
            />
          )

          wrapper.instance().updateText('text')
          wrapper.instance().updateSuggestable(true)
          expect(wrapper.state().processing).toBe(false)
          expect(wrapper.state().suggestable).toBe(true)
          expect(wrapper.state().suggesttedData).toHaveLength(0)
          wrapper.find('.vi--command--input--textarea').simulate('keyDown', {
            ctrlKey: true,
            key: Key.Enter,
            metaKey: false
          })
          expect(wrapper.state()).toStrictEqual({
            caretPosition: 0,
            processing: false,
            suggestLeft: 0,
            suggestSelected: 0,
            suggestTop: 0,
            suggestable: true,
            suggesttedData: [],
            text: '',
            trigerPosition: 0
          })
          expect(handlePostChat).toHaveBeenCalled()
        })
        test('(event.ctrlKey || event.metaKey) === false, event.key === Key.Enter', () => {
          const handlePostChat = jest.fn()
          const wrapper = mountWithIntl<CommandInput>(
            <CommandInput
              characterLimit={140}
              handlePostChat={handlePostChat}
              inputChannel={village.InputChannel.public}
              language={village.Language.en}
              postCount={0}
              postCountLimit={10}
              suggesttedData={[]}
            />
          )

          wrapper.instance().updateText('text')
          wrapper.instance().updateSuggestable(true)
          expect(wrapper.state().processing).toBe(false)
          expect(wrapper.state().suggestable).toBe(true)
          expect(wrapper.state().suggesttedData).toHaveLength(0)
          wrapper.find('.vi--command--input--textarea').simulate('keyDown', {
            ctrlKey: false,
            key: Key.Enter,
            metaKey: false
          })
          expect(wrapper.state()).toStrictEqual({
            caretPosition: 0,
            processing: false,
            suggestLeft: 0,
            suggestSelected: 0,
            suggestTop: 0,
            suggestable: true,
            suggesttedData: [],
            text: 'text',
            trigerPosition: 0
          })
          expect(handlePostChat).toHaveBeenCalledTimes(0)
        })
        test('(event.ctrlKey || event.metaKey) === true, event.key !== Key.Enter', () => {
          const handlePostChat = jest.fn()
          const wrapper = mountWithIntl<CommandInput>(
            <CommandInput
              characterLimit={140}
              handlePostChat={handlePostChat}
              inputChannel={village.InputChannel.public}
              language={village.Language.en}
              postCount={0}
              postCountLimit={10}
              suggesttedData={[]}
            />
          )

          wrapper.instance().updateText('text')
          wrapper.instance().updateSuggestable(true)
          expect(wrapper.state().processing).toBe(false)
          expect(wrapper.state().suggestable).toBe(true)
          expect(wrapper.state().suggesttedData).toHaveLength(0)
          wrapper.find('.vi--command--input--textarea').simulate('keyDown', {
            ctrlKey: true,
            key: Key.Tab,
            metaKey: false
          })
          expect(wrapper.state()).toStrictEqual({
            caretPosition: 0,
            processing: false,
            suggestLeft: 0,
            suggestSelected: 0,
            suggestTop: 0,
            suggestable: true,
            suggesttedData: [],
            text: 'text',
            trigerPosition: 0
          })
          expect(handlePostChat).toHaveBeenCalledTimes(0)
        })
      })
      describe('suggestable === false, suggesttedData.length > 0', () => {
        const suggesttedData = [
          {
            id: 'Alvin',
            name: {
              'en': 'Alvin',
              'ja': 'アルビン'
            }
          }
        ]

        test('(event.ctrlKey || event.metaKey) === true, event.key === Key.Enter', () => {
          const handlePostChat = jest.fn()
          const wrapper = mountWithIntl<CommandInput>(
            <CommandInput
              characterLimit={140}
              handlePostChat={handlePostChat}
              inputChannel={village.InputChannel.public}
              language={village.Language.en}
              postCount={0}
              postCountLimit={10}
              suggesttedData={suggesttedData}
            />
          )

          wrapper.instance().updateText('text')
          expect(wrapper.state().processing).toBe(false)
          expect(wrapper.state().suggestable).toBe(false)
          expect(wrapper.state().suggesttedData).toHaveLength(1)
          wrapper.find('.vi--command--input--textarea').simulate('keyDown', {
            ctrlKey: true,
            key: Key.Enter,
            metaKey: false
          })
          expect(wrapper.state()).toStrictEqual({
            caretPosition: 0,
            processing: false,
            suggestLeft: 0,
            suggestSelected: 0,
            suggestTop: 0,
            suggestable: false,
            suggesttedData,
            text: '',
            trigerPosition: 0
          })
          expect(handlePostChat).toHaveBeenCalled()
        })
        test('(event.ctrlKey || event.metaKey) === false, event.key === Key.Enter', () => {
          const handlePostChat = jest.fn()
          const wrapper = mountWithIntl<CommandInput>(
            <CommandInput
              characterLimit={140}
              handlePostChat={handlePostChat}
              inputChannel={village.InputChannel.public}
              language={village.Language.en}
              postCount={0}
              postCountLimit={10}
              suggesttedData={[]}
            />
          )

          wrapper.instance().updateText('text')
          expect(wrapper.state().processing).toBe(false)
          expect(wrapper.state().suggestable).toBe(false)
          expect(wrapper.state().suggesttedData).toHaveLength(0)
          wrapper.find('.vi--command--input--textarea').simulate('keyDown', {
            ctrlKey: false,
            key: Key.Enter,
            metaKey: false
          })
          expect(wrapper.state()).toStrictEqual({
            caretPosition: 0,
            processing: false,
            suggestLeft: 0,
            suggestSelected: 0,
            suggestTop: 0,
            suggestable: false,
            suggesttedData: [],
            text: 'text',
            trigerPosition: 0
          })
          expect(handlePostChat).toHaveBeenCalledTimes(0)
        })
        test('(event.ctrlKey || event.metaKey) === true, event.key !== Key.Enter', () => {
          const handlePostChat = jest.fn()
          const wrapper = mountWithIntl<CommandInput>(
            <CommandInput
              characterLimit={140}
              handlePostChat={handlePostChat}
              inputChannel={village.InputChannel.public}
              language={village.Language.en}
              postCount={0}
              postCountLimit={10}
              suggesttedData={[]}
            />
          )

          wrapper.instance().updateText('text')
          expect(wrapper.state().processing).toBe(false)
          expect(wrapper.state().suggestable).toBe(false)
          expect(wrapper.state().suggesttedData).toHaveLength(0)
          wrapper.find('.vi--command--input--textarea').simulate('keyDown', {
            ctrlKey: true,
            key: Key.Tab,
            metaKey: false
          })
          expect(wrapper.state()).toStrictEqual({
            caretPosition: 0,
            processing: false,
            suggestLeft: 0,
            suggestSelected: 0,
            suggestTop: 0,
            suggestable: false,
            suggesttedData: [],
            text: 'text',
            trigerPosition: 0
          })
          expect(handlePostChat).toHaveBeenCalledTimes(0)
        })
      })
      describe('suggestable === true, suggesttedData.length > 0', () => {
        const suggesttedData = [
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
          },
          {
            id: 'Dieter',
            name: {
              'en': 'Dieter',
              'ja': 'ディーター'
            }
          }
        ]

        describe('event.key', () => {
          test('ArrowLeft', () => {
            const handlePostChat = jest.fn()
            const wrapper = mountWithIntl<CommandInput>(
              <CommandInput
                characterLimit={140}
                handlePostChat={handlePostChat}
                inputChannel={village.InputChannel.public}
                language={village.Language.en}
                postCount={0}
                postCountLimit={10}
                suggesttedData={suggesttedData}
              />
            )

            wrapper.instance().updateText('text')
            wrapper.instance().updateSuggestable(true)
            expect(wrapper.state().processing).toBe(false)
            expect(wrapper.state().suggestable).toBe(true)
            expect(wrapper.state().suggesttedData).toHaveLength(3)
            wrapper.find('.vi--command--input--textarea').simulate('keyDown', {
              key: Key.ArrowLeft
            })
            expect(wrapper.state()).toStrictEqual({
              caretPosition: 0,
              processing: false,
              suggestLeft: 0,
              suggestSelected: 0,
              suggestTop: 0,
              suggestable: false,
              suggesttedData,
              text: 'text',
              trigerPosition: 0
            })
            expect(handlePostChat).toHaveBeenCalledTimes(0)
          })
          test('ArrowRight', () => {
            const handlePostChat = jest.fn()
            const wrapper = mountWithIntl<CommandInput>(
              <CommandInput
                characterLimit={140}
                handlePostChat={handlePostChat}
                inputChannel={village.InputChannel.public}
                language={village.Language.en}
                postCount={0}
                postCountLimit={10}
                suggesttedData={suggesttedData}
              />
            )

            wrapper.instance().updateText('text')
            wrapper.instance().updateSuggestable(true)
            expect(wrapper.state().processing).toBe(false)
            expect(wrapper.state().suggestable).toBe(true)
            expect(wrapper.state().suggesttedData).toHaveLength(3)
            wrapper.find('.vi--command--input--textarea').simulate('keyDown', {
              key: Key.ArrowRight
            })
            expect(wrapper.state()).toStrictEqual({
              caretPosition: 0,
              processing: false,
              suggestLeft: 0,
              suggestSelected: 0,
              suggestTop: 0,
              suggestable: false,
              suggesttedData,
              text: 'text',
              trigerPosition: 0
            })
            expect(handlePostChat).toHaveBeenCalledTimes(0)
          })
          test('ArrowDown', () => {
            const handlePostChat = jest.fn()
            const wrapper = mountWithIntl<CommandInput>(
              <CommandInput
                characterLimit={140}
                handlePostChat={handlePostChat}
                inputChannel={village.InputChannel.public}
                language={village.Language.en}
                postCount={0}
                postCountLimit={10}
                suggesttedData={suggesttedData}
              />
            )

            wrapper.instance().updateText('text')
            wrapper.instance().updateSuggestable(true)
            expect(wrapper.state().processing).toBe(false)
            expect(wrapper.state().suggestable).toBe(true)
            expect(wrapper.state().suggesttedData).toHaveLength(3)
            wrapper.find('.vi--command--input--textarea').simulate('keyDown', {
              key: Key.ArrowDown
            })
            expect(wrapper.state()).toStrictEqual({
              caretPosition: 0,
              processing: false,
              suggestLeft: 0,
              suggestSelected: 1,
              suggestTop: 0,
              suggestable: true,
              suggesttedData,
              text: 'text',
              trigerPosition: 0
            })
            wrapper.find('.vi--command--input--textarea').simulate('keyDown', {
              key: Key.ArrowDown
            })
            expect(wrapper.state()).toStrictEqual({
              caretPosition: 0,
              processing: false,
              suggestLeft: 0,
              suggestSelected: 2,
              suggestTop: 0,
              suggestable: true,
              suggesttedData,
              text: 'text',
              trigerPosition: 0
            })
            wrapper.find('.vi--command--input--textarea').simulate('keyDown', {
              key: Key.ArrowDown
            })
            expect(wrapper.state()).toStrictEqual({
              caretPosition: 0,
              processing: false,
              suggestLeft: 0,
              suggestSelected: 0,
              suggestTop: 0,
              suggestable: true,
              suggesttedData,
              text: 'text',
              trigerPosition: 0
            })
          })
          test('ArrowUp', () => {
            const handlePostChat = jest.fn()
            const wrapper = mountWithIntl<CommandInput>(
              <CommandInput
                characterLimit={140}
                handlePostChat={handlePostChat}
                inputChannel={village.InputChannel.public}
                language={village.Language.en}
                postCount={0}
                postCountLimit={10}
                suggesttedData={suggesttedData}
              />
            )

            wrapper.instance().updateText('text')
            wrapper.instance().updateSuggestable(true)
            expect(wrapper.state().processing).toBe(false)
            expect(wrapper.state().suggestable).toBe(true)
            expect(wrapper.state().suggesttedData).toHaveLength(3)
            wrapper.find('.vi--command--input--textarea').simulate('keyDown', {
              key: Key.ArrowUp
            })
            expect(wrapper.state()).toStrictEqual({
              caretPosition: 0,
              processing: false,
              suggestLeft: 0,
              suggestSelected: 2,
              suggestTop: 0,
              suggestable: true,
              suggesttedData,
              text: 'text',
              trigerPosition: 0
            })
            wrapper.find('.vi--command--input--textarea').simulate('keyDown', {
              key: Key.ArrowUp
            })
            expect(wrapper.state()).toStrictEqual({
              caretPosition: 0,
              processing: false,
              suggestLeft: 0,
              suggestSelected: 1,
              suggestTop: 0,
              suggestable: true,
              suggesttedData,
              text: 'text',
              trigerPosition: 0
            })
            wrapper.find('.vi--command--input--textarea').simulate('keyDown', {
              key: Key.ArrowUp
            })
            expect(wrapper.state()).toStrictEqual({
              caretPosition: 0,
              processing: false,
              suggestLeft: 0,
              suggestSelected: 0,
              suggestTop: 0,
              suggestable: true,
              suggesttedData,
              text: 'text',
              trigerPosition: 0
            })
          })
          test('Enter', () => {
            const handlePostChat = jest.fn()
            const wrapper = mountWithIntl<CommandInput>(
              <CommandInput
                characterLimit={140}
                handlePostChat={handlePostChat}
                inputChannel={village.InputChannel.public}
                language={village.Language.en}
                postCount={0}
                postCountLimit={10}
                suggesttedData={suggesttedData}
              />
            )

            wrapper.instance().updateCaretPosition(1)
            wrapper.instance().updateText('@')
            wrapper.instance().updateTrigerPosition(0)
            wrapper.instance().updateSuggestable(true)
            expect(wrapper.state().processing).toBe(false)
            expect(wrapper.state().suggestable).toBe(true)
            expect(wrapper.state().suggesttedData).toHaveLength(3)
            wrapper.find('.vi--command--input--textarea').simulate('keyDown', {
              key: Key.Enter
            })
            expect(wrapper.state()).toStrictEqual({
              caretPosition: 5,
              processing: false,
              suggestLeft: 1,
              suggestSelected: 0,
              suggestTop: 1,
              suggestable: false,
              suggesttedData,
              text: 'Alvin',
              trigerPosition: 0
            })
          })
          test('Tab', () => {
            const handlePostChat = jest.fn()
            const wrapper = mountWithIntl<CommandInput>(
              <CommandInput
                characterLimit={140}
                handlePostChat={handlePostChat}
                inputChannel={village.InputChannel.public}
                language={village.Language.en}
                postCount={0}
                postCountLimit={10}
                suggesttedData={suggesttedData}
              />
            )

            wrapper.instance().updateCaretPosition(1)
            wrapper.instance().updateText('@')
            wrapper.instance().updateTrigerPosition(0)
            wrapper.instance().updateSuggestable(true)
            expect(wrapper.state().processing).toBe(false)
            expect(wrapper.state().suggestable).toBe(true)
            expect(wrapper.state().suggesttedData).toHaveLength(3)
            wrapper.find('.vi--command--input--textarea').simulate('keyDown', {
              key: Key.Tab
            })
            expect(wrapper.state()).toStrictEqual({
              caretPosition: 5,
              processing: false,
              suggestLeft: 1,
              suggestSelected: 0,
              suggestTop: 1,
              suggestable: false,
              suggesttedData,
              text: 'Alvin',
              trigerPosition: 0
            })
          })
        })
      })
    })
    describe('postChat', () => {
      test('suggestable === true && suggesttedData.length > 0', () => {
        const suggesttedData = [
          {
            id: 'Alvin',
            name: {
              'en': 'Alvin',
              'ja': 'アルビン'
            }
          }
        ]
        const handlePostChat = jest.fn()
        const wrapper = mountWithIntl<CommandInput>(
          <CommandInput
            characterLimit={140}
            handlePostChat={handlePostChat}
            inputChannel={village.InputChannel.public}
            language={village.Language.en}
            postCount={0}
            postCountLimit={10}
            suggesttedData={suggesttedData}
          />
        )

        wrapper.instance().updateSuggestable(true)
        wrapper.find('.vi--command--input--textarea').simulate('keyDown', {
          ctrlKey: true,
          key: 'Enter',
          metaKey: false
        })
        expect(wrapper.state()).toStrictEqual({
          caretPosition: 5,
          processing: false,
          suggestLeft: 0,
          suggestSelected: 0,
          suggestTop: 0,
          suggestable: false,
          suggesttedData,
          text: 'Alvin',
          trigerPosition: 0
        })
      })
    })
  })
  describe('handlePostChat', () => {
    test('sendable: true, validTextLength: true', () => {
      const handlePostChat = jest.fn()
      const wrapper = mountWithIntl<CommandInput>(
        <CommandInput
          characterLimit={140}
          handlePostChat={handlePostChat}
          inputChannel={village.InputChannel.public}
          language={village.Language.en}
          postCount={0}
          postCountLimit={10}
          suggesttedData={[]}
        />
      )
      const instance = wrapper.instance()
      const text = 'text'

      wrapper.setState({
        text
      })
      expect(instance.isSendable()).toBe(true)
      expect(instance.isValidTextLength()).toBe(true)
      instance.handlePostChat()

      expect(wrapper.state()).toStrictEqual({
        caretPosition: 0,
        processing: false,
        suggestLeft: 0,
        suggestSelected: 0,
        suggestTop: 0,
        suggestable: false,
        suggesttedData: [],
        text: '',
        trigerPosition: 0
      })
      expect(handlePostChat).toHaveBeenCalledWith('text')
    })
    test('sendable: false, validTextLength: true', () => {
      const handlePostChat = jest.fn()
      const wrapper = mountWithIntl<CommandInput>(
        <CommandInput
          characterLimit={140}
          handlePostChat={handlePostChat}
          inputChannel={village.InputChannel.public}
          language={village.Language.en}
          postCount={10}
          postCountLimit={10}
          suggesttedData={[]}
        />
      )
      const instance = wrapper.instance()
      const text = 'text'

      wrapper.setState({
        text
      })
      expect(instance.isSendable()).toBe(false)
      expect(instance.isValidTextLength()).toBe(true)
      instance.handlePostChat()

      expect(wrapper.state()).toStrictEqual({
        caretPosition: 0,
        processing: false,
        suggestLeft: 0,
        suggestSelected: 0,
        suggestTop: 0,
        suggestable: false,
        suggesttedData: [],
        text,
        trigerPosition: 0
      })
      expect(handlePostChat).toHaveBeenCalledTimes(0)
    })
    test('sendable: true, validTextLength: false', () => {
      const handlePostChat = jest.fn()
      const wrapper = mountWithIntl<CommandInput>(
        <CommandInput
          characterLimit={140}
          handlePostChat={handlePostChat}
          inputChannel={village.InputChannel.public}
          language={village.Language.en}
          postCount={0}
          postCountLimit={10}
          suggesttedData={[]}
        />
      )
      const instance = wrapper.instance()
      const text = 'texttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttextt'

      wrapper.setState({
        text
      })
      expect(instance.isSendable()).toBe(true)
      expect(instance.isValidTextLength()).toBe(false)
      instance.handlePostChat()

      expect(wrapper.state()).toStrictEqual({
        caretPosition: 0,
        processing: false,
        suggestLeft: 0,
        suggestSelected: 0,
        suggestTop: 0,
        suggestable: false,
        suggesttedData: [],
        text,
        trigerPosition: 0
      })
      expect(handlePostChat).toHaveBeenCalledTimes(0)
    })
    test('sendable: false, validTextLength: false', () => {
      const handlePostChat = jest.fn()
      const wrapper = mountWithIntl<CommandInput>(
        <CommandInput
          characterLimit={140}
          handlePostChat={handlePostChat}
          inputChannel={village.InputChannel.public}
          language={village.Language.en}
          postCount={10}
          postCountLimit={10}
          suggesttedData={[]}
        />
      )
      const instance = wrapper.instance()
      const text = 'texttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttextt'

      wrapper.setState({
        text
      })
      expect(instance.isSendable()).toBe(false)
      expect(instance.isValidTextLength()).toBe(false)
      instance.handlePostChat()

      expect(wrapper.state()).toStrictEqual({
        caretPosition: 0,
        processing: false,
        suggestLeft: 0,
        suggestSelected: 0,
        suggestTop: 0,
        suggestable: false,
        suggesttedData: [],
        text,
        trigerPosition: 0
      })
      expect(handlePostChat).toHaveBeenCalledTimes(0)
    })
    test('onClick', () => {
      const handlePostChat = jest.fn()
      const wrapper = mountWithIntl<CommandInput>(
        <CommandInput
          characterLimit={140}
          handlePostChat={handlePostChat}
          inputChannel={village.InputChannel.public}
          language={village.Language.en}
          postCount={0}
          postCountLimit={10}
          suggesttedData={[]}
        />
      )

      wrapper.instance().updateText('text')
      wrapper.find('.vi--command--input--send').simulate('click')
      expect(wrapper.state()).toStrictEqual({
        caretPosition: 0,
        processing: false,
        suggestLeft: 0,
        suggestSelected: 0,
        suggestTop: 0,
        suggestable: false,
        suggesttedData: [],
        text: '',
        trigerPosition: 0
      })
    })
  })
  test('handleSuggestClick', () => {
    const handlePostChat = jest.fn()
    const wrapper = mountWithIntl<CommandInput>(
      <CommandInput
        characterLimit={140}
        handlePostChat={handlePostChat}
        inputChannel={village.InputChannel.public}
        language={village.Language.en}
        postCount={0}
        postCountLimit={10}
        suggesttedData={[]}
      />
    )

    wrapper.setState({
      caretPosition: 5,
      suggestLeft: 65,
      suggestSelected: 0,
      suggestTop: 20,
      suggestable: true,
      text: 'aaaa@',
      trigerPosition: 4
    })
    wrapper.instance().handleSuggestClick('suggest')

    expect(wrapper.state()).toStrictEqual({
      caretPosition: 11,
      processing: false,
      suggestLeft: 65,
      suggestSelected: 0,
      suggestTop: 20,
      suggestable: false,
      suggesttedData: [],
      text: 'aaaasuggest',
      trigerPosition: 4
    })
  })
  describe('handleTextChange', () => {
    describe('text[pos] === Triger.At', () => {
      describe('text[pos - 1] === Triger.At', () => {
        test('"@" -> "@@"', () => {
          const handlePostChat = jest.fn()
          const wrapper = mountWithIntl<CommandInput>(
            <CommandInput
              characterLimit={140}
              handlePostChat={handlePostChat}
              inputChannel={village.InputChannel.public}
              language={village.Language.en}
              postCount={0}
              postCountLimit={10}
              suggesttedData={[]}
            />
          )

          wrapper.instance().handleTextChange({
            caretPosition: 1,
            text: '@'
          })
          wrapper.instance().handleTextChange({
            caretPosition: 2,
            text: '@@'
          })
          expect(wrapper.state()).toStrictEqual({
            caretPosition: 2,
            processing: false,
            suggestLeft: 1,
            suggestSelected: 0,
            suggestTop: 1,
            suggestable: false,
            suggesttedData: [],
            text: '@@',
            trigerPosition: 0
          })
        })
      })
      describe('text[pos - 1] !== Triger.At', () => {
        test('"@" -> "@a"', () => {
          const handlePostChat = jest.fn()
          const wrapper = mountWithIntl<CommandInput>(
            <CommandInput
              characterLimit={140}
              handlePostChat={handlePostChat}
              inputChannel={village.InputChannel.public}
              language={village.Language.en}
              postCount={0}
              postCountLimit={10}
              suggesttedData={[]}
            />
          )

          wrapper.instance().handleTextChange({
            caretPosition: 1,
            text: '@'
          })
          wrapper.instance().handleTextChange({
            caretPosition: 2,
            text: '@a'
          })
          expect(wrapper.state()).toStrictEqual({
            caretPosition: 2,
            processing: false,
            suggestLeft: 1,
            suggestSelected: 0,
            suggestTop: 1,
            suggestable: true,
            suggesttedData: [],
            text: '@a',
            trigerPosition: 0
          })
        })
      })
    })
    describe('text[pos] === Triger.Space', () => {
      test('"@" -> "@ "', () => {
        const handlePostChat = jest.fn()
        const wrapper = mountWithIntl<CommandInput>(
          <CommandInput
            characterLimit={140}
            handlePostChat={handlePostChat}
            inputChannel={village.InputChannel.public}
            language={village.Language.en}
            postCount={0}
            postCountLimit={10}
            suggesttedData={[]}
          />
        )

        wrapper.instance().handleTextChange({
          caretPosition: 1,
          text: '@'
        })
        wrapper.instance().handleTextChange({
          caretPosition: 2,
          text: '@ '
        })
        expect(wrapper.state()).toStrictEqual({
          caretPosition: 2,
          processing: false,
          suggestLeft: 1,
          suggestSelected: 0,
          suggestTop: 1,
          suggestable: false,
          suggesttedData: [],
          text: '@ ',
          trigerPosition: 0
        })
      })
    })
    describe('caretPosition <= this.state.trigerPosition', () => {
      test('"@" -> ""', () => {
        const handlePostChat = jest.fn()
        const wrapper = mountWithIntl<CommandInput>(
          <CommandInput
            characterLimit={140}
            handlePostChat={handlePostChat}
            inputChannel={village.InputChannel.public}
            language={village.Language.en}
            postCount={0}
            postCountLimit={10}
            suggesttedData={[]}
          />
        )

        wrapper.instance().handleTextChange({
          caretPosition: 1,
          text: '@'
        })
        wrapper.instance().handleTextChange({
          caretPosition: 0,
          text: ''
        })
        expect(wrapper.state()).toStrictEqual({
          caretPosition: 0,
          processing: false,
          suggestLeft: 1,
          suggestSelected: 0,
          suggestTop: 1,
          suggestable: false,
          suggesttedData: [],
          text: '',
          trigerPosition: 0
        })
      })
    })
    describe('suggestable === true', () => {
      const suggesttedData = [
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
        },
        {
          id: 'Dieter',
          name: {
            'en': 'Dieter',
            'ja': 'ディーター'
          }
        },
        {
          id: 'Gert',
          name: {
            'en': 'Gert',
            'ja': 'ゲルト'
          }
        },
        {
          id: 'Jacob',
          name: {
            'en': 'Jacob',
            'ja': 'ヤコブ'
          }
        },
        {
          id: 'Joachim',
          name: {
            'en': 'Joachim',
            'ja': 'ヨアヒム'
          }
        },
        {
          id: 'Lisa',
          name: {
            'en': 'Lisa',
            'ja': 'リーザ'
          }
        },
        {
          id: 'Moritz',
          name: {
            'en': 'Moritz',
            'ja': 'モーリッツ'
          }
        },
        {
          id: 'Nicholas',
          name: {
            'en': 'Nicholas',
            'ja': 'ニコラス'
          }
        },
        {
          id: 'Otto',
          name: {
            'en': 'Otto',
            'ja': 'オットー'
          }
        },
        {
          id: 'Pamela',
          name: {
            'en': 'Pamela',
            'ja': 'パメラ'
          }
        },
        {
          id: 'Peter',
          name: {
            'en': 'Peter',
            'ja': 'ペーター'
          }
        },
        {
          id: 'Simson',
          name: {
            'en': 'Simson',
            'ja': 'ジムゾン'
          }
        },
        {
          id: 'Thomas',
          name: {
            'en': 'Thomas',
            'ja': 'トーマス'
          }
        },
        {
          id: 'Walter',
          name: {
            'en': 'Walter',
            'ja': 'ヴァルター'
          }
        }
      ]

      test('"@" -> "@alvin"', () => {
        const handlePostChat = jest.fn()
        const wrapper = mountWithIntl<CommandInput>(
          <CommandInput
            characterLimit={140}
            handlePostChat={handlePostChat}
            inputChannel={village.InputChannel.public}
            language={village.Language.en}
            postCount={0}
            postCountLimit={10}
            suggesttedData={suggesttedData}
          />
        )

        wrapper.instance().handleTextChange({
          caretPosition: 1,
          text: '@'
        })
        wrapper.instance().handleTextChange({
          caretPosition: 6,
          text: '@alvin'
        })
        expect(wrapper.state()).toStrictEqual({
          caretPosition: 6,
          processing: false,
          suggestLeft: 1,
          suggestSelected: 0,
          suggestTop: 1,
          suggestable: true,
          suggesttedData: [
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
            },
            {
              id: 'Lisa',
              name: {
                'en': 'Lisa',
                'ja': 'リーザ'
              }
            }
          ],
          text: '@alvin',
          trigerPosition: 0
        })
      })
      test('"@" -> "@catalina", suggestSelected === 1', () => {
        const handlePostChat = jest.fn()
        const wrapper = mountWithIntl<CommandInput>(
          <CommandInput
            characterLimit={140}
            handlePostChat={handlePostChat}
            inputChannel={village.InputChannel.public}
            language={village.Language.en}
            postCount={0}
            postCountLimit={10}
            suggesttedData={suggesttedData}
          />
        )

        wrapper.instance().handleTextChange({
          caretPosition: 1,
          text: '@'
        })
        wrapper.find('.vi--command--input--textarea').simulate('keyDown', {
          key: Key.ArrowDown
        })
        expect(wrapper.state()).toStrictEqual({
          caretPosition: 1,
          processing: false,
          suggestLeft: 1,
          suggestSelected: 1,
          suggestTop: 1,
          suggestable: true,
          suggesttedData,
          text: '@',
          trigerPosition: 0
        })
        wrapper.instance().handleTextChange({
          caretPosition: 9,
          text: '@catalina'
        })
        expect(wrapper.state()).toStrictEqual({
          caretPosition: 9,
          processing: false,
          suggestLeft: 1,
          suggestSelected: 0,
          suggestTop: 1,
          suggestable: true,
          suggesttedData: [
            {
              id: 'Catalina',
              name: {
                'en': 'Catalina',
                'ja': 'カタリナ'
              }
            }
          ],
          text: '@catalina',
          trigerPosition: 0
        })
      })
    })
    test('onChange', () => {
      const handlePostChat = jest.fn()
      const wrapper = mountWithIntl<CommandInput>(
        <CommandInput
          characterLimit={140}
          handlePostChat={handlePostChat}
          inputChannel={village.InputChannel.public}
          language={village.Language.en}
          postCount={0}
          postCountLimit={10}
          suggesttedData={[]}
        />
      )

      wrapper.find('.vi--command--input--textarea').simulate('change', {
        target: {
          selectionEnd: 1,
          value: 'a'
        }
      })
      expect(wrapper.state()).toStrictEqual({
        caretPosition: 1,
        processing: false,
        suggestLeft: 0,
        suggestSelected: 0,
        suggestTop: 0,
        suggestable: false,
        suggesttedData: [],
        text: 'a',
        trigerPosition: 0
      })
    })
  })
  describe('isSendable', () => {
    test('inputChannel: grave', () => {
      const handlePostChat = jest.fn()
      const wrapper = mountWithIntl<CommandInput>(
        <CommandInput
          characterLimit={140}
          handlePostChat={handlePostChat}
          inputChannel={village.InputChannel.grave}
          language={village.Language.en}
          postCount={-1}
          postCountLimit={-1}
          suggesttedData={[]}
        />
      )

      expect(wrapper.instance().isSendable()).toBe(true)
    })
    describe('inputChannel: limited', () => {
      test('postCount < postCountLimit', () => {
        const handlePostChat = jest.fn()
        const wrapper = mountWithIntl<CommandInput>(
          <CommandInput
            characterLimit={140}
            handlePostChat={handlePostChat}
            inputChannel={village.InputChannel.limited}
            language={village.Language.en}
            postCount={0}
            postCountLimit={10}
            suggesttedData={[]}
          />
        )

        expect(wrapper.instance().isSendable()).toBe(true)
      })
      test('postCount === postCountLimit', () => {
        const handlePostChat = jest.fn()
        const wrapper = mountWithIntl<CommandInput>(
          <CommandInput
            characterLimit={140}
            handlePostChat={handlePostChat}
            inputChannel={village.InputChannel.limited}
            language={village.Language.en}
            postCount={10}
            postCountLimit={10}
            suggesttedData={[]}
          />
        )

        expect(wrapper.instance().isSendable()).toBe(false)
      })
      test('postCount > postCountLimit', () => {
        const handlePostChat = jest.fn()
        const wrapper = mountWithIntl<CommandInput>(
          <CommandInput
            characterLimit={140}
            handlePostChat={handlePostChat}
            inputChannel={village.InputChannel.limited}
            language={village.Language.en}
            postCount={11}
            postCountLimit={10}
            suggesttedData={[]}
          />
        )

        expect(wrapper.instance().isSendable()).toBe(false)
      })
    })
    test('inputChannel: private', () => {
      const handlePostChat = jest.fn()
      const wrapper = mountWithIntl<CommandInput>(
        <CommandInput
          characterLimit={140}
          handlePostChat={handlePostChat}
          inputChannel={village.InputChannel.private}
          language={village.Language.en}
          postCount={-1}
          postCountLimit={-1}
          suggesttedData={[]}
        />
      )

      expect(wrapper.instance().isSendable()).toBe(true)
    })
    test('inputChannel: postMortem', () => {
      const handlePostChat = jest.fn()
      const wrapper = mountWithIntl<CommandInput>(
        <CommandInput
          characterLimit={140}
          handlePostChat={handlePostChat}
          inputChannel={village.InputChannel.postMortem}
          language={village.Language.en}
          postCount={-1}
          postCountLimit={-1}
          suggesttedData={[]}
        />
      )

      expect(wrapper.instance().isSendable()).toBe(true)
    })
    describe('inputChannel: public', () => {
      test('postCount < postCountLimit', () => {
        const handlePostChat = jest.fn()
        const wrapper = mountWithIntl<CommandInput>(
          <CommandInput
            characterLimit={140}
            handlePostChat={handlePostChat}
            inputChannel={village.InputChannel.public}
            language={village.Language.en}
            postCount={0}
            postCountLimit={10}
            suggesttedData={[]}
          />
        )

        expect(wrapper.instance().isSendable()).toBe(true)
      })
      test('postCount === postCountLimit', () => {
        const handlePostChat = jest.fn()
        const wrapper = mountWithIntl<CommandInput>(
          <CommandInput
            characterLimit={140}
            handlePostChat={handlePostChat}
            inputChannel={village.InputChannel.public}
            language={village.Language.en}
            postCount={10}
            postCountLimit={10}
            suggesttedData={[]}
          />
        )

        expect(wrapper.instance().isSendable()).toBe(false)
      })
      test('postCount > postCountLimit', () => {
        const handlePostChat = jest.fn()
        const wrapper = mountWithIntl<CommandInput>(
          <CommandInput
            characterLimit={140}
            handlePostChat={handlePostChat}
            inputChannel={village.InputChannel.public}
            language={village.Language.en}
            postCount={11}
            postCountLimit={10}
            suggesttedData={[]}
          />
        )

        expect(wrapper.instance().isSendable()).toBe(false)
      })
    })
  })
  describe('isValidTextLength', () => {
    test('textCount === 0', () => {
      const handlePostChat = jest.fn()
      const wrapper = mountWithIntl<CommandInput>(
        <CommandInput
          characterLimit={140}
          handlePostChat={handlePostChat}
          inputChannel={village.InputChannel.grave}
          language={village.Language.en}
          postCount={-1}
          postCountLimit={-1}
          suggesttedData={[]}
        />
      )

      wrapper.setState({
        text: ''
      })
      expect(wrapper.instance().isValidTextLength()).toBe(false)
    })
    test('textCount === 1', () => {
      const handlePostChat = jest.fn()
      const wrapper = mountWithIntl<CommandInput>(
        <CommandInput
          characterLimit={140}
          handlePostChat={handlePostChat}
          inputChannel={village.InputChannel.grave}
          language={village.Language.en}
          postCount={-1}
          postCountLimit={-1}
          suggesttedData={[]}
        />
      )

      wrapper.setState({
        text: 'a'
      })
      expect(wrapper.instance().isValidTextLength()).toBe(true)
    })
    test('0 < textCount < characterLimit', () => {
      const handlePostChat = jest.fn()
      const wrapper = mountWithIntl<CommandInput>(
        <CommandInput
          characterLimit={140}
          handlePostChat={handlePostChat}
          inputChannel={village.InputChannel.grave}
          language={village.Language.en}
          postCount={-1}
          postCountLimit={-1}
          suggesttedData={[]}
        />
      )

      wrapper.setState({
        text: 'text'
      })
      expect(wrapper.instance().isValidTextLength()).toBe(true)
    })
    test('textCount === characterLimit', () => {
      const handlePostChat = jest.fn()
      const wrapper = mountWithIntl<CommandInput>(
        <CommandInput
          characterLimit={140}
          handlePostChat={handlePostChat}
          inputChannel={village.InputChannel.grave}
          language={village.Language.en}
          postCount={-1}
          postCountLimit={-1}
          suggesttedData={[]}
        />
      )

      wrapper.setState({
        text: 'texttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttext'
      })
      expect(wrapper.instance().isValidTextLength()).toBe(true)
    })
    test('textCount === characterLimit + 1', () => {
      const handlePostChat = jest.fn()
      const wrapper = mountWithIntl<CommandInput>(
        <CommandInput
          characterLimit={140}
          handlePostChat={handlePostChat}
          inputChannel={village.InputChannel.grave}
          language={village.Language.en}
          postCount={-1}
          postCountLimit={-1}
          suggesttedData={[]}
        />
      )

      wrapper.setState({
        text: 'texttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttextt'
      })
      expect(wrapper.instance().isValidTextLength()).toBe(false)
    })
    test('textCount > characterLimit', () => {
      const handlePostChat = jest.fn()
      const wrapper = mountWithIntl<CommandInput>(
        <CommandInput
          characterLimit={140}
          handlePostChat={handlePostChat}
          inputChannel={village.InputChannel.grave}
          language={village.Language.en}
          postCount={-1}
          postCountLimit={-1}
          suggesttedData={[]}
        />
      )

      wrapper.setState({
        text: 'texttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttext'
      })
      expect(wrapper.instance().isValidTextLength()).toBe(false)
    })
  })
  test('updateCaretPosition', () => {
    const handlePostChat = jest.fn()
    const wrapper = mountWithIntl<CommandInput>(
      <CommandInput
        characterLimit={140}
        handlePostChat={handlePostChat}
        inputChannel={village.InputChannel.public}
        language={village.Language.en}
        postCount={0}
        postCountLimit={10}
        suggesttedData={[]}
      />
    )

    wrapper.instance().updateCaretPosition(1)
    expect(wrapper.state().caretPosition).toBe(1)
  })
  describe('updateProcessing', () => {
    test('updateProcessing', () => {
      const handlePostChat = jest.fn()
      const wrapper = mountWithIntl<CommandInput>(
        <CommandInput
          characterLimit={140}
          handlePostChat={handlePostChat}
          inputChannel={village.InputChannel.public}
          language={village.Language.en}
          postCount={0}
          postCountLimit={10}
          suggesttedData={[]}
        />
      )

      wrapper.instance().updateProcessing(true)
      expect(wrapper.state().processing).toBe(true)
    })
    test('onCompositionEnd', () => {
      const handlePostChat = jest.fn()
      const wrapper = mountWithIntl<CommandInput>(
        <CommandInput
          characterLimit={140}
          handlePostChat={handlePostChat}
          inputChannel={village.InputChannel.public}
          language={village.Language.en}
          postCount={0}
          postCountLimit={10}
          suggesttedData={[]}
        />
      )

      wrapper.find('.vi--command--input--textarea').simulate('compositionEnd')
      expect(wrapper.state().processing).toBe(false)
    })
    test('onCompositionStart', () => {
      const handlePostChat = jest.fn()
      const wrapper = mountWithIntl<CommandInput>(
        <CommandInput
          characterLimit={140}
          handlePostChat={handlePostChat}
          inputChannel={village.InputChannel.public}
          language={village.Language.en}
          postCount={0}
          postCountLimit={10}
          suggesttedData={[]}
        />
      )

      wrapper.find('.vi--command--input--textarea').simulate('compositionStart')
      expect(wrapper.state().processing).toBe(true)
    })
  })
  describe('updateSuggestable', () => {
    test('true', () => {
      const handlePostChat = jest.fn()
      const wrapper = mountWithIntl<CommandInput>(
        <CommandInput
          characterLimit={140}
          handlePostChat={handlePostChat}
          inputChannel={village.InputChannel.public}
          language={village.Language.en}
          postCount={0}
          postCountLimit={10}
          suggesttedData={[]}
        />
      )

      wrapper.instance().updateSuggestable(true)
      expect(wrapper.state().suggestSelected).toBe(0)
      expect(wrapper.state().suggestable).toBe(true)
      expect(wrapper.state().suggesttedData).toStrictEqual([])
    })
    test('false', () => {
      const handlePostChat = jest.fn()
      const wrapper = mountWithIntl<CommandInput>(
        <CommandInput
          characterLimit={140}
          handlePostChat={handlePostChat}
          inputChannel={village.InputChannel.public}
          language={village.Language.en}
          postCount={0}
          postCountLimit={10}
          suggesttedData={[]}
        />
      )

      wrapper.instance().updateSuggestable(false)
      expect(wrapper.state().suggestSelected).toBe(0)
      expect(wrapper.state().suggestable).toBe(false)
      expect(wrapper.state().suggesttedData).toStrictEqual([])
    })
  })
  test('updateText', () => {
    const handlePostChat = jest.fn()
    const wrapper = mountWithIntl<CommandInput>(
      <CommandInput
        characterLimit={140}
        handlePostChat={handlePostChat}
        inputChannel={village.InputChannel.public}
        language={village.Language.en}
        postCount={0}
        postCountLimit={10}
        suggesttedData={[]}
      />
    )

    wrapper.instance().updateText('text')
    expect(wrapper.state().text).toBe('text')
  })
  test('updateTrigerPosition', () => {
    const handlePostChat = jest.fn()
    const wrapper = mountWithIntl<CommandInput>(
      <CommandInput
        characterLimit={140}
        handlePostChat={handlePostChat}
        inputChannel={village.InputChannel.public}
        language={village.Language.en}
        postCount={0}
        postCountLimit={10}
        suggesttedData={[]}
      />
    )

    wrapper.instance().updateTrigerPosition(0)
    expect(wrapper.state().suggestLeft).toBe(1)
    expect(wrapper.state().suggestTop).toBe(1)
    expect(wrapper.state().trigerPosition).toBe(0)
  })
})

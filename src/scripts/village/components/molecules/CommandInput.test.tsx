import * as React from 'react'
import {
  CommandInput,
  Key
} from './CommandInput'
import {CommandInputSuggest} from '../atoms/CommandInputSuggest'
import {getMessages} from '../../i18n'
import {initRenderer} from '../../tools'
import {village} from '../../types'

const {mountWithIntl} = initRenderer(village.Language.en, getMessages(village.Language.en))

describe('render', () => {
  describe('inputChannel', () => {
    test('grave', () => {
      const handlePostChat = jest.fn()
      const wrapper = mountWithIntl(
        <CommandInput
          handlePostChat={handlePostChat}
          inputChannel={village.InputChannel.grave}
          language={village.Language.en}
          maxLengthOfUnicodeCodePoints={140}
          maxNumberOfChatMessages={-1}
          navigatable
          numberOfChatMessages={-1}
          suggestedData={[]}
        />
      )

      expect(wrapper.find('.vi--command--input--textarea').hasClass('grave')).toBe(true)
      expect(wrapper.find('.vi--command--input--textarea').is('[placeholder="Graveyard"]')).toBe(true)
      expect(wrapper.find('.vi--command--input--textarea').is('[value=""]')).toBe(true)
      expect(wrapper.find('.vi--command--input--send').is('[disabled=true]')).toBe(true)
      expect(wrapper.find('.vi--command--input--send').text()).toBe('Send')
      expect(wrapper.html()).toMatchSnapshot()
      expect(handlePostChat).toHaveBeenCalledTimes(0)
    })
    test('werewolf', () => {
      const handlePostChat = jest.fn()
      const wrapper = mountWithIntl(
        <CommandInput
          handlePostChat={handlePostChat}
          inputChannel={village.InputChannel.werewolf}
          language={village.Language.en}
          maxLengthOfUnicodeCodePoints={140}
          maxNumberOfChatMessages={10}
          navigatable
          numberOfChatMessages={0}
          suggestedData={[]}
        />
      )

      expect(wrapper.find('.vi--command--input--textarea').hasClass('werewolf')).toBe(true)
      expect(wrapper.find('.vi--command--input--textarea').is('[placeholder="Werewolf"]')).toBe(true)
      expect(wrapper.find('.vi--command--input--textarea').is('[value=""]')).toBe(true)
      expect(wrapper.find('.vi--command--input--send').is('[disabled=true]')).toBe(true)
      expect(wrapper.find('.vi--command--input--send').text()).toBe('Send')
      expect(wrapper.html()).toMatchSnapshot()
      expect(handlePostChat).toHaveBeenCalledTimes(0)
    })
    test('private', () => {
      const handlePostChat = jest.fn()
      const wrapper = mountWithIntl(
        <CommandInput
          handlePostChat={handlePostChat}
          inputChannel={village.InputChannel.private}
          language={village.Language.en}
          maxLengthOfUnicodeCodePoints={140}
          maxNumberOfChatMessages={-1}
          navigatable
          numberOfChatMessages={-1}
          suggestedData={[]}
        />
      )

      expect(wrapper.find('.vi--command--input--textarea').hasClass('private')).toBe(true)
      expect(wrapper.find('.vi--command--input--textarea').is('[placeholder="Private"]')).toBe(true)
      expect(wrapper.find('.vi--command--input--textarea').is('[value=""]')).toBe(true)
      expect(wrapper.find('.vi--command--input--send').is('[disabled=true]')).toBe(true)
      expect(wrapper.find('.vi--command--input--send').text()).toBe('Send')
      expect(wrapper.html()).toMatchSnapshot()
      expect(handlePostChat).toHaveBeenCalledTimes(0)
    })
    test('post mortem', () => {
      const handlePostChat = jest.fn()
      const wrapper = mountWithIntl(
        <CommandInput
          handlePostChat={handlePostChat}
          inputChannel={village.InputChannel.postMortem}
          language={village.Language.en}
          maxLengthOfUnicodeCodePoints={140}
          maxNumberOfChatMessages={-1}
          navigatable
          numberOfChatMessages={-1}
          suggestedData={[]}
        />
      )

      expect(wrapper.find('.vi--command--input--textarea').hasClass('postMortem')).toBe(true)
      expect(wrapper.find('.vi--command--input--textarea').is('[placeholder="Post-mortem"]')).toBe(true)
      expect(wrapper.find('.vi--command--input--textarea').is('[value=""]')).toBe(true)
      expect(wrapper.find('.vi--command--input--send').is('[disabled=true]')).toBe(true)
      expect(wrapper.find('.vi--command--input--send').text()).toBe('Send')
      expect(wrapper.html()).toMatchSnapshot()
      expect(handlePostChat).toHaveBeenCalledTimes(0)
    })
    test('public', () => {
      const handlePostChat = jest.fn()
      const wrapper = mountWithIntl(
        <CommandInput
          handlePostChat={handlePostChat}
          inputChannel={village.InputChannel.public}
          language={village.Language.en}
          maxLengthOfUnicodeCodePoints={140}
          maxNumberOfChatMessages={10}
          navigatable
          numberOfChatMessages={0}
          suggestedData={[]}
        />
      )

      expect(wrapper.find('.vi--command--input--textarea').hasClass('public')).toBe(true)
      expect(wrapper.find('.vi--command--input--textarea').is('[placeholder="Public"]')).toBe(true)
      expect(wrapper.find('.vi--command--input--textarea').is('[value=""]')).toBe(true)
      expect(wrapper.find('.vi--command--input--send').is('[disabled=true]')).toBe(true)
      expect(wrapper.find('.vi--command--input--send').text()).toBe('Send')
      expect(wrapper.html()).toMatchSnapshot()
      expect(handlePostChat).toHaveBeenCalledTimes(0)
    })
  })
})
describe('handleKeyDown', () => {
  test('compositing === true', () => {
    const handlePostChat = jest.fn()
    const wrapper = mountWithIntl(
      <CommandInput
        handlePostChat={handlePostChat}
        inputChannel={village.InputChannel.public}
        language={village.Language.en}
        maxLengthOfUnicodeCodePoints={140}
        maxNumberOfChatMessages={10}
        navigatable
        numberOfChatMessages={0}
        suggestedData={[]}
      />
    )

    wrapper.find('.vi--command--input--textarea').simulate('keyDown', {
      ctrlKey: true,
      key: Key.Enter,
      metaKey: false
    })
    expect(handlePostChat).not.toHaveBeenCalled()
  })
  describe('compositing === false', () => {
    describe('suggestable === false, suggestedResult.length <= 0', () => {
      test('(event.ctrlKey || event.metaKey) === true, event.key === Key.Enter', () => {
        const handlePostChat = jest.fn()
        const wrapper = mountWithIntl(
          <CommandInput
            handlePostChat={handlePostChat}
            inputChannel={village.InputChannel.public}
            language={village.Language.en}
            maxLengthOfUnicodeCodePoints={140}
            maxNumberOfChatMessages={10}
            navigatable
            numberOfChatMessages={0}
            suggestedData={[]}
          />
        )

        wrapper.find('.vi--command--input--textarea').simulate('change', {
          target: {
            selectionEnd: 4,
            value: 'text'
          }
        })
        wrapper.find('.vi--command--input--textarea').simulate('keyDown', {
          ctrlKey: true,
          key: Key.Enter,
          metaKey: false
        })
        expect(wrapper.find('.vi--command--input--textarea').props().value).toBe('')
        expect(handlePostChat).toHaveBeenCalled()
      })
      test('(event.ctrlKey || event.metaKey) === false, event.key === Key.Enter', () => {
        const handlePostChat = jest.fn()
        const wrapper = mountWithIntl(
          <CommandInput
            handlePostChat={handlePostChat}
            inputChannel={village.InputChannel.public}
            language={village.Language.en}
            maxLengthOfUnicodeCodePoints={140}
            maxNumberOfChatMessages={10}
            navigatable
            numberOfChatMessages={0}
            suggestedData={[]}
          />
        )

        wrapper.find('.vi--command--input--textarea').simulate('change', {
          target: {
            selectionEnd: 4,
            value: 'text'
          }
        })
        wrapper.find('.vi--command--input--textarea').simulate('keyDown', {
          ctrlKey: false,
          key: Key.Enter,
          metaKey: false
        })

        expect(wrapper.find('.vi--command--input--textarea').props().value).toBe('text')
        expect(handlePostChat).not.toHaveBeenCalled()
      })
      test('(event.ctrlKey || event.metaKey) === true, event.key !== Key.Enter', () => {
        const handlePostChat = jest.fn()
        const wrapper = mountWithIntl(
          <CommandInput
            handlePostChat={handlePostChat}
            inputChannel={village.InputChannel.public}
            language={village.Language.en}
            maxLengthOfUnicodeCodePoints={140}
            maxNumberOfChatMessages={10}
            navigatable
            numberOfChatMessages={0}
            suggestedData={[]}
          />
        )

        wrapper.find('.vi--command--input--textarea').simulate('change', {
          target: {
            selectionEnd: 4,
            value: 'text'
          }
        })
        wrapper.find('.vi--command--input--textarea').simulate('keyDown', {
          ctrlKey: true,
          key: Key.Tab,
          metaKey: false
        })
        expect(wrapper.find('.vi--command--input--textarea').props().value).toBe('text')
        expect(handlePostChat).not.toHaveBeenCalled()
      })
    })
    describe('suggestable === true, suggestedData.length <= 0', () => {
      test('(event.ctrlKey || event.metaKey) === true, event.key === Key.Enter', () => {
        const handlePostChat = jest.fn()
        const wrapper = mountWithIntl(
          <CommandInput
            handlePostChat={handlePostChat}
            inputChannel={village.InputChannel.public}
            language={village.Language.en}
            maxLengthOfUnicodeCodePoints={140}
            maxNumberOfChatMessages={10}
            navigatable
            numberOfChatMessages={0}
            suggestedData={[]}
          />
        )

        wrapper.find('.vi--command--input--textarea').simulate('change', {
          target: {
            selectionEnd: 5,
            value: '@text'
          }
        })
        wrapper.find('.vi--command--input--textarea').simulate('keyDown', {
          ctrlKey: true,
          key: Key.Enter,
          metaKey: false
        })
        expect(wrapper.find('.vi--command--input--textarea').props().value).toBe('')
        expect(handlePostChat).toHaveBeenCalled()
      })
      test('(event.ctrlKey || event.metaKey) === false, event.key === Key.Enter', () => {
        const handlePostChat = jest.fn()
        const wrapper = mountWithIntl(
          <CommandInput
            handlePostChat={handlePostChat}
            inputChannel={village.InputChannel.public}
            language={village.Language.en}
            maxLengthOfUnicodeCodePoints={140}
            maxNumberOfChatMessages={10}
            navigatable
            numberOfChatMessages={0}
            suggestedData={[]}
          />
        )

        wrapper.find('.vi--command--input--textarea').simulate('change', {
          target: {
            selectionEnd: 5,
            value: '@text'
          }
        })
        wrapper.find('.vi--command--input--textarea').simulate('keyDown', {
          ctrlKey: false,
          key: Key.Enter,
          metaKey: false
        })
        expect(wrapper.find('.vi--command--input--textarea').props().value).toBe('@text')
        expect(handlePostChat).not.toHaveBeenCalled()
      })
      test('(event.ctrlKey || event.metaKey) === true, event.key !== Key.Enter', () => {
        const handlePostChat = jest.fn()
        const wrapper = mountWithIntl(
          <CommandInput
            handlePostChat={handlePostChat}
            inputChannel={village.InputChannel.public}
            language={village.Language.en}
            maxLengthOfUnicodeCodePoints={140}
            maxNumberOfChatMessages={10}
            navigatable
            numberOfChatMessages={0}
            suggestedData={[]}
          />
        )

        wrapper.find('.vi--command--input--textarea').simulate('change', {
          target: {
            selectionEnd: 4,
            value: '@text'
          }
        })
        wrapper.find('.vi--command--input--textarea').simulate('keyDown', {
          ctrlKey: true,
          key: Key.Tab,
          metaKey: false
        })
        expect(wrapper.find('.vi--command--input--textarea').props().value).toBe('@text')
        expect(handlePostChat).not.toHaveBeenCalled()
      })
    })
    describe('suggestable === false, suggestedData.length > 0', () => {
      const suggestedData = [
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
        const wrapper = mountWithIntl(
          <CommandInput
            handlePostChat={handlePostChat}
            inputChannel={village.InputChannel.public}
            language={village.Language.en}
            maxLengthOfUnicodeCodePoints={140}
            maxNumberOfChatMessages={10}
            navigatable
            numberOfChatMessages={0}
            suggestedData={suggestedData}
          />
        )

        wrapper.find('.vi--command--input--textarea').simulate('change', {
          target: {
            selectionEnd: 4,
            value: 'text'
          }
        })
        wrapper.find('.vi--command--input--textarea').simulate('keyDown', {
          ctrlKey: true,
          key: Key.Enter,
          metaKey: false
        })
        expect(wrapper.find('.vi--command--input--textarea').props().value).toBe('')
        expect(handlePostChat).toHaveBeenCalled()
      })
      test('(event.ctrlKey || event.metaKey) === false, event.key === Key.Enter', () => {
        const handlePostChat = jest.fn()
        const wrapper = mountWithIntl(
          <CommandInput
            handlePostChat={handlePostChat}
            inputChannel={village.InputChannel.public}
            language={village.Language.en}
            maxLengthOfUnicodeCodePoints={140}
            maxNumberOfChatMessages={10}
            navigatable
            numberOfChatMessages={0}
            suggestedData={[]}
          />
        )

        wrapper.find('.vi--command--input--textarea').simulate('change', {
          target: {
            selectionEnd: 4,
            value: 'text'
          }
        })
        wrapper.find('.vi--command--input--textarea').simulate('keyDown', {
          ctrlKey: false,
          key: Key.Enter,
          metaKey: false
        })
        expect(wrapper.find('.vi--command--input--textarea').props().value).toBe('text')
        expect(handlePostChat).not.toHaveBeenCalled()
      })
      test('(event.ctrlKey || event.metaKey) === true, event.key !== Key.Enter', () => {
        const handlePostChat = jest.fn()
        const wrapper = mountWithIntl(
          <CommandInput
            handlePostChat={handlePostChat}
            inputChannel={village.InputChannel.public}
            language={village.Language.en}
            maxLengthOfUnicodeCodePoints={140}
            maxNumberOfChatMessages={10}
            navigatable
            numberOfChatMessages={0}
            suggestedData={[]}
          />
        )

        wrapper.find('.vi--command--input--textarea').simulate('change', {
          target: {
            selectionEnd: 4,
            value: 'text'
          }
        })
        wrapper.find('.vi--command--input--textarea').simulate('keyDown', {
          ctrlKey: true,
          key: Key.Tab,
          metaKey: false
        })
        expect(wrapper.find('.vi--command--input--textarea').props().value).toBe('text')
        expect(handlePostChat).not.toHaveBeenCalled()
      })
    })
    describe('suggestable === true, suggestedData.length > 0', () => {
      const suggestedData = [
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
          const wrapper = mountWithIntl(
            <CommandInput
              handlePostChat={handlePostChat}
              inputChannel={village.InputChannel.public}
              language={village.Language.en}
              maxLengthOfUnicodeCodePoints={140}
              maxNumberOfChatMessages={10}
              navigatable
              numberOfChatMessages={0}
              suggestedData={suggestedData}
            />
          )

          wrapper.find('.vi--command--input--textarea').simulate('change', {
            target: {
              selectionEnd: 5,
              value: '@text'
            }
          })
          expect(wrapper.find(CommandInputSuggest).props().suggestable).toBe(true)
          wrapper.find('.vi--command--input--textarea').simulate('keydown', {
            key: Key.ArrowLeft
          })
          expect(wrapper.find(CommandInputSuggest).props().suggestable).toBe(false)
          expect(wrapper.find('.vi--command--input--textarea').props().value).toBe('@text')
          expect(handlePostChat).not.toHaveBeenCalled()
        })
        test('ArrowRight', () => {
          const handlePostChat = jest.fn()
          const wrapper = mountWithIntl(
            <CommandInput
              handlePostChat={handlePostChat}
              inputChannel={village.InputChannel.public}
              language={village.Language.en}
              maxLengthOfUnicodeCodePoints={140}
              maxNumberOfChatMessages={10}
              navigatable
              numberOfChatMessages={0}
              suggestedData={suggestedData}
            />
          )

          wrapper.find('.vi--command--input--textarea').simulate('change', {
            target: {
              selectionEnd: 5,
              value: '@text'
            }
          })
          expect(wrapper.find(CommandInputSuggest).props().suggestable).toBe(true)
          wrapper.find('.vi--command--input--textarea').simulate('keydown', {
            key: Key.ArrowRight
          })
          expect(wrapper.find(CommandInputSuggest).props().suggestable).toBe(false)
          expect(wrapper.find('.vi--command--input--textarea').props().value).toBe('@text')
          expect(handlePostChat).not.toHaveBeenCalled()
        })
        test('ArrowDown', () => {
          const handlePostChat = jest.fn()
          const wrapper = mountWithIntl(
            <CommandInput
              handlePostChat={handlePostChat}
              inputChannel={village.InputChannel.public}
              language={village.Language.en}
              maxLengthOfUnicodeCodePoints={140}
              maxNumberOfChatMessages={10}
              navigatable
              numberOfChatMessages={0}
              suggestedData={suggestedData}
            />
          )

          wrapper.find('.vi--command--input--textarea').simulate('change', {
            target: {
              selectionEnd: 1,
              value: '@'
            }
          })
          expect(wrapper.find(CommandInputSuggest).props().selected).toBe(0)
          wrapper.find('.vi--command--input--textarea').simulate('keydown', {
            key: Key.ArrowDown
          })
          expect(wrapper.find(CommandInputSuggest).props().selected).toBe(1)
          wrapper.find('.vi--command--input--textarea').simulate('keydown', {
            key: Key.ArrowDown
          })
          expect(wrapper.find(CommandInputSuggest).props().selected).toBe(2)
          wrapper.find('.vi--command--input--textarea').simulate('keydown', {
            key: Key.ArrowDown
          })
          expect(wrapper.find(CommandInputSuggest).props().selected).toBe(0)
        })
        test('ArrowUp', () => {
          const handlePostChat = jest.fn()
          const wrapper = mountWithIntl(
            <CommandInput
              handlePostChat={handlePostChat}
              inputChannel={village.InputChannel.public}
              language={village.Language.en}
              maxLengthOfUnicodeCodePoints={140}
              maxNumberOfChatMessages={10}
              navigatable
              numberOfChatMessages={0}
              suggestedData={suggestedData}
            />
          )

          wrapper.find('.vi--command--input--textarea').simulate('change', {
            target: {
              selectionEnd: 1,
              value: '@'
            }
          })
          expect(wrapper.find(CommandInputSuggest).props().selected).toBe(0)
          wrapper.find('.vi--command--input--textarea').simulate('keydown', {
            key: Key.ArrowUp
          })
          expect(wrapper.find(CommandInputSuggest).props().selected).toBe(2)
          wrapper.find('.vi--command--input--textarea').simulate('keydown', {
            key: Key.ArrowUp
          })
          expect(wrapper.find(CommandInputSuggest).props().selected).toBe(1)
          wrapper.find('.vi--command--input--textarea').simulate('keydown', {
            key: Key.ArrowUp
          })
          expect(wrapper.find(CommandInputSuggest).props().selected).toBe(0)
        })
        test('Enter', () => {
          const handlePostChat = jest.fn()
          const wrapper = mountWithIntl(
            <CommandInput
              handlePostChat={handlePostChat}
              inputChannel={village.InputChannel.public}
              language={village.Language.en}
              maxLengthOfUnicodeCodePoints={140}
              maxNumberOfChatMessages={10}
              navigatable
              numberOfChatMessages={0}
              suggestedData={suggestedData}
            />
          )

          wrapper.find('.vi--command--input--textarea').simulate('change', {
            target: {
              selectionEnd: 1,
              value: '@'
            }
          })
          expect(wrapper.find(CommandInputSuggest).props().selected).toBe(0)
          wrapper.find('.vi--command--input--textarea').simulate('keydown', {
            key: Key.Enter
          })
          expect(wrapper.find(CommandInputSuggest).props().selected).toBe(0)
          expect(wrapper.find('.vi--command--input--textarea').props().value).toBe('Alvin')
        })
        test('Tab', () => {
          const handlePostChat = jest.fn()
          const wrapper = mountWithIntl(
            <CommandInput
              handlePostChat={handlePostChat}
              inputChannel={village.InputChannel.public}
              language={village.Language.en}
              maxLengthOfUnicodeCodePoints={140}
              maxNumberOfChatMessages={10}
              navigatable
              numberOfChatMessages={0}
              suggestedData={suggestedData}
            />
          )

          wrapper.find('.vi--command--input--textarea').simulate('change', {
            target: {
              selectionEnd: 1,
              value: '@'
            }
          })
          expect(wrapper.find(CommandInputSuggest).props().selected).toBe(0)
          wrapper.find('.vi--command--input--textarea').simulate('keydown', {
            key: Key.Enter
          })
          expect(wrapper.find(CommandInputSuggest).props().selected).toBe(0)
          expect(wrapper.find('.vi--command--input--textarea').props().value).toBe('Alvin')
        })
      })
    })
  })
  describe('postChat', () => {
    test('suggestable === true && suggestedData.length > 0', () => {
      const suggestedData = [
        {
          id: 'Alvin',
          name: {
            'en': 'Alvin',
            'ja': 'アルビン'
          }
        }
      ]
      const handlePostChat = jest.fn()
      const wrapper = mountWithIntl(
        <CommandInput
          handlePostChat={handlePostChat}
          inputChannel={village.InputChannel.public}
          language={village.Language.en}
          maxLengthOfUnicodeCodePoints={140}
          maxNumberOfChatMessages={10}
          navigatable
          numberOfChatMessages={0}
          suggestedData={suggestedData}
        />
      )

      wrapper.find('.vi--command--input--textarea').simulate('change', {
        target: {
          selectionEnd: 1,
          value: '@'
        }
      })
      wrapper.find('.vi--command--input--textarea').simulate('keyDown', {
        ctrlKey: true,
        key: 'Enter',
        metaKey: false
      })
      expect(wrapper.find('.vi--command--input--textarea').props().value).toBe('Alvin')
      expect(handlePostChat).not.toHaveBeenCalled()
    })
    test('suggestable === false && suggestedData.length > 0', () => {
      const suggestedData = [
        {
          id: 'Alvin',
          name: {
            'en': 'Alvin',
            'ja': 'アルビン'
          }
        }
      ]
      const handlePostChat = jest.fn()
      const wrapper = mountWithIntl(
        <CommandInput
          handlePostChat={handlePostChat}
          inputChannel={village.InputChannel.public}
          language={village.Language.en}
          maxLengthOfUnicodeCodePoints={140}
          maxNumberOfChatMessages={10}
          navigatable
          numberOfChatMessages={0}
          suggestedData={suggestedData}
        />
      )

      wrapper.find('.vi--command--input--textarea').simulate('change', {
        target: {
          selectionEnd: 1,
          value: 'a'
        }
      })
      wrapper.find('.vi--command--input--textarea').simulate('keyDown', {
        ctrlKey: true,
        key: 'Enter',
        metaKey: false
      })
      expect(wrapper.find('.vi--command--input--textarea').props().value).toBe('')
      expect(handlePostChat).toHaveBeenCalledWith('a')
    })
  })
})
describe('handlePostChat', () => {
  test('sendable: true, validTextLength: true', () => {
    const handlePostChat = jest.fn()
    const wrapper = mountWithIntl(
      <CommandInput
        handlePostChat={handlePostChat}
        inputChannel={village.InputChannel.public}
        language={village.Language.en}
        maxLengthOfUnicodeCodePoints={140}
        maxNumberOfChatMessages={10}
        navigatable
        numberOfChatMessages={0}
        suggestedData={[]}
      />
    )
    const text = 'text'

    wrapper.find('.vi--command--input--textarea').simulate('change', {
      target: {
        selectionEnd: 4,
        value: text
      }
    })
    wrapper.find('.vi--command--input--send').simulate('click')
    expect(handlePostChat).toHaveBeenCalledWith('text')
    expect(wrapper.find('.vi--command--input--textarea').props().value).toBe('')
  })
  test('sendable: false, validTextLength: true', () => {
    const handlePostChat = jest.fn()
    const wrapper = mountWithIntl(
      <CommandInput
        handlePostChat={handlePostChat}
        inputChannel={village.InputChannel.public}
        language={village.Language.en}
        maxLengthOfUnicodeCodePoints={140}
        maxNumberOfChatMessages={10}
        navigatable
        numberOfChatMessages={10}
        suggestedData={[]}
      />
    )

    wrapper.find('.vi--command--input--textarea').simulate('change', {
      target: {
        selectionEnd: 4,
        value: 'text'
      }
    })
    wrapper.find('.vi--command--input--send').simulate('click')
    expect(handlePostChat).toHaveBeenCalledTimes(0)
  })
  test('sendable: true, validTextLength: false', () => {
    const handlePostChat = jest.fn()
    const wrapper = mountWithIntl(
      <CommandInput
        handlePostChat={handlePostChat}
        inputChannel={village.InputChannel.public}
        language={village.Language.en}
        maxLengthOfUnicodeCodePoints={140}
        maxNumberOfChatMessages={10}
        navigatable
        numberOfChatMessages={0}
        suggestedData={[]}
      />
    )
    const text = 'texttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttextt'

    wrapper.find('.vi--command--input--textarea').simulate('change', {
      target: {
        selectionEnd: 141,
        value: text
      }
    })
    wrapper.find('.vi--command--input--send').simulate('click')
    expect(handlePostChat).toHaveBeenCalledTimes(0)
  })
  test('sendable: false, validTextLength: false', () => {
    const handlePostChat = jest.fn()
    const wrapper = mountWithIntl(
      <CommandInput
        handlePostChat={handlePostChat}
        inputChannel={village.InputChannel.public}
        language={village.Language.en}
        maxLengthOfUnicodeCodePoints={140}
        maxNumberOfChatMessages={10}
        navigatable
        numberOfChatMessages={10}
        suggestedData={[]}
      />
    )
    const text = 'texttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttextt'

    wrapper.find('.vi--command--input--textarea').simulate('change', {
      target: {
        selectionEnd: 141,
        value: text
      }
    })
    wrapper.find('.vi--command--input--send').simulate('click')
    expect(handlePostChat).toHaveBeenCalledTimes(0)
  })
})
test('handleSuggestClick', () => {
  const suggestedData = [
    {
      id: 'Alvin',
      name: {
        'en': 'Alvin',
        'ja': 'アルビン'
      }
    }
  ]
  const handlePostChat = jest.fn()
  const wrapper = mountWithIntl(
    <CommandInput
      handlePostChat={handlePostChat}
      inputChannel={village.InputChannel.public}
      language={village.Language.en}
      maxLengthOfUnicodeCodePoints={140}
      maxNumberOfChatMessages={10}
      navigatable
      numberOfChatMessages={0}
      suggestedData={suggestedData}
    />
  )

  wrapper.find('.vi--command--input--textarea').simulate('change', {
    target: {
      selectionEnd: 1,
      value: '@'
    }
  })
  wrapper.find('.vi--command--input--suggest--item').at(0).simulate('click')
  expect(wrapper.find('.vi--command--input--textarea').props().value).toBe('Alvin')
})
describe('button state', () => {
  describe('inputChannel', () => {
    test('grave', () => {
      const handlePostChat = jest.fn()
      const wrapper = mountWithIntl(
        <CommandInput
          handlePostChat={handlePostChat}
          inputChannel={village.InputChannel.grave}
          language={village.Language.en}
          maxLengthOfUnicodeCodePoints={140}
          maxNumberOfChatMessages={-1}
          navigatable
          numberOfChatMessages={-1}
          suggestedData={[]}
        />
      )

      wrapper.find('.vi--command--input--textarea').simulate('change', {
        target: {
          selectionEnd: 1,
          value: 'a'
        }
      })
      expect(wrapper.find('.vi--command--input--send').props().disabled).toBe(false)
    })
    describe('werewolf', () => {
      test('numberOfChatMessages < maxNumberOfChatMessages', () => {
        const handlePostChat = jest.fn()
        const wrapper = mountWithIntl(
          <CommandInput
            handlePostChat={handlePostChat}
            inputChannel={village.InputChannel.werewolf}
            language={village.Language.en}
            maxLengthOfUnicodeCodePoints={140}
            maxNumberOfChatMessages={10}
            navigatable
            numberOfChatMessages={0}
            suggestedData={[]}
          />
        )

        wrapper.find('.vi--command--input--textarea').simulate('change', {
          target: {
            selectionEnd: 1,
            value: 'a'
          }
        })
        expect(wrapper.find('.vi--command--input--send').props().disabled).toBe(false)
      })
      test('numberOfChatMessages === maxNumberOfChatMessages', () => {
        const handlePostChat = jest.fn()
        const wrapper = mountWithIntl(
          <CommandInput
            handlePostChat={handlePostChat}
            inputChannel={village.InputChannel.werewolf}
            language={village.Language.en}
            maxLengthOfUnicodeCodePoints={140}
            maxNumberOfChatMessages={10}
            navigatable
            numberOfChatMessages={10}
            suggestedData={[]}
          />
        )

        wrapper.find('.vi--command--input--textarea').simulate('change', {
          target: {
            selectionEnd: 1,
            value: 'a'
          }
        })
        expect(wrapper.find('.vi--command--input--send').props().disabled).toBe(true)
      })
      test('numberOfChatMessages > maxNumberOfChatMessages', () => {
        const handlePostChat = jest.fn()
        const wrapper = mountWithIntl(
          <CommandInput
            handlePostChat={handlePostChat}
            inputChannel={village.InputChannel.werewolf}
            language={village.Language.en}
            maxLengthOfUnicodeCodePoints={140}
            maxNumberOfChatMessages={10}
            navigatable
            numberOfChatMessages={11}
            suggestedData={[]}
          />
        )

        wrapper.find('.vi--command--input--textarea').simulate('change', {
          target: {
            selectionEnd: 1,
            value: 'a'
          }
        })
        expect(wrapper.find('.vi--command--input--send').props().disabled).toBe(true)
      })
    })
    test('private', () => {
      const handlePostChat = jest.fn()
      const wrapper = mountWithIntl(
        <CommandInput
          handlePostChat={handlePostChat}
          inputChannel={village.InputChannel.private}
          language={village.Language.en}
          maxLengthOfUnicodeCodePoints={140}
          maxNumberOfChatMessages={-1}
          navigatable
          numberOfChatMessages={-1}
          suggestedData={[]}
        />
      )

      wrapper.find('.vi--command--input--textarea').simulate('change', {
        target: {
          selectionEnd: 1,
          value: 'a'
        }
      })
      expect(wrapper.find('.vi--command--input--send').props().disabled).toBe(false)
    })
    test('postMortem', () => {
      const handlePostChat = jest.fn()
      const wrapper = mountWithIntl(
        <CommandInput
          handlePostChat={handlePostChat}
          inputChannel={village.InputChannel.postMortem}
          language={village.Language.en}
          maxLengthOfUnicodeCodePoints={140}
          maxNumberOfChatMessages={-1}
          navigatable
          numberOfChatMessages={-1}
          suggestedData={[]}
        />
      )

      wrapper.find('.vi--command--input--textarea').simulate('change', {
        target: {
          selectionEnd: 1,
          value: 'a'
        }
      })
      expect(wrapper.find('.vi--command--input--send').props().disabled).toBe(false)
    })
    describe('public', () => {
      test('numberOfChatMessages < maxNumberOfChatMessages', () => {
        const handlePostChat = jest.fn()
        const wrapper = mountWithIntl(
          <CommandInput
            handlePostChat={handlePostChat}
            inputChannel={village.InputChannel.public}
            language={village.Language.en}
            maxLengthOfUnicodeCodePoints={140}
            maxNumberOfChatMessages={10}
            navigatable
            numberOfChatMessages={0}
            suggestedData={[]}
          />
        )

        wrapper.find('.vi--command--input--textarea').simulate('change', {
          target: {
            selectionEnd: 1,
            value: 'a'
          }
        })
        expect(wrapper.find('.vi--command--input--send').props().disabled).toBe(false)
      })
      test('numberOfChatMessages === maxNumberOfChatMessages', () => {
        const handlePostChat = jest.fn()
        const wrapper = mountWithIntl(
          <CommandInput
            handlePostChat={handlePostChat}
            inputChannel={village.InputChannel.public}
            language={village.Language.en}
            maxLengthOfUnicodeCodePoints={140}
            maxNumberOfChatMessages={10}
            navigatable
            numberOfChatMessages={10}
            suggestedData={[]}
          />
        )

        wrapper.find('.vi--command--input--textarea').simulate('change', {
          target: {
            selectionEnd: 1,
            value: 'a'
          }
        })
        expect(wrapper.find('.vi--command--input--send').props().disabled).toBe(true)
      })
      test('numberOfChatMessages > maxNumberOfChatMessages', () => {
        const handlePostChat = jest.fn()
        const wrapper = mountWithIntl(
          <CommandInput
            handlePostChat={handlePostChat}
            inputChannel={village.InputChannel.public}
            language={village.Language.en}
            maxLengthOfUnicodeCodePoints={140}
            maxNumberOfChatMessages={10}
            navigatable
            numberOfChatMessages={11}
            suggestedData={[]}
          />
        )

        wrapper.find('.vi--command--input--textarea').simulate('change', {
          target: {
            selectionEnd: 1,
            value: 'a'
          }
        })
        expect(wrapper.find('.vi--command--input--send').props().disabled).toBe(true)
      })
    })
  })
  describe('textCount', () => {
    test('textCount === 0', () => {
      const handlePostChat = jest.fn()
      const wrapper = mountWithIntl(
        <CommandInput
          handlePostChat={handlePostChat}
          inputChannel={village.InputChannel.grave}
          language={village.Language.en}
          maxLengthOfUnicodeCodePoints={140}
          maxNumberOfChatMessages={-1}
          navigatable
          numberOfChatMessages={-1}
          suggestedData={[]}
        />
      )

      wrapper.find('.vi--command--input--textarea').simulate('change', {
        target: {
          selectionEnd: 0,
          value: ''
        }
      })
      expect(wrapper.find('.vi--command--input--send').props().disabled).toBe(true)
    })
    test('textCount === 1', () => {
      const handlePostChat = jest.fn()
      const wrapper = mountWithIntl(
        <CommandInput
          handlePostChat={handlePostChat}
          inputChannel={village.InputChannel.grave}
          language={village.Language.en}
          maxLengthOfUnicodeCodePoints={140}
          maxNumberOfChatMessages={-1}
          navigatable
          numberOfChatMessages={-1}
          suggestedData={[]}
        />
      )

      wrapper.find('.vi--command--input--textarea').simulate('change', {
        target: {
          selectionEnd: 1,
          value: 'a'
        }
      })
      expect(wrapper.find('.vi--command--input--send').props().disabled).toBe(false)
    })
    test('0 < textCount < maxLengthOfUnicodeCodePoints', () => {
      const handlePostChat = jest.fn()
      const wrapper = mountWithIntl(
        <CommandInput
          handlePostChat={handlePostChat}
          inputChannel={village.InputChannel.grave}
          language={village.Language.en}
          maxLengthOfUnicodeCodePoints={140}
          maxNumberOfChatMessages={-1}
          navigatable
          numberOfChatMessages={-1}
          suggestedData={[]}
        />
      )

      wrapper.find('.vi--command--input--textarea').simulate('change', {
        target: {
          selectionEnd: 4,
          value: 'text'
        }
      })
      expect(wrapper.find('.vi--command--input--send').props().disabled).toBe(false)
    })
    test('textCount === maxLengthOfUnicodeCodePoints', () => {
      const handlePostChat = jest.fn()
      const wrapper = mountWithIntl(
        <CommandInput
          handlePostChat={handlePostChat}
          inputChannel={village.InputChannel.grave}
          language={village.Language.en}
          maxLengthOfUnicodeCodePoints={140}
          maxNumberOfChatMessages={-1}
          navigatable
          numberOfChatMessages={-1}
          suggestedData={[]}
        />
      )

      wrapper.find('.vi--command--input--textarea').simulate('change', {
        target: {
          selectionEnd: 140,
          value: 'texttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttext'
        }
      })
      expect(wrapper.find('.vi--command--input--send').props().disabled).toBe(false)
    })
    test('textCount > maxLengthOfUnicodeCodePoints', () => {
      const handlePostChat = jest.fn()
      const wrapper = mountWithIntl(
        <CommandInput
          handlePostChat={handlePostChat}
          inputChannel={village.InputChannel.grave}
          language={village.Language.en}
          maxLengthOfUnicodeCodePoints={140}
          maxNumberOfChatMessages={-1}
          navigatable
          numberOfChatMessages={-1}
          suggestedData={[]}
        />
      )

      wrapper.find('.vi--command--input--textarea').simulate('change', {
        target: {
          selectionEnd: 141,
          value: 'texttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttextt'
        }
      })
      expect(wrapper.find('.vi--command--input--send').props().disabled).toBe(true)
    })
  })
})

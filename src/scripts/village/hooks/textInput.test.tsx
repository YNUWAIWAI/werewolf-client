import * as React from 'react'
import {mount} from 'enzyme'
import {useTextInput} from './textInput'

interface Props {
  readonly availableToSend: boolean
  readonly maxLengthOfUnicodeCodePoints: number
  readonly text: string
}
const Test: React.FC<Props> = props => {
  const textInput = useTextInput(props)
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newText = event.target.value
    const newCaretPosition = event.target.selectionEnd || 0

    textInput.changeText({
      newCaretPosition,
      newText
    })
  }
  const handleReplaceText = () => {
    const suggest = 'suggest'

    textInput.replaceText(suggest)
  }

  return (
    <div>
      <span
        id="caretPosition"
      >
        {textInput.caretPosition}
      </span>
      <span
        id="compositing"
      >
        {textInput.compositing ? '1' : '0'}
      </span>
      <span
        id="count"
      >
        {textInput.count}
      </span>
      <span
        id="disabled"
      >
        {textInput.disabled ? '1' : '0'}
      </span>
      <span
        id="searchText"
      >
        {textInput.searchText}
      </span>
      <span
        id="suggestable"
      >
        {textInput.suggestable ? '1' : '0'}
      </span>
      <span
        id="trigerPosition"
      >
        {textInput.trigerPosition}
      </span>
      <span
        id="valid"
      >
        {textInput.valid ? '1' : '0'}
      </span>
      <input
        onChange={handleChange}
        onCompositionEnd={() => textInput.setCompositing(false)}
        onCompositionStart={() => textInput.setCompositing(true)}
        value={textInput.text}
      />
      <button
        onClick={handleReplaceText}
      />
    </div>
  )
}

Test.displayName = 'Test'

test('render', () => {
  const wrapper = mount(
    <Test
      availableToSend
      maxLengthOfUnicodeCodePoints={5}
      text=""
    />
  )

  expect(wrapper.find('#caretPosition').text()).toBe('0')
  expect(wrapper.find('#compositing').text()).toBe('0')
  expect(wrapper.find('#count').text()).toBe('0')
  expect(wrapper.find('#disabled').text()).toBe('1')
  expect(wrapper.find('#searchText').text()).toBe('')
  expect(wrapper.find('#suggestable').text()).toBe('0')
  expect(wrapper.find('#trigerPosition').text()).toBe('0')
  expect(wrapper.find('#valid').text()).toBe('0')
  expect(wrapper.html()).toMatchSnapshot()
})
describe('change text', () => {
  test('"" => "@"', () => {
    const wrapper = mount(
      <Test
        availableToSend
        maxLengthOfUnicodeCodePoints={5}
        text=""
      />
    )

    wrapper.find('input').simulate('change', {
      target: {
        selectionEnd: 1,
        value: '@'
      }
    })
    expect(wrapper.find('#caretPosition').text()).toBe('1')
    expect(wrapper.find('#compositing').text()).toBe('0')
    expect(wrapper.find('#count').text()).toBe('1')
    expect(wrapper.find('#disabled').text()).toBe('0')
    expect(wrapper.find('#searchText').text()).toBe('')
    expect(wrapper.find('#suggestable').text()).toBe('1')
    expect(wrapper.find('#trigerPosition').text()).toBe('0')
    expect(wrapper.find('#valid').text()).toBe('1')
    expect(wrapper.html()).toMatchSnapshot()
  })
  test('"" => "a"', () => {
    const wrapper = mount(
      <Test
        availableToSend
        maxLengthOfUnicodeCodePoints={5}
        text=""
      />
    )

    wrapper.find('input').simulate('change', {
      target: {
        selectionEnd: 1,
        value: 'a'
      }
    })
    expect(wrapper.find('#caretPosition').text()).toBe('1')
    expect(wrapper.find('#compositing').text()).toBe('0')
    expect(wrapper.find('#count').text()).toBe('1')
    expect(wrapper.find('#disabled').text()).toBe('0')
    expect(wrapper.find('#searchText').text()).toBe('')
    expect(wrapper.find('#suggestable').text()).toBe('0')
    expect(wrapper.find('#trigerPosition').text()).toBe('0')
    expect(wrapper.find('#valid').text()).toBe('1')
    expect(wrapper.html()).toMatchSnapshot()
  })
  test('"" => " "', () => {
    const wrapper = mount(
      <Test
        availableToSend
        maxLengthOfUnicodeCodePoints={5}
        text=""
      />
    )

    wrapper.find('input').simulate('change', {
      target: {
        selectionEnd: 1,
        value: ' '
      }
    })
    expect(wrapper.find('#caretPosition').text()).toBe('1')
    expect(wrapper.find('#compositing').text()).toBe('0')
    expect(wrapper.find('#count').text()).toBe('1')
    expect(wrapper.find('#disabled').text()).toBe('0')
    expect(wrapper.find('#searchText').text()).toBe('')
    expect(wrapper.find('#suggestable').text()).toBe('0')
    expect(wrapper.find('#trigerPosition').text()).toBe('0')
    expect(wrapper.find('#valid').text()).toBe('1')
    expect(wrapper.html()).toMatchSnapshot()
  })
  test('"a" => "a@"', () => {
    const wrapper = mount(
      <Test
        availableToSend
        maxLengthOfUnicodeCodePoints={5}
        text="a"
      />
    )

    wrapper.find('input').simulate('change', {
      target: {
        selectionEnd: 2,
        value: 'a@'
      }
    })
    expect(wrapper.find('#caretPosition').text()).toBe('2')
    expect(wrapper.find('#compositing').text()).toBe('0')
    expect(wrapper.find('#count').text()).toBe('2')
    expect(wrapper.find('#disabled').text()).toBe('0')
    expect(wrapper.find('#searchText').text()).toBe('')
    expect(wrapper.find('#suggestable').text()).toBe('1')
    expect(wrapper.find('#trigerPosition').text()).toBe('1')
    expect(wrapper.find('#valid').text()).toBe('1')
    expect(wrapper.html()).toMatchSnapshot()
  })
  test('"a" => "a "', () => {
    const wrapper = mount(
      <Test
        availableToSend
        maxLengthOfUnicodeCodePoints={5}
        text="a"
      />
    )

    wrapper.find('input').simulate('change', {
      target: {
        selectionEnd: 2,
        value: 'a '
      }
    })
    expect(wrapper.find('#caretPosition').text()).toBe('2')
    expect(wrapper.find('#compositing').text()).toBe('0')
    expect(wrapper.find('#count').text()).toBe('2')
    expect(wrapper.find('#disabled').text()).toBe('0')
    expect(wrapper.find('#searchText').text()).toBe('')
    expect(wrapper.find('#suggestable').text()).toBe('0')
    expect(wrapper.find('#trigerPosition').text()).toBe('0')
    expect(wrapper.find('#valid').text()).toBe('1')
    expect(wrapper.html()).toMatchSnapshot()
  })
  test('" " => " a"', () => {
    const wrapper = mount(
      <Test
        availableToSend
        maxLengthOfUnicodeCodePoints={5}
        text=" "
      />
    )

    wrapper.find('input').simulate('change', {
      target: {
        selectionEnd: 2,
        value: ' a'
      }
    })
    expect(wrapper.find('#caretPosition').text()).toBe('2')
    expect(wrapper.find('#compositing').text()).toBe('0')
    expect(wrapper.find('#count').text()).toBe('2')
    expect(wrapper.find('#disabled').text()).toBe('0')
    expect(wrapper.find('#searchText').text()).toBe('')
    expect(wrapper.find('#suggestable').text()).toBe('0')
    expect(wrapper.find('#trigerPosition').text()).toBe('0')
    expect(wrapper.find('#valid').text()).toBe('1')
    expect(wrapper.html()).toMatchSnapshot()
  })
  test('" " => " @"', () => {
    const wrapper = mount(
      <Test
        availableToSend
        maxLengthOfUnicodeCodePoints={5}
        text=" "
      />
    )

    wrapper.find('input').simulate('change', {
      target: {
        selectionEnd: 2,
        value: ' @'
      }
    })
    expect(wrapper.find('#caretPosition').text()).toBe('2')
    expect(wrapper.find('#compositing').text()).toBe('0')
    expect(wrapper.find('#count').text()).toBe('2')
    expect(wrapper.find('#disabled').text()).toBe('0')
    expect(wrapper.find('#searchText').text()).toBe('')
    expect(wrapper.find('#suggestable').text()).toBe('1')
    expect(wrapper.find('#trigerPosition').text()).toBe('1')
    expect(wrapper.find('#valid').text()).toBe('1')
    expect(wrapper.html()).toMatchSnapshot()
  })
  test('"@" => "@a"', () => {
    const wrapper = mount(
      <Test
        availableToSend
        maxLengthOfUnicodeCodePoints={5}
        text="@"
      />
    )

    wrapper.find('input').simulate('change', {
      target: {
        selectionEnd: 2,
        value: '@a'
      }
    })
    expect(wrapper.find('#caretPosition').text()).toBe('2')
    expect(wrapper.find('#compositing').text()).toBe('0')
    expect(wrapper.find('#count').text()).toBe('2')
    expect(wrapper.find('#disabled').text()).toBe('0')
    expect(wrapper.find('#searchText').text()).toBe('a')
    expect(wrapper.find('#suggestable').text()).toBe('1')
    expect(wrapper.find('#trigerPosition').text()).toBe('0')
    expect(wrapper.find('#valid').text()).toBe('1')
    expect(wrapper.html()).toMatchSnapshot()
  })
  test('"@" => "@ "', () => {
    const wrapper = mount(
      <Test
        availableToSend
        maxLengthOfUnicodeCodePoints={5}
        text="@"
      />
    )

    wrapper.find('input').simulate('change', {
      target: {
        selectionEnd: 2,
        value: '@ '
      }
    })
    expect(wrapper.find('#caretPosition').text()).toBe('2')
    expect(wrapper.find('#compositing').text()).toBe('0')
    expect(wrapper.find('#count').text()).toBe('2')
    expect(wrapper.find('#disabled').text()).toBe('0')
    expect(wrapper.find('#searchText').text()).toBe('')
    expect(wrapper.find('#suggestable').text()).toBe('0')
    expect(wrapper.find('#trigerPosition').text()).toBe('0')
    expect(wrapper.find('#valid').text()).toBe('1')
    expect(wrapper.html()).toMatchSnapshot()
  })
  test('"@" => "@@"', () => {
    const wrapper = mount(
      <Test
        availableToSend
        maxLengthOfUnicodeCodePoints={5}
        text="@"
      />
    )

    wrapper.find('input').simulate('change', {
      target: {
        selectionEnd: 2,
        value: '@@'
      }
    })
    expect(wrapper.find('#caretPosition').text()).toBe('2')
    expect(wrapper.find('#compositing').text()).toBe('0')
    expect(wrapper.find('#count').text()).toBe('2')
    expect(wrapper.find('#disabled').text()).toBe('0')
    expect(wrapper.find('#searchText').text()).toBe('')
    expect(wrapper.find('#suggestable').text()).toBe('0')
    expect(wrapper.find('#trigerPosition').text()).toBe('0')
    expect(wrapper.find('#valid').text()).toBe('1')
    expect(wrapper.html()).toMatchSnapshot()
  })
  test('"aaa@a" => "aa@a"', () => {
    const wrapper = mount(
      <Test
        availableToSend
        maxLengthOfUnicodeCodePoints={5}
        text="aaa@a"
      />
    )

    wrapper.find('input').simulate('change', {
      target: {
        selectionEnd: 1,
        value: 'aa@a'
      }
    })
    expect(wrapper.find('#caretPosition').text()).toBe('1')
    expect(wrapper.find('#compositing').text()).toBe('0')
    expect(wrapper.find('#count').text()).toBe('4')
    expect(wrapper.find('#disabled').text()).toBe('0')
    expect(wrapper.find('#searchText').text()).toBe('')
    expect(wrapper.find('#suggestable').text()).toBe('0')
    expect(wrapper.find('#trigerPosition').text()).toBe('0')
    expect(wrapper.find('#valid').text()).toBe('1')
    expect(wrapper.html()).toMatchSnapshot()
  })
  test('"@a" => "@aa"', () => {
    const wrapper = mount(
      <Test
        availableToSend
        maxLengthOfUnicodeCodePoints={5}
        text="@a"
      />
    )

    wrapper.find('input').simulate('change', {
      target: {
        selectionEnd: 3,
        value: '@aa'
      }
    })
    expect(wrapper.find('#caretPosition').text()).toBe('3')
    expect(wrapper.find('#compositing').text()).toBe('0')
    expect(wrapper.find('#count').text()).toBe('3')
    expect(wrapper.find('#disabled').text()).toBe('0')
    expect(wrapper.find('#searchText').text()).toBe('aa')
    expect(wrapper.find('#suggestable').text()).toBe('1')
    expect(wrapper.find('#trigerPosition').text()).toBe('0')
    expect(wrapper.find('#valid').text()).toBe('1')
    expect(wrapper.html()).toMatchSnapshot()
  })
  test('"a @aaa " => "a @aaa"', () => {
    const wrapper = mount(
      <Test
        availableToSend
        maxLengthOfUnicodeCodePoints={10}
        text="a @aaa "
      />
    )

    wrapper.find('input').simulate('change', {
      target: {
        selectionEnd: 6,
        value: 'a @aaa'
      }
    })
    expect(wrapper.find('#caretPosition').text()).toBe('6')
    expect(wrapper.find('#compositing').text()).toBe('0')
    expect(wrapper.find('#count').text()).toBe('6')
    expect(wrapper.find('#disabled').text()).toBe('0')
    expect(wrapper.find('#searchText').text()).toBe('aaa')
    expect(wrapper.find('#suggestable').text()).toBe('1')
    expect(wrapper.find('#trigerPosition').text()).toBe('2')
    expect(wrapper.find('#valid').text()).toBe('1')
    expect(wrapper.html()).toMatchSnapshot()
  })
  test('"a@" => "@"', () => {
    const wrapper = mount(
      <Test
        availableToSend
        maxLengthOfUnicodeCodePoints={5}
        text="a@"
      />
    )

    wrapper.find('input').simulate('change', {
      target: {
        selectionEnd: 0,
        value: '@'
      }
    })
    expect(wrapper.find('#caretPosition').text()).toBe('0')
    expect(wrapper.find('#compositing').text()).toBe('0')
    expect(wrapper.find('#count').text()).toBe('1')
    expect(wrapper.find('#disabled').text()).toBe('0')
    expect(wrapper.find('#searchText').text()).toBe('')
    expect(wrapper.find('#suggestable').text()).toBe('0')
    expect(wrapper.find('#trigerPosition').text()).toBe('0')
    expect(wrapper.find('#valid').text()).toBe('1')
    expect(wrapper.html()).toMatchSnapshot()
  })
})
describe('replace text', () => {
  test('"@aaaa" => "suggest"', () => {
    const wrapper = mount(
      <Test
        availableToSend
        maxLengthOfUnicodeCodePoints={10}
        text=""
      />
    )

    wrapper.find('input').simulate('change', {
      target: {
        selectionEnd: 5,
        value: '@aaaa'
      }
    })
    wrapper.find('button').simulate('click')
    expect(wrapper.find('#caretPosition').text()).toBe('7')
    expect(wrapper.find('#compositing').text()).toBe('0')
    expect(wrapper.find('#count').text()).toBe('7')
    expect(wrapper.find('#disabled').text()).toBe('0')
    expect(wrapper.find('#searchText').text()).toBe('')
    expect(wrapper.find('#suggestable').text()).toBe('0')
    expect(wrapper.find('#trigerPosition').text()).toBe('0')
    expect(wrapper.find('#valid').text()).toBe('1')
    expect(wrapper.html()).toMatchSnapshot()
  })
  test('"a @aaaa" => "a suggest"', () => {
    const wrapper = mount(
      <Test
        availableToSend
        maxLengthOfUnicodeCodePoints={10}
        text=""
      />
    )

    wrapper.find('input').simulate('change', {
      target: {
        selectionEnd: 7,
        value: 'a @aaaa'
      }
    })
    wrapper.find('button').simulate('click')
    expect(wrapper.find('#caretPosition').text()).toBe('9')
    expect(wrapper.find('#compositing').text()).toBe('0')
    expect(wrapper.find('#count').text()).toBe('9')
    expect(wrapper.find('#disabled').text()).toBe('0')
    expect(wrapper.find('#searchText').text()).toBe('')
    expect(wrapper.find('#suggestable').text()).toBe('0')
    expect(wrapper.find('#trigerPosition').text()).toBe('2')
    expect(wrapper.find('#valid').text()).toBe('1')
    expect(wrapper.html()).toMatchSnapshot()
  })
})

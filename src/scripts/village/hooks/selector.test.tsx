import * as React from 'react'
import {mount} from 'enzyme'
import {useSelector} from './selector'

interface Props {
  len: number
}
const Test: React.FC<Props> = props => {
  const selector = useSelector(0)

  React.useEffect(() => {
    selector.setLength(props.len)
  }, [props.len, selector])
  const prev = 'prev'
  const next = 'next'
  const refresh = 'refresh'

  return (
    <div>
      <span>
        {selector.selectedItem}
      </span>
      <button
        id={prev}
        onClick={() => selector.prev()}
      >
        {prev}
      </button>
      <button
        id={next}
        onClick={() => selector.next()}
      >
        {next}
      </button>
      <button
        id={refresh}
        onClick={() => selector.refresh()}
      >
        {refresh}
      </button>
    </div>
  )
}

Test.displayName = 'Test'

test('render', () => {
  const wrapper = mount(
    <Test
      len={5}
    />
  )

  expect(wrapper.find('span').text()).toBe('0')
  expect(wrapper.html()).toMatchSnapshot()
})
test('next', () => {
  const wrapper = mount(
    <Test
      len={5}
    />
  )

  wrapper.find('#next').simulate('click')
  expect(wrapper.find('span').text()).toBe('1')
  expect(wrapper.html()).toMatchSnapshot()
})
test('prev', () => {
  const wrapper = mount(
    <Test
      len={5}
    />
  )

  wrapper.find('#prev').simulate('click')
  expect(wrapper.find('span').text()).toBe('4')
  expect(wrapper.html()).toMatchSnapshot()
})
test('refresh', () => {
  const wrapper = mount(
    <Test
      len={5}
    />
  )

  wrapper.find('#next').simulate('click')
  wrapper.find('#next').simulate('click')
  expect(wrapper.find('span').text()).toBe('2')
  wrapper.find('#refresh').simulate('click')
  expect(wrapper.find('span').text()).toBe('0')
  expect(wrapper.html()).toMatchSnapshot()
})

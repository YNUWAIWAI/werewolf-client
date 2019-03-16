import * as React from 'react'
import Loader from '../atoms/svg/Loader'
import Obfucator from './Obfucator'
import {mount} from 'enzyme'

describe('<Obfucator />', () => {
  test('loading visible', () => {
    const wrapper = mount(
      <Obfucator
        loading
        visible
      />
    )

    expect(wrapper.find('.lo--obfucator').exists()).toBe(true)
    expect(wrapper.find(Loader).exists()).toBe(true)
  })
  test('loading visible={false}', () => {
    const wrapper = mount(
      <Obfucator
        loading={false}
        visible
      />
    )

    expect(wrapper.find('.lo--obfucator').exists()).toBe(true)
    expect(wrapper.find(Loader).exists()).toBe(false)
  })
  test('loading loading={false} visible={false}', () => {
    const wrapper = mount(
      <Obfucator
        loading={false}
        visible={false}
      />
    )

    expect(wrapper.isEmptyRender()).toBe(true)
    expect(wrapper.find(Loader).exists()).toBe(false)
  })
})

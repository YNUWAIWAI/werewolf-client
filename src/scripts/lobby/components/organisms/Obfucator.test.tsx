import * as React from 'react'
import Loader from '../atoms/svg/Loader'
import Obfucator from './Obfucator'
import {shallow} from 'enzyme'

describe('<Obfucator />', () => {
  test('loading visible', () => {
    const wrapper = shallow(
      <Obfucator
        loading
        visible
      />
    )

    expect(wrapper.find('.lo--obfucator').exists()).toBe(true)
    expect(wrapper.find(Loader).exists()).toBe(true)
  })
  test('loading visible={false}', () => {
    const wrapper = shallow(
      <Obfucator
        loading={false}
        visible
      />
    )

    expect(wrapper.find('.lo--obfucator').exists()).toBe(true)
    expect(wrapper.find(Loader).exists()).toBe(false)
  })
  test('loading loading={false} visible={false}', () => {
    const wrapper = shallow(
      <Obfucator
        loading={false}
        visible={false}
      />
    )

    expect(wrapper.find('.lo--obfucator').exists()).toBe(false)
    expect(wrapper.find(Loader).exists()).toBe(false)
  })
})

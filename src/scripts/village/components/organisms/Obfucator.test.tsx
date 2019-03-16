import * as React from 'react'
import Loader from '../atoms/svg/Loader'
import Obfucator from './Obfucator'
import {shallow} from 'enzyme'

describe('<Obfucator />', () => {
  test('loading={true} visible={true}', () => {
    const wrapper = shallow(
      <Obfucator
        loading
        visible
      />
    )

    expect(wrapper.find('.vi--obfucator').exists()).toBe(true)
    expect(wrapper.find(Loader).exists()).toBe(true)
  })
  test('loading={true} visible={false}', () => {
    const wrapper = shallow(
      <Obfucator
        loading={false}
        visible
      />
    )

    expect(wrapper.find('.vi--obfucator').exists()).toBe(true)
    expect(wrapper.find(Loader).exists()).toBe(false)
  })
  test('loading={false} visible={false}', () => {
    const wrapper = shallow(
      <Obfucator
        loading={false}
        visible={false}
      />
    )

    expect(wrapper.isEmptyRender()).toBe(false)
    expect(wrapper.find(Loader).exists()).toBe(false)
  })
})

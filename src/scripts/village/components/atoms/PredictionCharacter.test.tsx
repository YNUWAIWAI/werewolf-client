import * as React from 'react'
import {ImagePath} from '../../constants/ImagePath'
import {PredictionCharacter} from './PredictionCharacter'
import {mount} from 'enzyme'

describe('<PredictionCharacter />', () => {
  test('status="alive"', () => {
    const wrapper = mount(
      <PredictionCharacter
        image={ImagePath.Character.a}
        initial="A"
        isSilent={false}
        name="Adil"
        status="alive"
      />
    )

    expect(wrapper.find('div.vi--prediction--character').hasClass('dead')).toBe(false)
    expect(wrapper.find('.vi--prediction--character--image').exists()).toBe(true)
    expect(wrapper.find('.vi--prediction--character--name').exists()).toBe(true)
  })
  test('status="dead"', () => {
    const wrapper = mount(
      <PredictionCharacter
        image={ImagePath.Character.a}
        initial="A"
        isSilent={false}
        name="Adil"
        status="dead"
      />
    )

    expect(wrapper.find('div.vi--prediction--character').hasClass('dead')).toBe(true)
    expect(wrapper.find('.vi--prediction--character--image').exists()).toBe(true)
    expect(wrapper.find('.vi--prediction--character--name').exists()).toBe(true)
  })
  test('status="death by execution"', () => {
    const wrapper = mount(
      <PredictionCharacter
        image={ImagePath.Character.a}
        initial="A"
        isSilent={false}
        name="Adil"
        status="death by execution"
      />
    )

    expect(wrapper.find('div.vi--prediction--character').hasClass('dead')).toBe(true)
    expect(wrapper.find('.vi--prediction--character--image').exists()).toBe(true)
    expect(wrapper.find('.vi--prediction--character--name').exists()).toBe(true)
  })
  test('status="death by attack"', () => {
    const wrapper = mount(
      <PredictionCharacter
        image={ImagePath.Character.a}
        initial="A"
        isSilent={false}
        name="Adil"
        status="death by attack"
      />
    )

    expect(wrapper.find('div.vi--prediction--character').hasClass('dead')).toBe(true)
    expect(wrapper.find('.vi--prediction--character--image').exists()).toBe(true)
    expect(wrapper.find('.vi--prediction--character--name').exists()).toBe(true)
  })
  test('status="death by fear"', () => {
    const wrapper = mount(
      <PredictionCharacter
        image={ImagePath.Character.a}
        initial="A"
        isSilent={false}
        name="Adil"
        status="death by fear"
      />
    )

    expect(wrapper.find('div.vi--prediction--character').hasClass('dead')).toBe(true)
    expect(wrapper.find('.vi--prediction--character--image').exists()).toBe(true)
    expect(wrapper.find('.vi--prediction--character--name').exists()).toBe(true)
  })
  test('status="unnatural death"', () => {
    const wrapper = mount(
      <PredictionCharacter
        image={ImagePath.Character.a}
        initial="A"
        isSilent={false}
        name="Adil"
        status="unnatural death"
      />
    )

    expect(wrapper.find('div.vi--prediction--character').hasClass('dead')).toBe(true)
    expect(wrapper.find('.vi--prediction--character--image').exists()).toBe(true)
    expect(wrapper.find('.vi--prediction--character--name').exists()).toBe(true)
  })
  test('isSilent=true, status="alive"', () => {
    const wrapper = mount(
      <PredictionCharacter
        image={ImagePath.Character.a}
        initial="A"
        isSilent
        name="Adil"
        status="alive"
      />
    )

    expect(wrapper.find('div.vi--prediction--character').hasClass('silent')).toBe(true)
  })
  test('isSilent=true, status="dead"', () => {
    const wrapper = mount(
      <PredictionCharacter
        image={ImagePath.Character.a}
        initial="A"
        isSilent
        name="Adil"
        status="dead"
      />
    )

    expect(wrapper.find('div.vi--prediction--character').hasClass('dead')).toBe(true)
  })
})

import * as React from 'react'
import CharacterIcon from './CharacterIcon'
import {ImagePath} from '../../constants/ImagePath'
import {shallow} from 'enzyme'

describe('<CharacterIcon />', () => {
  test('defined props: initial, name', () => {
    const wrapper = shallow(
      <CharacterIcon
        className="className"
        image={ImagePath.Character.a}
        initial="A"
        name="Adil"
      />
    )

    expect(wrapper.find('.className--image').exists()).toBe(true)
    expect(wrapper.find('.className--initial').exists()).toBe(true)
    expect(wrapper.find('.className--name').exists()).toBe(true)
    expect(wrapper.html()).toMatchSnapshot()
  })
  test('defined props: initial', () => {
    const wrapper = shallow(
      <CharacterIcon
        className="className"
        image={ImagePath.Character.a}
        initial="A"
      />
    )

    expect(wrapper.find('.className--image').exists()).toBe(true)
    expect(wrapper.find('.className--initial').exists()).toBe(true)
    expect(wrapper.find('.className--name').exists()).toBe(false)
    expect(wrapper.html()).toMatchSnapshot()
  })
  test('defined props: name', () => {
    const wrapper = shallow(
      <CharacterIcon
        className="className"
        image={ImagePath.Character.a}
        name="Adil"
      />
    )

    expect(wrapper.find('.className--image').exists()).toBe(true)
    expect(wrapper.find('.className--initial').exists()).toBe(false)
    expect(wrapper.find('.className--name').exists()).toBe(true)
    expect(wrapper.html()).toMatchSnapshot()
  })
  test('defined props: nothing', () => {
    const wrapper = shallow(
      <CharacterIcon
        className="className"
        image={ImagePath.Character.a}
      />
    )

    expect(wrapper.find('.className--image').exists()).toBe(true)
    expect(wrapper.find('.className--initial').exists()).toBe(false)
    expect(wrapper.find('.className--name').exists()).toBe(false)
    expect(wrapper.html()).toMatchSnapshot()
  })
  test('additionalClass', () => {
    const wrapper = shallow(
      <CharacterIcon
        additionalClass="additionalClass"
        className="className"
        image={ImagePath.Character.a}
        initial="A"
        name="Adil"
      />
    )

    expect(wrapper.find('.className').exists()).toBe(true)
    expect(wrapper.find('.className').hasClass('additionalClass')).toBe(true)
    expect(wrapper.find('.className--image').exists()).toBe(true)
    expect(wrapper.find('.className--initial').exists()).toBe(true)
    expect(wrapper.find('.className--name').exists()).toBe(true)
    expect(wrapper.html()).toMatchSnapshot()
  })
  test('handleOnClick', () => {
    const handleOnClick = jest.fn()
    const wrapper = shallow(
      <CharacterIcon
        className="className"
        handleOnClick={handleOnClick}
        image={ImagePath.Character.a}
        initial="A"
        name="Adil"
      />
    )

    expect(handleOnClick).toHaveBeenCalledTimes(0)
    wrapper.find('.className').simulate('click')
    expect(handleOnClick).toHaveBeenCalledTimes(1)
  })
})

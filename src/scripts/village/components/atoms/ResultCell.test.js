// @flow
import React from 'react'
import ResultCell from './ResultCell'
import {shallow} from 'enzyme'

describe('<ResultCell />', () => {
  describe('type="image"', () => {
    test('status="alive"', () => {
      const wrapper = shallow(
        <ResultCell
          image="image"
          status="alive"
          type="image"
        />
      )

      expect(wrapper.find('.result--cell').exists()).toBe(true)
      expect(wrapper.find('.result--cell').hasClass('result--cell--image')).toBe(true)
      expect(wrapper.find('.result--cell').hasClass('dead')).toBe(false)
      expect(wrapper.containsMatchingElement(<img src="image" />)).toBe(true)
    })
    test('status="dead"', () => {
      const wrapper = shallow(
        <ResultCell
          image="image"
          status="dead"
          type="image"
        />
      )

      expect(wrapper.find('.result--cell').exists()).toBe(true)
      expect(wrapper.find('.result--cell').hasClass('result--cell--image')).toBe(true)
      expect(wrapper.find('.result--cell').hasClass('dead')).toBe(true)
      expect(wrapper.containsMatchingElement(<img src="image" />)).toBe(true)
    })
    test('status="death by execution"', () => {
      const wrapper = shallow(
        <ResultCell
          image="image"
          status="death by execution"
          type="image"
        />
      )

      expect(wrapper.find('.result--cell').exists()).toBe(true)
      expect(wrapper.find('.result--cell').hasClass('result--cell--image')).toBe(true)
      expect(wrapper.find('.result--cell').hasClass('dead')).toBe(true)
      expect(wrapper.containsMatchingElement(<img src="image" />)).toBe(true)
    })
    test('status="death by werewolf attack"', () => {
      const wrapper = shallow(
        <ResultCell
          image="image"
          status="death by werewolf attack"
          type="image"
        />
      )

      expect(wrapper.find('.result--cell').exists()).toBe(true)
      expect(wrapper.find('.result--cell').hasClass('result--cell--image')).toBe(true)
      expect(wrapper.find('.result--cell').hasClass('dead')).toBe(true)
      expect(wrapper.containsMatchingElement(<img src="image" />)).toBe(true)
    })
    test('status="death by fear"', () => {
      const wrapper = shallow(
        <ResultCell
          image="image"
          status="death by fear"
          type="image"
        />
      )

      expect(wrapper.find('.result--cell').exists()).toBe(true)
      expect(wrapper.find('.result--cell').hasClass('result--cell--image')).toBe(true)
      expect(wrapper.find('.result--cell').hasClass('dead')).toBe(true)
      expect(wrapper.containsMatchingElement(<img src="image" />)).toBe(true)
    })
    test('status="unnatural death"', () => {
      const wrapper = shallow(
        <ResultCell
          image="image"
          status="unnatural death"
          type="image"
        />
      )

      expect(wrapper.find('.result--cell').exists()).toBe(true)
      expect(wrapper.find('.result--cell').hasClass('result--cell--image')).toBe(true)
      expect(wrapper.find('.result--cell').hasClass('dead')).toBe(true)
      expect(wrapper.containsMatchingElement(<img src="image" />)).toBe(true)
    })
  })
  describe('type="userAvatar"', () => {
    test('status="alive"', () => {
      const wrapper = shallow(
        <ResultCell
          image="image"
          status="alive"
          type="userAvatar"
        />
      )

      expect(wrapper.find('.result--cell').exists()).toBe(true)
      expect(wrapper.find('.result--cell').hasClass('result--cell--userAvatar')).toBe(true)
      expect(wrapper.find('.result--cell').hasClass('dead')).toBe(false)
      expect(wrapper.containsMatchingElement(<img src="image" />)).toBe(true)
    })
    test('status="dead"', () => {
      const wrapper = shallow(
        <ResultCell
          image="image"
          status="dead"
          type="userAvatar"
        />
      )

      expect(wrapper.find('.result--cell').exists()).toBe(true)
      expect(wrapper.find('.result--cell').hasClass('result--cell--userAvatar')).toBe(true)
      expect(wrapper.find('.result--cell').hasClass('dead')).toBe(true)
      expect(wrapper.containsMatchingElement(<img src="image" />)).toBe(true)
    })
    test('<ResultCell image="image" status="death by execution"', () => {
      const wrapper = shallow(
        <ResultCell
          image="image"
          status="death by execution"
          type="userAvatar"
        />
      )

      expect(wrapper.find('.result--cell').exists()).toBe(true)
      expect(wrapper.find('.result--cell').hasClass('result--cell--userAvatar')).toBe(true)
      expect(wrapper.find('.result--cell').hasClass('dead')).toBe(true)
      expect(wrapper.containsMatchingElement(<img src="image" />)).toBe(true)
    })
    test('<ResultCell image="image" status="death by werewolf attack"', () => {
      const wrapper = shallow(
        <ResultCell
          image="image"
          status="death by werewolf attack"
          type="userAvatar"
        />
      )

      expect(wrapper.find('.result--cell').exists()).toBe(true)
      expect(wrapper.find('.result--cell').hasClass('result--cell--userAvatar')).toBe(true)
      expect(wrapper.find('.result--cell').hasClass('dead')).toBe(true)
      expect(wrapper.containsMatchingElement(<img src="image" />)).toBe(true)
    })
    test('<ResultCell image="image" status="death by fear"', () => {
      const wrapper = shallow(
        <ResultCell
          image="image"
          status="death by fear"
          type="userAvatar"
        />
      )

      expect(wrapper.find('.result--cell').exists()).toBe(true)
      expect(wrapper.find('.result--cell').hasClass('result--cell--userAvatar')).toBe(true)
      expect(wrapper.find('.result--cell').hasClass('dead')).toBe(true)
      expect(wrapper.containsMatchingElement(<img src="image" />)).toBe(true)
    })
    test('<ResultCell image="image" status="unnatural death"', () => {
      const wrapper = shallow(
        <ResultCell
          image="image"
          status="unnatural death"
          type="userAvatar"
        />
      )

      expect(wrapper.find('.result--cell').exists()).toBe(true)
      expect(wrapper.find('.result--cell').hasClass('result--cell--userAvatar')).toBe(true)
      expect(wrapper.find('.result--cell').hasClass('dead')).toBe(true)
      expect(wrapper.containsMatchingElement(<img src="image" />)).toBe(true)
    })
  })
  describe('type="roleImage"', () => {

    test('status="alive"', () => {
      const wrapper = shallow(
        <ResultCell
          caption="caption"
          image="image"
          status="alive"
          type="roleImage"
        />
      )

      expect(wrapper.find('.result--cell').exists()).toBe(true)
      expect(wrapper.find('.result--cell').hasClass('result--cell--roleImage')).toBe(true)
      expect(wrapper.find('.result--cell').hasClass('dead')).toBe(false)
      expect(wrapper.containsMatchingElement(<img src="image" />)).toBe(true)
      expect(wrapper.find('.result--cell--roleImage--caption').text()).toBe('caption')
    })
    test('status="dead"', () => {
      const wrapper = shallow(
        <ResultCell
          caption="caption"
          image="image"
          status="dead"
          type="roleImage"
        />
      )

      expect(wrapper.find('.result--cell').exists()).toBe(true)
      expect(wrapper.find('.result--cell').hasClass('result--cell--roleImage')).toBe(true)
      expect(wrapper.find('.result--cell').hasClass('dead')).toBe(true)
      expect(wrapper.containsMatchingElement(<img src="image" />)).toBe(true)
      expect(wrapper.find('.result--cell--roleImage--caption').text()).toBe('caption')
    })
    test('status="death by execution"', () => {
      const wrapper = shallow(
        <ResultCell
          caption="caption"
          image="image"
          status="death by execution"
          type="roleImage"
        />
      )

      expect(wrapper.find('.result--cell').exists()).toBe(true)
      expect(wrapper.find('.result--cell').hasClass('result--cell--roleImage')).toBe(true)
      expect(wrapper.find('.result--cell').hasClass('dead')).toBe(true)
      expect(wrapper.containsMatchingElement(<img src="image" />)).toBe(true)
      expect(wrapper.find('.result--cell--roleImage--caption').text()).toBe('caption')
    })
    test('status="death by werewolf attack"', () => {
      const wrapper = shallow(
        <ResultCell
          caption="caption"
          image="image"
          status="death by werewolf attack"
          type="roleImage"
        />
      )

      expect(wrapper.find('.result--cell').exists()).toBe(true)
      expect(wrapper.find('.result--cell').hasClass('result--cell--roleImage')).toBe(true)
      expect(wrapper.find('.result--cell').hasClass('dead')).toBe(true)
      expect(wrapper.containsMatchingElement(<img src="image" />)).toBe(true)
      expect(wrapper.find('.result--cell--roleImage--caption').text()).toBe('caption')
    })
    test('status="death by fear"', () => {
      const wrapper = shallow(
        <ResultCell
          caption="caption"
          image="image"
          status="death by fear"
          type="roleImage"
        />
      )

      expect(wrapper.find('.result--cell').exists()).toBe(true)
      expect(wrapper.find('.result--cell').hasClass('result--cell--roleImage')).toBe(true)
      expect(wrapper.find('.result--cell').hasClass('dead')).toBe(true)
      expect(wrapper.containsMatchingElement(<img src="image" />)).toBe(true)
      expect(wrapper.find('.result--cell--roleImage--caption').text()).toBe('caption')
    })
    test('status="unnatural death"', () => {
      const wrapper = shallow(
        <ResultCell
          caption="caption"
          image="image"
          status="unnatural death"
          type="roleImage"
        />
      )

      expect(wrapper.find('.result--cell').exists()).toBe(true)
      expect(wrapper.find('.result--cell').hasClass('result--cell--roleImage')).toBe(true)
      expect(wrapper.find('.result--cell').hasClass('dead')).toBe(true)
      expect(wrapper.containsMatchingElement(<img src="image" />)).toBe(true)
      expect(wrapper.find('.result--cell--roleImage--caption').text()).toBe('caption')
    })
  })
  test('type="summary"', () => {
    const wrapper = shallow(
      <ResultCell
        text="text"
        type="summary"
      />
    )

    expect(wrapper.find('.result--cell').exists()).toBe(true)
    expect(wrapper.find('.result--cell').hasClass('result--cell--summary')).toBe(true)
    expect(wrapper.find('.result--cell').text()).toBe('text')
  })
  test('type="caption"', () => {
    const wrapper = shallow(
      <ResultCell
        text="text"
        type="caption"
      />
    )

    expect(wrapper.find('.result--cell').exists()).toBe(true)
    expect(wrapper.find('.result--cell').hasClass('result--cell--caption')).toBe(true)
    expect(wrapper.find('.result--cell').text()).toBe('text')
  })
  describe('type="caption"', () => {
    test('status="alive"', () => {
      const wrapper = shallow(
        <ResultCell
          status="alive"
          text="text"
          type="name"
        />
      )

      expect(wrapper.find('.result--cell').exists()).toBe(true)
      expect(wrapper.find('.result--cell').hasClass('result--cell--name')).toBe(true)
      expect(wrapper.find('.result--cell').hasClass('dead')).toBe(false)
      expect(wrapper.text()).toBe('text')
    })
    test('status="dead"', () => {
      const wrapper = shallow(
        <ResultCell
          status="dead"
          text="text"
          type="name"
        />
      )

      expect(wrapper.find('.result--cell').exists()).toBe(true)
      expect(wrapper.find('.result--cell').hasClass('result--cell--name')).toBe(true)
      expect(wrapper.find('.result--cell').hasClass('dead')).toBe(true)
      expect(wrapper.text()).toBe('text')
    })
    test('status="death by execution"', () => {
      const wrapper = shallow(
        <ResultCell
          status="death by execution"
          text="text"
          type="name"
        />
      )

      expect(wrapper.find('.result--cell').exists()).toBe(true)
      expect(wrapper.find('.result--cell').hasClass('result--cell--name')).toBe(true)
      expect(wrapper.find('.result--cell').hasClass('dead')).toBe(true)
      expect(wrapper.text()).toBe('text')
    })
    test('status="death by werewolf attack"', () => {
      const wrapper = shallow(
        <ResultCell
          status="death by werewolf attack"
          text="text"
          type="name"
        />
      )

      expect(wrapper.find('.result--cell').exists()).toBe(true)
      expect(wrapper.find('.result--cell').hasClass('result--cell--name')).toBe(true)
      expect(wrapper.find('.result--cell').hasClass('dead')).toBe(true)
      expect(wrapper.text()).toBe('text')
    })
    test('status="death by fear"', () => {
      const wrapper = shallow(
        <ResultCell
          status="death by fear"
          text="text"
          type="name"
        />
      )

      expect(wrapper.find('.result--cell').exists()).toBe(true)
      expect(wrapper.find('.result--cell').hasClass('result--cell--name')).toBe(true)
      expect(wrapper.find('.result--cell').hasClass('dead')).toBe(true)
      expect(wrapper.text()).toBe('text')
    })
    test('status="unnatural death"', () => {
      const wrapper = shallow(
        <ResultCell
          status="unnatural death"
          text="text"
          type="name"
        />
      )

      expect(wrapper.find('.result--cell').exists()).toBe(true)
      expect(wrapper.find('.result--cell').hasClass('result--cell--name')).toBe(true)
      expect(wrapper.find('.result--cell').hasClass('dead')).toBe(true)
      expect(wrapper.text()).toBe('text')
    })
  })
  describe('type="status"', () => {
    test('status="alive', () => {
      const wrapper = shallow(
        <ResultCell
          status="alive"
          text="text"
          type="status"
        />
      )

      expect(wrapper.find('.result--cell').exists()).toBe(true)
      expect(wrapper.find('.result--cell').hasClass('result--cell--status')).toBe(true)
      expect(wrapper.find('.result--cell').hasClass('dead')).toBe(false)
      expect(wrapper.text()).toBe('text')
    })
    test('status="dead', () => {
      const wrapper = shallow(
        <ResultCell
          status="dead"
          text="text"
          type="status"
        />
      )

      expect(wrapper.find('.result--cell').exists()).toBe(true)
      expect(wrapper.find('.result--cell').hasClass('result--cell--status')).toBe(true)
      expect(wrapper.find('.result--cell').hasClass('dead')).toBe(true)
      expect(wrapper.text()).toBe('text')
    })
    test('status="death by execution', () => {
      const wrapper = shallow(
        <ResultCell
          status="death by execution"
          text="text"
          type="status"
        />
      )

      expect(wrapper.find('.result--cell').exists()).toBe(true)
      expect(wrapper.find('.result--cell').hasClass('result--cell--status')).toBe(true)
      expect(wrapper.find('.result--cell').hasClass('dead')).toBe(true)
      expect(wrapper.text()).toBe('text')
    })
    test('status="death by werewolf attack', () => {
      const wrapper = shallow(
        <ResultCell
          status="death by werewolf attack"
          text="text"
          type="status"
        />
      )

      expect(wrapper.find('.result--cell').exists()).toBe(true)
      expect(wrapper.find('.result--cell').hasClass('result--cell--status')).toBe(true)
      expect(wrapper.find('.result--cell').hasClass('dead')).toBe(true)
      expect(wrapper.text()).toBe('text')
    })
    test('status="death by fear', () => {
      const wrapper = shallow(
        <ResultCell
          status="death by fear"
          text="text"
          type="status"
        />
      )

      expect(wrapper.find('.result--cell').exists()).toBe(true)
      expect(wrapper.find('.result--cell').hasClass('result--cell--status')).toBe(true)
      expect(wrapper.find('.result--cell').hasClass('dead')).toBe(true)
      expect(wrapper.text()).toBe('text')
    })
    test('status="unnatural death', () => {
      const wrapper = shallow(
        <ResultCell
          status="unnatural death"
          text="text"
          type="status"
        />
      )

      expect(wrapper.find('.result--cell').exists()).toBe(true)
      expect(wrapper.find('.result--cell').hasClass('result--cell--status')).toBe(true)
      expect(wrapper.find('.result--cell').hasClass('dead')).toBe(true)
      expect(wrapper.text()).toBe('text')
    })
  })
  describe('type="userName"', () => {
    test('status="alive"', () => {
      const wrapper = shallow(
        <ResultCell
          status="alive"
          text="text"
          type="userName"
        />
      )

      expect(wrapper.find('.result--cell').exists()).toBe(true)
      expect(wrapper.find('.result--cell').hasClass('result--cell--userName')).toBe(true)
      expect(wrapper.find('.result--cell').hasClass('dead')).toBe(false)
      expect(wrapper.text()).toBe('text')
    })
    test('status="dead"', () => {
      const wrapper = shallow(
        <ResultCell
          status="dead"
          text="text"
          type="userName"
        />
      )

      expect(wrapper.find('.result--cell').exists()).toBe(true)
      expect(wrapper.find('.result--cell').hasClass('result--cell--userName')).toBe(true)
      expect(wrapper.find('.result--cell').hasClass('dead')).toBe(true)
      expect(wrapper.text()).toBe('text')
    })
    test('status="death by execution"', () => {
      const wrapper = shallow(
        <ResultCell
          status="death by execution"
          text="text"
          type="userName"
        />
      )

      expect(wrapper.find('.result--cell').exists()).toBe(true)
      expect(wrapper.find('.result--cell').hasClass('result--cell--userName')).toBe(true)
      expect(wrapper.find('.result--cell').hasClass('dead')).toBe(true)
      expect(wrapper.text()).toBe('text')
    })
    test('status="death by werewolf attack"', () => {
      const wrapper = shallow(
        <ResultCell
          status="death by werewolf attack"
          text="text"
          type="userName"
        />
      )

      expect(wrapper.find('.result--cell').exists()).toBe(true)
      expect(wrapper.find('.result--cell').hasClass('result--cell--userName')).toBe(true)
      expect(wrapper.find('.result--cell').hasClass('dead')).toBe(true)
      expect(wrapper.text()).toBe('text')
    })
    test('status="death by fear"', () => {
      const wrapper = shallow(
        <ResultCell
          status="death by fear"
          text="text"
          type="userName"
        />
      )

      expect(wrapper.find('.result--cell').exists()).toBe(true)
      expect(wrapper.find('.result--cell').hasClass('result--cell--userName')).toBe(true)
      expect(wrapper.find('.result--cell').hasClass('dead')).toBe(true)
      expect(wrapper.text()).toBe('text')
    })
    test('status="unnatural death"', () => {
      const wrapper = shallow(
        <ResultCell
          status="unnatural death"
          text="text"
          type="userName"
        />
      )

      expect(wrapper.find('.result--cell').exists()).toBe(true)
      expect(wrapper.find('.result--cell').hasClass('result--cell--userName')).toBe(true)
      expect(wrapper.find('.result--cell').hasClass('dead')).toBe(true)
      expect(wrapper.text()).toBe('text')
    })
  })
})

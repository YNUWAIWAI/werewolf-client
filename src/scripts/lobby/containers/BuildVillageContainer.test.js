// @flow
import * as ActionTypes from '../constants/ActionTypes'
import BuildVillageContainer from './BuildVillageContainer'
import React from 'react'
import {initialState} from '../reducers/buildVillage'
import {shallow} from 'enzyme'

describe('<BuildVillageContainer />', () => {
  test('initialState', () => {
    const dispatch = jest.fn()
    const getState = () => ({
      buildVillage: initialState
    })
    const subscribe = jest.fn()
    const store = {
      dispatch,
      getState,
      subscribe
    }
    const wrapper = shallow(
      <BuildVillageContainer
        store={store}
        transition={jest.fn()}
      />
    )

    expect(wrapper.props().menuItems).toEqual([])
    expect(wrapper.props().value).toEqual({
      avatar: 'random',
      comment: '',
      hostName: 'Anonymous',
      numberOfHumans: 14,
      numberOfPlayers: 15,
      numberOfRobots: 1,
      villageName: 'Cursed Village'
    })
  })

  test('buildVillage is enable', () => {
    const dispatch = jest.fn()
    const getState = () => ({
      buildVillage: {
        ... initialState,
        menuItems: [
          {
            text: 'Build',
            types: [ActionTypes.BUILD_VILLAGE]
          },
          {
            text: 'Return to Lobby for Human Player',
            types: [ActionTypes.SHOW_LOBBY_FOR_HUMAN_PLAYER]
          },
          {
            text: 'Return to the Main Page',
            types: [ActionTypes.SHOW_MAIN]
          }
        ],
        validity: {
          avatar: true,
          comment: true,
          hostName: true,
          numberOfPlayers: true,
          numberOfRobots: true,
          villageName: true
        }
      }
    })
    const subscribe = jest.fn()
    const store = {
      dispatch,
      getState,
      subscribe
    }
    const wrapper = shallow(
      <BuildVillageContainer
        store={store}
        transition={jest.fn()}
      />
    )

    expect(wrapper.props().menuItems).toEqual([
      {
        text: 'Build',
        types: [ActionTypes.BUILD_VILLAGE]
      },
      {
        text: 'Return to Lobby for Human Player',
        types: [ActionTypes.SHOW_LOBBY_FOR_HUMAN_PLAYER]
      },
      {
        text: 'Return to the Main Page',
        types: [ActionTypes.SHOW_MAIN]
      }
    ])
    expect(wrapper.props().value).toEqual({
      avatar: 'random',
      comment: '',
      hostName: 'Anonymous',
      numberOfHumans: 14,
      numberOfPlayers: 15,
      numberOfRobots: 1,
      villageName: 'Cursed Village'
    })
  })
  test('buildVillage is disable', () => {
    const dispatch = jest.fn()
    const getState = () => ({
      buildVillage: {
        ... initialState,
        menuItems: [
          {
            text: 'Build',
            types: [ActionTypes.BUILD_VILLAGE]
          },
          {
            text: 'Return to Lobby for Human Player',
            types: [ActionTypes.SHOW_LOBBY_FOR_HUMAN_PLAYER]
          },
          {
            text: 'Return to the Main Page',
            types: [ActionTypes.SHOW_MAIN]
          }
        ],
        validity: {
          avatar: false,
          comment: true,
          hostName: true,
          numberOfPlayers: true,
          numberOfRobots: true,
          villageName: true
        }
      }
    })
    const subscribe = jest.fn()
    const store = {
      dispatch,
      getState,
      subscribe
    }
    const wrapper = shallow(
      <BuildVillageContainer
        store={store}
        transition={jest.fn()}
      />
    )

    expect(wrapper.props().menuItems).toEqual([
      {
        disabled: true,
        text: 'Build',
        types: [ActionTypes.BUILD_VILLAGE]
      },
      {
        text: 'Return to Lobby for Human Player',
        types: [ActionTypes.SHOW_LOBBY_FOR_HUMAN_PLAYER]
      },
      {
        text: 'Return to the Main Page',
        types: [ActionTypes.SHOW_MAIN]
      }
    ])
    expect(wrapper.props().value).toEqual({
      avatar: 'random',
      comment: '',
      hostName: 'Anonymous',
      numberOfHumans: 14,
      numberOfPlayers: 15,
      numberOfRobots: 1,
      villageName: 'Cursed Village'
    })
  })
})

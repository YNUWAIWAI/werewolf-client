// @flow
import {DAY, FLAVOR_TEXT, MORNING, NIGHT, POST_MORTEM, RESULT} from '../constants/Phase'
import CommandContainer from './CommandContainer'
import CommandGrave from './CommandGraveContainer'
import CommandInputBox from './CommandInputBoxContainer'
import CommandPostMortem from './CommandPostMortemContainer'
import CommandSelection from './CommandSelectionContainer'
import React from 'react'
import {shallow} from 'enzyme'

describe('<CommandContainer />', () => {
  test('DAY', () => {
    const dispatch = jest.fn()
    const getState = () => ({
      agents: {
        mine: {
          '@context': 'https://werewolf.world/context/0.2/agent.jsonld',
          '@id': 'https://licos.online/state/0.2/village#3/agent#1',
          'id': 1,
          'image': 'https://werewolf.world/image/0.2/Walter.jpg',
          'isAChoice': false,
          'isMine': true,
          'name': {
            'en': 'Walter',
            'ja': 'ヴァルター'
          },
          'status': 'alive',
          'update': {
            '@id': 'https://licos.online/state/0.2/village#3/agent#1/update',
            'date': 1,
            'phase': 'morning'
          }
        }
      },
      base: {
        phase: DAY
      },
      hideButton: {
        hide: false
      }
    })
    const subscribe = jest.fn()
    const store = {
      dispatch,
      getState,
      subscribe
    }
    const wrapper = shallow(<CommandContainer store={store} />)

    expect(wrapper.props().content).toEqual(<CommandSelection />)
    expect(wrapper.props().hide).toBe(false)
  })
  test('FLAVOR_TEXT', () => {
    const dispatch = jest.fn()
    const getState = () => ({
      agents: {
        mine: {
          '@context': 'https://werewolf.world/context/0.2/agent.jsonld',
          '@id': 'https://licos.online/state/0.2/village#3/agent#1',
          'id': 1,
          'image': 'https://werewolf.world/image/0.2/Walter.jpg',
          'isAChoice': false,
          'isMine': true,
          'name': {
            'en': 'Walter',
            'ja': 'ヴァルター'
          },
          'status': 'alive',
          'update': {
            '@id': 'https://licos.online/state/0.2/village#3/agent#1/update',
            'date': 1,
            'phase': 'morning'
          }
        }
      },
      base: {
        phase: FLAVOR_TEXT
      },
      hideButton: {
        hide: false
      }
    })
    const subscribe = jest.fn()
    const store = {
      dispatch,
      getState,
      subscribe
    }
    const wrapper = shallow(<CommandContainer store={store} />)

    expect(wrapper.props().content).toEqual(<CommandInputBox />)
    expect(wrapper.props().hide).toBe(false)
  })
  test('MORNING', () => {
    const dispatch = jest.fn()
    const getState = () => ({
      agents: {
        mine: {
          '@context': 'https://werewolf.world/context/0.2/agent.jsonld',
          '@id': 'https://licos.online/state/0.2/village#3/agent#1',
          'id': 1,
          'image': 'https://werewolf.world/image/0.2/Walter.jpg',
          'isAChoice': false,
          'isMine': true,
          'name': {
            'en': 'Walter',
            'ja': 'ヴァルター'
          },
          'status': 'alive',
          'update': {
            '@id': 'https://licos.online/state/0.2/village#3/agent#1/update',
            'date': 1,
            'phase': 'morning'
          }
        }
      },
      base: {
        phase: MORNING
      },
      hideButton: {
        hide: false
      }
    })
    const subscribe = jest.fn()
    const store = {
      dispatch,
      getState,
      subscribe
    }
    const wrapper = shallow(<CommandContainer store={store} />)

    expect(wrapper.props().content).toEqual(<CommandInputBox />)
    expect(wrapper.props().hide).toBe(false)
  })
  test('NIGHT', () => {
    const dispatch = jest.fn()
    const getState = () => ({
      agents: {
        mine: {
          '@context': 'https://werewolf.world/context/0.2/agent.jsonld',
          '@id': 'https://licos.online/state/0.2/village#3/agent#1',
          'id': 1,
          'image': 'https://werewolf.world/image/0.2/Walter.jpg',
          'isAChoice': false,
          'isMine': true,
          'name': {
            'en': 'Walter',
            'ja': 'ヴァルター'
          },
          'status': 'alive',
          'update': {
            '@id': 'https://licos.online/state/0.2/village#3/agent#1/update',
            'date': 1,
            'phase': 'morning'
          }
        }
      },
      base: {
        phase: NIGHT
      },
      hideButton: {
        hide: false
      }
    })
    const subscribe = jest.fn()
    const store = {
      dispatch,
      getState,
      subscribe
    }
    const wrapper = shallow(<CommandContainer store={store} />)

    expect(wrapper.props().content).toEqual(<CommandSelection />)
    expect(wrapper.props().hide).toBe(false)
  })
  test('POST_MORTEM', () => {
    const dispatch = jest.fn()
    const getState = () => ({
      agents: {
        mine: {
          '@context': 'https://werewolf.world/context/0.2/agent.jsonld',
          '@id': 'https://licos.online/state/0.2/village#3/agent#1',
          'id': 1,
          'image': 'https://werewolf.world/image/0.2/Walter.jpg',
          'isAChoice': false,
          'isMine': true,
          'name': {
            'en': 'Walter',
            'ja': 'ヴァルター'
          },
          'status': 'alive',
          'update': {
            '@id': 'https://licos.online/state/0.2/village#3/agent#1/update',
            'date': 1,
            'phase': 'morning'
          }
        }
      },
      base: {
        phase: POST_MORTEM
      },
      hideButton: {
        hide: false
      }
    })
    const subscribe = jest.fn()
    const store = {
      dispatch,
      getState,
      subscribe
    }
    const wrapper = shallow(<CommandContainer store={store} />)

    expect(wrapper.props().content).toEqual(<CommandPostMortem />)
    expect(wrapper.props().hide).toBe(false)
  })
  test('RESULT', () => {
    const dispatch = jest.fn()
    const getState = () => ({
      agents: {
        mine: {
          '@context': 'https://werewolf.world/context/0.2/agent.jsonld',
          '@id': 'https://licos.online/state/0.2/village#3/agent#1',
          'id': 1,
          'image': 'https://werewolf.world/image/0.2/Walter.jpg',
          'isAChoice': false,
          'isMine': true,
          'name': {
            'en': 'Walter',
            'ja': 'ヴァルター'
          },
          'status': 'alive',
          'update': {
            '@id': 'https://licos.online/state/0.2/village#3/agent#1/update',
            'date': 1,
            'phase': 'morning'
          }
        }
      },
      base: {
        phase: RESULT
      },
      hideButton: {
        hide: false
      }
    })
    const subscribe = jest.fn()
    const store = {
      dispatch,
      getState,
      subscribe
    }
    const wrapper = shallow(<CommandContainer store={store} />)

    expect(wrapper.props().content).toEqual(<CommandPostMortem />)
    expect(wrapper.props().hide).toBe(false)
  })
  test('agents.mine === undefined', () => {
    const dispatch = jest.fn()
    const getState = () => ({
      agents: {},
      base: {
        phase: DAY
      },
      hideButton: {
        hide: false
      }
    })
    const subscribe = jest.fn()
    const store = {
      dispatch,
      getState,
      subscribe
    }
    const wrapper = shallow(<CommandContainer store={store} />)

    expect(wrapper.props().content).toEqual(<CommandSelection />)
    expect(wrapper.props().hide).toBe(false)
  })
  test('agents.mine.status !== \'alive\'', () => {
    const dispatch = jest.fn()
    const getState = () => ({
      agents: {
        mine: {
          '@context': 'https://werewolf.world/context/0.2/agent.jsonld',
          '@id': 'https://licos.online/state/0.2/village#3/agent#1',
          'id': 1,
          'image': 'https://werewolf.world/image/0.2/Walter.jpg',
          'isAChoice': false,
          'isMine': true,
          'name': {
            'en': 'Walter',
            'ja': 'ヴァルター'
          },
          'status': 'death',
          'update': {
            '@id': 'https://licos.online/state/0.2/village#3/agent#1/update',
            'date': 1,
            'phase': 'morning'
          }
        }
      },
      base: {
        phase: DAY
      },
      hideButton: {
        hide: false
      }
    })
    const subscribe = jest.fn()
    const store = {
      dispatch,
      getState,
      subscribe
    }
    const wrapper = shallow(<CommandContainer store={store} />)

    expect(wrapper.props().content).toEqual(<CommandGrave />)
    expect(wrapper.props().hide).toBe(false)
  })
})

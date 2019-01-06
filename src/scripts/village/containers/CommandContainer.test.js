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
  test('phase: DAY, isDead: false', () => {
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
  test('phase: DAY, isDead: true', () => {
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
          'status': 'dead',
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
  test('phase: FLAVOR_TEXT, isDead: false', () => {
    const dispatch = jest.fn()
    const getState = () => ({
      agents: {},
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

    expect(wrapper.props().content).toEqual(<CommandSelection />)
    expect(wrapper.props().hide).toBe(false)
  })
  test('phase: FLAVOR_TEXT, isDead: true', () => {
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
          'status': 'dead',
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

    expect(wrapper.props().content).toEqual(<CommandGrave />)
    expect(wrapper.props().hide).toBe(false)
  })
  test('phase: MORNING, isDead: false', () => {
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
  test('phase: MORNING, isDead: true', () => {
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
          'status': 'dead',
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

    expect(wrapper.props().content).toEqual(<CommandGrave />)
    expect(wrapper.props().hide).toBe(false)
  })
  test('phase: NIGHT, isDead: false', () => {
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
  test('phase: NIGHT, isDead: true', () => {
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
          'status': 'dead',
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

    expect(wrapper.props().content).toEqual(<CommandGrave />)
    expect(wrapper.props().hide).toBe(false)
  })
  test('phase: POST_MORTEM, isDead: false', () => {
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
  test('phase: POST_MORTEM, isDead: true', () => {
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
          'status': 'dead',
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
  test('phase: RESULT, isDead: false', () => {
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
  test('phase: RESULT, isDead: true', () => {
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
          'status': 'dead',
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
})

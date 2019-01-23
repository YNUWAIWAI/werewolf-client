import * as React from 'react'
import {DAY, FLAVOR_TEXT, MORNING, NIGHT, POST_MORTEM, RESULT} from '../constants/Phase'
import CommandContainer from './CommandContainer'
import CommandGrave from './CommandGraveContainer'
import CommandInputBox from './CommandInputBoxContainer'
import CommandPostMortem from './CommandPostMortemContainer'
import CommandSelection from './CommandSelectionContainer'
import IntlProviderContainer from './IntlProviderContainer'
import {Provider} from 'react-redux'
import fakeStore from './fakeStore'
import {mount} from 'enzyme'

describe('<CommandContainer />', () => {
  test('phase: DAY, isDead: false', () => {
    const store = fakeStore(
      {
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
        }
      }
    )
    const wrapper = mount(
      <Provider store={store} >
        <IntlProviderContainer>
          <CommandContainer />
        </IntlProviderContainer>
      </Provider>
    )

    expect(wrapper.find(CommandSelection).exists()).toBe(true)
    expect(wrapper.find('.command').hasClass('hidden')).toBe(false)
    expect(wrapper.html()).toMatchSnapshot()

  })
  test('phase: DAY, isDead: true', () => {
    const store = fakeStore(
      {
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
        }
      }
    )
    const wrapper = mount(
      <Provider store={store} >
        <IntlProviderContainer>
          <CommandContainer />
        </IntlProviderContainer>
      </Provider>
    )

    expect(wrapper.find(CommandGrave).exists()).toBe(true)
    expect(wrapper.find('.command').hasClass('hidden')).toBe(false)
    expect(wrapper.html()).toMatchSnapshot()
  })
  test('phase: FLAVOR_TEXT, isDead: false', () => {
    const store = fakeStore(
      {
        agents: {},
        base: {
          phase: FLAVOR_TEXT
        }
      }
    )
    const wrapper = mount(
      <Provider store={store} >
        <IntlProviderContainer>
          <CommandContainer />
        </IntlProviderContainer>
      </Provider>
    )

    expect(wrapper.find(CommandSelection).exists()).toBe(true)
    expect(wrapper.find('.command').hasClass('hidden')).toBe(false)
    expect(wrapper.html()).toMatchSnapshot()
  })
  test('phase: FLAVOR_TEXT, isDead: true', () => {
    const store = fakeStore(
      {
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
        }
      }
    )
    const wrapper = mount(
      <Provider store={store} >
        <IntlProviderContainer>
          <CommandContainer />
        </IntlProviderContainer>
      </Provider>
    )

    expect(wrapper.find(CommandGrave).exists()).toBe(true)
    expect(wrapper.find('.command').hasClass('hidden')).toBe(false)
    expect(wrapper.html()).toMatchSnapshot()
  })
  test('phase: MORNING, isDead: false', () => {
    const store = fakeStore(
      {
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
        }
      }
    )
    const wrapper = mount(
      <Provider store={store} >
        <IntlProviderContainer>
          <CommandContainer />
        </IntlProviderContainer>
      </Provider>
    )

    expect(wrapper.find(CommandInputBox).exists()).toBe(true)
    expect(wrapper.find('.command').hasClass('hidden')).toBe(false)
    expect(wrapper.html()).toMatchSnapshot()
  })
  test('phase: MORNING, isDead: true', () => {
    const store = fakeStore(
      {
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
        }
      }
    )
    const wrapper = mount(
      <Provider store={store} >
        <IntlProviderContainer>
          <CommandContainer />
        </IntlProviderContainer>
      </Provider>
    )

    expect(wrapper.find(CommandGrave).exists()).toBe(true)
    expect(wrapper.find('.command').hasClass('hidden')).toBe(false)
    expect(wrapper.html()).toMatchSnapshot()
  })
  test('phase: NIGHT, isDead: false', () => {
    const store = fakeStore(
      {
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
        }
      }
    )
    const wrapper = mount(
      <Provider store={store} >
        <IntlProviderContainer>
          <CommandContainer />
        </IntlProviderContainer>
      </Provider>
    )

    expect(wrapper.find(CommandSelection).exists()).toBe(true)
    expect(wrapper.find('.command').hasClass('hidden')).toBe(false)
    expect(wrapper.html()).toMatchSnapshot()
  })
  test('phase: NIGHT, isDead: true', () => {
    const store = fakeStore(
      {
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
        }
      }
    )
    const wrapper = mount(
      <Provider store={store} >
        <IntlProviderContainer>
          <CommandContainer />
        </IntlProviderContainer>
      </Provider>
    )

    expect(wrapper.find(CommandGrave).exists()).toBe(true)
    expect(wrapper.find('.command').hasClass('hidden')).toBe(false)
    expect(wrapper.html()).toMatchSnapshot()
  })
  test('phase: POST_MORTEM, isDead: false', () => {
    const store = fakeStore(
      {
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
        }
      }
    )
    const wrapper = mount(
      <Provider store={store} >
        <IntlProviderContainer>
          <CommandContainer />
        </IntlProviderContainer>
      </Provider>
    )

    expect(wrapper.find(CommandPostMortem).exists()).toBe(true)
    expect(wrapper.find('.command').hasClass('hidden')).toBe(false)
    expect(wrapper.html()).toMatchSnapshot()
  })
  test('phase: POST_MORTEM, isDead: true', () => {
    const store = fakeStore(
      {
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
        }
      }
    )
    const wrapper = mount(
      <Provider store={store} >
        <IntlProviderContainer>
          <CommandContainer />
        </IntlProviderContainer>
      </Provider>
    )

    expect(wrapper.find(CommandPostMortem).exists()).toBe(true)
    expect(wrapper.find('.command').hasClass('hidden')).toBe(false)
    expect(wrapper.html()).toMatchSnapshot()
  })
  test('phase: RESULT, isDead: false', () => {
    const store = fakeStore(
      {
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
        }
      }
    )
    const wrapper = mount(
      <Provider store={store} >
        <IntlProviderContainer>
          <CommandContainer />
        </IntlProviderContainer>
      </Provider>
    )

    expect(wrapper.find(CommandPostMortem).exists()).toBe(true)
    expect(wrapper.find('.command').hasClass('hidden')).toBe(false)
    expect(wrapper.html()).toMatchSnapshot()
  })
  test('phase: RESULT, isDead: true', () => {
    const store = fakeStore(
      {
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
        }
      }
    )
    const wrapper = mount(
      <Provider store={store} >
        <IntlProviderContainer>
          <CommandContainer />
        </IntlProviderContainer>
      </Provider>
    )

    expect(wrapper.find(CommandPostMortem).exists()).toBe(true)
    expect(wrapper.find('.command').hasClass('hidden')).toBe(false)
    expect(wrapper.html()).toMatchSnapshot()
  })
  test('agents.mine === undefined', () => {
    const store = fakeStore(
      {
        agents: {},
        base: {
          phase: DAY
        }
      }
    )
    const wrapper = mount(
      <Provider store={store} >
        <IntlProviderContainer>
          <CommandContainer />
        </IntlProviderContainer>
      </Provider>
    )

    expect(wrapper.find(CommandSelection).exists()).toBe(true)
    expect(wrapper.find('.command').hasClass('hidden')).toBe(false)
    expect(wrapper.html()).toMatchSnapshot()
  })
})

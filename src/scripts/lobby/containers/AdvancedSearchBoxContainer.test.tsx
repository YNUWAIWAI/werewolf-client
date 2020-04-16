import * as ActionTypes from '../constants/ActionTypes'
import * as React from 'react'
import AdvancedSearchBox from '../components/organisms/AdvancedSearchBox'
import AdvancedSearchBoxContainer from './AdvancedSearchBoxContainer'
import IntlProviderContainer from './IntlProviderContainer'
import {Provider} from 'react-redux'
import fakeStore from './fakeStore'
import {initialState} from '../reducers/advancedSearch'
import {lobby} from '../types'
import {mount} from 'enzyme'

describe('render', () => {
  test('advancedSearch is enabled', () => {
    const store = fakeStore(
      {
        advancedSearch: {
          ... initialState,
          checked: {
            avatar: true,
            comment: false,
            hostName: false,
            maximum: false,
            minimum: false,
            villageName: false
          },
          validity: {
            avatar: true,
            comment: false,
            hostName: false,
            maximum: false,
            minimum: false,
            villageName: false
          },
          value: {
            avatar: lobby.Avatar.random,
            comment: '',
            hostName: '',
            maximum: -1,
            minimum: -1,
            villageName: ''
          }
        }
      }
    )
    const wrapper = mount(
      <Provider store={store} >
        <IntlProviderContainer>
          <AdvancedSearchBoxContainer />
        </IntlProviderContainer>
      </Provider>
    )

    expect(wrapper.html()).toMatchSnapshot()
  })
  test('advancedSearch is disabled', () => {
    const store = fakeStore(
      {
        advancedSearch: {
          ... initialState,
          checked: {
            avatar: true,
            comment: false,
            hostName: false,
            maximum: false,
            minimum: false,
            villageName: false
          },
          validity: {
            avatar: false,
            comment: false,
            hostName: false,
            maximum: false,
            minimum: false,
            villageName: false
          },
          value: {
            avatar: lobby.Avatar.random,
            comment: '',
            hostName: '',
            maximum: -1,
            minimum: -1,
            villageName: ''
          }
        }
      }
    )
    const wrapper = mount(
      <Provider store={store} >
        <IntlProviderContainer>
          <AdvancedSearchBoxContainer />
        </IntlProviderContainer>
      </Provider>
    )

    expect(wrapper.html()).toMatchSnapshot()
  })
})
test('handleAvatarChange', () => {
  const store = fakeStore(
    {
      advancedSearch: {
        ... initialState,
        checked: {
          avatar: true,
          comment: false,
          hostName: false,
          maximum: false,
          minimum: false,
          villageName: false
        },
        validity: {
          avatar: true,
          comment: false,
          hostName: false,
          maximum: false,
          minimum: false,
          villageName: false
        },
        value: {
          avatar: lobby.Avatar.random,
          comment: '',
          hostName: '',
          maximum: -1,
          minimum: -1,
          villageName: ''
        }
      }
    }
  )
  const dispatch = jest.fn()

  store.dispatch = dispatch
  const wrapper = mount(
    <Provider store={store} >
      <IntlProviderContainer>
        <AdvancedSearchBoxContainer />
      </IntlProviderContainer>
    </Provider>
  )
  const avatar = lobby.Avatar.fixed

  wrapper.find(AdvancedSearchBox).props().handleAvatarChange(true)(avatar)
  expect(dispatch).toHaveBeenCalledTimes(1)
  expect(dispatch).toHaveBeenCalledWith({
    avatar,
    type: ActionTypes.AdvancedSearch.CHANGE_AVATAR,
    valid: true
  })
})
test('handleCheckboxChange', () => {
  const store = fakeStore(
    {
      advancedSearch: {
        ... initialState,
        checked: {
          avatar: true,
          comment: false,
          hostName: false,
          maximum: false,
          minimum: false,
          villageName: false
        },
        validity: {
          avatar: true,
          comment: false,
          hostName: false,
          maximum: false,
          minimum: false,
          villageName: false
        },
        value: {
          avatar: lobby.Avatar.random,
          comment: '',
          hostName: '',
          maximum: -1,
          minimum: -1,
          villageName: ''
        }
      }
    }
  )
  const dispatch = jest.fn()

  store.dispatch = dispatch
  const wrapper = mount(
    <Provider store={store} >
      <IntlProviderContainer>
        <AdvancedSearchBoxContainer />
      </IntlProviderContainer>
    </Provider>
  )
  const propName = 'villageName'
  const checked = true

  wrapper.find(AdvancedSearchBox).props().handleCheckboxChange(propName)(checked)
  expect(dispatch).toHaveBeenCalledTimes(1)
  expect(dispatch).toHaveBeenCalledWith({
    checked,
    propName,
    type: ActionTypes.AdvancedSearch.CHANGE_CHECKBOX
  })
})
describe('handleNumberChange', () => {
  test('maximum', () => {
    const store = fakeStore(
      {
        advancedSearch: {
          ... initialState,
          checked: {
            avatar: true,
            comment: false,
            hostName: false,
            maximum: false,
            minimum: false,
            villageName: false
          },
          validity: {
            avatar: true,
            comment: false,
            hostName: false,
            maximum: false,
            minimum: false,
            villageName: false
          },
          value: {
            avatar: lobby.Avatar.random,
            comment: '',
            hostName: '',
            maximum: -1,
            minimum: -1,
            villageName: ''
          }
        }
      }
    )
    const dispatch = jest.fn()

    store.dispatch = dispatch
    const wrapper = mount(
      <Provider store={store} >
        <IntlProviderContainer>
          <AdvancedSearchBoxContainer />
        </IntlProviderContainer>
      </Provider>
    )
    const maximum = 10

    wrapper.find(AdvancedSearchBox).props().handleNumberChange('maximum')(true)(maximum)
    expect(dispatch).toHaveBeenCalledTimes(1)
    expect(dispatch).toHaveBeenCalledWith({
      maximum,
      type: ActionTypes.AdvancedSearch.CHANGE_MAXIMUM,
      valid: true
    })
  })
  test('minimum', () => {
    const store = fakeStore(
      {
        advancedSearch: {
          ... initialState,
          checked: {
            avatar: true,
            comment: false,
            hostName: false,
            maximum: false,
            minimum: false,
            villageName: false
          },
          validity: {
            avatar: true,
            comment: false,
            hostName: false,
            maximum: false,
            minimum: false,
            villageName: false
          },
          value: {
            avatar: lobby.Avatar.random,
            comment: '',
            hostName: '',
            maximum: -1,
            minimum: -1,
            villageName: ''
          }
        }
      }
    )
    const dispatch = jest.fn()

    store.dispatch = dispatch
    const wrapper = mount(
      <Provider store={store} >
        <IntlProviderContainer>
          <AdvancedSearchBoxContainer />
        </IntlProviderContainer>
      </Provider>
    )
    const minimum = 10

    wrapper.find(AdvancedSearchBox).props().handleNumberChange('minimum')(true)(minimum)
    expect(dispatch).toHaveBeenCalledTimes(1)
    expect(dispatch).toHaveBeenCalledWith({
      minimum,
      type: ActionTypes.AdvancedSearch.CHANGE_MINIMUM,
      valid: true
    })
  })
})
describe('handleTextChange', () => {
  test('comment', () => {
    const store = fakeStore(
      {
        advancedSearch: {
          ... initialState,
          checked: {
            avatar: true,
            comment: false,
            hostName: false,
            maximum: false,
            minimum: false,
            villageName: false
          },
          validity: {
            avatar: true,
            comment: false,
            hostName: false,
            maximum: false,
            minimum: false,
            villageName: false
          },
          value: {
            avatar: lobby.Avatar.random,
            comment: '',
            hostName: '',
            maximum: -1,
            minimum: -1,
            villageName: ''
          }
        }
      }
    )
    const dispatch = jest.fn()

    store.dispatch = dispatch
    const wrapper = mount(
      <Provider store={store} >
        <IntlProviderContainer>
          <AdvancedSearchBoxContainer />
        </IntlProviderContainer>
      </Provider>
    )
    const comment = 'comment'

    wrapper.find(AdvancedSearchBox).props().handleTextChange('comment')(true)(comment)
    expect(dispatch).toHaveBeenCalledTimes(1)
    expect(dispatch).toHaveBeenCalledWith({
      comment,
      type: ActionTypes.AdvancedSearch.CHANGE_COMMENT,
      valid: true
    })
  })
  test('hostName', () => {
    const store = fakeStore(
      {
        advancedSearch: {
          ... initialState,
          checked: {
            avatar: true,
            comment: false,
            hostName: false,
            maximum: false,
            minimum: false,
            villageName: false
          },
          header: 'Header.idSearch(audience)',
          image: '',
          isPlayer: true,
          menuItems: [
            {
              id: 'Menu.search',
              types: [ActionTypes.AdvancedSearch.SEARCH]
            },
            {
              id: 'Menu.returnToLobbyForHumanPlayer',
              types: [ActionTypes.App.SHOW_LOBBY_FOR_HUMAN_PLAYER]
            },
            {
              id: 'Menu.returnToMainPage',
              types: [ActionTypes.App.SHOW_MAIN]
            }
          ],
          name: '',
          searched: false,
          validity: {
            avatar: true,
            comment: false,
            hostName: false,
            maximum: false,
            minimum: false,
            villageName: false
          },
          value: {
            avatar: lobby.Avatar.random,
            comment: '',
            hostName: '',
            maximum: -1,
            minimum: -1,
            villageName: ''
          },
          villageItems: []
        }
      }
    )
    const dispatch = jest.fn()

    store.dispatch = dispatch
    const wrapper = mount(
      <Provider store={store} >
        <IntlProviderContainer>
          <AdvancedSearchBoxContainer />
        </IntlProviderContainer>
      </Provider>
    )
    const hostName = 'hostName'

    wrapper.find(AdvancedSearchBox).props().handleTextChange('hostName')(true)(hostName)
    expect(dispatch).toHaveBeenCalledTimes(1)
    expect(dispatch).toHaveBeenCalledWith({
      hostName,
      type: ActionTypes.AdvancedSearch.CHANGE_HOST_NAME,
      valid: true
    })
  })
  test('villageName', () => {
    const store = fakeStore(
      {
        advancedSearch: {
          checked: {
            avatar: true,
            comment: false,
            hostName: false,
            maximum: false,
            minimum: false,
            villageName: false
          },
          header: 'Header.idSearch(audience)',
          image: '',
          isPlayer: true,
          menuItems: [
            {
              id: 'Menu.search',
              types: [ActionTypes.AdvancedSearch.SEARCH]
            },
            {
              id: 'Menu.returnToLobbyForHumanPlayer',
              types: [ActionTypes.App.SHOW_LOBBY_FOR_HUMAN_PLAYER]
            },
            {
              id: 'Menu.returnToMainPage',
              types: [ActionTypes.App.SHOW_MAIN]
            }
          ],
          name: '',
          searched: false,
          validity: {
            avatar: true,
            comment: false,
            hostName: false,
            maximum: false,
            minimum: false,
            villageName: false
          },
          value: {
            avatar: lobby.Avatar.random,
            comment: '',
            hostName: '',
            maximum: -1,
            minimum: -1,
            villageName: ''
          },
          villageItems: []
        }
      }
    )
    const dispatch = jest.fn()

    store.dispatch = dispatch
    const wrapper = mount(
      <Provider store={store} >
        <IntlProviderContainer>
          <AdvancedSearchBoxContainer />
        </IntlProviderContainer>
      </Provider>
    )
    const villageName = 'villageName'

    wrapper.find(AdvancedSearchBox).props().handleTextChange('villageName')(true)(villageName)
    expect(dispatch).toHaveBeenCalledTimes(1)
    expect(dispatch).toHaveBeenCalledWith({
      type: ActionTypes.AdvancedSearch.CHANGE_VILLAGE_NAME,
      valid: true,
      villageName
    })
  })
})

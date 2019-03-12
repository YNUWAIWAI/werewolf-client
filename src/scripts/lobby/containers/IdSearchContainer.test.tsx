import * as ActionTypes from '../constants/ActionTypes'
import * as React from 'react'
import IdSearch from '../components/templates/IdSearch'
import IdSearchContainer from './IdSearchContainer'
import IntlProviderContainer from './IntlProviderContainer'
import {Provider} from 'react-redux'
import fakeStore from './fakeStore'
import {mount} from 'enzyme'

describe('<IdSearchContainer />', () => {
  test('render', () => {
    const store = fakeStore(
      {
        idSearch: {
          header: 'Header.idSearch(human player)',
          id: -1,
          image: '',
          isPlayer: true,
          menuItems: [],
          name: '',
          searched: false,
          villageItems: []
        }
      }
    )
    const wrapper = mount(
      <Provider store={store} >
        <IntlProviderContainer>
          <IdSearchContainer />
        </IntlProviderContainer>
      </Provider>
    )

    expect(wrapper.html()).toMatchSnapshot()
  })
  test('handleSearchIdChange', () => {
    const store = fakeStore(
      {
        idSearch: {
          header: 'Header.idSearch(human player)',
          id: -1,
          image: '',
          isPlayer: true,
          menuItems: [],
          name: '',
          searched: false,
          villageItems: []
        }
      }
    )
    const dispatch = jest.fn()

    store.dispatch = dispatch
    const wrapper = mount(
      <Provider store={store} >
        <IntlProviderContainer>
          <IdSearchContainer />
        </IntlProviderContainer>
      </Provider>
    )
    const id = 1

    wrapper.find(IdSearch).props().handleSearchIdChange(id)
    expect(dispatch).toHaveBeenCalledTimes(1)
    expect(dispatch).toHaveBeenCalledWith({
      id,
      type: ActionTypes.idSearch.CHANGE_SEARCH_ID
    })
  })
  test('handleValidityChange', () => {
    const store = fakeStore(
      {
        idSearch: {
          header: 'Header.idSearch(human player)',
          id: -1,
          image: '',
          isPlayer: true,
          menuItems: [],
          name: '',
          searched: false,
          villageItems: []
        }
      }
    )
    const dispatch = jest.fn()

    store.dispatch = dispatch
    const wrapper = mount(
      <Provider store={store} >
        <IntlProviderContainer>
          <IdSearchContainer />
        </IntlProviderContainer>
      </Provider>
    )
    const validity = true

    wrapper.find(IdSearch).props().handleValidityChange(validity)
    expect(dispatch).toHaveBeenCalledTimes(1)
    expect(dispatch).toHaveBeenCalledWith({
      propName: 'id',
      type: ActionTypes.idSearch.CHANGE_VALIDITY,
      validity
    })
  })
  test('selectVillage', () => {
    const store = fakeStore(
      {
        idSearch: {
          header: 'Header.idSearch(human player)',
          id: -1,
          image: '',
          isPlayer: true,
          menuItems: [],
          name: '',
          searched: false,
          villageItems: []
        }
      }
    )
    const dispatch = jest.fn()

    store.dispatch = dispatch
    const wrapper = mount(
      <Provider store={store} >
        <IntlProviderContainer>
          <IdSearchContainer />
        </IntlProviderContainer>
      </Provider>
    )
    const id = 1

    wrapper.find(IdSearch).props().selectVillage(id)()
    expect(dispatch).toHaveBeenCalledTimes(1)
    expect(dispatch).toHaveBeenCalledWith({
      id,
      type: ActionTypes.global.SELECT_VILLAGE
    })
  })
  test('transition', () => {
    const store = fakeStore(
      {
        idSearch: {
          header: 'Header.idSearch(human player)',
          id: -1,
          image: '',
          isPlayer: true,
          menuItems: [],
          name: '',
          searched: false,
          villageItems: []
        }
      }
    )
    const dispatch = jest.fn()

    store.dispatch = dispatch
    const wrapper = mount(
      <Provider store={store} >
        <IntlProviderContainer>
          <IdSearchContainer />
        </IntlProviderContainer>
      </Provider>
    )

    wrapper.find(IdSearch).props().transition(ActionTypes.Target.SHOW_LOBBY_FOR_AUDIENCE)
    expect(dispatch).toHaveBeenCalledTimes(1)
    expect(dispatch).toHaveBeenCalledWith({
      type: ActionTypes.Target.SHOW_LOBBY_FOR_AUDIENCE
    })
  })
})

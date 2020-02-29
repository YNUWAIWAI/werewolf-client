import * as ActionTypes from '../constants/ActionTypes'
import * as React from 'react'
import Confirmation from '../components/organisms/Confirmation'
import ConfirmationContainer from './ConfirmationContainer'
import IntlProviderContainer from './IntlProviderContainer'
import {Provider} from 'react-redux'
import fakeStore from './fakeStore'
import {mount} from 'enzyme'

describe('<ConfirmationContainer />', () => {
  test('render', () => {
    const store = fakeStore({
      confirmation: {
        descriptionId: '@dummy',
        type: 'type',
        values: {
          name: 'Alice',
          token: '3F2504E0-4F89-11D3-9A0C-0305E82C3300'
        }
      }
    })
    const wrapper = mount(
      <Provider store={store} >
        <IntlProviderContainer>
          <ConfirmationContainer />
        </IntlProviderContainer>
      </Provider>
    )

    expect(wrapper.html()).toMatchSnapshot()
  })
  test('handleClickNo', () => {
    const store = fakeStore({
      confirmation: {
        descriptionId: '@dummy',
        type: 'type',
        values: {
          name: '',
          token: ''
        }
      }
    })
    const dispatch = jest.fn()

    store.dispatch = dispatch
    const wrapper = mount(
      <Provider store={store} >
        <IntlProviderContainer>
          <ConfirmationContainer />
        </IntlProviderContainer>
      </Provider>
    )

    wrapper.find(Confirmation).props().handleClickNo()
    expect(dispatch).toHaveBeenCalledTimes(1)
    expect(dispatch).toHaveBeenCalledWith({
      type: ActionTypes.App.SELECT_NO
    })
  })
  describe('handleClickYes', () => {
    test('KICK_OUT_PLAYER', () => {
      const store = fakeStore()
      const dispatch = jest.fn()

      store.dispatch = dispatch
      const wrapper = mount(
        <Provider store={store} >
          <IntlProviderContainer>
            <ConfirmationContainer />
          </IntlProviderContainer>
        </Provider>
      )

      wrapper.find(Confirmation).props().handleClickYes(ActionTypes.App.KICK_OUT_PLAYER)
      expect(dispatch).toHaveBeenCalledTimes(2)
      expect(dispatch).toHaveBeenCalledWith({
        type: ActionTypes.App.SELECT_YES
      })
      expect(dispatch).toHaveBeenCalledWith({
        type: ActionTypes.App.KICK_OUT_PLAYER
      })
    })
    test('default', () => {
      const store = fakeStore()
      const dispatch = jest.fn()

      store.dispatch = dispatch
      const wrapper = mount(
        <Provider store={store} >
          <IntlProviderContainer>
            <ConfirmationContainer />
          </IntlProviderContainer>
        </Provider>
      )

      wrapper.find(Confirmation).props().handleClickYes('ACTION')
      expect(dispatch).toHaveBeenCalledTimes(1)
      expect(dispatch).toHaveBeenCalledWith({
        type: ActionTypes.App.SELECT_YES
      })
    })
  })
})

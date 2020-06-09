import * as React from 'react'
import {CreateNewAvatarSupportBoard} from '../components/organisms/CreateNewAvatarSupportBoard'
import {CreateNewAvatarSupportBoardContainer} from './CreateNewAvatarSupportBoardContainer'
import {IntlProviderContainer} from './IntlProviderContainer'
import {Provider} from 'react-redux'
import {createNewRobotAvatar} from '../actions'
import fakeStore from './fakeStore'
import {mount} from 'enzyme'

const data = {
  '4': {
    A: false,
    B: false,
    C: false
  },
  '5': {
    A: false,
    B: false,
    C: false
  },
  '6': {
    A: false,
    B: false,
    C: false
  },
  '7': {
    A: false,
    B: false,
    C: false
  },
  '8': {
    A: false,
    B: false,
    C: false
  },
  '9': {
    A: false,
    B: false,
    C: false
  },
  '10': {
    A: false,
    B: false,
    C: false
  },
  '11': {
    A: false,
    B: false,
    C: false
  },
  '12': {
    A: false,
    B: false,
    C: false
  },
  '13': {
    A: false,
    B: false,
    C: false
  },
  '14': {
    A: false,
    B: false,
    C: false
  },
  '15': {
    A: false,
    B: false,
    C: false
  }
}

test('render', () => {
  const store = fakeStore({
    createNewRobotAvatarSupport: {
      data
    }
  })
  const wrapper = mount(
    <Provider store={store} >
      <IntlProviderContainer>
        <CreateNewAvatarSupportBoardContainer />
      </IntlProviderContainer>
    </Provider>
  )

  expect(wrapper.html()).toMatchSnapshot()
})
test('handleSupportBoardClick', () => {
  const store = fakeStore({
    createNewRobotAvatarSupport: {
      data
    }
  })
  const dispatch = jest.fn()

  store.dispatch = dispatch
  const wrapper = mount(
    <Provider store={store} >
      <IntlProviderContainer>
        <CreateNewAvatarSupportBoardContainer />
      </IntlProviderContainer>
    </Provider>
  )

  wrapper.find(CreateNewAvatarSupportBoard).props().handleSupportBoardClick()
  expect(dispatch).toHaveBeenCalledTimes(1)
  expect(dispatch).toHaveBeenCalledWith(createNewRobotAvatar.showSupportSelect())
})

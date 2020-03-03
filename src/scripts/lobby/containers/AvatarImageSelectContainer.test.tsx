import * as ActionTypes from '../constants/ActionTypes'
import * as React from 'react'
import {AvatarImageList} from '../constants/AvatarImageList'
import AvatarImageSelect from '../components/organisms/AvatarImageSelect'
import AvatarImageSelectContainer from './AvatarImageSelectContainer'
import {ImagePath} from '../constants/ImagePath'
import IntlProviderContainer from './IntlProviderContainer'
import {Provider} from 'react-redux'
import fakeStore from './fakeStore'
import {lobby} from '../types'
import {mount} from 'enzyme'

describe('<AvatarImageSelectContainer />', () => {
  test('render', () => {
    const token = '3F2504E0-4F89-11D3-9A0C-0305E82C3300'
    const store = fakeStore({
      avatarImageList: {
        imageList: AvatarImageList,
        lobby: lobby.LobbyType.human,
        selectedImage: ImagePath.Character.a,
        token
      }
    })
    const wrapper = mount(
      <Provider store={store} >
        <IntlProviderContainer>
          <AvatarImageSelectContainer />
        </IntlProviderContainer>
      </Provider>
    )

    expect(wrapper.html()).toMatchSnapshot()
  })
  test('handleCloseButtonClick', () => {
    const token = '3F2504E0-4F89-11D3-9A0C-0305E82C3300'
    const store = fakeStore({
      avatarImageList: {
        imageList: AvatarImageList,
        lobby: lobby.LobbyType.human,
        selectedImage: ImagePath.Character.a,
        token
      }
    })
    const dispatch = jest.fn()

    store.dispatch = dispatch
    const wrapper = mount(
      <Provider store={store} >
        <IntlProviderContainer>
          <AvatarImageSelectContainer />
        </IntlProviderContainer>
      </Provider>
    )

    wrapper.find(AvatarImageSelect).props().handleCloseButtonClick()
    expect(dispatch).toHaveBeenCalledTimes(1)
    expect(dispatch).toHaveBeenCalledWith({
      type: ActionTypes.AvatarImageSelect.CLOSE_MODAL
    })
  })
  test('handleImageSelect', () => {
    const token = '3F2504E0-4F89-11D3-9A0C-0305E82C3300'
    const store = fakeStore({
      avatarImageList: {
        imageList: AvatarImageList,
        lobby: lobby.LobbyType.human,
        selectedImage: ImagePath.Character.a,
        token
      }
    })
    const dispatch = jest.fn()

    store.dispatch = dispatch
    const wrapper = mount(
      <Provider store={store} >
        <IntlProviderContainer>
          <AvatarImageSelectContainer />
        </IntlProviderContainer>
      </Provider>
    )
    const image = ImagePath.Character.b

    wrapper.find(AvatarImageSelect).props().handleImageSelect(image)
    expect(dispatch).toHaveBeenCalledTimes(1)
    expect(dispatch).toHaveBeenCalledWith({
      image,
      type: ActionTypes.AvatarImageSelect.SELECT_AVATAR
    })
  })
})

import * as React from 'react'
import {AvatarImageList} from '../../constants/AvatarImageList'
import AvatarImageSelect from './AvatarImageSelect'
import {ImagePath} from '../../constants/ImagePath'
import {Provider} from 'react-redux'
import fakeStore from '../../containers/fakeStore'
import {getMessages} from '../../i18n'
import {initRenderer} from '../../tools'
import {lobby} from '../../types'

const store = fakeStore()
const {mountWithIntl} = initRenderer(lobby.Language.en, getMessages(lobby.Language.en))

test('render', () => {
  const handleImageSelect = jest.fn()
  const handleCloseButtonClick = jest.fn()
  const wrapper = mountWithIntl(
    <Provider store={store}>
      <AvatarImageSelect
        handleCloseButtonClick={handleCloseButtonClick}
        handleImageSelect={handleImageSelect}
        imageList={AvatarImageList}
        selectedImage={ImagePath.Character.a}
      />
    </Provider>
  )

  expect(handleImageSelect).toHaveBeenCalledTimes(0)
  expect(handleCloseButtonClick).toHaveBeenCalledTimes(0)
  expect(wrapper.html()).toMatchSnapshot()
})
test('handleCloseButtonClick', () => {
  const handleImageSelect = jest.fn()
  const handleCloseButtonClick = jest.fn()
  const wrapper = mountWithIntl(
    <Provider store={store}>
      <AvatarImageSelect
        handleCloseButtonClick={handleCloseButtonClick}
        handleImageSelect={handleImageSelect}
        imageList={AvatarImageList}
        selectedImage={ImagePath.Character.a}
      />
    </Provider>
  )

  wrapper.find('.lo--avatar-image-select--close').simulate('click')
  expect(handleCloseButtonClick).toHaveBeenCalledTimes(1)
  expect(handleImageSelect).toHaveBeenCalledTimes(0)
})
test('handleImageSelect', () => {
  const handleImageSelect = jest.fn()
  const handleCloseButtonClick = jest.fn()
  const wrapper = mountWithIntl(
    <Provider store={store}>
      <AvatarImageSelect
        handleCloseButtonClick={handleCloseButtonClick}
        handleImageSelect={handleImageSelect}
        imageList={AvatarImageList}
        selectedImage={ImagePath.Character.a}
      />
    </Provider>
  )

  wrapper.find('.lo--avatar-image-select--image-list--item--image').at(2).simulate('click')
  expect(handleCloseButtonClick).toHaveBeenCalledTimes(0)
  expect(handleImageSelect).toHaveBeenCalledTimes(1)
  expect(handleImageSelect).toHaveBeenCalledWith(AvatarImageList[2])
})


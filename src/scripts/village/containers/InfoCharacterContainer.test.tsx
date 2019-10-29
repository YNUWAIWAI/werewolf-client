import * as React from 'react'
import {Character} from '../constants/Character'
import {ImagePath} from '../constants/ImagePath'
import InfoCharacterContainer from './InfoCharacterContainer'
import IntlProviderContainer from './IntlProviderContainer'
import {Provider} from 'react-redux'
import {VERSION} from '../constants/Version'
import fakeStore from './fakeStore'
import {mount} from 'enzyme'
import {village} from '../types'

describe('<InfoCharacterContainer />', () => {
  test('initialState', () => {
    const store = fakeStore()
    const wrapper = mount(
      <Provider store={store} >
        <IntlProviderContainer>
          <InfoCharacterContainer />
        </IntlProviderContainer>
      </Provider>
    )

    expect(wrapper.html()).toMatchSnapshot()
  })
  test('mine.character exists', () => {
    const store = fakeStore(
      {
        language: village.Language.en,
        mine: {
          character: {
            '@id': `https://licos.online/state/${VERSION}/village#3/character#1`,
            'id': 1,
            'image': ImagePath.Character.a,
            'name': Character.a
          }
        }
      }
    )
    const wrapper = mount(
      <Provider store={store} >
        <IntlProviderContainer>
          <InfoCharacterContainer />
        </IntlProviderContainer>
      </Provider>
    )

    expect(wrapper.html()).toMatchSnapshot()
  })
})

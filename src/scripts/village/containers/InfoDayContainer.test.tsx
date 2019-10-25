import * as React from 'react'
import InfoDayContainer from './InfoDayContainer'
import IntlProviderContainer from './IntlProviderContainer'
import {Provider} from 'react-redux'
import fakeStore from './fakeStore'
import {mount} from 'enzyme'
import {village} from '../types'

test('<InfoDayContainer />', () => {
  const store = fakeStore(
    {
      base: {
        '@id': 'https://licos.online/state/0.2/village#3',
        'clientTimestamp': '2006-10-07T12:06:56.568+09:00',
        'date': 1,
        'intensionalDisclosureRange': village.Channel.private,
        'phase': village.Phase.morning,
        'phaseStartTime': '2006-10-07T12:06:56.568+09:00',
        'phaseTimeLimit': 100,
        'serverTimestamp': '2006-10-07T12:06:56.568+09:00',
        'token': 'eFVr3O93oLhmnE8OqTMl5VSVGIV',
        'village': {
          '@context': village.Context.Village,
          '@id': 'https://licos.online/state/0.2/village',
          'chatSettings': {
            characterLimit: 140,
            limit: 10
          },
          'id': 3,
          'lang': village.Language.en,
          'name': '横国の森の奥にある時代に取り残された小さな村',
          'totalNumberOfCharacters': 15
        }
      }
    }
  )
  const wrapper = mount(
    <Provider store={store} >
      <IntlProviderContainer>
        <InfoDayContainer />
      </IntlProviderContainer>
    </Provider>
  )

  expect(wrapper.html()).toMatchSnapshot()
})

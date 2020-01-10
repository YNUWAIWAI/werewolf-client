import * as React from 'react'
import InfoDayContainer from './InfoDayContainer'
import IntlProviderContainer from './IntlProviderContainer'
import {Provider} from 'react-redux'
import {VERSION} from '../constants/Version'
import fakeStore from './fakeStore'
import {mount} from 'enzyme'
import {village} from '../types'

test('<InfoDayContainer />', () => {
  const store = fakeStore(
    {
      base: {
        '@id': `https://licos.online/state/${VERSION}/village#3`,
        'clientTimestamp': '2006-10-07T12:06:56.568+09:00',
        'day': 1,
        'intensionalDisclosureRange': village.Channel.private,
        'phase': village.Phase.morning,
        'phaseStartTime': '2006-10-07T12:06:56.568+09:00',
        'phaseTimeLimit': 100,
        'serverTimestamp': '2006-10-07T12:06:56.568+09:00',
        'token': '3F2504E0-4F89-11D3-9A0C-0305E82C3300',
        'village': {
          '@id': `https://licos.online/state/${VERSION}/village`,
          'chatSettings': {
            maxLengthOfUnicodeCodePoints: 140,
            maxNumberOfChatMessages: 10
          },
          'id': 3,
          'language': village.Language.en,
          'name': '横国の森の奥にある時代に取り残された小さな村',
          'totalNumberOfPlayers': 15
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

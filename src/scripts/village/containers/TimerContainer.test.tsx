import * as React from 'react'
import IntlProviderContainer from './IntlProviderContainer'
import {Provider} from 'react-redux'
import TimerContainer from './TimerContainer'
import fakeStore from './fakeStore'
import {mount} from 'enzyme'

describe('<TimerContainer />', () => {
  test('initialState', () => {
    const store = fakeStore()
    const wrapper = mount(
      <Provider store={store} >
        <IntlProviderContainer>
          <TimerContainer />
        </IntlProviderContainer>
      </Provider>
    )

    expect(wrapper.html()).toMatchSnapshot()
  })
  test('morning', () => {
    const store = fakeStore({
      base: {
        '@id': 'https://licos.online/state/0.2/village#3',
        'clientTimestamp': '2006-10-07T12:06:56.568+09:00',
        'date': 1,
        'intensionalDisclosureRange': 'private',
        'phase': 'morning',
        'phaseStartTime': '2006-10-07T12:06:56.568+09:00',
        'phaseTimeLimit': 600,
        'serverTimestamp': '2006-10-07T12:06:56.568+09:00',
        'token': 'eFVr3O93oLhmnE8OqTMl5VSVGIV',
        'village': {
          '@context': village.Context.Village,
          '@id': 'https://licos.online/state/0.2/village',
          'id': 3,
          'lang': 'ja',
          'name': '横国の森の奥にある時代に取り残された小さな村',
          'totalNumberOfAgents': 15
        }
      },
      timer: {
        start: new Date('2006-10-07T12:06:56.568+09:00').getTime(),
        time: 10000
      }
    })
    const wrapper = mount(
      <Provider store={store} >
        <IntlProviderContainer>
          <TimerContainer />
        </IntlProviderContainer>
      </Provider>
    )

    expect(wrapper.html()).toMatchSnapshot()
  })
})

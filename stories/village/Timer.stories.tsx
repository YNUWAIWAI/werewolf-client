import * as React from 'react'
import IntlProvider from '../../src/scripts/village/containers/IntlProviderContainer'
import {Provider} from 'react-redux'
import Timer from '../../src/scripts/village/containers/TimerContainer'
import {createStore} from 'redux'
import reducer from '../../src/scripts/village/reducers'
import {storiesOf} from '@storybook/react'

const store = createStore(
  reducer
)

storiesOf('village|Timer', module)
  .addDecorator(story => (
    <Provider store={store}>
      <IntlProvider>
        {story()}
      </IntlProvider>
    </Provider>
  ))
  .add('default', () => {
    const story = <Timer />

    return story
  })

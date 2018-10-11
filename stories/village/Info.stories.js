// @flow
import Info from '../../src/scripts/village/components/organisms/Info'
import IntlProvider from '../../src/scripts/village/containers/IntlProviderContainer'
import {Provider} from 'react-redux'
import React from 'react'
import {createStore} from 'redux'
import reducer from '../../src/scripts/village/reducers'
import {storiesOf} from '@storybook/react'
import {withKnobs} from '@storybook/addon-knobs'

const store = createStore(
  reducer
)

storiesOf('village|Info', module)
  .addDecorator(withKnobs)
  .addDecorator(getStory =>
    <Provider store={store}>
      <IntlProvider>
        {getStory()}
      </IntlProvider>
    </Provider>
  )
  .add('default', () => {
    const story = <Info />

    return story
  })

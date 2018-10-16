// @flow
import IdSearchBox from '../../src/scripts/lobby/components/organisms/IdSearchBox'
import IntlProvider from '../../src/scripts/lobby/containers/IntlProviderContainer'
import React from 'react'
import {createStore} from 'redux'
import reducer from '../../src/scripts/lobby/reducers'
import {storiesOf} from '@storybook/react'
import {withKnobs} from '@storybook/addon-knobs'

const store = createStore(
  reducer
)

storiesOf('lobby|IdSearchBox', module)
  .addDecorator(withKnobs)
  .addDecorator(story =>
    <IntlProvider store={store}>
      {story()}
    </IntlProvider>
  )
  .add('default', () => {
    const story =
      <IdSearchBox
        handleSearchIdChange={id => {console.log(id)}}
        handleValidityChange={validity => {console.log(validity)}}
        max={3}
      />

    return story
  })

// @flow
import Info from '../../src/scripts/village/components/Info'
import {Provider} from 'react-redux'
import React from 'react'
import {createStore} from 'redux'
import reducer from '../../src/scripts/village/reducers'
import {storiesOf} from '@storybook/react'
import {withInfo} from '@storybook/addon-info'
import {withKnobs} from '@storybook/addon-knobs/react'

const store = createStore(
  reducer
)

storiesOf('village|Info', module)
  .addDecorator(withKnobs)
  .addDecorator(getStory =>
    <Provider store={store}>
      {getStory()}
    </Provider>
  )
  .add('default', withInfo('')(() => {
    const story = <Info />

    return story
  }))

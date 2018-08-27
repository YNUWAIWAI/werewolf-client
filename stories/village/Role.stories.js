// @flow
import {Provider} from 'react-redux'
import React from 'react'
import Role from '../../src/scripts/village/components/Role'
import {createStore} from 'redux'
import reducer from '../../src/scripts/village/reducers'
import {storiesOf} from '@storybook/react'
import {withInfo} from '@storybook/addon-info'
import {withKnobs} from '@storybook/addon-knobs/react'

const store = createStore(
  reducer
)

storiesOf('village|Info/Role', module)
  .addDecorator(withKnobs)
  .addDecorator(getStory =>
    <Provider store={store}>
      {getStory()}
    </Provider>
  )
  .add('default', withInfo('')(() => {
    const story =
      <div className="info">
        <Role image="https://werewolf.world/image/0.1/Walter.jpg" name="ヴァルター" role="人狼" />
      </div>

    return story
  }))

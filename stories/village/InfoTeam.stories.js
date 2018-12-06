// @flow
import IntlProvider from '../../src/scripts/village/containers/IntlProviderContainer'
import React from 'react'
import TeamIcon from '../../src/scripts/village/components/atoms/TeamIcon'
import {createStore} from 'redux'
import reducer from '../../src/scripts/village/reducers'
import {storiesOf} from '@storybook/react'

const store = createStore(
  reducer
)

storiesOf('village|Info/InfoTeam', module)
  .addDecorator(getStory =>
    <IntlProvider store={store}>
      {getStory()}
    </IntlProvider>
  )
  .add('villager', () => {
    const story =
      <div className="info">
        <TeamIcon
          class="info--team"
          team="villager"
        />
      </div>

    return story
  })
  .add('werehamster', () => {
    const story =
      <div className="info">
        <TeamIcon
          class="info--team"
          team="werehamster"
        />
      </div>

    return story
  })
  .add('werewolf', () => {
    const story =
      <div className="info">
        <TeamIcon
          class="info--team"
          team="werewolf"
        />
      </div>

    return story
  })

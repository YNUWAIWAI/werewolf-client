import * as React from 'react'
import IntlProvider from '../../src/scripts/village/containers/IntlProviderContainer'
import {Provider} from 'react-redux'
import TeamIcon from '../../src/scripts/village/components/atoms/TeamIcon'
import {createStore} from 'redux'
import reducer from '../../src/scripts/village/reducers'
import {storiesOf} from '@storybook/react'

const store = createStore(
  reducer
)

storiesOf('village|Info/InfoTeam', module)
  .addDecorator(story =>
    <Provider store={store}>
      <IntlProvider>
        {story()}
      </IntlProvider>
    </Provider>
  )
  .add('villager', () => {
    const story =
      <div className="info">
        <TeamIcon
          class="info--team"
          team={village.Team.villager}
        />
      </div>

    return story
  })
  .add('werehamster', () => {
    const story =
      <div className="info">
        <TeamIcon
          class="info--team"
          team={village.Team.werehamster}
        />
      </div>

    return story
  })
  .add('werewolf', () => {
    const story =
      <div className="info">
        <TeamIcon
          class="info--team"
          team={village.Team.werewolf}
        />
      </div>

    return story
  })

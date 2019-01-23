import * as ActionTypes from '../../src/scripts/village/constants/ActionTypes'
import * as React from 'react'
import Command from '../../src/scripts/village/components/organisms/Command'
import CommandGrave from '../../src/scripts/village/components/organisms/CommandGrave'
import CommandInputBox from '../../src/scripts/village/components/organisms/CommandInputBox'
import CommandPostMortem from '../../src/scripts/village/components/organisms/CommandPostMortem'
import IntlProvider from '../../src/scripts/village/containers/IntlProviderContainer'
import {Provider} from 'react-redux'
import {action} from '@storybook/addon-actions'
import {createStore} from 'redux'
import reducer from '../../src/scripts/village/reducers'
import {storiesOf} from '@storybook/react'
import {withKnobs} from '@storybook/addon-knobs'

const store = createStore(
  reducer
)

storiesOf('village|Command', module)
  .addDecorator(withKnobs)
  .addDecorator(story =>
    <Provider store={store}>
      <IntlProvider>
        {story()}
      </IntlProvider>
    </Provider>
  )
  .add('昼（限定なし）', () => {
    const props = {
      handlePostChat: () => action('handlePostChat'),
      limited: {
        available: false,
        postCount: 0,
        postCountLimit: 10
      },
      public: {
        postCount: 0,
        postCountLimit: 10
      }
    }
    const content = <CommandInputBox {... props} />
    const story =
      <Command
        content={content}
        hide={false}
      />

    return story
  })
  .add('昼（限定あり）', () => {
    const props = {
      handlePostChat: () => action('handlePostChat'),
      limited: {
        available: true,
        postCount: 0,
        postCountLimit: 10
      },
      public: {
        postCount: 0,
        postCountLimit: 10
      }
    }
    const content = <CommandInputBox {... props} />
    const story =
      <Command
        content={content}
        hide={false}
      />

    return story
  })
  .add('感想戦', () => {
    const props = {
      handleNavigationClick: () => action('handleNavigationClick'),
      handlePostChat: () => action('handlePostChat'),
      navigation: [
        {
          id: 'CommandNavigation.showResult',
          type: ActionTypes.Navigation.SHOW_RESULT
        },
        {
          id: 'CommandNavigation.returnToLobby',
          type: ActionTypes.Navigation.RETURN_TO_LOBBY
        }
      ]
    }
    const content = <CommandPostMortem {... props} />
    const story =
      <Command
        content={content}
        hide={false}
      />

    return story
  })
  .add('墓地', () => {
    const props = {
      handleNavigationClick: () => action('handleNavigationClick'),
      handlePostChat: () => action('handlePostChat'),
      navigation: [
        {
          id: 'CommandNavigation.returnToLobby',
          type: ActionTypes.Navigation.RETURN_TO_LOBBY
        }
      ]
    }
    const content = <CommandGrave {... props} />
    const story =
      <Command
        content={content}
        hide={false}
      />

    return story
  })

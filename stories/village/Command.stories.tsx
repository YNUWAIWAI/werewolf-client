/* global village */
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

const store = createStore(
  reducer
)
const suggesttedData = [
  {
    id: 'Alvin',
    name: {
      'en': 'Alvin',
      'ja': 'アルビン'
    }
  },
  {
    id: 'Catalina',
    name: {
      'en': 'Catalina',
      'ja': 'カタリナ'
    }
  },
  {
    id: 'Dieter',
    name: {
      'en': 'Dieter',
      'ja': 'ディーター'
    }
  },
  {
    id: 'Gert',
    name: {
      'en': 'Gert',
      'ja': 'ゲルト'
    }
  },
  {
    id: 'Jacob',
    name: {
      'en': 'Jacob',
      'ja': 'ヤコブ'
    }
  },
  {
    id: 'Joachim',
    name: {
      'en': 'Joachim',
      'ja': 'ヨアヒム'
    }
  },
  {
    id: 'Lisa',
    name: {
      'en': 'Lisa',
      'ja': 'リーザ'
    }
  },
  {
    id: 'Moritz',
    name: {
      'en': 'Moritz',
      'ja': 'モーリッツ'
    }
  },
  {
    id: 'Nicholas',
    name: {
      'en': 'Nicholas',
      'ja': 'ニコラス'
    }
  },
  {
    id: 'Otto',
    name: {
      'en': 'Otto',
      'ja': 'オットー'
    }
  },
  {
    id: 'Pamela',
    name: {
      'en': 'Pamela',
      'ja': 'パメラ'
    }
  },
  {
    id: 'Peter',
    name: {
      'en': 'Peter',
      'ja': 'ペーター'
    }
  },
  {
    id: 'Simson',
    name: {
      'en': 'Simson',
      'ja': 'ジムゾン'
    }
  },
  {
    id: 'Thomas',
    name: {
      'en': 'Thomas',
      'ja': 'トーマス'
    }
  },
  {
    id: 'Walter',
    name: {
      'en': 'Walter',
      'ja': 'ヴァルター'
    }
  }
]

storiesOf('village|Command', module)
  .addDecorator(story =>
    <Provider store={store}>
      <IntlProvider>
        {story()}
      </IntlProvider>
    </Provider>
  )
  .add('morning (without limited chat)', () => {
    const props = {
      characterLimit: 140,
      handlePostChat: () => action('handlePostChat'),
      language: village.Language.ja,
      limited: {
        available: false,
        postCount: 0
      },
      postCountLimit: 10,
      public: {
        postCount: 0
      },
      suggesttedData
    }
    const content = <CommandInputBox {... props} />
    const story =
      <Command
        content={content}
        hide={false}
      />

    return story
  })
  .add('morning (with limited chat)', () => {
    const props = {
      characterLimit: 140,
      handlePostChat: () => action('handlePostChat'),
      language: village.Language.ja,
      limited: {
        available: true,
        postCount: 0
      },
      postCountLimit: 10,
      public: {
        postCount: 0
      },
      suggesttedData
    }
    const content = <CommandInputBox {... props} />
    const story =
      <Command
        content={content}
        hide={false}
      />

    return story
  })
  .add('post mortem(Host)', () => {
    const props = {
      characterLimit: 140,
      handleNavigationClick: () => action('handleNavigationClick'),
      handlePostChat: () => action('handlePostChat'),
      language: village.Language.ja,
      navigation: [
        {
          className: 'show-result',
          id: 'CommandNavigation.showResult',
          type: ActionTypes.Navigation.SHOW_RESULT
        },
        {
          className: 'next-game',
          id: 'CommandNavigation.nextGame',
          type: ActionTypes.Navigation.NEXT_GAME
        },
        {
          className: 'return-to-lobby',
          id: 'CommandNavigation.returnToLobby',
          type: ActionTypes.Navigation.RETURN_TO_LOBBY
        }
      ],
      suggesttedData
    }
    const content = <CommandPostMortem {... props} />
    const story =
      <Command
        content={content}
        hide={false}
      />

    return story
  })
  .add('post mortem (Guest) inactive', () => {
    const props = {
      characterLimit: 140,
      handleNavigationClick: () => action('handleNavigationClick'),
      handlePostChat: () => action('handlePostChat'),
      language: village.Language.ja,
      navigation: [
        {
          className: 'show-result',
          id: 'CommandNavigation.showResult',
          type: ActionTypes.Navigation.SHOW_RESULT
        },
        {
          className: 'next-game',
          disabled: true,
          id: 'CommandNavigation.nextGame',
          type: ActionTypes.Navigation.NEXT_GAME
        },
        {
          className: 'return-to-lobby',
          id: 'CommandNavigation.returnToLobby',
          type: ActionTypes.Navigation.RETURN_TO_LOBBY
        }
      ],
      suggesttedData
    }
    const content = <CommandPostMortem {... props} />
    const story =
      <Command
        content={content}
        hide={false}
      />

    return story
  })
  .add('post mortem (Guest) invisible', () => {
    const props = {
      characterLimit: 140,
      handleNavigationClick: () => action('handleNavigationClick'),
      handlePostChat: () => action('handlePostChat'),
      language: village.Language.ja,
      navigation: [
        {
          className: 'show-result',
          id: 'CommandNavigation.showResult',
          type: ActionTypes.Navigation.SHOW_RESULT
        },
        {
          className: 'return-to-lobby expand',
          id: 'CommandNavigation.returnToLobby',
          type: ActionTypes.Navigation.RETURN_TO_LOBBY
        }
      ],
      suggesttedData
    }
    const content = <CommandPostMortem {... props} />
    const story =
      <Command
        content={content}
        hide={false}
      />

    return story
  })
  .add('grave', () => {
    const props = {
      characterLimit: 140,
      handleNavigationClick: () => action('handleNavigationClick'),
      handlePostChat: () => action('handlePostChat'),
      language: village.Language.ja,
      navigation: [
        {
          className: 'return-to-lobby expand',
          id: 'CommandNavigation.returnToLobby',
          type: ActionTypes.Navigation.RETURN_TO_LOBBY
        }
      ],
      suggesttedData
    }
    const content = <CommandGrave {... props} />
    const story =
      <Command
        content={content}
        hide={false}
      />

    return story
  })

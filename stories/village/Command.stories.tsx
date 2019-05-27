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
    id: 'Adil',
    name: {
      'en': 'Adil',
      'ja': 'アーディル'
    }
  },
  {
    id: 'Borya',
    name: {
      'en': 'Borya',
      'ja': 'ボーリャ'
    }
  },
  {
    id: 'Chacha',
    name: {
      'en': 'Chacha',
      'ja': 'チャチャ'
    }
  },
  {
    id: 'Devdatta',
    name: {
      'en': 'Devdatta',
      'ja': 'デヴゥダッタ'
    }
  },
  {
    id: 'Ekrem',
    name: {
      'en': 'Ekrem',
      'ja': 'エクレム'
    }
  },
  {
    id: 'Fernando',
    name: {
      'en': 'Fernando',
      'ja': 'フェルナンド'
    }
  },
  {
    id: 'Gavriil',
    name: {
      'en': 'Gavriil',
      'ja': 'ガブリール'
    }
  },
  {
    id: 'Ileanna',
    name: {
      'en': 'Ileanna',
      'ja': 'イレアナ'
    }
  },
  {
    id: 'Jasmin',
    name: {
      'en': 'Jasmin',
      'ja': 'ジャスミン'
    }
  },
  {
    id: 'Kaiji',
    name: {
      'en': 'Kaiji',
      'ja': '開司'
    }
  },
  {
    id: 'Louise',
    name: {
      'en': 'Louise',
      'ja': 'ルイーズ'
    }
  },
  {
    id: 'Marthe',
    name: {
      'en': 'Marthe',
      'ja': 'マーテ'
    }
  },
  {
    id: 'Nanyamka',
    name: {
      'en': 'Nanyamka',
      'ja': 'ナニャンカ'
    }
  },
  {
    id: 'Oliwia',
    name: {
      'en': 'Oliwia',
      'ja': 'オリビア'
    }
  },
  {
    id: 'hunter',
    name: {
      'en': 'Hunter',
      'ja': '狩人'
    }
  },
  {
    id: 'madman',
    name: {
      'en': 'Madman',
      'ja': '狂人'
    }
  },
  {
    id: 'mason',
    name: {
      'en': 'Mason',
      'ja': '共有者'
    }
  },
  {
    id: 'master',
    name: {
      'en': 'Master',
      'ja': 'マスター'
    }
  },
  {
    id: 'medium',
    name: {
      'en': 'Medium',
      'ja': '霊媒師'
    }
  },
  {
    id: 'seer',
    name: {
      'en': 'Seer',
      'ja': '占い師'
    }
  },
  {
    id: 'villager',
    name: {
      'en': 'Villager',
      'ja': '村人'
    }
  },
  {
    id: 'werehamster',
    name: {
      'en': 'Werehamster',
      'ja': 'ハムスター人間'
    }
  },
  {
    id: 'werewolf',
    name: {
      'en': 'Werewolf',
      'ja': '人狼'
    }
  }
]

storiesOf('village|Command', module)
  .addDecorator(story => (
    <Provider store={store}>
      <IntlProvider>
        {story()}
      </IntlProvider>
    </Provider>
  ))
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

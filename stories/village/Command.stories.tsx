import * as ActionTypes from '../../src/scripts/village/constants/ActionTypes'
import * as React from 'react'
import {Character} from '../../src/scripts/village/constants/Character'
import Command from '../../src/scripts/village/components/organisms/Command'
import CommandGrave from '../../src/scripts/village/components/organisms/CommandGrave'
import CommandInputBox from '../../src/scripts/village/components/organisms/CommandInputBox'
import CommandPostMortem from '../../src/scripts/village/components/organisms/CommandPostMortem'
import IntlProvider from '../../src/scripts/village/containers/IntlProviderContainer'
import {Provider} from 'react-redux'
import {Role} from '../../src/scripts/village/constants/Role'
import {action} from '@storybook/addon-actions'
import {createStore} from 'redux'
import {language} from './language'
import {radios} from '@storybook/addon-knobs'
import reducer from '../../src/scripts/village/reducers'
import {storiesOf} from '@storybook/react'
import {theme} from './theme'
import {village} from './types'

const suggestedData = [
  {
    id: Character.a.en,
    name: Character.a
  },
  {
    id: Character.b.en,
    name: Character.b
  },
  {
    id: Character.c.en,
    name: Character.c
  },
  {
    id: Character.d.en,
    name: Character.d
  },
  {
    id: Character.e.en,
    name: Character.e
  },
  {
    id: Character.f.en,
    name: Character.f
  },
  {
    id: Character.g.en,
    name: Character.g
  },
  {
    id: Character.h.en,
    name: Character.h
  },
  {
    id: Character.i.en,
    name: Character.i
  },
  {
    id: Character.j.en,
    name: Character.j
  },
  {
    id: Character.k.en,
    name: Character.k
  },
  {
    id: Character.l.en,
    name: Character.l
  },
  {
    id: Character.m.en,
    name: Character.m
  },
  {
    id: Character.n.en,
    name: Character.n
  },
  {
    id: Character.o.en,
    name: Character.o
  },
  {
    id: village.RoleId.hunter,
    name: Role.hunter
  },
  {
    id: village.RoleId.madman,
    name: Role.madman
  },
  {
    id: village.RoleId.mason,
    name: Role.mason
  },
  {
    id: village.RoleId.medium,
    name: Role.medium
  },
  {
    id: village.RoleId.seer,
    name: Role.seer
  },
  {
    id: village.RoleId.villager,
    name: Role.villager
  },
  {
    id: village.RoleId.werehamster,
    name: Role.werehamster
  },
  {
    id: village.RoleId.werewolf,
    name: Role.werewolf
  }
]

storiesOf('village|Command', module)
  .addDecorator(story => (
    <div
      className={`vi ${radios(theme.label, theme.options, theme.defaultValue)}`}
    >
      {story()}
      <div className="vi--background" />
    </div>
  ))
  .add('morning (without werewolf chat)', () => {
    const value = radios(language.label, language.options, language.defaultValue)
    const content =
      <CommandInputBox
        handlePostChat={() => action('handlePostChat')}
        language={value}
        maxLengthOfUnicodeCodePoints={140}
        maxNumberOfChatMessages={10}
        public={{
          numberOfChatMessages: 0
        }}
        suggestedData={suggestedData}
        werewolf={{
          available: false,
          numberOfChatMessages: 0
        }}
      />
    const store = createStore(
      reducer,
      {
        language: value
      }
    )
    const story =
      <Provider store={store}>
        <IntlProvider>
          <Command
            content={content}
            hide={false}
          />
        </IntlProvider>
      </Provider>

    return story
  })
  .add('morning (with werewolf chat)', () => {
    const value = radios(language.label, language.options, language.defaultValue)
    const content =
      <CommandInputBox
        handlePostChat={() => action('handlePostChat')}
        language={value}
        maxLengthOfUnicodeCodePoints={140}
        maxNumberOfChatMessages={10}
        public={{
          numberOfChatMessages: 0
        }}
        suggestedData={suggestedData}
        werewolf={{
          available: true,
          numberOfChatMessages: 0
        }}
      />
    const store = createStore(
      reducer,
      {
        language: value
      }
    )
    const story =
      <Provider store={store}>
        <IntlProvider>
          <Command
            content={content}
            hide={false}
          />
        </IntlProvider>
      </Provider>

    return story
  })
  .add('post mortem(Host)', () => {
    const value = radios(language.label, language.options, language.defaultValue)
    const content =
      <CommandPostMortem
        handleNavigationClick={() => action('handleNavigationClick')}
        handlePostChat={() => action('handlePostChat')}
        language={value}
        maxLengthOfUnicodeCodePoints={140}
        navigation={[
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
        ]}
        suggestedData={suggestedData}
      />
    const store = createStore(
      reducer,
      {
        language: value
      }
    )
    const story =
      <Provider store={store}>
        <IntlProvider>
          <Command
            content={content}
            hide={false}
          />
        </IntlProvider>
      </Provider>

    return story
  })
  .add('post mortem (Guest) inactive', () => {
    const value = radios(language.label, language.options, language.defaultValue)
    const content =
      <CommandPostMortem
        handleNavigationClick={() => action('handleNavigationClick')}
        handlePostChat={() => action('handlePostChat')}
        language={value}
        maxLengthOfUnicodeCodePoints={140}
        navigation={[
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
        ]}
        suggestedData={suggestedData}
      />
    const store = createStore(
      reducer,
      {
        language: value
      }
    )
    const story =
      <Provider store={store}>
        <IntlProvider>
          <Command
            content={content}
            hide={false}
          />
        </IntlProvider>
      </Provider>

    return story
  })
  .add('post mortem (Guest) invisible', () => {
    const value = radios(language.label, language.options, language.defaultValue)
    const content =
      <CommandPostMortem
        handleNavigationClick={() => action('handleNavigationClick')}
        handlePostChat={() => action('handlePostChat')}
        language={value}
        maxLengthOfUnicodeCodePoints={140}
        navigation={[
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
        ]}
        suggestedData={suggestedData}
      />
    const store = createStore(
      reducer,
      {
        language: value
      }
    )
    const story =
      <Provider store={store}>
        <IntlProvider>
          <Command
            content={content}
            hide={false}
          />
        </IntlProvider>
      </Provider>

    return story
  })
  .add('grave', () => {
    const value = radios(language.label, language.options, language.defaultValue)
    const content =
      <CommandGrave
        handleNavigationClick={() => action('handleNavigationClick')}
        handlePostChat={() => action('handlePostChat')}
        language={value}
        maxLengthOfUnicodeCodePoints={140}
        navigation={[
          {
            className: 'return-to-lobby expand',
            id: 'CommandNavigation.returnToLobby',
            type: ActionTypes.Navigation.RETURN_TO_LOBBY
          }
        ]}
        suggestedData={suggestedData}
      />
    const store = createStore(
      reducer,
      {
        language: value
      }
    )
    const story =
      <Provider store={store}>
        <IntlProvider>
          <Command
            content={content}
            hide={false}
          />
        </IntlProvider>
      </Provider>

    return story
  })

import * as ActionTypes from '../../src/scripts/village/constants/ActionTypes'
import * as React from 'react'
import * as village from './types'
import {Agent} from '../../src/scripts/village/constants/Agent'
import Command from '../../src/scripts/village/components/organisms/Command'
import CommandGrave from '../../src/scripts/village/components/organisms/CommandGrave'
import CommandInputBox from '../../src/scripts/village/components/organisms/CommandInputBox'
import CommandPostMortem from '../../src/scripts/village/components/organisms/CommandPostMortem'
import IntlProvider from '../../src/scripts/village/containers/IntlProviderContainer'
import {Provider} from 'react-redux'
import {Role} from '../../src/scripts/village/constants/Role'
import {action} from '@storybook/addon-actions'
import {createStore} from 'redux'
import language from './language'
import {radios} from '@storybook/addon-knobs'
import reducer from '../../src/scripts/village/reducers'
import {storiesOf} from '@storybook/react'

const suggesttedData = [
  {
    id: Agent.a.en,
    name: Agent.a
  },
  {
    id: Agent.b.en,
    name: Agent.b
  },
  {
    id: Agent.c.en,
    name: Agent.c
  },
  {
    id: Agent.d.en,
    name: Agent.d
  },
  {
    id: Agent.e.en,
    name: Agent.e
  },
  {
    id: Agent.f.en,
    name: Agent.f
  },
  {
    id: Agent.g.en,
    name: Agent.g
  },
  {
    id: Agent.h.en,
    name: Agent.h
  },
  {
    id: Agent.i.en,
    name: Agent.i
  },
  {
    id: Agent.j.en,
    name: Agent.j
  },
  {
    id: Agent.k.en,
    name: Agent.k
  },
  {
    id: Agent.l.en,
    name: Agent.l
  },
  {
    id: Agent.m.en,
    name: Agent.m
  },
  {
    id: Agent.n.en,
    name: Agent.n
  },
  {
    id: Agent.o.en,
    name: Agent.o
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
    id: village.RoleId.master,
    name: Role.master
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
  .add('morning (without werewolf chat)', () => {
    const value = radios(language.label, language.options, language.defaultValue)
    const content =
      <CommandInputBox
        characterLimit={140}
        handlePostChat={() => action('handlePostChat')}
        language={value}
        werewolf={{
          available: false,
          postCount: 0
        }}
        postCountLimit={10}
        public={{
          postCount: 0
        }}
        suggesttedData={suggesttedData}
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
        characterLimit={140}
        handlePostChat={() => action('handlePostChat')}
        language={value}
        werewolf={{
          available: true,
          postCount: 0
        }}
        postCountLimit={10}
        public={{
          postCount: 0
        }}
        suggesttedData={suggesttedData}
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
        characterLimit={140}
        handleNavigationClick={() => action('handleNavigationClick')}
        handlePostChat={() => action('handlePostChat')}
        language={value}
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
        suggesttedData={suggesttedData}
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
        characterLimit={140}
        handleNavigationClick={() => action('handleNavigationClick')}
        handlePostChat={() => action('handlePostChat')}
        language={value}
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
        suggesttedData={suggesttedData}
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
        characterLimit={140}
        handleNavigationClick={() => action('handleNavigationClick')}
        handlePostChat={() => action('handlePostChat')}
        language={value}
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
        suggesttedData={suggesttedData}
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
        characterLimit={140}
        handleNavigationClick={() => action('handleNavigationClick')}
        handlePostChat={() => action('handlePostChat')}
        language={value}
        navigation={[
          {
            className: 'return-to-lobby expand',
            id: 'CommandNavigation.returnToLobby',
            type: ActionTypes.Navigation.RETURN_TO_LOBBY
          }
        ]}
        suggesttedData={suggesttedData}
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

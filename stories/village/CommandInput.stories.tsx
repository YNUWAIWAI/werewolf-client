import * as React from 'react'
import {
  number,
  radios
} from '@storybook/addon-knobs'
import {Character} from '../../src/scripts/village/constants/Character'
import CommandInput from '../../src/scripts/village/components/molecules/CommandInput'
import IntlProvider from '../../src/scripts/village/containers/IntlProviderContainer'
import {Provider} from 'react-redux'
import {Role} from '../../src/scripts/village/constants/Role'
import {action} from '@storybook/addon-actions'
import {createStore} from 'redux'
import {language} from './language'
import reducer from '../../src/scripts/village/reducers'
import {storiesOf} from '@storybook/react'
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

storiesOf('village|Command/CommandInput', module)
  .add('grave', () => {
    const value = radios(language.label, language.options, language.defaultValue)
    const store = createStore(
      reducer,
      {
        language: value
      }
    )
    const story =
      <Provider store={store}>
        <IntlProvider>
          <div style={{
            height: '200px'
          }}
          >
            <CommandInput
              handlePostChat={action('postChat')}
              inputChannel={village.InputChannel.grave}
              language={value}
              maxLengthOfUnicodeCodePoints={140}
              maxNumberOfChatMessages={-1}
              numberOfChatMessages={-1}
              suggestedData={suggestedData}
            />
          </div>
        </IntlProvider>
      </Provider>

    return story
  })
  .add('public', () => {
    const postCount = number('postCount', 0, {
      max: 10,
      min: 0,
      range: false,
      step: 1
    })
    const value = radios(language.label, language.options, language.defaultValue)
    const store = createStore(
      reducer,
      {
        language: value
      }
    )
    const story =
      <Provider store={store}>
        <IntlProvider>
          <div style={{
            height: '200px'
          }}
          >
            <CommandInput
              handlePostChat={action('postChat')}
              inputChannel={village.InputChannel.public}
              language={value}
              maxLengthOfUnicodeCodePoints={140}
              maxNumberOfChatMessages={10}
              numberOfChatMessages={postCount}
              suggestedData={suggestedData}
            />
          </div>
        </IntlProvider>
      </Provider>

    return story
  })
  .add('private', () => {
    const value = radios(language.label, language.options, language.defaultValue)
    const store = createStore(
      reducer,
      {
        language: value
      }
    )
    const story =
      <Provider store={store}>
        <IntlProvider>
          <div style={{
            height: '200px'
          }}
          >
            <CommandInput
              handlePostChat={action('postChat')}
              inputChannel={village.InputChannel.private}
              language={value}
              maxLengthOfUnicodeCodePoints={140}
              maxNumberOfChatMessages={-1}
              numberOfChatMessages={-1}
              suggestedData={suggestedData}
            />
          </div>
        </IntlProvider>
      </Provider>

    return story
  })
  .add('werewolf', () => {
    const postCount = number('postCount', 0, {
      max: 10,
      min: 0,
      range: false,
      step: 1
    })
    const value = radios(language.label, language.options, language.defaultValue)
    const store = createStore(
      reducer,
      {
        language: value
      }
    )
    const story =
      <Provider store={store}>
        <IntlProvider>
          <div style={{
            height: '200px'
          }}
          >
            <CommandInput
              handlePostChat={action('postChat')}
              inputChannel={village.InputChannel.werewolf}
              language={value}
              maxLengthOfUnicodeCodePoints={140}
              maxNumberOfChatMessages={10}
              numberOfChatMessages={postCount}
              suggestedData={suggestedData}
            />
          </div>
        </IntlProvider>
      </Provider>

    return story
  })

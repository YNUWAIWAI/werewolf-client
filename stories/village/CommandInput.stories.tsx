/* global village */
import * as React from 'react'
import {number, radios} from '@storybook/addon-knobs'
import {Agent} from '../../src/scripts/village/constants/Agent'
import CommandInput from '../../src/scripts/village/components/molecules/CommandInput'
import IntlProvider from '../../src/scripts/village/containers/IntlProviderContainer'
import {Provider} from 'react-redux'
import {Role} from '../../src/scripts/village/constants/Role'
import {action} from '@storybook/addon-actions'
import {createStore} from 'redux'
import language from './language'
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
              characterLimit={140}
              handlePostChat={action('postChat')}
              inputChannel={village.InputChannel.grave}
              language={value}
              postCount={-1}
              postCountLimit={-1}
              suggesttedData={suggesttedData}
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
              characterLimit={140}
              handlePostChat={action('postChat')}
              inputChannel={village.InputChannel.public}
              language={value}
              postCount={postCount}
              postCountLimit={10}
              suggesttedData={suggesttedData}
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
              characterLimit={140}
              handlePostChat={action('postChat')}
              inputChannel={village.InputChannel.private}
              language={value}
              postCount={-1}
              postCountLimit={-1}
              suggesttedData={suggesttedData}
            />
          </div>
        </IntlProvider>
      </Provider>

    return story
  })
  .add('limited', () => {
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
              characterLimit={140}
              handlePostChat={action('postChat')}
              inputChannel={village.InputChannel.limited}
              language={value}
              postCount={postCount}
              postCountLimit={10}
              suggesttedData={suggesttedData}
            />
          </div>
        </IntlProvider>
      </Provider>

    return story
  })

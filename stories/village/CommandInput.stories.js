// @flow
import {number, withKnobs} from '@storybook/addon-knobs'
import CommandInput from '../../src/scripts/village/components/molecules/CommandInput'
import IntlProvider from '../../src/scripts/village/containers/IntlProviderContainer'
import React from 'react'
import {action} from '@storybook/addon-actions'
import {createStore} from 'redux'
import reducer from '../../src/scripts/village/reducers'
import {storiesOf} from '@storybook/react'

const store = createStore(
  reducer
)

storiesOf('village|Command/CommandInput', module)
  .addDecorator(withKnobs)
  .addDecorator(story =>
    <IntlProvider store={store}>
      {story()}
    </IntlProvider>
  )
  .add('public', () => {
    const postCount = number('postCount', 0, {
      max: 10,
      min: 0,
      step: 1
    })
    const story =
    <div style={{
      height: '200px'
    }}
    >
      <CommandInput
        handlePostChat={action('postChat')}
        kind="public"
        postCount={postCount}
        postCountLimit={10}
      />
    </div>

    return story
  })
  .add('private', () => {
    const story =
      <div style={{
        height: '200px'
      }}
      >
        <CommandInput
          handlePostChat={action('postChat')}
          kind="private"
        />
      </div>

    return story
  })
  .add('limited', () => {
    const postCount = number('postCount', 0, {
      max: 10,
      min: 0,
      step: 1
    })
    const story =
      <div style={{
        height: '200px'
      }}
      >
        <CommandInput
          handlePostChat={action('postChat')}
          kind="limited"
          postCount={postCount}
          postCountLimit={10}
        />
      </div>

    return story
  })

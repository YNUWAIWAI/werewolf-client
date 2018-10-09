// @flow
import {number, withKnobs} from '@storybook/addon-knobs/react'
import CommandInput from '../../src/scripts/village/components/CommandInput'
import React from 'react'
import {action} from '@storybook/addon-actions'
import {storiesOf} from '@storybook/react'

storiesOf('village|Command/CommandInput', module)
  .addDecorator(withKnobs)
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

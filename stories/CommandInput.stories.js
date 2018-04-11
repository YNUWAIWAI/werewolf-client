// @flow
import {number, withKnobs} from '@storybook/addon-knobs/react'
import CommandInput from '../src/scripts/village/components/CommandInput'
import React from 'react'
import {action} from '@storybook/addon-actions'
import {storiesOf} from '@storybook/react'
import {withInfo} from '@storybook/addon-info'

storiesOf('village/CommandInput', module)
  .addDecorator(withKnobs)
  .add('public', withInfo('')(() => {
    const postCount = number('postCount', 0, {
      max: 10,
      min: 0,
      step: 1
    })
    const story =
      <div className="command">
        <CommandInput
          handlePostChat={action('postChat')}
          kind="public"
          postCount={postCount}
          postCountLimit={10}
        />
      </div>

    return story
  }))
  .add('private', withInfo('')(() => {
    const story =
      <div className="command">
        <CommandInput
          handlePostChat={action('postChat')}
          kind="private"
        />
      </div>

    return story
  }))
  .add('limited', withInfo('')(() => {
    const postCount = number('postCount', 0, {
      max: 10,
      min: 0,
      step: 1
    })
    const story =
      <div className="command">
        <CommandInput
          handlePostChat={action('postChat')}
          kind="limited"
          postCount={postCount}
          postCountLimit={10}
        />
      </div>

    return story
  }))

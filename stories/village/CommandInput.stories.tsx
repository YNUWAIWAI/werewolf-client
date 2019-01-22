import * as React from 'react'
import {number, withKnobs} from '@storybook/addon-knobs'
import CommandInput from '../../src/scripts/village/components/molecules/CommandInput'
import IntlProvider from '../../src/scripts/village/containers/IntlProviderContainer'
import {Provider} from 'react-redux'
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
    <Provider store={store}>
      <IntlProvider>
        {story()}
      </IntlProvider>
    </Provider>
  )
  .add('grave', () => {
    const story =
      <div style={{
        height: '200px'
      }}
      >
        <CommandInput
          handlePostChat={action('postChat')}
          inputChannel={village.InputChannel.grave}
        />
      </div>

    return story
  })
  .add('public', () => {
    const postCount = number('postCount', 0, {
      max: 10,
      min: 0,
      range: false,
      step: 1
    })
    const story =
    <div style={{
      height: '200px'
    }}
    >
      <CommandInput
        handlePostChat={action('postChat')}
        inputChannel={village.InputChannel.public}
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
          inputChannel={village.InputChannel.private}
        />
      </div>

    return story
  })
  .add('limited', () => {
    const postCount = number('postCount', 0, {
      max: 10,
      min: 0,
      range: false,
      step: 1
    })
    const story =
      <div style={{
        height: '200px'
      }}
      >
        <CommandInput
          handlePostChat={action('postChat')}
          inputChannel={village.InputChannel.limited}
          postCount={postCount}
          postCountLimit={10}
        />
      </div>

    return story
  })

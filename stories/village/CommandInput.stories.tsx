/* global village */
import * as React from 'react'
import CommandInput from '../../src/scripts/village/components/molecules/CommandInput'
import IntlProvider from '../../src/scripts/village/containers/IntlProviderContainer'
import {Provider} from 'react-redux'
import {action} from '@storybook/addon-actions'
import {createStore} from 'redux'
import {number} from '@storybook/addon-knobs'
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

storiesOf('village|Command/CommandInput', module)
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
          characterLimit={140}
          handlePostChat={action('postChat')}
          inputChannel={village.InputChannel.grave}
          language={village.Language.ja}
          suggesttedData={suggesttedData}
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
        characterLimit={140}
        handlePostChat={action('postChat')}
        inputChannel={village.InputChannel.public}
        language={village.Language.ja}
        postCount={postCount}
        postCountLimit={10}
        suggesttedData={suggesttedData}
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
          characterLimit={140}
          handlePostChat={action('postChat')}
          inputChannel={village.InputChannel.private}
          language={village.Language.ja}
          suggesttedData={suggesttedData}
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
          characterLimit={140}
          handlePostChat={action('postChat')}
          inputChannel={village.InputChannel.limited}
          language={village.Language.ja}
          postCount={postCount}
          postCountLimit={10}
          suggesttedData={suggesttedData}
        />
      </div>

    return story
  })

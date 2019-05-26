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

storiesOf('village|Command/CommandInput', module)
  .addDecorator(story => (
    <Provider store={store}>
      <IntlProvider>
        {story()}
      </IntlProvider>
    </Provider>
  ))
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
          postCount={-1}
          postCountLimit={-1}
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
          postCount={-1}
          postCountLimit={-1}
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

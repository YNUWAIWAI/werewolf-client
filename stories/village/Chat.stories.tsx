import * as React from 'react'
import Chat, {Props} from '../../src/scripts/village/components/organisms/Chat'
import {ImagePath} from '../../src/scripts/village/constants/ImagePath'
import IntlProvider from '../../src/scripts/village/containers/IntlProviderContainer'
import {Provider} from 'react-redux'
import {action} from '@storybook/addon-actions'
import {createStore} from 'redux'
import {language} from './language'
import {radios} from '@storybook/addon-knobs'
import reducer from '../../src/scripts/village/reducers'
import {storiesOf} from '@storybook/react'
import {theme} from './theme'
import {village} from './types'

storiesOf('village|Chat', module)
  .addDecorator(story => (
    <div
      className={`vi ${radios(theme.label, theme.options, theme.defaultValue)}`}
    >
      {story()}
      <div className="vi--background" />
    </div>
  ))
  .add('anonymousAudience', () => {
    const allIds = ['chat0', 'chat1']
    const byId: Props['byId'] = {
      'chat0': {
        id: 1,
        image: ImagePath.Character120x120.a,
        initial: 'A',
        intensionalDisclosureRange: village.Channel.anonymousAudience,
        isMarked: false,
        isMine: true,
        name: 'Adil',
        phaseStartTime: '2018-01-01T00:00:00.000Z',
        phaseTimeLimit: 50,
        serverTimestamp: '2018-01-01T00:00:20.000Z',
        text: 'text',
        type: village.ChatItemType.item
      },
      'chat1': {
        id: 2,
        image: ImagePath.Character120x120.i,
        initial: 'I',
        intensionalDisclosureRange: village.Channel.anonymousAudience,
        isMarked: true,
        isMine: false,
        name: 'Ileanna',
        phaseStartTime: '2018-01-01T00:00:00.000Z',
        phaseTimeLimit: 50,
        serverTimestamp: '2018-01-01T00:00:10.000Z',
        text: 'text',
        type: village.ChatItemType.item
      }
    }
    const store = createStore(
      reducer,
      {
        language: radios(language.label, language.options, language.defaultValue)
      }
    )
    const story =
      <Provider store={store}>
        <IntlProvider>
          <div className="vi--grid">
            <Chat
              allIds={allIds}
              byId={byId}
              expand={false}
              handleStar={id => isMarked => action(`star${id}: ${isMarked}`)}
            />
          </div>
        </IntlProvider>
      </Provider>

    return story
  })
  .add('grave', () => {
    const allIds = ['chat0', 'chat1']
    const byId: Props['byId'] = {
      'chat0': {
        id: 1,
        image: ImagePath.Character120x120.a,
        initial: 'A',
        intensionalDisclosureRange: village.Channel.grave,
        isMarked: false,
        isMine: true,
        name: 'Adil',
        phaseStartTime: '2018-01-01T00:00:00.000Z',
        phaseTimeLimit: 50,
        serverTimestamp: '2018-01-01T00:00:20.000Z',
        text: 'text',
        type: village.ChatItemType.item
      },
      'chat1': {
        id: 2,
        image: ImagePath.Character120x120.i,
        initial: 'I',
        intensionalDisclosureRange: village.Channel.grave,
        isMarked: true,
        isMine: false,
        name: 'Ileanna',
        phaseStartTime: '2018-01-01T00:00:00.000Z',
        phaseTimeLimit: 50,
        serverTimestamp: '2018-01-01T00:00:10.000Z',
        text: 'text',
        type: village.ChatItemType.item
      }
    }
    const store = createStore(
      reducer,
      {
        language: radios(language.label, language.options, language.defaultValue)
      }
    )
    const story =
      <Provider store={store}>
        <IntlProvider>
          <div className="vi--grid">
            <Chat
              allIds={allIds}
              byId={byId}
              expand={false}
              handleStar={id => isMarked => action(`star${id}: ${isMarked}`)}
            />
          </div>
        </IntlProvider>
      </Provider>

    return story
  })
  .add('hunter', () => {
    const allIds = ['chat0', 'chat1']
    const byId: Props['byId'] = {
      'chat0': {
        id: 1,
        image: ImagePath.Character120x120.a,
        initial: 'A',
        intensionalDisclosureRange: village.Channel.hunter,
        isMarked: false,
        isMine: true,
        name: 'Adil',
        phaseStartTime: '2018-01-01T00:00:00.000Z',
        phaseTimeLimit: 50,
        serverTimestamp: '2018-01-01T00:00:20.000Z',
        text: 'text',
        type: village.ChatItemType.item
      },
      'chat1': {
        id: 2,
        image: ImagePath.Character120x120.i,
        initial: 'I',
        intensionalDisclosureRange: village.Channel.hunter,
        isMarked: true,
        isMine: false,
        name: 'Ileanna',
        phaseStartTime: '2018-01-01T00:00:00.000Z',
        phaseTimeLimit: 50,
        serverTimestamp: '2018-01-01T00:00:10.000Z',
        text: 'text',
        type: village.ChatItemType.item
      }
    }
    const store = createStore(
      reducer,
      {
        language: radios(language.label, language.options, language.defaultValue)
      }
    )
    const story =
      <Provider store={store}>
        <IntlProvider>
          <div className="vi--grid">
            <Chat
              allIds={allIds}
              byId={byId}
              expand={false}
              handleStar={id => isMarked => action(`star${id}: ${isMarked}`)}
            />
          </div>
        </IntlProvider>
      </Provider>

    return story
  })
  .add('master', () => {
    const allIds = ['chat0', 'chat1']
    const byId: Props['byId'] = {
      'chat0': {
        id: 1,
        image: ImagePath.Character120x120.a,
        initial: 'A',
        intensionalDisclosureRange: village.Channel.master,
        isMarked: false,
        isMine: true,
        name: 'Adil',
        phaseStartTime: '2018-01-01T00:00:00.000Z',
        phaseTimeLimit: 50,
        serverTimestamp: '2018-01-01T00:00:20.000Z',
        text: 'text',
        type: village.ChatItemType.item
      },
      'chat1': {
        id: 2,
        image: ImagePath.Character120x120.i,
        initial: 'I',
        intensionalDisclosureRange: village.Channel.master,
        isMarked: true,
        isMine: false,
        name: 'Ileanna',
        phaseStartTime: '2018-01-01T00:00:00.000Z',
        phaseTimeLimit: 50,
        serverTimestamp: '2018-01-01T00:00:10.000Z',
        text: 'text',
        type: village.ChatItemType.item
      }
    }
    const store = createStore(
      reducer,
      {
        language: radios(language.label, language.options, language.defaultValue)
      }
    )
    const story =
      <Provider store={store}>
        <IntlProvider>
          <div className="vi--grid">
            <Chat
              allIds={allIds}
              byId={byId}
              expand={false}
              handleStar={id => isMarked => action(`star${id}: ${isMarked}`)}
            />
          </div>
        </IntlProvider>
      </Provider>

    return story
  })
  .add('onymousAudience', () => {
    const allIds = ['chat0', 'chat1']
    const byId: Props['byId'] = {
      'chat0': {
        id: 1,
        image: ImagePath.Character120x120.a,
        initial: 'A',
        intensionalDisclosureRange: village.Channel.onymousAudience,
        isMarked: false,
        isMine: true,
        name: 'Adil',
        phaseStartTime: '2018-01-01T00:00:00.000Z',
        phaseTimeLimit: 50,
        serverTimestamp: '2018-01-01T00:00:20.000Z',
        text: 'text',
        type: village.ChatItemType.item
      },
      'chat1': {
        id: 2,
        image: ImagePath.Character120x120.i,
        initial: 'I',
        intensionalDisclosureRange: village.Channel.onymousAudience,
        isMarked: true,
        isMine: false,
        name: 'Ileanna',
        phaseStartTime: '2018-01-01T00:00:00.000Z',
        phaseTimeLimit: 50,
        serverTimestamp: '2018-01-01T00:00:10.000Z',
        text: 'text',
        type: village.ChatItemType.item
      }
    }
    const store = createStore(
      reducer,
      {
        language: radios(language.label, language.options, language.defaultValue)
      }
    )
    const story =
      <Provider store={store}>
        <IntlProvider>
          <div className="vi--grid">
            <Chat
              allIds={allIds}
              byId={byId}
              expand={false}
              handleStar={id => isMarked => action(`star${id}: ${isMarked}`)}
            />
          </div>
        </IntlProvider>
      </Provider>

    return story
  })
  .add('private', () => {
    const allIds = ['chat0', 'chat1']
    const byId: Props['byId'] = {
      'chat0': {
        id: 1,
        image: ImagePath.Character120x120.a,
        initial: 'A',
        intensionalDisclosureRange: village.Channel.private,
        isMarked: false,
        isMine: true,
        name: 'Adil',
        phaseStartTime: '2018-01-01T00:00:00.000Z',
        phaseTimeLimit: 50,
        serverTimestamp: '2018-01-01T00:00:20.000Z',
        text: 'text',
        type: village.ChatItemType.item
      },
      'chat1': {
        id: 2,
        image: ImagePath.Character120x120.i,
        initial: 'I',
        intensionalDisclosureRange: village.Channel.private,
        isMarked: true,
        isMine: false,
        name: 'Ileanna',
        phaseStartTime: '2018-01-01T00:00:00.000Z',
        phaseTimeLimit: 50,
        serverTimestamp: '2018-01-01T00:00:10.000Z',
        text: 'text',
        type: village.ChatItemType.item
      }
    }
    const store = createStore(
      reducer,
      {
        language: radios(language.label, language.options, language.defaultValue)
      }
    )
    const story =
      <Provider store={store}>
        <IntlProvider>
          <div className="vi--grid">
            <Chat
              allIds={allIds}
              byId={byId}
              expand={false}
              handleStar={id => isMarked => action(`star${id}: ${isMarked}`)}
            />
          </div>
        </IntlProvider>
      </Provider>

    return story
  })
  .add('public', () => {
    const allIds = ['chat0', 'chat1']
    const byId: Props['byId'] = {
      'chat0': {
        id: 1,
        image: ImagePath.Character120x120.a,
        initial: 'A',
        intensionalDisclosureRange: village.Channel.public,
        isMarked: false,
        isMine: true,
        name: 'Adil',
        phaseStartTime: '2018-01-01T00:00:00.000Z',
        phaseTimeLimit: 50,
        serverTimestamp: '2018-01-01T00:00:20.000Z',
        text: 'text',
        type: village.ChatItemType.item
      },
      'chat1': {
        id: 2,
        image: ImagePath.Character120x120.i,
        initial: 'I',
        intensionalDisclosureRange: village.Channel.public,
        isMarked: true,
        isMine: false,
        name: 'Ileanna',
        phaseStartTime: '2018-01-01T00:00:00.000Z',
        phaseTimeLimit: 50,
        serverTimestamp: '2018-01-01T00:00:10.000Z',
        text: 'text',
        type: village.ChatItemType.item
      }
    }
    const store = createStore(
      reducer,
      {
        language: radios(language.label, language.options, language.defaultValue)
      }
    )
    const story =
      <Provider store={store}>
        <IntlProvider>
          <div className="vi--grid">
            <Chat
              allIds={allIds}
              byId={byId}
              expand={false}
              handleStar={id => isMarked => action(`star${id}: ${isMarked}`)}
            />
          </div>
        </IntlProvider>
      </Provider>

    return story
  })
  .add('seer', () => {
    const allIds = ['chat0', 'chat1']
    const byId: Props['byId'] = {
      'chat0': {
        id: 1,
        image: ImagePath.Character120x120.a,
        initial: 'A',
        intensionalDisclosureRange: village.Channel.seer,
        isMarked: false,
        isMine: true,
        name: 'Adil',
        phaseStartTime: '2018-01-01T00:00:00.000Z',
        phaseTimeLimit: 50,
        serverTimestamp: '2018-01-01T00:00:20.000Z',
        text: 'text',
        type: village.ChatItemType.item
      },
      'chat1': {
        id: 2,
        image: ImagePath.Character120x120.i,
        initial: 'I',
        intensionalDisclosureRange: village.Channel.seer,
        isMarked: true,
        isMine: false,
        name: 'Ileanna',
        phaseStartTime: '2018-01-01T00:00:00.000Z',
        phaseTimeLimit: 50,
        serverTimestamp: '2018-01-01T00:00:10.000Z',
        text: 'text',
        type: village.ChatItemType.item
      }
    }
    const store = createStore(
      reducer,
      {
        language: radios(language.label, language.options, language.defaultValue)
      }
    )
    const story =
      <Provider store={store}>
        <IntlProvider>
          <div className="vi--grid">
            <Chat
              allIds={allIds}
              byId={byId}
              expand={false}
              handleStar={id => isMarked => action(`star${id}: ${isMarked}`)}
            />
          </div>
        </IntlProvider>
      </Provider>

    return story
  })
  .add('werewolf', () => {
    const allIds = ['chat0', 'chat1']
    const byId: Props['byId'] = {
      'chat0': {
        id: 1,
        image: ImagePath.Character120x120.a,
        initial: 'A',
        intensionalDisclosureRange: village.Channel.werewolf,
        isMarked: false,
        isMine: true,
        name: 'Adil',
        phaseStartTime: '2018-01-01T00:00:00.000Z',
        phaseTimeLimit: 50,
        serverTimestamp: '2018-01-01T00:00:20.000Z',
        text: 'text',
        type: village.ChatItemType.item
      },
      'chat1': {
        id: 2,
        image: ImagePath.Character120x120.i,
        initial: 'I',
        intensionalDisclosureRange: village.Channel.werewolf,
        isMarked: true,
        isMine: false,
        name: 'Ileanna',
        phaseStartTime: '2018-01-01T00:00:00.000Z',
        phaseTimeLimit: 50,
        serverTimestamp: '2018-01-01T00:00:10.000Z',
        text: 'text',
        type: village.ChatItemType.item
      }
    }
    const store = createStore(
      reducer,
      {
        language: radios(language.label, language.options, language.defaultValue)
      }
    )
    const story =
      <Provider store={store}>
        <IntlProvider>
          <div className="vi--grid">
            <Chat
              allIds={allIds}
              byId={byId}
              expand={false}
              handleStar={id => isMarked => action(`star${id}: ${isMarked}`)}
            />
          </div>
        </IntlProvider>
      </Provider>

    return story
  })
  .add(village.ChatItemType.delimeter, () => {
    const allIds = ['delimeter0', 'chat0', 'chat1', 'delimeter1']
    const byId: Props['byId'] = {
      'chat0': {
        id: 1,
        image: ImagePath.Character120x120.a,
        initial: 'A',
        intensionalDisclosureRange: village.Channel.public,
        isMarked: false,
        isMine: true,
        name: 'Adil',
        phaseStartTime: '2018-01-01T00:00:00.000Z',
        phaseTimeLimit: 50,
        serverTimestamp: '2018-01-01T00:00:20.000Z',
        text: 'text',
        type: village.ChatItemType.item
      },
      'chat1': {
        id: 2,
        image: ImagePath.Character120x120.i,
        initial: 'I',
        intensionalDisclosureRange: village.Channel.public,
        isMarked: true,
        isMine: false,
        name: 'Ileanna',
        phaseStartTime: '2018-01-01T00:00:00.000Z',
        phaseTimeLimit: 50,
        serverTimestamp: '2018-01-01T00:00:10.000Z',
        text: 'text',
        type: village.ChatItemType.item
      },
      'delimeter0': {
        day: 1,
        type: village.ChatItemType.delimeter
      },
      'delimeter1': {
        day: -1,
        type: village.ChatItemType.delimeter
      }
    }
    const store = createStore(
      reducer,
      {
        language: radios(language.label, language.options, language.defaultValue)
      }
    )
    const story =
      <Provider store={store}>
        <IntlProvider>
          <div className="vi--grid">
            <Chat
              allIds={allIds}
              byId={byId}
              expand={false}
              handleStar={id => isMarked => action(`star${id}: ${isMarked}`)}
            />
          </div>
        </IntlProvider>
      </Provider>

    return story
  })
  .add('linebreak', () => {
    const allIds = ['delimeter0', 'chat0', 'chat1', 'chat2', 'chat3', 'delimeter1']
    const byId: Props['byId'] = {
      'chat0': {
        id: 1,
        image: ImagePath.Character120x120.a,
        initial: 'A',
        intensionalDisclosureRange: village.Channel.public,
        isMarked: false,
        isMine: true,
        name: 'Adil',
        phaseStartTime: '2018-01-01T00:00:00.000Z',
        phaseTimeLimit: 50,
        serverTimestamp: '2018-01-01T00:00:20.000Z',
        text: 'text\ntext',
        type: village.ChatItemType.item
      },
      'chat1': {
        id: 2,
        image: ImagePath.Character120x120.i,
        initial: 'I',
        intensionalDisclosureRange: village.Channel.public,
        isMarked: false,
        isMine: false,
        name: 'Ileanna',
        phaseStartTime: '2018-01-01T00:00:00.000Z',
        phaseTimeLimit: 50,
        serverTimestamp: '2018-01-01T00:00:10.000Z',
        text: '改行\n\r\n複数',
        type: village.ChatItemType.item
      },
      'chat2': {
        id: 2,
        image: ImagePath.Character120x120.i,
        initial: 'I',
        intensionalDisclosureRange: village.Channel.public,
        isMarked: false,
        isMine: false,
        name: 'Ileanna',
        phaseStartTime: '2018-01-01T00:00:00.000Z',
        phaseTimeLimit: 50,
        serverTimestamp: '2018-01-01T00:00:09.000Z',
        text: 'longlonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglongtext\ntext',
        type: village.ChatItemType.item
      },
      'chat3': {
        id: 2,
        image: ImagePath.Character120x120.i,
        initial: 'I',
        intensionalDisclosureRange: village.Channel.public,
        isMarked: false,
        isMine: false,
        name: 'Ileanna',
        phaseStartTime: '2018-01-01T00:00:00.000Z',
        phaseTimeLimit: 50,
        serverTimestamp: '2018-01-01T00:00:08.000Z',
        text: '最後\n改行\n',
        type: village.ChatItemType.item
      },
      'delimeter0': {
        day: 1,
        type: village.ChatItemType.delimeter
      },
      'delimeter1': {
        day: -1,
        type: village.ChatItemType.delimeter
      }
    }
    const store = createStore(
      reducer,
      {
        language: radios(language.label, language.options, language.defaultValue)
      }
    )
    const story =
      <Provider store={store}>
        <IntlProvider>
          <div className="vi--grid">
            <Chat
              allIds={allIds}
              byId={byId}
              expand={false}
              handleStar={id => isMarked => action(`star${id}: ${isMarked}`)}
            />
          </div>
        </IntlProvider>
      </Provider>

    return story
  })
  .add('all', () => {
    const allIds = ['chat0', 'chat1', 'chat2', 'chat3', 'chat4', 'chat5', 'chat6', 'chat7', 'chat8']
    const byId: Props['byId'] = {
      'chat0': {
        id: 1,
        image: ImagePath.Character120x120.a,
        initial: 'A',
        intensionalDisclosureRange: village.Channel.anonymousAudience,
        isMarked: false,
        isMine: true,
        name: 'Adil',
        phaseStartTime: '2018-01-01T00:00:00.000Z',
        phaseTimeLimit: 50,
        serverTimestamp: '2018-01-01T00:00:20.000Z',
        text: 'anonymousAudience',
        type: village.ChatItemType.item
      },
      'chat1': {
        id: 2,
        image: ImagePath.Character120x120.i,
        initial: 'I',
        intensionalDisclosureRange: village.Channel.grave,
        isMarked: true,
        isMine: false,
        name: 'Ileanna',
        phaseStartTime: '2018-01-01T00:00:00.000Z',
        phaseTimeLimit: 50,
        serverTimestamp: '2018-01-01T00:00:10.000Z',
        text: 'grave',
        type: village.ChatItemType.item
      },
      'chat2': {
        id: 3,
        image: ImagePath.Character120x120.i,
        initial: 'I',
        intensionalDisclosureRange: village.Channel.hunter,
        isMarked: true,
        isMine: false,
        name: 'Ileanna',
        phaseStartTime: '2018-01-01T00:00:00.000Z',
        phaseTimeLimit: 50,
        serverTimestamp: '2018-01-01T00:00:10.000Z',
        text: 'hunter',
        type: village.ChatItemType.item
      },
      'chat3': {
        id: 4,
        image: ImagePath.Character120x120.i,
        initial: 'I',
        intensionalDisclosureRange: village.Channel.master,
        isMarked: true,
        isMine: false,
        name: 'Ileanna',
        phaseStartTime: '2018-01-01T00:00:00.000Z',
        phaseTimeLimit: 50,
        serverTimestamp: '2018-01-01T00:00:10.000Z',
        text: 'master',
        type: village.ChatItemType.item
      },
      'chat4': {
        id: 5,
        image: ImagePath.Character120x120.i,
        initial: 'I',
        intensionalDisclosureRange: village.Channel.onymousAudience,
        isMarked: true,
        isMine: false,
        name: 'Ileanna',
        phaseStartTime: '2018-01-01T00:00:00.000Z',
        phaseTimeLimit: 50,
        serverTimestamp: '2018-01-01T00:00:10.000Z',
        text: 'onymousAudience',
        type: village.ChatItemType.item
      },
      'chat5': {
        id: 6,
        image: ImagePath.Character120x120.i,
        initial: 'I',
        intensionalDisclosureRange: village.Channel.private,
        isMarked: true,
        isMine: false,
        name: 'Ileanna',
        phaseStartTime: '2018-01-01T00:00:00.000Z',
        phaseTimeLimit: 50,
        serverTimestamp: '2018-01-01T00:00:10.000Z',
        text: 'private',
        type: village.ChatItemType.item
      },
      'chat6': {
        id: 7,
        image: ImagePath.Character120x120.i,
        initial: 'I',
        intensionalDisclosureRange: village.Channel.public,
        isMarked: true,
        isMine: false,
        name: 'Ileanna',
        phaseStartTime: '2018-01-01T00:00:00.000Z',
        phaseTimeLimit: 50,
        serverTimestamp: '2018-01-01T00:00:10.000Z',
        text: 'public',
        type: village.ChatItemType.item
      },
      'chat7': {
        id: 8,
        image: ImagePath.Character120x120.i,
        initial: 'I',
        intensionalDisclosureRange: village.Channel.seer,
        isMarked: true,
        isMine: false,
        name: 'Ileanna',
        phaseStartTime: '2018-01-01T00:00:00.000Z',
        phaseTimeLimit: 50,
        serverTimestamp: '2018-01-01T00:00:10.000Z',
        text: 'seer',
        type: village.ChatItemType.item
      },
      'chat8': {
        id: 9,
        image: ImagePath.Character120x120.i,
        initial: 'I',
        intensionalDisclosureRange: village.Channel.werewolf,
        isMarked: true,
        isMine: false,
        name: 'Ileanna',
        phaseStartTime: '2018-01-01T00:00:00.000Z',
        phaseTimeLimit: 50,
        serverTimestamp: '2018-01-01T00:00:10.000Z',
        text: 'werewolf',
        type: village.ChatItemType.item
      }
    }
    const store = createStore(
      reducer,
      {
        language: radios(language.label, language.options, language.defaultValue)
      }
    )
    const story =
      <Provider store={store}>
        <IntlProvider>
          <div className="vi--grid">
            <Chat
              allIds={allIds}
              byId={byId}
              expand={false}
              handleStar={id => isMarked => action(`star${id}: ${isMarked}`)}
            />
          </div>
        </IntlProvider>
      </Provider>

    return story
  })

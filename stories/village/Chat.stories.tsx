/* global village */
import * as React from 'react'
import Chat, {Props} from '../../src/scripts/village/components/organisms/Chat'
import IntlProvider from '../../src/scripts/village/containers/IntlProviderContainer'
import {Provider} from 'react-redux'
import {action} from '@storybook/addon-actions'
import {createStore} from 'redux'
import language from './language'
import {radios} from '@storybook/addon-knobs'
import reducer from '../../src/scripts/village/reducers'
import {storiesOf} from '@storybook/react'

storiesOf('village|Chat', module)
  .add('anonymousAudience', () => {
    const allIds = ['chat0', 'chat1']
    const byId: Props['byId'] = {
      'chat0': {
        id: 1,
        image: 'https://werewolf.world/image/0.3/agent_icons/120x120/a_120x120.png',
        initial: 'A',
        intensionalDisclosureRange: village.Channel.anonymousAudience,
        isMarked: false,
        isMine: true,
        name: 'Adil',
        phaseStartTime: '2018-01-01T00:00:00.000Z',
        phaseTimeLimit: 50,
        serverTimestamp: '2018-01-01T00:00:20.000Z',
        text: 'text',
        type: 'item'
      },
      'chat1': {
        id: 2,
        image: 'https://werewolf.world/image/0.3/agent_icons/120x120/i_120x120.png',
        initial: 'I',
        intensionalDisclosureRange: village.Channel.anonymousAudience,
        isMarked: true,
        isMine: false,
        name: 'Ileanna',
        phaseStartTime: '2018-01-01T00:00:00.000Z',
        phaseTimeLimit: 50,
        serverTimestamp: '2018-01-01T00:00:10.000Z',
        text: 'text',
        type: 'item'
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
          <div className="vi--activity">
            <Chat
              allIds={allIds}
              byId={byId}
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
        image: 'https://werewolf.world/image/0.3/agent_icons/120x120/a_120x120.png',
        initial: 'A',
        intensionalDisclosureRange: village.Channel.grave,
        isMarked: false,
        isMine: true,
        name: 'Adil',
        phaseStartTime: '2018-01-01T00:00:00.000Z',
        phaseTimeLimit: 50,
        serverTimestamp: '2018-01-01T00:00:20.000Z',
        text: 'text',
        type: 'item'
      },
      'chat1': {
        id: 2,
        image: 'https://werewolf.world/image/0.3/agent_icons/120x120/i_120x120.png',
        initial: 'I',
        intensionalDisclosureRange: village.Channel.grave,
        isMarked: true,
        isMine: false,
        name: 'Ileanna',
        phaseStartTime: '2018-01-01T00:00:00.000Z',
        phaseTimeLimit: 50,
        serverTimestamp: '2018-01-01T00:00:10.000Z',
        text: 'text',
        type: 'item'
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
          <div className="vi--activity">
            <Chat
              allIds={allIds}
              byId={byId}
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
        image: 'https://werewolf.world/image/0.3/agent_icons/120x120/a_120x120.png',
        initial: 'A',
        intensionalDisclosureRange: village.Channel.hunter,
        isMarked: false,
        isMine: true,
        name: 'Adil',
        phaseStartTime: '2018-01-01T00:00:00.000Z',
        phaseTimeLimit: 50,
        serverTimestamp: '2018-01-01T00:00:20.000Z',
        text: 'text',
        type: 'item'
      },
      'chat1': {
        id: 2,
        image: 'https://werewolf.world/image/0.3/agent_icons/120x120/i_120x120.png',
        initial: 'I',
        intensionalDisclosureRange: village.Channel.hunter,
        isMarked: true,
        isMine: false,
        name: 'Ileanna',
        phaseStartTime: '2018-01-01T00:00:00.000Z',
        phaseTimeLimit: 50,
        serverTimestamp: '2018-01-01T00:00:10.000Z',
        text: 'text',
        type: 'item'
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
          <div className="vi--activity">
            <Chat
              allIds={allIds}
              byId={byId}
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
        image: 'https://werewolf.world/image/0.3/agent_icons/120x120/a_120x120.png',
        initial: 'A',
        intensionalDisclosureRange: village.Channel.master,
        isMarked: false,
        isMine: true,
        name: 'Adil',
        phaseStartTime: '2018-01-01T00:00:00.000Z',
        phaseTimeLimit: 50,
        serverTimestamp: '2018-01-01T00:00:20.000Z',
        text: 'text',
        type: 'item'
      },
      'chat1': {
        id: 2,
        image: 'https://werewolf.world/image/0.3/agent_icons/120x120/i_120x120.png',
        initial: 'I',
        intensionalDisclosureRange: village.Channel.master,
        isMarked: true,
        isMine: false,
        name: 'Ileanna',
        phaseStartTime: '2018-01-01T00:00:00.000Z',
        phaseTimeLimit: 50,
        serverTimestamp: '2018-01-01T00:00:10.000Z',
        text: 'text',
        type: 'item'
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
          <div className="vi--activity">
            <Chat
              allIds={allIds}
              byId={byId}
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
        image: 'https://werewolf.world/image/0.3/agent_icons/120x120/a_120x120.png',
        initial: 'A',
        intensionalDisclosureRange: village.Channel.onymousAudience,
        isMarked: false,
        isMine: true,
        name: 'Adil',
        phaseStartTime: '2018-01-01T00:00:00.000Z',
        phaseTimeLimit: 50,
        serverTimestamp: '2018-01-01T00:00:20.000Z',
        text: 'text',
        type: 'item'
      },
      'chat1': {
        id: 2,
        image: 'https://werewolf.world/image/0.3/agent_icons/120x120/i_120x120.png',
        initial: 'I',
        intensionalDisclosureRange: village.Channel.onymousAudience,
        isMarked: true,
        isMine: false,
        name: 'Ileanna',
        phaseStartTime: '2018-01-01T00:00:00.000Z',
        phaseTimeLimit: 50,
        serverTimestamp: '2018-01-01T00:00:10.000Z',
        text: 'text',
        type: 'item'
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
          <div className="vi--activity">
            <Chat
              allIds={allIds}
              byId={byId}
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
        image: 'https://werewolf.world/image/0.3/agent_icons/120x120/a_120x120.png',
        initial: 'A',
        intensionalDisclosureRange: village.Channel.private,
        isMarked: false,
        isMine: true,
        name: 'Adil',
        phaseStartTime: '2018-01-01T00:00:00.000Z',
        phaseTimeLimit: 50,
        serverTimestamp: '2018-01-01T00:00:20.000Z',
        text: 'text',
        type: 'item'
      },
      'chat1': {
        id: 2,
        image: 'https://werewolf.world/image/0.3/agent_icons/120x120/i_120x120.png',
        initial: 'I',
        intensionalDisclosureRange: village.Channel.private,
        isMarked: true,
        isMine: false,
        name: 'Ileanna',
        phaseStartTime: '2018-01-01T00:00:00.000Z',
        phaseTimeLimit: 50,
        serverTimestamp: '2018-01-01T00:00:10.000Z',
        text: 'text',
        type: 'item'
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
          <div className="vi--activity">
            <Chat
              allIds={allIds}
              byId={byId}
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
        image: 'https://werewolf.world/image/0.3/agent_icons/120x120/a_120x120.png',
        initial: 'A',
        intensionalDisclosureRange: village.Channel.public,
        isMarked: false,
        isMine: true,
        name: 'Adil',
        phaseStartTime: '2018-01-01T00:00:00.000Z',
        phaseTimeLimit: 50,
        serverTimestamp: '2018-01-01T00:00:20.000Z',
        text: 'text',
        type: 'item'
      },
      'chat1': {
        id: 2,
        image: 'https://werewolf.world/image/0.3/agent_icons/120x120/i_120x120.png',
        initial: 'I',
        intensionalDisclosureRange: village.Channel.public,
        isMarked: true,
        isMine: false,
        name: 'Ileanna',
        phaseStartTime: '2018-01-01T00:00:00.000Z',
        phaseTimeLimit: 50,
        serverTimestamp: '2018-01-01T00:00:10.000Z',
        text: 'text',
        type: 'item'
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
          <div className="vi--activity">
            <Chat
              allIds={allIds}
              byId={byId}
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
        image: 'https://werewolf.world/image/0.3/agent_icons/120x120/a_120x120.png',
        initial: 'A',
        intensionalDisclosureRange: village.Channel.seer,
        isMarked: false,
        isMine: true,
        name: 'Adil',
        phaseStartTime: '2018-01-01T00:00:00.000Z',
        phaseTimeLimit: 50,
        serverTimestamp: '2018-01-01T00:00:20.000Z',
        text: 'text',
        type: 'item'
      },
      'chat1': {
        id: 2,
        image: 'https://werewolf.world/image/0.3/agent_icons/120x120/i_120x120.png',
        initial: 'I',
        intensionalDisclosureRange: village.Channel.seer,
        isMarked: true,
        isMine: false,
        name: 'Ileanna',
        phaseStartTime: '2018-01-01T00:00:00.000Z',
        phaseTimeLimit: 50,
        serverTimestamp: '2018-01-01T00:00:10.000Z',
        text: 'text',
        type: 'item'
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
          <div className="vi--activity">
            <Chat
              allIds={allIds}
              byId={byId}
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
        image: 'https://werewolf.world/image/0.3/agent_icons/120x120/a_120x120.png',
        initial: 'A',
        intensionalDisclosureRange: village.Channel.werewolf,
        isMarked: false,
        isMine: true,
        name: 'Adil',
        phaseStartTime: '2018-01-01T00:00:00.000Z',
        phaseTimeLimit: 50,
        serverTimestamp: '2018-01-01T00:00:20.000Z',
        text: 'text',
        type: 'item'
      },
      'chat1': {
        id: 2,
        image: 'https://werewolf.world/image/0.3/agent_icons/120x120/i_120x120.png',
        initial: 'I',
        intensionalDisclosureRange: village.Channel.werewolf,
        isMarked: true,
        isMine: false,
        name: 'Ileanna',
        phaseStartTime: '2018-01-01T00:00:00.000Z',
        phaseTimeLimit: 50,
        serverTimestamp: '2018-01-01T00:00:10.000Z',
        text: 'text',
        type: 'item'
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
          <div className="vi--activity">
            <Chat
              allIds={allIds}
              byId={byId}
              handleStar={id => isMarked => action(`star${id}: ${isMarked}`)}
            />
          </div>
        </IntlProvider>
      </Provider>

    return story
  })
  .add('delimeter', () => {
    const allIds = ['delimeter0', 'chat0', 'chat1', 'delimeter1']
    const byId: Props['byId'] = {
      'chat0': {
        id: 1,
        image: 'https://werewolf.world/image/0.3/agent_icons/120x120/a_120x120.png',
        initial: 'A',
        intensionalDisclosureRange: village.Channel.public,
        isMarked: false,
        isMine: true,
        name: 'Adil',
        phaseStartTime: '2018-01-01T00:00:00.000Z',
        phaseTimeLimit: 50,
        serverTimestamp: '2018-01-01T00:00:20.000Z',
        text: 'text',
        type: 'item'
      },
      'chat1': {
        id: 2,
        image: 'https://werewolf.world/image/0.3/agent_icons/120x120/i_120x120.png',
        initial: 'I',
        intensionalDisclosureRange: village.Channel.public,
        isMarked: true,
        isMine: false,
        name: 'Ileanna',
        phaseStartTime: '2018-01-01T00:00:00.000Z',
        phaseTimeLimit: 50,
        serverTimestamp: '2018-01-01T00:00:10.000Z',
        text: 'text',
        type: 'item'
      },
      'delimeter0': {
        date: 1,
        type: 'delimeter'
      },
      'delimeter1': {
        date: -1,
        type: 'delimeter'
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
          <div className="vi--activity">
            <Chat
              allIds={allIds}
              byId={byId}
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
        image: 'https://werewolf.world/image/0.3/agent_icons/120x120/a_120x120.png',
        initial: 'A',
        intensionalDisclosureRange: village.Channel.public,
        isMarked: false,
        isMine: true,
        name: 'Adil',
        phaseStartTime: '2018-01-01T00:00:00.000Z',
        phaseTimeLimit: 50,
        serverTimestamp: '2018-01-01T00:00:20.000Z',
        text: 'text\ntext',
        type: 'item'
      },
      'chat1': {
        id: 2,
        image: 'https://werewolf.world/image/0.3/agent_icons/120x120/i_120x120.png',
        initial: 'I',
        intensionalDisclosureRange: village.Channel.public,
        isMarked: false,
        isMine: false,
        name: 'Ileanna',
        phaseStartTime: '2018-01-01T00:00:00.000Z',
        phaseTimeLimit: 50,
        serverTimestamp: '2018-01-01T00:00:10.000Z',
        text: '改行\n\r\n複数',
        type: 'item'
      },
      'chat2': {
        id: 2,
        image: 'https://werewolf.world/image/0.3/agent_icons/120x120/i_120x120.png',
        initial: 'I',
        intensionalDisclosureRange: village.Channel.public,
        isMarked: false,
        isMine: false,
        name: 'Ileanna',
        phaseStartTime: '2018-01-01T00:00:00.000Z',
        phaseTimeLimit: 50,
        serverTimestamp: '2018-01-01T00:00:09.000Z',
        text: 'longlonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglongtext\ntext',
        type: 'item'
      },
      'chat3': {
        id: 2,
        image: 'https://werewolf.world/image/0.3/agent_icons/120x120/i_120x120.png',
        initial: 'I',
        intensionalDisclosureRange: village.Channel.public,
        isMarked: false,
        isMine: false,
        name: 'Ileanna',
        phaseStartTime: '2018-01-01T00:00:00.000Z',
        phaseTimeLimit: 50,
        serverTimestamp: '2018-01-01T00:00:08.000Z',
        text: '最後\n改行\n',
        type: 'item'
      },
      'delimeter0': {
        date: 1,
        type: 'delimeter'
      },
      'delimeter1': {
        date: -1,
        type: 'delimeter'
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
          <div className="vi--activity">
            <Chat
              allIds={allIds}
              byId={byId}
              handleStar={id => isMarked => action(`star${id}: ${isMarked}`)}
            />
          </div>
        </IntlProvider>
      </Provider>

    return story
  })

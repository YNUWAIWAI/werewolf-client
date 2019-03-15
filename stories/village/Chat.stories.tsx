/* global village */
import * as React from 'react'
import Chat, {Props} from '../../src/scripts/village/components/organisms/Chat'
import IntlProvider from '../../src/scripts/village/containers/IntlProviderContainer'
import {Provider} from 'react-redux'
import {createStore} from 'redux'
import reducer from '../../src/scripts/village/reducers'
import {storiesOf} from '@storybook/react'

const store = createStore(
  reducer
)

storiesOf('village|Chat', module)
  .addDecorator(story =>
    <Provider store={store}>
      <IntlProvider>
        {story()}
      </IntlProvider>
    </Provider>
  )
  .add('anonymousAudience', () => {
    const allIds = ['chat0', 'chat1']
    const byId: Props['byId'] = {
      'chat0': {
        id: 1,
        image: 'https://werewolf.world/image/0.1/Gert.jpg',
        intensionalDisclosureRange: village.Channel.anonymousAudience,
        isMine: true,
        name: 'ゲルト',
        phaseStartTime: '2018-01-01T00:00:00.000Z',
        phaseTimeLimit: 50,
        serverTimestamp: '2018-01-01T00:00:20.000Z',
        text: 'text',
        type: 'item'
      },
      'chat1': {
        id: 2,
        image: 'https://werewolf.world/image/0.1/Walter.jpg',
        intensionalDisclosureRange: village.Channel.anonymousAudience,
        isMine: false,
        name: 'ヴァルター',
        phaseStartTime: '2018-01-01T00:00:00.000Z',
        phaseTimeLimit: 50,
        serverTimestamp: '2018-01-01T00:00:10.000Z',
        text: 'text',
        type: 'item'
      }
    }
    const story =
      <div className="vi--activity">
        <Chat allIds={allIds} byId={byId} />
      </div>

    return story
  })
  .add('grave', () => {
    const allIds = ['chat0', 'chat1']
    const byId: Props['byId'] = {
      'chat0': {
        id: 1,
        image: 'https://werewolf.world/image/0.1/Gert.jpg',
        intensionalDisclosureRange: village.Channel.grave,
        isMine: true,
        name: 'ゲルト',
        phaseStartTime: '2018-01-01T00:00:00.000Z',
        phaseTimeLimit: 50,
        serverTimestamp: '2018-01-01T00:00:20.000Z',
        text: 'text',
        type: 'item'
      },
      'chat1': {
        id: 2,
        image: 'https://werewolf.world/image/0.1/Walter.jpg',
        intensionalDisclosureRange: village.Channel.grave,
        isMine: false,
        name: 'ヴァルター',
        phaseStartTime: '2018-01-01T00:00:00.000Z',
        phaseTimeLimit: 50,
        serverTimestamp: '2018-01-01T00:00:10.000Z',
        text: 'text',
        type: 'item'
      }
    }
    const story =
      <div className="vi--activity">
        <Chat allIds={allIds} byId={byId} />
      </div>

    return story
  })
  .add('hunter',() => {
    const allIds = ['chat0', 'chat1']
    const byId: Props['byId'] = {
      'chat0': {
        id: 1,
        image: 'https://werewolf.world/image/0.1/Gert.jpg',
        intensionalDisclosureRange: village.Channel.hunter,
        isMine: true,
        name: 'ゲルト',
        phaseStartTime: '2018-01-01T00:00:00.000Z',
        phaseTimeLimit: 50,
        serverTimestamp: '2018-01-01T00:00:20.000Z',
        text: 'text',
        type: 'item'
      },
      'chat1': {
        id: 2,
        image: 'https://werewolf.world/image/0.1/Walter.jpg',
        intensionalDisclosureRange: village.Channel.hunter,
        isMine: false,
        name: 'ヴァルター',
        phaseStartTime: '2018-01-01T00:00:00.000Z',
        phaseTimeLimit: 50,
        serverTimestamp: '2018-01-01T00:00:10.000Z',
        text: 'text',
        type: 'item'
      }
    }
    const story =
      <div className="vi--activity">
        <Chat allIds={allIds} byId={byId} />
      </div>

    return story
  })
  .add('master', () => {
    const allIds = ['chat0', 'chat1']
    const byId: Props['byId'] = {
      'chat0': {
        id: 1,
        image: 'https://werewolf.world/image/0.1/Gert.jpg',
        intensionalDisclosureRange: village.Channel.master,
        isMine: true,
        name: 'ゲルト',
        phaseStartTime: '2018-01-01T00:00:00.000Z',
        phaseTimeLimit: 50,
        serverTimestamp: '2018-01-01T00:00:20.000Z',
        text: 'text',
        type: 'item'
      },
      'chat1': {
        id: 2,
        image: 'https://werewolf.world/image/0.1/Walter.jpg',
        intensionalDisclosureRange: village.Channel.master,
        isMine: false,
        name: 'ヴァルター',
        phaseStartTime: '2018-01-01T00:00:00.000Z',
        phaseTimeLimit: 50,
        serverTimestamp: '2018-01-01T00:00:10.000Z',
        text: 'text',
        type: 'item'
      }
    }
    const story =
      <div className="vi--activity">
        <Chat allIds={allIds} byId={byId} />
      </div>

    return story
  })
  .add('onymousAudience', () => {
    const allIds = ['chat0', 'chat1']
    const byId: Props['byId'] = {
      'chat0': {
        id: 1,
        image: 'https://werewolf.world/image/0.1/Gert.jpg',
        intensionalDisclosureRange: village.Channel.onymousAudience,
        isMine: true,
        name: 'ゲルト',
        phaseStartTime: '2018-01-01T00:00:00.000Z',
        phaseTimeLimit: 50,
        serverTimestamp: '2018-01-01T00:00:20.000Z',
        text: 'text',
        type: 'item'
      },
      'chat1': {
        id: 2,
        image: 'https://werewolf.world/image/0.1/Walter.jpg',
        intensionalDisclosureRange: village.Channel.onymousAudience,
        isMine: false,
        name: 'ヴァルター',
        phaseStartTime: '2018-01-01T00:00:00.000Z',
        phaseTimeLimit: 50,
        serverTimestamp: '2018-01-01T00:00:10.000Z',
        text: 'text',
        type: 'item'
      }
    }
    const story =
      <div className="vi--activity">
        <Chat allIds={allIds} byId={byId} />
      </div>

    return story
  })
  .add('private', () => {
    const allIds = ['chat0', 'chat1']
    const byId: Props['byId'] = {
      'chat0': {
        id: 1,
        image: 'https://werewolf.world/image/0.1/Gert.jpg',
        intensionalDisclosureRange: village.Channel.private,
        isMine: true,
        name: 'ゲルト',
        phaseStartTime: '2018-01-01T00:00:00.000Z',
        phaseTimeLimit: 50,
        serverTimestamp: '2018-01-01T00:00:20.000Z',
        text: 'text',
        type: 'item'
      },
      'chat1': {
        id: 2,
        image: 'https://werewolf.world/image/0.1/Walter.jpg',
        intensionalDisclosureRange: village.Channel.private,
        isMine: false,
        name: 'ヴァルター',
        phaseStartTime: '2018-01-01T00:00:00.000Z',
        phaseTimeLimit: 50,
        serverTimestamp: '2018-01-01T00:00:10.000Z',
        text: 'text',
        type: 'item'
      }
    }
    const story =
      <div className="vi--activity">
        <Chat allIds={allIds} byId={byId} />
      </div>

    return story
  })
  .add('public', () => {
    const allIds = ['chat0', 'chat1']
    const byId: Props['byId'] = {
      'chat0': {
        id: 1,
        image: 'https://werewolf.world/image/0.1/Gert.jpg',
        intensionalDisclosureRange: village.Channel.public,
        isMine: true,
        name: 'ゲルト',
        phaseStartTime: '2018-01-01T00:00:00.000Z',
        phaseTimeLimit: 50,
        serverTimestamp: '2018-01-01T00:00:20.000Z',
        text: 'text',
        type: 'item'
      },
      'chat1': {
        id: 2,
        image: 'https://werewolf.world/image/0.1/Walter.jpg',
        intensionalDisclosureRange: village.Channel.public,
        isMine: false,
        name: 'ヴァルター',
        phaseStartTime: '2018-01-01T00:00:00.000Z',
        phaseTimeLimit: 50,
        serverTimestamp: '2018-01-01T00:00:10.000Z',
        text: 'text',
        type: 'item'
      }
    }
    const story =
      <div className="vi--activity">
        <Chat allIds={allIds} byId={byId} />
      </div>

    return story
  })
  .add('seer', () => {
    const allIds = ['chat0', 'chat1']
    const byId: Props['byId'] = {
      'chat0': {
        id: 1,
        image: 'https://werewolf.world/image/0.1/Gert.jpg',
        intensionalDisclosureRange: village.Channel.seer,
        isMine: true,
        name: 'ゲルト',
        phaseStartTime: '2018-01-01T00:00:00.000Z',
        phaseTimeLimit: 50,
        serverTimestamp: '2018-01-01T00:00:20.000Z',
        text: 'text',
        type: 'item'
      },
      'chat1': {
        id: 2,
        image: 'https://werewolf.world/image/0.1/Walter.jpg',
        intensionalDisclosureRange: village.Channel.seer,
        isMine: false,
        name: 'ヴァルター',
        phaseStartTime: '2018-01-01T00:00:00.000Z',
        phaseTimeLimit: 50,
        serverTimestamp: '2018-01-01T00:00:10.000Z',
        text: 'text',
        type: 'item'
      }
    }
    const story =
      <div className="vi--activity">
        <Chat allIds={allIds} byId={byId} />
      </div>

    return story
  })
  .add('werewolf', () => {
    const allIds = ['chat0', 'chat1']
    const byId: Props['byId'] = {
      'chat0': {
        id: 1,
        image: 'https://werewolf.world/image/0.1/Gert.jpg',
        intensionalDisclosureRange: village.Channel.werewolf,
        isMine: true,
        name: 'ゲルト',
        phaseStartTime: '2018-01-01T00:00:00.000Z',
        phaseTimeLimit: 50,
        serverTimestamp: '2018-01-01T00:00:20.000Z',
        text: 'text',
        type: 'item'
      },
      'chat1': {
        id: 2,
        image: 'https://werewolf.world/image/0.1/Walter.jpg',
        intensionalDisclosureRange: village.Channel.werewolf,
        isMine: false,
        name: 'ヴァルター',
        phaseStartTime: '2018-01-01T00:00:00.000Z',
        phaseTimeLimit: 50,
        serverTimestamp: '2018-01-01T00:00:10.000Z',
        text: 'text',
        type: 'item'
      }
    }
    const story =
      <div className="vi--activity">
        <Chat allIds={allIds} byId={byId} />
      </div>

    return story
  })
  .add('delimeter', () => {
    const allIds = ['delimeter1', 'chat1', 'chat0', 'delimeter0']
    const byId: Props['byId'] = {
      'chat0': {
        id: 1,
        image: 'https://werewolf.world/image/0.1/Gert.jpg',
        intensionalDisclosureRange: village.Channel.public,
        isMine: true,
        name: 'ゲルト',
        phaseStartTime: '2018-01-01T00:00:00.000Z',
        phaseTimeLimit: 50,
        serverTimestamp: '2018-01-01T00:00:20.000Z',
        text: 'text',
        type: 'item'
      },
      'chat1': {
        id: 2,
        image: 'https://werewolf.world/image/0.1/Walter.jpg',
        intensionalDisclosureRange: village.Channel.public,
        isMine: false,
        name: 'ヴァルター',
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
    const story =
      <div className="vi--activity">
        <Chat allIds={allIds} byId={byId} />
      </div>

    return story
  })
  .add('linebreak', () => {
    const allIds = ['delimeter1', 'chat3', 'chat2', 'chat1', 'chat0', 'delimeter0']
    const byId: Props['byId'] = {
      'chat0': {
        id: 1,
        image: 'https://werewolf.world/image/0.1/Gert.jpg',
        intensionalDisclosureRange: village.Channel.public,
        isMine: true,
        name: 'ゲルト',
        phaseStartTime: '2018-01-01T00:00:00.000Z',
        phaseTimeLimit: 50,
        serverTimestamp: '2018-01-01T00:00:20.000Z',
        text: 'text\ntext',
        type: 'item'
      },
      'chat1': {
        id: 2,
        image: 'https://werewolf.world/image/0.1/Walter.jpg',
        intensionalDisclosureRange: village.Channel.public,
        isMine: false,
        name: 'ヴァルター',
        phaseStartTime: '2018-01-01T00:00:00.000Z',
        phaseTimeLimit: 50,
        serverTimestamp: '2018-01-01T00:00:10.000Z',
        text: '改行\n\r\n複数',
        type: 'item'
      },
      'chat2': {
        id: 2,
        image: 'https://werewolf.world/image/0.1/Walter.jpg',
        intensionalDisclosureRange: village.Channel.public,
        isMine: false,
        name: 'ヴァルター',
        phaseStartTime: '2018-01-01T00:00:00.000Z',
        phaseTimeLimit: 50,
        serverTimestamp: '2018-01-01T00:00:09.000Z',
        text: 'longlonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglongtext\ntext',
        type: 'item'
      },
      'chat3': {
        id: 2,
        image: 'https://werewolf.world/image/0.1/Walter.jpg',
        intensionalDisclosureRange: village.Channel.public,
        isMine: false,
        name: 'ヴァルター',
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
    const story =
      <div className="vi--activity">
        <Chat allIds={allIds} byId={byId} />
      </div>

    return story
  })

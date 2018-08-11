// @flow
import Chat from '../src/scripts/village/components/Chat'
import React from 'react'
import {storiesOf} from '@storybook/react'
import {withInfo} from '@storybook/addon-info'
import {withKnobs} from '@storybook/addon-knobs/react'

storiesOf('Chat', module)
  .addDecorator(withKnobs)
  .add('anonymousAudience', withInfo('')(() => {
    const allIds = [ 'chat0', 'chat1' ]
    const byId = {
      'chat0': {
        id: 1,
        image: 'https://werewolf.world/image/0.1/Gert.jpg',
        intensionalDisclosureRange: 'anonymousAudience',
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
        intensionalDisclosureRange: 'anonymousAudience',
        isMine: false,
        name: 'ヴァルター',
        phaseStartTime: '2018-01-01T00:00:00.000Z',
        phaseTimeLimit: 50,
        serverTimestamp: '2018-01-01T00:00:10.000Z',
        text: 'text',
        type: 'item'
      }
    }
    const story = <Chat allIds={allIds} byId={byId} />

    return story
  }))
  .add('grave', withInfo('')(() => {
    const allIds = [ 'chat0', 'chat1' ]
    const byId = {
      'chat0': {
        id: 1,
        image: 'https://werewolf.world/image/0.1/Gert.jpg',
        intensionalDisclosureRange: 'grave',
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
        intensionalDisclosureRange: 'grave',
        isMine: false,
        name: 'ヴァルター',
        phaseStartTime: '2018-01-01T00:00:00.000Z',
        phaseTimeLimit: 50,
        serverTimestamp: '2018-01-01T00:00:10.000Z',
        text: 'text',
        type: 'item'
      }
    }
    const story = <Chat allIds={allIds} byId={byId} />

    return story
  }))
  .add('hunter', withInfo('')(() => {
    const allIds = [ 'chat0', 'chat1' ]
    const byId = {
      'chat0': {
        id: 1,
        image: 'https://werewolf.world/image/0.1/Gert.jpg',
        intensionalDisclosureRange: 'hunter',
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
        intensionalDisclosureRange: 'hunter',
        isMine: false,
        name: 'ヴァルター',
        phaseStartTime: '2018-01-01T00:00:00.000Z',
        phaseTimeLimit: 50,
        serverTimestamp: '2018-01-01T00:00:10.000Z',
        text: 'text',
        type: 'item'
      }
    }
    const story = <Chat allIds={allIds} byId={byId} />

    return story
  }))
  .add('master', withInfo('')(() => {
    const allIds = [ 'chat0', 'chat1' ]
    const byId = {
      'chat0': {
        id: 1,
        image: 'https://werewolf.world/image/0.1/Gert.jpg',
        intensionalDisclosureRange: 'master',
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
        intensionalDisclosureRange: 'master',
        isMine: false,
        name: 'ヴァルター',
        phaseStartTime: '2018-01-01T00:00:00.000Z',
        phaseTimeLimit: 50,
        serverTimestamp: '2018-01-01T00:00:10.000Z',
        text: 'text',
        type: 'item'
      }
    }
    const story = <Chat allIds={allIds} byId={byId} />

    return story
  }))
  .add('onymousAudience', withInfo('')(() => {
    const allIds = [ 'chat0', 'chat1' ]
    const byId = {
      'chat0': {
        id: 1,
        image: 'https://werewolf.world/image/0.1/Gert.jpg',
        intensionalDisclosureRange: 'onymousAudience',
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
        intensionalDisclosureRange: 'onymousAudience',
        isMine: false,
        name: 'ヴァルター',
        phaseStartTime: '2018-01-01T00:00:00.000Z',
        phaseTimeLimit: 50,
        serverTimestamp: '2018-01-01T00:00:10.000Z',
        text: 'text',
        type: 'item'
      }
    }
    const story = <Chat allIds={allIds} byId={byId} />

    return story
  }))
  .add('private', withInfo('')(() => {
    const allIds = [ 'chat0', 'chat1' ]
    const byId = {
      'chat0': {
        id: 1,
        image: 'https://werewolf.world/image/0.1/Gert.jpg',
        intensionalDisclosureRange: 'private',
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
        intensionalDisclosureRange: 'private',
        isMine: false,
        name: 'ヴァルター',
        phaseStartTime: '2018-01-01T00:00:00.000Z',
        phaseTimeLimit: 50,
        serverTimestamp: '2018-01-01T00:00:10.000Z',
        text: 'text',
        type: 'item'
      }
    }
    const story = <Chat allIds={allIds} byId={byId} />

    return story
  }))
  .add('public', withInfo('')(() => {
    const allIds = [ 'chat0', 'chat1' ]
    const byId = {
      'chat0': {
        id: 1,
        image: 'https://werewolf.world/image/0.1/Gert.jpg',
        intensionalDisclosureRange: 'public',
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
        intensionalDisclosureRange: 'public',
        isMine: false,
        name: 'ヴァルター',
        phaseStartTime: '2018-01-01T00:00:00.000Z',
        phaseTimeLimit: 50,
        serverTimestamp: '2018-01-01T00:00:10.000Z',
        text: 'text',
        type: 'item'
      }
    }
    const story = <Chat allIds={allIds} byId={byId} />

    return story
  }))
  .add('seer', withInfo('')(() => {
    const allIds = [ 'chat0', 'chat1' ]
    const byId = {
      'chat0': {
        id: 1,
        image: 'https://werewolf.world/image/0.1/Gert.jpg',
        intensionalDisclosureRange: 'seer',
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
        intensionalDisclosureRange: 'seer',
        isMine: false,
        name: 'ヴァルター',
        phaseStartTime: '2018-01-01T00:00:00.000Z',
        phaseTimeLimit: 50,
        serverTimestamp: '2018-01-01T00:00:10.000Z',
        text: 'text',
        type: 'item'
      }
    }
    const story = <Chat allIds={allIds} byId={byId} />

    return story
  }))
  .add('werewolf', withInfo('')(() => {
    const allIds = [ 'chat0', 'chat1' ]
    const byId = {
      'chat0': {
        id: 1,
        image: 'https://werewolf.world/image/0.1/Gert.jpg',
        intensionalDisclosureRange: 'werewolf',
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
        intensionalDisclosureRange: 'werewolf',
        isMine: false,
        name: 'ヴァルター',
        phaseStartTime: '2018-01-01T00:00:00.000Z',
        phaseTimeLimit: 50,
        serverTimestamp: '2018-01-01T00:00:10.000Z',
        text: 'text',
        type: 'item'
      }
    }
    const story = <Chat allIds={allIds} byId={byId} />

    return story
  }))
  .add('区切り', withInfo('')(() => {
    const allIds = [ 'chat0', 'delimeter0', 'chat1' ]
    const byId = {
      'chat0': {
        id: 1,
        image: 'https://werewolf.world/image/0.1/Gert.jpg',
        intensionalDisclosureRange: 'public',
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
        intensionalDisclosureRange: 'public',
        isMine: false,
        name: 'ヴァルター',
        phaseStartTime: '2018-01-01T00:00:00.000Z',
        phaseTimeLimit: 50,
        serverTimestamp: '2018-01-01T00:00:10.000Z',
        text: 'text',
        type: 'item'
      },
      'delimeter0': {
        text: '1日目',
        type: 'delimeter'
      }
    }
    const story = <Chat allIds={allIds} byId={byId} />

    return story
  }))

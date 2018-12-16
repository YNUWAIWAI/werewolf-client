export default {
  agents: {
    all: []
  },
  base: {
    clientTimestamp: '2006-10-07T12:06:56.568+09:00',
    date: 0,
    intensionalDisclosureRange: 'private',
    phase: 'flavor text',
    phaseStartTime: '2006-10-07T12:06:56.568+09:00',
    phaseTimeLimit: 600,
    serverTimestamp: '2006-10-07T12:06:56.568+09:00',
    token: 'eFVr3O93oLhmnE8OqTMl5VSVGIV',
    village: {
      '@id': 'https://licos.online/state/0.2/village',
      'id': 3,
      'name': '横国の森の奥にある時代に取り残された小さな村',
      'totalNumberOfAgents': 15
    }
  },
  chat: {
    allIds: ['chat1', 'chat0'],
    byId: {
      'chat0': {
        'id': 1,
        'image': 'https://werewolf.world/image/0.1/Walter.jpg',
        'intensionalDisclosureRange': 'public',
        'isMine': true,
        'name': {
          'en': 'Walter',
          'ja': 'ヴァルター'
        },
        'phaseTimeLimit': 600,
        'phaseStartTime': '2006-10-07T12:06:56.568+09:00',
        'serverTimestamp': '2006-10-07T12:07:56.568+09:00',
        'text': 'それで、あなたは人狼が誰だと思うの？',
        'type': 'item'
      },
      'chat1': {
        'id': 2,
        'image': 'https://werewolf.world/image/0.1/Alvin.jpg',
        'intensionalDisclosureRange': 'public',
        'isMine': false,
        'name': {
          'en': 'Alvin',
          'ja': 'アルビン'
        },
        'phaseTimeLimit': 600,
        'phaseStartTime': '2006-10-07T12:06:56.568+09:00',
        'serverTimestamp': '2006-10-07T12:08:56.568+09:00',
        'text': '>>1 私はパメラが人狼だと思う。',
        'type': 'item'
      }
    }
  },
  commandInputBox: {
    'limited': {
      available: true,
      postCount: 0,
      postCountLimit: 10
    },
    'private': {
      postCount: 0,
      postCountLimit: 10
    },
    'public': {
      postCount: 0,
      postCountLimit: 10
    }
  },
  commandSelection: {
    agents: [],
    fixed: false
  },
  hideButton: {
    hide: false
  },
  language: 'ja',
  modal: {
    id: -1,
    visible: false
  },
  obfucator: {
    visible: false
  },
  prediction: {
    playerStatus: [],
    roleStatus: [],
    table: {}
  },
  result: {
    agents: {},
    allIds: [],
    losers: [],
    me: null,
    summary: {
      kind: 'audience',
      loserTeam: new Set(),
      winnerTeam: 'villager'
    },
    visible: false,
    winners: []
  },
  roles: {
    all: []
  }
}

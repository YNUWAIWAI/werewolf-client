// @flow
/* eslint sort-keys: 0 */
export default {
  '@context': [
    'https://werewolf.world/context/0.1/base.jsonld',
    'https://werewolf.world/context/0.1/agent.jsonld',
    'https://werewolf.world/context/0.1/role.jsonld',
    'https://werewolf.world/context/0.1/votingResults.jsonld'
  ],
  '@id': 'https://werewolf.world/resource/0.1/systemMessage',

  'villageId': 3,
  'villageName': '横国の森の奥にある時代に取り残された小さな村',
  'totalNumberOfAgents': 15,
  'token': 'eFVr3O93oLhmnE8OqTMl5VSVGIV',
  'phase': 'day conversation',
  'date': 1,
  'phaseTimeLimit': 600,
  'phaseStartTime': '2006-10-07T12:06:56.568+09:00',
  'serverTimestamp': '2006-10-07T12:06:56.568+09:00',
  'clientTimestamp': '2006-10-07T12:06:56.568+09:00',
  'directionality': 'server to client',
  'intensionalDisclosureRange': 'private',
  'extensionalDisclosureRange': [],
  'chatLimit': 10,
  'chatCharacterLimit': 140,

  'votingResultsSummary': [],
  'votingResultsDetails': [],

  'agent': [
    {
      '@id': 'https://werewolf.world/resource/0.1/Gert',
      'agentIsMine': false,
      'name': {
        'en': 'Gert',
        'ja': 'ゲルト'
      },
      'image': 'https://werewolf.world/image/0.1/Gert.jpg',
      'id': 0,
      'status': 'alive',
      'statusUpdatePhase': 'day conversation',
      'statusUpdateDate': 1,
      'isAChoice': false
    },
    {
      '@id': 'https://werewolf.world/resource/0.1/Walter',
      'agentIsMine': true,
      'name': {
        'en': 'Walter',
        'ja': 'ヴァルター'
      },
      'image': 'https://werewolf.world/image/0.1/Walter.jpg',
      'id': 1,
      'status': 'alive',
      'statusUpdatePhase': 'day conversation',
      'statusUpdateDate': 1,
      'isAChoice': false
    },
    {
      '@id': 'https://werewolf.world/resource/0.1/Moritz',
      'agentIsMine': false,
      'name': {
        'en': 'Moritz',
        'ja': 'モーリッツ'
      },
      'image': 'https://werewolf.world/image/0.1/Moritz.jpg',
      'id': 2,
      'status': 'alive',
      'statusUpdatePhase': 'day conversation',
      'statusUpdateDate': 1,
      'isAChoice': false
    },
    {
      '@id': 'https://werewolf.world/resource/0.1/Simson',
      'agentIsMine': false,
      'name': {
        'en': 'Simson',
        'ja': 'ジムゾン'
      },
      'image': 'https://werewolf.world/image/0.1/Simson.jpg',
      'id': 3,
      'status': 'alive',
      'statusUpdatePhase': 'day conversation',
      'statusUpdateDate': 1,
      'isAChoice': false
    },
    {
      '@id': 'https://werewolf.world/resource/0.1/Thomas',
      'agentIsMine': false,
      'name': {
        'en': 'Thomas',
        'ja': 'トーマス'
      },
      'image': 'https://werewolf.world/image/0.1/Thomas.jpg',
      'id': 4,
      'status': 'alive',
      'statusUpdatePhase': 'day conversation',
      'statusUpdateDate': 1,
      'isAChoice': false
    },
    {
      '@id': 'https://werewolf.world/resource/0.1/Nicholas',
      'agentIsMine': false,
      'name': {
        'en': 'Nicholas',
        'ja': 'ニコラス'
      },
      'image': 'https://werewolf.world/image/0.1/Nicholas.jpg',
      'id': 5,
      'status': 'alive',
      'statusUpdatePhase': 'day conversation',
      'statusUpdateDate': 1,
      'isAChoice': false
    },
    {
      '@id': 'https://werewolf.world/resource/0.1/Dieter',
      'agentIsMine': false,
      'name': {
        'en': 'Dieter',
        'ja': 'ディーター'
      },
      'image': 'https://werewolf.world/image/0.1/Dieter.jpg',
      'id': 6,
      'status': 'alive',
      'statusUpdatePhase': 'day conversation',
      'statusUpdateDate': 1,
      'isAChoice': false
    },
    {
      '@id': 'https://werewolf.world/resource/0.1/Peter',
      'agentIsMine': false,
      'name': {
        'en': 'Peter',
        'ja': 'ペーター'
      },
      'image': 'https://werewolf.world/image/0.1/Peter.jpg',
      'id': 7,
      'status': 'alive',
      'statusUpdatePhase': 'day conversation',
      'statusUpdateDate': 1,
      'isAChoice': false
    },
    {
      '@id': 'https://werewolf.world/resource/0.1/Lisa',
      'agentIsMine': false,
      'name': {
        'en': 'Lisa',
        'ja': 'リーザ'
      },
      'image': 'https://werewolf.world/image/0.1/Lisa.jpg',
      'id': 8,
      'status': 'alive',
      'statusUpdatePhase': 'day conversation',
      'statusUpdateDate': 1,
      'isAChoice': false
    },
    {
      '@id': 'https://werewolf.world/resource/0.1/Alvin',
      'agentIsMine': false,
      'name': {
        'en': 'Alvin',
        'ja': 'アルビン'
      },
      'image': 'https://werewolf.world/image/0.1/Alvin.jpg',
      'id': 9,
      'status': 'alive',
      'statusUpdatePhase': 'day conversation',
      'statusUpdateDate': 1,
      'isAChoice': false
    },
    {
      '@id': 'https://werewolf.world/resource/0.1/Catalina',
      'agentIsMine': false,
      'name': {
        'en': 'Catalina',
        'ja': 'カタリナ'
      },
      'image': 'https://werewolf.world/image/0.1/Catalina.jpg',
      'id': 10,
      'status': 'alive',
      'statusUpdatePhase': 'day conversation',
      'statusUpdateDate': 1,
      'isAChoice': false
    },
    {
      '@id': 'https://werewolf.world/resource/0.1/Otto',
      'agentIsMine': false,
      'name': {
        'en': 'Otto',
        'ja': 'オットー'
      },
      'image': 'https://werewolf.world/image/0.1/Otto.jpg',
      'id': 11,
      'status': 'alive',
      'statusUpdatePhase': 'day conversation',
      'statusUpdateDate': 1,
      'isAChoice': false
    },
    {
      '@id': 'https://werewolf.world/resource/0.1/Joachim',
      'agentIsMine': false,
      'name': {
        'en': 'Joachim',
        'ja': 'ヨアヒム'
      },
      'image': 'https://werewolf.world/image/0.1/Joachim.jpg',
      'id': 12,
      'status': 'alive',
      'statusUpdatePhase': 'day conversation',
      'statusUpdateDate': 1,
      'isAChoice': false
    },
    {
      '@id': 'https://werewolf.world/resource/0.1/Pamela',
      'agentIsMine': false,
      'name': {
        'en': 'Pamela',
        'ja': 'パメラ'
      },
      'image': 'https://werewolf.world/image/0.1/Pamela.jpg',
      'id': 13,
      'status': 'alive',
      'statusUpdatePhase': 'day conversation',
      'statusUpdateDate': 1,
      'isAChoice': false
    },
    {
      '@id': 'https://werewolf.world/resource/0.1/Jacob',
      'agentIsMine': false,
      'name': {
        'en': 'Jacob',
        'ja': 'ヤコブ'
      },
      'image': 'https://werewolf.world/image/0.1/Jacob.jpg',
      'id': 14,
      'status': 'alive',
      'statusUpdatePhase': 'day conversation',
      'statusUpdateDate': 1,
      'isAChoice': false
    }
  ],

  'role': [
    {
      '@id': 'https://werewolf.world/resource/0.1/master',
      'roleIsMine': false,
      'name': {
        'en': 'Master',
        'ja': 'マスター'
      },
      'image': 'https://werewolf.world/image/0.1/master.jpg',
      'numberOfAgents': 1,
      'board': []
    },
    {
      '@id': 'https://werewolf.world/resource/0.1/villager',
      'roleIsMine': false,
      'name': {
        'en': 'Villager',
        'ja': '村人'
      },
      'image': 'https://werewolf.world/image/0.1/villager.jpg',
      'numberOfAgents': 5,
      'board': [
        {
          'boardAgent': {
            '@id': 'https://werewolf.world/resource/0.1/Walter',
            'boardAgentId': 1,
            'boardAgentName': {
              'en': 'Walter',
              'ja': 'ヴァルター'
            },
            'boardAgentImage': 'https://werewolf.world/image/0.1/Walter.jpg'
          },
          'boardPolarity': 'negative',
          'boardPhase': 'day conversation',
          'boardDate': 1
        }
      ]
    },
    {
      '@id': 'https://werewolf.world/resource/0.1/seer',
      'roleIsMine': true,
      'name': {
        'en': 'Seer',
        'ja': '占い師'
      },
      'image': 'https://werewolf.world/image/0.1/seer.jpg',
      'numberOfAgents': 2,
      'board': [
        {
          'boardAgent': {
            '@id': 'https://werewolf.world/resource/0.1/Walter',
            'boardAgentId': 1,
            'boardAgentName': {
              'en': 'Walter',
              'ja': 'ヴァルター'
            },
            'boardAgentImage': 'https://werewolf.world/image/0.1/Walter.jpg'
          },
          'boardPolarity': 'positive',
          'boardPhase': 'day conversation',
          'boardDate': 1
        }
      ]
    },
    {
      '@id': 'https://werewolf.world/resource/0.1/medium',
      'roleIsMine': false,
      'name': {
        'en': 'Medium',
        'ja': '霊媒師'
      },
      'image': 'https://werewolf.world/image/0.1/medium.jpg',
      'numberOfAgents': 1,
      'board': [
        {
          'boardAgent': {
            '@id': 'https://werewolf.world/resource/0.1/Walter',
            'boardAgentId': 1,
            'boardAgentName': {
              'en': 'Walter',
              'ja': 'ヴァルター'
            },
            'boardAgentImage': 'https://werewolf.world/image/0.1/Walter.jpg'
          },
          'boardPolarity': 'negative',
          'boardPhase': 'day conversation',
          'boardDate': 1
        }
      ]
    },
    {
      '@id': 'https://werewolf.world/resource/0.1/hunter',
      'roleIsMine': false,
      'name': {
        'en': 'Hunter',
        'ja': '狩人'
      },
      'image': 'https://werewolf.world/image/0.1/hunter.jpg',
      'numberOfAgents': 1,
      'board': [
        {
          'boardAgent': {
            '@id': 'https://werewolf.world/resource/0.1/Walter',
            'boardAgentId': 1,
            'boardAgentName': {
              'en': 'Walter',
              'ja': 'ヴァルター'
            },
            'boardAgentImage': 'https://werewolf.world/image/0.1/Walter.jpg'
          },
          'boardPolarity': 'negative',
          'boardPhase': 'day conversation',
          'boardDate': 1
        }
      ]
    },
    {
      '@id': 'https://werewolf.world/resource/0.1/mason',
      'roleIsMine': false,
      'name': {
        'en': 'Mason',
        'ja': '共有者'
      },
      'image': 'https://werewolf.world/image/0.1/mason.jpg',
      'numberOfAgents': 2,
      'board': [
        {
          'boardAgent': {
            '@id': 'https://werewolf.world/resource/0.1/Walter',
            'boardAgentId': 1,
            'boardAgentName': {
              'en': 'Walter',
              'ja': 'ヴァルター'
            },
            'boardAgentImage': 'https://werewolf.world/image/0.1/Walter.jpg'
          },
          'boardPolarity': 'negative',
          'boardPhase': 'day conversation',
          'boardDate': 1
        }
      ]
    },
    {
      '@id': 'https://werewolf.world/resource/0.1/madman',
      'roleIsMine': false,
      'name': {
        'en': 'Madman',
        'ja': '狂人'
      },
      'image': 'https://werewolf.world/image/0.1/madman.jpg',
      'numberOfAgents': 1,
      'board': [
        {
          'boardAgent': {
            '@id': 'https://werewolf.world/resource/0.1/Walter',
            'boardAgentId': 1,
            'boardAgentName': {
              'en': 'Walter',
              'ja': 'ヴァルター'
            },
            'boardAgentImage': 'https://werewolf.world/image/0.1/Walter.jpg'
          },
          'boardPolarity': 'negative',
          'boardPhase': 'day conversation',
          'boardDate': 1
        }
      ]
    },
    {
      '@id': 'https://werewolf.world/resource/0.1/werewolf',
      'roleIsMine': false,
      'name': {
        'en': 'Werewolf',
        'ja': '人狼'
      },
      'image': 'https://werewolf.world/image/0.1/werewolf.jpg',
      'numberOfAgents': 2,
      'board': [
        {
          'boardAgent': {
            '@id': 'https://werewolf.world/resource/0.1/Walter',
            'boardAgentId': 1,
            'boardAgentName': {
              'en': 'Walter',
              'ja': 'ヴァルター'
            },
            'boardAgentImage': 'https://werewolf.world/image/0.1/Walter.jpg'
          },
          'boardPolarity': 'negative',
          'boardPhase': 'day conversation',
          'boardDate': 1
        }
      ]
    },
    {
      '@id': 'https://werewolf.world/resource/0.1/werehumster',
      'roleIsMine': false,
      'name': {
        'en': 'Werehumster',
        'ja': 'ハムスター人間'
      },
      'image': 'https://werewolf.world/image/0.1/werehumster.jpg',
      'numberOfAgents': 1,
      'board': [
        {
          'boardAgent': {
            '@id': 'https://werewolf.world/resource/0.1/Walter',
            'boardAgentId': 1,
            'boardAgentName': {
              'en': 'Walter',
              'ja': 'ヴァルター'
            },
            'boardAgentImage': 'https://werewolf.world/image/0.1/Walter.jpg'
          },
          'boardPolarity': 'negative',
          'boardPhase': 'day conversation',
          'boardDate': 1
        }
      ]
    }
  ]
}

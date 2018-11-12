// @flow
/* eslint sort-keys: 0 */
export default {
  '@context': [
    'https://werewolf.world/context/0.2/base.jsonld',
    'https://werewolf.world/context/0.2/agent.jsonld',
    'https://werewolf.world/context/0.2/role.jsonld',
    'https://werewolf.world/context/0.2/votingResults.jsonld'
  ],
  '@id': 'https://werewolf.world/resource/0.2/systemMessage',

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
      '@id': 'https://werewolf.world/resource/0.2/Gert',
      'agentIsMine': false,
      'name': {
        'en': 'Gert',
        'ja': 'ゲルト'
      },
      'image': 'https://werewolf.world/image/0.2/Gert.jpg',
      'id': 0,
      'status': 'alive',
      'statusUpdatePhase': 'day conversation',
      'statusUpdateDate': 1,
      'isAChoice': false
    },
    {
      '@id': 'https://werewolf.world/resource/0.2/Walter',
      'agentIsMine': true,
      'name': {
        'en': 'Walter',
        'ja': 'ヴァルター'
      },
      'image': 'https://werewolf.world/image/0.2/Walter.jpg',
      'id': 1,
      'status': 'alive',
      'statusUpdatePhase': 'day conversation',
      'statusUpdateDate': 1,
      'isAChoice': false
    },
    {
      '@id': 'https://werewolf.world/resource/0.2/Moritz',
      'agentIsMine': false,
      'name': {
        'en': 'Moritz',
        'ja': 'モーリッツ'
      },
      'image': 'https://werewolf.world/image/0.2/Moritz.jpg',
      'id': 2,
      'status': 'alive',
      'statusUpdatePhase': 'day conversation',
      'statusUpdateDate': 1,
      'isAChoice': false
    },
    {
      '@id': 'https://werewolf.world/resource/0.2/Simson',
      'agentIsMine': false,
      'name': {
        'en': 'Simson',
        'ja': 'ジムゾン'
      },
      'image': 'https://werewolf.world/image/0.2/Simson.jpg',
      'id': 3,
      'status': 'alive',
      'statusUpdatePhase': 'day conversation',
      'statusUpdateDate': 1,
      'isAChoice': false
    },
    {
      '@id': 'https://werewolf.world/resource/0.2/Thomas',
      'agentIsMine': false,
      'name': {
        'en': 'Thomas',
        'ja': 'トーマス'
      },
      'image': 'https://werewolf.world/image/0.2/Thomas.jpg',
      'id': 4,
      'status': 'alive',
      'statusUpdatePhase': 'day conversation',
      'statusUpdateDate': 1,
      'isAChoice': false
    },
    {
      '@id': 'https://werewolf.world/resource/0.2/Nicholas',
      'agentIsMine': false,
      'name': {
        'en': 'Nicholas',
        'ja': 'ニコラス'
      },
      'image': 'https://werewolf.world/image/0.2/Nicholas.jpg',
      'id': 5,
      'status': 'alive',
      'statusUpdatePhase': 'day conversation',
      'statusUpdateDate': 1,
      'isAChoice': false
    },
    {
      '@id': 'https://werewolf.world/resource/0.2/Dieter',
      'agentIsMine': false,
      'name': {
        'en': 'Dieter',
        'ja': 'ディーター'
      },
      'image': 'https://werewolf.world/image/0.2/Dieter.jpg',
      'id': 6,
      'status': 'alive',
      'statusUpdatePhase': 'day conversation',
      'statusUpdateDate': 1,
      'isAChoice': false
    },
    {
      '@id': 'https://werewolf.world/resource/0.2/Peter',
      'agentIsMine': false,
      'name': {
        'en': 'Peter',
        'ja': 'ペーター'
      },
      'image': 'https://werewolf.world/image/0.2/Peter.jpg',
      'id': 7,
      'status': 'alive',
      'statusUpdatePhase': 'day conversation',
      'statusUpdateDate': 1,
      'isAChoice': false
    },
    {
      '@id': 'https://werewolf.world/resource/0.2/Lisa',
      'agentIsMine': false,
      'name': {
        'en': 'Lisa',
        'ja': 'リーザ'
      },
      'image': 'https://werewolf.world/image/0.2/Lisa.jpg',
      'id': 8,
      'status': 'alive',
      'statusUpdatePhase': 'day conversation',
      'statusUpdateDate': 1,
      'isAChoice': false
    },
    {
      '@id': 'https://werewolf.world/resource/0.2/Alvin',
      'agentIsMine': false,
      'name': {
        'en': 'Alvin',
        'ja': 'アルビン'
      },
      'image': 'https://werewolf.world/image/0.2/Alvin.jpg',
      'id': 9,
      'status': 'alive',
      'statusUpdatePhase': 'day conversation',
      'statusUpdateDate': 1,
      'isAChoice': false
    },
    {
      '@id': 'https://werewolf.world/resource/0.2/Catalina',
      'agentIsMine': false,
      'name': {
        'en': 'Catalina',
        'ja': 'カタリナ'
      },
      'image': 'https://werewolf.world/image/0.2/Catalina.jpg',
      'id': 10,
      'status': 'alive',
      'statusUpdatePhase': 'day conversation',
      'statusUpdateDate': 1,
      'isAChoice': false
    },
    {
      '@id': 'https://werewolf.world/resource/0.2/Otto',
      'agentIsMine': false,
      'name': {
        'en': 'Otto',
        'ja': 'オットー'
      },
      'image': 'https://werewolf.world/image/0.2/Otto.jpg',
      'id': 11,
      'status': 'alive',
      'statusUpdatePhase': 'day conversation',
      'statusUpdateDate': 1,
      'isAChoice': false
    },
    {
      '@id': 'https://werewolf.world/resource/0.2/Joachim',
      'agentIsMine': false,
      'name': {
        'en': 'Joachim',
        'ja': 'ヨアヒム'
      },
      'image': 'https://werewolf.world/image/0.2/Joachim.jpg',
      'id': 12,
      'status': 'alive',
      'statusUpdatePhase': 'day conversation',
      'statusUpdateDate': 1,
      'isAChoice': false
    },
    {
      '@id': 'https://werewolf.world/resource/0.2/Pamela',
      'agentIsMine': false,
      'name': {
        'en': 'Pamela',
        'ja': 'パメラ'
      },
      'image': 'https://werewolf.world/image/0.2/Pamela.jpg',
      'id': 13,
      'status': 'alive',
      'statusUpdatePhase': 'day conversation',
      'statusUpdateDate': 1,
      'isAChoice': false
    },
    {
      '@id': 'https://werewolf.world/resource/0.2/Jacob',
      'agentIsMine': false,
      'name': {
        'en': 'Jacob',
        'ja': 'ヤコブ'
      },
      'image': 'https://werewolf.world/image/0.2/Jacob.jpg',
      'id': 14,
      'status': 'alive',
      'statusUpdatePhase': 'day conversation',
      'statusUpdateDate': 1,
      'isAChoice': false
    }
  ],

  'role': [
    {
      '@id': 'https://werewolf.world/resource/0.2/master',
      'roleIsMine': false,
      'name': {
        'en': 'Master',
        'ja': 'マスター'
      },
      'image': 'https://werewolf.world/image/0.2/master.jpg',
      'numberOfAgents': 1,
      'board': []
    },
    {
      '@id': 'https://werewolf.world/resource/0.2/villager',
      'roleIsMine': false,
      'name': {
        'en': 'Villager',
        'ja': '村人'
      },
      'image': 'https://werewolf.world/image/0.2/villager.jpg',
      'numberOfAgents': 6,
      'board': [
        {
          'boardAgent': {
            '@id': 'https://werewolf.world/resource/0.2/Walter',
            'boardAgentId': 1,
            'boardAgentName': {
              'en': 'Walter',
              'ja': 'ヴァルター'
            },
            'boardAgentImage': 'https://werewolf.world/image/0.2/Walter.jpg'
          },
          'boardPolarity': 'negative',
          'boardPhase': 'day conversation',
          'boardDate': 1
        }
      ]
    },
    {
      '@id': 'https://werewolf.world/resource/0.2/seer',
      'roleIsMine': true,
      'name': {
        'en': 'Seer',
        'ja': '占い師'
      },
      'image': 'https://werewolf.world/image/0.2/seer.jpg',
      'numberOfAgents': 1,
      'board': [
        {
          'boardAgent': {
            '@id': 'https://werewolf.world/resource/0.2/Walter',
            'boardAgentId': 1,
            'boardAgentName': {
              'en': 'Walter',
              'ja': 'ヴァルター'
            },
            'boardAgentImage': 'https://werewolf.world/image/0.2/Walter.jpg'
          },
          'boardPolarity': 'positive',
          'boardPhase': 'day conversation',
          'boardDate': 1
        }
      ]
    },
    {
      '@id': 'https://werewolf.world/resource/0.2/medium',
      'roleIsMine': false,
      'name': {
        'en': 'Medium',
        'ja': '霊媒師'
      },
      'image': 'https://werewolf.world/image/0.2/medium.jpg',
      'numberOfAgents': 1,
      'board': [
        {
          'boardAgent': {
            '@id': 'https://werewolf.world/resource/0.2/Walter',
            'boardAgentId': 1,
            'boardAgentName': {
              'en': 'Walter',
              'ja': 'ヴァルター'
            },
            'boardAgentImage': 'https://werewolf.world/image/0.2/Walter.jpg'
          },
          'boardPolarity': 'negative',
          'boardPhase': 'day conversation',
          'boardDate': 1
        }
      ]
    },
    {
      '@id': 'https://werewolf.world/resource/0.2/hunter',
      'roleIsMine': false,
      'name': {
        'en': 'Hunter',
        'ja': '狩人'
      },
      'image': 'https://werewolf.world/image/0.2/hunter.jpg',
      'numberOfAgents': 1,
      'board': [
        {
          'boardAgent': {
            '@id': 'https://werewolf.world/resource/0.2/Walter',
            'boardAgentId': 1,
            'boardAgentName': {
              'en': 'Walter',
              'ja': 'ヴァルター'
            },
            'boardAgentImage': 'https://werewolf.world/image/0.2/Walter.jpg'
          },
          'boardPolarity': 'negative',
          'boardPhase': 'day conversation',
          'boardDate': 1
        }
      ]
    },
    {
      '@id': 'https://werewolf.world/resource/0.2/mason',
      'roleIsMine': false,
      'name': {
        'en': 'Mason',
        'ja': '共有者'
      },
      'image': 'https://werewolf.world/image/0.2/mason.jpg',
      'numberOfAgents': 2,
      'board': [
        {
          'boardAgent': {
            '@id': 'https://werewolf.world/resource/0.2/Walter',
            'boardAgentId': 1,
            'boardAgentName': {
              'en': 'Walter',
              'ja': 'ヴァルター'
            },
            'boardAgentImage': 'https://werewolf.world/image/0.2/Walter.jpg'
          },
          'boardPolarity': 'negative',
          'boardPhase': 'day conversation',
          'boardDate': 1
        }
      ]
    },
    {
      '@id': 'https://werewolf.world/resource/0.2/madman',
      'roleIsMine': false,
      'name': {
        'en': 'Madman',
        'ja': '狂人'
      },
      'image': 'https://werewolf.world/image/0.2/madman.jpg',
      'numberOfAgents': 1,
      'board': [
        {
          'boardAgent': {
            '@id': 'https://werewolf.world/resource/0.2/Walter',
            'boardAgentId': 1,
            'boardAgentName': {
              'en': 'Walter',
              'ja': 'ヴァルター'
            },
            'boardAgentImage': 'https://werewolf.world/image/0.2/Walter.jpg'
          },
          'boardPolarity': 'negative',
          'boardPhase': 'day conversation',
          'boardDate': 1
        }
      ]
    },
    {
      '@id': 'https://werewolf.world/resource/0.2/werewolf',
      'roleIsMine': false,
      'name': {
        'en': 'Werewolf',
        'ja': '人狼'
      },
      'image': 'https://werewolf.world/image/0.2/werewolf.jpg',
      'numberOfAgents': 2,
      'board': [
        {
          'boardAgent': {
            '@id': 'https://werewolf.world/resource/0.2/Walter',
            'boardAgentId': 1,
            'boardAgentName': {
              'en': 'Walter',
              'ja': 'ヴァルター'
            },
            'boardAgentImage': 'https://werewolf.world/image/0.2/Walter.jpg'
          },
          'boardPolarity': 'negative',
          'boardPhase': 'day conversation',
          'boardDate': 1
        }
      ]
    },
    {
      '@id': 'https://werewolf.world/resource/0.2/werehamster',
      'roleIsMine': false,
      'name': {
        'en': 'Werehamster',
        'ja': 'ハムスター人間'
      },
      'image': 'https://werewolf.world/image/0.2/werehamster.jpg',
      'numberOfAgents': 1,
      'board': [
        {
          'boardAgent': {
            '@id': 'https://werewolf.world/resource/0.2/Walter',
            'boardAgentId': 1,
            'boardAgentName': {
              'en': 'Walter',
              'ja': 'ヴァルター'
            },
            'boardAgentImage': 'https://werewolf.world/image/0.2/Walter.jpg'
          },
          'boardPolarity': 'negative',
          'boardPhase': 'day conversation',
          'boardDate': 1
        }
      ]
    }
  ]
}

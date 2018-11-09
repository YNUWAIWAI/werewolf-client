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
  'phase': 'results',
  'date': -1,
  'phaseTimeLimit': -1,
  'phaseStartTime': '2006-10-07T12:06:56.568+09:00',
  'serverTimestamp': '2006-10-07T12:06:56.568+09:00',
  'clientTimestamp': '2006-10-07T12:06:56.568+09:00',
  'directionality': 'server to client',
  'intensionalDisclosureRange': 'private',
  'extensionalDisclosureRange': [],
  'chatLimit': 0,
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
      'role': {
        '@id': 'https://werewolf.world/resource/0.1/villager',
        'roleName': {
          'en': 'Villager',
          'ja': '村人'
        },
        'roleImage': 'https://werewolf.world/image/0.1/villager.jpg'
      },
      'status': 'alive',
      'result': 'win',
      'userName': 'Sato',
      'userAvatar': 'https://werewolf.world/image/0.1/Nicholas.jpg'
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
      'role': {
        '@id': 'https://werewolf.world/resource/0.1/seer',
        'roleName': {
          'en': 'Seer',
          'ja': '占い師'
        },
        'roleImage': 'https://werewolf.world/image/0.1/seer.jpg'
      },
      'status': 'alive',
      'result': 'win',
      'userName': 'Suzuki',
      'userAvatar': 'https://werewolf.world/image/0.1/Gert.jpg'
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
      'role': {
        '@id': 'https://werewolf.world/resource/0.1/werewolf',
        'roleName': {
          'en': 'Werewolf',
          'ja': '人狼'
        },
        'roleImage': 'https://werewolf.world/image/0.1/werewolf.jpg'
      },
      'status': 'alive',
      'result': 'lose',
      'userName': 'Takahashi',
      'userAvatar': 'https://werewolf.world/image/0.1/Alvin.jpg'
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
      'role': {
        '@id': 'https://werewolf.world/resource/0.1/hunter',
        'roleName': {
          'en': 'Hunter',
          'ja': '狩人'
        },
        'roleImage': 'https://werewolf.world/image/0.1/hunter.jpg'
      },
      'status': 'alive',
      'result': 'win',
      'userName': 'Tanaka',
      'userAvatar': 'https://werewolf.world/image/0.1/Friedel.jpg'
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
      'role': {
        '@id': 'https://werewolf.world/resource/0.1/medium',
        'roleName': {
          'en': 'Medium',
          'ja': '霊媒師'
        },
        'roleImage': 'https://werewolf.world/image/0.1/medium.jpg'
      },
      'status': 'alive',
      'result': 'win',
      'userName': 'Ito',
      'userAvatar': 'https://werewolf.world/image/0.1/Dieter.jpg'
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
      'role': {
        '@id': 'https://werewolf.world/resource/0.1/werehumster',
        'roleName': {
          'en': 'Werehuster',
          'ja': 'ハムスター人間'
        },
        'roleImage': 'https://werewolf.world/image/0.1/werehumster.jpg'
      },
      'status': 'death by fear',
      'result': 'lose',
      'userName': 'Watanabe',
      'userAvatar': 'https://werewolf.world/image/0.1/Erna.jpg'
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
      'role': {
        '@id': 'https://werewolf.world/resource/0.1/madman',
        'roleName': {
          'en': 'Madman',
          'ja': '狂人'
        },
        'roleImage': 'https://werewolf.world/image/0.1/madman.jpg'
      },
      'status': 'death by execution',
      'result': 'lose',
      'userName': 'Yamamoto',
      'userAvatar': 'https://werewolf.world/image/0.1/Jacob.jpg'
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
      'role': {
        '@id': 'https://werewolf.world/resource/0.1/werewolf',
        'roleName': {
          'en': 'Werewolf',
          'ja': '人狼'
        },
        'roleImage': 'https://werewolf.world/image/0.1/werewolf.jpg'
      },
      'status': 'unnatural death',
      'result': 'lose',
      'userName': 'Nakamura',
      'userAvatar': 'https://werewolf.world/image/0.1/Nicholas.jpg'
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
      'role': {
        '@id': 'https://werewolf.world/resource/0.1/villager',
        'roleName': {
          'en': 'Villager',
          'ja': '村人'
        },
        'roleImage': 'https://werewolf.world/image/0.1/villager.jpg'
      },
      'status': 'unnatural death',
      'result': 'win',
      'userName': 'Kobayashi',
      'userAvatar': 'https://werewolf.world/image/0.1/Peter.jpg'
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
      'role': {
        '@id': 'https://werewolf.world/resource/0.1/villager',
        'roleName': {
          'en': 'Villager',
          'ja': '村人'
        },
        'roleImage': 'https://werewolf.world/image/0.1/villager.jpg'
      },
      'status': 'unnatural death',
      'result': 'win',
      'userName': 'Yoshida',
      'userAvatar': 'https://werewolf.world/image/0.1/Peter.jpg'
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
      'role': {
        '@id': 'https://werewolf.world/resource/0.1/mason',
        'roleName': {
          'en': 'Mason',
          'ja': '共有者'
        },
        'roleImage': 'https://werewolf.world/image/0.1/mason.jpg'
      },
      'status': 'unnatural death',
      'result': 'win',
      'userName': 'Yamada',
      'userAvatar': 'https://werewolf.world/image/0.1/Simon.jpg'
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
      'role': {
        '@id': 'https://werewolf.world/resource/0.1/mason',
        'roleName': {
          'en': 'Mason',
          'ja': '共有者'
        },
        'roleImage': 'https://werewolf.world/image/0.1/mason.jpg'
      },
      'status': 'unnatural death',
      'result': 'win',
      'userName': 'Sasaki',
      'userAvatar': 'https://werewolf.world/image/0.1/Simson.jpg'
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
      'role': {
        '@id': 'https://werewolf.world/resource/0.1/villager',
        'roleName': {
          'en': 'Villager',
          'ja': '村人'
        },
        'roleImage': 'https://werewolf.world/image/0.1/villager.jpg'
      },
      'status': 'death by attack',
      'result': 'win',
      'userName': '山口',
      'userAvatar': 'https://werewolf.world/image/0.1/Otto.jpg'
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
      'role': {
        '@id': 'https://werewolf.world/resource/0.1/villager',
        'roleName': {
          'en': 'Villager',
          'ja': '村人'
        },
        'roleImage': 'https://werewolf.world/image/0.1/villager.jpg'
      },
      'status': 'alive',
      'result': 'win',
      'userName': '松本',
      'userAvatar': 'https://werewolf.world/image/0.1/Joachim.jpg'
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
      'role': {
        '@id': 'https://werewolf.world/resource/0.1/villager',
        'roleName': {
          'en': 'Villager',
          'ja': '村人'
        },
        'roleImage': 'https://werewolf.world/image/0.1/villager.jpg'
      },
      'status': 'alive',
      'result': 'win',
      'userName': '井上',
      'userAvatar': 'https://werewolf.world/image/0.1/Catalina.jpg'
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
      'agent': []
    },
    {
      '@id': 'https://wereworld.world/resource/0.1/villager',
      'roleIsMine': false,
      'name': {
        'en': 'Villager',
        'ja': '村人'
      },
      'image': 'https://werewolf.world/image/0.1/villager.jpg',
      'numberOfAgents': 6,
      'agent': [
        {
          '@id': 'https://werewolf.world/resource/0.1/Gert',
          'agentId': 0,
          'agentName': {
            'en': 'Gert',
            'ja': 'ゲルト'
          },
          'agentImage': 'https://werewolf.world/image/0.1/Gert.jpg'
        },
        {
          '@id': 'https://werewolf.world/resource/0.1/Lisa',
          'agentId': 8,
          'agentName': {
            'en': 'Lisa',
            'ja': 'リーザ'
          },
          'agentImage': 'https://werewolf.world/image/0.1/Lisa.jpg'
        },
        {
          '@id': 'https://werewolf.world/resource/0.1/Alvin',
          'agentId': 9,
          'agentName': {
            'en': 'Alvin',
            'ja': 'アルビン'
          },
          'agentImage': 'https://werewolf.world/image/0.1/Alvin.jpg'
        },
        {
          '@id': 'https://werewolf.world/resource/0.1/Joachim',
          'agentId': 12,
          'agentName': {
            'en': 'Joachim',
            'ja': 'ヨアヒム'
          },
          'agentImage': 'https://werewolf.world/image/0.1/Joachim.jpg'
        },
        {
          '@id': 'https://werewolf.world/resource/0.1/Pamela',
          'agentId': 13,
          'agentName': {
            'en': 'Pamela',
            'ja': 'パメラ'
          },
          'agentImage': 'https://werewolf.world/image/0.1/Pamela.jpg'
        },
        {
          '@id': 'https://werewolf.world/resource/0.1/Jacob',
          'agentId': 14,
          'agentName': {
            'en': 'Jacob',
            'ja': 'ヤコブ'
          },
          'agentImage': 'https://werewolf.world/image/0.1/Jacob.jpg'
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
      'numberOfAgents': 1,
      'agent': [
        {
          '@id': 'https://werewolf.world/resource/0.1/Walter',
          'agentId': 1,
          'agentName': {
            'en': 'Walter',
            'ja': 'ヴァルター'
          },
          'agentImage': 'https://werewolf.world/image/0.1/Walter.jpg'
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
      'agent': [
        {
          '@id': 'https://werewolf.world/resource/0.1/Thomas',
          'agentId': 4,
          'agentName': {
            'en': 'Thomas',
            'ja': 'トーマス'
          },
          'agentImage': 'https://werewolf.world/image/0.1/Thomas.jpg'
        }
      ]
    },
    {
      '@id': 'https://wereworld.world/resource/0.1/hunter',
      'roleIsMine': false,
      'name': {
        'en': 'Hunter',
        'ja': '狩人'
      },
      'image': 'https://werewolf.world/image/0.1/hunter.jpg',
      'numberOfAgents': 1,
      'agent': [
        {
          '@id': 'https://werewolf.world/resource/0.1/Simson',
          'agentId': 3,
          'agentName': {
            'en': 'Simson',
            'ja': 'ジムゾン'
          },
          'agentImage': 'https://werewolf.world/image/0.1/Simson.jpg'
        }
      ]
    },
    {
      '@id': 'https://wereworld.world/resource/0.1/mason',
      'roleIsMine': false,
      'name': {
        'en': 'Mason',
        'ja': '共有者'
      },
      'image': 'https://werewolf.world/image/0.1/mason.jpg',
      'numberOfAgents': 2,
      'agent': [
        {
          '@id': 'https://werewolf.world/resource/0.1/Catalina',
          'agentId': 10,
          'agentName': {
            'en': 'Catalina',
            'ja': 'カタリナ'
          },
          'agentImage': 'https://werewolf.world/image/0.1/Catalina.jpg'
        },
        {
          '@id': 'https://werewolf.world/resource/0.1/Otto',
          'agentId': 11,
          'agentName': {
            'en': 'Otto',
            'ja': 'オットー'
          },
          'agentImage': 'https://werewolf.world/image/0.1/Otto.jpg'
        }
      ]
    },
    {
      '@id': 'https://wereworld.world/resource/0.1/madman',
      'roleIsMine': false,
      'name': {
        'en': 'Madman',
        'ja': '狂人'
      },
      'image': 'https://werewolf.world/image/0.1/madman.jpg',
      'numberOfAgents': 1,
      'agent': [
        {
          '@id': 'https://werewolf.world/resource/0.1/Dieter',
          'agentId': 6,
          'agentName': {
            'en': 'Dieter',
            'ja': 'ディーター'
          },
          'agentImage': 'https://werewolf.world/image/0.1/Dieter.jpg'
        }
      ]
    },
    {
      '@id': 'https://wereworld.world/resource/0.1/werewolf',
      'roleIsMine': false,
      'name': {
        'en': 'Werewolf',
        'ja': '人狼'
      },
      'image': 'https://werewolf.world/image/0.1/werewolf.jpg',
      'numberOfAgents': 2,
      'agent': [
        {
          '@id': 'https://werewolf.world/resource/0.1/Moritz',
          'agentId': 2,
          'agentName': {
            'en': 'Moritz',
            'ja': 'モーリッツ'
          },
          'agentImage': 'https://werewolf.world/image/0.1/Moritz.jpg'
        },
        {
          '@id': 'https://werewolf.world/resource/0.1/Peter',
          'agentId': 7,
          'agentName': {
            'en': 'Peter',
            'ja': 'ペーター'
          },
          'agentImage': 'https://werewolf.world/image/0.1/Peter.jpg'
        }
      ]
    },
    {
      '@id': 'https://wereworld.world/resource/0.1/werehumster',
      'roleIsMine': false,
      'name': {
        'en': 'Werehumster',
        'ja': 'ハムスター人間'
      },
      'image': 'https://werewolf.world/image/0.1/werehumster.jpg',
      'numberOfAgents': 1,
      'agent': [
        {
          '@id': 'https://werewolf.world/resource/0.1/Nicholas',
          'agentId': 5,
          'agentName': {
            'en': 'Nicholas',
            'ja': 'ニコラス'
          },
          'agentImage': 'https://werewolf.world/image/0.1/Nicholas.jpg'
        }
      ]
    }
  ]
}

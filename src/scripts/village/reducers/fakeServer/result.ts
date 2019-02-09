/* global village */
/* eslint sort-keys: 0 */
const json: village.Payload$systemMessage = {
  '@context': [
    village.BaseContext.Base,
    village.BaseContext.VotingResult
  ],
  '@id': 'https://licos.online/state/0.2/village#3/systemMessage',

  'village': {
    '@context': village.Context.Village,
    '@id': 'https://licos.online/state/0.2/village',
    'characterLimit': 10,
    'id': 3,
    'lang': village.Language.ja,
    'name': '横国の森の奥にある時代に取り残された小さな村',
    'totalNumberOfAgents': 15
  },
  'token': 'eFVr3O93oLhmnE8OqTMl5VSVGIV',
  'phase': village.Phase.result,
  'date': -1,
  'phaseTimeLimit': -1,
  'phaseStartTime': '2006-10-07T12:06:56.568+09:00',
  'serverTimestamp': '2006-10-07T12:06:56.568+09:00',
  'clientTimestamp': '2006-10-07T12:06:56.568+09:00',
  'directionality': village.Directionality.serverToClient,
  'intensionalDisclosureRange': village.Channel.private,
  'extensionalDisclosureRange': [],

  'votingResultsSummary': [],
  'votingResultsDetails': [],

  'agent': [
    {
      '@context': village.Context.Agent,
      '@id': 'https://licos.online/state/0.2/village#3/agent#0',
      'isMine': false,
      'name': {
        'en': 'Gert',
        'ja': 'ゲルト'
      },
      'image': 'https://werewolf.world/image/0.2/Gert.jpg',
      'id': 0,
      'role': {
        '@context': village.Context.Role,
        '@id': 'https://licos.online/state/0.2/village#3/agent#0/role',
        'name': {
          'en': 'Villager',
          'ja': '村人'
        },
        'image': 'https://werewolf.world/image/0.2/villager.jpg'
      },
      'status': village.AgentStatus.alive,
      'result': village.Result.win,
      'avatar': {
        '@context': village.Context.Avatar,
        '@id': 'https://licos.online/state/0.2/village#3/agent#0/avatar',
        'token': 'eFVr3O93oLhmnE8OqTMl5VSVGIV',
        'name': 'Sato',
        'image': 'https://werewolf.world/image/0.2/Nicholas.jpg'
      }
    },
    {
      '@context': village.Context.Agent,
      '@id': 'https://licos.online/state/0.2/village#3/agent#1',
      'isMine': true,
      'name': {
        'en': 'Walter',
        'ja': 'ヴァルター'
      },
      'image': 'https://werewolf.world/image/0.2/Walter.jpg',
      'id': 1,
      'role': {
        '@context': village.Context.Role,
        '@id': 'https://licos.online/state/0.2/village#3/agent#1/role',
        'name': {
          'en': 'Seer',
          'ja': '占い師'
        },
        'image': 'https://werewolf.world/image/0.2/seer.jpg'
      },
      'status': village.AgentStatus.alive,
      'result': village.Result.win,
      'avatar': {
        '@context': village.Context.Avatar,
        '@id': 'https://licos.online/state/0.2/village#3/agent#1/avatar',
        'token': 'eFVr3O93oLhmnE8OqTMl5VSVGI1',
        'name': 'Suzuki',
        'image': 'https://werewolf.world/image/0.2/Gert.jpg'
      }
    },
    {
      '@context': village.Context.Agent,
      '@id': 'https://licos.online/state/0.2/village#3/agent#2',
      'isMine': false,
      'name': {
        'en': 'Moritz',
        'ja': 'モーリッツ'
      },
      'image': 'https://werewolf.world/image/0.2/Moritz.jpg',
      'id': 2,
      'role': {
        '@context': village.Context.Role,
        '@id': 'https://licos.online/state/0.2/village#3/agent#2/role',
        'name': {
          'en': 'Werewolf',
          'ja': '人狼'
        },
        'image': 'https://werewolf.world/image/0.2/werewolf.jpg'
      },
      'status': village.AgentStatus.alive,
      'result': village.Result.lose,
      'avatar': {
        '@context': village.Context.Avatar,
        '@id': 'https://licos.online/state/0.2/village#3/agent#2/avatar',
        'token': 'eFVr3O93oLhmnE8OqTMl5VSVGI2',
        'name': 'Takahashi',
        'image': 'https://werewolf.world/image/0.2/Alvin.jpg'
      }
    },
    {
      '@context': village.Context.Agent,
      '@id': 'https://licos.online/state/0.2/village#3/agent#3',
      'isMine': false,
      'name': {
        'en': 'Simson',
        'ja': 'ジムゾン'
      },
      'image': 'https://werewolf.world/image/0.2/Simson.jpg',
      'id': 3,
      'role': {
        '@context': village.Context.Role,
        '@id': 'https://licos.online/state/0.2/village#3/agent#3/role',
        'name': {
          'en': 'Hunter',
          'ja': '狩人'
        },
        'image': 'https://werewolf.world/image/0.2/hunter.jpg'
      },
      'status': village.AgentStatus.alive,
      'result': village.Result.win,
      'avatar': {
        '@context': village.Context.Avatar,
        '@id': 'https://licos.online/state/0.2/village#3/agent#3/avatar',
        'token': 'eFVr3O93oLhmnE8OqTMl5VSVGI3',
        'name': 'Tanaka',
        'image': 'https://werewolf.world/image/0.2/Friedel.jpg'
      }
    },
    {
      '@context': village.Context.Agent,
      '@id': 'https://licos.online/state/0.2/village#3/agent#4',
      'isMine': false,
      'name': {
        'en': 'Thomas',
        'ja': 'トーマス'
      },
      'image': 'https://werewolf.world/image/0.2/Thomas.jpg',
      'id': 4,
      'role': {
        '@context': village.Context.Role,
        '@id': 'https://licos.online/state/0.2/village#3/agent#4/role',
        'name': {
          'en': 'Medium',
          'ja': '霊媒師'
        },
        'image': 'https://werewolf.world/image/0.2/medium.jpg'
      },
      'status': village.AgentStatus.alive,
      'result': village.Result.win,
      'avatar': {
        '@context': village.Context.Avatar,
        '@id': 'https://licos.online/state/0.2/village#3/agent#4/avatar',
        'token': 'eFVr3O93oLhmnE8OqTMl5VSVGI4',
        'name': 'Ito',
        'image': 'https://werewolf.world/image/0.2/Dieter.jpg'
      }
    },
    {
      '@context': village.Context.Agent,
      '@id': 'https://licos.online/state/0.2/village#3/agent#5',
      'isMine': false,
      'name': {
        'en': 'Nicholas',
        'ja': 'ニコラス'
      },
      'image': 'https://werewolf.world/image/0.2/Nicholas.jpg',
      'id': 5,
      'role': {
        '@context': village.Context.Role,
        '@id': 'https://licos.online/state/0.2/village#3/agent#5/role',
        'name': {
          'en': 'Werehamster',
          'ja': 'ハムスター人間'
        },
        'image': 'https://werewolf.world/image/0.2/werehamster.jpg'
      },
      'status': village.AgentStatus.deathByFear,
      'result': village.Result.lose,
      'avatar': {
        '@context': village.Context.Avatar,
        '@id': 'https://licos.online/state/0.2/village#3/agent#5/avatar',
        'token': 'eFVr3O93oLhmnE8OqTMl5VSVGI5',
        'name': 'Watanabe',
        'image': 'https://werewolf.world/image/0.2/Erna.jpg'
      }
    },
    {
      '@context': village.Context.Agent,
      '@id': 'https://licos.online/state/0.2/village#3/agent#6',
      'isMine': false,
      'name': {
        'en': 'Dieter',
        'ja': 'ディーター'
      },
      'image': 'https://werewolf.world/image/0.2/Dieter.jpg',
      'id': 6,
      'role': {
        '@context': village.Context.Role,
        '@id': 'https://licos.online/state/0.2/village#3/agent#6/role',
        'name': {
          'en': 'Madman',
          'ja': '狂人'
        },
        'image': 'https://werewolf.world/image/0.2/madman.jpg'
      },
      'status': village.AgentStatus.deathByExecution,
      'result': village.Result.lose,
      'avatar': {
        '@context': village.Context.Avatar,
        '@id': 'https://licos.online/state/0.2/village#3/agent#6/avatar',
        'token': 'eFVr3O93oLhmnE8OqTMl5VSVGI6',
        'name': 'Yamamoto',
        'image': 'https://werewolf.world/image/0.2/Jacob.jpg'
      }
    },
    {
      '@context': village.Context.Agent,
      '@id': 'https://licos.online/state/0.2/village#3/agent#7',
      'isMine': false,
      'name': {
        'en': 'Peter',
        'ja': 'ペーター'
      },
      'image': 'https://werewolf.world/image/0.2/Peter.jpg',
      'id': 7,
      'role': {
        '@context': village.Context.Role,
        '@id': 'https://licos.online/state/0.2/village#3/agent#7/role',
        'name': {
          'en': 'Werewolf',
          'ja': '人狼'
        },
        'image': 'https://werewolf.world/image/0.2/werewolf.jpg'
      },
      'status': village.AgentStatus.unnaturalDeath,
      'result': village.Result.lose,
      'avatar': {
        '@context': village.Context.Avatar,
        '@id': 'https://licos.online/state/0.2/village#3/agent#7/avatar',
        'token': 'eFVr3O93oLhmnE8OqTMl5VSVGI7',
        'name': 'Nakamura',
        'image': 'https://werewolf.world/image/0.2/Nicholas.jpg'
      }
    },
    {
      '@context': village.Context.Agent,
      '@id': 'https://licos.online/state/0.2/village#3/agent#8',
      'isMine': false,
      'name': {
        'en': 'Lisa',
        'ja': 'リーザ'
      },
      'image': 'https://werewolf.world/image/0.2/Lisa.jpg',
      'id': 8,
      'role': {
        '@context': village.Context.Role,
        '@id': 'https://licos.online/state/0.2/village#3/agent#8/role',
        'name': {
          'en': 'Villager',
          'ja': '村人'
        },
        'image': 'https://werewolf.world/image/0.2/villager.jpg'
      },
      'status': village.AgentStatus.unnaturalDeath,
      'result': village.Result.win,
      'avatar': {
        '@context': village.Context.Avatar,
        '@id': 'https://licos.online/state/0.2/village#3/agent#8/avatar',
        'token': 'eFVr3O93oLhmnE8OqTMl5VSVGI8',
        'name': 'Kobayashi',
        'image': 'https://werewolf.world/image/0.2/Peter.jpg'
      }
    },
    {
      '@context': village.Context.Agent,
      '@id': 'https://licos.online/state/0.2/village#3/agent#9',
      'isMine': false,
      'name': {
        'en': 'Alvin',
        'ja': 'アルビン'
      },
      'image': 'https://werewolf.world/image/0.2/Alvin.jpg',
      'id': 9,
      'role': {
        '@context': village.Context.Role,
        '@id': 'https://licos.online/state/0.2/village#3/agent#9/role',
        'name': {
          'en': 'Villager',
          'ja': '村人'
        },
        'image': 'https://werewolf.world/image/0.2/villager.jpg'
      },
      'status': village.AgentStatus.unnaturalDeath,
      'result': village.Result.win,
      'avatar': {
        '@context': village.Context.Avatar,
        '@id': 'https://licos.online/state/0.2/village#3/agent#9/avatar',
        'token': 'eFVr3O93oLhmnE8OqTMl5VSVGI9',
        'name': 'Yoshida',
        'image': 'https://werewolf.world/image/0.2/Peter.jpg'
      }
    },
    {
      '@context': village.Context.Agent,
      '@id': 'https://licos.online/state/0.2/village#3/agent#10',
      'isMine': false,
      'name': {
        'en': 'Catalina',
        'ja': 'カタリナ'
      },
      'image': 'https://werewolf.world/image/0.2/Catalina.jpg',
      'id': 10,
      'role': {
        '@context': village.Context.Role,
        '@id': 'https://licos.online/state/0.2/village#3/agent#10/role',
        'name': {
          'en': 'Mason',
          'ja': '共有者'
        },
        'image': 'https://werewolf.world/image/0.2/mason.jpg'
      },
      'status': village.AgentStatus.unnaturalDeath,
      'result': village.Result.win,
      'avatar': {
        '@context': village.Context.Avatar,
        '@id': 'https://licos.online/state/0.2/village#3/agent#10/avatar',
        'token': 'eFVr3O93oLhmnE8OqTMl5VSVG10',
        'name': 'Yamada',
        'image': 'https://werewolf.world/image/0.2/Simon.jpg'
      }
    },
    {
      '@context': village.Context.Agent,
      '@id': 'https://licos.online/state/0.2/village#3/agent#11',
      'isMine': false,
      'name': {
        'en': 'Otto',
        'ja': 'オットー'
      },
      'image': 'https://werewolf.world/image/0.2/Otto.jpg',
      'id': 11,
      'role': {
        '@context': village.Context.Role,
        '@id': 'https://licos.online/state/0.2/village#3/agent#11/role',
        'name': {
          'en': 'Mason',
          'ja': '共有者'
        },
        'image': 'https://werewolf.world/image/0.2/mason.jpg'
      },
      'status': village.AgentStatus.unnaturalDeath,
      'result': village.Result.win,
      'avatar': {
        '@context': village.Context.Avatar,
        '@id': 'https://licos.online/state/0.2/village#3/agent#11/avatar',
        'token': 'eFVr3O93oLhmnE8OqTMl5VSVG11',
        'name': 'Sasaki',
        'image': 'https://werewolf.world/image/0.2/Simson.jpg'
      }
    },
    {
      '@context': village.Context.Agent,
      '@id': 'https://licos.online/state/0.2/village#3/agent#12',
      'isMine': false,
      'name': {
        'en': 'Joachim',
        'ja': 'ヨアヒム'
      },
      'image': 'https://werewolf.world/image/0.2/Joachim.jpg',
      'id': 12,
      'role': {
        '@context': village.Context.Role,
        '@id': 'https://licos.online/state/0.2/village#3/agent#12/role',
        'name': {
          'en': 'Villager',
          'ja': '村人'
        },
        'image': 'https://werewolf.world/image/0.2/villager.jpg'
      },
      'status': village.AgentStatus.deathByAttack,
      'result': village.Result.win,
      'avatar': {
        '@context': village.Context.Avatar,
        '@id': 'https://licos.online/state/0.2/village#3/agent#12/avatar',
        'token': 'eFVr3O93oLhmnE8OqTMl5VSVG12',
        'name': '山口',
        'image': 'https://werewolf.world/image/0.2/Otto.jpg'
      }
    },
    {
      '@context': village.Context.Agent,
      '@id': 'https://licos.online/state/0.2/village#3/agent#13',
      'isMine': false,
      'name': {
        'en': 'Pamela',
        'ja': 'パメラ'
      },
      'image': 'https://werewolf.world/image/0.2/Pamela.jpg',
      'id': 13,
      'role': {
        '@context': village.Context.Role,
        '@id': 'https://licos.online/state/0.2/village#3/agent#13/role',
        'name': {
          'en': 'Villager',
          'ja': '村人'
        },
        'image': 'https://werewolf.world/image/0.2/villager.jpg'
      },
      'status': village.AgentStatus.alive,
      'result': village.Result.win,
      'avatar': {
        '@context': village.Context.Avatar,
        '@id': 'https://licos.online/state/0.2/village#3/agent#13/avatar',
        'token': 'eFVr3O93oLhmnE8OqTMl5VSVG13',
        'name': '松本',
        'image': 'https://werewolf.world/image/0.2/Joachim.jpg'
      }
    },
    {
      '@context': village.Context.Agent,
      '@id': 'https://licos.online/state/0.2/village#3/agent#14',
      'isMine': false,
      'name': {
        'en': 'Jacob',
        'ja': 'ヤコブ'
      },
      'image': 'https://werewolf.world/image/0.2/Jacob.jpg',
      'id': 14,
      'role': {
        '@context': village.Context.Role,
        '@id': 'https://licos.online/state/0.2/village#3/agent#14/role',
        'name': {
          'en': 'Villager',
          'ja': '村人'
        },
        'image': 'https://werewolf.world/image/0.2/villager.jpg'
      },
      'status': village.AgentStatus.alive,
      'result': village.Result.win,
      'avatar': {
        '@context': village.Context.Avatar,
        '@id': 'https://licos.online/state/0.2/village#3/agent#14/avatar',
        'token': 'eFVr3O93oLhmnE8OqTMl5VSVG14',
        'name': '井上',
        'image': 'https://werewolf.world/image/0.2/Catalina.jpg'
      }
    }
  ],

  'role': [
    {
      '@context': village.Context.Role,
      '@id': 'https://licos.online/state/0.2/village#3/role#master',
      'isMine': false,
      'name': {
        'en': 'Master',
        'ja': 'マスター'
      },
      'image': 'https://werewolf.world/image/0.2/master.jpg',
      'numberOfAgents': 1,
      'agent': []
    },
    {
      '@context': village.Context.Role,
      '@id': 'https://licos.online/state/0.2/village#3/role#villager',
      'isMine': false,
      'name': {
        'en': 'Villager',
        'ja': '村人'
      },
      'image': 'https://werewolf.world/image/0.2/villager.jpg',
      'numberOfAgents': 6,
      'agent': [
        {
          '@context': village.Context.Agent,
          '@id': 'https://licos.online/state/0.2/village#3/role#villager/agent#0',
          'id': 0,
          'name': {
            'en': 'Gert',
            'ja': 'ゲルト'
          },
          'image': 'https://werewolf.world/image/0.2/Gert.jpg'
        },
        {
          '@context': village.Context.Agent,
          '@id': 'https://licos.online/state/0.2/village#3/role#villager/agent#8',
          'id': 8,
          'name': {
            'en': 'Lisa',
            'ja': 'リーザ'
          },
          'image': 'https://werewolf.world/image/0.2/Lisa.jpg'
        },
        {
          '@context': village.Context.Agent,
          '@id': 'https://licos.online/state/0.2/village#3/role#villager/agent#9',
          'id': 9,
          'name': {
            'en': 'Alvin',
            'ja': 'アルビン'
          },
          'image': 'https://werewolf.world/image/0.2/Alvin.jpg'
        },
        {
          '@context': village.Context.Agent,
          '@id': 'https://licos.online/state/0.2/village#3/role#villager/agent#12',
          'id': 12,
          'name': {
            'en': 'Joachim',
            'ja': 'ヨアヒム'
          },
          'image': 'https://werewolf.world/image/0.2/Joachim.jpg'
        },
        {
          '@context': village.Context.Agent,
          '@id': 'https://licos.online/state/0.2/village#3/role#villager/agent#13',
          'id': 13,
          'name': {
            'en': 'Pamela',
            'ja': 'パメラ'
          },
          'image': 'https://werewolf.world/image/0.2/Pamela.jpg'
        },
        {
          '@context': village.Context.Agent,
          '@id': 'https://licos.online/state/0.2/village#3/role#villager/agent#14',
          'id': 14,
          'name': {
            'en': 'Jacob',
            'ja': 'ヤコブ'
          },
          'image': 'https://werewolf.world/image/0.2/Jacob.jpg'
        }
      ]
    },
    {
      '@context': village.Context.Role,
      '@id': 'https://licos.online/state/0.2/village#3/role#seer',
      'isMine': true,
      'name': {
        'en': 'Seer',
        'ja': '占い師'
      },
      'image': 'https://werewolf.world/image/0.2/seer.jpg',
      'numberOfAgents': 1,
      'agent': [
        {
          '@context': village.Context.Agent,
          '@id': 'https://licos.online/state/0.2/village#3/role#seer/agent#1',
          'id': 1,
          'name': {
            'en': 'Walter',
            'ja': 'ヴァルター'
          },
          'image': 'https://werewolf.world/image/0.2/Walter.jpg'
        }
      ]
    },
    {
      '@context': village.Context.Role,
      '@id': 'https://licos.online/state/0.2/village#3/role#medium',
      'isMine': false,
      'name': {
        'en': 'Medium',
        'ja': '霊媒師'
      },
      'image': 'https://werewolf.world/image/0.2/medium.jpg',
      'numberOfAgents': 1,
      'agent': [
        {
          '@context': village.Context.Agent,
          '@id': 'https://licos.online/state/0.2/village#3/role#medium/agent#4',
          'id': 4,
          'name': {
            'en': 'Thomas',
            'ja': 'トーマス'
          },
          'image': 'https://werewolf.world/image/0.2/Thomas.jpg'
        }
      ]
    },
    {
      '@context': village.Context.Role,
      '@id': 'https://licos.online/state/0.2/village#3/role#hunter',
      'isMine': false,
      'name': {
        'en': 'Hunter',
        'ja': '狩人'
      },
      'image': 'https://werewolf.world/image/0.2/hunter.jpg',
      'numberOfAgents': 1,
      'agent': [
        {
          '@context': village.Context.Agent,
          '@id': 'https://licos.online/state/0.2/village#3/role#hunter/agent#3',
          'id': 3,
          'name': {
            'en': 'Simson',
            'ja': 'ジムゾン'
          },
          'image': 'https://werewolf.world/image/0.2/Simson.jpg'
        }
      ]
    },
    {
      '@context': village.Context.Role,
      '@id': 'https://licos.online/state/0.2/village#3/role#mason',
      'isMine': false,
      'name': {
        'en': 'Mason',
        'ja': '共有者'
      },
      'image': 'https://werewolf.world/image/0.2/mason.jpg',
      'numberOfAgents': 2,
      'agent': [
        {
          '@context': village.Context.Agent,
          '@id': 'https://licos.online/state/0.2/village#3/role#mason/agent#10',
          'id': 10,
          'name': {
            'en': 'Catalina',
            'ja': 'カタリナ'
          },
          'image': 'https://werewolf.world/image/0.2/Catalina.jpg'
        },
        {
          '@context': village.Context.Agent,
          '@id': 'https://licos.online/state/0.2/village#3/role#mason/agent#11',
          'id': 11,
          'name': {
            'en': 'Otto',
            'ja': 'オットー'
          },
          'image': 'https://werewolf.world/image/0.2/Otto.jpg'
        }
      ]
    },
    {
      '@context': village.Context.Role,
      '@id': 'https://licos.online/state/0.2/village#3/role#madman',
      'isMine': false,
      'name': {
        'en': 'Madman',
        'ja': '狂人'
      },
      'image': 'https://werewolf.world/image/0.2/madman.jpg',
      'numberOfAgents': 1,
      'agent': [
        {
          '@context': village.Context.Agent,
          '@id': 'https://licos.online/state/0.2/village#3/role#madman/agent#6',
          'id': 6,
          'name': {
            'en': 'Dieter',
            'ja': 'ディーター'
          },
          'image': 'https://werewolf.world/image/0.2/Dieter.jpg'
        }
      ]
    },
    {
      '@context': village.Context.Role,
      '@id': 'https://licos.online/state/0.2/village#3/role#werewolf',
      'isMine': false,
      'name': {
        'en': 'Werewolf',
        'ja': '人狼'
      },
      'image': 'https://werewolf.world/image/0.2/werewolf.jpg',
      'numberOfAgents': 2,
      'agent': [
        {
          '@context': village.Context.Agent,
          '@id': 'https://licos.online/state/0.2/village#3/role#werewolf/agent#2',
          'id': 2,
          'name': {
            'en': 'Moritz',
            'ja': 'モーリッツ'
          },
          'image': 'https://werewolf.world/image/0.2/Moritz.jpg'
        },
        {
          '@context': village.Context.Agent,
          '@id': 'https://licos.online/state/0.2/village#3/role#werewolf/agent#7',
          'id': 7,
          'name': {
            'en': 'Peter',
            'ja': 'ペーター'
          },
          'image': 'https://werewolf.world/image/0.2/Peter.jpg'
        }
      ]
    },
    {
      '@context': village.Context.Role,
      '@id': 'https://licos.online/state/0.2/village#3/role#werehamster',
      'isMine': false,
      'name': {
        'en': 'Werehamster',
        'ja': 'ハムスター人間'
      },
      'image': 'https://werewolf.world/image/0.2/werehamster.jpg',
      'numberOfAgents': 1,
      'agent': [
        {
          '@context': village.Context.Agent,
          '@id': 'https://licos.online/state/0.2/village#3/role#werehamster/agent#5',
          'id': 5,
          'name': {
            'en': 'Nicholas',
            'ja': 'ニコラス'
          },
          'image': 'https://werewolf.world/image/0.2/Nicholas.jpg'
        }
      ]
    }
  ]
}

export default json

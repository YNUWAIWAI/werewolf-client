/* global village */
const json: village.Payload$systemMessage = {
  '@context': [
    village.BaseContext.Base,
    village.BaseContext.VotingResult
  ],
  '@id': 'https://licos.online/state/0.2/village#3/systemMessage',
  'agent': [
    {
      '@context': village.Context.Agent,
      '@id': 'https://licos.online/state/0.2/village#3/agent#0',
      'avatar': {
        '@context': village.Context.Avatar,
        '@id': 'https://licos.online/state/0.2/village#3/agent#0/avatar',
        'image': 'https://werewolf.world/image/0.2/Nicholas.jpg',
        'name': 'Sato',
        'token': 'eFVr3O93oLhmnE8OqTMl5VSVGIV'
      },
      'id': 0,
      'image': 'https://werewolf.world/image/0.2/Gert.jpg',
      'isMine': false,
      'name': {
        'en': 'Gert',
        'ja': 'ゲルト'
      },
      'result': village.Result.win,
      'role': {
        '@context': village.Context.Role,
        '@id': 'https://licos.online/state/0.2/village#3/agent#0/role',
        'image': 'https://werewolf.world/image/0.2/villager.jpg',
        'name': {
          'en': 'Villager',
          'ja': '村人'
        }
      },
      'status': village.AgentStatus.alive
    },
    {
      '@context': village.Context.Agent,
      '@id': 'https://licos.online/state/0.2/village#3/agent#1',
      'avatar': {
        '@context': village.Context.Avatar,
        '@id': 'https://licos.online/state/0.2/village#3/agent#1/avatar',
        'image': 'https://werewolf.world/image/0.2/Gert.jpg',
        'name': 'Suzuki',
        'token': 'eFVr3O93oLhmnE8OqTMl5VSVGI1'
      },
      'id': 1,
      'image': 'https://werewolf.world/image/0.2/Walter.jpg',
      'isMine': true,
      'name': {
        'en': 'Walter',
        'ja': 'ヴァルター'
      },
      'result': village.Result.win,
      'role': {
        '@context': village.Context.Role,
        '@id': 'https://licos.online/state/0.2/village#3/agent#1/role',
        'image': 'https://werewolf.world/image/0.2/seer.jpg',
        'name': {
          'en': 'Seer',
          'ja': '占い師'
        }
      },
      'status': village.AgentStatus.alive
    },
    {
      '@context': village.Context.Agent,
      '@id': 'https://licos.online/state/0.2/village#3/agent#2',
      'avatar': {
        '@context': village.Context.Avatar,
        '@id': 'https://licos.online/state/0.2/village#3/agent#2/avatar',
        'image': 'https://werewolf.world/image/0.2/Alvin.jpg',
        'name': 'Takahashi',
        'token': 'eFVr3O93oLhmnE8OqTMl5VSVGI2'
      },
      'id': 2,
      'image': 'https://werewolf.world/image/0.2/Moritz.jpg',
      'isMine': false,
      'name': {
        'en': 'Moritz',
        'ja': 'モーリッツ'
      },
      'result': village.Result.lose,
      'role': {
        '@context': village.Context.Role,
        '@id': 'https://licos.online/state/0.2/village#3/agent#2/role',
        'image': 'https://werewolf.world/image/0.2/werewolf.jpg',
        'name': {
          'en': 'Werewolf',
          'ja': '人狼'
        }
      },
      'status': village.AgentStatus.alive
    },
    {
      '@context': village.Context.Agent,
      '@id': 'https://licos.online/state/0.2/village#3/agent#3',
      'avatar': {
        '@context': village.Context.Avatar,
        '@id': 'https://licos.online/state/0.2/village#3/agent#3/avatar',
        'image': 'https://werewolf.world/image/0.2/Friedel.jpg',
        'name': 'Tanaka',
        'token': 'eFVr3O93oLhmnE8OqTMl5VSVGI3'
      },
      'id': 3,
      'image': 'https://werewolf.world/image/0.2/Simson.jpg',
      'isMine': false,
      'name': {
        'en': 'Simson',
        'ja': 'ジムゾン'
      },
      'result': village.Result.win,
      'role': {
        '@context': village.Context.Role,
        '@id': 'https://licos.online/state/0.2/village#3/agent#3/role',
        'image': 'https://werewolf.world/image/0.2/hunter.jpg',
        'name': {
          'en': 'Hunter',
          'ja': '狩人'
        }
      },
      'status': village.AgentStatus.alive
    },
    {
      '@context': village.Context.Agent,
      '@id': 'https://licos.online/state/0.2/village#3/agent#4',
      'avatar': {
        '@context': village.Context.Avatar,
        '@id': 'https://licos.online/state/0.2/village#3/agent#4/avatar',
        'image': 'https://werewolf.world/image/0.2/Dieter.jpg',
        'name': 'Ito',
        'token': 'eFVr3O93oLhmnE8OqTMl5VSVGI4'
      },
      'id': 4,
      'image': 'https://werewolf.world/image/0.2/Thomas.jpg',
      'isMine': false,
      'name': {
        'en': 'Thomas',
        'ja': 'トーマス'
      },
      'result': village.Result.win,
      'role': {
        '@context': village.Context.Role,
        '@id': 'https://licos.online/state/0.2/village#3/agent#4/role',
        'image': 'https://werewolf.world/image/0.2/medium.jpg',
        'name': {
          'en': 'Medium',
          'ja': '霊媒師'
        }
      },
      'status': village.AgentStatus.alive
    },
    {
      '@context': village.Context.Agent,
      '@id': 'https://licos.online/state/0.2/village#3/agent#5',
      'avatar': {
        '@context': village.Context.Avatar,
        '@id': 'https://licos.online/state/0.2/village#3/agent#5/avatar',
        'image': 'https://werewolf.world/image/0.2/Erna.jpg',
        'name': 'Watanabe',
        'token': 'eFVr3O93oLhmnE8OqTMl5VSVGI5'
      },
      'id': 5,
      'image': 'https://werewolf.world/image/0.2/Nicholas.jpg',
      'isMine': false,
      'name': {
        'en': 'Nicholas',
        'ja': 'ニコラス'
      },
      'result': village.Result.lose,
      'role': {
        '@context': village.Context.Role,
        '@id': 'https://licos.online/state/0.2/village#3/agent#5/role',
        'image': 'https://werewolf.world/image/0.2/werehamster.jpg',
        'name': {
          'en': 'Werehamster',
          'ja': 'ハムスター人間'
        }
      },
      'status': village.AgentStatus.deathByFear
    },
    {
      '@context': village.Context.Agent,
      '@id': 'https://licos.online/state/0.2/village#3/agent#6',
      'avatar': {
        '@context': village.Context.Avatar,
        '@id': 'https://licos.online/state/0.2/village#3/agent#6/avatar',
        'image': 'https://werewolf.world/image/0.2/Jacob.jpg',
        'name': 'Yamamoto',
        'token': 'eFVr3O93oLhmnE8OqTMl5VSVGI6'
      },
      'id': 6,
      'image': 'https://werewolf.world/image/0.2/Dieter.jpg',
      'isMine': false,
      'name': {
        'en': 'Dieter',
        'ja': 'ディーター'
      },
      'result': village.Result.lose,
      'role': {
        '@context': village.Context.Role,
        '@id': 'https://licos.online/state/0.2/village#3/agent#6/role',
        'image': 'https://werewolf.world/image/0.2/madman.jpg',
        'name': {
          'en': 'Madman',
          'ja': '狂人'
        }
      },
      'status': village.AgentStatus.deathByExecution
    },
    {
      '@context': village.Context.Agent,
      '@id': 'https://licos.online/state/0.2/village#3/agent#7',
      'avatar': {
        '@context': village.Context.Avatar,
        '@id': 'https://licos.online/state/0.2/village#3/agent#7/avatar',
        'image': 'https://werewolf.world/image/0.2/Nicholas.jpg',
        'name': 'Nakamura',
        'token': 'eFVr3O93oLhmnE8OqTMl5VSVGI7'
      },
      'id': 7,
      'image': 'https://werewolf.world/image/0.2/Peter.jpg',
      'isMine': false,
      'name': {
        'en': 'Peter',
        'ja': 'ペーター'
      },
      'result': village.Result.lose,
      'role': {
        '@context': village.Context.Role,
        '@id': 'https://licos.online/state/0.2/village#3/agent#7/role',
        'image': 'https://werewolf.world/image/0.2/werewolf.jpg',
        'name': {
          'en': 'Werewolf',
          'ja': '人狼'
        }
      },
      'status': village.AgentStatus.unnaturalDeath
    },
    {
      '@context': village.Context.Agent,
      '@id': 'https://licos.online/state/0.2/village#3/agent#8',
      'avatar': {
        '@context': village.Context.Avatar,
        '@id': 'https://licos.online/state/0.2/village#3/agent#8/avatar',
        'image': 'https://werewolf.world/image/0.2/Peter.jpg',
        'name': 'Kobayashi',
        'token': 'eFVr3O93oLhmnE8OqTMl5VSVGI8'
      },
      'id': 8,
      'image': 'https://werewolf.world/image/0.2/Lisa.jpg',
      'isMine': false,
      'name': {
        'en': 'Lisa',
        'ja': 'リーザ'
      },
      'result': village.Result.win,
      'role': {
        '@context': village.Context.Role,
        '@id': 'https://licos.online/state/0.2/village#3/agent#8/role',
        'image': 'https://werewolf.world/image/0.2/villager.jpg',
        'name': {
          'en': 'Villager',
          'ja': '村人'
        }
      },
      'status': village.AgentStatus.unnaturalDeath
    },
    {
      '@context': village.Context.Agent,
      '@id': 'https://licos.online/state/0.2/village#3/agent#9',
      'avatar': {
        '@context': village.Context.Avatar,
        '@id': 'https://licos.online/state/0.2/village#3/agent#9/avatar',
        'image': 'https://werewolf.world/image/0.2/Peter.jpg',
        'name': 'Yoshida',
        'token': 'eFVr3O93oLhmnE8OqTMl5VSVGI9'
      },
      'id': 9,
      'image': 'https://werewolf.world/image/0.2/Alvin.jpg',
      'isMine': false,
      'name': {
        'en': 'Alvin',
        'ja': 'アルビン'
      },
      'result': village.Result.win,
      'role': {
        '@context': village.Context.Role,
        '@id': 'https://licos.online/state/0.2/village#3/agent#9/role',
        'image': 'https://werewolf.world/image/0.2/villager.jpg',
        'name': {
          'en': 'Villager',
          'ja': '村人'
        }
      },
      'status': village.AgentStatus.unnaturalDeath
    },
    {
      '@context': village.Context.Agent,
      '@id': 'https://licos.online/state/0.2/village#3/agent#10',
      'avatar': {
        '@context': village.Context.Avatar,
        '@id': 'https://licos.online/state/0.2/village#3/agent#10/avatar',
        'image': 'https://werewolf.world/image/0.2/Simon.jpg',
        'name': 'Yamada',
        'token': 'eFVr3O93oLhmnE8OqTMl5VSVG10'
      },
      'id': 10,
      'image': 'https://werewolf.world/image/0.2/Catalina.jpg',
      'isMine': false,
      'name': {
        'en': 'Catalina',
        'ja': 'カタリナ'
      },
      'result': village.Result.win,
      'role': {
        '@context': village.Context.Role,
        '@id': 'https://licos.online/state/0.2/village#3/agent#10/role',
        'image': 'https://werewolf.world/image/0.2/mason.jpg',
        'name': {
          'en': 'Mason',
          'ja': '共有者'
        }
      },
      'status': village.AgentStatus.unnaturalDeath
    },
    {
      '@context': village.Context.Agent,
      '@id': 'https://licos.online/state/0.2/village#3/agent#11',
      'avatar': {
        '@context': village.Context.Avatar,
        '@id': 'https://licos.online/state/0.2/village#3/agent#11/avatar',
        'image': 'https://werewolf.world/image/0.2/Simson.jpg',
        'name': 'Sasaki',
        'token': 'eFVr3O93oLhmnE8OqTMl5VSVG11'
      },
      'id': 11,
      'image': 'https://werewolf.world/image/0.2/Otto.jpg',
      'isMine': false,
      'name': {
        'en': 'Otto',
        'ja': 'オットー'
      },
      'result': village.Result.win,
      'role': {
        '@context': village.Context.Role,
        '@id': 'https://licos.online/state/0.2/village#3/agent#11/role',
        'image': 'https://werewolf.world/image/0.2/mason.jpg',
        'name': {
          'en': 'Mason',
          'ja': '共有者'
        }
      },
      'status': village.AgentStatus.unnaturalDeath
    },
    {
      '@context': village.Context.Agent,
      '@id': 'https://licos.online/state/0.2/village#3/agent#12',
      'avatar': {
        '@context': village.Context.Avatar,
        '@id': 'https://licos.online/state/0.2/village#3/agent#12/avatar',
        'image': 'https://werewolf.world/image/0.2/Otto.jpg',
        'name': '山口',
        'token': 'eFVr3O93oLhmnE8OqTMl5VSVG12'
      },
      'id': 12,
      'image': 'https://werewolf.world/image/0.2/Joachim.jpg',
      'isMine': false,
      'name': {
        'en': 'Joachim',
        'ja': 'ヨアヒム'
      },
      'result': village.Result.win,
      'role': {
        '@context': village.Context.Role,
        '@id': 'https://licos.online/state/0.2/village#3/agent#12/role',
        'image': 'https://werewolf.world/image/0.2/villager.jpg',
        'name': {
          'en': 'Villager',
          'ja': '村人'
        }
      },
      'status': village.AgentStatus.deathByAttack
    },
    {
      '@context': village.Context.Agent,
      '@id': 'https://licos.online/state/0.2/village#3/agent#13',
      'avatar': {
        '@context': village.Context.Avatar,
        '@id': 'https://licos.online/state/0.2/village#3/agent#13/avatar',
        'image': 'https://werewolf.world/image/0.2/Joachim.jpg',
        'name': '松本',
        'token': 'eFVr3O93oLhmnE8OqTMl5VSVG13'
      },
      'id': 13,
      'image': 'https://werewolf.world/image/0.2/Pamela.jpg',
      'isMine': false,
      'name': {
        'en': 'Pamela',
        'ja': 'パメラ'
      },
      'result': village.Result.win,
      'role': {
        '@context': village.Context.Role,
        '@id': 'https://licos.online/state/0.2/village#3/agent#13/role',
        'image': 'https://werewolf.world/image/0.2/villager.jpg',
        'name': {
          'en': 'Villager',
          'ja': '村人'
        }
      },
      'status': village.AgentStatus.alive
    },
    {
      '@context': village.Context.Agent,
      '@id': 'https://licos.online/state/0.2/village#3/agent#14',
      'avatar': {
        '@context': village.Context.Avatar,
        '@id': 'https://licos.online/state/0.2/village#3/agent#14/avatar',
        'image': 'https://werewolf.world/image/0.2/Catalina.jpg',
        'name': '井上',
        'token': 'eFVr3O93oLhmnE8OqTMl5VSVG14'
      },
      'id': 14,
      'image': 'https://werewolf.world/image/0.2/Jacob.jpg',
      'isMine': false,
      'name': {
        'en': 'Jacob',
        'ja': 'ヤコブ'
      },
      'result': village.Result.win,
      'role': {
        '@context': village.Context.Role,
        '@id': 'https://licos.online/state/0.2/village#3/agent#14/role',
        'image': 'https://werewolf.world/image/0.2/villager.jpg',
        'name': {
          'en': 'Villager',
          'ja': '村人'
        }
      },
      'status': village.AgentStatus.alive
    }
  ],
  'clientTimestamp': '2006-10-07T12:06:56.568+09:00',
  'date': -1,
  'directionality': village.Directionality.serverToClient,
  'extensionalDisclosureRange': [],
  'intensionalDisclosureRange': village.Channel.private,
  'phase': village.Phase.result,
  'phaseStartTime': '2006-10-07T12:06:56.568+09:00',
  'phaseTimeLimit': -1,
  'role': [
    {
      '@context': village.Context.Role,
      '@id': 'https://licos.online/state/0.2/village#3/role#master',
      'agent': [],
      'image': 'https://werewolf.world/image/0.2/master.jpg',
      'isMine': false,
      'name': {
        'en': 'Master',
        'ja': 'マスター'
      },
      'numberOfAgents': 1
    },
    {
      '@context': village.Context.Role,
      '@id': 'https://licos.online/state/0.2/village#3/role#villager',
      'agent': [
        {
          '@context': village.Context.Agent,
          '@id': 'https://licos.online/state/0.2/village#3/role#villager/agent#0',
          'id': 0,
          'image': 'https://werewolf.world/image/0.2/Gert.jpg',
          'name': {
            'en': 'Gert',
            'ja': 'ゲルト'
          }
        },
        {
          '@context': village.Context.Agent,
          '@id': 'https://licos.online/state/0.2/village#3/role#villager/agent#8',
          'id': 8,
          'image': 'https://werewolf.world/image/0.2/Lisa.jpg',
          'name': {
            'en': 'Lisa',
            'ja': 'リーザ'
          }
        },
        {
          '@context': village.Context.Agent,
          '@id': 'https://licos.online/state/0.2/village#3/role#villager/agent#9',
          'id': 9,
          'image': 'https://werewolf.world/image/0.2/Alvin.jpg',
          'name': {
            'en': 'Alvin',
            'ja': 'アルビン'
          }
        },
        {
          '@context': village.Context.Agent,
          '@id': 'https://licos.online/state/0.2/village#3/role#villager/agent#12',
          'id': 12,
          'image': 'https://werewolf.world/image/0.2/Joachim.jpg',
          'name': {
            'en': 'Joachim',
            'ja': 'ヨアヒム'
          }
        },
        {
          '@context': village.Context.Agent,
          '@id': 'https://licos.online/state/0.2/village#3/role#villager/agent#13',
          'id': 13,
          'image': 'https://werewolf.world/image/0.2/Pamela.jpg',
          'name': {
            'en': 'Pamela',
            'ja': 'パメラ'
          }
        },
        {
          '@context': village.Context.Agent,
          '@id': 'https://licos.online/state/0.2/village#3/role#villager/agent#14',
          'id': 14,
          'image': 'https://werewolf.world/image/0.2/Jacob.jpg',
          'name': {
            'en': 'Jacob',
            'ja': 'ヤコブ'
          }
        }
      ],
      'image': 'https://werewolf.world/image/0.2/villager.jpg',
      'isMine': false,
      'name': {
        'en': 'Villager',
        'ja': '村人'
      },
      'numberOfAgents': 6
    },
    {
      '@context': village.Context.Role,
      '@id': 'https://licos.online/state/0.2/village#3/role#seer',
      'agent': [
        {
          '@context': village.Context.Agent,
          '@id': 'https://licos.online/state/0.2/village#3/role#seer/agent#1',
          'id': 1,
          'image': 'https://werewolf.world/image/0.2/Walter.jpg',
          'name': {
            'en': 'Walter',
            'ja': 'ヴァルター'
          }
        }
      ],
      'image': 'https://werewolf.world/image/0.2/seer.jpg',
      'isMine': true,
      'name': {
        'en': 'Seer',
        'ja': '占い師'
      },
      'numberOfAgents': 1
    },
    {
      '@context': village.Context.Role,
      '@id': 'https://licos.online/state/0.2/village#3/role#medium',
      'agent': [
        {
          '@context': village.Context.Agent,
          '@id': 'https://licos.online/state/0.2/village#3/role#medium/agent#4',
          'id': 4,
          'image': 'https://werewolf.world/image/0.2/Thomas.jpg',
          'name': {
            'en': 'Thomas',
            'ja': 'トーマス'
          }
        }
      ],
      'image': 'https://werewolf.world/image/0.2/medium.jpg',
      'isMine': false,
      'name': {
        'en': 'Medium',
        'ja': '霊媒師'
      },
      'numberOfAgents': 1
    },
    {
      '@context': village.Context.Role,
      '@id': 'https://licos.online/state/0.2/village#3/role#hunter',
      'agent': [
        {
          '@context': village.Context.Agent,
          '@id': 'https://licos.online/state/0.2/village#3/role#hunter/agent#3',
          'id': 3,
          'image': 'https://werewolf.world/image/0.2/Simson.jpg',
          'name': {
            'en': 'Simson',
            'ja': 'ジムゾン'
          }
        }
      ],
      'image': 'https://werewolf.world/image/0.2/hunter.jpg',
      'isMine': false,
      'name': {
        'en': 'Hunter',
        'ja': '狩人'
      },
      'numberOfAgents': 1
    },
    {
      '@context': village.Context.Role,
      '@id': 'https://licos.online/state/0.2/village#3/role#mason',
      'agent': [
        {
          '@context': village.Context.Agent,
          '@id': 'https://licos.online/state/0.2/village#3/role#mason/agent#10',
          'id': 10,
          'image': 'https://werewolf.world/image/0.2/Catalina.jpg',
          'name': {
            'en': 'Catalina',
            'ja': 'カタリナ'
          }
        },
        {
          '@context': village.Context.Agent,
          '@id': 'https://licos.online/state/0.2/village#3/role#mason/agent#11',
          'id': 11,
          'image': 'https://werewolf.world/image/0.2/Otto.jpg',
          'name': {
            'en': 'Otto',
            'ja': 'オットー'
          }
        }
      ],
      'image': 'https://werewolf.world/image/0.2/mason.jpg',
      'isMine': false,
      'name': {
        'en': 'Mason',
        'ja': '共有者'
      },
      'numberOfAgents': 2
    },
    {
      '@context': village.Context.Role,
      '@id': 'https://licos.online/state/0.2/village#3/role#madman',
      'agent': [
        {
          '@context': village.Context.Agent,
          '@id': 'https://licos.online/state/0.2/village#3/role#madman/agent#6',
          'id': 6,
          'image': 'https://werewolf.world/image/0.2/Dieter.jpg',
          'name': {
            'en': 'Dieter',
            'ja': 'ディーター'
          }
        }
      ],
      'image': 'https://werewolf.world/image/0.2/madman.jpg',
      'isMine': false,
      'name': {
        'en': 'Madman',
        'ja': '狂人'
      },
      'numberOfAgents': 1
    },
    {
      '@context': village.Context.Role,
      '@id': 'https://licos.online/state/0.2/village#3/role#werewolf',
      'agent': [
        {
          '@context': village.Context.Agent,
          '@id': 'https://licos.online/state/0.2/village#3/role#werewolf/agent#2',
          'id': 2,
          'image': 'https://werewolf.world/image/0.2/Moritz.jpg',
          'name': {
            'en': 'Moritz',
            'ja': 'モーリッツ'
          }
        },
        {
          '@context': village.Context.Agent,
          '@id': 'https://licos.online/state/0.2/village#3/role#werewolf/agent#7',
          'id': 7,
          'image': 'https://werewolf.world/image/0.2/Peter.jpg',
          'name': {
            'en': 'Peter',
            'ja': 'ペーター'
          }
        }
      ],
      'image': 'https://werewolf.world/image/0.2/werewolf.jpg',
      'isMine': false,
      'name': {
        'en': 'Werewolf',
        'ja': '人狼'
      },
      'numberOfAgents': 2
    },
    {
      '@context': village.Context.Role,
      '@id': 'https://licos.online/state/0.2/village#3/role#werehamster',
      'agent': [
        {
          '@context': village.Context.Agent,
          '@id': 'https://licos.online/state/0.2/village#3/role#werehamster/agent#5',
          'id': 5,
          'image': 'https://werewolf.world/image/0.2/Nicholas.jpg',
          'name': {
            'en': 'Nicholas',
            'ja': 'ニコラス'
          }
        }
      ],
      'image': 'https://werewolf.world/image/0.2/werehamster.jpg',
      'isMine': false,
      'name': {
        'en': 'Werehamster',
        'ja': 'ハムスター人間'
      },
      'numberOfAgents': 1
    }
  ],
  'serverTimestamp': '2006-10-07T12:06:56.568+09:00',
  'token': 'eFVr3O93oLhmnE8OqTMl5VSVGIV',
  'village': {
    '@context': village.Context.Village,
    '@id': 'https://licos.online/state/0.2/village',
    'chatSettings': {
      '@context': village.Context.ChatSettings,
      '@id': 'https://licos.online/state/0.2/village#3/chatSettings',
      'characterLimit': 140,
      'limit': 10
    },
    'id': 3,
    'lang': village.Language.ja,
    'name': '横国の森の奥にある時代に取り残された小さな村',
    'totalNumberOfAgents': 15
  },
  'votingResultsDetails': [],
  'votingResultsSummary': []
}

export default json

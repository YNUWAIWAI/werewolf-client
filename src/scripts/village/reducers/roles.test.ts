/* global village */
import reducer, {initialState} from './roles'
import {firstMorning} from './fakeServer'
import {socket} from '../actions'

test('socket/MESSAGE', () => {
  expect(
    reducer(
      initialState,
      socket.message(firstMorning)
    )
  ).toEqual({
    all: [
      {
        '@context': 'https://werewolf.world/context/0.2/role.jsonld',
        '@id': 'https://licos.online/state/0.2/village#3/role#villager',
        'board': [
          {
            '@context': 'https://werewolf.world/context/0.2/boardResult.jsonld',
            '@id': 'https://licos.online/state/0.2/village#3/role#villager/board#1',
            'agent': {
              '@context': 'https://werewolf.world/context/0.2/agent.jsonld',
              '@id': 'https://licos.online/state/0.2/village#3/role#villager/board#1/agent#1',
              'id': 1,
              'image': 'https://werewolf.world/image/0.2/Walter.jpg',
              'name': {
                'en': 'Walter',
                'ja': 'ヴァルター'
              }
            },
            'date': 1,
            'phase': 'morning',
            'polarity': 'negative'
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
        '@context': 'https://werewolf.world/context/0.2/role.jsonld',
        '@id': 'https://licos.online/state/0.2/village#3/role#seer',
        'board': [
          {
            '@context': village.Context.BoardResult,
            '@id': 'https://licos.online/state/0.2/village#3/role#villager/board#0',
            'agent': {
              '@context': village.Context.Agent,
              '@id': 'https://licos.online/state/0.2/village#3/role#villager/board#0/agent#0',
              'id': 0,
              'image': 'https://werewolf.world/image/0.2/Gert.jpg',
              'name': {
                'en': 'Gert',
                'ja': 'ゲルト'
              }
            },
            'date': 1,
            'phase': village.Phase.morning,
            'polarity': village.Polarity.negative
          },
          {
            '@context': village.Context.BoardResult,
            '@id': 'https://licos.online/state/0.2/village#3/role#seer/board#1',
            'agent': {
              '@context': village.Context.Agent,
              '@id': 'https://licos.online/state/0.2/village#3/role#seer/board#1/agent#1',
              'id': 1,
              'image': 'https://werewolf.world/image/0.2/Walter.jpg',
              'name': {
                'en': 'Walter',
                'ja': 'ヴァルター'
              }
            },
            'date': 1,
            'phase': village.Phase.morning,
            'polarity': village.Polarity.positive
          },
          {
            '@context': village.Context.BoardResult,
            '@id': 'https://licos.online/state/0.2/village#3/role#villager/board#2',
            'agent': {
              '@context': village.Context.Agent,
              '@id': 'https://licos.online/state/0.2/village#3/role#villager/board#2/agent#2',
              'id': 2,
              'image': 'https://werewolf.world/image/0.2/Moritz.jpg',
              'name': {
                'en': 'Moritz',
                'ja': 'モーリッツ'
              }
            },
            'date': 1,
            'phase': village.Phase.morning,
            'polarity': village.Polarity.negative
          },
          {
            '@context': village.Context.BoardResult,
            '@id': 'https://licos.online/state/0.2/village#3/role#villager/board#3',
            'agent': {
              '@context': village.Context.Agent,
              '@id': 'https://licos.online/state/0.2/village#3/role#villager/board#3/agent#3',
              'id': 3,
              'image': 'https://werewolf.world/image/0.2/Simson.jpg',
              'name': {
                'en': 'Simson',
                'ja': 'ジムゾン'
              }
            },
            'date': 1,
            'phase': village.Phase.morning,
            'polarity': village.Polarity.negative
          },
          {
            '@context': village.Context.BoardResult,
            '@id': 'https://licos.online/state/0.2/village#3/role#villager/board#4',
            'agent': {
              '@context': village.Context.Agent,
              '@id': 'https://licos.online/state/0.2/village#3/role#villager/board#4/agent#4',
              'id': 4,
              'image': 'https://werewolf.world/image/0.2/Thomas.jpg',
              'name': {
                'en': 'Thomas',
                'ja': 'トーマス'
              }
            },
            'date': 1,
            'phase': village.Phase.morning,
            'polarity': village.Polarity.negative
          },
          {
            '@context': village.Context.BoardResult,
            '@id': 'https://licos.online/state/0.2/village#3/role#villager/board#5',
            'agent': {
              '@context': village.Context.Agent,
              '@id': 'https://licos.online/state/0.2/village#3/role#villager/board#5/agent#5',
              'id': 5,
              'image': 'https://werewolf.world/image/0.2/Nicholas.jpg',
              'name': {
                'en': 'Nicholas',
                'ja': 'ニコラス'
              }
            },
            'date': 1,
            'phase': village.Phase.morning,
            'polarity': village.Polarity.negative
          },
          {
            '@context': village.Context.BoardResult,
            '@id': 'https://licos.online/state/0.2/village#3/role#villager/board#6',
            'agent': {
              '@context': village.Context.Agent,
              '@id': 'https://licos.online/state/0.2/village#3/role#villager/board#6/agent#6',
              'id': 6,
              'image': 'https://werewolf.world/image/0.2/Dieter.jpg',
              'name': {
                'en': 'Dieter',
                'ja': 'ディーター'
              }
            },
            'date': 1,
            'phase': village.Phase.morning,
            'polarity': village.Polarity.negative
          },
          {
            '@context': village.Context.BoardResult,
            '@id': 'https://licos.online/state/0.2/village#3/role#villager/board#7',
            'agent': {
              '@context': village.Context.Agent,
              '@id': 'https://licos.online/state/0.2/village#3/role#villager/board#7/agent#7',
              'id': 7,
              'image': 'https://werewolf.world/image/0.2/Peter.jpg',
              'name': {
                'en': 'Peter',
                'ja': 'ペーター'
              }
            },
            'date': 1,
            'phase': village.Phase.morning,
            'polarity': village.Polarity.negative
          },
          {
            '@context': village.Context.BoardResult,
            '@id': 'https://licos.online/state/0.2/village#3/role#villager/board#8',
            'agent': {
              '@context': village.Context.Agent,
              '@id': 'https://licos.online/state/0.2/village#3/role#villager/board#8/agent#8',
              'id': 8,
              'image': 'https://werewolf.world/image/0.2/Lisa.jpg',
              'name': {
                'en': 'Lisa',
                'ja': 'リーザ'
              }
            },
            'date': 1,
            'phase': village.Phase.morning,
            'polarity': village.Polarity.negative
          },
          {
            '@context': village.Context.BoardResult,
            '@id': 'https://licos.online/state/0.2/village#3/role#villager/board#9',
            'agent': {
              '@context': village.Context.Agent,
              '@id': 'https://licos.online/state/0.2/village#3/role#villager/board#9/agent#9',
              'id': 9,
              'image': 'https://werewolf.world/image/0.2/Alvin.jpg',
              'name': {
                'en': 'Alvin',
                'ja': 'アルビン'
              },
            },
            'date': 1,
            'phase': village.Phase.morning,
            'polarity': village.Polarity.negative
          },
          {
            '@context': village.Context.BoardResult,
            '@id': 'https://licos.online/state/0.2/village#3/role#villager/board#10',
            'agent': {
              '@context': village.Context.Agent,
              '@id': 'https://licos.online/state/0.2/village#3/role#villager/board#10/agent#10',
              'id': 10,
              'image': 'https://werewolf.world/image/0.2/Catalina.jpg',
              'name': {
                'en': 'Catalina',
                'ja': 'カタリナ'
              }
            },
            'date': 1,
            'phase': village.Phase.morning,
            'polarity': village.Polarity.negative
          },
          {
            '@context': village.Context.BoardResult,
            '@id': 'https://licos.online/state/0.2/village#3/role#villager/board#11',
            'agent': {
              '@context': village.Context.Agent,
              '@id': 'https://licos.online/state/0.2/village#3/role#villager/board#11/agent#11',
              'id': 11,
              'image': 'https://werewolf.world/image/0.2/Otto.jpg',
              'name': {
                'en': 'Otto',
                'ja': 'オットー'
              },
            },
            'date': 1,
            'phase': village.Phase.morning,
            'polarity': village.Polarity.negative
          },
          {
            '@context': village.Context.BoardResult,
            '@id': 'https://licos.online/state/0.2/village#3/role#villager/board#12',
            'agent': {
              '@context': village.Context.Agent,
              '@id': 'https://licos.online/state/0.2/village#3/role#villager/board#12/agent#12',
              'id': 12,
              'image': 'https://werewolf.world/image/0.2/Joachim.jpg',
              'name': {
                'en': 'Joachim',
                'ja': 'ヨアヒム'
              },
            },
            'date': 1,
            'phase': village.Phase.morning,
            'polarity': village.Polarity.negative
          },
          {
            '@context': village.Context.BoardResult,
            '@id': 'https://licos.online/state/0.2/village#3/role#villager/board#13',
            'agent': {
              '@context': village.Context.Agent,
              '@id': 'https://licos.online/state/0.2/village#3/role#villager/board#13/agent#13',
              'id': 13,
              'image': 'https://werewolf.world/image/0.2/Pamela.jpg',
              'name': {
                'en': 'Pamela',
                'ja': 'パメラ'
              }
            },
            'date': 1,
            'phase': village.Phase.morning,
            'polarity': village.Polarity.negative
          },
          {
            '@context': village.Context.BoardResult,
            '@id': 'https://licos.online/state/0.2/village#3/role#villager/board#14',
            'agent': {
              '@context': village.Context.Agent,
              '@id': 'https://licos.online/state/0.2/village#3/role#villager/board#14/agent#14',
              'id': 14,
              'image': 'https://werewolf.world/image/0.2/Jacob.jpg',
              'name': {
                'en': 'Jacob',
                'ja': 'ヤコブ'
              }
            },
            'date': 1,
            'phase': village.Phase.morning,
            'polarity': village.Polarity.negative
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
        '@context': 'https://werewolf.world/context/0.2/role.jsonld',
        '@id': 'https://licos.online/state/0.2/village#3/role#medium',
        'board': [
          {
            '@context': 'https://werewolf.world/context/0.2/boardResult.jsonld',
            '@id': 'https://licos.online/state/0.2/village#3/role#medium/board#1',
            'agent': {
              '@context': 'https://werewolf.world/context/0.2/agent.jsonld',
              '@id': 'https://licos.online/state/0.2/village#3/role#medium/board#1/agent#1',
              'id': 1,
              'image': 'https://werewolf.world/image/0.2/Walter.jpg',
              'name': {
                'en': 'Walter',
                'ja': 'ヴァルター'
              }
            },
            'date': 1,
            'phase': 'morning',
            'polarity': 'negative'
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
        '@context': 'https://werewolf.world/context/0.2/role.jsonld',
        '@id': 'https://licos.online/state/0.2/village#3/role#hunter',
        'board': [
          {
            '@context': 'https://werewolf.world/context/0.2/boardResult.jsonld',
            '@id': 'https://licos.online/state/0.2/village#3/role#hunter/board#1',
            'agent': {
              '@context': 'https://werewolf.world/context/0.2/agent.jsonld',
              '@id': 'https://licos.online/state/0.2/village#3/role#hunter/board#1/agent#1',
              'id': 1,
              'image': 'https://werewolf.world/image/0.2/Walter.jpg',
              'name': {
                'en': 'Walter',
                'ja': 'ヴァルター'
              }
            },
            'date': 1,
            'phase': 'morning',
            'polarity': 'negative'
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
        '@context': 'https://werewolf.world/context/0.2/role.jsonld',
        '@id': 'https://licos.online/state/0.2/village#3/role#mason',
        'board': [
          {
            '@context': 'https://werewolf.world/context/0.2/boardResult.jsonld',
            '@id': 'https://licos.online/state/0.2/village#3/role#mason/board#1',
            'agent': {
              '@context': 'https://werewolf.world/context/0.2/agent.jsonld',
              '@id': 'https://licos.online/state/0.2/village#3/role#mason/board#1/agent#1',
              'id': 1,
              'image': 'https://werewolf.world/image/0.2/Walter.jpg',
              'name': {
                'en': 'Walter',
                'ja': 'ヴァルター'
              }
            },
            'date': 1,
            'phase': 'morning',
            'polarity': 'negative'
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
        '@context': 'https://werewolf.world/context/0.2/role.jsonld',
        '@id': 'https://licos.online/state/0.2/village#3/role#madman',
        'board': [
          {
            '@context': 'https://werewolf.world/context/0.2/boardResult.jsonld',
            '@id': 'https://licos.online/state/0.2/village#3/role#madman/board#1',
            'agent': {
              '@context': 'https://werewolf.world/context/0.2/agent.jsonld',
              '@id': 'https://licos.online/state/0.2/village#3/role#madman/board#1/agent#1',
              'id': 1,
              'image': 'https://werewolf.world/image/0.2/Walter.jpg',
              'name': {
                'en': 'Walter',
                'ja': 'ヴァルター'
              }
            },
            'date': 1,
            'phase': 'morning',
            'polarity': 'negative'
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
        '@context': 'https://werewolf.world/context/0.2/role.jsonld',
        '@id': 'https://licos.online/state/0.2/village#3/role#werewolf',
        'board': [
          {
            '@context': 'https://werewolf.world/context/0.2/boardResult.jsonld',
            '@id': 'https://licos.online/state/0.2/village#3/role#werewolf/board#1',
            'agent': {
              '@context': 'https://werewolf.world/context/0.2/agent.jsonld',
              '@id': 'https://licos.online/state/0.2/village#3/role#werewolf/board#1/agent#1',
              'id': 1,
              'image': 'https://werewolf.world/image/0.2/Walter.jpg',
              'name': {
                'en': 'Walter',
                'ja': 'ヴァルター'
              }
            },
            'date': 1,
            'phase': 'morning',
            'polarity': 'negative'
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
        '@context': 'https://werewolf.world/context/0.2/role.jsonld',
        '@id': 'https://licos.online/state/0.2/village#3/role#werehamster',
        'board': [
          {
            '@context': 'https://werewolf.world/context/0.2/boardResult.jsonld',
            '@id': 'https://licos.online/state/0.2/village#3/role#werehamster/board#1',
            'agent': {
              '@context': 'https://werewolf.world/context/0.2/agent.jsonld',
              '@id': 'https://licos.online/state/0.2/village#3/role#werehamster/board#1/agent#1',
              'id': 1,
              'image': 'https://werewolf.world/image/0.2/Walter.jpg',
              'name': {
                'en': 'Walter',
                'ja': 'ヴァルター'
              }
            },
            'date': 1,
            'phase': 'morning',
            'polarity': 'negative'
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
    mine: {
      '@context': 'https://werewolf.world/context/0.2/role.jsonld',
      '@id': 'https://licos.online/state/0.2/village#3/role#seer',
      'board': [
        {
          '@context': village.Context.BoardResult,
          '@id': 'https://licos.online/state/0.2/village#3/role#villager/board#0',
          'agent': {
            '@context': village.Context.Agent,
            '@id': 'https://licos.online/state/0.2/village#3/role#villager/board#0/agent#0',
            'id': 0,
            'image': 'https://werewolf.world/image/0.2/Gert.jpg',
            'name': {
              'en': 'Gert',
              'ja': 'ゲルト'
            }
          },
          'date': 1,
          'phase': village.Phase.morning,
          'polarity': village.Polarity.negative
        },
        {
          '@context': village.Context.BoardResult,
          '@id': 'https://licos.online/state/0.2/village#3/role#seer/board#1',
          'agent': {
            '@context': village.Context.Agent,
            '@id': 'https://licos.online/state/0.2/village#3/role#seer/board#1/agent#1',
            'id': 1,
            'image': 'https://werewolf.world/image/0.2/Walter.jpg',
            'name': {
              'en': 'Walter',
              'ja': 'ヴァルター'
            }
          },
          'date': 1,
          'phase': village.Phase.morning,
          'polarity': village.Polarity.positive
        },
        {
          '@context': village.Context.BoardResult,
          '@id': 'https://licos.online/state/0.2/village#3/role#villager/board#2',
          'agent': {
            '@context': village.Context.Agent,
            '@id': 'https://licos.online/state/0.2/village#3/role#villager/board#2/agent#2',
            'id': 2,
            'image': 'https://werewolf.world/image/0.2/Moritz.jpg',
            'name': {
              'en': 'Moritz',
              'ja': 'モーリッツ'
            }
          },
          'date': 1,
          'phase': village.Phase.morning,
          'polarity': village.Polarity.negative
        },
        {
          '@context': village.Context.BoardResult,
          '@id': 'https://licos.online/state/0.2/village#3/role#villager/board#3',
          'agent': {
            '@context': village.Context.Agent,
            '@id': 'https://licos.online/state/0.2/village#3/role#villager/board#3/agent#3',
            'id': 3,
            'image': 'https://werewolf.world/image/0.2/Simson.jpg',
            'name': {
              'en': 'Simson',
              'ja': 'ジムゾン'
            }
          },
          'date': 1,
          'phase': village.Phase.morning,
          'polarity': village.Polarity.negative
        },
        {
          '@context': village.Context.BoardResult,
          '@id': 'https://licos.online/state/0.2/village#3/role#villager/board#4',
          'agent': {
            '@context': village.Context.Agent,
            '@id': 'https://licos.online/state/0.2/village#3/role#villager/board#4/agent#4',
            'id': 4,
            'image': 'https://werewolf.world/image/0.2/Thomas.jpg',
            'name': {
              'en': 'Thomas',
              'ja': 'トーマス'
            }
          },
          'date': 1,
          'phase': village.Phase.morning,
          'polarity': village.Polarity.negative
        },
        {
          '@context': village.Context.BoardResult,
          '@id': 'https://licos.online/state/0.2/village#3/role#villager/board#5',
          'agent': {
            '@context': village.Context.Agent,
            '@id': 'https://licos.online/state/0.2/village#3/role#villager/board#5/agent#5',
            'id': 5,
            'image': 'https://werewolf.world/image/0.2/Nicholas.jpg',
            'name': {
              'en': 'Nicholas',
              'ja': 'ニコラス'
            }
          },
          'date': 1,
          'phase': village.Phase.morning,
          'polarity': village.Polarity.negative
        },
        {
          '@context': village.Context.BoardResult,
          '@id': 'https://licos.online/state/0.2/village#3/role#villager/board#6',
          'agent': {
            '@context': village.Context.Agent,
            '@id': 'https://licos.online/state/0.2/village#3/role#villager/board#6/agent#6',
            'id': 6,
            'image': 'https://werewolf.world/image/0.2/Dieter.jpg',
            'name': {
              'en': 'Dieter',
              'ja': 'ディーター'
            }
          },
          'date': 1,
          'phase': village.Phase.morning,
          'polarity': village.Polarity.negative
        },
        {
          '@context': village.Context.BoardResult,
          '@id': 'https://licos.online/state/0.2/village#3/role#villager/board#7',
          'agent': {
            '@context': village.Context.Agent,
            '@id': 'https://licos.online/state/0.2/village#3/role#villager/board#7/agent#7',
            'id': 7,
            'image': 'https://werewolf.world/image/0.2/Peter.jpg',
            'name': {
              'en': 'Peter',
              'ja': 'ペーター'
            }
          },
          'date': 1,
          'phase': village.Phase.morning,
          'polarity': village.Polarity.negative
        },
        {
          '@context': village.Context.BoardResult,
          '@id': 'https://licos.online/state/0.2/village#3/role#villager/board#8',
          'agent': {
            '@context': village.Context.Agent,
            '@id': 'https://licos.online/state/0.2/village#3/role#villager/board#8/agent#8',
            'id': 8,
            'image': 'https://werewolf.world/image/0.2/Lisa.jpg',
            'name': {
              'en': 'Lisa',
              'ja': 'リーザ'
            }
          },
          'date': 1,
          'phase': village.Phase.morning,
          'polarity': village.Polarity.negative
        },
        {
          '@context': village.Context.BoardResult,
          '@id': 'https://licos.online/state/0.2/village#3/role#villager/board#9',
          'agent': {
            '@context': village.Context.Agent,
            '@id': 'https://licos.online/state/0.2/village#3/role#villager/board#9/agent#9',
            'id': 9,
            'image': 'https://werewolf.world/image/0.2/Alvin.jpg',
            'name': {
              'en': 'Alvin',
              'ja': 'アルビン'
            },
          },
          'date': 1,
          'phase': village.Phase.morning,
          'polarity': village.Polarity.negative
        },
        {
          '@context': village.Context.BoardResult,
          '@id': 'https://licos.online/state/0.2/village#3/role#villager/board#10',
          'agent': {
            '@context': village.Context.Agent,
            '@id': 'https://licos.online/state/0.2/village#3/role#villager/board#10/agent#10',
            'id': 10,
            'image': 'https://werewolf.world/image/0.2/Catalina.jpg',
            'name': {
              'en': 'Catalina',
              'ja': 'カタリナ'
            }
          },
          'date': 1,
          'phase': village.Phase.morning,
          'polarity': village.Polarity.negative
        },
        {
          '@context': village.Context.BoardResult,
          '@id': 'https://licos.online/state/0.2/village#3/role#villager/board#11',
          'agent': {
            '@context': village.Context.Agent,
            '@id': 'https://licos.online/state/0.2/village#3/role#villager/board#11/agent#11',
            'id': 11,
            'image': 'https://werewolf.world/image/0.2/Otto.jpg',
            'name': {
              'en': 'Otto',
              'ja': 'オットー'
            },
          },
          'date': 1,
          'phase': village.Phase.morning,
          'polarity': village.Polarity.negative
        },
        {
          '@context': village.Context.BoardResult,
          '@id': 'https://licos.online/state/0.2/village#3/role#villager/board#12',
          'agent': {
            '@context': village.Context.Agent,
            '@id': 'https://licos.online/state/0.2/village#3/role#villager/board#12/agent#12',
            'id': 12,
            'image': 'https://werewolf.world/image/0.2/Joachim.jpg',
            'name': {
              'en': 'Joachim',
              'ja': 'ヨアヒム'
            },
          },
          'date': 1,
          'phase': village.Phase.morning,
          'polarity': village.Polarity.negative
        },
        {
          '@context': village.Context.BoardResult,
          '@id': 'https://licos.online/state/0.2/village#3/role#villager/board#13',
          'agent': {
            '@context': village.Context.Agent,
            '@id': 'https://licos.online/state/0.2/village#3/role#villager/board#13/agent#13',
            'id': 13,
            'image': 'https://werewolf.world/image/0.2/Pamela.jpg',
            'name': {
              'en': 'Pamela',
              'ja': 'パメラ'
            }
          },
          'date': 1,
          'phase': village.Phase.morning,
          'polarity': village.Polarity.negative
        },
        {
          '@context': village.Context.BoardResult,
          '@id': 'https://licos.online/state/0.2/village#3/role#villager/board#14',
          'agent': {
            '@context': village.Context.Agent,
            '@id': 'https://licos.online/state/0.2/village#3/role#villager/board#14/agent#14',
            'id': 14,
            'image': 'https://werewolf.world/image/0.2/Jacob.jpg',
            'name': {
              'en': 'Jacob',
              'ja': 'ヤコブ'
            }
          },
          'date': 1,
          'phase': village.Phase.morning,
          'polarity': village.Polarity.negative
        }
      ],
      'image': 'https://werewolf.world/image/0.2/seer.jpg',
      'isMine': true,
      'name': {
        'en': 'Seer',
        'ja': '占い師'
      },
      'numberOfAgents': 1
    }
  })
})

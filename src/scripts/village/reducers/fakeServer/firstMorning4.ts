/* global village */
import {Agent} from '../../constants/Agent'
import ImagePath from '../../constants/ImagePath'
import {Role} from '../../constants/Role'

const json: village.Payload$systemMessage = {
  '@context': [
    village.BaseContext.Base,
    village.BaseContext.VotingResult
  ],
  '@id': 'https://licos.online/state/0.2/village#3/systemMessage',
  'agent': [
    {
      '@context': village.Context.Agent,
      '@id': 'https://licos.online/state/0.2/village#3/agent#1',
      'id': 1,
      'image': ImagePath.Agent.a,
      'isAChoice': false,
      'isMine': true,
      'name': Agent.a,
      'status': village.AgentStatus.alive,
      'update': {
        '@id': 'https://licos.online/state/0.2/village#3/agent#1/update',
        'date': 1,
        'phase': village.Phase.morning
      }
    },
    {
      '@context': village.Context.Agent,
      '@id': 'https://licos.online/state/0.2/village#3/agent#2',
      'id': 2,
      'image': ImagePath.Agent.b,
      'isAChoice': false,
      'isMine': false,
      'name': Agent.b,
      'status': village.AgentStatus.alive,
      'update': {
        '@id': 'https://licos.online/state/0.2/village#3/agent#2/update',
        'date': 1,
        'phase': village.Phase.morning
      }
    },
    {
      '@context': village.Context.Agent,
      '@id': 'https://licos.online/state/0.2/village#3/agent#3',
      'id': 3,
      'image': ImagePath.Agent.c,
      'isAChoice': false,
      'isMine': false,
      'name': Agent.c,
      'status': village.AgentStatus.alive,
      'update': {
        '@id': 'https://licos.online/state/0.2/village#3/agent#3/update',
        'date': 1,
        'phase': village.Phase.morning
      }
    },
    {
      '@context': village.Context.Agent,
      '@id': 'https://licos.online/state/0.2/village#3/agent#4',
      'id': 4,
      'image': ImagePath.Agent.d,
      'isAChoice': false,
      'isMine': false,
      'name': Agent.d,
      'status': village.AgentStatus.alive,
      'update': {
        '@id': 'https://licos.online/state/0.2/village#3/agent#4/update',
        'date': 1,
        'phase': village.Phase.morning
      }
    }
  ],
  'clientTimestamp': '2006-10-07T12:06:56.568+09:00',
  'date': 1,
  'directionality': village.Directionality.serverToClient,
  'extensionalDisclosureRange': [],
  'intensionalDisclosureRange': village.Channel.private,
  'phase': village.Phase.morning,
  'phaseStartTime': '2006-10-07T12:06:56.568+09:00',
  'phaseTimeLimit': 600,
  'role': [
    {
      '@context': village.Context.Role,
      '@id': 'https://licos.online/state/0.2/village#3/role#master',
      'board': [],
      'image': ImagePath.Role.master,
      'isMine': false,
      'name': Role.master,
      'numberOfAgents': 1
    },
    {
      '@context': village.Context.Role,
      '@id': 'https://licos.online/state/0.2/village#3/role#villager',
      'board': [
        {
          '@context': village.Context.BoardResult,
          '@id': 'https://licos.online/state/0.2/village#3/role#villager/board#1',
          'agent': {
            '@context': village.Context.Agent,
            '@id': 'https://licos.online/state/0.2/village#3/role#villager/board#1/agent#1',
            'id': 1,
            'image': ImagePath.Agent.a,
            'name': Agent.a
          },
          'date': 1,
          'phase': village.Phase.morning,
          'polarity': village.Polarity.positive
        }
      ],
      'image': ImagePath.Role.villager,
      'isMine': true,
      'name': Role.villager,
      'numberOfAgents': 3
    },
    {
      '@context': village.Context.Role,
      '@id': 'https://licos.online/state/0.2/village#3/role#seer',
      'board': [],
      'image': ImagePath.Role.seer,
      'isMine': false,
      'name': Role.seer,
      'numberOfAgents': 0
    },
    {
      '@context': village.Context.Role,
      '@id': 'https://licos.online/state/0.2/village#3/role#medium',
      'board': [],
      'image': ImagePath.Role.medium,
      'isMine': false,
      'name': Role.medium,
      'numberOfAgents': 0
    },
    {
      '@context': village.Context.Role,
      '@id': 'https://licos.online/state/0.2/village#3/role#hunter',
      'board': [],
      'image': ImagePath.Role.hunter,
      'isMine': false,
      'name': Role.hunter,
      'numberOfAgents': 0
    },
    {
      '@context': village.Context.Role,
      '@id': 'https://licos.online/state/0.2/village#3/role#mason',
      'board': [],
      'image': ImagePath.Role.mason,
      'isMine': false,
      'name': Role.mason,
      'numberOfAgents': 0
    },
    {
      '@context': village.Context.Role,
      '@id': 'https://licos.online/state/0.2/village#3/role#madman',
      'board': [],
      'image': ImagePath.Role.madman,
      'isMine': false,
      'name': Role.madman,
      'numberOfAgents': 0
    },
    {
      '@context': village.Context.Role,
      '@id': 'https://licos.online/state/0.2/village#3/role#werewolf',
      'board': [
        {
          '@context': village.Context.BoardResult,
          '@id': 'https://licos.online/state/0.2/village#3/role#werewolf/board#1',
          'agent': {
            '@context': village.Context.Agent,
            '@id': 'https://licos.online/state/0.2/village#3/role#werewolf/board#1/agent#1',
            'id': 1,
            'image': ImagePath.Agent.a,
            'name': Agent.a
          },
          'date': 1,
          'phase': village.Phase.morning,
          'polarity': village.Polarity.negative
        }
      ],
      'image': ImagePath.Role.werewolf,
      'isMine': false,
      'name': Role.werewolf,
      'numberOfAgents': 1
    },
    {
      '@context': village.Context.Role,
      '@id': 'https://licos.online/state/0.2/village#3/role#werehamster',
      'board': [],
      'image': ImagePath.Role.werehamster,
      'isMine': false,
      'name': Role.werehamster,
      'numberOfAgents': 0
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
    'totalNumberOfAgents': 4
  },
  'votingResultsDetails': [],
  'votingResultsSummary': []
}

export default json

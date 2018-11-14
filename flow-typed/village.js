declare module 'village' {
  declare type Directionality = 'server to client' | 'client to server'
  declare type Channel = 'anonymousAudience' | 'grave' | 'hunter' | 'master' | 'onymousAudience' | 'private' | 'public' | 'seer' | 'werewolf'
  declare type ChatChannel = 'grave' | 'limited' | 'master' | 'private' | 'public'
  declare type InputChannel = 'limited' | 'post mortem' | 'private' | 'public'
  declare type Phase = 'morning' | 'day' | 'night' | 'post mortem' | 'result'
  declare type RoleId = 'villager' | 'seer' | 'medium' | 'hunter' | 'mason' | 'madman' | 'werewolf' | 'werehamster'
  declare type _RoleId = 'Villager' | 'Seer' | 'Medium' | 'Hunter' | 'Mason' | 'Madman' | 'Werewolf' | 'Werehamster'
  declare type BoardState = '?' | 'Δ' | 'O' | 'X' | 'fill'
  declare type State = '?' | 'Δ' | 'O' | 'X'
  declare type Polarity = 'positive' | 'negative'
  declare type Language = 'en' | 'fr' | 'it' | 'ja'
  declare type Result = 'win' | 'lose'
  declare type AgentId = string
  declare type AgentStatus = 'alive' | 'dead' | 'death by execution' | 'death by attack' | 'death by fear' | 'unnatural death'
  declare type Team = 'villager' | 'werehamster' | 'werewolf'
  declare type Gender = 'female' | 'male'
  declare type Context =
    | 'https://werewolf.world/context/0.2/base.jsonld'
    | 'https://werewolf.world/context/0.2/error.jsonld'
    | 'https://werewolf.world/context/0.2/agent.jsonld'
    | 'https://werewolf.world/context/0.2/role.jsonld'
    | 'https://werewolf.world/context/0.2/board.jsonld'
    | 'https://werewolf.world/context/0.2/chat.jsonld'
    | 'https://werewolf.world/context/0.2/vote.jsonld'
    | 'https://werewolf.world/context/0.2/votingResult.jsonld'
    | 'https://werewolf.world/context/0.2/scroll.jsonld'
  declare type Message =
    | 'https://werewolf.world/resource/0.2/boardMessage'
    | 'https://werewolf.world/resource/0.2/errorMessage'
    | 'https://werewolf.world/resource/0.2/playerMessage'
    | 'https://werewolf.world/resource/0.2/scrollMessage'
    | 'https://werewolf.world/resource/0.2/systemMessage'
    | 'https://werewolf.world/resource/0.2/voteMessage'
  declare type NavigationType =
    | 'SHOW_RESULT'
    | 'RETURN_TO_LOBBY'

  /*
    'https://werewolf.world/context/0.2/agent.jsonld'
      dependency:
        'https://werewolf.world/context/0.2/base.jsonld'
        'https://werewolf.world/resource/0.2/boardMessage'
        'https://werewolf.world/resource/0.2/playerMessage'
        'https://werewolf.world/resource/0.2/systemMessage'
        'https://werewolf.world/resource/0.2/voteMessage'
        'https://werewolf.world/context/0.2/votingResult.jsonld'
  */
  declare type Agent = {
    '@id': string,
    isMine?: boolean,
    name: { [Language]: string },
    'full name'?: { [Language]: string },
    gender?: Gender,
    image: string,
    id: number,
    status?: AgentStatus,
    update?: {
      date: $PropertyType<TIme, 'date'>,
      phase: $PropertyType<TIme, 'phase'>
    },
    isAChoice?: boolean,
    result?: Result
  }

  /*
  'https://werewolf.world/context/0.2/avatar.jsonld'
    dependency:
      'https://werewolf.world/context/0.2/base.jsonld'
      'https://werewolf.world/resource/0.2/systemMessage'
  */
  declare type Avatar = {
    '@id'?: string,
    token?: string,
    name?: string,
    image?: string
  }

  /*
    'https://werewolf.world/context/0.2/base.jsonld'
      dependency:
        'https://werewolf.world/resource/0.2/boardMessage'
        'https://werewolf.world/resource/0.2/errorMessage'
        'https://werewolf.world/resource/0.2/playerMessage'
        'https://werewolf.world/resource/0.2/scrollMessage'
        'https://werewolf.world/resource/0.2/systemMessage'
        'https://werewolf.world/resource/0.2/voteMessage'
  */
  declare type Base = {
    '@id': Message,
    '@context': Context[],
    village: {
      '@id': string,
      id: number,
      name: string,
      totalNumberOfAgents: number
    },
    token: $NonMaybeType<$PropertyType<Avatar, 'token'>>,
    phase: $PropertyType<TIme, 'phase'>,
    date: $PropertyType<TIme, 'date'>,
    phaseTimeLimit: number,
    phaseStartTime: string,
    serverTimestamp: string,
    clientTimestamp: string,
    directionality: Directionality,
    intensionalDisclosureRange: Channel,
    extensionalDisclosureRange: {
      '@id': $NonMaybeType<$PropertyType<Agent, '@id'>>,
      id: $NonMaybeType<$PropertyType<Agent, 'id'>>,
      image: $NonMaybeType<$PropertyType<Agent, 'image'>>,
      name: $NonMaybeType<$PropertyType<Agent, 'name'>>,
      role: {
        '@id': $NonMaybeType<$PropertyType<Role, '@id'>>,
        image: $NonMaybeType<$PropertyType<Role, 'image'>>,
        name: $NonMaybeType<$PropertyType<Role, 'name'>>
      },
      status: $NonMaybeType<$PropertyType<Agent, 'status'>>
    }[],
    avatar?: {
      '@id': $NonMaybeType<$PropertyType<Avatar, '@id'>>,
      token: $NonMaybeType<$PropertyType<Avatar, 'token'>>,
      name: $NonMaybeType<$PropertyType<Avatar, 'name'>>,
      image: $NonMaybeType<$PropertyType<Avatar, 'image'>>
    },
    myAgent?: {
      '@id': $NonMaybeType<$PropertyType<Agent, '@id'>>,
      id: $NonMaybeType<$PropertyType<Agent, 'id'>>,
      image: $NonMaybeType<$PropertyType<Agent, 'image'>>,
      name: $NonMaybeType<$PropertyType<Agent, 'name'>>,
      role: {
        '@id': $NonMaybeType<$PropertyType<Role, '@id'>>,
        image: $NonMaybeType<$PropertyType<Role, 'image'>>,
        name: $NonMaybeType<$PropertyType<Role, 'name'>>
      }
    }
  }

  /*
  'https://werewolf.world/context/0.2/board.jsonld'
    dependency:
      'https://werewolf.world/resource/0.2/boardMessage'
      'https://werewolf.world/resource/0.2/systemMessage'
  */
  declare type Board = {
    '@id'?: string,
    polarity?: Polarity,
    prediction?: State
  }

  /*
  'https://werewolf.world/context/0.2/chat.jsonld'
    dependency;
      'https://werewolf.world/resource/0.2/playerMessage'
  */
  declare type Chat = {
    isMine: boolean,
    id?: number,
    counter?: number,
    limit?: number,
    interval?: string,
    text: {
      '@value': string,
      '@language': Language
    },
    characterLimit: number,
    isOver: boolean
  }

  /*
  'https://werewolf.world/context/0.2/error.jsonld'
    dependency:
      'https://werewolf.world/resource/0.2/errorMessage'
  */
  declare type Error = {
    content: {
      en: string,
      ja?: string
    },
    severity: 'error' | 'warning',
    source: string
  }

  /*
  'https://werewolf.world/context/0.2/role.jsonld'
    dependency:
      'https://werewolf.world/context/0.2/base.jsonld'
      'https://werewolf.world/resource/0.2/boardMessage'
      'https://werewolf.world/resource/0.2/systemMessage'
  */
  declare type Role = {
    '@id': string,
    name: { [Language]: string },
    image: string,
    isMine?: boolean,
    numberOfAgents?: number
  }

  /*
  'https://werewolf.world/context/0.2/scroll.jsonld'
    dependency:
      https://werewolf.world/resource/0.2/scrollMessage
  */
  declare type Scroll = {
    nodeId: string,
    scrollTop: number,
    scrollHeight: number,
    offsetHeight: number
  }

  /*
  'https://werewolf.world/context/0.2/time.jsonld'
    dependency:
      'https://werewolf.world/context/0.2/agent.jsonld'
      'https://werewolf.world/context/0.2/base.jsonld'
      'https://werewolf.world/resource/0.2/systemMessage'
  */
  declare type Time = {
    '@id'?: string,
    phase: Phase,
    date: number
  }

  /*
  'https://werewolf.world/context/0.2/votingResult.jsonld'
    dependency:
      'https://werewolf.world/resource/0.2/systemMessage'
  */
  declare type VotingResult = {
    votingResultsSummary?: {
      '@id': string,
      agentToLynch: {
        '@id': $NonMaybeType<$PropertyType<Agent, '@id'>>,
        id: $NonMaybeType<$PropertyType<Agent, 'id'>>,
        image: $NonMaybeType<$PropertyType<Agent, 'image'>>,
        name: $NonMaybeType<$PropertyType<Agent, 'name'>>,
      },
      numberOfVotes: number,
      rankOfVotes: number
    }[],
    votingResultsDetails?: {
      '@id': string,
      sourceAgent: {
        '@id': $NonMaybeType<$PropertyType<Agent, '@id'>>,
        id: $NonMaybeType<$PropertyType<Agent, 'id'>>,
        image: $NonMaybeType<$PropertyType<Agent, 'image'>>,
        name: $NonMaybeType<$PropertyType<Agent, 'name'>>,
      },
      targetAgent: {
        '@id': $NonMaybeType<$PropertyType<Agent, '@id'>>,
        id: $NonMaybeType<$PropertyType<Agent, 'id'>>,
        image: $NonMaybeType<$PropertyType<Agent, 'image'>>,
        name: $NonMaybeType<$PropertyType<Agent, 'name'>>,
      }
    }[]
  }

  declare type VoteAgent = {
    '@id': string,
    agentIsMine: boolean,
    name: { [Language]: string },
    image: string,
    id: number,
    status: AgentStatus,
    statusUpdatePhase: Phase,
    statusUpdateDate: number,
    isAChoice: boolean
  }
  declare type C2SChat = {
    chatIsMine: boolean,
    chatAgent: {
      '@id': string,
      chatAgentId: number,
      chatAgentName: { [Language]: string },
      chatAgentImage: string
    },
    chatText: string,
    chatCharacterLimit: number,
    chatLanguage: string,
    chatIsOver: boolean,
    chatUserName: string,
    chatUserAvatar: string
  }
  declare type C2SBoard = {
    boardAgent: {
      '@id': string,
      agentId: number,
      agentImage: string,
      agentName: { [Language]: string }
    },
    boardPrediction: BoardState,
    boardRole: {
      '@id': string,
      roleImage: string,
      roleName: { [Language]: string }
    }
  }
  declare type C2SVote = {
    votedAgent: {
      '@id': string,
      votedAgentId: number,
      votedAgentImage: string,
      votedAgentName: { [Language]: string }
    }
  }
  declare type Payload<T> =
    Base &
    T
  declare type Agent$Result = {
    '@id': string,
    isMine: boolean,
    name: { [Language]: string },
    image: string,
    id: number,
    status: AgentStatus,
    role: {
      '@id': string,
      name: { [Language]: string },
      image: string
    },
    result: Result,
    avatar: Avatar
  }
  declare type Role$Result = {
    '@id': string,
    name: { [Language]: string },
    image: string,
    isMine: boolean,
    numberOfAgents: number,
    agent: {
      '@id': string,
      name: { [Language]: string },
      image: string,
      id: number
    }[]
  }
  declare type Payload$Result = Payload<{
    agent: Agent$Result[],
    role: Role$Result[]
  }>
  declare type Payload$systemMessage = Payload<{
    '@context': $NonMaybeType<$PropertyType<Base, '@context'>>,
    '@id': $NonMaybeType<$PropertyType<Base, '@id'>>,
    village: $NonMaybeType<$PropertyType<Base, 'village'>>,
    token: $NonMaybeType<$PropertyType<Base, 'token'>>,
    phase: $NonMaybeType<$PropertyType<Base, 'phase'>>,
    date: $NonMaybeType<$PropertyType<Base, 'date'>>,
    phaseTimeLimit: $NonMaybeType<$PropertyType<Base, 'phaseTimeLimit'>>,
    phaseStartTime: $NonMaybeType<$PropertyType<Base, 'phaseStartTime'>>,
    serverTimestamp: $NonMaybeType<$PropertyType<Base, 'serverTimestamp'>>,
    clientTimestamp: $NonMaybeType<$PropertyType<Base, 'clientTimestamp'>>,
    directionality: $NonMaybeType<$PropertyType<Base, 'directionality'>>,
    intensionalDisclosureRange: $NonMaybeType<$PropertyType<Base, 'intensionalDisclosureRange'>>,
    extensionalDisclosureRange: $NonMaybeType<$PropertyType<Base, 'extensionalDisclosureRange'>>,
    votingResultsSummary: $PropertyType<VotingResult, 'votingResultsSummary'>,
    votingResultsDetails: $PropertyType<VotingResult, 'votingResultsDetails'>,
  }>
  declare type C2SPayload<T> =
    Base &
    T
  declare type ReadyPayload = {
    token: string,
    type: 'ready',
    villageId: number
  }
}

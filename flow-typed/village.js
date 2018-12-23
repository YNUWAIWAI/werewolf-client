declare module 'village' {
  declare type Directionality = 'server to client' | 'client to server'
  declare type Channel = 'anonymousAudience' | 'grave' | 'hunter' | 'master' | 'onymousAudience' | 'private' | 'public' | 'seer' | 'werewolf'
  declare type ChatChannel = 'grave' | 'limited' | 'master' | 'private' | 'public'
  declare type InputChannel = 'grave' | 'limited' | 'post mortem' | 'private' | 'public'
  declare type Phase = 'morning' | 'day' | 'night' | 'post mortem' | 'result' | 'flavor text'
  declare type RoleId = 'villager' | 'seer' | 'medium' | 'hunter' | 'mason' | 'madman' | 'werewolf' | 'werehamster' | 'master'
  declare type BoardState = '?' | 'Δ' | 'O' | 'X' | 'fill'
  declare type Language = 'en' | 'fr' | 'it' | 'ja'
  declare type LanguageMap = {
    [Language]: string,
    en: string
  }
  declare type Result = 'win' | 'lose'
  declare type AgentId = string
  declare type AgentStatus = 'alive' | 'dead' | 'death by execution' | 'death by attack' | 'death by fear' | 'unnatural death'
  declare type Team = 'villager' | 'werehamster' | 'werewolf'
  declare type Gender = 'female' | 'male'
  declare type Context$Agent = 'https://werewolf.world/context/0.2/agent.jsonld'
  declare type Context$Avatar = 'https://werewolf.world/context/0.2/avatar.jsonld'
  declare type Context$Base = 'https://werewolf.world/context/0.2/base.jsonld'
  declare type Context$Board = 'https://werewolf.world/context/0.2/board.jsonld'
  declare type Context$BoardResult = 'https://werewolf.world/context/0.2/boardResult.jsonld'
  declare type Context$Chat = 'https://werewolf.world/context/0.2/chat.jsonld'
  declare type Context$Error = 'https://werewolf.world/context/0.2/error.jsonld'
  declare type Context$FlavorText = 'https://werewolf.world/context/0.2/flavorText.jsonld'
  declare type Context$Role = 'https://werewolf.world/context/0.2/role.jsonld'
  declare type Context$Scroll = 'https://werewolf.world/context/0.2/scroll.jsonld'
  declare type Context$Village = 'https://werewolf.world/context/0.2/village.jsonld'
  declare type Context$Vote = 'https://werewolf.world/context/0.2/vote.jsonld'
  declare type Context$VotingResult = 'https://werewolf.world/context/0.2/votingResult.jsonld'
  declare type Context =
    | Context$Agent
    | Context$Base
    | Context$Board
    | Context$Chat
    | Context$Error
    | Context$FlavorText
    | Context$Role
    | Context$Scroll
    | Context$Vote
    | Context$VotingResult
  declare type Message =
    | 'boardMessage'
    | 'errorMessage'
    | 'flavorTextMessage'
    | 'playerMessage'
    | 'scrollMessage'
    | 'systemMessage'
    | 'voteMessage'
  declare type NavigationType =
    | 'SHOW_RESULT'
    | 'RETURN_TO_LOBBY'

  /*
    'https://werewolf.world/context/0.2/agent.jsonld'
      dependency:
        'https://werewolf.world/context/0.2/base.jsonld'
        'boardMessage'
        'playerMessage'
        'systemMessage'
        'voteMessage'
        'https://werewolf.world/context/0.2/votingResult.jsonld'
  */
  declare type Agent = {
    '@context': Context$Agent,
    '@id': string,
    isMine?: boolean,
    name: LanguageMap,
    'full name'?: LanguageMap,
    gender?: Gender,
    image: string,
    id: number,
    status?: string, // AgentStatus
    update?: {
      date: $PropertyType<Time, 'date'>,
      phase: $PropertyType<Time, 'phase'>
    },
    isAChoice?: boolean,
    result?: Result
  }

  /*
  'https://werewolf.world/context/0.2/avatar.jsonld'
    dependency:
      'https://werewolf.world/context/0.2/base.jsonld'
      'systemMessage'
  */
  declare type Avatar = {
    '@context'?: Context$Avatar,
    '@id'?: string,
    token?: string,
    name?: string,
    image?: string
  }

  /*
    'https://werewolf.world/context/0.2/base.jsonld'
      dependency:
        'boardMessage'
        'errorMessage'
        'flavorTextMessage'
        'playerMessage'
        'scrollMessage'
        'systemMessage'
        'voteMessage'
  */
  declare type Base = {
    '@id': string,
    '@context': Context[],
    village: {
      '@context': Context$Village,
      '@id': string,
      id: number,
      lang: Language,
      name: string,
      totalNumberOfAgents: number
    },
    token: $NonMaybeType<$PropertyType<Avatar, 'token'>>,
    phase: $PropertyType<Time, 'phase'>,
    date: $PropertyType<Time, 'date'>,
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
      '@context': $NonMaybeType<$PropertyType<Avatar, '@context'>>,
      '@id': $NonMaybeType<$PropertyType<Avatar, '@id'>>,
      token: $NonMaybeType<$PropertyType<Avatar, 'token'>>,
      name: $NonMaybeType<$PropertyType<Avatar, 'name'>>,
      image: $NonMaybeType<$PropertyType<Avatar, 'image'>>
    },
    myAgent?: {
      '@context': $NonMaybeType<$PropertyType<Agent, '@context'>>,
      '@id': $NonMaybeType<$PropertyType<Agent, '@id'>>,
      id: $NonMaybeType<$PropertyType<Agent, 'id'>>,
      image: $NonMaybeType<$PropertyType<Agent, 'image'>>,
      name: $NonMaybeType<$PropertyType<Agent, 'name'>>,
      role: {
        '@context': $NonMaybeType<$PropertyType<Role, '@context'>>,
        '@id': $NonMaybeType<$PropertyType<Role, '@id'>>,
        image: $NonMaybeType<$PropertyType<Role, 'image'>>,
        name: $NonMaybeType<$PropertyType<Role, 'name'>>
      }
    }
  }

  /*
  'https://werewolf.world/context/0.2/board.jsonld'
    dependency:
      'boardMessage'
      'systemMessage'
  */
  declare type Board = {
    '@context'?: Context$BoardResult,
    '@id'?: string,
    polarity?: string, // 'positive' | 'negative'
    prediction?: string // BoardState
  }

  /*
  'https://werewolf.world/context/0.2/chat.jsonld'
    dependency;
      'playerMessage'
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
      'errorMessage'
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
      'boardMessage'
      'systemMessage'
  */
  declare type Role = {
    '@context': Context$Role,
    '@id': string,
    name: LanguageMap,
    image: string,
    isMine?: boolean,
    numberOfAgents?: number
  }

  /*
  'https://werewolf.world/context/0.2/scroll.jsonld'
    dependency:
      scrollMessage
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
      'systemMessage'
  */
  declare type Time = {
    '@id'?: string,
    phase: Phase,
    date: number
  }

  /*
  'https://werewolf.world/context/0.2/votingResult.jsonld'
    dependency:
      'systemMessage'
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
  declare type Payload<T> =
    Base &
    T
  declare type Payload$boardMessage = Payload<{
    agent: {
      '@context': $NonMaybeType<$PropertyType<Agent, '@context'>>,
      '@id': $NonMaybeType<$PropertyType<Agent, '@id'>>,
      id: $NonMaybeType<$PropertyType<Agent, 'id'>>,
      name: $NonMaybeType<$PropertyType<Agent, 'name'>>,
      image: $NonMaybeType<$PropertyType<Agent, 'image'>>
    },
    role: {
      '@context': $NonMaybeType<$PropertyType<Role, '@context'>>,
      '@id': $NonMaybeType<$PropertyType<Role, '@id'>>,
      name: $NonMaybeType<$PropertyType<Role, 'name'>>,
      image: $NonMaybeType<$PropertyType<Role, 'image'>>
    },
    prediction: $NonMaybeType<$PropertyType<Board, 'prediction'>>
  }>
  declare type Payload$errorMessage = Payload<Error>
  declare type Payload$flavorTextMessage = Payload<{
    flavorText: Payload$playerMessage[]
  }>
  declare type Payload$playerMessage = Payload<{
    agent?: {
      '@context': $NonMaybeType<$PropertyType<Agent, '@context'>>,
      '@id': $NonMaybeType<$PropertyType<Agent, '@id'>>,
      id: $NonMaybeType<$PropertyType<Agent, 'id'>>,
      name: $NonMaybeType<$PropertyType<Agent, 'name'>>,
      image: $NonMaybeType<$PropertyType<Agent, 'image'>>
    },
    isMine: $NonMaybeType<$PropertyType<Chat, 'isMine'>>,
    id?: $NonMaybeType<$PropertyType<Chat, 'id'>>,
    counter?: $NonMaybeType<$PropertyType<Chat, 'counter'>>,
    limit?: $NonMaybeType<$PropertyType<Chat, 'limit'>>,
    interval?: $NonMaybeType<$PropertyType<Chat, 'interval'>>,
    text: $NonMaybeType<$PropertyType<Chat, 'text'>>,
    characterLimit: $NonMaybeType<$PropertyType<Chat, 'characterLimit'>>,
    isOver: $NonMaybeType<$PropertyType<Chat, 'isOver'>>
  }>
  declare type Payload$scrollMessage = Payload<Scroll>
  declare type Agent$systemMessage = {
    '@id': $NonMaybeType<$PropertyType<Agent, '@id'>>,
    isMine: $NonMaybeType<$PropertyType<Agent, 'isMine'>>,
    name: $NonMaybeType<$PropertyType<Agent, 'name'>>,
    image: $NonMaybeType<$PropertyType<Agent, 'image'>>,
    id: $NonMaybeType<$PropertyType<Agent, 'id'>>,
    status: $NonMaybeType<$PropertyType<Agent, 'status'>>,
    update?: $NonMaybeType<$PropertyType<Agent, 'update'>>,
    isAChoice?: $NonMaybeType<$PropertyType<Agent, 'isAChoice'>>,
    result?: $NonMaybeType<$PropertyType<Agent, 'result'>>,
    avatar?: {
      token: $NonMaybeType<$PropertyType<Avatar, 'token'>>,
      name: $NonMaybeType<$PropertyType<Avatar, 'name'>>,
      image: $NonMaybeType<$PropertyType<Avatar, 'image'>>
    },
    role?: {
      '@context': $NonMaybeType<$PropertyType<Role, '@context'>>,
      '@id': $NonMaybeType<$PropertyType<Role, '@id'>>,
      name: $NonMaybeType<$PropertyType<Role, 'name'>>,
      image: $NonMaybeType<$PropertyType<Role, 'image'>>
    }
  }
  declare type Role$systemMessage = {
    '@context': $NonMaybeType<$PropertyType<Role, '@context'>>,
    '@id': $NonMaybeType<$PropertyType<Role, '@id'>>,
    isMine: $NonMaybeType<$PropertyType<Role, 'isMine'>>,
    name: $NonMaybeType<$PropertyType<Role, 'name'>>,
    image: $NonMaybeType<$PropertyType<Role, 'image'>>,
    numberOfAgents: $NonMaybeType<$PropertyType<Role, 'numberOfAgents'>>,
    agent?: {
      '@context': $NonMaybeType<$PropertyType<Agent, '@context'>>,
      '@id': $NonMaybeType<$PropertyType<Agent, '@id'>>,
      name: $NonMaybeType<$PropertyType<Agent, 'name'>>,
      image: $NonMaybeType<$PropertyType<Agent, 'image'>>,
      id: $NonMaybeType<$PropertyType<Agent, 'id'>>
    },
    board?: {
      '@context': $NonMaybeType<$PropertyType<Board, '@context'>>,
      '@id': string,
      agent: {
        '@context': $NonMaybeType<$PropertyType<Agent, '@context'>>,
        '@id': $NonMaybeType<$PropertyType<Agent, '@id'>>,
        name: $NonMaybeType<$PropertyType<Agent, 'name'>>,
        image: $NonMaybeType<$PropertyType<Agent, 'image'>>,
        id: $NonMaybeType<$PropertyType<Agent, 'id'>>
      },
      polarity: $NonMaybeType<$PropertyType<Board, 'polarity'>>,
      phase: $PropertyType<Time, 'phase'>,
      date: $PropertyType<Time, 'date'>
    }[]
  }
  declare type Payload$systemMessage = Payload<{
    votingResultsSummary?: $NonMaybeType<$PropertyType<VotingResult, 'votingResultsSummary'>>,
    votingResultsDetails?: $NonMaybeType<$PropertyType<VotingResult, 'votingResultsDetails'>>,
    agent?: Agent$systemMessage[],
    role?: Role$systemMessage[],
  }>
  declare type Payload$voteMessage = Payload<{
    agent?: {
      '@context': $NonMaybeType<$PropertyType<Agent, '@context'>>,
      '@id': $NonMaybeType<$PropertyType<Agent, '@id'>>,
      name: $NonMaybeType<$PropertyType<Agent, 'name'>>,
      image: $NonMaybeType<$PropertyType<Agent, 'image'>>,
      id: $NonMaybeType<$PropertyType<Agent, 'id'>>,
    }
  }>
  declare type Payload$Ready = {
    token: string,
    type: 'ready',
    villageId: number
  }
  declare type Payload$Played = {
    lang: Language,
    type: 'played'
  }
}

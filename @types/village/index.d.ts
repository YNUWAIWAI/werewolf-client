/* eslint no-unused-vars: 0, init-declarations: 0 */
declare namespace village {
  const enum Directionality {
    serverToClient = 'server to client',
    clientToServer = 'client to server'
  }
  const enum Channel {
    anonymousAudience = 'anonymousAudience',
    grave = 'grave',
    hunter = 'hunter',
    master = 'master',
    onymousAudience = 'onymousAudience',
    private = 'private',
    public = 'public',
    seer = 'seer',
    werewolf = 'werewolf'
  }
  const enum ChatChannel {
    grave = 'grave',
    limited = 'limited',
    master = 'master',
    private = 'private',
    public = 'public'
  }
  const enum InputChannel {
    grave = 'grave',
    limited = 'limited',
    postMortem = 'post mortem',
    private = 'private',
    public = 'public'
  }
  const enum Phase {
    morning = 'morning',
    day = 'day',
    night = 'night',
    postMortem = 'post mortem',
    result = 'result',
    flavorText = 'flavor text'
  }
  const enum RoleId {
    villager = 'villager',
    seer = 'seer',
    medium = 'medium',
    hunter = 'hunter',
    mason = 'mason',
    madman = 'madman',
    werewolf = 'werewolf',
    werehamster = 'werehamster',
    master = 'master'
  }
  const enum BoardState {
    QUESTION = '?',
    TRIANGLE = 'Δ',
    CIRCLE = 'O',
    CROSS = 'X',
    FILL = 'fill'
  }
  const enum Language {
    en = 'en',
    fr = 'fr',
    it = 'it',
    ja = 'ja'
  }
  interface LanguageMap {
    [Language.en]: string
    [Language.fr]?: string
    [Language.it]?: string
    [Language.ja]?: string
  }

  const enum Result {
    win = 'win',
    lose = 'lose'
  }
  type AgentId = string

  type Token = string

  const enum AgentStatus {
    alive = 'alive',
    dead = 'dead',
    deathByExecution = 'death by execution',
    deathByAttack = 'death by attack',
    deathByFear = 'death by fear',
    unnaturalDeath = 'unnatural death'
  }
  const enum Team {
    villager = 'villager',
    werehamster = 'werehamster',
    werewolf = 'werewolf'
  }
  const enum Gender {
    female = 'female',
    male = 'male'
  }
  const enum Polarity {
    negative = 'negative',
    positive = 'positive'
  }
  const enum Context {
    Agent = 'https://werewolf.world/context/0.2/agent.jsonld',
    Avatar = 'https://werewolf.world/context/0.2/avatar.jsonld',
    Base = 'https://werewolf.world/context/0.2/base.jsonld',
    Board = 'https://werewolf.world/context/0.2/board.jsonld',
    BoardResult = 'https://werewolf.world/context/0.2/boardResult.jsonld',
    Chat = 'https://werewolf.world/context/0.2/chat.jsonld',
    Error = 'https://werewolf.world/context/0.2/error.jsonld',
    FlavorText = 'https://werewolf.world/context/0.2/flavorText.jsonld',
    Role = 'https://werewolf.world/context/0.2/role.jsonld',
    Scroll = 'https://werewolf.world/context/0.2/scroll.jsonld',
    Village = 'https://werewolf.world/context/0.2/village.jsonld',
    Vote = 'https://werewolf.world/context/0.2/vote.jsonld',
    VotingResult = 'https://werewolf.world/context/0.2/votingResult.jsonld'
  }
  const enum BaseContext {
    Agent = 'https://werewolf.world/context/0.2/agent.jsonld',
    Avatar = 'https://werewolf.world/context/0.2/avatar.jsonld',
    Base = 'https://werewolf.world/context/0.2/base.jsonld',
    Board = 'https://werewolf.world/context/0.2/board.jsonld',
    Chat = 'https://werewolf.world/context/0.2/chat.jsonld',
    Error = 'https://werewolf.world/context/0.2/error.jsonld',
    FlavorText = 'https://werewolf.world/context/0.2/flavorText.jsonld',
    Role = 'https://werewolf.world/context/0.2/role.jsonld',
    Scroll = 'https://werewolf.world/context/0.2/scroll.jsonld',
    Vote = 'https://werewolf.world/context/0.2/vote.jsonld',
    VotingResult = 'https://werewolf.world/context/0.2/votingResult.jsonld'
  }
  const enum Message {
    boardMessage = 'boardMessage',
    errorMessage = 'errorMessage',
    flavorTextMessage = 'flavorTextMessage',
    playerMessage = 'playerMessage',
    scrollMessage = 'scrollMessage',
    systemMessage = 'systemMessage',
    voteMessage = 'voteMessage',
  }
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
  interface Agent {
    '@context': Context.Agent
    '@id': string
    isMine?: boolean
    name: LanguageMap
    'full name'?: LanguageMap
    gender?: Gender
    image: string
    id: number
    status?: AgentStatus
    update?: {
      '@id': NonNullable<Time['@id']>
      date: NonNullable<Time['date']>
      phase: NonNullable<Time['phase']>
    }
    isAChoice?: boolean
    result?: Result
  }

  /*
  'https://werewolf.world/context/0.2/avatar.jsonld'
    dependency:
      'https://werewolf.world/context/0.2/base.jsonld'
      'systemMessage'
  */
  interface Avatar {
    '@context'?: Context.Avatar
    '@id'?: string
    token?: Token
    name?: string
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
  interface Base extends PayloadBase {
    '@id': string
    '@context': BaseContext[]
    village: {
      '@context': Context.Village
      '@id': string
      id: number
      lang: Language
      name: string
      totalNumberOfAgents: number
    }
    token: NonNullable<Avatar['token']>
    phase: NonNullable<Time['phase']>
    date: NonNullable<Time['date']>
    phaseTimeLimit: number
    phaseStartTime: string
    serverTimestamp: string
    clientTimestamp: string
    directionality: Directionality
    intensionalDisclosureRange: Channel
    extensionalDisclosureRange: {
      '@id': NonNullable<Agent['@id']>
      id: NonNullable<Agent['id']>
      image: NonNullable<Agent['image']>
      name: NonNullable<Agent['name']>
      role: {
        '@id': NonNullable<Role['@id']>
        image: NonNullable<Role['image']>
        name: NonNullable<Role['name']>
      }
      status: NonNullable<Agent['status']>
    }[]
    avatar?: {
      '@context': NonNullable<Avatar['@context']>
      '@id': NonNullable<Avatar['@id']>
      token: NonNullable<Avatar['token']>
      name: NonNullable<Avatar['name']>
      image: NonNullable<Avatar['image']>
    }
    myAgent?: {
      '@context': NonNullable<Agent['@context']>
      '@id': NonNullable<Agent['@id']>
      id: NonNullable<Agent['id']>
      image: NonNullable<Agent['image']>
      name: NonNullable<Agent['name']>
      role: {
        '@context': NonNullable<Role['@context']>
        '@id': NonNullable<Role['@id']>
        image: NonNullable<Role['image']>
        name: NonNullable<Role['name']>
      }
    }
  }

  /*
  'https://werewolf.world/context/0.2/board.jsonld'
    dependency:
      'boardMessage'
      'systemMessage'
  */
  interface Board {
    '@context'?: Context.BoardResult
    '@id'?: string
    polarity?: Polarity
    prediction?: BoardState
  }

  /*
  'https://werewolf.world/context/0.2/chat.jsonld'
    dependency;
      'playerMessage'
  */
  interface Chat {
    isMine: boolean
    id?: number
    counter?: number
    limit?: number
    interval?: string
    text: {
      '@value': string
      '@language': Language
    }
    characterLimit: number
    isOver: boolean
  }

  /*
  'https://werewolf.world/context/0.2/error.jsonld'
    dependency:
      'errorMessage'
  */
  interface Error {
    content: {
      en: string
      ja?: string
    }
    severity: 'error' | 'warning'
    source: string
  }

  /*
  'https://werewolf.world/context/0.2/role.jsonld'
    dependency:
      'https://werewolf.world/context/0.2/base.jsonld'
      'boardMessage'
      'systemMessage'
  */
  interface Role {
    '@context': Context.Role
    '@id': string
    name: LanguageMap
    image: string
    isMine?: boolean
    numberOfAgents?: number
  }

  /*
  'https://werewolf.world/context/0.2/scroll.jsonld'
    dependency:
      scrollMessage
  */
  interface Scroll {
    nodeId: string
    scrollTop: number
    scrollHeight: number
    offsetHeight: number
  }

  /*
  'https://werewolf.world/context/0.2/time.jsonld'
    dependency:
      'https://werewolf.world/context/0.2/agent.jsonld'
      'https://werewolf.world/context/0.2/base.jsonld'
      'systemMessage'
  */
  interface Time {
    '@id': string
    phase: Phase
    date: number
  }

  /*
  'https://werewolf.world/context/0.2/votingResult.jsonld'
    dependency:
      'systemMessage'
  */
  interface VotingResult {
    votingResultsSummary?: {
      '@id': string
      agentToLynch: {
        '@id': NonNullable<Agent['@id']>
        id: NonNullable<Agent['id']>
        image: NonNullable<Agent['image']>
        name: NonNullable<Agent['name']>
      }
      numberOfVotes: number
      rankOfVotes: number
    }[]
    votingResultsDetails?: {
      '@id': string
      sourceAgent: {
        '@id': NonNullable<Agent['@id']>
        id: NonNullable<Agent['id']>
        image: NonNullable<Agent['image']>
        name: NonNullable<Agent['name']>
      }
      targetAgent: {
        '@id': NonNullable<Agent['@id']>
        id: NonNullable<Agent['id']>
        image: NonNullable<Agent['image']>
        name: NonNullable<Agent['name']>
      }
    }[]
  }
  const enum PayloadType {
    ready = 'ready',
    nextGameInvitation = 'nextGameInvitation',
    nextGameInvitationIsClosed = 'nextGameInvitationIsClosed',
    receivedFlavorTextMessage = 'receivedFlavorTextMessage',
    receivedPlayerMessage = 'receivedPlayerMessage',
    receivedSystemMessage = 'receivedSystemMessage'
  }
  interface PayloadBase {
    '@id'?: string
    '@payload'?: Message | PayloadType
    'type'?: PayloadType
  }
  interface Payload$boardMessage extends Base {
    '@payload'?: Message.boardMessage
    agent: {
      '@context': NonNullable<Agent['@context']>
      '@id': NonNullable<Agent['@id']>
      id: NonNullable<Agent['id']>
      name: NonNullable<Agent['name']>
      image: NonNullable<Agent['image']>
    }
    role: {
      '@context': NonNullable<Role['@context']>
      '@id': NonNullable<Role['@id']>
      name: NonNullable<Role['name']>
      image: NonNullable<Role['image']>
    }
    prediction: Board['prediction']
  }
  interface Payload$errorMessage extends Base, Error {
    '@payload'?: Message.errorMessage
  }
  interface Payload$flavorTextMessage extends Base {
    '@payload'?: Message.flavorTextMessage
    flavorText: Payload$playerMessage[]
  }
  interface Payload$playerMessage extends Base {
    '@payload'?: Message.playerMessage
    agent?: {
      '@context': NonNullable<Agent['@context']>
      '@id': NonNullable<Agent['@id']>
      id: NonNullable<Agent['id']>
      name: NonNullable<Agent['name']>
      image: NonNullable<Agent['image']>
    }
    isMine: NonNullable<Chat['isMine']>
    id?: NonNullable<Chat['id']>
    counter?: NonNullable<Chat['counter']>
    limit?: NonNullable<Chat['limit']>
    interval?: NonNullable<Chat['interval']>
    text: NonNullable<Chat['text']>
    characterLimit: NonNullable<Chat['characterLimit']>
    isOver: NonNullable<Chat['isOver']>
  }
  interface Payload$scrollMessage extends Base, Scroll {
    '@payload'?: Message.scrollMessage
  }
  interface Payload$systemMessage extends Base {
    '@payload'?: Message.systemMessage
    votingResultsSummary?: NonNullable<VotingResult['votingResultsSummary']>
    votingResultsDetails?: NonNullable<VotingResult['votingResultsDetails']>
    agent?: {
      '@context': NonNullable<Agent['@context']>
      '@id': NonNullable<Agent['@id']>
      isMine: NonNullable<Agent['isMine']>
      name: NonNullable<Agent['name']>
      image: NonNullable<Agent['image']>
      id: NonNullable<Agent['id']>
      status: NonNullable<Agent['status']>
      update?: NonNullable<Agent['update']>
      isAChoice?: NonNullable<Agent['isAChoice']>
      result?: NonNullable<Agent['result']>
      avatar?: {
        '@context': NonNullable<Avatar['@context']>
        '@id': NonNullable<Avatar['@id']>
        token: NonNullable<Avatar['token']>
        name: NonNullable<Avatar['name']>
        image: NonNullable<Avatar['image']>
      }
      role?: {
        '@context': NonNullable<Role['@context']>
        '@id': NonNullable<Role['@id']>
        name: NonNullable<Role['name']>
        image: NonNullable<Role['image']>
      }
    }[]
    role?: {
      '@context': NonNullable<Role['@context']>
      '@id': NonNullable<Role['@id']>
      isMine: NonNullable<Role['isMine']>
      name: NonNullable<Role['name']>
      image: NonNullable<Role['image']>
      numberOfAgents: NonNullable<Role['numberOfAgents']>
      agent?: {
        '@context': NonNullable<Agent['@context']>
        '@id': NonNullable<Agent['@id']>
        id: NonNullable<Agent['id']>
        name: NonNullable<Agent['name']>
        image: NonNullable<Agent['image']>
      }[]
      board?: {
        '@context': NonNullable<Board['@context']>
        '@id': string
        agent: {
          '@context': NonNullable<Agent['@context']>
          '@id': NonNullable<Agent['@id']>
          id: NonNullable<Agent['id']>
          name: NonNullable<Agent['name']>
          image: NonNullable<Agent['image']>
        }
        polarity: NonNullable<Board['polarity']>
        phase: NonNullable<Time['phase']>
        date: NonNullable<Time['date']>
      }[]
    }[]
  }
  interface Payload$voteMessage extends Base {
    '@payload'?: Message.voteMessage
    agent?: {
      '@context': NonNullable<Agent['@context']>
      '@id': NonNullable<Agent['@id']>
      name: NonNullable<Agent['name']>
      image: NonNullable<Agent['image']>
      id: NonNullable<Agent['id']>
    }
  }
  interface Payload$ready extends PayloadBase {
    token: Token
    type: PayloadType.ready
    villageId: number
  }
  interface Payload$nextGameInvitation extends PayloadBase {
    '@payload': PayloadType.nextGameInvitation
    type: PayloadType.nextGameInvitation
    villageId: number
  }
  interface Payload$nextGameInvitationIsClosed extends PayloadBase {
    '@payload': PayloadType.nextGameInvitationIsClosed
    type: PayloadType.nextGameInvitationIsClosed
  }
  interface Payload$receivedFlavorTextMessage extends PayloadBase {
    date: number
    phase: Phase
    token: Token
    type: PayloadType.receivedFlavorTextMessage
    villageId: number
  }
  interface Payload$receivedPlayerMessage extends PayloadBase {
    clientTimestamp: string
    serverTimestamp: string
    token: Token
    type: PayloadType.receivedPlayerMessage
    villageId: number
  }
  interface Payload$receivedSystemMessage extends PayloadBase {
    date: number
    phase: Phase
    token: Token
    type: PayloadType.receivedSystemMessage
    villageId: number
  }
  type Payload =
    | Payload$boardMessage
    | Payload$errorMessage
    | Payload$flavorTextMessage
    | Payload$playerMessage
    | Payload$nextGameInvitation
    | Payload$nextGameInvitationIsClosed
    | Payload$ready
    | Payload$receivedFlavorTextMessage
    | Payload$receivedPlayerMessage
    | Payload$receivedSystemMessage
    | Payload$scrollMessage
    | Payload$systemMessage
    | Payload$voteMessage
}

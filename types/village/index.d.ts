/* eslint no-unused-vars: 0, @typescript-eslint/no-unused-vars: 0 */
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
    day = 'day',
    flavorText = 'flavor text',
    morning = 'morning',
    night = 'night',
    postMortem = 'post mortem',
    result = 'result'
  }
  const enum RoleId {
    hunter = 'hunter',
    madman = 'madman',
    mason = 'mason',
    master = 'master',
    medium = 'medium',
    seer = 'seer',
    villager = 'villager',
    werehamster = 'werehamster',
    werewolf = 'werewolf'
  }
  const enum BoardState {
    CIRCLE = 'O',
    CROSS = 'X',
    FILL = 'fill',
    QUESTION = '?',
    TRIANGLE = 'Δ'
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
    lose = 'lose',
    win = 'win'
  }
  type AgentId = string
  type ChatId = string
  type Token = string
  const enum AgentStatus {
    alive = 'alive',
    dead = 'dead',
    deathByAttack = 'death by attack',
    deathByExecution = 'death by execution',
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
    circle = 'O',
    cross = 'X',
    negative = 'negative',
    positive = 'positive',
    question = '?',
    triangle = 'Δ'
  }
  const enum Context {
    Agent = 'https://werewolf.world/context/0.2/agent.jsonld',
    Avatar = 'https://werewolf.world/context/0.2/avatar.jsonld',
    Base = 'https://werewolf.world/context/0.2/base.jsonld',
    Board = 'https://werewolf.world/context/0.2/board.jsonld',
    BoardResult = 'https://werewolf.world/context/0.2/boardResult.jsonld',
    Chat = 'https://werewolf.world/context/0.2/chat.jsonld',
    ChatSettings = 'https://werewolf.world/context/0.2/chatSettings.jsonld',
    Error = 'https://werewolf.world/context/0.2/error.jsonld',
    FlavorText = 'https://werewolf.world/context/0.2/flavorText.jsonld',
    Role = 'https://werewolf.world/context/0.2/role.jsonld',
    Scroll = 'https://werewolf.world/context/0.2/scroll.jsonld',
    Star = 'https://werewolf.world/context/0.2/star.jsonld',
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
    Star = 'https://werewolf.world/context/0.2/star.jsonld',
    Vote = 'https://werewolf.world/context/0.2/vote.jsonld',
    VotingResult = 'https://werewolf.world/context/0.2/votingResult.jsonld'
  }
  const enum Message {
    boardMessage = 'boardMessage',
    errorMessage = 'errorMessage',
    flavorTextMessage = 'flavorTextMessage',
    playerMessage = 'playerMessage',
    scrollMessage = 'scrollMessage',
    starMessage = 'starMessage',
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
    fullName?: LanguageMap
    gender?: Gender
    id: AgentId
    image: string
    isAChoice?: boolean
    isMine?: boolean
    name: LanguageMap
    result?: Result
    status?: AgentStatus
    update?: {
      '@id': NonNullable<Time['@id']>
      date: NonNullable<Time['date']>
      phase: NonNullable<Time['phase']>
    }
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
    image?: string
    name?: string
    token?: Token
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
    avatar?: {
      '@context': NonNullable<Avatar['@context']>
      '@id': NonNullable<Avatar['@id']>
      token: NonNullable<Avatar['token']>
      name: NonNullable<Avatar['name']>
      image: NonNullable<Avatar['image']>
    }
    clientTimestamp: string
    date: NonNullable<Time['date']>
    directionality: Directionality
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
    intensionalDisclosureRange: Channel
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
    phase: NonNullable<Time['phase']>
    phaseStartTime: string
    phaseTimeLimit: number
    serverTimestamp: string
    token: NonNullable<Avatar['token']>
    village: {
      '@context': Context.Village
      '@id': string
      chatSettings: {
        '@context': ChatSettings['@context']
        '@id': ChatSettings['@id']
        characterLimit: number
        limit: number
      }
      id: number
      lang: Language
      name: string
      totalNumberOfAgents: number
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
    characterLimit: number
    counter?: number
    id?: number
    interval?: string
    isMine: boolean
    isOver: boolean
    limit?: number
    text: {
      '@language': Language
      '@value': string
    }
  }

  /*
  'https://werewolf.world/context/0.2/chatSettings.jsonld'
    dependency;
      'https://werewolf.world/context/0.2/village.jsonld'
  */

  interface ChatSettings {
    '@context': Context.ChatSettings
    '@id': string
  }

  /*
  'https://werewolf.world/context/0.2/error.jsonld'
    dependency:
      'errorMessage'
  */
  interface Error {
    content: LanguageMap
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
    image: string
    isMine?: boolean
    name: LanguageMap
    numberOfAgents?: number
  }

  /*
  'https://werewolf.world/context/0.2/scroll.jsonld'
    dependency:
      scrollMessage
  */
  interface Scroll {
    nodeId: string
    offsetHeight: number
    scrollTop: number
    scrollHeight: number
  }

  /*
  'https://werewolf.world/context/0.2/star.jsonld'
    dependency:
      starMessage
  */
  interface Star {
    '@context': Context.Star
    '@id': string
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
    date: number
    phase: Phase
  }

  /*
  'https://werewolf.world/context/0.2/votingResult.jsonld'
    dependency:
      'systemMessage'
  */
  interface VotingResult {
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
  }
  const enum PayloadType {
    buildVillage = 'buildVillage',
    leaveWaitingPage = 'leaveWaitingPage',
    nextGameInvitation = 'nextGameInvitation',
    nextGameInvitationIsClosed = 'nextGameInvitationIsClosed',
    ready = 'ready',
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
      image: NonNullable<Agent['image']>
      name: NonNullable<Agent['name']>
    }
    prediction: Board['prediction']
    role: {
      '@context': NonNullable<Role['@context']>
      '@id': NonNullable<Role['@id']>
      image: NonNullable<Role['image']>
      name: NonNullable<Role['name']>
    }
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
      image: NonNullable<Agent['image']>
      name: NonNullable<Agent['name']>
    }
    characterLimit: NonNullable<Chat['characterLimit']>
    counter?: NonNullable<Chat['counter']>
    id?: NonNullable<Chat['id']>
    interval?: NonNullable<Chat['interval']>
    isMine: NonNullable<Chat['isMine']>
    isOver: NonNullable<Chat['isOver']>
    limit?: NonNullable<Chat['limit']>
    text: NonNullable<Chat['text']>
  }
  interface Payload$starMessage extends Base {
    '@payload'?: Message.starMessage
    myAgent: NonNullable<Base['myAgent']>
    star: {
      '@context': Star['@context']
      '@id': Star['@id']
      clientTimestamp: Base['clientTimestamp']
      isMarked: boolean
      serverTimestamp: Base['serverTimestamp']
      token: Avatar['token']
    }
  }
  interface Payload$scrollMessage extends Base, Scroll {
    '@payload'?: Message.scrollMessage
  }
  interface Payload$systemMessage extends Base {
    '@payload'?: Message.systemMessage
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
      agent?: {
        '@context': NonNullable<Agent['@context']>
        '@id': NonNullable<Agent['@id']>
        id: NonNullable<Agent['id']>
        image: NonNullable<Agent['image']>
        name: NonNullable<Agent['name']>
      }[]
      board?: {
        '@context': NonNullable<Board['@context']>
        '@id': string
        agent: {
          '@context': NonNullable<Agent['@context']>
          '@id': NonNullable<Agent['@id']>
          id: NonNullable<Agent['id']>
          image: NonNullable<Agent['image']>
          name: NonNullable<Agent['name']>
        }
        date: NonNullable<Time['date']>
        phase: NonNullable<Time['phase']>
        polarity: NonNullable<Board['polarity']>
      }[]
      image: NonNullable<Role['image']>
      isMine: NonNullable<Role['isMine']>
      name: NonNullable<Role['name']>
      numberOfAgents: NonNullable<Role['numberOfAgents']>
    }[]
    votingResultsSummary?: NonNullable<VotingResult['votingResultsSummary']>
    votingResultsDetails?: NonNullable<VotingResult['votingResultsDetails']>
  }
  interface Payload$voteMessage extends Base {
    '@payload'?: Message.voteMessage
    agent?: {
      '@context': NonNullable<Agent['@context']>
      '@id': NonNullable<Agent['@id']>
      id: NonNullable<Agent['id']>
      image: NonNullable<Agent['image']>
      name: NonNullable<Agent['name']>
    }
  }
  interface Payload$buildVillage extends PayloadBase {
    avatar: lobby.Payload$buildVillage['avatar']
    comment: lobby.Payload$buildVillage['comment']
    hostPlayer: lobby.Payload$buildVillage['hostPlayer']
    id: lobby.Payload$buildVillage['id']
    idForSearching: lobby.Payload$buildVillage['idForSearching']
    name: lobby.Payload$buildVillage['name']
    playerSetting: lobby.Payload$buildVillage['playerSetting']
    roleSetting: lobby.Payload$buildVillage['roleSetting']
    token: lobby.Payload$buildVillage['token']
    type: PayloadType.buildVillage
  }
  interface Payload$leaveWaitingPage extends PayloadBase {
    lobby: lobby.Payload$leaveWaitingPage['lobby']
    token: lobby.Payload$leaveWaitingPage['token']
    type: PayloadType.leaveWaitingPage
    villageId: lobby.Payload$leaveWaitingPage['villageId']
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
    | Payload$buildVillage
    | Payload$boardMessage
    | Payload$errorMessage
    | Payload$flavorTextMessage
    | Payload$leaveWaitingPage
    | Payload$playerMessage
    | Payload$nextGameInvitation
    | Payload$nextGameInvitationIsClosed
    | Payload$ready
    | Payload$receivedFlavorTextMessage
    | Payload$receivedPlayerMessage
    | Payload$receivedSystemMessage
    | Payload$scrollMessage
    | Payload$starMessage
    | Payload$systemMessage
    | Payload$voteMessage
}

declare module 'village' {
  declare type Directionality = 'server to client' | 'client to server'
  declare type Channel = 'anonymousAudience' | 'grave' | 'hunter' | 'master' | 'onymousAudience' | 'private' | 'public' | 'seer' | 'werewolf'
  declare type ChatChannel = 'grave' | 'limited' | 'master' | 'private' | 'public'
  declare type InputChannel = 'limited' | 'post mortem' | 'private' | 'public'
  declare type Phase = 'day conversation' | 'day vote' | 'night' | 'post mortem' | 'results'
  declare type RoleId = 'villager' | 'seer' | 'medium' | 'hunter' | 'mason' | 'madman' | 'werewolf' | 'werehamster'
  declare type _RoleId = 'Villager' | 'Seer' | 'Medium' | 'Hunter' | 'Mason' | 'Madman' | 'Werewolf' | 'Werehamster'
  declare type BoardState = '?' | 'Δ' | 'O' | 'X' | 'fill'
  declare type BoardPolarity = 'positive' | 'negative'
  declare type Language = 'en' | 'fr' | 'it' | 'ja'
  declare type Result = 'win' | 'lose'
  declare type AgentId = string
  declare type AgentStatus = 'alive' | 'dead' | 'death by execution' | 'death by attack' | 'death by fear' | 'unnatural death'
  declare type Team = 'villager' | 'werehamster' | 'werewolf'
  declare type Gender = 'female' | 'male'
  declare type NavigationType =
    | 'SHOW_RESULT'
    | 'RETURN_TO_LOBBY'
  declare type Agent = {
    '@id': string,
    isMine?: boolean,
    name?: { [Language]: string },
    'full name'?: { [Language]: string },
    gender?: Gender,
    image?: string,
    id?: number,
    status?: AgentStatus,
    update?: {
      date: number,
      phase: Phase
    },
    isAChoice?: boolean,
    result?: Result
  }
  declare type Avatar = {
    '@id': string,
    token: string,
    name: string,
    image: string
  }
  declare type Role = {
    '@id': string,
    name?: { [Language]: string },
    image?: string,
    isMine?: boolean,
    numberOfAgents?: number,
    board?: Array<{
      boardPolarity: BoardPolarity,
      boardAgent: {
        '@id': string,
        boardAgentId: number,
        boardAgentName: { [Language]: string },
        boardAgentImage: string
      },
      boardPhase: Phase,
      boardDate: number
    }>
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
  declare type Base = {
    '@id': string,
    '@context': string[],
    villageId: number,
    villageName: string,
    totalNumberOfAgents: number,
    token: string,
    phase: Phase,
    date: number,
    phaseTimeLimit: number,
    phaseStartTime: string,
    serverTimestamp: string,
    clientTimestamp: string,
    directionality: Directionality,
    intensionalDisclosureRange: Channel,
    extensionalDisclosureRange: [],
    myAgent: {
      '@id': string,
      myAgentId: number,
      myAgentImage: string,
      myAgentName: { [Language]: string },
      myRole: {
        '@id': string,
        myRoleImage: string,
        myRoleName: { [Language]: string }
      }
    }
  }
  declare type Chat = {
    chatIsMine: boolean,
    chatAgent: {
      '@id': string,
      chatAgentId: number,
      chatAgentName: { [Language]: string },
      chatAgentImage: string
    },
    chatId: number,
    chatCounter: number,
    chatLimit: number,
    chatInterval: string,
    chatText: string,
    chatCharacterLimit: number,
    chatLanguage: string,
    chatIsOver: boolean,
    chatUserName: string,
    chatUserAvatar: string
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
  declare type Payload<A, R, T> =
    Base &
    {
      agent: A[],
      role: R[]
    } &
    T
  declare type ResultAgent = {
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
  declare type ResultRole = {
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

  declare type ResultPayload =
    Base &
    {
      agent: ResultAgent[],
      role: ResultRole[]
    }
  declare type C2SPayload<T> =
    Base &
    T
  declare type ReadyPayload = {
    token: string,
    type: 'ready',
    villageId: number
  }
}

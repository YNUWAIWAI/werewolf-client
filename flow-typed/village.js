declare module 'village' {
  declare type Directionality = 'server to client' | 'client to server'
  declare type Channel = 'anonymousAudience' | 'grave' | 'hunter' | 'master' | 'onymousAudience' | 'private' | 'public' | 'seer' | 'werewolf'
  declare type ChatChannel = 'grave' | 'limited' | 'master' | 'private' | 'public'
  declare type InputChannel = 'limited' | 'post mortem' | 'private' | 'public'
  declare type Phase = 'day conversation' | 'day vote' | 'night' | 'post mortem' | 'results'
  declare type RoleId = 'villager' | 'seer' | 'medium' | 'hunter' | 'mason' | 'madman' | 'werewolf' | 'werehamster'
  declare type BoardState = '?' | 'Δ' | 'O' | 'X' | 'fill'
  declare type BoardPolarity = 'positive' | 'negative'
  declare type Language = 'en' | 'fr' | 'it' | 'ja'
  declare type Result = 'win' | 'lose'
  declare type TResult = Result
  declare type AgentId = string
  declare type AgentStatus = 'alive' | 'dead' | 'death by execution' | 'death by werewolf attack' | 'death by fear' | 'unnatural death'
  declare type NavigationType =
    | 'SHOW_RESULT'
    | 'RETURN_TO_LOBBY'
  declare type Agent = {
    '@id': string,
    agentIsMine: boolean,
    name: { [Language]: string },
    image: string,
    id: number,
    status: AgentStatus,
    statusUpdatePhase: Phase,
    statusUpdateDate: number,
    isAChoice: boolean,
  }
  declare type ReusltAgent = {
    '@id': string,
    agentIsMine: boolean,
    name: { [Language]: string },
    image: string,
    id: number,
    role: {
      '@id': string,
      roleName: { [Language]: string },
      roleImage: string
    },
    status: AgentStatus,
    statusUpdatePhase: Phase,
    statusUpdateDate: number,
    isAChoice: boolean,
    result: Result,
    userName: string,
    userAvatar: string
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
  declare type Role = {
    '@id': string,
    name: { [Language]: string },
    image: string,
    roleIsMine: boolean,
    numberOfAgents: number,
    board: Array<{
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
  declare type C2SPayload<T> =
    Base &
    T
  declare type ReadyPayload = {
    token: string,
    type: 'ready',
    villageId: number
  }
}

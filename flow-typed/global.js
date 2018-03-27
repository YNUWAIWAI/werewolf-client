// @flow

// ref: https://github.com/facebook/flow/blob/master/lib/core.js#L495-L502
declare class JSON {
  static parse(text: mixed, reviver?: (key: any, value: any) => any): Object;
  static stringify(
    value: any,
    replacer?: ?((key: string, value: any) => any) | Array<any>,
    space?: string | number
  ): string;
}
// ref: https://github.com/facebook/flow/blob/v0.67.0/lib/core.js#L345-L360
declare class RegExp {
  static (pattern: string | RegExp, flags?: RegExp$flags): RegExp;
  compile(): RegExp;
  constructor(pattern: string | RegExp, flags?: RegExp$flags): RegExp;
  exec(string: string): (string[] & {index: number, input: string}) | null;
  flags: string;
  global: boolean;
  ignoreCase: boolean;
  lastIndex: number;
  multiline: boolean;
  source: string;
  sticky: boolean;
  unicode: boolean;
  test(string: string): boolean;
  toString(): string;
}

declare type Directionality = 'server to client' | 'client to server'
declare type Channel = 'anonymousAudience' | 'grave' | 'hunter' | 'master' | 'onymousAudience' | 'private' | 'public' | 'seer' | 'werewolf'
declare type ChatChannel = 'grave' | 'limited' | 'master' | 'private' | 'public'
declare type InputChannel = 'limited' | 'private' | 'public'
declare type Phase = 'day conversation' | 'day vote' | 'night' | 'post mortem' | 'results'
declare type RoleId = 'villager' | 'seer' | 'medium' | 'hunter' | 'mason' | 'madman' | 'werewolf' | 'werehumster'
declare type BoardState = '?' | 'Δ' | 'O' | 'X' | 'fill' | 'fix'
declare type BoardPolarity = 'positive' | 'negative'
declare type Language = 'ja' | 'en'
declare type Result = 'win' | 'lose'
declare type TResult = Result
declare type AgentStatus = 'alive' | 'dead' | 'death by execution' | 'death by werewolf attack' | 'death by fear' | 'unnatural death'
declare type Agent = {
  '@id': string,
  'agentIsMine': boolean,
  'name': { [Language]: string },
  'image': string,
  'id': number,
  'status': AgentStatus,
  'statusUpdatePhase': Phase,
  'statusUpdateDate': number,
  'isAChoice': boolean,
}
declare type ReusltAgent = {
  '@id': string,
  'agentIsMine': boolean,
  'name': { [Language]: string },
  'image': string,
  'id': number,
  'role': {
    '@id': string,
    'roleName': { [Language]: string },
    'roleImage': string
  },
  'status': AgentStatus,
  'statusUpdatePhase': Phase,
  'statusUpdateDate': number,
  'isAChoice': boolean,
  'result': Result,
  'userName': string,
  'userAvatar': string
}
declare type Role = {
  '@id': string,
  'name': { [Language]: string },
  'image': string,
  'roleIsMine': boolean,
  'numberOfAgents': number,
  'board': Array<{
    'boardPolarity': BoardPolarity,
    'boardAgent': {
      '@id': string,
      'boardAgentId': number,
      'boardAgentName': { [Language]: string },
      'boardAgentImage': string
    },
    'boardPhase': Phase,
    'boardDate': number
  }>
}
type Base = {
  '@id': string,
  '@context': string[],
  'villageId': number,
  'villageName': string,
  'totalNumberOfAgents': number,
  'token': string,
  'phase': Phase,
  'date': number,
  'phaseTimeLimit': number,
  'phaseStartTime': string,
  'serverTimeStamp': string,
  'clientTimestamp': string,
  'directionality': Directionality,
  'intensionalDisclosureRange': Channel,
  'extensionalDisclosureRange': []
}
declare type Chat = {
  chatIsMine: boolean,
  chatAgent: {
    '@id': string,
    chatAgentId: number,
    chatAgentName: string,
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
declare type Payload<A, R, T> =
  Base &
  {
    agent: A[],
    role: R[]
  } &
  T

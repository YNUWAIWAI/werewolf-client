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

declare type Directionality = 'server to client' | 'client to server'
declare type Channel = 'anonymousAudience' | 'grave' | 'hunter' | 'master' | 'onymousAudience' | 'private' | 'public' | 'seer' | 'werewolf'
declare type Phase = 'day conversation' | 'day vote' | 'night' | 'post mortem' | 'results'
declare type RoleId = 'villager' | 'seer' | 'medium' | 'hunter' | 'mason' | 'madman' | 'werewolf' | 'werehumster'
declare type BoardState = '?' | 'Δ' | 'O' | 'X' | 'fill' | 'fix'
declare type Language = 'ja' | 'en'
declare type Result = 'win' | 'lose'
declare type AgentStatus = 'alive' | 'dead' | 'death by execution' | 'death by werewolf attack' | 'death by fear' | 'unnatural death'
declare type Agent = {
  '@id': string,
  '@context': string[],
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
  'id': number,
  'numberOfAgents': number
}

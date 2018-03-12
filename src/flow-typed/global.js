declare type RoleId = 'villager' | 'seer' | 'medium' | 'hunter' | 'mason' | 'madman' | 'werewolf' | 'werehumster'
declare type BoardState = '?' | 'Δ' | 'O' | 'X' | 'fill' | 'fix'
declare type Phase = 'day conversation' | 'day vote' | 'night' | 'results' | 'post mortem'
declare type Language = 'ja' | 'en'
declare type Result = 'win' | 'lose'
declare type AgentStatus = 'alive' | 'dead' | 'death by execution' | 'death by werewolf attack' | 'death by fear' | 'unnatural death'
declare type Agent = {
  '@id': string,
  'agentIsMine': boolean,
  'name': { [Language]: string },
  'image': string,
  'id': number,
  'role'?: {
    '@id': string,
    'roleName': { [Language]: string },
    'roleImage': string
  },
  'status': AgentStatus,
  'statusUpdatePhase': Phase,
  'statusUpdateDate': number,
  'isAChoice': boolean,
  'result': Result
}

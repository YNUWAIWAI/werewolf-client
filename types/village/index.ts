/* eslint no-unused-vars: 0, @typescript-eslint/no-unused-vars: 0 */
export * from './payload'

export const enum BaseContext {
  Base = 'https://werewolf.world/village/context/0.3/base.jsonld',
  Board = 'https://werewolf.world/village/context/0.3/board.jsonld',
  Character = 'https://werewolf.world/village/context/0.3/character.jsonld',
  Chat = 'https://werewolf.world/village/context/0.3/chat.jsonld',
  Error = 'https://werewolf.world/village/context/0.3/error.jsonld',
  FlavorText = 'https://werewolf.world/village/context/0.3/flavorText.jsonld',
  Role = 'https://werewolf.world/village/context/0.3/role.jsonld',
  Scroll = 'https://werewolf.world/village/context/0.3/scroll.jsonld',
  Star = 'https://werewolf.world/village/context/0.3/star.jsonld',
  Vote = 'https://werewolf.world/village/context/0.3/vote.jsonld',
  VotingResult = 'https://werewolf.world/village/context/0.3/votingResult.jsonld'
}
export const enum BoardState {
  CIRCLE = 'O',
  CROSS = 'X',
  FILL = 'fill',
  QUESTION = '?',
  TRIANGLE = 'Δ'
}
export const enum Channel {
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
export type CharacterId = string
export const enum CharacterStatus {
  alive = 'alive',
  dead = 'dead',
  deathByAttack = 'death by attack',
  deathByExecution = 'death by execution',
  deathByFear = 'death by fear',
  unnaturalDeath = 'unnatural death'
}
export const enum ChatChannel {
  grave = 'grave',
  master = 'master',
  private = 'private',
  public = 'public',
  werewolf = 'werewolf'
}
export type ChatId = string
export const enum ChatItemType {
  delimeter = 'delimeter',
  item = 'item'
}
export const enum Context {
  Avatar = 'https://werewolf.world/village/context/0.3/avatar.jsonld',
  Base = 'https://werewolf.world/village/context/0.3/base.jsonld',
  Board = 'https://werewolf.world/village/context/0.3/board.jsonld',
  BoardResult = 'https://werewolf.world/village/context/0.3/boardResult.jsonld',
  Character = 'https://werewolf.world/village/context/0.3/character.jsonld',
  Chat = 'https://werewolf.world/village/context/0.3/chat.jsonld',
  ChatSettings = 'https://werewolf.world/village/context/0.3/chatSettings.jsonld',
  Error = 'https://werewolf.world/village/context/0.3/error.jsonld',
  FlavorText = 'https://werewolf.world/village/context/0.3/flavorText.jsonld',
  Role = 'https://werewolf.world/village/context/0.3/role.jsonld',
  Scroll = 'https://werewolf.world/village/context/0.3/scroll.jsonld',
  Star = 'https://werewolf.world/village/context/0.3/star.jsonld',
  Village = 'https://werewolf.world/village/context/0.3/village.jsonld',
  Vote = 'https://werewolf.world/village/context/0.3/vote.jsonld',
  VotingResult = 'https://werewolf.world/village/context/0.3/votingResult.jsonld'
}
export const enum Directionality {
  serverToClient = 'server to client',
  clientToServer = 'client to server'
}
export const enum Gender {
  female = 'female',
  male = 'male'
}
export const enum InputChannel {
  grave = 'grave',
  postMortem = 'post mortem',
  private = 'private',
  public = 'public',
  werewolf = 'werewolf'
}
export const enum Language {
  en = 'en',
  fr = 'fr',
  it = 'it',
  ja = 'ja'
}
export interface LanguageMap {
  [Language.en]: string
  [Language.fr]?: string
  [Language.it]?: string
  [Language.ja]?: string
}
export type Payload$AgentId = number
export type Payload$ChatId = number
export const enum Phase {
  flavorText = 'flavor text',
  morning = 'morning',
  night = 'night',
  noon = 'noon',
  postMortem = 'post mortem',
  result = 'result'
}
export const enum Polarity {
  circle = 'O',
  cross = 'X',
  negative = 'negative',
  positive = 'positive',
  question = '?',
  triangle = 'Δ'
}
export const enum Result {
  lose = 'lose',
  win = 'win'
}
export const enum RoleId {
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
export const enum Severity {
  error = 'error',
  warning = 'warning'
}
export const enum SummaryType {
  audience = 'audience',
  character = 'character'
}
export const enum Team {
  villager = 'villager',
  werehamster = 'werehamster',
  werewolf = 'werewolf'
}
export type Token = string
export type VillageId = number

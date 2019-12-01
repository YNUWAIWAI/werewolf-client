/*
  'https://werewolf.world/village/schema/0.3/role.json'
*/
import {
  Context,
  LanguageMap
} from '..'

export interface Role {
  '@context': Context.Role
  '@id': string
  image: string
  isMine: boolean
  name: LanguageMap
  numberOfPlayers: number
}

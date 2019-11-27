/*
  'https://werewolf.world/village/schema/0.3/village.json'
*/
import {
  Context,
  Language,
  VillageId
} from '..'

export interface Village {
  '@context': Context.Village
  '@id': string
  id: VillageId
  lang: Language
  name: string
  totalNumberOfPlayers: number
}

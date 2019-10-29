/*
  'https://werewolf.world/village/schema/0.3/character.json'
*/
import {
  CharacterStatus,
  Context,
  Gender,
  LanguageMap,
  Payload$CharacterId,
  Result
} from '..'
import {Time} from './time'

export interface Character {
  '@context': Context.Character
  '@id': string
  fullName: LanguageMap
  gender: Gender
  id: Payload$CharacterId
  image: string
  isAChoice: boolean
  isMine: boolean
  name: LanguageMap
  result: Result
  status: CharacterStatus
  update: {
    '@id': Time['@id']
    day: Time['day']
    phase: Time['phase']
  }
}

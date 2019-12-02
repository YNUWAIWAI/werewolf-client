/*
  'https://werewolf.world/village/schema/0.3/starMessage.json'
*/
import {Avatar} from './avatar'
import {Base} from './base'
import {Star} from './star'

export interface StarMessage {
  '@context': Base['@context']
  '@id': Base['@id']
  avatar?: Base['avatar']
  clientTimestamp: Base['clientTimestamp']
  day: Base['day']
  directionality: Base['directionality']
  extensionalDisclosureRange: Base['extensionalDisclosureRange']
  intensionalDisclosureRange: Base['intensionalDisclosureRange']
  myCharacter: Base['myCharacter']
  phase: Base['phase']
  phaseStartTime: Base['phaseStartTime']
  phaseTimeLimit: Base['phaseTimeLimit']
  serverTimestamp: Base['serverTimestamp']
  star: {
    '@context': Star['@context']
    '@id': Star['@id']
    clientTimestamp: Base['clientTimestamp']
    isMarked: boolean
    serverTimestamp: Base['serverTimestamp']
    token: Avatar['token']
  }
  token: Base['token']
  village: Base['village']
}

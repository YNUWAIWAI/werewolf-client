/*
  'https://werewolf.world/village/schema/0.3/voteMessage.json'
*/
import {Base} from './base'
import {Character} from './character'
import {PayloadBase} from '../payload'

export interface VoteMessage extends PayloadBase {
  '@context': Base['@context']
  '@id': Base['@id']
  avatar?: Base['avatar']
  character?: {
    '@context': Character['@context']
    '@id': Character['@id']
    id: Character['id']
    image: Character['image']
    name: Character['name']
  }
  clientTimestamp: Base['clientTimestamp']
  day: Base['day']
  directionality: Base['directionality']
  extensionalDisclosureRange: Base['extensionalDisclosureRange']
  intensionalDisclosureRange: Base['intensionalDisclosureRange']
  myCharacter?: Base['myCharacter']
  phase: Base['phase']
  phaseStartTime: Base['phaseStartTime']
  phaseTimeLimit: Base['phaseTimeLimit']
  serverTimestamp: Base['serverTimestamp']
  token: Base['token']
  village: Base['village']
}

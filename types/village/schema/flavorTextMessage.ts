/*
  'https://werewolf.world/village/schema/0.3/flavorTextMessage.json'
*/
import {Base} from './base'
import {ChatMessage} from './chatMessage'
import {PayloadBase} from '../payload'

export interface FlavorTextMessage extends PayloadBase {
  '@context': Base['@context']
  '@id': Base['@id']
  clientTimestamp: Base['clientTimestamp']
  day: Base['day']
  directionality: Base['directionality']
  extensionalDisclosureRange: Base['extensionalDisclosureRange']
  flavorText: ChatMessage[]
  intensionalDisclosureRange: Base['intensionalDisclosureRange']
  phase: Base['phase']
  phaseStartTime: Base['phaseStartTime']
  phaseTimeLimit: Base['phaseTimeLimit']
  serverTimestamp: Base['serverTimestamp']
  token: Base['token']
  village: Base['village']
}

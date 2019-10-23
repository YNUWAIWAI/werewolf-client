/*
  'https://werewolf.world/village/schema/0.3/scrollMessage.json'
*/
import {Base} from './base'
import {PayloadBase} from '../payload'
import {Scroll} from './scroll'

export interface ScrollMessage extends PayloadBase {
  '@context': Base['@context']
  '@id': Base['@id']
  clientTimestamp: Base['clientTimestamp']
  day: Base['day']
  directionality: Base['directionality']
  extensionalDisclosureRange: Base['extensionalDisclosureRange']
  intensionalDisclosureRange: Base['intensionalDisclosureRange']
  nodeId: Scroll['nodeId']
  offsetHeight: Scroll['offsetHeight']
  phase: Base['phase']
  phaseStartTime: Base['phaseStartTime']
  phaseTimeLimit: Base['phaseTimeLimit']
  scrollHeight: Scroll['scrollHeight']
  scrollTop: Scroll['scrollTop']
  serverTimestamp: Base['serverTimestamp']
  token: Base['token']
  village: Base['village']
}

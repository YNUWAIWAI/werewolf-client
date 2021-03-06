/*
  'https://werewolf.world/village/schema/0.3/chatMessage.json'
*/
import {Base} from './base'
import {Character} from './character'
import {Chat} from './chat'

export interface ChatMessage {
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
  counter?: Chat['counter']
  day: Base['day']
  directionality: Base['directionality']
  extensionalDisclosureRange: Base['extensionalDisclosureRange']
  id?: Chat['id']
  intensionalDisclosureRange: Base['intensionalDisclosureRange']
  interval?: Chat['interval']
  isFromServer: Chat['isFromServer']
  isMine: Chat['isMine']
  isOver: Chat['isOver']
  maxLengthOfUnicodeCodePoints: Chat['maxLengthOfUnicodeCodePoints']
  maxNumberOfChatMessages?: Chat['maxNumberOfChatMessages']
  myCharacter?: Base['myCharacter']
  phase: Base['phase']
  phaseStartTime: Base['phaseStartTime']
  phaseTimeLimit: Base['phaseTimeLimit']
  serverTimestamp: Base['serverTimestamp']
  text: Chat['text']
  token: Base['token']
  village: Base['village']
}

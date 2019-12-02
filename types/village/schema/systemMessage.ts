/*
  'https://werewolf.world/village/schema/0.3/systemMessage.json'
*/
import {Avatar} from './avatar'
import {Base} from './base'
import {BoardResult} from './boardResult'
import {Character} from './character'
import {Role} from './role'
import {Time} from './time'
import {VotingResult} from './votingResult'

export interface SystemMessage {
  '@context': Base['@context']
  '@id': Base['@id']
  avatar?: Base['avatar']
  character?: {
    '@context': Character['@context']
    '@id': Character['@id']
    avatar?: {
      '@context': Avatar['@context']
      '@id': Avatar['@id']
      image: Avatar['image']
      name: Avatar['name']
      token: Avatar['token']
    }
    id: Character['id']
    image: Character['image']
    isAChoice?: Character['isAChoice']
    isMine: Character['isMine']
    name: Character['name']
    result?: Character['result']
    role?: {
      '@context': Role['@context']
      '@id': Role['@id']
      image: Role['image']
      name: Role['name']
    }
    status: Character['status']
    update?: Character['update']
  }[]
  clientTimestamp: Base['clientTimestamp']
  day: Base['day']
  directionality: Base['directionality']
  extensionalDisclosureRange: Base['extensionalDisclosureRange']
  intensionalDisclosureRange: Base['intensionalDisclosureRange']
  myCharacter?: Base['myCharacter']
  phase: Base['phase']
  phaseStartTime: Base['phaseStartTime']
  phaseTimeLimit: Base['phaseTimeLimit']
  role?: {
    '@context': Role['@context']
    '@id': Role['@id']
    board?: {
      '@context': BoardResult['@context']
      '@id': BoardResult['@id']
      character: {
        '@context': Character['@context']
        '@id': Character['@id']
        id: Character['id']
        image: Character['image']
        name: Character['name']
      }
      day: Time['day']
      phase: Time['phase']
      polarity: BoardResult['polarity']
    }[]
    character?: {
      '@context': Character['@context']
      '@id': Character['@id']
      id: Character['id']
      image: Character['image']
      name: Character['name']
    }[]
    isMine: Role['isMine']
    image: Role['image']
    name: Role['name']
    numberOfPlayers: Role['numberOfPlayers']
  }[]
  serverTimestamp: Base['serverTimestamp']
  token: Base['token']
  village: Base['village']
  votingResultsDetails?: VotingResult['votingResultsDetails']
  votingResultsSummary?: VotingResult['votingResultsSummary']
}

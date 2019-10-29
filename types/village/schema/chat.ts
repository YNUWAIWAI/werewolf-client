/*
'https://werewolf.world/village/context/0.3/chat.jsonld'
  dependency;
    'playerMessage'
*/
import {
  Language,
  Payload$ChatId
} from '..'

export interface Chat {
  counter: number
  id: Payload$ChatId
  interval: string
  isFromServer: boolean
  isMine: boolean
  isOver: boolean
  maxLengthOfUnicodeCodePoints: number
  maxNumberOfChatMessages: number
  text: {
    '@language': Language
    '@value': string
  }
}

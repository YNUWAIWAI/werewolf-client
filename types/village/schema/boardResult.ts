/*
  'https://werewolf.world/village/schema/0.3/boardResult.json'
*/
import {
  Context,
  Polarity
} from '..'

export interface BoardResult {
  '@context': Context.BoardResult
  '@id': string
  polarity: Polarity
}

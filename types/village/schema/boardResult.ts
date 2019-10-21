/*
  'https://werewolf.world/village/schema/0.3/boardResult.json'
*/
import {
  BoardState,
  Context,
  Polarity
} from '..'

export interface BoardResult {
  '@context': Context.BoardResult
  '@id': string
  polarity: Polarity | BoardState
}

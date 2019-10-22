/*
  'https://werewolf.world/lobby/schema/0.3/server2client/searchResult.json'
*/
import {
  PayloadType,
  Village
} from '../..'

export interface SearchResult {
  error: string | null
  type: PayloadType.searchResult
  villages: Village[]
}

/*
  'https://werewolf.world/lobby/schema/0.3/server2client/searchResult.json'
*/
import {
  PayloadBase,
  PayloadType
} from '../../payload'
import {Village} from '../..'

export interface SearchResult extends PayloadBase {
  error: string | null
  type: PayloadType.searchResult
  villages: Village[]
}

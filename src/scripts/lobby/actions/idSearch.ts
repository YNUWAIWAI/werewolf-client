import {IdSearch} from '../constants/ActionTypes'

export type IdSearch$ChangeSearchId = {
  id: number
  type: IdSearch.CHANGE_SEARCH_ID
}
export const changeSearchId = (id: number): IdSearch$ChangeSearchId => ({
  id,
  type: IdSearch.CHANGE_SEARCH_ID
})

export type IdSearch$ChangeValidity = {
  propName: string
  type: IdSearch.CHANGE_VALIDITY
  validity: boolean
}
const changeValidity = (propName: string) => (validity: boolean): IdSearch$ChangeValidity => ({
  propName,
  type: IdSearch.CHANGE_VALIDITY,
  validity
})

export const idSearch = {
  changeSearchId,
  changeValidity
}

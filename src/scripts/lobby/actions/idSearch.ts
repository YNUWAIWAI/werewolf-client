import * as ActionTypes from '../constants/ActionTypes'

// eslint-disable-next-line @typescript-eslint/no-namespace
export declare namespace IdSearch {
  type ChangeSearchId = {
    id: number
    type: ActionTypes.IdSearch.CHANGE_SEARCH_ID
  }
  type ChangeValidity = {
    propName: string
    type: ActionTypes.IdSearch.CHANGE_VALIDITY
    validity: boolean
  }
}

const changeSearchId = (id: number): IdSearch.ChangeSearchId => ({
  id,
  type: ActionTypes.IdSearch.CHANGE_SEARCH_ID
})
const changeValidity = (propName: string) => (validity: boolean): IdSearch.ChangeValidity => ({
  propName,
  type: ActionTypes.IdSearch.CHANGE_VALIDITY,
  validity
})

export const idSearch = {
  changeSearchId,
  changeValidity
}

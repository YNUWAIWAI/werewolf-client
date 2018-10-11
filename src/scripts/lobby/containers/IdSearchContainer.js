// @flow
import IdSearch, {type DispatchProps, type StateProps} from '../components/templates/IdSearch'
import {
  type IdSearch$ChangeSearchId,
  type IdSearch$ChangeValidity,
  type SelectVillage,
  changeSearchId,
  changeValidity,
  selectVillage
} from '../actions'
import type {Dispatch} from 'redux'
import type {ReducerState} from '../reducers'
import {connect} from 'react-redux'

type Action =
  | IdSearch$ChangeSearchId
  | IdSearch$ChangeValidity
  | SelectVillage

const mapStateToProps = (state: ReducerState): StateProps => state.idSearch
const mapDispatchToProps = (dispatch: Dispatch<Action>): DispatchProps => ({
  handleSearchIdChange: id => {
    dispatch(changeSearchId(id))
  },
  handleValidityChange: validity => {
    dispatch(changeValidity('idSearch')('id')(validity))
  },
  selectVillage: id => () => {
    dispatch(selectVillage(id))
  }
})
const IdSearchContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(IdSearch)

export default IdSearchContainer

// @flow
import {
  type ChangeSearchId,
  type SelectVillage,
  changeSearchId,
  selectVillage
} from '../actions'
import IdSearch, {type DispatchProps, type StateProps} from '../components/IdSearch'
import type {Dispatch} from 'redux'
import type {ReducerState} from '../reducers'
import {connect} from 'react-redux'

type Action =
  | ChangeSearchId
  | SelectVillage

const mapStateToProps = (state: ReducerState): StateProps => state.idSearch
const mapDispatchToProps = (dispatch: Dispatch<Action>): DispatchProps => ({
  changeSearchId: id => {
    dispatch(changeSearchId(id))
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

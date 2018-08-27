// @flow
import {type ChangeSearchId, changeSearchId} from '../actions'
import IdSearch, {type DispatchProps, type StateProps} from '../components/IdSearch'
import type {Dispatch} from 'redux'
import type {ReducerState} from '../reducers'
import {connect} from 'react-redux'

type Action =
  | ChangeSearchId

const mapStateToProps = (state: ReducerState): StateProps => state.idSearch
const mapDispatchToProps = (dispatch: Dispatch<Action>): DispatchProps => ({
  changeSearchId: id => {
    dispatch(changeSearchId(id))
  }
})
const IdSearchContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(IdSearch)

export default IdSearchContainer

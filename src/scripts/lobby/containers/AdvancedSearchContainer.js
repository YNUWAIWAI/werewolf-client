// @flow
import AdvancedSearch, {type DispatchProps, type StateProps} from '../components/AdvancedSearch'
import {type SelectVillage, selectVillage} from '../actions'
import type {Dispatch} from 'redux'
import type {ReducerState} from '../reducers'
import {connect} from 'react-redux'

type Action =
  | SelectVillage

const mapStateToProps = (state: ReducerState): StateProps => state.advancedSearch
const mapDispatchToProps = (dispatch: Dispatch<Action>): DispatchProps => ({
  selectVillage: id => () => {
    dispatch(selectVillage(id))
  }
})
const AdvancedSearchContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(AdvancedSearch)

export default AdvancedSearchContainer

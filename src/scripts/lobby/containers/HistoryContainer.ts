import {
  History as Component,
  DispatchProps,
  StateProps
} from '../components/templates/History'
import {
  SelectVillage,
  selectVillage
} from '../actions'
import {Dispatch} from 'redux'
import {ReducerState} from '../reducers'
import {connect} from 'react-redux'

type Action =
  | SelectVillage

const mapStateToProps = (state: ReducerState): StateProps => state.history
const mapDispatchToProps = (dispatch: Dispatch<Action>): DispatchProps => ({
  selectVillage: id => () => {
    dispatch(selectVillage(id))
  }
})

export const HistoryContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Component)

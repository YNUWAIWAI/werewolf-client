import {
  Menu as Component,
  DispatchProps,
  StateProps
} from '../components/organisms/Menu'
import {
  Transition,
  transition
} from '../actions'
import {Dispatch} from 'redux'
import {ReducerState} from '../reducers'
import {connect} from 'react-redux'

type Action =
  | Transition

const mapStateToProps = (state: ReducerState): StateProps => ({
  navigatable: !state.obfucator.visible
})
const mapDispatchToProps = (dispatch: Dispatch<Action>): DispatchProps => ({
  transition: target => {
    dispatch(transition(target))
  }
})

export const MenuContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Component)

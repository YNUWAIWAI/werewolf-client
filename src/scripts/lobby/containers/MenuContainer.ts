import Component, {
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
  navigative: !state.obfucator.visible
})
const mapDispatchToProps = (dispatch: Dispatch<Action>): DispatchProps => ({
  transition: target => {
    dispatch(transition(target))
  }
})
const Container = connect(
  mapStateToProps,
  mapDispatchToProps
)(Component)

export default Container

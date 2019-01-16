import ConnectingToRobotPlayer, {DispatchProps, StateProps} from '../components/templates/ConnectingToRobotPlayer'
import {
  Transition,
  transition
} from '../actions'
import {Dispatch} from 'redux'
import {ReducerState} from '../reducers'
import {connect} from 'react-redux'

type Action =
  | Transition

const mapStateToProps = (state: ReducerState): StateProps => state.connectingToRobotPlayer
const mapDispatchToProps = (dispatch: Dispatch<Action>): DispatchProps => ({
  transition: target => {
    dispatch(transition(target))
  }
})

const ConnectingToRobotPlayerContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(ConnectingToRobotPlayer)

export default ConnectingToRobotPlayerContainer

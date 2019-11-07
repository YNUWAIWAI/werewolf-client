import SelectRobotAvatar, {
  DispatchProps,
  StateProps
} from '../components/templates/SelectRobotAvatar'
import {
  Transition,
  transition
} from '../actions'
import {Dispatch} from 'redux'
import {ReducerState} from '../reducers'
import {connect} from 'react-redux'

type Action =
  | Transition

const mapStateToProps = (state: ReducerState): StateProps => state.selectHumanAvatar
const mapDispatchToProps = (dispatch: Dispatch<Action>): DispatchProps => ({
  transition: target => {
    dispatch(transition(target))
  }
})
const SelectRobotAvatarContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(SelectRobotAvatar)

export default SelectRobotAvatarContainer

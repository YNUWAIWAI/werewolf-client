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

const mapStateToProps = (state: ReducerState): StateProps => state.selectRobotAvatar
const mapDispatchToProps = (dispatch: Dispatch<Action>): DispatchProps => ({
  handleAccept: () => {
    console.log('accept')
  },
  handleAvatarNameChange: valid => value => {
    console.log(valid, value)
  },
  renewAccessToken: () => {
    console.log('renewAccessToken')
  },
  transition: target => {
    dispatch(transition(target))
  }
})
const SelectRobotAvatarContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(SelectRobotAvatar)

export default SelectRobotAvatarContainer

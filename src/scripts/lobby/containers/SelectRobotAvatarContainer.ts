import SelectRobotAvatar, {
  DispatchProps,
  StateProps
} from '../components/templates/SelectRobotAvatar'
import {Dispatch} from 'redux'
import {ReducerState} from '../reducers'
import {connect} from 'react-redux'

type Action =
  | {type: string}

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
  }
})
const SelectRobotAvatarContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(SelectRobotAvatar)

export default SelectRobotAvatarContainer

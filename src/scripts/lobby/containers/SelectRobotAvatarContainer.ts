import * as ActionTypes from '../constants/ActionTypes'
import SelectRobotAvatar, {
  DispatchProps,
  StateProps
} from '../components/templates/SelectRobotAvatar'
import {
  SelectRobotAvatar$ChangeAvatarCheckbox,
  changeAvatarCheckbox
} from '../actions'
import {Dispatch} from 'redux'
import {ReducerState} from '../reducers'
import {connect} from 'react-redux'

type Action =
  | SelectRobotAvatar$ChangeAvatarCheckbox

const mapStateToProps = (state: ReducerState): StateProps => state.selectRobotAvatar
const mapDispatchToProps = (dispatch: Dispatch<Action>): DispatchProps => ({
  handleAccept: () => {
    console.log('accept')
  },
  handleAvatarNameChange: valid => value => {
    console.log(valid, value)
  },
  handleSelectAvatar: id => () => {
    dispatch(changeAvatarCheckbox(ActionTypes.Scope.SelectRobotAvatar)(id))
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

import * as ActionTypes from '../constants/ActionTypes'
import {
  SelectRobotAvatar$ChangeAvatarCheckbox,
  changeAvatarCheckbox
} from '../actions'
import SelectRobotAvatarTableBody, {
  DispatchProps,
  StateProps
} from '../components/molecules/SelectRobotAvatarTableBody'
import {Dispatch} from 'redux'
import {ReducerState} from '../reducers'
import {connect} from 'react-redux'

type Action =
  | SelectRobotAvatar$ChangeAvatarCheckbox

const mapStateToProps = (state: ReducerState): StateProps => ({
  avatar: state.selectRobotAvatar.avatar
})
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
const SelectRobotAvatarTableBodyContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(SelectRobotAvatarTableBody)

export default SelectRobotAvatarTableBodyContainer

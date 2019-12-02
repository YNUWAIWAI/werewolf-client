import * as ActionTypes from '../constants/ActionTypes'
import {
  SelectRobotAvatar$ChangeCheckbox,
  SelectRobotAvatar$HoverAvatar,
  hoverAvatar,
  selectRobotAvatar
} from '../actions'
import SelectRobotAvatarTableBody, {
  DispatchProps,
  StateProps
} from '../components/molecules/SelectRobotAvatarTableBody'
import {Dispatch} from 'redux'
import {ReducerState} from '../reducers'
import {connect} from 'react-redux'

type Action =
  | SelectRobotAvatar$ChangeCheckbox
  | SelectRobotAvatar$HoverAvatar

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
  handleHoverAvatar: id => () => {
    dispatch(hoverAvatar(ActionTypes.Scope.SelectRobotAvatar)(id))
  },
  handleSelectAvatar: id => () => {
    dispatch(selectRobotAvatar.changeCheckbox(id))
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

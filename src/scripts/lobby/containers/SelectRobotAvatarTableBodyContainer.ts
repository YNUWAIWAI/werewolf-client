import {
  SelectRobotAvatar$AutorizationRequestAccepted,
  SelectRobotAvatar$ChangeAvatarName,
  SelectRobotAvatar$ChangeCheckbox,
  SelectRobotAvatar$HoverAvatar,
  SelectRobotAvatar$RenewAvatarToken,
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
  | SelectRobotAvatar$AutorizationRequestAccepted
  | SelectRobotAvatar$ChangeAvatarName
  | SelectRobotAvatar$ChangeCheckbox
  | SelectRobotAvatar$HoverAvatar
  | SelectRobotAvatar$RenewAvatarToken

const mapStateToProps = (state: ReducerState): StateProps => ({
  avatar: state.selectRobotAvatar.avatar
})
const mapDispatchToProps = (dispatch: Dispatch<Action>): DispatchProps => ({
  handleAccept: accessToken => () => {
    dispatch(selectRobotAvatar.autorizationRequestAccepted(accessToken))
  },
  handleAvatarNameChange: token => valid => value => {
    if (valid) {
      dispatch(selectRobotAvatar.changeAvatarName(token)(value))
    }
  },
  handleHoverAvatar: id => () => {
    dispatch(selectRobotAvatar.hoverAvatar(id))
  },
  handleSelectAvatar: id => () => {
    dispatch(selectRobotAvatar.changeCheckbox(id))
  },
  renewAccessToken: token => () => {
    dispatch(selectRobotAvatar.renewAvatarToken(token))
  }
})
const SelectRobotAvatarTableBodyContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(SelectRobotAvatarTableBody)

export default SelectRobotAvatarTableBodyContainer

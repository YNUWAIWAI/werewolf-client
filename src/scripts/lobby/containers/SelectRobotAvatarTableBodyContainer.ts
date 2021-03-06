import {
  SelectRobotAvatarTableBody as Component,
  DispatchProps,
  StateProps
} from '../components/molecules/SelectAvatar/SelectRobotAvatarTableBody'
import {
  SelectRobotAvatar,
  selectRobotAvatar
} from '../actions'
import {Dispatch} from 'redux'
import {ReducerState} from '../reducers'
import {connect} from 'react-redux'

type Action =
  | SelectRobotAvatar.AutorizationRequestAccepted
  | SelectRobotAvatar.ChangeAvatarLanguage
  | SelectRobotAvatar.ChangeAvatarName
  | SelectRobotAvatar.ChangeCheckbox
  | SelectRobotAvatar.HoverAvatar
  | SelectRobotAvatar.RenewAvatarToken
  | SelectRobotAvatar.ShowAvatarImageSelect

const mapStateToProps = (state: ReducerState): StateProps => ({
  avatar: state.selectRobotAvatar.avatar,
  navigatable: !state.obfucator.visible
})
const mapDispatchToProps = (dispatch: Dispatch<Action>): DispatchProps => ({
  handleAccept: accessToken => () => {
    dispatch(selectRobotAvatar.autorizationRequestAccepted(accessToken))
  },
  handleAvatarImageClick: token => image => {
    dispatch(selectRobotAvatar.showAvatarImageSelect(token)(image))
  },
  handleAvatarLanguageChange: token => valid => value => {
    if (valid) {
      dispatch(selectRobotAvatar.changeAvatarLanguage(token)(value))
    }
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

export const SelectRobotAvatarTableBodyContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Component)

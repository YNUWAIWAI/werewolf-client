import SelectRobotAvatar, {StateProps} from '../components/templates/SelectRobotAvatar'
import {ReducerState} from '../reducers'
import {connect} from 'react-redux'

const mapStateToProps = (state: ReducerState): StateProps => ({
  createNewAvatarCommand: state.selectRobotAvatar.createNewAvatarCommand,
  menuItems: state.selectRobotAvatar.menuItems,
  selectAvatarCommand: state.selectRobotAvatar.selectAvatarCommand
})
const SelectRobotAvatarContainer = connect(
  mapStateToProps
)(SelectRobotAvatar)

export default SelectRobotAvatarContainer

import SelectHumanAvatar, {StateProps} from '../components/templates/SelectHumanAvatar'
import {ReducerState} from '../reducers'
import {connect} from 'react-redux'

const mapStateToProps = (state: ReducerState): StateProps => ({
  createNewAvatarCommand: state.selectHumanAvatar.createNewAvatarCommand,
  menuItems: state.selectHumanAvatar.menuItems,
  selectAvatarCommand: state.selectHumanAvatar.selectAvatarCommand
})
const SelectHumanAvatarContainer = connect(
  mapStateToProps
)(SelectHumanAvatar)

export default SelectHumanAvatarContainer

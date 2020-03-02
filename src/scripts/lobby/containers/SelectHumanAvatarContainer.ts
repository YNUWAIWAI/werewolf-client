import Component, {StateProps} from '../components/templates/SelectHumanAvatar'
import {ReducerState} from '../reducers'
import {connect} from 'react-redux'

const mapStateToProps = (state: ReducerState): StateProps => ({
  command: state.selectHumanAvatar.command,
  menuItems: state.selectHumanAvatar.menuItems
})
const SelectHumanAvatarContainer = connect(
  mapStateToProps
)(Component)

export default SelectHumanAvatarContainer

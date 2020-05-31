import {
  CreateNewHumanAvatar as Component,
  StateProps
} from '../components/templates/CreateNewHumanAvatar'
import {ReducerState} from '../reducers'
import {connect} from 'react-redux'

const mapStateToProps = (state: ReducerState): StateProps => ({
  command: state.createNewHumanAvatar.command,
  menuItems: state.createNewHumanAvatar.menuItems
})

export const CreateNewHumanAvatarContainer = connect(
  mapStateToProps
)(Component)

import * as ActionTypes from '../constants/ActionTypes'
import SelectHumanAvatar, {
  DispatchProps,
  StateProps
} from '../components/templates/SelectHumanAvatar'
import {
  SelectHumanAvatar$ChangeAvatarCheckbox,
  changeAvatarCheckbox
} from '../actions'
import {Dispatch} from 'redux'
import {ReducerState} from '../reducers'
import {connect} from 'react-redux'

type Action =
  | SelectHumanAvatar$ChangeAvatarCheckbox

const mapStateToProps = (state: ReducerState): StateProps => state.selectHumanAvatar
const mapDispatchToProps = (dispatch: Dispatch<Action>): DispatchProps => ({
  handleAvatarNameChange: valid => value => {
    console.log(valid, value)
  },
  handleSelectAvatar: id => () => {
    dispatch(changeAvatarCheckbox(ActionTypes.Scope.SelectHumanAvatar)(id))
  }
})
const SelectHumanAvatarContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(SelectHumanAvatar)

export default SelectHumanAvatarContainer

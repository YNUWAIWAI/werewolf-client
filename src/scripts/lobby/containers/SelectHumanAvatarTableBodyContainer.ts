
import * as ActionTypes from '../constants/ActionTypes'
import {
  SelectHumanAvatar$ChangeAvatarCheckbox,
  changeAvatarCheckbox
} from '../actions'
import SelectHumanAvatarTableBody, {
  DispatchProps,
  StateProps
} from '../components/molecules/SelectHumanAvatarTableBody'
import {Dispatch} from 'redux'
import {ReducerState} from '../reducers'
import {connect} from 'react-redux'

type Action =
  | SelectHumanAvatar$ChangeAvatarCheckbox

const mapStateToProps = (state: ReducerState): StateProps => ({
  avatar: state.selectHumanAvatar.avatar
})
const mapDispatchToProps = (dispatch: Dispatch<Action>): DispatchProps => ({
  handleAvatarNameChange: valid => value => {
    console.log(valid, value)
  },
  handleSelectAvatar: id => () => {
    dispatch(changeAvatarCheckbox(ActionTypes.Scope.SelectHumanAvatar)(id))
  }
})
const SelectHumanAvatarTableBodyContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(SelectHumanAvatarTableBody)

export default SelectHumanAvatarTableBodyContainer

import {
  SelectHumanAvatar$ChangeAvatarName,
  SelectHumanAvatar$ChangeCheckbox,
  SelectHumanAvatar$HoverAvatar,
  selectHumanAvatar
} from '../actions'
import SelectHumanAvatarTableBody, {
  DispatchProps,
  StateProps
} from '../components/molecules/SelectHumanAvatarTableBody'
import {Dispatch} from 'redux'
import {ReducerState} from '../reducers'
import {connect} from 'react-redux'

type Action =
  | SelectHumanAvatar$ChangeAvatarName
  | SelectHumanAvatar$ChangeCheckbox
  | SelectHumanAvatar$HoverAvatar

const mapStateToProps = (state: ReducerState): StateProps => ({
  avatar: state.selectHumanAvatar.avatar
})
const mapDispatchToProps = (dispatch: Dispatch<Action>): DispatchProps => ({
  handleAvatarNameChange: token => valid => value => {
    if (valid) {
      dispatch(selectHumanAvatar.changeAvatarName(token)(value))
    }
  },
  handleHoverAvatar: id => () => {
    dispatch(selectHumanAvatar.hoverAvatar(id))
  },
  handleSelectAvatar: id => () => {
    dispatch(selectHumanAvatar.changeCheckbox(id))
  }
})
const SelectHumanAvatarTableBodyContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(SelectHumanAvatarTableBody)

export default SelectHumanAvatarTableBodyContainer

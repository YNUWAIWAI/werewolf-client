import {
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
  | SelectHumanAvatar$ChangeCheckbox
  | SelectHumanAvatar$HoverAvatar

const mapStateToProps = (state: ReducerState): StateProps => ({
  avatar: state.selectHumanAvatar.avatar
})
const mapDispatchToProps = (dispatch: Dispatch<Action>): DispatchProps => ({
  handleAvatarNameChange: valid => value => {
    console.log(valid, value)
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

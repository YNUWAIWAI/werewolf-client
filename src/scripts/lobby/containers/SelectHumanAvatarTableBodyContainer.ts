import {
  SelectHumanAvatar$ChangeAvatarLanguage,
  SelectHumanAvatar$ChangeAvatarName,
  SelectHumanAvatar$ChangeCheckbox,
  SelectHumanAvatar$HoverAvatar,
  SelectHumanAvatar$ShowAvatarImageSelect,
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
  | SelectHumanAvatar$ChangeAvatarLanguage
  | SelectHumanAvatar$ChangeAvatarName
  | SelectHumanAvatar$ChangeCheckbox
  | SelectHumanAvatar$HoverAvatar
  | SelectHumanAvatar$ShowAvatarImageSelect

const mapStateToProps = (state: ReducerState): StateProps => ({
  avatar: state.selectHumanAvatar.avatar
})
const mapDispatchToProps = (dispatch: Dispatch<Action>): DispatchProps => ({
  handleAvatarImageClick: token => () => {
    dispatch(selectHumanAvatar.showAvatarImageSelect(token))
  },
  handleAvatarLanguageChange: token => valid => value => {
    if (valid) {
      dispatch(selectHumanAvatar.changeAvatarLanguage(token)(value))
    }
  },
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

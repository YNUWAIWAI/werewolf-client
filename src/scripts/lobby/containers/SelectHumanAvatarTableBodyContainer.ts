import {
  SelectHumanAvatar$ChangeCheckbox,
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

const mapStateToProps = (state: ReducerState): StateProps => ({
  avatar: state.selectHumanAvatar.avatar
})
const mapDispatchToProps = (dispatch: Dispatch<Action>): DispatchProps => ({
  handleAvatarNameChange: valid => value => {
    console.log(valid, value)
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

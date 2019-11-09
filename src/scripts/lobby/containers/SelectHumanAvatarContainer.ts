import SelectHumanAvatar, {
  DispatchProps,
  StateProps
} from '../components/templates/SelectHumanAvatar'
import {Dispatch} from 'redux'
import {ReducerState} from '../reducers'
import {connect} from 'react-redux'

type Action =
  | {type: string}

const mapStateToProps = (state: ReducerState): StateProps => state.selectHumanAvatar
const mapDispatchToProps = (dispatch: Dispatch<Action>): DispatchProps => ({
  handleAvatarNameChange: valid => value => {
    console.log(valid, value)
  }
})
const SelectHumanAvatarContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(SelectHumanAvatar)

export default SelectHumanAvatarContainer

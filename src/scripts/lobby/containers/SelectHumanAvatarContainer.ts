import SelectHumanAvatar, {
  DispatchProps,
  StateProps
} from '../components/templates/SelectHumanAvatar'
import {
  Transition,
  transition
} from '../actions'
import {Dispatch} from 'redux'
import {ReducerState} from '../reducers'
import {connect} from 'react-redux'

type Action =
  | Transition

const mapStateToProps = (state: ReducerState): StateProps => state.selectHumanAvatar
const mapDispatchToProps = (dispatch: Dispatch<Action>): DispatchProps => ({
  handleAvatarNameChange: valid => value => {
    console.log(valid, value)
  },
  transition: target => {
    dispatch(transition(target))
  }
})
const SelectHumanAvatarContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(SelectHumanAvatar)

export default SelectHumanAvatarContainer

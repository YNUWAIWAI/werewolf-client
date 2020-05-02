import Component, {
  DispatchProps,
  StateProps
} from '../components/organisms/SupportSelect'
import {
  SupportSelect,
  supportSelect
} from '../actions'
import {Dispatch} from 'redux'
import {ReducerState} from '../reducers'
import {connect} from 'react-redux'

type Action =
  | SupportSelect.CloseModal
  | SupportSelect.ChangeCheckbox

const mapStateToProps = (state: ReducerState): StateProps => ({
  data: state.createNewRobotAvatarSupport.data
})
const mapDispatchToProps = (dispatch: Dispatch<Action>): DispatchProps => ({
  handleCloseButtonClick: () => {
    dispatch(supportSelect.closeModal())
  },
  handleSelect: numberOfPlayers => member => checked => {
    dispatch(supportSelect.changeCheckbox(numberOfPlayers)(member)(checked))
  }
})

const Container = connect(
  mapStateToProps,
  mapDispatchToProps
)(Component)

export default Container

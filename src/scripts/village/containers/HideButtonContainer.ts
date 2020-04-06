import {
  ClickHideButton,
  handleClickHideButton
} from '../actions'
import HideButton, {
  DispatchProps,
  StateProps
} from '../components/atoms/HideButton'
import {Dispatch} from 'redux'
import {ReducerState} from '../reducers'
import {connect} from 'react-redux'

type Action =
  | ClickHideButton

const mapStateToProps = (state: ReducerState): StateProps => ({
  ... state.hideButton,
  navigatable: !state.obfucator.visible
})
const mapDispatchToProps = (dispatch: Dispatch<Action>): DispatchProps => ({
  handleClick: hide => {
    dispatch(handleClickHideButton(hide))
  }
})
const HideButtonContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(HideButton)

export default HideButtonContainer

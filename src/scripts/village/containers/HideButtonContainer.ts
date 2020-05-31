import {
  ClickHideButton,
  handleClickHideButton
} from '../actions'
import {
  HideButton as Component,
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

export const HideButtonContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Component)

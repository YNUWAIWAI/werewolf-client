// @flow
import {type ClickHideButton, handleClickHideButton} from '../actions'
import HideButton, {type DispatchProps, type StateProps} from '../components/atoms/HideButton'
import type {Dispatch} from 'redux'
import type {ReducerState} from '../reducers'
import {connect} from 'react-redux'

type Action =
  | ClickHideButton

const mapStateToProps = (state: ReducerState): StateProps => state.hideButton
const mapDispatchToProps = (dispatch: Dispatch<Action>): DispatchProps => ({
  handleClick: hide => () => {
    dispatch(handleClickHideButton(hide))
  }
})
const HideButtonContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(HideButton)

export default HideButtonContainer

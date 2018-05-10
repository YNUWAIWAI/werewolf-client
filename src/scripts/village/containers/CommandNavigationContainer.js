// @flow
import {type ClickNavigationButton, clickNavigationButton} from '../actions'
import CommandNavigation, {type DispatchProps} from '../components/CommandNavigation'
import type {Dispatch} from 'redux'
import type {NavigationType} from 'village'
import {connect} from 'react-redux'

type Action =
  | ClickNavigationButton

const mapStateToProps = null
const mapDispatchToProps = (dispatch: Dispatch<Action>): DispatchProps => ({
  handleClick: (type: NavigationType) => () => {
    dispatch(clickNavigationButton(type))
  }
})
const CommandNavigationContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(CommandNavigation)

export default CommandNavigationContainer

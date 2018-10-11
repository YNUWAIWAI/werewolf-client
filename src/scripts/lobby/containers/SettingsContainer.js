// @flow
import {
  type ChangeLanguage,
  type ChangeUserEmail,
  type ChangeUserName,
  type ChangeUserPassword,
  changeLanguage,
  changeUserEmail,
  changeUserName,
  changeUserPassword
} from '../actions'
import Settings, {type DispatchProps, type StateProps} from '../components/templates/Settings'
import type {Dispatch} from 'redux'
import type {ReducerState} from '../reducers'
import {connect} from 'react-redux'

type Action =
  | ChangeLanguage
  | ChangeUserEmail
  | ChangeUserName
  | ChangeUserPassword

const mapStateToProps = (state: ReducerState): StateProps => state.settings
const mapDispatchToProps = (dispatch: Dispatch<Action>): DispatchProps => ({
  handleChangeLanguage: value => {
    dispatch(changeLanguage(value))
  },
  handleChangeUserEmail: value => {
    dispatch(changeUserEmail(value))
  },
  handleChangeUserName: value => {
    dispatch(changeUserName(value))
  },
  handleChangeUserPassword: value => {
    dispatch(changeUserPassword(value))
  }
})
const SettingsContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Settings)

export default SettingsContainer

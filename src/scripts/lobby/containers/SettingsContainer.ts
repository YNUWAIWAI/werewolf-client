import {
  ChangeLanguage,
  ChangeUserEmail,
  ChangeUserName,
  ChangeUserPassword,
  SubmitLogout,
  changeLanguage,
  changeUserEmail,
  changeUserName,
  changeUserPassword,
  submitLogout
} from '../actions'
import Component, {
  DispatchProps,
  StateProps
} from '../components/templates/Settings'
import {Dispatch} from 'redux'
import {ReducerState} from '../reducers'
import {connect} from 'react-redux'

type Action =
  | ChangeLanguage
  | ChangeUserEmail
  | ChangeUserName
  | ChangeUserPassword
  | SubmitLogout

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
  },
  handleSubmitLogout: () => {
    dispatch(submitLogout())
  }
})
const SettingsContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Component)

export default SettingsContainer

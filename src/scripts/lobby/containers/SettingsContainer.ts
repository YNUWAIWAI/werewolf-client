import Component, {
  DispatchProps,
  StateProps
} from '../components/templates/Settings'
import {
  Settings,
  settings
} from '../actions'
import {Dispatch} from 'redux'
import {ReducerState} from '../reducers'
import {connect} from 'react-redux'

type Action =
  | Settings.ChangeLanguage
  | Settings.ChangeUserEmail
  | Settings.ChangeUserName
  | Settings.ChangeUserPassword
  | Settings.SubmitLogout

const mapStateToProps = (state: ReducerState): StateProps => ({
  ... state.settings,
  navigatable: !state.obfucator.visible
})
const mapDispatchToProps = (dispatch: Dispatch<Action>): DispatchProps => ({
  handleChangeLanguage: value => {
    dispatch(settings.changeLanguage(value))
  },
  handleChangeUserEmail: value => {
    dispatch(settings.changeUserEmail(value))
  },
  handleChangeUserName: value => {
    dispatch(settings.changeUserName(value))
  },
  handleChangeUserPassword: value => {
    dispatch(settings.changeUserPassword(value))
  },
  handleSubmitLogout: () => {
    dispatch(settings.submitLogout())
  }
})
const SettingsContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Component)

export default SettingsContainer

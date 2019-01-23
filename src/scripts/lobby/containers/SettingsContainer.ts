import {
  ChangeLanguage,
  ChangeUserEmail,
  ChangeUserName,
  ChangeUserPassword,
  Transition,
  changeLanguage,
  changeUserEmail,
  changeUserName,
  changeUserPassword,
  transition
} from '../actions'
import Settings, {DispatchProps, StateProps} from '../components/templates/Settings'
import {Dispatch} from 'redux'
import {ReducerState} from '../reducers'
import {connect} from 'react-redux'

type Action =
  | ChangeLanguage
  | ChangeUserEmail
  | ChangeUserName
  | ChangeUserPassword
  | Transition

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
  transition: target => {
    dispatch(transition(target))
  }
})
const SettingsContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Settings)

export default SettingsContainer

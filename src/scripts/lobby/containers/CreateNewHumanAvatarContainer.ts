import Component, {
  DispatchProps,
  StateProps
} from '../components/templates/CreateNewHumanAvatar'
import {
  CreateNewHumanAvatar,
  createNewHumanAvatar
} from '../actions'
import {Dispatch} from 'redux'
import {ReducerState} from '../reducers'
import {connect} from 'react-redux'

type Action =
  | CreateNewHumanAvatar.ChangeAvatarImage
  | CreateNewHumanAvatar.ChangeAvatarLangauge
  | CreateNewHumanAvatar.ChangeAvatarName

const mapStateToProps = (state: ReducerState): StateProps => ({
  command: state.createNewHumanAvatar.command,
  image: state.createNewHumanAvatar.image,
  language: state.createNewHumanAvatar.language,
  menuItems: state.createNewHumanAvatar.menuItems,
  name: state.createNewHumanAvatar.name,
  navigatable: !state.obfucator.visible
})
const mapDispatchToProps = (dispatch: Dispatch<Action>): DispatchProps => ({
  handleChangeImage: valid => value => {
    if (valid) {
      dispatch(createNewHumanAvatar.changeAvatarImage(value))
    }
  },
  handleChangeLanguage: valid => value => {
    if (valid) {
      dispatch(createNewHumanAvatar.changeAvatarLanguage(value))
    }
  },
  handleChangeName: valid => value => {
    if (valid) {
      dispatch(createNewHumanAvatar.changeAvatarName(value))
    }
  }
})
const Container = connect(
  mapStateToProps,
  mapDispatchToProps
)(Component)

export default Container

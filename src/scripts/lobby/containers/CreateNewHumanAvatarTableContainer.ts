import Component, {
  DispatchProps,
  StateProps
} from '../components/molecules/CreateNewHumanAvatarTable'
import {
  CreateNewHumanAvatar,
  createNewHumanAvatar
} from '../actions'
import {Dispatch} from 'redux'
import {ReducerState} from '../reducers'
import {connect} from 'react-redux'

type Action =
  | CreateNewHumanAvatar.ChangeAvatarLangauge
  | CreateNewHumanAvatar.ChangeAvatarName
  | CreateNewHumanAvatar.ShowAvatarImageSelect

const mapStateToProps = (state: ReducerState): StateProps => ({
  image: state.createNewHumanAvatar.image,
  language: state.createNewHumanAvatar.language,
  name: state.createNewHumanAvatar.name,
  navigatable: !state.obfucator.visible
})
const mapDispatchToProps = (dispatch: Dispatch<Action>): DispatchProps => ({
  handleImageClick: value => {
    dispatch(createNewHumanAvatar.showAvatarImageSelect(value))
  },
  handleLanguageChange: valid => value => {
    if (valid) {
      dispatch(createNewHumanAvatar.changeAvatarLanguage(value))
    }
  },
  handleNameChange: valid => value => {
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

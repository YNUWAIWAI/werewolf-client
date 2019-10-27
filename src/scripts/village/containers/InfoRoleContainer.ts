import RoleIcon, {Props as StateProps} from '../components/atoms/RoleIcon'
import {ImagePath} from '../constants/ImagePath'
import {ReducerState} from '../reducers'
import {connect} from 'react-redux'
import {getText} from '../util'

const mapStateToProps = (state: ReducerState): StateProps => {
  if (!state.mine.role) {
    return {
      className: 'vi--info--role',
      image: ImagePath.Character.anonymous,
      name: ''
    }
  }

  return {
    className: 'vi--info--role',
    image: state.mine.role.image,
    name: getText({
      language: state.language,
      languageMap: state.mine.role.name
    })
  }
}

const InfoRoleContainer = connect(
  mapStateToProps
)(RoleIcon)

export default InfoRoleContainer

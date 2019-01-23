import RoleIcon, {Props as StateProps} from '../components/atoms/RoleIcon'
import {ReducerState} from '../reducers'
import {connect} from 'react-redux'
import {getText} from '../util'

const mapStateToProps = (state: ReducerState): StateProps => {
  if (!state.roles.mine) {
    return {
      class: 'info--role',
      image: '',
      name: ''
    }
  }

  return {
    class: 'info--role',
    image: state.roles.mine.image,
    name: getText({
      language: state.language,
      languageMap: state.roles.mine.name
    })
  }
}

const InfoRoleContainer = connect(
  mapStateToProps
)(RoleIcon)

export default InfoRoleContainer

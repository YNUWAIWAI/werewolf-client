// @flow
import RoleIcon, {type Props as StateProps} from '../components/atoms/RoleIcon'
import {type ReducerState} from '../reducers'
import {connect} from 'react-redux'

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
    name: state.roles.mine.name[state.language]
  }
}

const InfoRoleContainer = connect(
  mapStateToProps
)(RoleIcon)

export default InfoRoleContainer

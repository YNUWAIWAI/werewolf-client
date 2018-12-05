// @flow
import InfoRole, {type StateProps} from '../components/molecules/InfoRole'
import {type ReducerState} from '../reducers'
import {connect} from 'react-redux'

const mapStateToProps = (state: ReducerState): StateProps => {
  if (!state.roles.mine) {
    return {
      image: '',
      name: ''
    }
  }

  return {
    image: state.roles.mine.image,
    name: state.roles.mine.name[state.language]
  }
}

const InfoRoleContainer = connect(
  mapStateToProps
)(InfoRole)

export default InfoRoleContainer

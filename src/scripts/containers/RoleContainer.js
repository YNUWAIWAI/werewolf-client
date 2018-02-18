import Role from '../components/Role'
import {connect} from 'react-redux'

const mapStateToProps = state => ({
  agent: state.role.agent,
  imageUrl: state.role.imageUrl,
  role: state.role.role
})

const RoleContainer = connect(
  mapStateToProps
)(Role)

export default RoleContainer

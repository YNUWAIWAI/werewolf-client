import Role from '../components/Role'
import {connect} from 'react-redux'

const mapStateToProps = state => ({
  agent: state.mine.myAgentName.ja,
  imageUrl: state.mine.myAgentImage,
  role: state.mine.myRole.myRoleName.ja
})

const RoleContainer = connect(
  mapStateToProps
)(Role)

export default RoleContainer

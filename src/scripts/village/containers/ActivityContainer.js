import Activity from '../components/Activity'
import {connect} from 'react-redux'

const mapStateToProps = state => ({
  expand: state.hideButton.isHide
})
const ActivityContainer = connect(
  mapStateToProps
)(Activity)

export default ActivityContainer

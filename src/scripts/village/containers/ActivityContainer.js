import Activity from '../components/Activity'
import {connect} from 'react-redux'

const mapStateToProps = state => ({
  expand: state.hideButton.hide
})
const ActivityContainer = connect(
  mapStateToProps
)(Activity)

export default ActivityContainer

import Activity, {StateProps} from '../components/organisms/Activity'
import {ReducerState} from '../reducers'
import {connect} from 'react-redux'

const mapStateToProps = (state: ReducerState): StateProps => ({
  expand: state.hideButton.hide
})
const ActivityContainer = connect(
  mapStateToProps
)(Activity)

export default ActivityContainer
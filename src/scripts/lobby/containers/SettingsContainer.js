import Settings from '../components/Settings'
import {connect} from 'react-redux'

const mapStateToProps = state => state.settings
const SettingContainer = connect(
  mapStateToProps
)(Settings)

export default SettingContainer

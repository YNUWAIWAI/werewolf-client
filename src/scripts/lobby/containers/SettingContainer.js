import Setting from '../components/Setting'
import {connect} from 'react-redux'

const mapStateToProps = state => state.setting
const SettingContainer = connect(
  mapStateToProps
)(Setting)

export default SettingContainer

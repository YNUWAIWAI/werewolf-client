import Settings from '../components/Settings'
import {connect} from 'react-redux'
import {selectVillage} from '../actions'

const mapStateToProps = state => state.settings
const mapDispatchToProps = dispatch => ({
  selectVillage: id => () => dispatch(selectVillage(id))
})
const SettingContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Settings)

export default SettingContainer

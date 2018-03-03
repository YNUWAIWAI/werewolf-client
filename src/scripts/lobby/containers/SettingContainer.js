import Setting from '../components/Setting'
import {connect} from 'react-redux'
import {selectVillage} from '../actions'

const mapStateToProps = state => state.setting
const mapDispatchToProps = dispatch => ({
  selectVillage: id => () => dispatch(selectVillage(id))
})
const SettingContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Setting)

export default SettingContainer

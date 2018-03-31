// @flow
import Settings, {type StateProps} from '../components/Settings'
import type {ReducerState} from '../reducers'
import {connect} from 'react-redux'

const mapStateToProps = (state: ReducerState): StateProps => state.settings
const SettingContainer = connect(
  mapStateToProps
)(Settings)

export default SettingContainer

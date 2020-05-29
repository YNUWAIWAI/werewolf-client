import {
  Theme as Component,
  StateProps
} from '../components/templates/Theme'
import {ReducerState} from '../reducers'
import {connect} from 'react-redux'

const mapStateToProps = (state: ReducerState): StateProps => ({
  theme: state.theme
})

export const ThemeContainer = connect(
  mapStateToProps
)(Component)

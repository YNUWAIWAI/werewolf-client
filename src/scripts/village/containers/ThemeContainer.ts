import {
  Theme as Component,
  StateProps
} from '../components/organisms/Theme'
import {ReducerState} from '../reducers'
import {connect} from 'react-redux'

const mapStateToProps = (state: ReducerState): StateProps => ({
  theme: state.theme
})

export const ThemeContainer = connect(
  mapStateToProps
)(Component)

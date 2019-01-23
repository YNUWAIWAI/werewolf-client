import * as React from 'react'
import IntlProvider from './IntlProviderContainer'
import {ReducerState} from '../reducers'
import {connect} from 'react-redux'

interface StateProps {
  readonly content: React.ComponentType<any>
}
interface DispatchProps {}
interface Props extends StateProps, DispatchProps {}

function App(props: Props) {
  return (
    <IntlProvider>
      <props.content />
    </IntlProvider>
  )
}

const mapStateToProps = (state: ReducerState): StateProps => ({
  content: state.app.content
})

export default connect(
  mapStateToProps
)(App)

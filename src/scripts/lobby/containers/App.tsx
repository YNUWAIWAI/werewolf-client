import * as React from 'react'
import IntlProvider from './IntlProviderContainer'
import {ReducerState} from '../reducers'
import {connect} from 'react-redux'

interface StateProps {
  readonly content: React.ComponentType<any>
}

function App(props: StateProps) {
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

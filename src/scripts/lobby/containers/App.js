import React from 'react'
import {connect} from 'react-redux'

function App(props) {
  return <props.content transition={props.transition} />
}

const mapStateToProps = state => state.app
const mapDispatchToProps = dispatch => ({
  transition: target => () => dispatch({
    type: target
  })
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)

import React from 'react'
import {connect} from 'react-redux'

// function App(props) {
//   return <props.content transition={props.transition} />
// }

const mapStateToProps = state => state.app
const mapDispatchToProps = dispatch => ({
  transition: target => () => dispatch({
    type: target
  })
})

const App = connect(
  mapStateToProps,
  mapDispatchToProps
)(props => <props.content transition={props.transition} />)

export default App

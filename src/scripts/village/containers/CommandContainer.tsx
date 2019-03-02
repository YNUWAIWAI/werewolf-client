import * as React from 'react'
import Command, {StateProps} from '../components/organisms/Command'
import CommandGrave from './CommandGraveContainer'
import CommandInputBox from './CommandInputBoxContainer'
import CommandPostMortem from './CommandPostMortemContainer'
import CommandSelection from './CommandSelectionContainer'
import {Content} from '../reducers/command'
import {ReducerState} from '../reducers'
import {connect} from 'react-redux'

const mapStateToProps = (state: ReducerState): StateProps => {
  switch (state.command.content) {
    case Content.CommandGrave:
      return {
        content: <CommandGrave />,
        hide: state.hideButton.hide
      }
    case Content.CommandInputBox:
      return {
        content: <CommandInputBox />,
        hide: state.hideButton.hide
      }
    case Content.CommandPostMortem:
      return {
        content: <CommandPostMortem />,
        hide: state.hideButton.hide
      }
    case Content.CommandSelection:
      return {
        content: <CommandSelection />,
        hide: state.hideButton.hide
      }
    default:
      throw Error('Unexpected value')
  }
}
const CommandContainer = connect(
  mapStateToProps
)(Command)

export default CommandContainer

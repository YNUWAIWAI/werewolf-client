import CommandInput from './CommandInput'
import CommandSelection from './Commandselection'
import React from 'react'
import {SELECTION_PHASE} from '../constants/Phase'

export default function Command(props) {
  if (SELECTION_PHASE.includes(props.phase)) {
    return <CommandSelection agents={props.agents} text={props.text} />
  }

  return (
    <div className={`command ${props.isHide ? 'hide' : ''}`} id="command">
      <CommandInput kind="public" {... props.public} handlePostChat={props.handlePostChat('public')} setIsSendable={props.setIsSendable('public')} />
      <CommandInput kind="private" {... props.private} handlePostChat={props.handlePostChat('private')} setIsSendable={props.setIsSendable('private')} />
      {
        props.limited.available ?
          <CommandInput kind="limited" {... props.limited} handlePostChat={props.handlePostChat('limited')} setIsSendable={props.setIsSendable('limited')} /> :
          ''
      }
    </div>
  )
}

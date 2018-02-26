import CommandInput from './CommandInput'
import React from 'react'

export default function Command(props) {
  return (
    <div id="command" class="command">
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

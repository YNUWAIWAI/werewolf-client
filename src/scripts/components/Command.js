import CommandInput from './CommandInput'
import React from 'react'
import ReactDOM from 'react-dom'

export default function Command(props) {
  return (
    <div id="command" class="command">
      <CommandInput kind="public" />
      <CommandInput kind="private" />
      <CommandInput kind="limited" />
    </div>
  )
}

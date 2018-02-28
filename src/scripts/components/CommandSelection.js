import React from 'react'

export default function CommandSelection(props) {
  return (
    <div class="command--select">
      <div class="command--description">
        <span id="command-text">{props.text}</span>（<Timer id="select-time" />）
      </div>
      <div id="command--option-container" class="command--option-container">
        {
          props.agents
            .filter(a => a.isAChoice)
            .map(a => <CommandOption id={a.id} image={a.image} name={a.name.ja} agent={a} />)
        }
      </div>
    </div>
  )
}

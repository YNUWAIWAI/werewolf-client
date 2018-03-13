import CommandOption from './CommandOption'
import React from 'react'
import Timer from '../containers/TimerContainer'

export default function CommandSelection(props) {
  return (
    <div className="command--select">
      <div className="command--description">
        <span id="command-text">
          {props.text}
        </span>
        {'（'}
        <Timer />
        {'）'}
      </div>
      <div className="command--option-container" id="command--option-container">
        {
          props.agents
            .filter(a => a.isAChoice)
            .map(a =>
              <CommandOption
                agent={a}
                id={a.id}
                image={a.image}
                key={a.id}
                name={a.name.ja}
              />
            )
        }
      </div>
    </div>
  )
}

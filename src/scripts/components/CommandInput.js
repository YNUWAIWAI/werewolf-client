import React from 'react'
import ReactDOM from 'react-dom'

export default function CommandInput(props) {
  const placeholder = (() => ({
    limited: '人狼用',
    private: '非公開用',
    public: '公開用'
  })[props.kind])()

  return (
    <form name={props.kind} class={`command--input ${props.kind}`}>
      <textarea id={`${props.kind}-textarea`} placeholder={placeholder}></textarea>
      <span id={`${props.kind}-char`} class="command--input--char">0</span>
      {
        props.kind === 'private' ||
        <span class="command--input--counter" id={`${props.kind}-counter`} data-counter="0">0/10</span>
      }
      <button id={`${props.kind}-button`} type="button">送信</button>
    </form>
  )
}

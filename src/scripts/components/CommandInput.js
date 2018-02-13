import React from 'react'
import ReactDOM from 'react-dom'

export default function CommandInput(props) {
  const placeholder = (() => {
    if (props.kind === 'public') {
      return '公開用'
    } else if (props.kind === 'private') {
      return '非公開用'
    }

    return '人狼用'
  })()

  const PostCounter = () => {
    if (props.kind !== 'private') {
      return <span class="command--input--counter" id={`${props.kind}-counter`} data-counter="0">0/10</span>
    }

    return ''
  }

  return (
    <form name={props.kind} class={`command--input ${props.kind}`}>
      <textarea id={`${props.kind}-textarea`} placeholder={placeholder}></textarea>
      <span id={`${props.kind}-char`} class="command--input--char">0</span>
      <PostCounter />
      <button id={`${props.kind}-button`} type="button">送信</button>
    </form>
  )
}

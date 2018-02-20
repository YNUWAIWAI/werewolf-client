import React from 'react'

class CommandInput extends React.PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      isOver: false,
      isSendable: true,
      text: '',
      textCount: 0
    }
    this.handleTextChange = this.handleTextChange.bind(this)
    this.handlePostChat = this.handlePostChat.bind(this)
    this.handleKeyDown = this.handleKeyDown.bind(this)
  }

  countText(text) {
    return Array.of(... text).length
  }

  handleTextChange(event) {
    const text = event.target.value
    const textCount = this.countText(text)
    let isOver, isSendable

    if (textCount > 140) {
      isOver = true
      isSendable = false
    } else {
      isOver = false
      if (this.props.postCount >= this.props.postCountLimit) {
        isSendable = false
      }
      isSendable = true
    }
    this.setState({
      isOver,
      isSendable,
      text,
      textCount
    })
  }

  handlePostChat(event) {
    this.props.handlePostChat({
      kind: this.props.kind,
      text: this.state.text
    })
  }

  handleKeyDown(event) {
    if (!this.state.isSendable) {
      return
    }
    if ((event.ctrlKey || event.metaKey) && event.key === 'Enter') {
      this.props.handlePostChat({
        kind: this.props.kind,
        text: this.state.text
      })
    }
  }

  render() {
    const placeholder = (() => ({
      limited: '人狼用',
      private: '非公開用',
      public: '公開用'
    })[this.props.kind])()

    return (
      <form name={this.props.kind} class={`command--input ${this.props.kind}`}>
        <textarea id={`${this.props.kind}-textarea`} placeholder={placeholder} value={this.state.text} onChange={this.handleTextChange} onKeyDown={this.handleKeyDown}></textarea>
        <span id={`${this.props.kind}-char`} class={`command--input--char ${this.state.isOver && 'error'}`}>{this.state.textCount}</span>
        {
          this.props.kind === 'private' ||
          <span class="command--input--counter" id={`${this.props.kind}-counter`} data-counter={this.props.postCount}>{this.props.postCount}/{this.props.postCountLimit}</span>
        }
        <button id={`${this.props.kind}-button`} type="button" disabled={!this.state.isSendable} onClick={this.handlePostChat}>送信</button>
      </form>
    )
  }
}

export default CommandInput

import React from 'react'

class CommandInput extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isOver: false,
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
      text,
      textCount
    })
    if (this.props.isSendable !== isSendable) {
      this.props.setIsSendable(isSendable)
    }
  }

  handlePostChat(event) {
    this.props.setIsSendable(false)
    this.props.handlePostChat(this.state.text)
    this.setState({
      isOver: false,
      text: '',
      textCount: 0
    })
  }

  handleKeyDown(event) {
    if (!this.props.isSendable) {
      return
    }
    if ((event.ctrlKey || event.metaKey) && event.key === 'Enter') {
      this.props.setIsSendable(false)
      this.props.handlePostChat(this.state.text)
      this.setState({
        isOver: false,
        text: '',
        textCount: 0
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
      <form className={`command--input ${this.props.kind}`} name={this.props.kind}>
        <textarea
          id={`${this.props.kind}-textarea`}
          onChange={this.handleTextChange}
          onKeyDown={this.handleKeyDown}
          placeholder={placeholder}
          value={this.state.text}
        />
        <span className={`command--input--char ${this.state.isOver && 'error'}`} id={`${this.props.kind}-char`}>
          {this.state.textCount}
        </span>
        {
          this.props.kind === 'private' ||
          <span className="command--input--counter" data-counter={this.props.postCount} id={`${this.props.kind}-counter`}>
            {`${this.props.postCount}/${this.props.postCountLimit}`}
          </span>
        }
        <button disabled={!this.props.isSendable} id={`${this.props.kind}-button`} onClick={this.handlePostChat} type="button">
          {'送信'}
        </button>
      </form>
    )
  }
}

export default CommandInput

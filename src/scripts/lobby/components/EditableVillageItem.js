import Member from './Member'
import React from 'react'

export default class EditableVillageItem extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      avatar: props.default.avatar,
      comment: props.default.comment || '',
      hostName: props.default.hostPlayer.name,
      numberOfPlayers: props.default.playerSetting.number,
      villageName: props.default.name
    }
    this.handleTextChange = this.handleTextChange.bind(this)
  }

  handleTextChange(propName) {
    return event => {
      this.setState({
        [propName]: event.target.value
      })
    }
  }

  render() {
    return (
      <li className="village--item">
        <div className="village--item--village-name--prop">
          {'Village Name'}
        </div>
        <input className="village--item--village-name--val" onChange={this.handleTextChange('villageName')} type="text" value={this.state.villageName} />
        <div className="village--item--host-name--prop">
          {'Host Name'}
        </div>
        <input className="village--item--host-name--val" onChange={this.handleTextChange('hostName')} type="text" value={this.state.hostName} />
        <div className="village--item--setup--prop">
          {'Setup'}
        </div>
        <div className="village--item--setup--val1">
          <input
            className="village--item--setup--val1--input"
            max="15"
            min="5"
            onChange={this.handleTextChange('numberOfPlayers')}
            type="number"
            value={this.state.numberOfPlayers}
          />
          {' players'}
        </div>
        <div className="village--item--setup--val2">
          <select className="village--item--setup--val2--select" name="avatar">
            <option value="fixed">
              {'Fixed Avatar'}
            </option>
            <option value="random">
              {'Random Avatar'}
            </option>
          </select>
        </div>
        <Member human={this.props.default.playerSetting.human} robot={this.props.default.playerSetting.robot} role={this.props.default.roleSetting} />
        <div className="village--item--comment--prop">
          {'Village Comment'}
        </div>
        <input className="village--item--comment--val" onChange={this.handleTextChange('comment')} type="text" value={this.state.comment} />
      </li>
    )
  }
}

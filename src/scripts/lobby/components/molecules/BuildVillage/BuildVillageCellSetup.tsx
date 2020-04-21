import * as React from 'react'
import AvatarSelect from '../../atoms/Select/AvatarSelect'
import {FormattedMessage} from 'react-intl'
import NumberSelect from '../../atoms/Select/NumberSelect'
import {lobby} from '../../../types'

interface Props {
  readonly handleAvatarChange: (valid: boolean) => (value: lobby.Avatar) => void
  readonly handleNumberOfPlayersChange: (valid: boolean) => (value: number) => void
  readonly navigatable: boolean
  readonly validity: {
    readonly avatar: boolean
    readonly numberOfPlayers: boolean
  }
  readonly value: {
    readonly avatar: lobby.Avatar
    readonly numberOfPlayers: number
  }
}

export default function BuildVillageCellSetup(props: Props) {
  return (
    <>
      <div className="lo--village--item--prop setup">
        <FormattedMessage
          id="BuildVillage.label(setup)"
        />
      </div>
      <div className={`lo--village--item--val setup1 build ${props.validity.numberOfPlayers ? '' : 'invalid'}`}>
        <NumberSelect
          ascendingOrder={false}
          className="lo--village--item--val--setup1--select"
          defaultValue={props.value.numberOfPlayers}
          from={4}
          handleChange={props.handleNumberOfPlayersChange}
          navigatable={props.navigatable}
          to={15}
          type="player"
        />
      </div>
      <div className={`lo--village--item--val setup2 build ${props.validity.avatar ? '' : 'invalid'}`}>
        <AvatarSelect
          className="lo--village--item--val--setup2--select"
          defaultValue={props.value.avatar}
          handleChange={props.handleAvatarChange}
          navigatable={props.navigatable}
          type="buildVillage"
        />
      </div>
    </>
  )
}

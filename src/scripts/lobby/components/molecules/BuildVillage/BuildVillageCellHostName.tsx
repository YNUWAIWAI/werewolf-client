import * as React from 'react'
import {FormattedMessage} from 'react-intl'

interface Props {
  readonly isFiexdAvatar: boolean
  readonly value: string
}

export default function BuildVillageCellVillageName(props: Props) {
  return (
    <>
      <FormattedMessage
        id="BuildVillage.label(hostName)"
      >
        {
          text => (
            <div className="lo--village--item--prop host-name">
              {text}
            </div>
          )
        }
      </FormattedMessage>
      {
        props.isFiexdAvatar ?
          <div className="lo--village--item--val host-name">
            {props.value}
          </div> :
          <FormattedMessage
            id="BuildVillage.hostName.anonymous"
          >
            {
              text => (
                <div className="lo--village--item--val host-name">
                  {text}
                </div>
              )
            }
          </FormattedMessage>
      }
    </>
  )
}

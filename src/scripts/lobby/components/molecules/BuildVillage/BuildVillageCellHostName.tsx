import * as React from 'react'
import {FormattedMessage} from 'react-intl'

interface Props {
  readonly isFiexdAvatar: boolean
  readonly value: string
}

export const BuildVillageCellHostName: React.FC<Props> = props => (
  <>
    <div className="lo--village--item--prop host-name">
      <FormattedMessage
        id="BuildVillage.label(hostName)"
      />
    </div>
    {
      props.isFiexdAvatar ?
        <div className="lo--village--item--val host-name">
          {props.value}
        </div> :
        <div className="lo--village--item--val host-name">
          <FormattedMessage
            id="BuildVillage.hostName.anonymous"
          />
        </div>
    }
  </>
)
BuildVillageCellHostName.displayName = 'BuildVillageCellHostName'

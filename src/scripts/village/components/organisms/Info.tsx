import * as React from 'react'
import {FormattedMessage} from 'react-intl'
import {InfoCharacterContainer as InfoCharacter} from '../../containers/InfoCharacterContainer'
import {InfoDayContainer as InfoDay} from '../../containers/InfoDayContainer'
import {InfoRoleContainer as InfoRole} from '../../containers/InfoRoleContainer'
import {InfoTeamContainer as InfoTeam} from '../../containers/InfoTeamContainer'

export const Info: React.FC<{}> = () => (
  <div className="vi--info">
    <InfoDay />
    <div
      className="vi--info--property character"
    >
      <FormattedMessage
        id="Info.property.character"
      />
    </div>
    <InfoCharacter />
    <div
      className="vi--info--property role"
    >
      <FormattedMessage
        id="Info.property.role"
      />
    </div>
    <InfoRole />
    <div
      className="vi--info--property team"
    >
      <FormattedMessage
        id="Info.property.team"
      />
    </div>
    <InfoTeam />
  </div>
)
Info.displayName = 'Info'

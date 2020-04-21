import * as React from 'react'
import {FormattedMessage} from 'react-intl'
import InfoCharacter from '../../containers/InfoCharacterContainer'
import InfoDay from '../../containers/InfoDayContainer'
import InfoRole from '../../containers/InfoRoleContainer'
import InfoTeam from '../../containers/InfoTeamContainer'

export default function Info() {
  return (
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
}

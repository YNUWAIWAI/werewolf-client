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
      <FormattedMessage
        id="Info.property.character"
      >
        {
          text => (
            <div
              className="vi--info--property character"
            >
              {text}
            </div>
          )
        }
      </FormattedMessage>
      <InfoCharacter />
      <FormattedMessage
        id="Info.property.role"
      >
        {
          text => (
            <div
              className="vi--info--property role"
            >
              {text}
            </div>
          )
        }
      </FormattedMessage>
      <InfoRole />
      <FormattedMessage
        id="Info.property.team"
      >
        {
          text => (
            <div
              className="vi--info--property team"
            >
              {text}
            </div>
          )
        }
      </FormattedMessage>
      <InfoTeam />
    </div>
  )
}

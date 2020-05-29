import * as React from 'react'
import {MemberRoleItem} from '../atoms/MemberRoleItem'
import {ORDERED_ROLE_LIST} from '../../constants/Role'
import {lobby} from '../../types'

type RoleSetting = Readonly<lobby.Payload$BuildVillage['roleSetting']>
interface Props {
  readonly className: string
  readonly role: RoleSetting
}

export const MemberRoleList: React.FC<Props> = props => (
  <div
    className={props.className}
  >
    {
      ORDERED_ROLE_LIST.map(item => (
        <MemberRoleItem
          className={`${props.className}--item`}
          id={item.id}
          image={item.image}
          key={item.id}
          numberOfPlayers={props.role[item.id]}
        />
      ))
    }
  </div>
)
MemberRoleList.displayName = 'MemberRoleList'

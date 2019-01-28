/* global village */
import * as React from 'react'
import ResultCell, {ResultCellType} from './ResultCell'
import {getMessages} from '../../../../i18n/village'
import {initRenderer} from '../../../../../tools/intl-enzyme-test-helper'

const {mountWithIntl} = initRenderer(village.Language.ja, getMessages(village.Language.ja))

describe('<ResultCell />', () => {
  describe('type="image"', () => {
    test('status="alive"', () => {
      const wrapper = mountWithIntl(
        <ResultCell
          image="image"
          status={village.AgentStatus.alive}
          type={ResultCellType.image}
        />
      )

      expect(wrapper.find('.result--cell').exists()).toBe(true)
      expect(wrapper.find('.result--cell').hasClass('result--cell--image')).toBe(true)
      expect(wrapper.find('.result--cell').hasClass('dead')).toBe(false)
      expect(wrapper.containsMatchingElement(<img src="image" />)).toBe(true)
    })
    test('status="dead"', () => {
      const wrapper = mountWithIntl(
        <ResultCell
          image="image"
          status={village.AgentStatus.dead}
          type={ResultCellType.image}
        />
      )

      expect(wrapper.find('.result--cell').exists()).toBe(true)
      expect(wrapper.find('.result--cell').hasClass('result--cell--image')).toBe(true)
      expect(wrapper.find('.result--cell').hasClass('dead')).toBe(true)
      expect(wrapper.containsMatchingElement(<img src="image" />)).toBe(true)
    })
    test('status="death by execution"', () => {
      const wrapper = mountWithIntl(
        <ResultCell
          image="image"
          status={village.AgentStatus.deathByExecution}
          type={ResultCellType.image}
        />
      )

      expect(wrapper.find('.result--cell').exists()).toBe(true)
      expect(wrapper.find('.result--cell').hasClass('result--cell--image')).toBe(true)
      expect(wrapper.find('.result--cell').hasClass('dead')).toBe(true)
      expect(wrapper.containsMatchingElement(<img src="image" />)).toBe(true)
    })
    test('status="death by attack"', () => {
      const wrapper = mountWithIntl(
        <ResultCell
          image="image"
          status={village.AgentStatus.deathByAttack}
          type={ResultCellType.image}
        />
      )

      expect(wrapper.find('.result--cell').exists()).toBe(true)
      expect(wrapper.find('.result--cell').hasClass('result--cell--image')).toBe(true)
      expect(wrapper.find('.result--cell').hasClass('dead')).toBe(true)
      expect(wrapper.containsMatchingElement(<img src="image" />)).toBe(true)
    })
    test('status="death by fear"', () => {
      const wrapper = mountWithIntl(
        <ResultCell
          image="image"
          status={village.AgentStatus.deathByFear}
          type={ResultCellType.image}
        />
      )

      expect(wrapper.find('.result--cell').exists()).toBe(true)
      expect(wrapper.find('.result--cell').hasClass('result--cell--image')).toBe(true)
      expect(wrapper.find('.result--cell').hasClass('dead')).toBe(true)
      expect(wrapper.containsMatchingElement(<img src="image" />)).toBe(true)
    })
    test('status="unnatural death"', () => {
      const wrapper = mountWithIntl(
        <ResultCell
          image="image"
          status={village.AgentStatus.unnaturalDeath}
          type={ResultCellType.image}
        />
      )

      expect(wrapper.find('.result--cell').exists()).toBe(true)
      expect(wrapper.find('.result--cell').hasClass('result--cell--image')).toBe(true)
      expect(wrapper.find('.result--cell').hasClass('dead')).toBe(true)
      expect(wrapper.containsMatchingElement(<img src="image" />)).toBe(true)
    })
  })
  describe('type="avatarImage"', () => {
    test('status="alive"', () => {
      const wrapper = mountWithIntl(
        <ResultCell
          image="image"
          status={village.AgentStatus.alive}
          type={ResultCellType.avatarImage}
        />
      )

      expect(wrapper.find('.result--cell').exists()).toBe(true)
      expect(wrapper.find('.result--cell').hasClass('result--cell--avatarImage')).toBe(true)
      expect(wrapper.find('.result--cell').hasClass('dead')).toBe(false)
      expect(wrapper.containsMatchingElement(<img src="image" />)).toBe(true)
    })
    test('status="dead"', () => {
      const wrapper = mountWithIntl(
        <ResultCell
          image="image"
          status={village.AgentStatus.dead}
          type={ResultCellType.avatarImage}
        />
      )

      expect(wrapper.find('.result--cell').exists()).toBe(true)
      expect(wrapper.find('.result--cell').hasClass('result--cell--avatarImage')).toBe(true)
      expect(wrapper.find('.result--cell').hasClass('dead')).toBe(true)
      expect(wrapper.containsMatchingElement(<img src="image" />)).toBe(true)
    })
    test('<ResultCell image="image" status="death by execution"', () => {
      const wrapper = mountWithIntl(
        <ResultCell
          image="image"
          status={village.AgentStatus.deathByExecution}
          type={ResultCellType.avatarImage}
        />
      )

      expect(wrapper.find('.result--cell').exists()).toBe(true)
      expect(wrapper.find('.result--cell').hasClass('result--cell--avatarImage')).toBe(true)
      expect(wrapper.find('.result--cell').hasClass('dead')).toBe(true)
      expect(wrapper.containsMatchingElement(<img src="image" />)).toBe(true)
    })
    test('<ResultCell image="image" status="death by attack"', () => {
      const wrapper = mountWithIntl(
        <ResultCell
          image="image"
          status={village.AgentStatus.deathByAttack}
          type={ResultCellType.avatarImage}
        />
      )

      expect(wrapper.find('.result--cell').exists()).toBe(true)
      expect(wrapper.find('.result--cell').hasClass('result--cell--avatarImage')).toBe(true)
      expect(wrapper.find('.result--cell').hasClass('dead')).toBe(true)
      expect(wrapper.containsMatchingElement(<img src="image" />)).toBe(true)
    })
    test('<ResultCell image="image" status="death by fear"', () => {
      const wrapper = mountWithIntl(
        <ResultCell
          image="image"
          status={village.AgentStatus.deathByFear}
          type={ResultCellType.avatarImage}
        />
      )

      expect(wrapper.find('.result--cell').exists()).toBe(true)
      expect(wrapper.find('.result--cell').hasClass('result--cell--avatarImage')).toBe(true)
      expect(wrapper.find('.result--cell').hasClass('dead')).toBe(true)
      expect(wrapper.containsMatchingElement(<img src="image" />)).toBe(true)
    })
    test('<ResultCell image="image" status="unnatural death"', () => {
      const wrapper = mountWithIntl(
        <ResultCell
          image="image"
          status={village.AgentStatus.unnaturalDeath}
          type={ResultCellType.avatarImage}
        />
      )

      expect(wrapper.find('.result--cell').exists()).toBe(true)
      expect(wrapper.find('.result--cell').hasClass('result--cell--avatarImage')).toBe(true)
      expect(wrapper.find('.result--cell').hasClass('dead')).toBe(true)
      expect(wrapper.containsMatchingElement(<img src="image" />)).toBe(true)
    })
  })
  describe('type="roleImage"', () => {
    test('status="alive"', () => {
      const wrapper = mountWithIntl(
        <ResultCell
          image="image"
          name="name"
          status={village.AgentStatus.alive}
          type={ResultCellType.roleImage}
        />
      )

      expect(wrapper.find('.result--cell').exists()).toBe(true)
      expect(wrapper.find('.result--cell').hasClass('result--cell--roleImage')).toBe(true)
      expect(wrapper.find('.result--cell').hasClass('dead')).toBe(false)
      expect(wrapper.find('.result--cell--roleImage--image').exists()).toBe(true)
      expect(wrapper.find('.result--cell--roleImage--name').text()).toBe('name')
    })
    test('status="dead"', () => {
      const wrapper = mountWithIntl(
        <ResultCell
          image="image"
          name="name"
          status={village.AgentStatus.dead}
          type={ResultCellType.roleImage}
        />
      )

      expect(wrapper.find('.result--cell').exists()).toBe(true)
      expect(wrapper.find('.result--cell').hasClass('result--cell--roleImage')).toBe(true)
      expect(wrapper.find('.result--cell').hasClass('dead')).toBe(true)
      expect(wrapper.find('.result--cell--roleImage--image').exists()).toBe(true)
      expect(wrapper.find('.result--cell--roleImage--name').text()).toBe('name')
    })
    test('status="death by execution"', () => {
      const wrapper = mountWithIntl(
        <ResultCell
          image="image"
          name="name"
          status={village.AgentStatus.deathByExecution}
          type={ResultCellType.roleImage}
        />
      )

      expect(wrapper.find('.result--cell').exists()).toBe(true)
      expect(wrapper.find('.result--cell').hasClass('result--cell--roleImage')).toBe(true)
      expect(wrapper.find('.result--cell').hasClass('dead')).toBe(true)
      expect(wrapper.find('.result--cell--roleImage--image').exists()).toBe(true)
      expect(wrapper.find('.result--cell--roleImage--name').text()).toBe('name')
    })
    test('status="death by attack"', () => {
      const wrapper = mountWithIntl(
        <ResultCell
          image="image"
          name="name"
          status={village.AgentStatus.deathByAttack}
          type={ResultCellType.roleImage}
        />
      )

      expect(wrapper.find('.result--cell').exists()).toBe(true)
      expect(wrapper.find('.result--cell').hasClass('result--cell--roleImage')).toBe(true)
      expect(wrapper.find('.result--cell').hasClass('dead')).toBe(true)
      expect(wrapper.find('.result--cell--roleImage--image').exists()).toBe(true)
      expect(wrapper.find('.result--cell--roleImage--name').text()).toBe('name')
    })
    test('status="death by fear"', () => {
      const wrapper = mountWithIntl(
        <ResultCell
          image="image"
          name="name"
          status={village.AgentStatus.deathByFear}
          type={ResultCellType.roleImage}
        />
      )

      expect(wrapper.find('.result--cell').exists()).toBe(true)
      expect(wrapper.find('.result--cell').hasClass('result--cell--roleImage')).toBe(true)
      expect(wrapper.find('.result--cell').hasClass('dead')).toBe(true)
      expect(wrapper.find('.result--cell--roleImage--image').exists()).toBe(true)
      expect(wrapper.find('.result--cell--roleImage--name').text()).toBe('name')
    })
    test('status="unnatural death"', () => {
      const wrapper = mountWithIntl(
        <ResultCell
          image="image"
          name="name"
          status={village.AgentStatus.unnaturalDeath}
          type={ResultCellType.roleImage}
        />
      )

      expect(wrapper.find('.result--cell').exists()).toBe(true)
      expect(wrapper.find('.result--cell').hasClass('result--cell--roleImage')).toBe(true)
      expect(wrapper.find('.result--cell').hasClass('dead')).toBe(true)
      expect(wrapper.find('.result--cell--roleImage--image').exists()).toBe(true)
      expect(wrapper.find('.result--cell--roleImage--name').text()).toBe('name')
    })
  })
  describe('type="caption"', () => {
    test('loser(1)', () => {
      const wrapper = mountWithIntl(
        <ResultCell
          id="Result.summary.loser(1)"
          loserTeam={new Set([village.Team.villager])}
          type={ResultCellType.caption}
        />
      )

      expect(wrapper.find('.result--cell').exists()).toBe(true)
      expect(wrapper.find('.result--cell').hasClass('result--cell--caption')).toBe(true)
      expect(wrapper.find('.result--cell--caption--team')).toHaveLength(1)
      expect(wrapper.find('.result--cell').text()).toBe('敗者（村人陣営）')
    })
    test('loser(2)', () => {
      const wrapper = mountWithIntl(
        <ResultCell
          id="Result.summary.loser(2)"
          loserTeam={new Set([village.Team.villager, village.Team.werehamster])}
          type={ResultCellType.caption}
        />
      )

      expect(wrapper.find('.result--cell').exists()).toBe(true)
      expect(wrapper.find('.result--cell').hasClass('result--cell--caption')).toBe(true)
      expect(wrapper.find('.result--cell--caption--team')).toHaveLength(2)
      expect(wrapper.find('.result--cell').text()).toBe('敗者（村人陣営，ハムスター人間陣営）')
    })
    test('winner', () => {
      const wrapper = mountWithIntl(
        <ResultCell
          id="Result.summary.winner"
          type={ResultCellType.caption}
          winnerTeam={village.Team.villager}
        />
      )

      expect(wrapper.find('.result--cell').exists()).toBe(true)
      expect(wrapper.find('.result--cell').hasClass('result--cell--caption')).toBe(true)
      expect(wrapper.find('.result--cell--caption--team')).toHaveLength(1)
      expect(wrapper.find('.result--cell').text()).toBe('勝者（村人陣営）')
    })
  })
  describe('type="summary"', () => {
    test('audience', () => {
      const wrapper = mountWithIntl(
        <ResultCell
          id="Result.summary.description(audience)"
          myTeam=""
          type={ResultCellType.summary}
          winnerTeam={village.Team.werewolf}
        />
      )

      expect(wrapper.find('.result--cell').exists()).toBe(true)
      expect(wrapper.find('.result--cell').hasClass('result--cell--summary')).toBe(true)
      expect(wrapper.find('.result--cell--summary--team')).toHaveLength(1)
      expect(wrapper.find('.result--cell').text()).toBe('人狼陣営が勝利しました')
    })
    test('player', () => {
      const wrapper = mountWithIntl(
        <ResultCell
          id="Result.summary.description(player, lose)"
          myTeam={village.Team.villager}
          type={ResultCellType.summary}
          winnerTeam={village.Team.werewolf}
        />
      )

      expect(wrapper.find('.result--cell').exists()).toBe(true)
      expect(wrapper.find('.result--cell').hasClass('result--cell--summary')).toBe(true)
      expect(wrapper.find('.result--cell--summary--team')).toHaveLength(2)
      expect(wrapper.find('.result--cell').text()).toBe('村人陣営のあなたは敗北しました。（人狼陣営の勝利）')
    })
  })
  describe('type="name"', () => {
    test('status="alive"', () => {
      const wrapper = mountWithIntl(
        <ResultCell
          status={village.AgentStatus.alive}
          text="text"
          type={ResultCellType.name}
        />
      )

      expect(wrapper.find('.result--cell').exists()).toBe(true)
      expect(wrapper.find('.result--cell').hasClass('result--cell--name')).toBe(true)
      expect(wrapper.find('.result--cell').hasClass('dead')).toBe(false)
      expect(wrapper.text()).toBe('text')
    })
    test('status="dead"', () => {
      const wrapper = mountWithIntl(
        <ResultCell
          status={village.AgentStatus.dead}
          text="text"
          type={ResultCellType.name}
        />
      )

      expect(wrapper.find('.result--cell').exists()).toBe(true)
      expect(wrapper.find('.result--cell').hasClass('result--cell--name')).toBe(true)
      expect(wrapper.find('.result--cell').hasClass('dead')).toBe(true)
      expect(wrapper.text()).toBe('text')
    })
    test('status="death by execution"', () => {
      const wrapper = mountWithIntl(
        <ResultCell
          status={village.AgentStatus.deathByExecution}
          text="text"
          type={ResultCellType.name}
        />
      )

      expect(wrapper.find('.result--cell').exists()).toBe(true)
      expect(wrapper.find('.result--cell').hasClass('result--cell--name')).toBe(true)
      expect(wrapper.find('.result--cell').hasClass('dead')).toBe(true)
      expect(wrapper.text()).toBe('text')
    })
    test('status="death by attack"', () => {
      const wrapper = mountWithIntl(
        <ResultCell
          status={village.AgentStatus.deathByAttack}
          text="text"
          type={ResultCellType.name}
        />
      )

      expect(wrapper.find('.result--cell').exists()).toBe(true)
      expect(wrapper.find('.result--cell').hasClass('result--cell--name')).toBe(true)
      expect(wrapper.find('.result--cell').hasClass('dead')).toBe(true)
      expect(wrapper.text()).toBe('text')
    })
    test('status="death by fear"', () => {
      const wrapper = mountWithIntl(
        <ResultCell
          status={village.AgentStatus.deathByFear}
          text="text"
          type={ResultCellType.name}
        />
      )

      expect(wrapper.find('.result--cell').exists()).toBe(true)
      expect(wrapper.find('.result--cell').hasClass('result--cell--name')).toBe(true)
      expect(wrapper.find('.result--cell').hasClass('dead')).toBe(true)
      expect(wrapper.text()).toBe('text')
    })
    test('status="unnatural death"', () => {
      const wrapper = mountWithIntl(
        <ResultCell
          status={village.AgentStatus.unnaturalDeath}
          text="text"
          type={ResultCellType.name}
        />
      )

      expect(wrapper.find('.result--cell').exists()).toBe(true)
      expect(wrapper.find('.result--cell').hasClass('result--cell--name')).toBe(true)
      expect(wrapper.find('.result--cell').hasClass('dead')).toBe(true)
      expect(wrapper.text()).toBe('text')
    })
  })
  describe('type="status"', () => {
    test('status="alive', () => {
      const wrapper = mountWithIntl(
        <ResultCell
          status={village.AgentStatus.alive}
          type={ResultCellType.status}
        />
      )

      expect(wrapper.find('.result--cell').exists()).toBe(true)
      expect(wrapper.find('.result--cell').hasClass('result--cell--status')).toBe(true)
      expect(wrapper.find('.result--cell').hasClass('dead')).toBe(false)
      expect(wrapper.text()).toBe('生存')
    })
    test('status="dead', () => {
      const wrapper = mountWithIntl(
        <ResultCell
          status={village.AgentStatus.dead}
          type={ResultCellType.status}
        />
      )

      expect(wrapper.find('.result--cell').exists()).toBe(true)
      expect(wrapper.find('.result--cell').hasClass('result--cell--status')).toBe(true)
      expect(wrapper.find('.result--cell').hasClass('dead')).toBe(true)
      expect(wrapper.text()).toBe('死亡')
    })
    test('status="death by execution', () => {
      const wrapper = mountWithIntl(
        <ResultCell
          status={village.AgentStatus.deathByExecution}
          type={ResultCellType.status}
        />
      )

      expect(wrapper.find('.result--cell').exists()).toBe(true)
      expect(wrapper.find('.result--cell').hasClass('result--cell--status')).toBe(true)
      expect(wrapper.find('.result--cell').hasClass('dead')).toBe(true)
      expect(wrapper.text()).toBe('処刑死')
    })
    test('status="death by attack', () => {
      const wrapper = mountWithIntl(
        <ResultCell
          status={village.AgentStatus.deathByAttack}
          type={ResultCellType.status}
        />
      )

      expect(wrapper.find('.result--cell').exists()).toBe(true)
      expect(wrapper.find('.result--cell').hasClass('result--cell--status')).toBe(true)
      expect(wrapper.find('.result--cell').hasClass('dead')).toBe(true)
      expect(wrapper.text()).toBe('襲撃死')
    })
    test('status="death by fear', () => {
      const wrapper = mountWithIntl(
        <ResultCell
          status={village.AgentStatus.deathByFear}
          type={ResultCellType.status}
        />
      )

      expect(wrapper.find('.result--cell').exists()).toBe(true)
      expect(wrapper.find('.result--cell').hasClass('result--cell--status')).toBe(true)
      expect(wrapper.find('.result--cell').hasClass('dead')).toBe(true)
      expect(wrapper.text()).toBe('恐怖死')
    })
    test('status="unnatural death', () => {
      const wrapper = mountWithIntl(
        <ResultCell
          status={village.AgentStatus.unnaturalDeath}
          type={ResultCellType.status}
        />
      )

      expect(wrapper.find('.result--cell').exists()).toBe(true)
      expect(wrapper.find('.result--cell').hasClass('result--cell--status')).toBe(true)
      expect(wrapper.find('.result--cell').hasClass('dead')).toBe(true)
      expect(wrapper.text()).toBe('不審死')
    })
  })
  describe('type="avatarName"', () => {
    test('status="alive"', () => {
      const wrapper = mountWithIntl(
        <ResultCell
          status={village.AgentStatus.alive}
          text="text"
          type={ResultCellType.avatarName}
        />
      )

      expect(wrapper.find('.result--cell').exists()).toBe(true)
      expect(wrapper.find('.result--cell').hasClass('result--cell--avatarName')).toBe(true)
      expect(wrapper.find('.result--cell').hasClass('dead')).toBe(false)
      expect(wrapper.text()).toBe('text')
    })
    test('status="dead"', () => {
      const wrapper = mountWithIntl(
        <ResultCell
          status={village.AgentStatus.dead}
          text="text"
          type={ResultCellType.avatarName}
        />
      )

      expect(wrapper.find('.result--cell').exists()).toBe(true)
      expect(wrapper.find('.result--cell').hasClass('result--cell--avatarName')).toBe(true)
      expect(wrapper.find('.result--cell').hasClass('dead')).toBe(true)
      expect(wrapper.text()).toBe('text')
    })
    test('status="death by execution"', () => {
      const wrapper = mountWithIntl(
        <ResultCell
          status={village.AgentStatus.deathByExecution}
          text="text"
          type={ResultCellType.avatarName}
        />
      )

      expect(wrapper.find('.result--cell').exists()).toBe(true)
      expect(wrapper.find('.result--cell').hasClass('result--cell--avatarName')).toBe(true)
      expect(wrapper.find('.result--cell').hasClass('dead')).toBe(true)
      expect(wrapper.text()).toBe('text')
    })
    test('status="death by attack"', () => {
      const wrapper = mountWithIntl(
        <ResultCell
          status={village.AgentStatus.deathByAttack}
          text="text"
          type={ResultCellType.avatarName}
        />
      )

      expect(wrapper.find('.result--cell').exists()).toBe(true)
      expect(wrapper.find('.result--cell').hasClass('result--cell--avatarName')).toBe(true)
      expect(wrapper.find('.result--cell').hasClass('dead')).toBe(true)
      expect(wrapper.text()).toBe('text')
    })
    test('status="death by fear"', () => {
      const wrapper = mountWithIntl(
        <ResultCell
          status={village.AgentStatus.deathByFear}
          text="text"
          type={ResultCellType.avatarName}
        />
      )

      expect(wrapper.find('.result--cell').exists()).toBe(true)
      expect(wrapper.find('.result--cell').hasClass('result--cell--avatarName')).toBe(true)
      expect(wrapper.find('.result--cell').hasClass('dead')).toBe(true)
      expect(wrapper.text()).toBe('text')
    })
    test('status="unnatural death"', () => {
      const wrapper = mountWithIntl(
        <ResultCell
          status={village.AgentStatus.unnaturalDeath}
          text="text"
          type={ResultCellType.avatarName}
        />
      )

      expect(wrapper.find('.result--cell').exists()).toBe(true)
      expect(wrapper.find('.result--cell').hasClass('result--cell--avatarName')).toBe(true)
      expect(wrapper.find('.result--cell').hasClass('dead')).toBe(true)
      expect(wrapper.text()).toBe('text')
    })
  })
})

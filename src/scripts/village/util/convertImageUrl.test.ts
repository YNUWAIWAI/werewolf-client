import {convertImageUrl} from './convertImageUrl'

test('50x50 -> 120x120', () => {
  expect(
    convertImageUrl('https://werewolf.world/image/0.3/character_icons/50x50/a_50x50.png', '120x120')
  ).toBe(
    'https://werewolf.world/image/0.3/character_icons/120x120/a_120x120.png'
  )
})
test('50x50 -> 120x120, size is defaultValue', () => {
  expect(
    convertImageUrl('https://werewolf.world/image/0.3/character_icons/50x50/a_50x50.png')
  ).toBe(
    'https://werewolf.world/image/0.3/character_icons/120x120/a_120x120.png'
  )
})
test('50x50 -> 150x150', () => {
  expect(
    convertImageUrl('https://werewolf.world/image/0.3/character_icons/50x50/a_50x50.png', '150x150')
  ).toBe(
    'https://werewolf.world/image/0.3/character_icons/150x150/a_150x150.png'
  )
})
test('not much', () => {
  expect(
    convertImageUrl('https://werewolf.world/image/0.3/')
  ).toBe(
    'https://werewolf.world/image/0.3/'
  )
})

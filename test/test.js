import test from 'ava'

test('Initial test', async t => {
  const p = Promise.resolve('test')

  t.is(await p, 'test')
})

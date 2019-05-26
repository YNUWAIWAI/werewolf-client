describe('App', () => {
  test('default', async () => {
    await page.goto('http://localhost:9009/iframe.html?id=village-app--default')
    await page.evaluateHandle('document.fonts.ready')
    await page.waitFor(1000)
    const image = await page.screenshot()

    expect(image).toMatchImageSnapshot()
  })
  test('prologue', async () => {
    await page.goto('http://localhost:9009/iframe.html?id=village-app--prologue')
    await page.evaluateHandle('document.fonts.ready')
    await page.waitFor(1000)
    const image = await page.screenshot()

    expect(image).toMatchImageSnapshot()
  })
  test('morning (without limited chat)', async () => {
    await page.goto('http://localhost:9009/iframe.html?id=village-app--morning-without-limited-chat')
    await page.evaluateHandle('document.fonts.ready')
    await page.waitFor(1000)
    const image = await page.screenshot()

    expect(image).toMatchImageSnapshot()
  })
  test('morning (with limited chat)', async () => {
    await page.goto('http://localhost:9009/iframe.html?id=village-app--morning-with-limited-chat')
    await page.evaluateHandle('document.fonts.ready')
    await page.waitFor(1000)
    const image = await page.screenshot()

    expect(image).toMatchImageSnapshot()
  })
  test('day', async () => {
    await page.goto('http://localhost:9009/iframe.html?id=village-app--day')
    await page.evaluateHandle('document.fonts.ready')
    await page.waitFor(1000)
    const image = await page.screenshot()

    expect(image).toMatchImageSnapshot()
  })
  test('night(seer)', async () => {
    await page.goto('http://localhost:9009/iframe.html?id=village-app--night-seer')
    await page.evaluateHandle('document.fonts.ready')
    await page.waitFor(1000)
    const image = await page.screenshot()

    expect(image).toMatchImageSnapshot()
  })
  test('night(villager)', async () => {
    await page.goto('http://localhost:9009/iframe.html?id=village-app--night-villager')
    await page.evaluateHandle('document.fonts.ready')
    await page.waitFor(1000)
    const image = await page.screenshot()

    expect(image).toMatchImageSnapshot()
  })
  test('grave', async () => {
    await page.goto('http://localhost:9009/iframe.html?id=village-app--grave')
    await page.evaluateHandle('document.fonts.ready')
    await page.waitFor(1000)
    const image = await page.screenshot()

    expect(image).toMatchImageSnapshot()
  })
  test('result', async () => {
    await page.goto('http://localhost:9009/iframe.html?id=village-app--result')
    await page.evaluateHandle('document.fonts.ready')
    await page.waitFor(1000)
    const image = await page.screenshot()

    expect(image).toMatchImageSnapshot()
  })
})

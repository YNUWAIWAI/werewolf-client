describe('App', () => {
  test('default', async () => {
    await page.goto('http://localhost:9009/iframe.html?id=village-app--default')
    await page.evaluateHandle('document.fonts.ready')
    await page.waitFor(1000)
    const image = await page.screenshot()

    expect(image).toMatchImageSnapshot({
      failureThreshold: 0.1,
      failureThresholdType: 'percent'
    })
  })
  test('prologue', async () => {
    await page.goto('http://localhost:9009/iframe.html?id=village-app--prologue')
    await page.evaluateHandle('document.fonts.ready')
    await page.waitFor(1000)
    const image = await page.screenshot()

    expect(image).toMatchImageSnapshot({
      failureThreshold: 0.28,
      failureThresholdType: 'percent'
    })
  })
  test('morning (without limited chat)', async () => {
    await page.goto('http://localhost:9009/iframe.html?id=village-app--morning-without-limited-chat')
    await page.evaluateHandle('document.fonts.ready')
    await page.waitFor(1000)
    const image = await page.screenshot()

    expect(image).toMatchImageSnapshot({
      failureThreshold: 0.44,
      failureThresholdType: 'percent'
    })
  })
  test('morning (with limited chat)', async () => {
    await page.goto('http://localhost:9009/iframe.html?id=village-app--morning-with-limited-chat')
    await page.evaluateHandle('document.fonts.ready')
    await page.waitFor(1000)
    const image = await page.screenshot()

    expect(image).toMatchImageSnapshot({
      failureThreshold: 0.58,
      failureThresholdType: 'percent'
    })
  })
  test('day', async () => {
    await page.goto('http://localhost:9009/iframe.html?id=village-app--day')
    await page.evaluateHandle('document.fonts.ready')
    await page.waitFor(1000)
    const image = await page.screenshot()

    expect(image).toMatchImageSnapshot({
      failureThreshold: 0.75,
      failureThresholdType: 'percent'
    })
  })
  test('night(seer)', async () => {
    await page.goto('http://localhost:9009/iframe.html?id=village-app--night-seer')
    await page.evaluateHandle('document.fonts.ready')
    await page.waitFor(1000)
    const image = await page.screenshot()

    expect(image).toMatchImageSnapshot({
      failureThreshold: 0.57,
      failureThresholdType: 'percent'
    })
  })
  test('night(villager)', async () => {
    await page.goto('http://localhost:9009/iframe.html?id=village-app--night-villager')
    await page.evaluateHandle('document.fonts.ready')
    await page.waitFor(1000)
    const image = await page.screenshot()

    expect(image).toMatchImageSnapshot({
      failureThreshold: 0.43,
      failureThresholdType: 'percent'
    })
  })
  test('grave', async () => {
    await page.goto('http://localhost:9009/iframe.html?id=village-app--grave')
    await page.evaluateHandle('document.fonts.ready')
    await page.waitFor(1000)
    const image = await page.screenshot()

    expect(image).toMatchImageSnapshot({
      failureThreshold: 0.45,
      failureThresholdType: 'percent'
    })
  })
  test('result', async () => {
    await page.goto('http://localhost:9009/iframe.html?id=village-app--result')
    await page.evaluateHandle('document.fonts.ready')
    await page.waitFor(1000)
    const image = await page.screenshot()

    expect(image).toMatchImageSnapshot({
      failureThreshold: 0.45,
      failureThresholdType: 'percent'
    })
  })
})

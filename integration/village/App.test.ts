describe('App', () => {
  test('default', async () => {
    await page.goto('http://localhost:9009/iframe.html?id=village-app--default')
    await page.waitFor(1000)
    const image = await page.screenshot()

    expect(image).toMatchImageSnapshot({
      failureThreshold: 18,
      failureThresholdType: 'pixel'
    })
  })
  test('prologue', async () => {
    await page.goto('http://localhost:9009/iframe.html?id=village-app--prologue')
    await page.waitFor(1000)
    const image = await page.screenshot()

    expect(image).toMatchImageSnapshot({
      failureThreshold: 18,
      failureThresholdType: 'pixel'
    })
  })
  test('morning (without limited chat)', async () => {
    await page.goto('http://localhost:9009/iframe.html?id=village-app--morning-without-limited-chat')
    await page.waitFor(1000)
    const image = await page.screenshot()

    expect(image).toMatchImageSnapshot({
      failureThreshold: 18,
      failureThresholdType: 'pixel'
    })
  })
  test('morning (with limited chat)', async () => {
    await page.goto('http://localhost:9009/iframe.html?id=village-app--morning-with-limited-chat')
    await page.waitFor(1000)
    const image = await page.screenshot()

    expect(image).toMatchImageSnapshot({
      failureThreshold: 18,
      failureThresholdType: 'pixel'
    })
  })
  test('day', async () => {
    await page.goto('http://localhost:9009/iframe.html?id=village-app--day')
    await page.waitFor(1000)
    const image = await page.screenshot()

    expect(image).toMatchImageSnapshot({
      failureThreshold: 18,
      failureThresholdType: 'pixel'
    })
  })
  test('night(seer)', async () => {
    await page.goto('http://localhost:9009/iframe.html?id=village-app--night-seer')
    await page.waitFor(1000)
    const image = await page.screenshot()

    expect(image).toMatchImageSnapshot({
      failureThreshold: 18,
      failureThresholdType: 'pixel'
    })
  })
  test('night(villager)', async () => {
    await page.goto('http://localhost:9009/iframe.html?id=village-app--night-villager')
    await page.waitFor(1000)
    const image = await page.screenshot()

    expect(image).toMatchImageSnapshot({
      failureThreshold: 18,
      failureThresholdType: 'pixel'
    })
  })
  test('grave', async () => {
    await page.goto('http://localhost:9009/iframe.html?id=village-app--grave')
    await page.waitFor(1000)
    const image = await page.screenshot()

    expect(image).toMatchImageSnapshot({
      failureThreshold: 18,
      failureThresholdType: 'pixel'
    })
  })
  test('result', async () => {
    await page.goto('http://localhost:9009/iframe.html?id=village-app--result')
    await page.waitFor(1000)
    const image = await page.screenshot()

    expect(image).toMatchImageSnapshot({
      failureThreshold: 18,
      failureThresholdType: 'pixel'
    })
  })
})

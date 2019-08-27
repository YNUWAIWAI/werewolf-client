describe('App', () => {
  test('default', async () => {
    await page.goto('http://localhost:9009/iframe.html?id=village-app--default', {
      waitUntil: 'networkidle2'
    })
    await page.evaluateHandle(() => {}, 'document.fonts.ready')
    const image = await page.screenshot()

    expect(image).toMatchImageSnapshot({
      failureThreshold: 0,
      failureThresholdType: 'pixel'
    })
  })
  test('prologue', async () => {
    await page.goto('http://localhost:9009/iframe.html?id=village-app--prologue', {
      waitUntil: 'networkidle2'
    })
    await page.evaluateHandle(() => {}, 'document.fonts.ready')
    const image = await page.screenshot()

    expect(image).toMatchImageSnapshot({
      failureThreshold: 0,
      failureThresholdType: 'pixel'
    })
  })
  test('morning (without limited chat)', async () => {
    await page.goto('http://localhost:9009/iframe.html?id=village-app--morning-without-limited-chat', {
      waitUntil: 'networkidle2'
    })
    await page.evaluateHandle(() => {}, 'document.fonts.ready')
    const image = await page.screenshot()

    expect(image).toMatchImageSnapshot({
      failureThreshold: 0,
      failureThresholdType: 'pixel'
    })
  })
  test('morning (with limited chat)', async () => {
    await page.goto('http://localhost:9009/iframe.html?id=village-app--morning-with-limited-chat', {
      waitUntil: 'networkidle2'
    })
    await page.evaluateHandle(() => {}, 'document.fonts.ready')
    const image = await page.screenshot()

    expect(image).toMatchImageSnapshot({
      failureThreshold: 0,
      failureThresholdType: 'pixel'
    })
  })
  test('day', async () => {
    await page.goto('http://localhost:9009/iframe.html?id=village-app--day', {
      waitUntil: 'networkidle2'
    })
    await page.evaluateHandle(() => {}, 'document.fonts.ready')
    const image = await page.screenshot()

    expect(image).toMatchImageSnapshot({
      failureThreshold: 0,
      failureThresholdType: 'pixel'
    })
  })
  test('night(seer)', async () => {
    await page.goto('http://localhost:9009/iframe.html?id=village-app--night-seer', {
      waitUntil: 'networkidle2'
    })
    await page.evaluateHandle(() => {}, 'document.fonts.ready')
    const image = await page.screenshot()

    expect(image).toMatchImageSnapshot({
      failureThreshold: 0,
      failureThresholdType: 'pixel'
    })
  })
  test('night(villager)', async () => {
    await page.goto('http://localhost:9009/iframe.html?id=village-app--night-villager', {
      waitUntil: 'networkidle2'
    })
    await page.evaluateHandle(() => {}, 'document.fonts.ready')
    const image = await page.screenshot()

    expect(image).toMatchImageSnapshot({
      failureThreshold: 0,
      failureThresholdType: 'pixel'
    })
  })
  test('grave', async () => {
    await page.goto('http://localhost:9009/iframe.html?id=village-app--grave', {
      waitUntil: 'networkidle2'
    })
    await page.evaluateHandle(() => {}, 'document.fonts.ready')
    const image = await page.screenshot()

    expect(image).toMatchImageSnapshot({
      failureThreshold: 0,
      failureThresholdType: 'pixel'
    })
  })
  test('result', async () => {
    await page.goto('http://localhost:9009/iframe.html?id=village-app--result', {
      waitUntil: 'networkidle2'
    })
    await page.evaluateHandle(() => {}, 'document.fonts.ready')
    const image = await page.screenshot()

    expect(image).toMatchImageSnapshot({
      failureThreshold: 0,
      failureThresholdType: 'pixel'
    })
  })
})

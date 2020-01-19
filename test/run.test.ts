import { run } from '../src'

describe('src/run', () => {
  it('run success', async () => {
    const r = await run('echo hello world', {
      cwd: './',
    })
    expect(r).toBe('hello world\n')
  })
  it('run error', async () => {
    try {
      await run('curl http://127.0.0.1:1234', {
        cwd: './',
      })
    } catch (e) {
      expect(e).toBeInstanceOf(Error)
    }
  })
})

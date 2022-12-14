import { service } from 'service/service'
import { env, config } from './config'

describe('/', () => {
  let app = null
  beforeAll(async () => {
    app = (
      await service({
        config,
        env,
      })
    ).app
  })

  beforeEach(async () => {
    jest.clearAllMocks()
  })

  it('GET returns 200', async () => {
    const response = await app.inject({
      method: 'GET',
      url: '/',
    })
    expect(response.statusCode).toEqual(200)
    const payload: { date: Date; works: boolean } = JSON.parse(response.payload)
    expect(payload).toMatchSnapshot({ date: expect.any(String), works: true })
  })

  // it('POST returns 404', async () => {
  //   const response = await server.inject({ method: 'POST', url: '/status' })
  //   expect(response.statusCode).toEqual(404)
  //   expect(response.payload).toMatchSnapshot()
  // })
})
